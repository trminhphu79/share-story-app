import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from '../input-search';
import { UserAvatarComponent } from '../user-avatar';
import {
  Collapse,
  Dropdown,
  initTE,
  Ripple
} from "tw-elements";
import { IUser } from '@utils/schema';
@Component({
  selector: 'tmp-header-logged',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    UserAvatarComponent,
    InputSearchComponent
  ],
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLoggedComponent {

  @Input()
  public user!: IUser|null;
  @Output()
  public requestSearchChanges = new EventEmitter<string>();
  @Output()
  public requestLogout = new EventEmitter();
  @Output()
  public backHome = new EventEmitter();

  constructor() { }
  ngOnInit() {
    initTE({ Collapse, Dropdown, Ripple });
  }
}
