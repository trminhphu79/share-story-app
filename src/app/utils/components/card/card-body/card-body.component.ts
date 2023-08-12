import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TTag } from '../card.model';

@Component({
  selector: 'tmp-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ]
})
export class CardBodyComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: TTag[] = [];

  ngOnInit() {
    console.log(this.tags)
  }
}
