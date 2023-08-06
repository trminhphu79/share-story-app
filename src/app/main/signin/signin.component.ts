import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '@utils/base';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignInService } from './service/signin.service';
import { getGoogleOAuthURL } from '@utils/function';

@Component({
  selector: 'tmp-signin',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent extends BaseComponent {

  private _service: SignInService = inject(SignInService);
  public formGroup!: FormGroup;

  public ngOnInit() {
    this._initForm();
  }

  public ngAfterViewInit() {
    this.registerCoreLayer();
  }

  override registerCoreLayer(): void {
    initTE({ Input, Ripple });
  }

  private _initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }



  /**
   * @Description Login with account
   */
  signin() {
    console.log(this.formGroup.value)
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return
    }

    this._service.signIn(this.formGroup.value)
  }


  /**
   * @Description Signin with google account
   */
  signinWithGoogle(){
    window.open(getGoogleOAuthURL(), '_self')
  }
}
