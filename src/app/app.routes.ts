import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'mis-productos',
    component: DashboardComponent,
  },
  {
    path: 'transacciones',
    component: TransactionsComponent,
  },
  {
    path: 'ofertas',
    component: OffersComponent,
  },
  {
    path: 'configuracion',
    component: SettingsComponent,
  },
];
