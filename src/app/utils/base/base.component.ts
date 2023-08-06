import { Location } from '@angular/common';
import { Component, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAppState } from '@app-state';
import { StateService } from '../state/state.service';
import { Effect } from '../state/state.schema';
import { AuthService, SessionService, UserService } from '@utils/service';


@Component({
    selector: 'base',
    standalone: true,
    template: ''
})
export abstract class BaseComponent implements OnDestroy {
    protected stateService = inject(StateService<IAppState>);
    protected changeDetectorRef = inject(ChangeDetectorRef);
    protected location = inject(Location);

    protected userService = inject(UserService);
    protected sessionService = inject(SessionService);

    protected destroy$ = new Subject<void>();
    protected subscriptions = new Map<string, Subscription>();

    appState: IAppState;


    private _isLoading = false;

    get isLoading() { return this._isLoading; }

    set isLoading(value: boolean) {
        this._isLoading = value;
        this.changeDetectorRef.detectChanges();
    }

    constructor() {
        this.appState = this.stateService.currentState;
        this.stateService.stateChanges$.pipe(takeUntil(this.destroy$)).subscribe({
            next: (changes) => {
                console.log('changes..', changes)
                if (changes instanceof Effect) {
                    this.appState = changes.newState;
                    this.changeDetectorRef.detectChanges();
                }

                else
                    this.appState = changes;
            }
        });
    }

    registerCoreLayer() { }

    registerSignal() { }

    registerResizeObserver() { }

    trackByFn(index: number) {
        return index;
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
