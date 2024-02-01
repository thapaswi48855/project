import { Component, ViewChild } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { GridviewComponent } from '../directives/gridview.component';

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent {
  @ViewChild(GridviewComponent) gridView: GridviewComponent;
  public mastersGridColumns ="documentGridColumns";
  public masterGridData ="documents";

  public paramKey=["_id"];
  public actionOptions=[
    {reportName:'EDIT',iconClass:'pi pi-user-edit'},
    {reportName:'VIEW',iconClass:'pi pi-user'},
  ]

  public showCheckBox=true;
  
  public pageTitle = 'Document List';
  public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;

constructor(private _service :MasterserviceService){}
  async ngOnInit() {
    if(Object.keys(this._service.appConfig).length == 0){
      await this._service.getConfigData();
    }
    
  }
  onGridClick(){}
  onAddNewClick(){}
}
