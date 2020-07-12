import {Component, OnInit} from '@angular/core';
import {GrapesImporterService} from "../../core/services/grapes-importer.service";
import {TranslateService} from "@ngx-translate/core";
import {AppDatabaseService} from "../../core/services/database/app-database.service";
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../../core/store/index.reducers";
import {selectSettings} from "../../core/store/settings/settings.selectors";
import {Observable} from "rxjs";
import {SettingsState} from "../../core/store/settings/settings.reducer";
import {Plugins} from "@capacitor/core";
import {Router} from "@angular/router";
import {LocalNotificationsService} from "../../core/services/local-notifications.service";
import {take, tap} from "rxjs/operators";
import {UpsertSettings, UpsertSettingsSuccess} from "../../core/store/settings/settings.actions";
import {Actions, ofType} from "@ngrx/effects";
import {ExcelDataExportService} from "../../core/services/excel-export.service";
import {DataExportService} from "../../core/services/data-export.service";
import {DataImportService} from "../../core/services/data-import.service";

const {Share, Browser} = Plugins;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit
{
  public settings$: Observable<SettingsState>;
  public readyToFactoryReset: boolean;

  constructor(private grapesImporterService: GrapesImporterService,
              private databaseService: AppDatabaseService,
              private store: Store<ApplicationState>,
              private actions$: Actions,
              private router: Router,
              private dataExportService: DataExportService,
              private dataImportService: DataImportService,
              private excelDataExportService: ExcelDataExportService,
              private localNotificationsService: LocalNotificationsService,
              private translateService: TranslateService)
  {
  }

  public ngOnInit(): void
  {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  public importDataFromGrapes(event)
  {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length)
    {
      const [file] = event.target.files;
      reader.onload = () => this.grapesImporterService.importData(reader.result as any);
      reader.readAsArrayBuffer(file);
    }
  }

  public importBackup(event)
  {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length)
    {
      const [file] = event.target.files;

      if (file.name.endsWith(".fieldcompanion"))
      {
        reader.onload = () => this.dataImportService.importBackup(reader.result as any);
        reader.readAsArrayBuffer(file);
      }
      else
      {
          alert(this.translateService.instant("settings.noBackupFile"));
      }
    }
  }

  public exportBackup()
  {
    this.dataExportService.exportAllAndShare();
  }

  public bugReport()
  {
    window.location.href = "mailto:info@territory-offline.com";
  }

  public shareUserId(userId: string, userName: string)
  {
    Share.share({
      dialogTitle: this.translateService.instant("settings.sendYourId"),
      title: this.translateService.instant("title" + " " + userName),
      text: userId,
    });
  }

  public async openTerritoryOfflineWebsite()
  {
    await Browser.open({url: 'https://territory-offline.com/'});
  }

  public factoryReset()
  {
    const reallyReset = confirm(this.translateService.instant("settings.actions.reallyReset"));

    if (reallyReset)
    {
      this.databaseService.clearAll().then(() => document.location.href = 'index.html');
    }
  }

  public exportToExcel()
  {
    this.excelDataExportService.exportReports();
  }

  public async requestLocalNotificationPermission(event)
  {
    this.store.pipe(
      select(selectSettings),
      take(1),
      tap(async settings =>
      {
        let enabled = false;
        let result = null;

        if (event)
        {
          result = await this.localNotificationsService.askForLocalNotifications();
          enabled = !!result && !!result.granted;
        }

        this.store.dispatch(UpsertSettings({
          settings: {
            ...settings,
            monthlyReminder: enabled
          }
        }));

        await this.actions$.pipe(ofType(UpsertSettingsSuccess), take(1)).toPromise();

        await this.localNotificationsService.handleMonthlyReminder();
      })
    ).subscribe();
  }
}
