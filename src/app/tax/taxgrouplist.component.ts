import { Component, ViewChild, inject } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MasterserviceService } from '../masterService/masterservice.service';
import { GridviewComponent } from '../directives/gridview.component';

@Component({
  selector: 'app-taxgrouplist',
  templateUrl: './taxgrouplist.component.html',
  // styleUrls: ['./taxgrouplist.component.css']
})
export class TaxgrouplistComponent {
  @ViewChild(GridviewComponent) gridView:GridviewComponent;

  public mastersGridColumns ="taxGroupGridColumns";
  public masterGridData="getTaxGroup";
  public paramKey=["_id"];
  
  public showEdit =true;
  public showView=true;

  public pageTitle = 'Module List';
  public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;
  public actionOptions=[
    {reportName:'EDIT',iconClass:'pi pi-user-edit'},
    {reportName:'VIEW',iconClass:'pi pi-user'},
  ]
  public printOptions=[
    
    // {reportName:'cancel',iconClass:'pi pi-times-circle'}
  ]

 
constructor(private _service :MasterserviceService){};
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
        this._service.onSaveJson('UOM Creation','insertUomCreation', [rowData]);
      },
      reject: () => {
        return;
      }
  });
  }
}
