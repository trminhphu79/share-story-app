import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import modules from './main.import';
import { Router } from '@angular/router';
import { BaseComponent } from '../utils/base/base.component';

@Component({
  selector: "tmp-main",
  standalone: true,
  imports: [...modules],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor() {

  }
  ngOnInit() { }
}


