import { Injectable } from "@angular/core";
import { Store } from "src/app/utils/store";

@Injectable()
export class MainStore {
    private _store = new Store<any[]>([]);

    trendingList$ = this._store.select((state) => state);

    update(value: any) {
        this._store.update((state) => value)
    }
}