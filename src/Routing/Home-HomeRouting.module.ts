import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './../Home/Home.HomePageComponent';


const routes: Routes = [
  {path: 'Home', component: HomePageComponent},
  {path: 'BasicDetails-Ledger',
    loadChildren: '../BasicDetailsApp/Ledger/BasicDetailsApp.Ledger.module#BasicDetailsLedgerModule'},
  {path: 'Transaction-Ledger',
    loadChildren: '../Transaction/Ledgers/Transaction.LedgerModule#LedgerTransactionModule'},
  {path: 'Reports-Ledger',
    loadChildren: '../Reports/Ledgers/Reports.LedgersModule#LedgerReportModule'},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
