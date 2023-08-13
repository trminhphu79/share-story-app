import { Injectable, inject } from "@angular/core";
import { SessionService } from "@utils/service";
import { MainStore } from "../store";
import { MainClient } from "../client";

@Injectable()
export class MainService {
    private _sessionService = inject(SessionService);
    private _store = inject(MainStore);
    private _client = inject(MainClient);

    public trendingList$ = this._store.trendingList$;


    public getTrendingList(){
        this._client.getTrendingList$().subscribe((result) => this._store.update(result));
    }
}