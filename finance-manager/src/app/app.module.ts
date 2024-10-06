import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent      } from './app.component';
import { FinanceService    } from './services/finance.service';
import { RegisterComponent } from './registro/registro.component';
import { LoginComponent    } from './login/login.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FinanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }