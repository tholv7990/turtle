import { Directive, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { StateStore } from './state.store';

@Directive()
export class StateComponent<T extends Object> implements OnDestroy {

    private readonly _store: StateStore<T>;

    public get state() {
        return this._store.state;
    }

    public get vm$(): Observable<T> {
        return this._store.state$;
    }

    protected get vm(): T {
        return this._store.state;
    }

    constructor(state: T)
    constructor(state: T, store?: StateStore<T>) {
        this._store = store ?? new StateStore(null, Object.getPrototypeOf(this).constructor.name);
        this._store.setState(state);
    }

    protected setState(state: Partial<T>) {
        setTimeout(() =>
            this._store.setState(state)
        );
    }

    protected setStateDirect(state: Partial<T>) {
        this._store.setState(state)
    }

    protected createSelector<I>(selector: (state: T) => I) {
        return this._store.createSelector(selector);
    }

    public ngOnDestroy(): void {
        this?._store?.dispose();
    }
}


