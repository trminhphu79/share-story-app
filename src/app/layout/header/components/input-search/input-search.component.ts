import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Ripple,
  initTE,
} from "tw-elements";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, tap } from 'rxjs';

@Component({
  selector: 'tmp-input-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent {
  @Output() onEnter = new EventEmitter();

  searchControl = new FormControl();
  ngOnInit() {
    initTE({ Ripple });
  }

  enter() {
    console.log('enter....')
    this.onEnter.emit(this.searchControl.value)
  }
}
