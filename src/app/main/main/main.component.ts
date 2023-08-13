import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../utils/base/base.component';
import { initFlowbite } from 'flowbite';
import { takeUntil } from 'rxjs';
import { Effect } from '@utils/state';
import { MODULES, PROVIDERS } from './constant';
import { MainService } from './service';

@Component({
  selector: "tmp-main",
  standalone: true,
  imports: MODULES,
  providers: PROVIDERS,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends BaseComponent {

  private _service = inject(MainService);

  trendingList$ = this._service.trendingList$;

  constructor() {
    super();
  }
  ngOnInit() {
    const appState = this.stateService.currentState;
    appState.ready = true;
    this.stateService.commit(appState);
    initFlowbite();
    this.registerCoreLayer();
  }

  override registerCoreLayer(): void {
    this._service.getTrendingList();
    this.stateService.stateChanges$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (changes) => {
        if (changes instanceof Effect) {
          this.changeDetectorRef.detectChanges();
        }
      }
    });
  }

  public start() {
    this.router.navigate(['signin/in']);
  }
}


