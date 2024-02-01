import { Component, ViewChild } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { GridviewComponent } from '../directives/gridview.component';

@Component({
  selector: 'app-raisepurchaseorderlist',
  templateUrl: './raisepurchaseorderlist.component.html',
  styleUrls: ['./raisepurchaseorderlist.component.css']
})
export class RaisepurchaseorderlistComponent {
  @ViewChild(GridviewComponent) gridView: GridviewComponent;
  
  public mastersGridColumns ="raisePurchaseOrderGridColumns";
  public masterGridData="getRasiePurchaseOrderMaster";
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
}
