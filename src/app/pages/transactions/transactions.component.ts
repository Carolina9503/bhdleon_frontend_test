import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/molecules/background/background.component';
import { HeaderComponent } from '../../components/molecules/header/header.component';

@Component({
  selector: 'app-transactions',
  imports: [BackgroundComponent, HeaderComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
