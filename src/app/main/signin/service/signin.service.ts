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

@Injectable()
export class SignInService {

    private _userClient: UserClient = inject(UserClient);
    private _sessionClient: SessionClient = inject(SessionClient);
    private _router: Router = inject(Router);
    private _localStorage: LocalStorageService = inject(LocalStorageService);
    private _stateService: StateService<IAppState> = inject(StateService)

    public signIn(params: IUserSignIn) {
        this._sessionClient.submitItem$(params).subscribe({
            next: ({ accessToken, refreshToken }) => {
                if (accessToken && refreshToken) {
                    this._localStorage.setItem("accessToken", accessToken);
                    this._localStorage.setItem("refreshToken", refreshToken);
                    this._router.navigate(['shell']);
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
        return this._userClient.submitItem$(params).subscribe({
            next: (res: IUser) => {
                if (res) {
                    const appState = this._stateService.currentState;
                    appState.me = res;
                    this._stateService.commit(appState);
                    this._router.navigate([""])
                }
            },
            error: (error) => {
                console.log(error);
            }
        }
        )
    }

    public oauthGoogle(){
        window.open(getGoogleOAuthURL(), '_self')
    }
}