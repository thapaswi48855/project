import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-storetypemaster',
  templateUrl: './storetypemaster.component.html',
  styleUrls: ['./storetypemaster.component.css'],
})
export class StoretypemasterComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving:SavingComponent;

  public pageTitle: string = 'Type';
  public onSubmit: boolean = true;
  public onClear:boolean =true;
  public onEdit:boolean =false;
  public onView:boolean =false;

  public pageMode ='NEW';
  public isEditable:any=false;
  public isShowEditable:any=true;
  public redirectToGrid:boolean =false;

  public store: any = {
    storetypename: '',
    storedescription: '',
    status: 'ZLS11',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
  public emptyStore = JSON.stringify(this.store);
  public statusList:any =[];

  constructor(
    public _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService:MessageService
  ) {}

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLS1"})
    .subscribe((dt:any)=>{
      console.log(dt)
      this.statusList=dt.data[0].subMasterData ;
      console.log('this.statusList',this.statusList)
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

  getMasterData(storeTypeMasterId: any) {
    this._service
      .serGetDataobject('getStoreTypeMaster', { _id: storeTypeMasterId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.store = dt.data[0];
        this.store['_id']=this.store._id;
        this.isShowEditable= !this.isEditable && this.pageMode !='NEW';
      });
  }

  public errorMsgs:any={
    'storetypename':''
  }

  onGetErrorMsgs(ctrl:any,showToast:any){
    switch(ctrl){
      case 'storetypename' :
        this.errorMsgs.storetypename= (this.store[ctrl] == '' || this.store[ctrl] == undefined ||this.store[ctrl] == null) ?this._service.onGetErrorMsgs('storetypename', true,'Store Type Name'):'';
        break;

    }
  }

  async onSaveClick() {
    let objectstore = ['storetypename'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl,true);
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

    let savingJson =this.store ;
      // {
      //   'storetypename': this.store.storetypename,
      //   'storedescription': this.store.storedescription,
      //   // 'status': 'A',
      //   'createdt':null,
      //   'createby':'',
      //   'modifydt':null,
      //   'modifyby':''
      // };
      // this.saving.onSaveJson('Store',this.store,this.emptyStore)
      let store = await this.saving.onSaveJson('Store Type Master', 'insertStoreTypeMaster', [savingJson]);
      // this.pageMode='NEW';
      this.redirectToGrid = this.pageMode =='NEW'? false:true;
    this.onClearClick();
  }
  onClearClick() {
    if(this.pageMode =='NEW'){
      this.store = JSON.parse(this.emptyStore);
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }
   
  }
}
