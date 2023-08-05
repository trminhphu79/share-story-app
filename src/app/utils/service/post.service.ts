import { Injectable } from "@angular/core";
import { GLOBAL_SETTINGS } from "@global-settings";
import { HttpService } from "@shared/http";

@Injectable({ providedIn: 'root' })
export class PostService extends HttpService {
    BASE_URL = `${GLOBAL_SETTINGS.restURL}/api/${GLOBAL_SETTINGS.apiVersion}/post/`

    submitItem$(params) {
        return this.submitItem(`${this.BASE_URL}create`, params)
    }
}