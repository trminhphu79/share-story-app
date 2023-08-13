import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@utils/components/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tmp-top-trending',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatIconModule
  ],
  templateUrl: './top-trending.component.html',
  styleUrls: ['./top-trending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopTrendingComponent {
  @Input() dataSource: any[]|null = []
}
