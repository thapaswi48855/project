import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { GridviewComponent } from '../directives/gridview.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-generalmaster',
  templateUrl: './generalmaster.component.html',
  styleUrls: ['./generalmaster.component.css'],
})
export class GeneralmasterComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(GridviewComponent) gridView: GridviewComponent;

  // public mastersGridColumns = 'storeTypeMastersGridColumns';
  // public masterGridData = 'getGeneralMaster';
  // public paramKey = ['_id'];
  public pageTitle: string = 'Master';
  public onSubmit: boolean = true;
  public onClear:boolean =true;
  public onEdit:boolean =false;
  public onView:boolean =false;

  public pageMode ='NEW';
  public isEditable:any=false;
  public isShowEditable:any=true;
  public redirectToGrid:boolean =false;

  public showEdit = true;
  public showView = true;
  // public showCancel = true;

  public subMasterCols = [
    {
      field: 'masterName',
      header: 'S No.',
      style: {
        width: '10rem',
      },
    },
    {
      field: 'masterName',
      header: 'Name',
      style: {
        width: '20rem',
      },
    },
    {
      field: 'masterdesc',
      header: 'Description',
      style: {
        width: '20rem',
      },
    },
    {
      field: 'Action',
      header: 'Action',
      style: {
        width: '5rem',
      },
    },
  ];
  public subMasterData = [
    {
      subMasterId: '',
      subMasterName: '',
      subMasterDesc: '',
      status: true,
      createdt: null,
      createby: '',
      modifydt: null,
      modifyby: '',
    },
  ];
  public emptysubMasterData  =JSON.stringify(this.subMasterData)
  public gridData = [];

  // public pageTitle = 'Supplier';
  // public onSubmit = true;
  public onGrid = true;
  public onAddNew = true;

  // public pageMode = 'NEW';
  // public isEditable: any = false;
  // public isShowEditable: any = true;

  public master: any = {
    masterid: '',
    mastername: '',
    masterdesc: '',
    subMasterData: [],
    status: true,
  };
  public page: boolean = false;
  public math: any;
  public selectMaster: object = {};
  public statusList:any=[];

  constructor(
    private _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.math = Math;
  }

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

  getMasterData(masterId: any) {
    this._service
      .serGetDataobject('getGeneralMaster', { _id: masterId })
      .subscribe((dt: any) => {
        console.log('dt', dt);
        this.master = dt.data[0];
    // subMasterData: [],
    this.subMasterData =this.master.subMasterData;
        this.master.status = this.master.status == 'A' ? true : false;
        this.master['_id'] = this.master._id;
        this.isShowEditable = !this.isEditable && this.pageMode != 'NEW';
      });
  }

  onClearClick() {}
  // onMasterSelect(event: any, object: any) {
  //   this.selectMaster = object;
  //   this.page = object._id == undefined ? false : true;
  //   console.log(event);
  //   this.master = {
  //     masterid: object.levelCode,
  //     mastername: '',
  //     masterdesc: '',
  //     status: true,
  //     subMaster: this.subMasterData,
  //     createdt: null,
  //     createby: '',
  //     modifydt: null,
  //     modifyby: '',
  //   };
  //   // this.getSelectMasterData(object);
  // }
  // getSelectMasterData(object: any) {
  //   this._service
  //     .serGetDataobject('getGeneralMaster', { masterid: object.levelCode })
  //     .subscribe((dt: any) => {
  //       console.log(dt);
  //       this.gridData = dt.data;
  //     });
  // }

  onSaveClick() {
    console.log(this.master);
    // this.master.status = this.master.status == true ? 'A' : 'D';
    // this.master = {
    //   mastername: '',
    //   masterdesc: '',
    //   status: true,
    //   subMasterData:[],
    //   createdt: null,
    //   createby: '',
    //   modifydt: null,
    //   modifyby: '',
    // };
    this.master.subMasterData =[];
    _.forEach(this.subMasterData, (subM, ind) => {
      this.master.subMasterData.push({
        subMasterId: this.master.masterid+`${ind+1}`,
        subMasterName: subM.subMasterName,
        subMasterDesc: subM.subMasterDesc,
        status: true,
        createdt: null,
        createby: '',
        modifydt: null,
        modifyby: '',
      })
    });

    let savingJson: any = this.master;
    this._service.onSaveJson('Store', 'insertGeneralMaster', [savingJson]);
    // this.onMasterSelect(event, this.selectMaster);
  }

  onActionClick(rowData: any, mode: any) {
    if (mode != null) {
      // params = JSON.parse(atob(params));
      let _id: number = rowData['_id'];
      this.getMasterData(_id);
      this.pageMode = mode;
    } else {
      this.isEditable = true;
      this.pageMode = 'NEW';
    }
    this.isEditable = this.pageMode != 'VIEW';
  }
  onAddClick(){
    this.subMasterData.push(JSON.parse(this.emptysubMasterData))
  }
  onRemoveClick(rowData:any){
    rowData.status=false;
  }
}
