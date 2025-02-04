import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {DatabaseService} from '../../services/db/database.service';
import {
  BulkImportDrawings,
  BulkImportDrawingsSuccess,
  DeleteDrawing,
  DeleteDrawingSuccess,
  LoadDrawings,
  LoadDrawingsSuccess,
  SaveDrawingPrintAlignmentConfiguration,
  UpdateStatusOfDrawings,
  UpsertDrawing,
  UpsertDrawingSuccess
} from './drawings.actions';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../index.reducers';
import {selectDrawingById} from './drawings.selectors';
import {Drawing, HASHED_DRAWING_TABLE_NAME, TimedEntity} from "@territory-offline-workspace/shared-interfaces";
import {TerritoryMapsService} from "../../services/territory/territory-maps.service";

@Injectable({providedIn: 'root'})
export class DrawingsEffects
{
  private loadDrawings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadDrawings),
      map((action) => this.database.load(HASHED_DRAWING_TABLE_NAME)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((drawings: Drawing[]) => LoadDrawingsSuccess({drawings: drawings}))
    )
  );

  private upsertDrawing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpsertDrawing),
      map((action) => this.database.upsert(HASHED_DRAWING_TABLE_NAME, action.drawing)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      map((drawing: Drawing) => UpsertDrawingSuccess({drawing: drawing}))
    )
  );

  private bulkImportDrawings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BulkImportDrawings),
      map((action) => this.database.bulkUpsert(HASHED_DRAWING_TABLE_NAME, action.drawings)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((drawings: Drawing[]) => BulkImportDrawingsSuccess({drawings: drawings}))
    )
  );

  private savePrintConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaveDrawingPrintAlignmentConfiguration),
      concatMap(action => of(action).pipe(
        withLatestFrom(this.store.pipe(select(selectDrawingById, action.drawingId)))
      )),
      map(([action, drawing]) => UpsertDrawing({drawing: {...drawing, printConfiguration: action.config}}))
    )
  );

  private deleteDrawing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteDrawing),
      map((action) => this.database.delete(HASHED_DRAWING_TABLE_NAME, action.drawing)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      map((drawing: Drawing) => DeleteDrawingSuccess({drawing: drawing}))
    )
  );

  /* Others */
  public updateStatusOfDrawings$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateStatusOfDrawings),
    tap(() => this.territoryMapsService.updateDrawingStatus())
  ), {dispatch: false})

  constructor(private actions$: Actions,
              private store: Store<ApplicationState>,
              private database: DatabaseService,
              private territoryMapsService: TerritoryMapsService)
  {
  }
}
