"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[5416],{7934:(V,v,a)=>{a.d(v,{G:()=>L});var C=a(5861),t=a(4946),p=a(7664),x=a(6113),e=a(5219),T=a(6814),M=a(707),k=a(4104);function b(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onSaveClick())}),t.qZA()}}function E(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onGridClick())}),t.qZA()}}function S(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onAddNewClick())}),t.qZA()}}function N(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onClearClick())}),t.qZA()}}function Z(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onEditClick())}),t.qZA()}}function G(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onSaveApproveClick())}),t.qZA()}}function y(_,A){if(1&_){const g=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(g);const c=t.oxw();return t.KtG(c.onSavePrintClick())}),t.qZA()}}let L=(()=>{var _;class A{constructor(u,c,h,f){this._router=u,this._service=c,this._activatedRoute=h,this._messageService=f,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var u=this;return(0,C.Z)(function*(){0==Object.keys(u._service.appConfig).length&&(yield u._service.getConfigData()),console.log(u),u._activatedRoute.paramMap.subscribe(function(){var c=(0,C.Z)(function*(h){let f=h.get("params");if(null!=f&&null!=f){let w=JSON.parse(atob(f)),r=u._service.getDocPermissions(w).subscribe(m=>{r=m.data[0],u.permissions(w,r)})}else u._router.navigate(["/home"],{relativeTo:u._activatedRoute})});return function(h){return c.apply(this,arguments)}}())})()}permissions(u,c){console.log("aaa",u),null!=u&&null!=u&&(this.pageTitle=c.documentname,this.docAccSubmit=c.docAccSubmit,this.docAccGridView=c.docAccGridView,this.docAccAddNew=c.docAccAddNew,this.docAccClear=c.docAccClear,this.docAccEdit=c.docAccEdit,this.docAccView=c.docAccView,this.docAccExport=c.docAccExport,this.routerAddNew=`/home/${c.documentpageurl}`,this.routerGridView=`/home/${c.documentgridUrl}`,this.docParams=u,this.docAccPer=c)}onGridClick(){this.gridClick.emit(!0);let u=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:u}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let u=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:u}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(_=A).\u0275fac=function(u){return new(u||_)(t.Y36(p.F0),t.Y36(x.f),t.Y36(p.gz),t.Y36(e.ez))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(u,c){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,b,1,0,"button",4),t.YNc(6,E,1,0,"button",5),t.YNc(7,S,1,0,"button",6),t.YNc(8,N,1,0,"button",7),t.YNc(9,Z,1,0,"button",8),t.YNc(10,G,1,0,"button",9),t.YNc(11,y,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return c.onMessageClose()}),t.qZA()),2&u&&(t.xp6(3),t.hij(" ",c.pageTitle,""),t.xp6(2),t.Q6J("ngIf",c.onSubmit&&c.docAccSubmit),t.xp6(1),t.Q6J("ngIf",c.onGrid&&c.docAccGridView),t.xp6(1),t.Q6J("ngIf",c.onAddNew&&c.docAccAddNew),t.xp6(1),t.Q6J("ngIf",c.onClear&&c.docAccClear),t.xp6(1),t.Q6J("ngIf",c.onEdit&&c.docAccEdit),t.xp6(1),t.Q6J("ngIf",c.onSaveApprove),t.xp6(1),t.Q6J("ngIf",c.onSavePrint))},dependencies:[T.O5,M.Hq,k.FN]}),A})()},5416:(V,v,a)=>{a.r(v),a.d(v,{AssignepermissionsModule:()=>w});var C=a(6814),t=a(5861),p=a(6990),x=a(7934),e=a(4946),T=a(6113),M=a(5219),k=a(95),b=a(9232),E=a(8057);function S(r,m){1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Roles"),e.qZA()())}function N(r,m){if(1&r){const l=e.EpF();e.TgZ(0,"tr",13)(1,"td")(2,"p-checkbox",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.selected=s)})("click",function(){const d=e.CHM(l).$implicit,i=e.oxw();return e.KtG(i.onSelectRole(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&r){const l=m.$implicit;e.Q6J("pSelectableRow",l),e.xp6(2),e.Q6J("ngModel",l.selected)("binary",!0),e.xp6(1),e.hij(" ",l["Role Name"]," ")}}function Z(r,m){1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Modules"),e.qZA()())}function G(r,m){if(1&r){const l=e.EpF();e.TgZ(0,"tr",13)(1,"td")(2,"p-checkbox",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.selected=s)})("click",function(){const d=e.CHM(l).$implicit,i=e.oxw();return e.KtG(i.onSelectmodule(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&r){const l=m.$implicit;e.Q6J("pSelectableRow",l),e.xp6(2),e.Q6J("ngModel",l.selected)("binary",!0),e.xp6(1),e.hij(" ",l.modulename," ")}}function y(r,m){1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Sub Modules"),e.qZA()())}function L(r,m){if(1&r){const l=e.EpF();e.TgZ(0,"tr",13)(1,"td")(2,"p-checkbox",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.selected=s)})("click",function(){const d=e.CHM(l).$implicit,i=e.oxw();return e.KtG(i.onSelectSubModule(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&r){const l=m.$implicit;e.Q6J("pSelectableRow",l),e.xp6(2),e.Q6J("ngModel",l.selected)("binary",!0),e.xp6(1),e.hij(" ",l.submodulename," ")}}function _(r,m){if(1&r&&(e.TgZ(0,"th"),e._UZ(1,"p-columnFilter",16),e.qZA()),2&r){const l=m.$implicit;e.xp6(1),e.Q6J("field",l.field)}}function A(r,m){if(1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Documents"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Add New"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Grid View"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Clear"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Submit"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Export"),e.qZA()(),e.TgZ(13,"tr"),e.YNc(14,_,2,1,"th",15),e.qZA()),2&r){const l=m.$implicit;e.xp6(14),e.Q6J("ngForOf",l)}}function g(r,m){if(1&r){const l=e.EpF();e.TgZ(0,"tr",13)(1,"td")(2,"p-checkbox",14),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.documentselected=s)})("click",function(){const d=e.CHM(l).$implicit,i=e.oxw();return e.KtG(i.onSelectDocuments(d,d.documentselected))}),e.qZA(),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"p-checkbox",17),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.docAccAddNew=s)}),e.qZA()(),e.TgZ(6,"td")(7,"p-checkbox",17),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.docAccGridView=s)}),e.qZA()(),e.TgZ(8,"td")(9,"p-checkbox",17),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.docAccClear=s)}),e.qZA()(),e.TgZ(10,"td")(11,"p-checkbox",17),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.docAccSubmit=s)}),e.qZA()(),e.TgZ(12,"td")(13,"p-checkbox",17),e.NdJ("ngModelChange",function(s){const i=e.CHM(l).$implicit;return e.KtG(i.docAccExport=s)}),e.qZA()()()}if(2&r){const l=m.$implicit;e.Q6J("pSelectableRow",l),e.xp6(2),e.Q6J("ngModel",l.documentselected)("binary",!0),e.xp6(1),e.hij(" ",l.documentname," "),e.xp6(2),e.Q6J("ngModel",l.docAccAddNew)("binary",!0),e.xp6(2),e.Q6J("ngModel",l.docAccGridView)("binary",!0),e.xp6(2),e.Q6J("ngModel",l.docAccClear)("binary",!0),e.xp6(2),e.Q6J("ngModel",l.docAccSubmit)("binary",!0),e.xp6(2),e.Q6J("ngModel",l.docAccExport)("binary",!0)}}let u=(()=>{var r;class m{constructor(n){this._service=n,this.pageTitle="Module",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.modulesLists=[],this.subModulesLists=[],this.documentLists=[],this.rolesLists=[],this.modulesDocumentLists=[],this.selectedModule=[],this.selectedSubModule=[],this.selectedRole=[],this.selectmodulesLists=[],this.submodulesLists=[],this.document=[],this.selectDocumentLists=[],this.getAssigneByPermission=[],this.getFliterAssigneByPermission=[],this.filterSelectmodule={}}ngOnInit(){var n=this;return(0,t.Z)(function*(){0==Object.keys(n._service.appConfig).length&&(yield n._service.getConfigData()),n.rolesLists=n._service.serGetData("getRoles").subscribe(s=>{console.log("a",s.data),n.rolesLists=s.data,p.forEach(n.rolesLists,(d,i)=>{d.selected=!1})}),n.modulesLists=n._service.serGetData("getModules").subscribe(s=>{console.log("b",s),n.modulesLists=s.data,p.forEach(n.modulesLists,(d,i)=>{d.selected=!1})}),n.getAssigneByPermission=n._service.serGetData("getAssigneByPermissions").subscribe(s=>{console.log(s),n.getAssigneByPermission=s.data}),console.log("this.getAssigneByPermission",n.getAssigneByPermission)})()}onSelectRole(n,s){this.selectedRole=n}onSelectmodule(n,s){this.selectedModule=n,this.subModulesLists=[],this.documentLists=[],1==s&&(this.selectmodulesLists=this._service.serGetSelectedDataobject("getModuleDocuments",n).subscribe(d=>{console.log(d),this.selectmodulesLists=d.data,this.onSelectSubModuleList(n,s)}))}onSelectSubModuleList(n,s){if(this.filterSelectmodule=n,this.documentLists=[],this.getFliterAssigneByPermission=p.filter(this.getAssigneByPermission,{roleid:this.selectedRole._id,moduleid:n._id}),1==s){if(this.submodulesLists=p.filter(this.selectmodulesLists,{moduleid:n._id}),this.submodulesLists.length>0&&p.forEach(this.submodulesLists,(d,i)=>{null!=d.submoduleid&&this.subModulesLists.push({submodulename:d.submodulename,submoduleid:d.submoduleid})}),this.submodulesLists.length>0){let d=p.filter(this.selectmodulesLists,{moduleid:n._id});p.forEach(d,(i,J)=>{if(this.getFliterAssigneByPermission.length>0)if(null!=i.submoduleid||null!=i.submoduleid){let o=p.filter(this.getFliterAssigneByPermission,{documentid:i.documentid});o.length>0&&this.documentLists.push({_id:o[0]._id,documentname:i.documentname,documentid:i.documentid,documentselected:i.documentid==o[0].documentid&&o[0].documentselected,docAccAddNew:i.documentid==o[0].documentid&&o[0].docAccAddNew,docAccGridView:i.documentid==o[0].documentid&&o[0].docAccGridView,docAccClear:i.documentid==o[0].documentid&&o[0].docAccClear,docAccEdit:i.documentid==o[0].documentid&&o[0].docAccEdit,docAccView:i.documentid==o[0].documentid&&o[0].docAccView,docAccExport:i.documentid==o[0].documentid&&o[0].docAccExport,docAccSubmit:i.documentid==o[0].documentid&&o[0].docAccSubmit,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})}else{let o=p.filter(this.getFliterAssigneByPermission,{documentid:i.documentid});this.documentLists.push({documentname:i.documentname,documentid:i.documentid,documentselected:o.length>0&&o[0].documentselected,docAccAddNew:o.length>0&&o[0].docAccAddNew,docAccGridView:o.length>0&&o[0].docAccGridView,docAccClear:o.length>0&&o[0].docAccClear,docAccEdit:o.length>0&&o[0].docAccEdit,docAccView:o.length>0&&o[0].docAccView,docAccExport:o.length>0&&o[0].docAccExport,docAccSubmit:o.length>0&&o[0].docAccSubmit,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})}else this.documentLists.push({documentname:i.documentname,documentid:i.documentid,documentselected:!1,docAccAddNew:!1,docAccGridView:!1,docAccClear:!1,docAccEdit:!1,docAccView:!1,docAccExport:!1,docAccSubmit:!1,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})})}}else{let d=p.filter(this.selectmodulesLists,{moduleid:n._id});p.forEach(d,(i,J)=>{null==i.submoduleid&&(this.getFliterAssigneByPermission.length>0?p.forEach(this.getFliterAssigneByPermission,(o,R)=>{this.documentLists.push({_id:o._id,documentname:i.documentname,documentid:i.documentid,documentselected:i.documentid==o.documentid&&o.documentselected,docAccAddNew:i.documentid==o.documentid&&o.docAccAddNew,docAccGridView:i.documentid==o.documentid&&o.docAccGridView,docAccClear:i.documentid==o.documentid&&o.docAccClear,docAccEdit:i.documentid==o.documentid&&o.docAccEdit,docAccView:i.documentid==o.documentid&&o.docAccView,docAccExport:i.documentid==o.documentid&&o.docAccExport,docAccSubmit:i.documentid==o.documentid&&o.docAccSubmit,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})}):this.documentLists.push({documentname:i.documentname,documentid:i.documentid,documentselected:!1,docAccAddNew:!1,docAccGridView:!1,docAccClear:!1,docAccEdit:!1,docAccView:!1,docAccExport:!1,docAccSubmit:!1,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl}))})}}onSelectSubModule(n,s){if(this.getFliterAssigneByPermission=p.filter(this.getAssigneByPermission,{roleid:this.selectedRole._id,moduleid:this.filterSelectmodule._id,submoduleid:n.submoduleid}),this.selectedSubModule=n,this.documentLists=[],1==s){let d=p.filter(this.selectmodulesLists,{submoduleid:n.submoduleid});p.forEach(d,(i,J)=>{this.getFliterAssigneByPermission.length>0?p.forEach(this.getFliterAssigneByPermission,(o,R)=>{this.documentLists.push({_id:o._id,documentname:i.documentname,documentid:i.documentid,documentselected:i.documentid==o.documentid&&o.documentselected,docAccAddNew:i.documentid==o.documentid&&o.docAccAddNew,docAccGridView:i.documentid==o.documentid&&o.docAccGridView,docAccClear:i.documentid==o.documentid&&o.docAccClear,docAccEdit:i.documentid==o.documentid&&o.docAccEdit,docAccView:i.documentid==o.documentid&&o.docAccView,docAccExport:i.documentid==o.documentid&&o.docAccExport,docAccSubmit:i.documentid==o.documentid&&o.docAccSubmit,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})}):this.documentLists.push({documentname:i.documentname,documentid:i.documentid,documentselected:!1,docAccAddNew:!1,docAccGridView:!1,docAccClear:!1,docAccEdit:!1,docAccView:!1,docAccExport:!1,docAccSubmit:!1,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})})}}onSelectDocuments(n,s){1==n.documentselected?(n.docAccAddNew=!0,n.docAccClear=!0,n.docAccEdit=!0,n.docAccExport=!0,n.docAccGridView=!0,n.docAccView=!0,n.docAccSubmit=!0,n.documentselected=!0,n.documentpageurl=n.documentpageurl,n.documentgridUrl=n.documentgridUrl):(n.docAccAddNew=!1,n.docAccClear=!1,n.docAccEdit=!1,n.docAccExport=!1,n.docAccGridView=!1,n.docAccView=!1,n.docAccSubmit=!1,n.documentselected=!1,n.documentpageurl=n.documentpageurl,n.documentgridUrl=n.documentgridUrl),this.selectDocumentLists.push(n)}onGridClick(){}onSaveClick(){console.log(this.selectedRole),console.log(this.selectedModule),console.log(this.selectedSubModule),console.log(this.selectDocumentLists);let n=[];p.forEach(this.selectDocumentLists,(s,d)=>{n.push({_id:null==s._id?0:s._id,roleid:this.selectedRole._id,rolename:this.selectedRole["Role Name"],moduleid:this.selectedModule._id,modulename:this.selectedModule.modulename,submoduleid:this.selectedSubModule.submoduleid,submodulename:this.selectedSubModule.submodulename,documentid:s.documentid,documentname:s.documentname,docAccAddNew:s.docAccAddNew,docAccClear:s.docAccClear,docAccEdit:s.docAccEdit,docAccExport:s.docAccExport,docAccGridView:s.docAccGridView,docAccView:s.docAccView,docAccSubmit:s.docAccSubmit,documentpageurl:s.documentpageurl,documentgridUrl:s.documentgridUrl})}),p.forEach(n,(s,d)=>{0==s._id&&delete s._id}),console.log(n),this._service.onSaveJson(this.pageTitle,"insertAssigneByPermissions",n),this.onClearClick()}onClearClick(){}}return(r=m).\u0275fac=function(n){return new(n||r)(e.Y36(T.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-assignepermissions"]],viewQuery:function(n,s){if(1&n&&e.Gf(x.G,5),2&n){let d;e.iGM(d=e.CRH())&&(s.header=d.first)}},decls:27,vars:28,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","gridClick","submitClick","clearClick"],["header",""],[1,"grid","nested-grid"],[1,"col-12"],[1,"grid"],[1,"col-4","py-4"],["styleClass","p-datatable-gridlines","scrollHeight","400px","selectionMode","single",3,"value","paginator","rows","responsive","resizableColumns","scrollable"],["dt",""],["pTemplate","header"],["pTemplate","body"],["dt1",""],["styleClass","p-datatable-gridlines","scrollHeight","400px","selectionMode","multiple",3,"value","paginator","rows","responsive","resizableColumns","scrollable"],[3,"pSelectableRow"],["inputId","binary",3,"ngModel","binary","ngModelChange","click"],[4,"ngFor","ngForOf"],["type","text",3,"field"],["inputId","binary",3,"ngModel","binary","ngModelChange"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("gridClick",function(){return s.onGridClick()})("submitClick",function(){return s.onSaveClick()})("clearClick",function(){return s.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"p-table",7,8),e.YNc(10,S,3,0,"ng-template",9),e.YNc(11,N,4,4,"ng-template",10),e.qZA()(),e.TgZ(12,"div",6)(13,"p-table",7,11),e.YNc(15,Z,3,0,"ng-template",9),e.YNc(16,G,4,4,"ng-template",10),e.qZA()(),e.TgZ(17,"div",6)(18,"p-table",7,8),e.YNc(20,y,3,0,"ng-template",9),e.YNc(21,L,4,4,"ng-template",10),e.qZA()(),e.TgZ(22,"div",4)(23,"p-table",12,8),e.YNc(25,A,15,1,"ng-template",9),e.YNc(26,g,14,14,"ng-template",10),e.qZA()()()()()()),2&n&&(e.xp6(2),e.Q6J("pageTitle",s.pageTitle)("onSubmit",s.onSubmit)("onGrid",s.onGrid)("onAddNew",s.onAddNew),e.xp6(6),e.Q6J("value",s.rolesLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0),e.xp6(5),e.Q6J("value",s.modulesLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0),e.xp6(5),e.Q6J("value",s.subModulesLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0),e.xp6(5),e.Q6J("value",s.documentLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0))},dependencies:[C.sg,M.jx,k.JJ,k.On,b.iA,b.Ei,b.xl,E.XZ,x.G]}),m})();var c=a(7664),h=a(8032);const f=[{path:"",component:u}];let w=(()=>{var r;class m{}return(r=m).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[C.ez,h.u,c.Bz.forChild(f)]}),m})()}}]);