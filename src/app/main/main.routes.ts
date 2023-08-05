import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: "",
        loadComponent() {
            return import('./home').then((c) => c.HomeComponent)
        }
    }
]