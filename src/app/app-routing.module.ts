import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvestmentComponent} from "./views/investment/investment.component";
import {InvestmentListComponent} from "./views/investment-list/investment-list.component";
import {InvestmentRescueComponent} from "./views/investment-rescue/investment-rescue.component";

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', redirectTo: 'list', pathMatch: 'full' },
  {path: 'investment', component: InvestmentComponent},
  {path: 'list', component: InvestmentListComponent},
  {path: 'rescue/:nome', component: InvestmentRescueComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
