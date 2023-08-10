import { Location } from '@angular/common';
import { Component, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAppState } from '@app-state';
import { StateService } from '../state/state.service';
import { Effect } from '../state/state.schema';
import { AuthService, SessionService, UserService } from '@utils/service';
import { Router } from '@angular/router';


@Component({
    selector: 'base',
    standalone: true,
    template: ''
})
export abstract class BaseComponent implements OnDestroy {
    protected stateService = inject(StateService<IAppState>);
    protected changeDetectorRef = inject(ChangeDetectorRef);
    protected location = inject(Location);

    protected authService = inject(AuthService)
    protected userService = inject(UserService);
    protected sessionService = inject(SessionService);
    protected router = inject(Router);
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
        console.log(this.appState)
        this.stateService.stateChanges$.pipe(takeUntil(this.destroy$)).subscribe({
            next: (changes) => {
                if (changes instanceof Effect) {
                    this.appState = changes.newState;
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

    backHome() {
        this.router.navigate(['trang-chu'])
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
