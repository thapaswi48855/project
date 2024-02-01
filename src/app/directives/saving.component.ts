import { Component } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent {

  constructor(private _service:MasterserviceService,
    private _messageService:MessageService){

  }

  onSaveJson(pageTitle: any,path:any, masterData: any,) {
    console.log(pageTitle);
    console.log(masterData);
    // console.log('clearData',clearData)
    // this.dmaster=JSON.parse(clearData);
    // console.log('this.dmaster',this.dmaster)
    this._service.serpostData(path,masterData).subscribe((dt:any)=>{
      console.log(dt)
      if(dt.status == '200'){
      this._messageService.add({
        sticky: true,
        severity: 'success',
        summary: 'Success',
        detail: `${pageTitle} Create Successfully `,
      });
    }else if(dt.status == '201'){
      this._messageService.add({
        sticky: true,
        severity: 'success',
        summary: 'Success',
        detail: `${pageTitle} Update Successfully `,
      });
    }
    else if(dt.status == '500'){
      this._messageService.add({
        sticky: true,
        severity: 'success',
        summary: 'Success',
        detail: `${pageTitle} Unable to Create / Update Successfully `,
      });
    }
    })
  }
}
