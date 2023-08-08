import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Collapse,
  Dropdown,
  initTE,
  Ripple
} from "tw-elements";
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BaseComponent } from '@utils/base';
import { takeUntil } from 'rxjs';
import { IUser } from '@utils/schema';
import { Effect } from '@utils/state';
import { UserAvatarComponent } from './components';

@Component({
  selector: "tmp-header",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    UserAvatarComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent implements AfterViewInit {

  router = inject(Router)
  user: IUser | null = this.appState.me;
  ready: boolean = false;
  constructor() {
    super();
  }

  ngOnInit() {
    this.stateService.stateChanges$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        if (result instanceof Effect) {
          this.user = result.newState.me;
          this.ready = result.newState.ready;
          this.changeDetectorRef.detectChanges();
          console.log(this.user)
        }
      }
    })
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    initTE({ Collapse, Dropdown, Ripple });
  }


  signin() {
    this.router.navigate(['/signin'])
  }

  logout(e: any) {
    this.sessionService.logout$().subscribe({
      next: () => {
        this.user = null;
        this.appState.me = null;
        this.stateService.commit(this.appState);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  toggleDropdown() {
    const myDropdown = document.getElementById('customDropdown');
    const myDropdownInstance = new Dropdown(myDropdown);
    myDropdownInstance.show();
    console.log('show...', myDropdownInstance)
  }
}
