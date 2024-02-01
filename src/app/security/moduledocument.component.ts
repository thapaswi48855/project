import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-moduledocument',
  templateUrl: './moduledocument.component.html',
  styleUrls: ['./moduledocument.component.css'],
})
export class ModuledocumentComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;

  public pageTitle: string = 'Module';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;

  public modulesLists: any = [];
  public subModulesLists: any = [];
  public documentLists: any = [];

  public selectedModule: any = [];
  public selectedSubModule: any = [];
  public selectedDocuments: any = [];

  public selectmodulesLists: any = [];

  constructor(public _service: MasterserviceService) {}

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.modulesLists = this._service
      .serGetData('getModules')
      .subscribe((dt: any) => {
        console.log(dt);
        this.modulesLists = dt.data;
        return _.forEach(this.modulesLists, (module, moduleI) => {
          module['selected'] = false;
        });
      });
    this.documentLists = this._service
      .serGetData('documents')
      .subscribe((dt: any) => {
        console.log(dt);
        this.documentLists = dt.data;
        return _.forEach(this.documentLists, (document, documentInd) => {
          document['selected'] = false;
        });
      });
  }

  onSelectmodule(selectModule: any, event: any) {
    console.log(selectModule);
    console.log(event);
    // selectModule.selected =event.target.selected;
    // // Get
    this.subModulesLists = [];
    if (event == true) {
      this.selectmodulesLists = this._service
        .serGetSelectedDataobject('getModuleDocuments', selectModule)
        .subscribe((dt: any) => {
          console.log(dt);
          this.selectmodulesLists = dt.data;
          this.selectGetModule(selectModule, event);
        });
    }

    // console.log('this.selectmodulesLists', this.selectmodulesLists);

    // this.selectGetModule(selectModule);
  }
  public filterSubmodule: any = [];
  selectGetModule(selectModule: any, event: any) {
    //   selectModule.selected =event.target.selected
    this.selectedModule = selectModule;
    this.filterSubmodule = [];
    this.filterSubmodule = _.filter(this.selectmodulesLists, {
      moduleid: selectModule._id,
    });
    // console.log('a',a)
    // if (this.filterSubmodule.length > 0 ) {
    //   _.filter(this.filterSubmodule, (subM, subMI) => {
    //     _.filter(selectModule.submodel, (subL, subLI) => {
    //       if (subM.submoduleid == subL._id) {
    //         subL['selected'] = true;
    //       }
    //     });
    //   });
    // }

    this.subModulesLists = selectModule.submodel;
    _.filter(this.filterSubmodule,(doc,ind)=>{
      if(doc.submoduleid == undefined){
        this.onSelectSubmodule(null, false)
      }
     
    })
    
    //   // _.forEach( this.selectmodulesLists,(module,ind)=>{
    //   //   console.log(module);

    //   // })
  }

  onSelectSubmodule(subModulesList: any, event: any) {
    this.selectedSubModule=[];
    this.selectedSubModule = subModulesList;
    // subModulesList.selected = event.target.selected;
    //   this.selectedSubModule = subModulesList;
    //   // console.log(this.filterSubmodule)//documentid, documentname
    //   // console.log(subModulesList.submoduleid)

    if (this.filterSubmodule.length > 0) {
      _.filter(this.filterSubmodule, (doc, docI) => {
        _.filter(this.documentLists, (docL, docLI) => {
          if (doc.documentid == docL._id) {
            docL['selected'] = doc.documentstatus;
          }
        });
      });
    }
  }
  onSelectDocuments(documents: any, event: any) {
    console.log(event);
    documents.selected = event;
    documents['id']=0;
    console.log(this.documentLists);
    //   this.selectedDocuments.push(documents);
  }
  onGridClick() {}
  onSaveClick() {
    console.log(this.selectedModule);
    console.log(this.selectedSubModule);
    console.log(this.documentLists);

    // _.filter(this.documentLists)
    this.selectedDocuments = _.filter(this.documentLists, {id:0});

    let savingJson: any = [];//submoduleid: this.selectedSubModule._id,
    _.forEach(this.selectedDocuments, (document, docInd) => {
      let id = _.filter(this.selectmodulesLists, {
        moduleid: this.selectedModule._id,        
        documentid: document._id,
      });
      console.log(id);
      savingJson.push({
        _id: id.length > 0 ?id[0]._id : 0,
        moduleid: this.selectedModule._id,
        modulename: this.selectedModule.modulename,
        submoduleid: this.selectedSubModule == null ?null :this.selectedSubModule._id,
        submodulename: this.selectedSubModule == null ? null :this.selectedSubModule.submodulename,
        documentid: document._id,
        documentname: document.document,
        documentstatus:document.selected,
        documentpageurl:document.documentpageurl,
        documentgridUrl:document.documentgridUrl,
      });
    });
    _.forEach(savingJson,(obj,ind)=>{
      if(obj._id == 0){
        delete obj._id ;
      }
    })

    this._service.onSaveJson(
      this.pageTitle,
      'insertModuleDocuments',
      savingJson
    );
    this.onClearClick();
  }
  onClearClick() {
    this.selectedModule.selected=false;
    this.selectedSubModule.selected =false;
    _.forEach(this.selectedDocuments,(doc,ind)=>{
      doc.selected=false
    })
  }
}
