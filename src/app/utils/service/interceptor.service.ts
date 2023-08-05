import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable()
export class WithCredentialsInterceptor implements HttpInterceptor {

    router = inject(Router);
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            withCredentials: true
        });

        return next.handle(request).pipe(
            tap({
                next: (result) => { },
                error: (error) => {
                    if (error instanceof HttpErrorResponse) {
                        switch (error.status) {
                            case 403: {
                                console.log(error)
                                break;
                            }

                            case 401: {
                                console.log(error)
                                break;
                            }
                        }
                    }
                }
            })
        )
    }
}