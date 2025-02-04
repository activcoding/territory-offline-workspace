import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, UrlSerializer} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../core/store/index.reducers';
import {selectAllTerritories} from '../../core/store/territories/territories.selectors';
import {map, takeUntil, tap} from "rxjs/operators";
import {TerritoryMapsService} from "../../core/services/territory/territory-maps.service";
import {selectCurrentCongregation} from "../../core/store/congregation/congregations.selectors";
import {Territory, TerritoryStatus} from "@territory-offline-workspace/shared-interfaces";
import {Location} from "@angular/common";

@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.scss']
})
export class TerritoriesComponent implements OnInit, OnDestroy
{
  public territories$: Observable<Territory[]>;
  public currentTerritoryId: string;
  public congregationName$: Observable<string>;

  public search: {value: string};
  public currentlyFilteredDrawings: { [id: string]: boolean };

  public mapFilter = {
    inProgress: {show: true, status: TerritoryStatus.IN_PROGRESS},
    done: {show: true, status: TerritoryStatus.DONE},
    assignable: {show: true, status: TerritoryStatus.READY_FOR_ASSIGN},
    overdueAssignation: {show: true, status: TerritoryStatus.DUE},
  };

  public destroyer = new Subject();

  constructor(private router: Router,
              private location: Location,
              private activatedRoute: ActivatedRoute,
              private urlSerializer: UrlSerializer,
              private mapsService: TerritoryMapsService,
              private store: Store<ApplicationState>)
  {
  }

  public ngOnInit(): void
  {
    this.congregationName$ = this.store.pipe(select(selectCurrentCongregation), map(congregation => congregation.name));
    this.territories$ = this.store.pipe(select(selectAllTerritories), map(terr => !terr || terr.length === 0 ? null : terr));
    this.router.navigate([{outlets: {'second-thread': null}}]);
    this.currentTerritorySynchronizer();
  }

  public ngOnDestroy()
  {
    this.mapsService.resetFilterDrawing();
    this.destroyer.next();
    this.destroyer.complete();
  }

  public createTerritory()
  {
    this.router.navigate([{outlets: {'second-thread': ['territory']}}]);
  }

  public editTerritory(territory: Territory)
  {
    this.router.navigate([{outlets: {'second-thread': ['territory', territory.id]}}]);
  }

  public toggleMapFilter(propName: string)
  {
    const tmp = {};
    this.mapFilter[propName].show = !this.mapFilter[propName].show;
    const result = this.mapsService.setFilterDrawingsByStatus(this.mapFilter[propName].status, this.mapFilter[propName].show);

    result.drawings.forEach((drawing) =>
      drawing.featureCollection.features.forEach(feature =>
      {
        if (!result.visibleTerritoryStatus.includes(feature.properties.status))
        {
          tmp[drawing.id] = true;
        }
      })
    );

    this.currentlyFilteredDrawings = tmp;
  }

  public considerClearingSearchValue(event)
  {
    if(event === "")
    {
      this.search = null;
    }
  }

  public currentTerritorySynchronizer()
  {
      this.router
          .events
          .pipe(
              takeUntil(this.destroyer),
              tap(test => {
                  if(test instanceof NavigationEnd)
                  {
                      const urlTree = this.urlSerializer.parse(test.url);

                      if(urlTree.root.children["second-thread"])
                      {
                          this.currentTerritoryId = urlTree.root.children["second-thread"]["segments"][1]?.path;
                      }
                  }
              })
          ).subscribe();
  }
}
