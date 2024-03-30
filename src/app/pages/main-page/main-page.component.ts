import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HotelsComponent} from '../../components/hotels/hotels.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HotelsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
