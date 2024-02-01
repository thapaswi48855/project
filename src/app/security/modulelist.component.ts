import { Component, ViewChild } from '@angular/core';
import { GridviewComponent } from '../directives/gridview.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-modulelist',
  templateUrl: './modulelist.component.html',
  styleUrls: ['./modulelist.component.css'],
})
export class ModulelistComponent {
  @ViewChild(GridviewComponent) gridview: GridviewComponent;

  public mastersGridColumns ="mastersGridColumns";
  public masterGridData ="getModules";

  public paramKey=["_id"];
  public showCheckBox=true;
  
  public pageTitle = 'Module List';
  public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;

  public products = [
    {
      name: 'Module Name',
      Description: 'Module Desc',
    },
  ];
constructor(private _service :MasterserviceService){}
  async ngOnInit() {
    if(Object.keys(this._service.appConfig).length == 0){
      await this._service.getConfigData();
    }
    // this.masterError =await this._service.getErrorMsgs('ErrorMsgs');
    // console.log("master",this.masterError)
  }


  onGridClick(){}
  onAddNewClick(){}
}
