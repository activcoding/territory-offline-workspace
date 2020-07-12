import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {combineLatest} from "rxjs";
import {take} from "rxjs/operators";
import * as Pako from 'pako';
import {ApplicationState} from "../store/index.reducers";
import {selectAllDailyReports} from "../store/reports/daily-reports.selectors";
import {Plugins} from "@capacitor/core";
import {selectSettings} from "../store/settings/settings.selectors";

@Injectable({providedIn: "root"})
export class DataExportService
{
  constructor(private store: Store<ApplicationState>)
  {
  }

  public async getFileName(): Promise<string>
  {
    const today = new Date();
    const minutes = today.getMinutes().toString(10).padStart(2, "0");
    return `field-companion backup ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}-${minutes}.fieldcompanion`;
  }

  public async exportAllAndShare()
  {
    const data = await this.exportAll();
    const fileName = await this.getFileName();

    await Plugins.FileSharer.share({
      filename: fileName,
      base64Data: btoa(data),
      contentType: "text/plain;charset=utf-8",
      android: {
        chooserTitle: "Field Companion excel export"
      }
    }).catch(error => console.error("File sharing failed", error.message));
  }

  private async exportAll()
  {
    const allData = await combineLatest([
      this.store.pipe(select(selectAllDailyReports), take(1)),
      this.store.pipe(select(selectSettings), take(1)),
    ]).toPromise();

    const allDataDictionary = {
      reports: allData[0],
      monthlyGoal: allData[1].monthlyGoal,
      yearlyGoal: allData[1].yearlyGoal,
      type: "field-companion-backup"
    };

    const gzippedData = Pako.gzip(JSON.stringify(allDataDictionary), {to: "string"});

    return gzippedData;
  }
}
