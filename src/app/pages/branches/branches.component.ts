import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/molecules/header/header.component';
import { BackgroundComponent } from '../../components/molecules/background/background.component';

@Component({
  selector: 'app-branches',
  imports: [HeaderComponent, BackgroundComponent],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent {

}
