import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SavingComponent } from '../directives/saving.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-manufacturecreation',
  templateUrl: './manufacturecreation.component.html',
  styleUrls: ['./manufacturecreation.component.css'],
})
export class ManufacturecreationComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;
  public pageTitle = 'Manufacture Creation';
  public onSubmit: boolean = true;
  public onClear:boolean =true;
  public onEdit:boolean =false;
  public onView:boolean =false;

  public pageMode ='NEW';
  public isEditable:any=false;
  public isShowEditable:any=true;
  public redirectToGrid:boolean =false;

  public manufacture:any = {
    manufacturename: '',
    status: 'ZLS11',
    manufacturecode: '',
    regioncountry: '',
    regionstate: '',
    regioncity: '',
    contactaddress: '',
    contactphone1: '',
    contactphone2: '',
    contactpostalCode: '',
    contactfax: '',
    contactemail: '',
    contactwebsite: '',
    createdt: null,
    createby: '',
    modifydt: null,
    modifyby: '',
  };
 
  public emptyManufacture = JSON.stringify(this.manufacture);
  public statusList:any=[];
  public zeroLevelEntity:any=[];
  constructor(public _service: MasterserviceService,
    private _activatedRoute:ActivatedRoute) {}

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

  getMasterData(manufacureCreationId: any) {
    this._service
      .serGetDataobject('getManufacureCreation', { _id: manufacureCreationId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.manufacture = dt.data[0];
        this.manufacture['_id']=this.manufacture._id;
        this.isShowEditable= !this.isEditable && this.pageMode !='NEW';
      });
  }

  onGridClick() {}

  onSaveClick() {
    let savingJson = this.manufacture;

    this.saving.onSaveJson(this.pageTitle, 'insertManufacureCreation', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode =='NEW'? false:true;
  }
  onClearClick() {
    if(this.pageMode =='NEW'){
      this.manufacture = JSON.parse(this.emptyManufacture);
      this.isEditable=true;
    }else{
      this.isEditable=false;
    }
   
  }
}
