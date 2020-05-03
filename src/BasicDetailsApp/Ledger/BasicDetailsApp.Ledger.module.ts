import { MyInterceptor } from './../../Utility/App.Interceptor';
import { GridComponent } from './../../Utility/App.GridComponent';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LedgerComponent } from './BasicDetailsApp.Ledger.component';
import {BasicDetailsLedgerRoute} from '../../Routing/BasicDetails.LedgerRouting.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LedgerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(BasicDetailsLedgerRoute),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ],
  bootstrap: [LedgerComponent]
})
export class BasicDetailsLedgerModule { }
