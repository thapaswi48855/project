import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';

@Component({
  selector: 'app-suppliercategory',
  templateUrl: './suppliercategory.component.html',
  styleUrls: ['./suppliercategory.component.css']
})
export class SuppliercategoryComponent {

 @ViewChild(HeaderComponent) header:HeaderComponent;
 @ViewChild(SavingComponent) saving:SavingComponent;

  public pageTitle = 'Supplier Category';
  public onSubmit: boolean = true;
  public onClear:boolean =true;
  public onEdit:boolean =false;
  public onView:boolean =false;

  public pageMode ='NEW';
  public isEditable:any=false;
  public isShowEditable:any=true;
  public redirectToGrid:boolean =false;

  public supplierCategory:any = {
    categoryname: '',
    categorydescription: '',
    status:'ZLS11',
    createdt:null,
    createby:'',
    modifydt:null,
    modifyby:''
  };
  public emptySupplierCategory= JSON.stringify(this.supplierCategory)
  constructor(public _service: MasterserviceService,public _activatedRoute:ActivatedRoute) {}

  public errorMsgs: any = {
    categorynameReq: '',
  };
  public statusList:any =[];

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'categoryname':
        this.errorMsgs.categorynameReq =
          this.supplierCategory[ctrl] == '' ||
          this.supplierCategory[ctrl] == undefined ||
          this.supplierCategory[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Supplier Clasification Name')
            : '';
        break;      
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
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

  getMasterData(supplierCategoryId: any) {
    this._service
      .serGetDataobject('getSupplierCategory', { _id: supplierCategoryId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.supplierCategory = dt.data[0];
        this.supplierCategory['_id']=this.supplierCategory._id;
        this.isShowEditable= !this.isEditable && this.pageMode !='NEW';
      });
  }

  onGridClick() {}

  onSaveClick() {

    // let objectstore = ['categoryname'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.supplierCategory, ctrl, true);
    // });

    let objectstore = ['categoryname'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, false);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      return;
    }

  let savingJson = this.supplierCategory ;
    this.saving.onSaveJson(this.pageTitle,'insertSupplierCategory',[savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode =='NEW'? false:true;
  }

  onClearClick(){
    if(this.pageMode =='NEW'){
      this.supplierCategory=JSON.parse(this.emptySupplierCategory);
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }

  }

}
