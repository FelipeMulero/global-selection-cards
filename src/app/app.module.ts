import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalRescueComponent } from './shared/components/modal-rescue/modal-rescue.component';
import { SharedModule } from './shared/shared.module';
import { InvestmentComponent } from './views/investment/investment.component';
import { InvestmentRescueComponent } from './views/investment-rescue/investment-rescue.component';
import { InvestmentListComponent } from './views/investment-list/investment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentComponent,
    InvestmentRescueComponent,
    InvestmentListComponent,
    ModalRescueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
