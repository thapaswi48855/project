import { Component, ViewChild } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { GridviewComponent } from '../directives/gridview.component';

@Component({
  selector: 'app-generalmastergrid',
  templateUrl: './generalmastergrid.component.html',
  // styleUrls: ['./generalmastergrid.component.css']
})
export class GeneralmastergridComponent {
  @ViewChild(GridviewComponent) gridView: GridviewComponent;

  public mastersGridColumns ="generalMastersGridColumns";
  public masterGridData="getGeneralMaster";
  public paramKey=["_id"];
  
  // public showEdit =true;
  // public showView=true;
  // public showCancel =true;

  public pageTitle = 'Master';
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

 
constructor(private _service :MasterserviceService,
  // private confirmationService: ConfirmationService
  ){}

  async ngOnInit() {
    if(Object.keys(this._service.appConfig).length == 0){
      await this._service.getConfigData();
    }  
  }
}
