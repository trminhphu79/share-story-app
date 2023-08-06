import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IUser } from "@utils/schema";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {

    http = inject(HttpClient)

    getUser(): Observable<IUser> {
        return this.http.get<IUser>('http://localhost:4201/api/v1/me')
    }

    logout(): Observable<any> {
        return this.http.post('http://localhost:4201/api/v1/me/logout', null)
    }

    login(payload: { email: string, password: string }) {
        return this.http.post("http://localhost:4201/api/v1/sessions", payload)
    }
}