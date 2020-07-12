import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap, tap} from 'rxjs/operators';
import {TimedEntity} from '../../model/db/timed-entity.interface';
import {from} from 'rxjs';
import {DatabaseService} from '../../services/db/database.service';
import {
  BulkImportVisitBans,
  BulkImportVisitBansSuccess,
  DeleteVisitBan,
  DeleteVisitBanSuccess,
  LoadVisitBans,
  LoadVisitBansSuccess,
  UpsertVisitBan,
  UpsertVisitBanSuccess
} from './visit-bans.actions';
import {VisitBan} from './model/visit-ban.model';
import {LastDoingsService} from "../../services/common/last-doings.service";
import {LastDoingActionsEnum} from "../last-doings/model/last-doing-actions.enum";

@Injectable({providedIn: 'root'})
export class VisitBansEffects
{
  private readonly visitBansCollectionName = btoa('visitBans');

  private loadVisitBans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadVisitBans),
      map((action) => this.database.load(this.visitBansCollectionName)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((visitBans: VisitBan[]) => LoadVisitBansSuccess({visitBans: visitBans}))
    )
  );

  private upsertVisitBan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpsertVisitBan),
      map((action) => this.database.upsert(this.visitBansCollectionName, action.visitBan)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      map((visitBan: VisitBan) => UpsertVisitBanSuccess({visitBan: visitBan}))
    )
  );

  private bulkImportVisitBans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BulkImportVisitBans),
      map((action) => this.database.bulkUpsert(this.visitBansCollectionName, action.visitBans)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((visitBans: VisitBan[]) => BulkImportVisitBansSuccess({visitBans: visitBans}))
    )
  );

  private deleteVisitBan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteVisitBan),
      map((action) => this.database.delete(this.visitBansCollectionName, action.visitBan)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      tap((visitBan: VisitBan) => this.lastDoingsService.createLastDoing(LastDoingActionsEnum.DELETE, visitBan.street + " " + visitBan.streetSuffix)),
      map((visitBan: VisitBan) => DeleteVisitBanSuccess({visitBan: visitBan}))
    )
  );

  constructor(private actions$: Actions,
              private database: DatabaseService,
              private lastDoingsService: LastDoingsService) {}
}
