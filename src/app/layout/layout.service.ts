import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class LayoutService {
    private _toggleSideNav$ = new Subject<boolean>();
    toggleSideNav$ = this._toggleSideNav$.asObservable();
}