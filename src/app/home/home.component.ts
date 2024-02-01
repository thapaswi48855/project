import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MasterserviceService } from '../masterService/masterservice.service';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public sidebarVisible: boolean = false;
  public modulesList: any = [];
  public moduleArray: any = [];
  selectedNodes: any;
  constructor(
    private _service: MasterserviceService,
    private _router: Router,
    private _activatrRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    let roleId:any =window.localStorage.getItem('UserInfo');
    roleId=JSON.parse(roleId)
    this._service
      .serTokenGetData('getAssigneByPermissions',{roleid:roleId[0].userRoleid})
      .subscribe((dt: any) => {
        console.log('m', dt);
        this.modulesList = dt.data;

        console.log(dt.data[0]['Role Id']);
        
        let moduleUniq: any = _.uniqBy(this.modulesList, 'moduleid');
        console.log(moduleUniq);
        _.forEach(moduleUniq, (module, mInd) => {
          this.moduleArray.push({
            label: module['modulename'],
            icon: 'pi pi-fw pi-file',
            items: [],
          });
          if (module['Submodule Id'] != null) {
            // let submoduleUniq: any = _.filter(_.uniqBy(this.modulesList, 'Submodule Id'),['Submodule Id', !null]);
            let submoduleUniq: any =_.reject(_.uniqBy(this.modulesList, 'Submodule Id'),['Submodule Id', null])
            console.log('submoduleUniq', submoduleUniq);
            _.forEach(submoduleUniq, (subM, subMI) => {
              if (subM['Submodule Id'] != null) {
                this.moduleArray[mInd]['items'].push({
                  label: subM['Submodule Name'],
                  icon: 'pi pi-fw pi-file',
                  items: [],
                });

                let moduleDocuments =_.filter(this.modulesList,{'Submodule Id':subM['Submodule Id']})
                _.forEach(moduleDocuments,(moduleDoc,moduleDocInd)=>{
                  _.forEach(moduleDoc.Documents,(doc,dInd)=>{
                    this.moduleArray[mInd]['items'][subMI]['items'].push({
                      label: doc['Document Name'],
                            icon: 'pi pi-fw pi-file',
                            routerLink: `${doc['Document Grid Url']}`, //Document Page Url
                            items: [],
                            documentDet: {
                              module_id: ['Module Id'],
                              sub_module_id: [''],
                              document_id: doc['Document Id'],},
                              documentDetails:doc
                    });
                  })
                  
                })


              }

             


            });
          }else{
            let moduleDocuments =_.filter(this.modulesList,{'moduleid':module['moduleid']})
            // _.forEach(moduleDocuments,(moduleDoc,moduleDocInd)=>{
              _.forEach(moduleDocuments,(doc,dInd)=>{
                this.moduleArray[mInd]['items'].push({
                  label: doc['documentname'],
                        icon: 'pi pi-fw pi-file',
                        routerLink: `${doc['documentpageurl']}`, //Document Page Url
                        items: [],
                        documentDet: {
                          module_id: doc['moduleid'],
                          // sub_module_id: [''],
                          document_id: doc['documentid'],},
                          documentDetails:doc
                        // doc
                        // {
                        //   module_id: ['moduleid'],
                        //   sub_module_id: [''],
                        //   document_id: doc['documentid'],}
                });
              })
              
            // })
           
          }

          // _.forEach(moduleUniq, (subM, subMI) => {
          //   if(subM['Submodule Id'] != null){
          //     let submoduleUniq: any = _.uniqBy(
          //       this.modulesList,
          //       subM['Submodule Id']
          //     );
          //     if (submoduleUniq.length > 0) {
          //       this.moduleArray[mInd]['items'].push({
          //         label: subM['Submodule Name'],
          //         icon: 'pi pi-fw pi-file',
          //         items: [],
          //       });
          //     }
          //   }else{
          //     if (module.Documents.length > 0) {
          //       _.forEach(module.Documents, (doc, docI) => {
          //         this.moduleArray[mInd]['items'].push({
          //           label: doc['Document Name'],
          //           icon: 'pi pi-fw pi-file',
          //           routerLink: `${doc['Document Grid Url']}`, //Document Page Url
          //           items: [],
          //           documentDet: {
          //             module_id: ['Module Id'],
          //             sub_module_id: [''],
          //             document_id: doc['Document Id'],
          //           },
          //         });
          //       });
          //     }
          //   }

          // });

          //  else {

          // }
        });
      });
  }

  onNavitionToMenu(routerLink: any, documents: any) {
    if (routerLink != '') {
     let document={'moduleid':documents.documentDet.module_id ,'documentid':documents.documentDet.document_id}
      let param = btoa(JSON.stringify(document));
      let docParams=btoa(JSON.stringify(documents.documentDetails))
      this._router.navigate([`${routerLink}`, { params: param ,docParams:docParams}], {
        relativeTo: this._activatrRoute,
      });
      this.sidebarVisible =false;
    }
  }

  onSignOut(){
    this._router.navigateByUrl('/login');
    alert('hi')
  }
}
