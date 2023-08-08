import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import modules from './main.import';
import { Router } from '@angular/router';
import { BaseComponent } from '../utils/base/base.component';

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

  constructor() {
    super()
    if (!this.appState.me) {
      this.userService.getItem$().subscribe({
        next: (res: any) => {
          if (res) {
            this.appState.me = res;
            this.appState.ready = true;
            this.stateService.commit(this.appState);
          }
        },
        error: () => {
        }
      });
    }
  }
  ngOnInit() { }
}


