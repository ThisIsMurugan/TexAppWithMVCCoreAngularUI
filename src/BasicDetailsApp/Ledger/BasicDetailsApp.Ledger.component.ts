import { HttpClient } from '@angular/common/http';
import { BaseLogger } from './../../Utility/Utility.Logger';
import { LedgerModel } from './BasicDetailsApp.Ledger.LedgerModel';
import { Component, Injector } from '@angular/core';

@Component({
  templateUrl: './BasicDetailsApp.Ledger.view.html',
  styleUrls: ['./BasicDetailsApp.Ledger.component.css']
})
export class LedgerComponent {
  LoggerObj: BaseLogger = null;
  constructor(_injecter: Injector, public httpClient: HttpClient) {
    this.LoggerObj = _injecter.get('1');
    this.LoggerObj.Log();
  }
  title = 'Tex ????';
  LedgerModelObj: LedgerModel = new LedgerModel();
  LedgerModelsObj: Array<LedgerModel> = new Array<LedgerModel>();

  Add() {
    this.LedgerModelsObj.push(this.LedgerModelObj);
    this.Reset();
  }

  Reset() {
    this.LedgerModelObj = new LedgerModel();
  }

  HasValidationError(typeofValidator: string,
                     controlName: string)
                      : boolean {
    return this.LedgerModelObj.formLedgerGorup
            .controls[controlName]
            .hasError(typeofValidator);
  }

  SelectedLedger(_selected: LedgerModel) {
    this.LedgerModelObj = _selected;
  }

  SendToServer() {
    var ledgerDto: any = {};
    ledgerDto.LedgerId = this.LedgerModelObj.LedgerId;
    ledgerDto.LedgerName = this.LedgerModelObj.LedgerName;
    ledgerDto.LedgerCode = this.LedgerModelObj.LedgerCode;
    this.httpClient.post('api/Ledger',
                    ledgerDto)
                    .subscribe(
      (res: any) => this.SuccessGet(res),
                      (res: any) => this.Error(res)
                      );
  }
  Success(res) {
      console.log('Success', res);
      this.GetDataFromServer();
  }
  Error(res) {
    console.log('Failure to Post Data', res);
  }

  GetDataFromServer() {
    this.httpClient.get('http://localhost:3000/ledgers')
                    .subscribe(
                      (res: any) => this.SuccessGet(res),
                      (res: any) => this.Error(res)
                      );
  }
  SuccessGet(res) {
    this.LedgerModelsObj = res;
  }
}
