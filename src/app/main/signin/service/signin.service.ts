import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService, SessionService } from "@utils/service";
import { IUserSignIn, IUserSignUp } from "../interface";
import { HttpErrorResponse } from "@angular/common/http";
import { SessionClient, UserClient } from "../client";
import { StateService } from "@utils/state";
import { IAppState } from "@app-state";
import { IUser } from "@utils/schema";
import { getGoogleOAuthURL } from "@utils/function";
import { switchMap, tap } from "rxjs";

@Injectable()
export class SignInService {

    private _userClient: UserClient = inject(UserClient);
    private _sessionClient: SessionClient = inject(SessionClient);
    private _router: Router = inject(Router);
    private _localStorage: LocalStorageService = inject(LocalStorageService);
    private _stateService: StateService<IAppState> = inject(StateService)

    public signIn(params: IUserSignIn) {
        this._sessionClient.submitItem$(params)
            .pipe(
                tap(({ accessToken, refreshToken }) => {
                    if (accessToken && refreshToken) {
                        this.setToken(accessToken, refreshToken);
                    }
                }),
                switchMap(() => {
                    return this._userClient.getItem$();
                })
            )
            .subscribe({
                next: (result: any) => {
                    if (result) {
                        const appState = this._stateService.currentState;
                        appState.me = result
                        this._stateService.commit(appState);
                        this._router.navigate(['']);
                    }
                },
                error: (error) => {
                    console.log(error);
                    if (error instanceof HttpErrorResponse && error.status == 401) {
                    }
                }
            })
    }

    public getUserInfo(){
        this._userClient.getItem$().subscribe({
            next: (result: any) => {
                if (result) {
                    const appState = this._stateService.currentState;
                    appState.me = result
                    this._stateService.commit(appState);
                    this._router.navigate(['']);
                }
            },
            error: (error) => {
                console.log(error);
                if (error instanceof HttpErrorResponse && error.status == 401) {
                }
            }
        })
    }

    public register(params: IUserSignUp) {
        return this._userClient.submitItem$(params)
            .pipe(
                tap((result) => {
                    const appState = this._stateService.currentState;
                    appState.me = result;
                    this._stateService.commit(appState);
                }),
                switchMap((result: IUser) => {
                    return this._sessionClient.submitItem$({ email: result.email, password: params.password })
                })
            )
            .subscribe({
                next: ({ accessToken, refreshToken }) => {
                    if (accessToken && refreshToken) {
                        this.setToken(accessToken, refreshToken);
                        this._router.navigate(['']);
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            }
            )
    }

    public oauthGoogle() {
        window.open(getGoogleOAuthURL(), '_self');
    }

    public setToken(accessToken: string|null, refreshToken: string|null) {
        this._localStorage.setItem("accessToken", accessToken);
        this._localStorage.setItem("refreshToken", refreshToken);
    }
}