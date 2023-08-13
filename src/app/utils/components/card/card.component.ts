import { ChangeDetectionStrategy, Component, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { TCardItem } from './card.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'tmp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
  ]
})
export class CardComponent {
  @Input()
  public shadow: boolean = true;
  @Input()
  public item!: TCardItem;
  @Input()
  public index!: number;
  @Input()
  public titleTemplate: TemplateRef<any> | null = null;
  @Input()
  public descriptionTemplate: TemplateRef<any> | null = null;
  @Input()
  public authorTemplate: TemplateRef<any> | null = null;
  @Input()
  public thumbnailTemplate: TemplateRef<any> | null = null;
  @Input()
  public createAtTemplate: TemplateRef<any> | null = null;
}
