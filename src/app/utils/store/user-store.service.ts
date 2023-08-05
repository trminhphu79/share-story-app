import { Injectable } from "@angular/core";
import { Store } from "./store";


export interface IUser {
    _id: string;
    email: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v: number;
    session?: string;
    iat?: number;
    exp?: number;
    picture?: string
}

@Injectable({ providedIn: 'root' })
export class UserStore {
    private _store = new Store<IUser | null>(null);

    userState$ = this._store.select((state) => state);

    initialize(initialLists: IUser): void {
        this._store.update(_ => initialLists);
    }

    updateUser(newUser: IUser | null): void {
        this._store.update((_) => newUser);
    }
}