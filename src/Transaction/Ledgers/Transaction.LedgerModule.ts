import { LedgerTransactionComponent } from './Transaction.LedgerTransactionComponent';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionLedgerRoute } from 'src/Routing/Transaction.LedgerRouting.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    LedgerTransactionComponent
  ],
  imports: [
    RouterModule.forChild(TransactionLedgerRoute),
    CommonModule
  ],
  providers: [],
  bootstrap: [LedgerTransactionComponent]
})
export class LedgerTransactionModule { }
