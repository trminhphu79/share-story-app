import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IUser } from "@utils/schema";
import { Observable } from "rxjs";
import { LocalStorageService } from "./localStorage.service";

@Injectable({ providedIn: "root" })
export class AuthService {
    private _localStorageService = inject(LocalStorageService);

    public getToken(): string | null {
        return this._localStorageService.getItem('accessToken');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return !!token;
    }
}