import { LedgerReportComponent } from './Reports.LedgersComponent';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportsLedgerRoute } from 'src/Routing/Reports.LedgerRouting.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LedgerReportComponent
  ],
  imports: [
    RouterModule.forChild(ReportsLedgerRoute),
    CommonModule
  ],
  providers: [],
  bootstrap: [LedgerReportComponent]
})
export class LedgerReportModule { }
