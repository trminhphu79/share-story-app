import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '@utils/base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './service/signin.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BG_IMAGE_URL, PageType } from './constant';
import { SigninFormBuilder } from './service';
import { SessionClient, UserClient } from './client';

@Component({
  selector: 'tmp-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    SignInService,
    SigninFormBuilder,
    UserClient,
    SessionClient
  ]
})
export class SigninComponent extends BaseComponent {

  private _service: SignInService = inject(SignInService);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _signInFormBuilder = inject(SigninFormBuilder);

  get form(): FormGroup {
    return this._signInFormBuilder.currentForm;
  }

  public type!: PageType;

  get bgImage(): string {
    return this.type == PageType.Login ? BG_IMAGE_URL.LOGIN : BG_IMAGE_URL.REGISTER
  }

  public ngOnInit() {
    if (this._route.snapshot.paramMap.get('type') !== PageType.Login && this._route.snapshot.paramMap.get('type') !== PageType.Register) {
      this.backHome();
      return
    }
    this.type = this._route.snapshot.paramMap.get('type') as PageType;
    this._signInFormBuilder.buildForm(this.type);
    console.log(this.form)
  }

  public ngAfterViewInit() {
    this.registerCoreLayer();
  }

  override registerCoreLayer(): void {
    initTE({ Input, Ripple });
  }

  requestRegister() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    this._service.register(this.form.value);
  }

  requestSignIn() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    this._service.signIn(this.form.value);
  }

  requestGoogleOAuth() {
    this._service.oauthGoogle()
  }
}
