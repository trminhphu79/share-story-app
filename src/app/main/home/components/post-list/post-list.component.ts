import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@utils/components/card';

@Component({
  selector: 'tmp-post-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  @Input() item:any
}
