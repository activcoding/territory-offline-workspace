import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ApplicationState } from "../../../core/store/index.reducers";
import { Observable } from "rxjs";
import { TerritoryCard } from "@territory-offline-workspace/shared-interfaces";
import { selectTerritoryCardById } from "../../../core/store/territory-card/territory-card.selectors";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { TranslateService } from "@ngx-translate/core";
import { DataExportService } from "../../../core/services/data-export.service";
import { first } from "rxjs/operators";
import { UpsertTerritoryCard } from "../../../core/store/territory-card/territory-card.actions";

@Component({
  selector: "fc-territory",
  templateUrl: "./territory.component.html",
  styleUrls: ["./territory.component.scss"],
})
export class TerritoryComponent implements OnInit {
  public territoryCard$: Observable<TerritoryCard>;
  public hideMainNavigation = true;

  public constructor(
    private store: Store<ApplicationState>,
    private router: Router,
    private translateService: TranslateService,
    private dataExportService: DataExportService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.territoryCard$ = this.store.pipe(
      select(selectTerritoryCardById, this.activatedRoute.snapshot.params.id)
    );
  }

  public done() {
    this.router.navigate(["/territories"]);
  }

  public async editPopulationCount() {
    const newPopulationCount = prompt(
      this.translateService.instant("territories.provideNewPopulationCount")
    );

    if (!newPopulationCount) {
      return;
    }

    if (isNaN(parseInt(newPopulationCount, 10))) {
      alert(this.translateService.instant("errors.inputShouldBeNumber"));
      return;
    }

    const territoryCard = await this.territoryCard$.pipe(first()).toPromise();

    this.store.dispatch(
      UpsertTerritoryCard({
        territoryCard: {
          ...territoryCard,
          territory: {
            ...territoryCard.territory,
            populationCount: parseInt(newPopulationCount, 10),
          },
        },
      })
    );
  }

  public assignEndTime(territoryCard: TerritoryCard) {
    return moment(territoryCard.assignment.startTime).add(
      territoryCard.estimationInMonths,
      "M"
    );
  }

  public giveBack() {
    this.router.navigate(["return-territory"], {
      relativeTo: this.activatedRoute,
    });
  }
}
