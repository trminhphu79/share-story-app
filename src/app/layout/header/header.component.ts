import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Collapse,
  Dropdown,
  initTE,
  Ripple
} from "tw-elements";
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: "tmp-header",
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  router = inject(Router)

  isLogin: boolean = true;

  ngOnInit() {

  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    initTE({ Collapse, Dropdown, Ripple });
  }


  signin() {
    this.router.navigate(['/signin'])
  }
}