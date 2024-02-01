import { Component, ViewChild } from '@angular/core';
import { GridviewComponent } from '../directives/gridview.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-stockentrylist',
  templateUrl: './stockentrylist.component.html',
  styleUrls: ['./stockentrylist.component.css']
})
export class StockentrylistComponent {

    @ViewChild(GridviewComponent) gridView: GridviewComponent;
  
    public mastersGridColumns ="stockEntryGridColumns";
    public masterGridData="getStockEntryMaster";
    public paramKey=["_id"];
  
    public pageTitle = 'Module List';
    public onSubmit = true;
    public onGrid = true;
    public onAddNew = true;

    public actionOptions=[
      {reportName:'EDIT',iconClass:'pi pi-user-edit'},
      {reportName:'VIEW',iconClass:'pi pi-user'},
    ]
    public printOptions=[
      
      {reportName:'cancel',iconClass:'pi pi-times-circle'}
    ]
  
   
  constructor(private _service :MasterserviceService){}
  
    async ngOnInit() {
      if(Object.keys(this._service.appConfig).length == 0){
        await this._service.getConfigData();
      }
      
    }
    onGridClick(){}
    onAddNewClick(){}
    onPrintClick(event:any){

    }
  
}
