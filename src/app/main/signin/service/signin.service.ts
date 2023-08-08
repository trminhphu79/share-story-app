import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "@utils/service";
import { IUserSignIn } from "../signin.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class SignInService {
    private readonly _sessionService: SessionService = inject(SessionService);
    private readonly _router: Router = inject(Router);

    signIn(params: IUserSignIn) {
        this._sessionService.submitItem$(params).subscribe({
            next: (result) => {
                if (result) {
                    this._router.navigate(['/trang-chu']);
                }
            },
            error: (error) => {
                console.log(error);
                if (error instanceof HttpErrorResponse && error.status == 401) {
                }
            }
        })
    }
}