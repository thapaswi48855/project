import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;

  public pageTitle: string = 'Document';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;
  public onClear: boolean = true;
  public pageMode ='NEW';

  public document: any = {
    _id:'',
    documentName: '',
    documentPageUrl: '',
    documentGridUrl: '',
    documentDescription: '',
    status: true,
  };
  public emptyDocument = JSON.stringify(this.document);
  public currentRow:any=[];

  constructor(
    public _service: MasterserviceService,
    private _activactiveRoute: ActivatedRoute
  ) {}

  public errorMsgs:any={
    'documentReq':'',
    'documentPageUrlReq':''
  }

  onGetErrorMsgs(ctrl:any,showToast:any){
    switch(ctrl){
      case 'documentName' :
        this.errorMsgs.documentReq= (this.document[ctrl] == '' || this.document[ctrl] == undefined ||this.document[ctrl] == null) ?this._service.onGetErrorMsgs('documentName', true,'Document Name'):'';
        break;
        case 'documentPageUrl' :
          this.errorMsgs.documentPageUrlReq= (this.document[ctrl] == '' || this.document[ctrl] == undefined ||this.document[ctrl] == null) ?this._service.onGetErrorMsgs('documentPageUrl', true,'Document Page Url Name'):'';
          break;

    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    // this._activactiveRoute
    this._activactiveRoute.paramMap.subscribe(async (param: ParamMap) => {
      let docParms = param.get('param');
      if(docParms != null && docParms != undefined){
        let docPermissions=JSON.parse(atob(docParms));
console.log(docPermissions)
        this._service.serGetDataobject('documents', {_id:docPermissions._id}).subscribe((dt: any) => {
          console.log(dt);
          this.currentRow =dt.data[0]
          this.document ={
            documentName: this.currentRow.document ,
            documentPageUrl: this.currentRow.documentpageurl,
            documentGridUrl: this.currentRow.documentgridUrl,
            documentDescription: this.currentRow.documentdescription,
            status: true,
          }
  
        });
        this.pageMode ='EDIT';

      }
      // let docPermissions=JSON.parse(atob(docParms));
      // let docPermission =docPermissions.documentDetails;
      console.log(docParms);
      // if(docPermission != null && docPermission != undefined){
      // }
      // }
      
    });
  }

  onGridClick() {}

  onSaveClick() {
    // let objectstore = ['documentName', 'documentPageUrl'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.document, ctrl, true);
    // });

    let objectstore = ['documentName','documentPageUrl'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl,true);
    });


    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      return;
    }

    let savingJson = {
      _id: this.pageMode == 'NEW' ?0:this.currentRow._id,
      document: this.document.documentName,
      documentpageurl: this.document.documentPageUrl,
      documentgridUrl: this.document.documentGridUrl,
      documentdescription: this.document.documentDescription,
      Status: this.document.status == true ? 'A' : 'D',
    };
    if(savingJson._id == 0){
      delete savingJson._id ;
    }
    // this.saving.onSaveJson('Store',this.store,this.emptyStore)
    this._service.onSaveJson(this.pageTitle, 'insertDocuments', [savingJson]);
    this.onClearClick();
  }
  onClearClick() {
    this.document = JSON.parse(this.emptyDocument);
    this.pageMode='NEW';
  }
}
