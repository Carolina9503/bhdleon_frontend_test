import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../../models/apiModels';

@Component({
  selector: 'app-hamburger-menu',
  imports: [RouterLink],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss',
})
export class HamburgerMenuComponent {
  isOpen = false;
  token: string = '';
  userData: User = { name: '', lastName: '', photo: '' };

  menuItems = [
    {
      path: '/mis-productos',
      icon: 'images/icon_my_products_green.svg',
      title: 'Mis productos',
    },
    {
      path: '/transacciones',
      icon: 'images/icon_transactions_green.svg',
      title: 'Transacciones',
    },
    {
      path: '/ofertas',
      icon: 'images/icon_offers_green.svg',
      title: 'Ofertas',
    },
    {
      path: '/configuracion',
      icon: 'images/icon_config_green.svg',
      title: 'Configuración',
    },
  ];

  extraItems = [
    { label: 'Contacto', icon: 'images/icon_contact.svg' },
    { label: 'Sucursales', icon: 'images/icon_branches.svg' },
  ];

  constructor(private userService: UserService) {
    this.token = localStorage.getItem('token') ?? '';
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token ?? '').subscribe((user) => {
      this.userData = user;
      console.log('user :>> ', this.userData);
    });
  }
}
