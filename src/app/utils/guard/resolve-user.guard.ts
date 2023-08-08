import { inject } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { IAppState } from "@app-state";
import { UserService } from "@utils/service";
import { StateService } from "@utils/state";
import { of, tap } from "rxjs";

export const userResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const stateService = inject(StateService<IAppState>);
        const router = inject(Router)
        if (!stateService.currentState.me) {
            return of(true)
        }
        return inject(UserService).getItem$().pipe(
            tap((result: any) => {
                stateService.currentState.me = result;
                stateService.currentState.ready = true;
                stateService.commit(stateService.currentState);
                router.navigate(['trang-chu']);
            })
        )
    };