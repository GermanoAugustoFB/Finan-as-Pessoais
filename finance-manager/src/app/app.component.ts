import { Component, OnInit } from '@angular/core';
import { FinanceService } from './services/finance.service';
import { RouterOutlet   } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    // Exemplo de uso do serviço
    this.financeService.getTransactions('seuTokenJWT').subscribe(transactions => {
      console.log(transactions);
    });
  }
}
