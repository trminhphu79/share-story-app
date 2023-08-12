import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  Input as InputELement,
  Ripple,
  initTE,
} from "tw-elements";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'tmp-login',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  @Input()
  public formGroup!: FormGroup;
  @Output()
  public submitSignIn = new EventEmitter();
  @Output()
  public requestGoogleOAuth = new EventEmitter();
  @Output()
  public requestRegister = new EventEmitter();

  ngAfterViewInit() {
    initTE({ InputELement, Ripple });
  }
}
