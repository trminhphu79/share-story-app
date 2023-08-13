import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SignInService } from '@main/signin/service';
import { BaseComponent } from '@utils/base';
import { SessionClient, UserClient } from '@main/signin/client';

@Component({
  selector: 'tmp-signin-success',
  standalone: true,
  imports: [CommonModule],
  template: "",
  providers: [
    SignInService,
    UserClient,
    SessionClient
  ],
  styleUrls: ['./signin-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninSuccessComponent extends BaseComponent {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _service = inject(SignInService);
  constructor() {
    super();
  }

  ngOnInit() {
    this._route.queryParamMap.subscribe(queryParams => {
      this._service.setToken(queryParams.get('accessToken'), queryParams.get('refreshToken'));
      this._service.getUserInfo();
    });
  }
}
