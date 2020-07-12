import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CalendarDatasource} from "../shared/calendar/model/calendar-datasource.model";
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../../core/store/index.reducers";
import {
  durationProgress,
  selectChosenCalendarCell,
  selectCurrentDailyReportTime,
  selectMergedCurrentDailyReports
} from "../../core/store/reports/daily-reports.selectors";
import {CalendarCell} from "../shared/calendar/model/calendar-cell.model";
import {MergedDailyReport} from "../../core/store/reports/model/merged-daily-report.model";
import {ChooseCalendarCell, IncreaseStudies} from "../../core/store/reports/daily-reports.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-field-service',
  templateUrl: './field-service.component.html',
  styleUrls: ['./field-service.component.scss']
})
export class FieldServiceComponent implements OnInit
{
  public chosenTime$: Observable<CalendarDatasource>;
  public mergedDailyReports$: Observable<MergedDailyReport>;
  public chosenCalendarCell$: Observable<CalendarCell>;
  public durationProgress$: Observable<{ monthly: number, monthlyPhrase: string, yearly: number, yearlyPhrase: string }>;
  public isYearDurationOverview: boolean;
  public isMenuOpened: boolean;

  constructor(private store: Store<ApplicationState>, private router: Router)
  {
  }

  public ngOnInit(): void
  {
    this.chosenTime$ = this.store.pipe(select(selectCurrentDailyReportTime));
    this.chosenCalendarCell$ = this.store.pipe(select(selectChosenCalendarCell));
    this.mergedDailyReports$ = this.store.pipe(select(selectMergedCurrentDailyReports));
    this.durationProgress$ = this.store.pipe(select(durationProgress));
  }

  public chooseDay(calendarCell: CalendarCell)
  {
    this.store.dispatch(ChooseCalendarCell({cell: calendarCell}));
  }

  public navigateTo(routeName: string)
  {
    this.router.navigate([routeName]);
  }

  public increaseStudies()
  {
    this.store.dispatch(IncreaseStudies());
  }
}
