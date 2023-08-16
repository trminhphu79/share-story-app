import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  initTE,
  Ripple
} from "tw-elements";
import { ITab } from './interface';
import { DEFAULT_TABS } from './constant';
import { activeFunc } from './utils/idex';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'tmp-tabs',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Output() public tabChanges = new EventEmitter<string>();
  @Output() public requestAddTab = new EventEmitter();

  private _tabs: ITab[] = DEFAULT_TABS;
  @Input()
  public set tabs(value: ITab[]) {
    this._tabs = DEFAULT_TABS.concat(value);
  }

  get tabs() {
    return this._tabs
  }

  ngOnInit() {
    initTE(Ripple);
  }

  public selectTab(id: string) {
    activeFunc(id, this.tabs, () => {
      this.tabChanges.emit(id)
    });
  }

  public addTab() {
    this.requestAddTab.emit();
  }
}
