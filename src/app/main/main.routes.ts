import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {
        path: "",
        title: "Trang chủ",
        loadComponent() {
            return import('./home').then((c) => c.HomeComponent)
        }
    },
    {
        path: "tim-kiem/:keyword",
        title: "Kết quả tìm kiếm",
        loadComponent() {
            return import('./search-result/search-result.component').then((c) => c.SearchResultComponent)
        },
    }
]