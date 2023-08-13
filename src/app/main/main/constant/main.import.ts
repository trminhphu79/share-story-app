import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent, } from "@layout/header";
import { SideNavComponent } from "../../../layout/side-nav";
import { LoaderComponent } from "@utils/components/loader";
import { IntroductionComponent, ScrollToTopComponent, TopTrendingComponent } from "../components";

export const MODULES = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    SideNavComponent,
    LoaderComponent,
    IntroductionComponent,
    ScrollToTopComponent,
    TopTrendingComponent
]