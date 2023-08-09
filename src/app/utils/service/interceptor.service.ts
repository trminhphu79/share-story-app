// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
// import { Injectable, inject } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable, tap } from "rxjs";

// @Injectable()
// export class WithCredentialsInterceptor implements HttpInterceptor {

//     router = inject(Router);
    
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         request = request.clone({
//             withCredentials: true
//         });

//         return next.handle(request).pipe(
//             tap({
//                 next: (result) => { },
//                 error: (error) => {
//                     if (error instanceof HttpErrorResponse) {
//                         switch (error.status) {
//                             case 403: {
//                                 console.log(error)
//                                 break;
//                             }

//                             case 401: {
//                                 console.log(error)
//                                 break;
//                             }
//                         }
//                     }
//                 }
//             })
//         )
//     }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the authentication token from AuthService
    const token = this.authService.getToken();

    // Clone the request and add the token as an Authorization header
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }

    // If no token, proceed with the original request
    return next.handle(req);
  }
}
