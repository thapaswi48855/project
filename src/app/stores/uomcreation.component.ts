import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { json } from 'express';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-uomcreation',
  templateUrl: './uomcreation.component.html',
  styleUrls: ['./uomcreation.component.css'],
})
export class UomcreationComponent {
  @ViewChild(HeaderComponent) header:HeaderComponent;
  @ViewChild(SavingComponent) saving:SavingComponent

  public pageTitle = 'UOM';
  public onSubmit: boolean = true;
  public onClear:boolean =true;
  public onEdit:boolean =false;
  public onView:boolean =false;

  public pageMode ='NEW';
  public isEditable:any=false;
  public isShowEditable:any=true;
  public redirectToGrid:boolean =false;

  public uomCreation:any = {
    packageUom: '',
    unitUom: '',
    pkgSize: '',
    integrationId: '',
    status: 'ZLS11',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyUomCreation = JSON.stringify(this.uomCreation);
  constructor(public _service: MasterserviceService,
    public _activatedRoute:ActivatedRoute,
    private _messageService:MessageService ) {}

    public errorMsgs:any={
      packageUom:'',
      unitUom:''
    }
    public unitUomList:any=[];
    public statusList:any=[];

    onGetErrorMsgs(ctrl: any, showToast: any) {
      switch (ctrl) {
        case 'packageUom':
          this.errorMsgs.packageUom =
            this.uomCreation[ctrl] == '' ||
            this.uomCreation[ctrl] == undefined ||
            this.uomCreation[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Package Uom')
              : '';
          break;
          case 'unitUom':
          this.errorMsgs.unitUom =
            this.uomCreation[ctrl] == '' ||
            this.uomCreation[ctrl] == undefined ||
            this.uomCreation[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Unit Uom')
              : '';
          break;
      }
    }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLUU1"})
    .subscribe((dt:any)=>{
      this.unitUomList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLS1"})
    .subscribe((dt:any)=>{
      this.statusList=dt.data[0].subMasterData ;
    })

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let _id: number = params['_id'];
        this.getMasterData(_id);
        this.pageMode =params['mode'];
      }else{
        this.isEditable=true;
        this.pageMode='NEW';
      }
      this.isEditable= this.pageMode !='VIEW'
    });
  }

  getMasterData(uomCreationId: any) {
    this._service
      .serGetDataobject('getUomCreation', { _id: uomCreationId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.uomCreation = dt.data[0];
        this.uomCreation['_id']=this.uomCreation._id;
        this.isShowEditable= !this.isEditable && this.pageMode !='NEW';
      });
  }

  onSaveClick() {
    let objectstore = ['packageUom', 'unitUom'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      this._messageService.add({
        sticky: true,
        severity: 'warn',
        summary: 'Warn',
        detail: 'Please Check the below Errors',
      });
      return;
    }

    let savingJson = this.uomCreation
    console.log(this.uomCreation);
    this.saving.onSaveJson('UOM Creation','insertUomCreation', [savingJson]);
    this.redirectToGrid = this.pageMode =='NEW'? false:true;
    this.onClearClick();
  }
  onClearClick(){
    if(this.pageMode =='NEW'){
      this.uomCreation=JSON.parse(this.emptyUomCreation);
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }
    
  }
}
