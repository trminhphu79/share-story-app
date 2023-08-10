import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  Input as InputELement,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'tmp-login',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  @Input()
  public formGroup!: FormGroup;
  @Output()
  public requestSignIn = new EventEmitter();
  @Output()
  public requestGoogleOAuth = new EventEmitter();

  ngOnInit(){
    initTE({ InputELement, Ripple });
  }

  public signinWithGoogle() {
    this.requestGoogleOAuth.emit()
  }

  public signin() {
    this.requestGoogleOAuth.emit()
  }
}
