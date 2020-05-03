import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-grid-ui',
  templateUrl: './App.GridView.html'
})
export class GridComponent {
    gridColumns: Array<Object> = new Array<Object>();
    gridData: Array<Object> = new Array<Object>();

    @Input('grid-columns')
    set setGridColumn(_gridColumns: Array<Object>) {
      this.gridColumns = _gridColumns;
    }
    @Input('grid-data')
    set setGridData(_gridData: Array<Object>){
      this.gridData = _gridData;
    }

    @Output('grid-selected-data')
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

    SelectGrid(_selectedObj: Object){
      this.eventEmitter.emit(_selectedObj);
    }
}
