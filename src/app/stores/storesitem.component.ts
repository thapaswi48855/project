import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-storesitem',
  templateUrl: './storesitem.component.html',
  styleUrls: ['./storesitem.component.css']
})
export class StoresitemComponent {

 @ViewChild(HeaderComponent) header:HeaderComponent;

  public pageTitle = 'Type';
  public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;
  

  public storeitems = {
    type: '',
    desc: '',
    selected: true,
  };
  public emptyStoreitems= JSON.stringify(this.storeitems)
  constructor(public _service: MasterserviceService) {}

 async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
  }

  onGridClick() {}

  onSaveClick() {
    console.log(this.storeitems)
    let saveingJson={}
    this._service.onSaveJson(this.pageTitle,'Store',saveingJson)
  }

  onClearClick(){
this.storeitems=JSON.parse(this.emptyStoreitems)
  }

}
