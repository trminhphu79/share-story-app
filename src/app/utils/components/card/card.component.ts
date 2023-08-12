import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TCardItem } from './card.model';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';

@Component({
  selector: 'tmp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ]
})
export class CardComponent {
  @Input() item!: TCardItem;
}
