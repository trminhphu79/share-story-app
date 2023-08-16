import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent, TabsComponent } from './components';
import { PostClient } from './client';
import { PostStore } from './store';
import { PostService } from './service';
import { map } from 'rxjs';
import { CardComponent } from '@utils/components/card';
import { BaseComponent } from '@utils/base';

@Component({
  selector: 'tmp-home',
  standalone: true,
  imports: [
    CommonModule,
    PostListComponent,
    CardComponent,
    TabsComponent
  ],
  providers: [PostStore, PostClient, PostService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends BaseComponent {
  private _service = inject(PostService);
  public items$ = this._service.postList$.pipe(
    map((result) => result.slice(0, 10)),
  )

  constructor() {
    super();
    this._service.sync();
  }
}
