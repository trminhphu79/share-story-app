import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { GLOBAL_SETTINGS } from "@global-settings";
import { getGoogleOAuthURL } from "../function";

@Injectable({ providedIn: 'root' })
export class SessionService extends HttpService {
    readonly API_URL = `${GLOBAL_SETTINGS.restURL}/api/${GLOBAL_SETTINGS.apiVersion}/sessions/`;

    submitItem$(params: any) {
        return this.submitItem(`${this.API_URL}`, params)
    }

    deleteItems$(id: string) {
        return this.deleteItem(`${this.API_URL}` + id)
    }

    logout$(params = null) {
        return this.submitItem(`${this.API_URL}logout`, params)
    }

    oauthGoogle() {
        window.open(getGoogleOAuthURL(), '_self')
    }
}