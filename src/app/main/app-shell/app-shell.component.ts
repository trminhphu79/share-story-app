import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@utils/base';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from '@utils/components/loader';
import { Effect } from '@utils/state';
import { PreviousRouteService } from '@utils/service';

@Component({
  selector: 'app-shell',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    LoaderComponent
  ],
  template: `<tmp-loader></tmp-loader>`,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent extends BaseComponent implements OnInit {
  private _router = inject(Router);

  ngOnInit() {
    this.verifyAccessToken();
  }

  verifyAccessToken() {
    if (this.appState.me) {
      this.restartApp();
      this.navToRoot();
    } else {
      this.userService.getItem$().subscribe({
        next: (res: any) => {
          if (res) {
            this.appState.me = res;
            this.appState.ready = true;
            this.stateService.commit(this.appState);
            this.navToRoot();
          } else
            this.restartApp();
        },
        error: () => {
          this.restartApp();
        }
      });
    }
    return;
  }

  navToRoot() {
    this._router.navigate(['trang-chu']);
  }

  clearAppStorage() {
    localStorage.clear();
    this.appState.ready = false;
    this.appState.token = '';
    this.appState.me = null;
  }

  syncAppState() {
    this.stateService.commit(this.appState);
  }

  navToLogin() {
    this._router.navigate(['signin']);
  }

  navToHome() {
    this._router.navigate(['trang-chu']);
  }

  restartApp() {
    this.clearAppStorage();
    this.syncAppState();
    this.navToHome();
  }
}
