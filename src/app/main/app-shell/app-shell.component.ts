import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@utils/base';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from '@utils/components/loader';

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
  router = inject(Router);

  ngOnInit() {
    this.verifyAccessToken();
  }

  verifyAccessToken() {
    if (this.appState.me) {
      this.restartApp();
      this.navToRoot();
    }
    else {
      this.userService.getItem$().subscribe({
        next: res => {
          if (res) {
            const user = res;
            this.appState.me = user;
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
    this.router.navigate(['/']);
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
    this.router.navigate(['signin']);
  }

  navToHome() {
    this.router.navigate(['/']);
  }

  restartApp() {
    this.clearAppStorage();
    this.syncAppState();
    this.navToHome();
  }
}
