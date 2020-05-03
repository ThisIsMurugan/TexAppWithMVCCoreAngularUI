import { Component, Injector } from '@angular/core';
import { BaseLogger } from 'src/Utility/Utility.Logger';

@Component({
  templateUrl: './Transaction.LedgerTransactionView.html'
})
export class LedgerTransactionComponent {
  LoggerObj: BaseLogger = null;
  constructor(_injector: Injector) {
    this.LoggerObj = _injector.get('2');
    this.LoggerObj.Log();
  }
  transactionName = 'Ledgers';
}
