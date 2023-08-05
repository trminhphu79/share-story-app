import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tmp-signin',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent {

  ngOnInit() {
    console.log('onInit...')
    initTE(
      {
        Input,
        Ripple
      }
    )
  }
}
