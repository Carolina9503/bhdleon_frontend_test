import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss',
})
export class HamburgerMenuComponent {
  isOpen = false;

  menuItems = [
    { label: 'Mis productos', icon: 'images/icon_my_products_green.svg' },
    { label: 'Transacciones', icon: 'images/icon_transactions_green.svg' },
    { label: 'Ofertas', icon: 'images/icon_offers_green.svg' },
    { label: 'Configuraciones', icon: 'images/icon_config_green.svg' },
  ];

  extraItems = [
    { label: 'Contacto', icon: 'images/icon_contact.svg' },
    { label: 'Sucursales', icon: 'images/icon_branches.svg' },
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
