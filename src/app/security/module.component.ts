import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;


  public pageMode='NEW';

  public pageTitle: string = 'Module';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;

  public currentRow:any =[];

  public module: any = {
    moduleName: '',
    moduleDescription: '',
    status: true,
  };
  public emptyDocument = JSON.stringify(this.module);
  // public gridCols = [
  //   {
  //     field: 'Country',
  //     header: 'Country',
  //     style: {
  //       width: '100px',
  //     },
  //   },
  //   {
  //     field: 'State',
  //     header: 'State',
  //     style: {
  //       width: '100px',
  //     },
  //   },
  // ];
  // public gridData = [
  //   {
  //     Country: 1,
  //     State: '',
  //   },
  //   {
  //     Country: 2,
  //     State: '',
  //   },
  // ];
  // public subDocument:any ={
  //   subDocumentName:'',
  //   subDocumentDesc:''
  // }
  public subModules: any = [];
  constructor(public _service: MasterserviceService,public _activactiveRoute:ActivatedRoute) {}

  public errorMsgs:any={
    'moduleNameReq':'',
  
  }

  onGetErrorMsgs(ctrl:any,showToast:any){
    switch(ctrl){
      case 'moduleName' :
        this.errorMsgs.moduleNameReq= (this.module[ctrl] == '' || this.module[ctrl] == undefined ||this.module[ctrl] == null) ?this._service.onGetErrorMsgs('moduleName', true,'Module Name'):'';
        break;
        

    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
    // this.subModules.push({
    //   subModuleName: '',
    //   subModuleDesc: '',
    //   subStatus: '',
    // });
    this._activactiveRoute.paramMap.subscribe(async (param: ParamMap) => {
      let docParms = param.get('param');
      if(docParms != null && docParms != undefined){
        let docPermissions=JSON.parse(atob(docParms));
console.log(docPermissions)
        this._service.serGetDataobject('getModules', {_id:docPermissions._id}).subscribe((dt: any) => {
          console.log(dt);
          this.currentRow =dt.data[0]
          this.module ={
            moduleName: this.currentRow.modulename ,
            moduleDescription: this.currentRow.moduledesc,
            status: this.currentRow.status,
            submodel:[]
            // documentDescription: this.currentRow.documentdescription,
            // status: true,
          }
          _.forEach(this.currentRow.submodel,(submod,submodInd)=>{
            this.module.submodel.push({
              subModuleName:submod.submodulename,
              subModuleDesc:submod.submoduledesc,
              submodelstatus:submod.submodelstatus
            })
          })
  
        });
        this.pageMode ='EDIT';

      }
      
    });
  }

  onGridClick() {}
  addSubModules() {
    this.subModules.push({
      subModuleName: '',
      subModuleDesc: '',
      subStatus: '',
    });
  }
  removeSubModules(index: any) {
    // this.subDocuments.slice
  }

  onSaveClick() {
    // let objectstore = ['moduleName'];
    // _.forEach(objectstore, (ctrl) => {
    //   this._service.onGetErrorMsgs(this.module, ctrl, true);
    // });

    let objectstore = ['moduleName'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl,true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    if (errorExist) {
      return;
    }

    let savingJson: any = {
      modulename: this.module.moduleName,
      moduledesc: this.module.moduleDescription,
      status: this.module.status == true ? 'A' : 'D',
      submodel: [],
    };
    if (this.subModules.length > 0) {
      _.forEach(this.subModules, (subDoc, subInd) => {
        savingJson['submodel'].push({
          submodulename: subDoc.subModuleName,
          submoduledesc: subDoc.subModuleDesc,
          submodelstatus: 'A',
        });
      });
    }

    this._service.onSaveJson(this.pageTitle, 'insertModule', [
      savingJson
    ]);
    this.onClearClick();
  }
  onClearClick() {}
}
