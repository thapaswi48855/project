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
  }
  public filterSubmodule: any = [];
  selectGetModule(selectModule: any, event: any) {
    //   selectModule.selected =event.target.selected
    this.selectedModule = selectModule;
    this.filterSubmodule = [];
    this.filterSubmodule = _.filter(this.selectmodulesLists, {
      moduleid: selectModule.moduleid,
    });
    this.subModulesLists = selectModule.submodel;
    _.filter(this.filterSubmodule, (doc, ind) => {
      if (doc.submoduleid == undefined) {
        this.onSelectSubmodule(null, false);
      }
    });
  }

  onSelectSubmodule(subModulesList: any, event: any) {
    this.selectedSubModule = [];
    this.selectedSubModule = subModulesList;

    if (this.filterSubmodule.length > 0) {
      _.filter(this.filterSubmodule, (doc, docI) => {
        _.filter(this.documentLists, (docL, docLI) => {
          if (doc.documentid == docL.documentid) {
            docL['selected'] = doc.documentstatus;
          }
        });
      });
    }
  }
  public modDoc: any = [];
  onSelectDocuments(documents: any, event: any) {
    // console.log(event);
    // documents.selected = event;
    // documents['id'] = 0;
    // console.log(this.documentLists);
    //   this.selectedDocuments.push(documents);
    this.modDoc.push({
      moduledocMapid: 0,
      moduleid: this.selectedModule.moduleid,
      modulename: this.selectedModule.modulename,
      submoduleid:
        this.selectedSubModule == null ? null : this.selectedSubModule._id,
      submodulename:
        this.selectedSubModule == null
          ? null
          : this.selectedSubModule.submodulename,
      documentid: documents.documentid,
      documentname: documents.document,
      documentstatus: documents.selected,
      documentpageurl: documents.documentpageurl,
      documentgridUrl: documents.documentgridUrl,
    });
  }
  onGridClick() {}
  onSaveClick() {
    let savingJson: any = []; //submoduleid: this.selectedSubModule._id,
    // let modDoc: any = [];
    // _.forEach(this.documentLists, (document, docInd) => {
    //   modDoc = _.filter(this.selectmodulesLists, {
    //     moduleid: this.selectedModule.moduleid,
    //     documentid: document.documentid,
    //   });
    // });

    // // console.log(id);

    // _.filter(modDoc, (mDL, mdlI) => {
    //   savingJson.push({
    //     moduledocMapid: 0,
    //     moduleid: this.selectedModule.moduleid,
    //     modulename: this.selectedModule.modulename,
    //     submoduleid:
    //       this.selectedSubModule == null ? null : this.selectedSubModule._id,
    //     submodulename:
    //       this.selectedSubModule == null
    //         ? null
    //         : this.selectedSubModule.submodulename,
    //     documentid: mDL.documentid,
    //     documentname: mDL.document,
    //     documentstatus: mDL.selected,
    //     documentpageurl: mDL.documentpageurl,
    //     documentgridUrl: mDL.documentgridUrl,
    //   });
    // });
    savingJson=this.modDoc ;
    this._service.onSaveJson(
      this.pageTitle,
      'insertModuleDocuments',
      savingJson
    );
    this.onClearClick();
  }
  onClearClick() {
    this.selectedModule.selected = false;
    this.selectedSubModule.selected = false;
    _.forEach(this.selectedDocuments, (doc, ind) => {
      doc.selected = false;
    });
  }
}
