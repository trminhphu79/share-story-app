import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TAuthor } from '../card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmp-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ]
})
export class CardHeaderComponent {
  @Input() author!: TAuthor
}
