import { Injectable, inject } from "@angular/core";
import { PostStore } from "../store";
import { PostClient } from "../client";
import { BehaviorSubject, Subject, distinctUntilChanged } from "rxjs";

@Injectable()
export class PostService {

    postStore = inject(PostStore);
    postClient = inject(PostClient);
    _isLoading$ = new BehaviorSubject<boolean>(false);
    postList$ = this.postStore.postList$;

    sync(): void {
        this._isLoading$.next(true);
        console.log(this.isLoading$)
        this.postClient.getListAll().subscribe(result => {
            setTimeout(() => {
                this.postStore.update(result);
                this._isLoading$.next(false)
            }, 1500)
        })
    }

    get isLoading$() {
        return this._isLoading$.asObservable().pipe(distinctUntilChanged())
    }
}