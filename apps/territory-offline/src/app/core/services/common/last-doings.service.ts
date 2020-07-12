import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ApplicationState} from "../../store/index.reducers";
import {Actions, ofType} from "@ngrx/effects";
import {map, take, tap} from "rxjs/operators";
import {LastDoingActionsEnum} from "../../store/last-doings/model/last-doing-actions.enum";
import {DeleteLastDoing, UpsertLastDoing} from "../../store/last-doings/last-doings.actions";
import {uuid4} from "@capacitor/core/dist/esm/util";
import {LastDoing} from "../../store/last-doings/model/last-doing.model";
import {selectLastDoingsForTidyUp} from "../../store/last-doings/last-doings.selectors";

@Injectable({
  providedIn: 'root'
})
export class LastDoingsService
{
  private readonly MAX_LAST_DOINGS_COUNT = 12;

  constructor(private store: Store<ApplicationState>,
              private actions$: Actions)
  {
  }

  public tidyUpLastDoings()
  {
    this.store.pipe(
      select(selectLastDoingsForTidyUp),
      take(1),
      map((lastDoings) => lastDoings.slice(this.MAX_LAST_DOINGS_COUNT, lastDoings.length)),
      tap((lastDoings: LastDoing[]) => lastDoings.forEach(ld => this.store.dispatch(DeleteLastDoing({lastDoing: ld}))))
    ).subscribe()
  }

  public createLastDoing(action: LastDoingActionsEnum, label: string)
  {
    this.create({
      id: uuid4(),
      action: action,
      label: label,
      creationTime: new Date()
    });
  }

  public createLastDoingAfter(successActionType: any, action: LastDoingActionsEnum, label: string)
  {
    this.actions$
      .pipe(
        ofType(successActionType),
        take(1),
        tap(() => this.create({
          id: uuid4(),
          action: action,
          label: label,
          creationTime: new Date()
        }))
      ).subscribe();
  }

  private create(lastDoing: LastDoing)
  {
    this.store.dispatch(UpsertLastDoing({lastDoing: lastDoing}));
  }
}
