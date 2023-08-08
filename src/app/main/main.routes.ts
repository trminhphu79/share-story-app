import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: "",
        title: "Trang chủ",
        loadComponent() {
            return import('./home').then((c) => c.HomeComponent)
        }
    }
]