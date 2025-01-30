import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/molecules/background/background.component';
import { HeaderComponent } from '../../components/molecules/header/header.component';

@Component({
  selector: 'app-offers',
  imports: [BackgroundComponent, HeaderComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {

}
