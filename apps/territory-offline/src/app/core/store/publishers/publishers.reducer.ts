import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Publisher} from './model/publisher.model';
import {
  BulkImportPublishersSuccess,
  BulkUpsertPublisherSuccess,
  DeletePublisherSuccess,
  LoadPublishersSuccess,
  UpsertPublisherSuccess
} from './publishers.actions';

export const publishersAdapter = createEntityAdapter<Publisher>();

export interface PublishersState extends EntityState<Publisher>
{
}

const initialState: PublishersState = publishersAdapter.getInitialState();

const publishersReducer = createReducer(
  initialState,
  on(LoadPublishersSuccess, (state, action) => publishersAdapter.addAll(action.publishers, state)),
  on(UpsertPublisherSuccess, (state, action) => publishersAdapter.upsertOne(action.publisher, state)),
  on(BulkUpsertPublisherSuccess, (state, action) => publishersAdapter.upsertMany(action.publisher, state)),
  on(BulkImportPublishersSuccess, (state, action) => publishersAdapter.upsertMany(action.publishers, state)),
  on(DeletePublisherSuccess, (state, action) => publishersAdapter.removeOne(action.publisher.id, state))
);

export function publishersReducerFunction(state: PublishersState | undefined, action: Action)
{
  return publishersReducer(state, action);
}
