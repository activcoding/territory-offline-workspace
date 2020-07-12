import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {TimedEntity} from '../../model/db/timed-entity.interface';
import {from, of} from 'rxjs';
import {DatabaseService} from '../../services/db/database.service';
import {
  BulkUpsertAssignments,
  BulkUpsertAssignmentsSuccess,
  DeleteAssignment, DeleteAssignmentsByTerritory, DeleteAssignmentsByTerritorySuccess,
  DeleteAssignmentSuccess,
  LoadAssignments,
  LoadAssignmentsSuccess,
  UpsertAssignment,
  UpsertAssignmentSuccess
} from './assignments.actions';
import {Assignment} from './model/assignment.model';
import {BulkImportAssignments, BulkImportAssignmentsSuccess} from '../assignments/assignments.actions';
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../index.reducers";
import {selectAssignmentsByTerritoryId} from "./assignments.selectors";

@Injectable({providedIn: 'root'})
export class AssignmentsEffects
{
  private readonly assignmentsCollectionName = btoa('assignments');

  private loadAssignments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAssignments),
      map((action) => this.database.load(this.assignmentsCollectionName)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((assignments: Assignment[]) => LoadAssignmentsSuccess({assignments: assignments}))
    )
  );

  private upsertAssignment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpsertAssignment),
      map((action) => this.database.upsert(this.assignmentsCollectionName, action.assignment)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      map((assignment: Assignment) => UpsertAssignmentSuccess({assignment: assignment}))
    )
  );

  private bulkUpsertAssignment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BulkUpsertAssignments),
      map((action) => this.database.bulkUpsert(this.assignmentsCollectionName, action.assignments)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((assignments: Assignment[]) => BulkUpsertAssignmentsSuccess({assignments: assignments}))
    )
  );

  private bulkImportAssignments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BulkImportAssignments),
      map((action) => this.database.bulkUpsert(this.assignmentsCollectionName, action.assignments)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((assignments: Assignment[]) => BulkImportAssignmentsSuccess({assignments: assignments}))
    )
  );

  private deleteAssignment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteAssignment),
      map((action) => this.database.delete(this.assignmentsCollectionName, action.assignment)),
      switchMap((promise: Promise<TimedEntity>) => from(promise)),
      map((assignment: Assignment) => DeleteAssignmentSuccess({assignment: assignment}))
    )
  );

  private deleteAssignmentsByTerritory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteAssignmentsByTerritory),
      concatMap(action => of(action).pipe(
        withLatestFrom(this.store.pipe(select(selectAssignmentsByTerritoryId, action.territoryId)))
      )),
      map(([action, assignments]: [any, any]) => this.database.bulkDelete(this.assignmentsCollectionName, assignments)),
      switchMap((promise: Promise<TimedEntity[]>) => from(promise)),
      map((assignments: Assignment[]) => DeleteAssignmentsByTerritorySuccess({assignments: assignments}))
    )
  );

  constructor(private actions$: Actions,
              private store: Store<ApplicationState>,
              private database: DatabaseService)
  {
  }
}
