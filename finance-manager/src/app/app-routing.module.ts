import { RouterModule, Routes } from '@angular/router';
import { NgModule             } from '@angular/core';
import { RegisterComponent    } from './registro/registro.component';
import { LoginComponent       } from './login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'transactions', component: TransactionsComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' } // rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
