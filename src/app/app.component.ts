import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appConfigure } from './app.configure';

@Component({
  selector: 'tmp-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  static bootstrap(config?: any) {
    bootstrapApplication(this, appConfigure).catch(err => console.error(err));
  }
}