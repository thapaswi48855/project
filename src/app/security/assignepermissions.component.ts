import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-assignepermissions',
  templateUrl: './assignepermissions.component.html',
  styleUrls: ['./assignepermissions.component.css'],
})
export class AssignepermissionsComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;

  public pageTitle: string = 'Module';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;
  public modulesLists: any = [];
  public subModulesLists: any = [];
  public documentLists: any = [];
  public rolesLists: any = [];
  public modulesDocumentLists: any = [];

  public selectedModule: any = [];
  public selectedSubModule: any = [];
  public selectedRole: any = [];

  public selectmodulesLists: any = [];
  public submodulesLists: any = [];

  public document: any = [];
  public selectDocumentLists: any = [];
  public getAssigneByPermission: any = [];

  constructor(public _service: MasterserviceService) {}
  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.rolesLists = this._service
      .serGetData('getRoles')
      .subscribe((dt: any) => {
        console.log('a', dt.data);
        this.rolesLists = dt.data;
        _.forEach(this.rolesLists, (role, roleI) => {
          role['selected'] = false;
        });
      });

    this.modulesLists = this._service
      .serGetData('getModules')
      .subscribe((dt: any) => {
        console.log('b', dt);
        this.modulesLists = dt.data;
        _.forEach(this.modulesLists, (module, moduleI) => {
          module['selected'] = false;
        });
        // return (this.modulesLists = _.unionBy(
        //   dt.data,
        //   (obj: any) => obj['Module Id']
        // ));
      });
    this.getAssigneByPermission = this._service
      .serGetData('getAssigneByPermissions')
      .subscribe((dt: any) => {
        console.log(dt);
        this.getAssigneByPermission = dt.data;
        // this.onSelectSubModuleList(selectModule);
      });
    console.log('this.getAssigneByPermission', this.getAssigneByPermission);
  }

  onSelectRole(role: any, event: any) {
    this.selectedRole = role;
  }

  onSelectmodule(selectModule: any, event: any) {
    this.selectedModule = selectModule;
    this.subModulesLists = [];
    this.documentLists = [];

    //Get
    if (event == true) {
      this.selectmodulesLists = this._service
        .serGetSelectedDataobject('getModuleDocuments', selectModule)
        .subscribe((dt: any) => {
          console.log(dt);
          this.selectmodulesLists = dt.data;
          this.onSelectSubModuleList(selectModule, event);
        });
    }
    // this.selectmodulesLists = this._service
    //   .serGetSelectedDataobject('getModuleDocuments', selectModule)
    //   .subscribe((dt: any) => {
    //     console.log(dt);
    //     this.selectmodulesLists = dt.data;
    //     this.onSelectSubModuleList(selectModule);
    //   });

    // this.selectedModule = selectModule.submodel;
    // this.subModulesLists = [];
    // this.documentLists = [];

    //   let subModulesLists: any = _.filter(this.modulesLists, {
    //     _id: selectModule._id,
    //   });
    //   console.log('module',subModulesLists)

    //   // console.log(this.subModulesList)
    //   // if (
    //   //   subModulesLists[0]['SubModule'] != undefined &&
    //   //   subModulesLists[0]['SubModule'].length > 0
    //   // ) {
    //   //   this.subModulesLists = subModulesLists[0]['SubModule'];
    //   // }else{

    //   // }
    // if (selectModule['Sub Module Id'] != undefined) {
    //   let subModules = _.uniqBy(_.filter(this.modulesDocumentLists, {
    //     ['Module Id']: selectModule['Module Id'],
    //   }),'Sub Module Id')
    //   console.log('subModules', subModules);
    //   _.forEach(subModules, (subM, subMI) => {
    //     this.subModulesLists.push({
    //       'Sub Module Id': subM['Sub Module Id'],
    //       'Sub Module Name': subM['Sub Module Name'],
    //     });
    //   });
    //   // this.subModulesLists;
    // } else {
    //   this.document = _.filter(this.modulesDocumentLists, {
    //     ['Module Id']: selectModule['Module Id'],
    //   });
    //   this.onSelectSubModule(selectModule);
    // }
  }
  public getFliterAssigneByPermission: any = [];
  public filterSelectmodule: any = {};
  onSelectSubModuleList(selectModule: any, event: any) {
    //getAssigneByPermissions
    this.filterSelectmodule = selectModule;
    this.documentLists = [];

    this.getFliterAssigneByPermission = _.filter(this.getAssigneByPermission, {
      roleid: this.selectedRole._id,
      moduleid: selectModule._id,
    });

    if (event == true) {
      this.submodulesLists = _.filter(this.selectmodulesLists, {
        moduleid: selectModule._id,
      });
      if (this.submodulesLists.length > 0) {
        _.forEach(this.submodulesLists, (subM, subI) => {
          if (subM.submoduleid != undefined) {
            this.subModulesLists.push({
              submodulename: subM.submodulename,
              submoduleid: subM.submoduleid,
            });
          }
        });
      }
      if (this.submodulesLists.length > 0) {
        let documentListLists = _.filter(this.selectmodulesLists, {
          moduleid: selectModule._id,
        });
        _.forEach(documentListLists, (doc, docI) => {
          // if (doc.submoduleid != undefined || doc.submoduleid != null) {
          if (this.getFliterAssigneByPermission.length > 0) {
            if (doc.submoduleid != undefined || doc.submoduleid != null) {
              let getDoc = _.filter(this.getFliterAssigneByPermission, {
                documentid: doc.documentid,
              });
              // _.forEach(
              //   this.getFliterAssigneByPermission,
              //   (getDoc, getDocI) => {
              // if (doc.documentid == getDoc.documentid) {
              if (getDoc.length > 0) {
                this.documentLists.push({
                  _id: getDoc[0]._id,
                  documentname: doc.documentname,
                  documentid: doc.documentid,
                  documentselected:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].documentselected
                      : false,
                  docAccAddNew:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccAddNew
                      : false,
                  docAccGridView:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccGridView
                      : false,
                  docAccClear:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccClear
                      : false,
                  docAccEdit:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccEdit
                      : false,
                  docAccView:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccView
                      : false,
                  docAccExport:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccExport
                      : false,
                  docAccSubmit:
                    doc.documentid == getDoc[0].documentid
                      ? getDoc[0].docAccSubmit
                      : false,
                  documentpageurl: doc.documentpageurl,
                  documentgridUrl: doc.documentgridUrl,
                });
              }

              // }
              //   }
              // );
            } else {
              // if(this.getFliterAssigneByPermission.length > 0){
              let getDoc = _.filter(this.getFliterAssigneByPermission, {
                documentid: doc.documentid,
              });
              // if(getDoc.length > 0){
              this.documentLists.push({
                documentname: doc.documentname,
                documentid: doc.documentid,
                documentselected:
                  getDoc.length > 0 ? getDoc[0].documentselected : false,
                docAccAddNew:
                  getDoc.length > 0 ? getDoc[0].docAccAddNew : false,
                docAccGridView:
                  getDoc.length > 0 ? getDoc[0].docAccGridView : false,
                docAccClear: getDoc.length > 0 ? getDoc[0].docAccClear : false,
                docAccEdit: getDoc.length > 0 ? getDoc[0].docAccEdit : false,
                docAccView: getDoc.length > 0 ? getDoc[0].docAccView : false,
                docAccExport:
                  getDoc.length > 0 ? getDoc[0].docAccExport : false,
                docAccSubmit:
                  getDoc.length > 0 ? getDoc[0].docAccSubmit : false,
                documentpageurl: doc.documentpageurl,
                documentgridUrl: doc.documentgridUrl,
              });
              // }

              // })

              // }
            }
          }else {
            this.documentLists.push({
              documentname: doc.documentname,
              documentid: doc.documentid,
              documentselected: false,
              docAccAddNew: false,
              docAccGridView: false,
              docAccClear: false,
              docAccEdit: false,
              docAccView: false,
              docAccExport: false,
              docAccSubmit: false,
              documentpageurl: doc.documentpageurl,
              documentgridUrl: doc.documentgridUrl,
            });
          }
          // }
        });
      }
    } else {
      //  if (this.submodulesLists.length > 0) {
      let documentListLists = _.filter(this.selectmodulesLists, {
        moduleid: selectModule._id,
      });
      _.forEach(documentListLists, (doc, docI) => {
        if (doc.submoduleid == undefined) {
          if (this.getFliterAssigneByPermission.length > 0) {
            _.forEach(this.getFliterAssigneByPermission, (getDoc, getDocI) => {
              // if (doc.documentid == getDoc.documentid) {
              this.documentLists.push({
                _id: getDoc._id,
                documentname: doc.documentname,
                documentid: doc.documentid,
                documentselected:
                  doc.documentid == getDoc.documentid
                    ? getDoc.documentselected
                    : false,
                docAccAddNew:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccAddNew
                    : false,
                docAccGridView:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccGridView
                    : false,
                docAccClear:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccClear
                    : false,
                docAccEdit:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccEdit
                    : false,
                docAccView:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccView
                    : false,
                docAccExport:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccExport
                    : false,
                docAccSubmit:
                  doc.documentid == getDoc.documentid
                    ? getDoc.docAccSubmit
                    : false,
                documentpageurl: doc.documentpageurl,
                documentgridUrl: doc.documentgridUrl,
              });
              // }
            });
          } else {
            this.documentLists.push({
              documentname: doc.documentname,
              documentid: doc.documentid,
              documentselected: false,
              docAccAddNew: false,
              docAccGridView: false,
              docAccClear: false,
              docAccEdit: false,
              docAccView: false,
              docAccExport: false,
              docAccSubmit: false,
              documentpageurl: doc.documentpageurl,
              documentgridUrl: doc.documentgridUrl,
            });
          }
        }
      });
    }
    // this.subModulesLists =selectModule.submodel
  }

  onSelectSubModule(SubModule: any, event: any) {
    this.getFliterAssigneByPermission = _.filter(this.getAssigneByPermission, {
      roleid: this.selectedRole._id,
      moduleid: this.filterSelectmodule._id,
      submoduleid: SubModule.submoduleid,
    });
    this.selectedSubModule = SubModule;
    this.documentLists = [];
    if (event == true) {
      let documentListLists = _.filter(this.selectmodulesLists, {
        submoduleid: SubModule.submoduleid,
      });
      _.forEach(documentListLists, (doc, docI) => {
        if (this.getFliterAssigneByPermission.length > 0) {
          _.forEach(this.getFliterAssigneByPermission, (getDoc, getDocI) => {
            this.documentLists.push({
              _id: getDoc._id,
              documentname: doc.documentname,
              documentid: doc.documentid,
              documentselected:
                doc.documentid == getDoc.documentid
                  ? getDoc.documentselected
                  : false,
              docAccAddNew:
                doc.documentid == getDoc.documentid
                  ? getDoc.docAccAddNew
                  : false,
              docAccGridView:
                doc.documentid == getDoc.documentid
                  ? getDoc.docAccGridView
                  : false,
              docAccClear:
                doc.documentid == getDoc.documentid
                  ? getDoc.docAccClear
                  : false,
              docAccEdit:
                doc.documentid == getDoc.documentid ? getDoc.docAccEdit : false,
              docAccView:
                doc.documentid == getDoc.documentid ? getDoc.docAccView : false,
              docAccExport:
                doc.documentid == getDoc.documentid
                  ? getDoc.docAccExport
                  : false,
              docAccSubmit:
                doc.documentid == getDoc.documentid
                  ? getDoc.docAccSubmit
                  : false,
              documentpageurl: doc.documentpageurl,
              documentgridUrl: doc.documentgridUrl,
            });
          });
        } else {
          this.documentLists.push({
            documentname: doc.documentname,
            documentid: doc.documentid,
            documentselected: false,
            docAccAddNew: false,
            docAccGridView: false,
            docAccClear: false,
            docAccEdit: false,
            docAccView: false,
            docAccExport: false,
            docAccSubmit: false,
            documentpageurl: doc.documentpageurl,
            documentgridUrl: doc.documentgridUrl,
          });
        }
      });
    }
    // this.documentLists = SubModule.document;
    //     this.selectedSubModule.push(SubModule);
    //     let documentLists: any = _.filter(this.modulesLists, {
    //       'Module Id'
    // : SubModule['Module Id'],//sub_id,
    //     });
    //     if (
    //       documentLists[0]['Documents'] != undefined &&
    //       documentLists[0]['Documents'].length > 0
    //     ) {
    //       this.documentLists = documentLists[0]['Documents'];
    //       _.forEach(this.documentLists, (doc, ind) => {
    //               (doc['addNewSelect'] = true), (doc['gridViewSelect'] = true);
    //             });
    //     }

    // _.forEach(this.modulesDocumentLists,(modDoc,modDocInd)=>{
    // if (SubModule['Sub Module Id'] != undefined) {
    //   this.document = _.filter(this.modulesDocumentLists, {
    //     ['Sub Module Id']: SubModule['Sub Module Id'],
    //   });
    // }

    // _.forEach(this.document, (doc, docI) => {
    //   _.forEach(doc.Documents, (docs, docsI) => {
    //     this.documentLists.push(docs);
    //     console.log(this.documentLists);
    //   });
    // });
    // })

    // this.documentLists = this.selectedModule.Documents;
    // _.forEach(this.documentLists, (doc, ind) => {
    //   (doc['addNewSelect'] = true),
    //     (doc['gridViewSelect'] = true),
    //     (doc['clearSelect'] = true),
    //     (doc['submitSelect'] = true),
    //     (doc['exportSelect'] = true);
    // });
  }

  onSelectDocuments(documents: any, event: any) {
    // this.selectDocumentLists.push(documents);
    // _.forEach(this.documentLists,(document,documentI)=>{

    // })
    if (documents.documentselected == true) {
      documents.docAccAddNew = true;
      documents.docAccClear = true;
      documents.docAccEdit = true;
      documents.docAccExport = true;
      documents.docAccGridView = true;
      documents.docAccView = true;
      documents.docAccSubmit = true;
      documents.documentselected = true;
      documents.documentpageurl = documents.documentpageurl;
      documents.documentgridUrl = documents.documentgridUrl;
    } else {
      documents.docAccAddNew = false;
      documents.docAccClear = false;
      documents.docAccEdit = false;
      documents.docAccExport = false;
      documents.docAccGridView = false;
      documents.docAccView = false;
      documents.docAccSubmit = false;
      documents.documentselected = false;
      documents.documentpageurl = documents.documentpageurl;
      documents.documentgridUrl = documents.documentgridUrl;
    }
    this.selectDocumentLists.push(documents);
  }

  onGridClick() {}
  onSaveClick() {
    console.log(this.selectedRole);
    console.log(this.selectedModule);
    console.log(this.selectedSubModule);
    console.log(this.selectDocumentLists);
    let savingJson: any = [];

    _.forEach(this.selectDocumentLists, (document, documentInd) => {
      savingJson.push({
        _id: document._id == undefined ? 0 : document._id,
        roleid: this.selectedRole._id,
        rolename: this.selectedRole['Role Name'],
        moduleid: this.selectedModule._id,
        modulename: this.selectedModule.modulename,
        submoduleid: this.selectedSubModule.submoduleid,
        submodulename: this.selectedSubModule.submodulename,
        documentid: document.documentid,
        documentname: document.documentname,
        docAccAddNew: document.docAccAddNew,
        docAccClear: document.docAccClear,
        docAccEdit: document.docAccEdit,
        docAccExport: document.docAccExport,
        docAccGridView: document.docAccGridView,
        docAccView: document.docAccView,
        docAccSubmit: document.docAccSubmit,
        documentpageurl: document.documentpageurl,
        documentgridUrl: document.documentgridUrl,
      });
    });

    // let savingJson: any = {
    //   'Role Id': this.selectedRole['_id'],
    //   'Role Name': this.selectedRole['Role Name'],
    //   'Module Id': this.selectedModule['Module Id'],
    //   'Module Name': this.selectedModule['Module Name'],
    //   'Submodule Id': this.selectedModule['Sub Module Id'],
    //   'Submodule Name': this.selectedModule['Sub Module Name'],
    //   Documents: [],
    // };
    // // savingJson.push(permissionsJson)
    // _.forEach(this.selectDocumentLists, (doc, ind) => {
    //   savingJson.Documents.push({
    //     'Document Id': doc['Document Id'],
    //     'Document Name': doc['Document Name'],
    //     'Document Page Url': doc['Document Page Url'],
    //     'Document Grid Url': doc['Document Grid Url'],
    //     'Document AddNew': doc['addNewSelect'],
    //     'Document GridView': doc['gridViewSelect'],
    //     'Document Clear': doc['clearSelect'],
    //     'Document Submit': doc['submitSelect'],
    //     'Document Export': doc['exportSelect'],
    //   });
    // });
    // let savingJson: any = {
    //   'Role Id': this.selectedRole['_id'],
    //   'Role Name': this.selectedRole['Role Name'],
    //   'Module Id': this.selectedModule['Module Id'],
    //   'Module Name': this.selectedModule['Module Name'],
    //   'Submodule Id': this.selectedSubModule['Sub Module Id'],
    //   'Submodule Name': this.selectedSubModule['Sub Module Name'],
    //   Documents: this.documentLists,
    // };
    // _.forEach(this.selectedModule, (module, index) => {
    //   savingJson['module'].push({
    //     'Module Id': module['Module Id'],
    //     'Module Name': module['Module Name'],
    //     'Module Doc Maping Id': module['_id'],
    //     subModule: [],
    //     Documents: [],
    //   });
    // });
    // if (this.selectedSubModule[0].SubModule.length > 0) {
    //   _.forEach(this.selectedSubModule, (subModule, subInd) => {
    //     savingJson['module'][0]['subModule'].push({
    //       'Submodule Id': subModule['Sub Module Id'],
    //       'Submodule Name': subModule['Sub Module Name'],
    //       'Module Submodule Mapping Id': subModule['sub_id'],
    //       Documents: [],
    //     });
    //   });
    //   _.forEach(this.documentLists, (document, ind) => {
    //     savingJson['module'][0]['subModule'][0]['Documents'].push({
    //       'Document Id': document['Document Id'],
    //       'Document Name': document['Document Name'],
    //       'Document Page Url': document['Document Page Url'],
    //       'Document Grid Url': document['Document Grid Url'],
    //       'Document AddNew': document['addNewSelect'],
    //       'Document GridView': document['gridViewSelect'],
    //     });
    //   });
    // }

    // if (this.documentLists.length > 0) {
    //   _.forEach(this.documentLists, (document, ind) => {
    //     savingJson['module'][0]['Documents'].push({
    //       'Document Id': document['Document Id'],
    //       'Document Name': document['Document Name'],
    //       'Document Page Url': document['Document Page Url'],
    //       'Document Grid Url': document['Document Grid Url'],
    //       'Document AddNew': document['addNewSelect'],
    //       'Document GridView': document['gridViewSelect'],
    //     });
    //   });
    // }
    _.forEach(savingJson, (doc, ind) => {
      if (doc._id == 0) {
        delete doc._id;
      }
    });

    console.log(savingJson);

    this._service.onSaveJson(
      this.pageTitle,
      'insertAssigneByPermissions',
      savingJson
    );

    this.onClearClick();
  }
  onClearClick() {}
}
