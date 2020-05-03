import { Component } from '@angular/core';
import { BaseLogger } from 'src/Utility/Utility.Logger';

@Component({
  templateUrl: './Reports.LedgersView.html'
})
export class LedgerReportComponent {
  LoggerObj: BaseLogger = null;
  constructor(_logger: BaseLogger) {
    this.LoggerObj = _logger;
    this.LoggerObj.Log();
  }
  reportName = 'Ledgers';
}
