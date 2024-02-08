import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { MasterserviceService } from '../masterService/masterservice.service';
import { HeaderComponent } from '../directives/header.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-additemcategory',
  templateUrl: './additemcategory.component.html',
  styleUrls: ['./additemcategory.component.css'],
})
export class AdditemcategoryComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Item';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public pageMode = 'NEW';
  public isEditable: any = false;
  public isShowEditable: any = true;
  public zeroLevelEntity: any = [];
  public redirectToGrid:boolean =false;

  public itemCategory: any = {
    categoryName: '',
    identification: '',
    issuseType: '',
    bilable: 'ZLAS11',
    retilable: 'ZLAS11',
    calmiable: 'ZLAS11',
    validateExpireDate: '08-10-2023',
    discount: '',
    prescribable: 'ZLAS11',
    assestsTracking: 'ZLAS12',
    status: 'ZLS11',
    drug: 'ZLAS12',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };

  public identificationList: any = [];
  public issuseTypeList:any =[];
  public billableList:any=[];
  public retilableList:any=[];
  public clamiableList:any=[];
  public prescribableList:any=[];
  public asseststrackingList:any=[];
  public drugList:any=[];
  public statusList:any=[]

  public emptyItemCategory = JSON.stringify(this.itemCategory);
  constructor(
    public _service: MasterserviceService,
    public _activatedRoute: ActivatedRoute,
    public _messageService:MessageService
  ) {}

  public errorMsgs:any={
    categoryName:''
  }

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'categoryName':
        this.errorMsgs.categoryName =
          this.itemCategory[ctrl] == '' ||
          this.itemCategory[ctrl] == undefined ||
          this.itemCategory[ctrl] == null
            ? this._service.onGetErrorMsgs('categoryName', true, 'Category Name')
            : '';
        break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLI1"})
    .subscribe((dt:any)=>{
      this.identificationList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLIT1"})
    .subscribe((dt:any)=>{
      this.issuseTypeList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.billableList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.retilableList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.clamiableList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.prescribableList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.asseststrackingList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLS1"})
    .subscribe((dt:any)=>{
      this.statusList=dt.data[0].subMasterData ;
    })
    this._service
    .serGetDataobject('getGeneralMaster',{masterid:"ZLAS1"})
    .subscribe((dt:any)=>{
      this.drugList=dt.data[0].subMasterData ;
    })

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let params: any = param.get('param');
      if (params != null) {
        params = JSON.parse(atob(params));
        let _id: number = params['_id'];
        this.getMasterData(_id);
        this.pageMode = params['mode'];
      } else {
        this.isEditable = true;
        this.pageMode = 'NEW';
      }
      this.isEditable = this.pageMode != 'VIEW'; //getGeneralMaster
    });
  }

  getMasterData(itemCategoryId: any) {
    this._service
      .serGetDataobject('getAddItemCategory', { _id: itemCategoryId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.itemCategory = dt.data[0];
        this.itemCategory.validateExpireDate=new Date(this.itemCategory.validateExpireDate)
        this.itemCategory['_id'] = this.itemCategory._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onGridClick() {}

  onSaveClick() {
    let objectstore = ['categoryName'];
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

    let savingJson = this.itemCategory;
    console.log(this.itemCategory);
    this.saving.onSaveJson('Add Item Category', 'insertAddItemCategory', [savingJson]);
    this.redirectToGrid = this.pageMode =='NEW'? false:true;
    this.onClearClick();
  }
  onClearClick() {
    if(this.pageMode =='NEW'){
      this.itemCategory = JSON.parse(this.emptyItemCategory);
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }
   
    
  }
}
