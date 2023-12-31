import { IUser } from '@utils/schema';
import { Injectable, inject } from "@angular/core";
import { HttpService } from "@utils/http"
import { GLOBAL_SETTINGS } from "@global-settings";

@Injectable({ providedIn: 'root' })
export class UserService extends HttpService {
    readonly API_URL = `${GLOBAL_SETTINGS.restURL}/api/${GLOBAL_SETTINGS.apiVersion}/`;

    getItem$() {
        return this.getItem<IUser>(`${this.API_URL}me`) 
    }

    submitItem$(params: any) {
        return this.submitItem(`${this.API_URL}/users`, params)
    }
}