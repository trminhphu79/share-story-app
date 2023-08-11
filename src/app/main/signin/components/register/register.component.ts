import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  Input as InputELement,
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'tmp-register',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  @Input()
  public formGroup!: FormGroup;
  @Output()
  public submitRegister = new EventEmitter();
  @Output()
  public requestSignIn = new EventEmitter();

  ngAfterViewInit() {
    initTE({ InputELement, Ripple });
  }
}
