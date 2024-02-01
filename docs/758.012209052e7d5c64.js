"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[758],{7934:(R,h,s)=>{s.d(h,{G:()=>x});var b=s(5861),e=s(4946),C=s(7664),v=s(6113),t=s(5219),M=s(6814),f=s(707),A=s(4104);function k(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onSaveClick())}),e.qZA()}}function g(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onGridClick())}),e.qZA()}}function T(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onAddNewClick())}),e.qZA()}}function N(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onClearClick())}),e.qZA()}}function E(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onEditClick())}),e.qZA()}}function w(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onSaveApproveClick())}),e.qZA()}}function S(u,_){if(1&u){const d=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(d);const o=e.oxw();return e.KtG(o.onSavePrintClick())}),e.qZA()}}let x=(()=>{var u;class _{constructor(l,o,r,m){this._router=l,this._service=o,this._activatedRoute=r,this._messageService=m,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var l=this;return(0,b.Z)(function*(){0==Object.keys(l._service.appConfig).length&&(yield l._service.getConfigData()),console.log(l),l._activatedRoute.paramMap.subscribe(function(){var o=(0,b.Z)(function*(r){let m=r.get("params");if(null!=m&&null!=m){let p=JSON.parse(atob(m)),n=l._service.getDocPermissions(p).subscribe(i=>{n=i.data[0],l.permissions(p,n)})}else l._router.navigate(["/home"],{relativeTo:l._activatedRoute})});return function(r){return o.apply(this,arguments)}}())})()}permissions(l,o){null!=l&&null!=l&&(this.pageTitle=o.documentname,this.docAccSubmit=o.docAccSubmit,this.docAccGridView=o.docAccGridView,this.docAccAddNew=o.docAccAddNew,this.docAccClear=o.docAccClear,this.docAccEdit=o.docAccEdit,this.docAccView=o.docAccView,this.docAccExport=o.docAccExport,this.routerAddNew=`/home/${o.documentpageurl}`,this.routerGridView=`/home/${o.documentgridUrl}`,this.docParams=l,this.docAccPer=o)}onGridClick(){this.gridClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:l}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:l}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(u=_).\u0275fac=function(l){return new(l||u)(e.Y36(C.F0),e.Y36(v.f),e.Y36(C.gz),e.Y36(t.ez))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(l,o){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,k,1,0,"button",4),e.YNc(6,g,1,0,"button",5),e.YNc(7,T,1,0,"button",6),e.YNc(8,N,1,0,"button",7),e.YNc(9,E,1,0,"button",8),e.YNc(10,w,1,0,"button",9),e.YNc(11,S,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return o.onMessageClose()}),e.qZA()),2&l&&(e.xp6(3),e.hij(" ",o.pageTitle,""),e.xp6(2),e.Q6J("ngIf",o.onSubmit&&o.docAccSubmit),e.xp6(1),e.Q6J("ngIf",o.onGrid&&o.docAccGridView),e.xp6(1),e.Q6J("ngIf",o.onAddNew&&o.docAccAddNew),e.xp6(1),e.Q6J("ngIf",o.onClear&&o.docAccClear),e.xp6(1),e.Q6J("ngIf",o.onEdit&&o.docAccEdit),e.xp6(1),e.Q6J("ngIf",o.onSaveApprove),e.xp6(1),e.Q6J("ngIf",o.onSavePrint))},dependencies:[M.O5,f.Hq,A.FN]}),_})()},758:(R,h,s)=>{s.r(h),s.d(h,{ModuleModule:()=>o});var b=s(6814),e=s(5861),C=s(6990),v=s(7934),t=s(4946),M=s(6113),f=s(7664),A=s(5219),k=s(3714),g=s(95),T=s(9232),N=s(218),E=s(8911),w=s(1730),S=s(8213);function x(r,m){1&r&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Sub Module Name"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Sub Module Description"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Actions"),t.qZA()())}function u(r,m){if(1&r){const p=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"input",14),t.NdJ("ngModelChange",function(i){const c=t.CHM(p).$implicit;return t.KtG(c.subModuleName=i)}),t.qZA()(),t.TgZ(3,"td")(4,"input",14),t.NdJ("ngModelChange",function(i){const c=t.CHM(p).$implicit;return t.KtG(c.subModuleDesc=i)}),t.qZA()(),t.TgZ(5,"td")(6,"button",15),t.NdJ("click",function(){t.CHM(p);const i=t.oxw();return t.KtG(i.addSubModules())}),t._uU(7,"A"),t.qZA(),t.TgZ(8,"button",15),t.NdJ("click",function(){const a=t.CHM(p).index,c=t.oxw();return t.KtG(c.removeSubModules(a))}),t._uU(9,"S"),t.qZA()()()}if(2&r){const p=m.$implicit;t.xp6(2),t.Q6J("ngModel",p.subModuleName),t.xp6(2),t.Q6J("ngModel",p.subModuleDesc)}}let _=(()=>{var r;class m{constructor(n,i){this._service=n,this._activactiveRoute=i,this.pageMode="NEW",this.pageTitle="Module",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.currentRow=[],this.module={moduleName:"",moduleDescription:"",status:!0},this.emptyDocument=JSON.stringify(this.module),this.subModules=[],this.errorMsgs={moduleNameReq:""}}onGetErrorMsgs(n,i){"moduleName"===n&&(this.errorMsgs.moduleNameReq=""==this.module[n]||null==this.module[n]||null==this.module[n]?this._service.onGetErrorMsgs("moduleName",!0,"Module Name"):"")}ngOnInit(){var n=this;return(0,e.Z)(function*(){0==Object.keys(n._service.appConfig).length&&(yield n._service.getConfigData()),n._activactiveRoute.paramMap.subscribe(function(){var i=(0,e.Z)(function*(a){let c=a.get("param");if(null!=c&&null!=c){let G=JSON.parse(atob(c));console.log(G),n._service.serGetDataobject("getModules",{_id:G._id}).subscribe(J=>{console.log(J),n.currentRow=J.data[0],n.module={moduleName:n.currentRow.modulename,moduleDescription:n.currentRow.moduledesc,status:n.currentRow.status,submodel:[]},C.forEach(n.currentRow.submodel,(Z,D)=>{n.module.submodel.push({subModuleName:Z.submodulename,subModuleDesc:Z.submoduledesc,submodelstatus:Z.submodelstatus})})}),n.pageMode="EDIT"}});return function(a){return i.apply(this,arguments)}}())})()}onGridClick(){}addSubModules(){this.subModules.push({subModuleName:"",subModuleDesc:"",subStatus:""})}removeSubModules(n){}onSaveClick(){if(C.forEach(["moduleName"],c=>{this.onGetErrorMsgs(c,!0)}),this._service.showErr(this.errorMsgs))return;let a={modulename:this.module.moduleName,moduledesc:this.module.moduleDescription,status:1==this.module.status?"A":"D",submodel:[]};this.subModules.length>0&&C.forEach(this.subModules,(c,G)=>{a.submodel.push({submodulename:c.subModuleName,submoduledesc:c.subModuleDesc,submodelstatus:"A"})}),this._service.onSaveJson(this.pageTitle,"insertModule",[a]),this.onClearClick()}onClearClick(){}}return(r=m).\u0275fac=function(n){return new(n||r)(t.Y36(M.f),t.Y36(f.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-module"]],viewQuery:function(n,i){if(1&n&&t.Gf(v.G,5),2&n){let a;t.iGM(a=t.CRH())&&(i.header=a.first)}},decls:17,vars:19,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","gridClick","submitClick","clearClick"],["header",""],[1,"grid"],[1,"col","col-4"],[1,"col-8","py-2"],[3,"inputModel","labelName","errorMessages","inputModelChange","onBlur"],[3,"labelName","rows","cols","inputModel","inputModelChange"],[3,"labelName","inputModel","inputModelChange"],[1,"col","p-4","pr-6"],["styleClass","p-datatable-gridlines","scrollHeight","400px",3,"value","paginator","rows","responsive","resizableColumns","scrollable"],["dt",""],["pTemplate","header"],["pTemplate","body"],["type","text","pInputText","","pAutoFocus","",2,"padding","10px",3,"ngModel","ngModelChange"],[3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("gridClick",function(){return i.onGridClick()})("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"app-inputtext",6),t.NdJ("inputModelChange",function(c){return i.module.moduleName=c})("onBlur",function(){return i.onGetErrorMsgs("moduleName",!0)}),t.qZA()(),t.TgZ(8,"div",5)(9,"app-textarea",7),t.NdJ("inputModelChange",function(c){return i.module.moduleDescription=c}),t.qZA()(),t.TgZ(10,"div",5)(11,"app-checkbox",8),t.NdJ("inputModelChange",function(c){return i.module.status=c}),t.qZA()()(),t.TgZ(12,"div",9)(13,"p-table",10,11),t.YNc(15,x,7,0,"ng-template",12),t.YNc(16,u,10,2,"ng-template",13),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",i.onGrid)("onAddNew",i.onAddNew),t.xp6(5),t.s9C("errorMessages",i.errorMsgs.moduleNameReq),t.Q6J("inputModel",i.module.moduleName)("labelName","Module Name"),t.xp6(2),t.Q6J("labelName","Module Description")("rows","2")("cols","5")("inputModel",i.module.moduleDescription),t.xp6(2),t.Q6J("labelName","Status")("inputModel",i.module.status),t.xp6(2),t.Q6J("value",i.subModules)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0))},dependencies:[A.jx,k.o,g.Fj,g.JJ,g.On,T.iA,N.P,E.G,v.G,w.b,S.R]}),m})();var d=s(8032);const l=[{path:"",component:_}];let o=(()=>{var r;class m{}return(r=m).\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[b.ez,d.u,f.Bz.forChild(l)]}),m})()}}]);