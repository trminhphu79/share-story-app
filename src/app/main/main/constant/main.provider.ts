import { Provider } from "@angular/core";
import { MainClient } from "../client";
import { MainService } from "../service";
import { MainStore } from "../store";

export const PROVIDERS: Array<Provider> = [
    MainClient,
    MainService,
    MainStore
]