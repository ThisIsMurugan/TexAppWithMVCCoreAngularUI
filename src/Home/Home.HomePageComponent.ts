import { BaseLogger } from './../Utility/Utility.Logger';
import { Component } from '@angular/core';

@Component({
  templateUrl: './Home.HomePageView.html'
})
export class HomePageComponent {
  LogObj: BaseLogger = null;
  constructor(_logger: BaseLogger) {
    this.LogObj = _logger;
    this.LogObj.Log();
  }
}
