import { OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';



@Injectable()
export class StateStore<T extends object> implements OnDestroy {

    private readonly _state$: BehaviorSubject<T> = new BehaviorSubject(null);
    public readonly state$ = this._state$.asObservable();

    public get state(): T {
        return this._state$.getValue();
    }

    constructor(initialState: T, public readonly name?: string) {
        this._state$.next(initialState);
        // console.log(this.name ? `Store Created - ${this?.name}` : 'Store Created');
    }

    ngOnDestroy(): void {
        this.dispose();
    }

    public setState(partialState: Partial<T>): void {
        const state = Object.assign({}, this.state);
        const newState = Object.assign(state, partialState);
        this._state$.next(newState);
    }

    public createSelector<I>(selector: (state: T) => I) {
        return this.state$
            .pipe(
                map(selector),
                distinctUntilChanged()
            ) as Observable<I>;
    }

    public dispose(): void {
        this?._state$?.complete();
        // console.log(this.name ? `Store Destroyed - ${this?.name}` : 'Store Destroyed');
    }
}

// // Can not find any ref
// export enum ActionStatus {
//     NotStarted,
//     InProgress,
//     Completed,
//     Error
// }

