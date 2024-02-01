import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-raisepurchaseorder',
  templateUrl: './raisepurchaseorder.component.html',
  styleUrls: ['./raisepurchaseorder.component.css']
})
export class RaisepurchaseorderComponent {
  @ViewChild(HeaderComponent) header:HeaderComponent;

  public pageTitle: string = 'Document';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;
  public onClear:boolean =true;

  public document: any = {
    documentName: '',
    documentPageUrl: '',
    documentGridUrl: '',
    documentDescription: '',
    status: true,
  };

  constructor(public _service:MasterserviceService){}

  onGridClick(){}

  onSaveClick(){}

  onClearClick(){}

}
