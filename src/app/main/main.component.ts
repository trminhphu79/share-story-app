import { ChangeDetectionStrategy, Component } from '@angular/core';
import modules from './main.import';

@Component({
  selector: "tmp-main",
  standalone: true,
  imports: [...modules],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
