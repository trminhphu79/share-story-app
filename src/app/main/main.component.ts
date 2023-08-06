import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import modules from './main.import';
import { Router } from '@angular/router';
import { BaseComponent } from '../utils/base/base.component';
import { IUser } from '@utils/schema';

@Component({
  selector: "tmp-main",
  standalone: true,
  imports: [...modules],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends BaseComponent {
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
          console.log('res,..',res)
          if (res) {
            const user = res;
            this.appState.me = user as any;
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
    this.router.navigate(['']);
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

  restartApp() {
    this.clearAppStorage();
    this.syncAppState();
    this.navToRoot();
  }
}
