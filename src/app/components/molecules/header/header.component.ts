import { Component } from '@angular/core';
import { HamburgerMenuComponent } from '../../organisms/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  imports: [HamburgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
