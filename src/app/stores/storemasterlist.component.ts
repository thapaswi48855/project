import { Component, ViewChild, inject } from '@angular/core';
import { GridviewComponent } from '../directives/gridview.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-storemasterlist',
  templateUrl: './storemasterlist.component.html',
  styleUrls: ['./storemasterlist.component.css']
})
export class StoremasterlistComponent {
  @ViewChild(GridviewComponent) gridView: GridviewComponent;

  public mastersGridColumns ="storeMastersGridColumns";
  public masterGridData="getStoreMaster";
  public paramKey=["_id"];

  public pageTitle = 'Module List';
  public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;
  public showEdit = true;
  public showView = true;

  public actionOptions=[
    {reportName:'EDIT',iconClass:'pi pi-user-edit'},
    {reportName:'VIEW',iconClass:'pi pi-user'},
  ]
  public printOptions=[
    
    {reportName:'cancel',iconClass:'pi pi-times-circle'}
  ]


 
constructor(private _service :MasterserviceService){}
public confirmationService= inject(ConfirmationService) 

  async ngOnInit() {
    if(Object.keys(this._service.appConfig).length == 0){
      await this._service.getConfigData();
    }
    
  }

  onPrintClick(rowData:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        rowData.status ='C'
        this._service.onSaveJson('Store Master', 'insertStoreMaster', [rowData]);
      },
      reject: () => {
        return;
      }
  });
  }
}
