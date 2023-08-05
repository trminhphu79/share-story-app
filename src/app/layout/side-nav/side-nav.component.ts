import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Sidenav,
  initTE,
  Ripple
} from "tw-elements";
import { LayoutService } from '../layout.service';

@Component({
  selector: 'tmp-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  public sideMode = 'side'
  public layoutService = inject(LayoutService);
  private _sideNavInstance: any;

  ngOnInit() {
  }

  ngAfterViewInit() {
    initTE({ Sidenav, Ripple });
    this._sideNavInstance = Sidenav.getInstance(document.getElementById("sidenav"));
  }

  registerValueChanges() {
    this.layoutService.toggleSideNav$.subscribe({
      next: (result) => {
        this._sideNavInstance.toggleSlim();
      }
    })
  }


  toggle() {
    console.log(this._sideNavInstance)
    this._sideNavInstance.toggleSlim();
  }
}
