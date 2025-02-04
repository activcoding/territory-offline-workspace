import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {
  BulkImportTerritoriesSuccess,
  BulkUpsertTerritorySuccess,
  DeleteTerritorySuccess,
  LoadTerritoriesSuccess,
  UpsertTerritorySuccess
} from './territories.actions';
import {Territory} from "@territory-offline-workspace/shared-interfaces";

export const territoriesAdapter = createEntityAdapter<Territory>();

export interface TerritoriesState extends EntityState<Territory>
{
}

const initialState: TerritoriesState = territoriesAdapter.getInitialState();

const territoriesReducer = createReducer(
  initialState,
  on(LoadTerritoriesSuccess, (state, action) => territoriesAdapter.addMany(action.territories, state)),
  on(UpsertTerritorySuccess, (state, action) => territoriesAdapter.upsertOne(action.territory, state)),
  on(BulkUpsertTerritorySuccess, (state, action) => territoriesAdapter.upsertMany(action.territories, state)),
  on(BulkImportTerritoriesSuccess, (state, action) => territoriesAdapter.upsertMany(action.territories, state)),
  on(DeleteTerritorySuccess, (state, action) => territoriesAdapter.removeOne(action.territory.id, state))
);

export function territoriesReducerFunction(state: TerritoriesState | undefined, action: Action)
{
  return territoriesReducer(state, action);
}
