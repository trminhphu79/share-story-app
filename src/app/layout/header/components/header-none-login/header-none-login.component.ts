import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmp-header-none-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-none-login.component.html',
  styleUrls: ['./header-none-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNoneLoginComponent {

  @Output()
  public requestSignIn = new EventEmitter();
  @Output()
  public requestSignUp = new EventEmitter();
  @Output()
  public backHome = new EventEmitter();
}
