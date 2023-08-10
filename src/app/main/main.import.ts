import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../layout";
import { SideNavComponent } from "../layout/side-nav";
import { LoaderComponent } from "@utils/components/loader";

export default [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    SideNavComponent,
    LoaderComponent
]