import { APP_INITIALIZER, importProvidersFrom } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconRegistryService, WithCredentialsInterceptor } from '@utils/service';
import { ICON_CONFIG_TOKEN, initIconRegistry } from "@utils/function";
import { provideStateConfigs } from "@utils/state";
import { INITIAL_STATE } from "@app-state";
import { userResolver } from "./utils/guard";

export const appConfigure: ApplicationConfig = {
    providers: [
        provideRouter([
            {
                path: "",
                redirectTo: "shell",
                pathMatch: "full",
            },
            {
                path: 'trang-chu',
                // resolve: { data: userResolver },
                loadComponent() {
                    return import('./main').then((m) => m.MainComponent);
                },
                loadChildren() {
                    return import('./main').then((r) => r.mainRoutes)
                },
            },
            {
                path: "shell",
                loadChildren: () => {
                    return import('./main/app-shell/app-shell.routes').then((c) => c.routes)
                }
            },
            {
                path: "signin",
                loadComponent() {
                    return import('./main/signin').then((c) => c.SigninComponent)
                }
            },

        ]),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WithCredentialsInterceptor,
            multi: true
        },
        provideStateConfigs({
            initialState: INITIAL_STATE,
        }),
        importProvidersFrom(
            BrowserAnimationsModule,
            HttpClientModule,
        ),
        IconRegistryService,
        {
            provide: APP_INITIALIZER,
            useFactory: initIconRegistry,
            deps: [IconRegistryService, ICON_CONFIG_TOKEN],
            multi: true
        },
    ]
}