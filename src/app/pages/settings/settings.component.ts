import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/molecules/background/background.component';
import { HeaderComponent } from '../../components/molecules/header/header.component';

@Component({
  selector: 'app-settings',
  imports: [BackgroundComponent, HeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
