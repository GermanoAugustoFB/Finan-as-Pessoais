import { Component } from '@angular/core';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private financeService: FinanceService) {}

  register() {
    this.financeService.register({ username: this.username, password: this.password }).subscribe(response => {
      console.log('User registered:', response);
    });
  }
}
