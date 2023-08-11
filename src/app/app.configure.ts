import { APP_INITIALIZER, importProvidersFrom } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor, AuthService, IconRegistryService, UserService } from '@utils/service';
import { ICON_CONFIG_TOKEN, initIconRegistry, verifyToken } from "@utils/function";
import { StateService, provideStateConfigs } from "@utils/state";
import { INITIAL_STATE } from "@app-state";
import { userResolver } from "./utils/guard";

export const appConfigure: ApplicationConfig = {
    providers: [
        provideRouter([
            // {
            //     path: "",
            //     redirectTo: "shell",
            //     pathMatch: "full",
            // },
            {
                path: '',
                pathMatch: "full",
                // resolve: { data: userResolver },
                loadComponent() {
                    return import('./main').then((m) => m.MainComponent);
                },
                loadChildren() {
                    return import('./main').then((r) => r.mainRoutes)
                },
            },
            // {
            //     path: "shell",
            //     loadChildren: () => {
            //         return import('./main/app-shell/app-shell.routes').then((c) => c.routes)
            //     }
            // },
            {
                path: "signin/:type",
                loadComponent() {
                    return import('./main/signin').then((c) => c.SigninComponent)
                },
            },

            {
                path: "signin/oauth/success",
                loadComponent() {
                    return import('./main/signin/components').then((c) => c.SigninSuccessComponent)
                },
            },

        ]),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
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
        {
            provide: APP_INITIALIZER,
            useFactory: verifyToken,
            deps: [AuthService, StateService, UserService],
            multi: true
        }
    ]
}