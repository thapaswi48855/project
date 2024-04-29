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
    storetypeid:0,
    storetypename: '',
    storedescription: '',
    status: 'ZLS11',
    createdt: null,
    createby: this._service.getUserVal('userid'),
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
        let storetypeid: number = params['storetypeid'];
        this.getMasterData(storetypeid);
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
      .serGetDataobject('getStoreTypeMaster', { storetypeid: storeTypeMasterId })
      .subscribe((dt: any) => {

        this.store ={ 
        storetypeid:dt.data[0].storetypeid,
        storetypename: dt.data[0].storetypename,
        storedescription: dt.data[0].storedescription,
        status: dt.data[0].status,
        createdt: dt.data[0].createdt,
        createby: dt.data[0].createby,
        modifydt: dt.data[0].modifydt,
        modifyby: this._service.getUserVal('userid'),
        }

        // this.store['_id']=this.store._id;
        this.isShowEditable= !this.isEditable && this.pageMode !='NEW';
      });
  }

  public errorMsgs:any={
    'storetypename':''
  }
  public emptyErrorMsgs:any =JSON.stringify(this.errorMsgs);

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
    // savingJson.storetypeid =savingJson.storetypeid ==0 ? this._service.getNextSequenceNumber('Store Type Master') :this.store.storetypeid ;
// this.store.recCnt =this.store.storetypeid;
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
   this.errorMsgs=JSON.parse(this.emptyErrorMsgs);
  }


// public currentId=0;
// public newId:any;
// generateId(): number {
//   return this.currentId++;
// }
// generateNewId(): void {
//   this.newId = this.generateId();
//   console.log('New ID:', this.newId);
// }

// generateSequenceNumber(): any {
//   const componentId = 'component2'; // Unique identifier for the component
//   return this._service.getNextSequenceNumber(componentId);
// }

}
