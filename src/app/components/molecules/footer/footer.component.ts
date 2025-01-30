import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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
  constructor(private router: Router) {}
}
