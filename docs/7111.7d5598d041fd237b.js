"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[7111],{1730:(T,v,i)=>{i.d(v,{b:()=>b});var n=i(4946),e=i(95),d=i(8057);let b=(()=>{var s;class C{constructor(){this.inputModel="",this.labelName="",this.onBlur=new n.vpe,this.inputModelChange=new n.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(s=C).\u0275fac=function(u){return new(u||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-checkbox"]],inputs:{inputModel:"inputModel",labelName:"labelName"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:5,vars:4,consts:[[1,"flex","justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"htmlFor"],["inputId","binary",3,"ngModel","binary","ngModelChange","click"]],template:function(u,a){1&u&&(n.TgZ(0,"div",0)(1,"div",1)(2,"label",2),n._uU(3),n.qZA(),n.TgZ(4,"p-checkbox",3),n.NdJ("ngModelChange",function(g){return a.inputModel=g})("click",function(){return a.onLeaveControl()}),n.qZA()()()),2&u&&(n.xp6(2),n.s9C("htmlFor",a.labelName),n.xp6(1),n.Oqu(a.labelName),n.xp6(1),n.Q6J("ngModel",a.inputModel)("binary",!0))},dependencies:[e.JJ,e.On,d.XZ]}),C})()},7934:(T,v,i)=>{i.d(v,{G:()=>x});var n=i(5861),e=i(4946),d=i(7664),b=i(6113),s=i(5219),C=i(6814),m=i(707),u=i(4104);function a(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function _(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function g(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function h(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function c(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function M(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function A(l,p){if(1&l){const r=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let x=(()=>{var l;class p{constructor(o,t,f,k){this._router=o,this._service=t,this._activatedRoute=f,this._messageService=k,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var o=this;return(0,n.Z)(function*(){0==Object.keys(o._service.appConfig).length&&(yield o._service.getConfigData()),console.log(o),o._activatedRoute.paramMap.subscribe(function(){var t=(0,n.Z)(function*(f){let k=f.get("params");if(null!=k&&null!=k){let E=JSON.parse(atob(k)),w=o._service.getDocPermissions(E).subscribe(N=>{w=N.data[0],o.permissions(E,w)})}else o._router.navigate(["/home"],{relativeTo:o._activatedRoute})});return function(f){return t.apply(this,arguments)}}()),o.gridCols=yield o._service.getGridColumns(o.mastersGridColumns)})()}permissions(o,t){console.log("aaa",o),null!=o&&null!=o&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=o,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let o=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:o}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let o=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:o}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(l=p).\u0275fac=function(o){return new(o||l)(e.Y36(d.F0),e.Y36(b.f),e.Y36(d.gz),e.Y36(s.ez))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,a,1,0,"button",4),e.YNc(6,_,1,0,"button",5),e.YNc(7,g,1,0,"button",6),e.YNc(8,h,1,0,"button",7),e.YNc(9,c,1,0,"button",8),e.YNc(10,M,1,0,"button",9),e.YNc(11,A,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&o&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[C.O5,m.Hq,u.FN]}),p})()},8213:(T,v,i)=>{i.d(v,{R:()=>u});var n=i(4946),e=i(6814),d=i(95),b=i(3259),s=i(218),C=i(6218);const m=function(a,_){return{"ng-invalid":a,"ng-dirty":_}};let u=(()=>{var a;class _{constructor(){this.inputModel="",this.errorMessages="",this.labelName="",this.isMandatoryIcon=!1,this.rows=0,this.cols=0,this.disabled=!1,this.onBlur=new n.vpe,this.inputModelChange=new n.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(a=_).\u0275fac=function(h){return new(h||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-textarea"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",rows:"rows",cols:"cols",disabled:"disabled"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:7,vars:10,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["rows","rows","cols","cols","pInputTextarea","","pAutoFocus","",3,"ngModel","disabled","pTooltip","ngClass","ngModelChange","blur"],["id","username-help"]],template:function(h,c){1&h&&(n.TgZ(0,"div",0)(1,"div",1)(2,"label",2),n._uU(3),n.qZA(),n.TgZ(4,"textarea",3),n.NdJ("ngModelChange",function(A){return c.inputModel=A})("blur",function(){return c.onLeaveControl()}),n.qZA(),n.TgZ(5,"small",4),n._uU(6),n.qZA()()()),2&h&&(n.xp6(2),n.s9C("htmlFor",c.labelName),n.xp6(1),n.hij("",c.labelName," :"),n.xp6(1),n.s9C("pTooltip",c.errorMessages),n.Q6J("ngModel",c.inputModel)("disabled",c.disabled)("ngClass",n.WLB(7,m,""!==c.errorMessages,""!==c.errorMessages)),n.xp6(2),n.Oqu(c.errorMessages))},dependencies:[e.mk,d.Fj,d.JJ,d.On,b.u,s.P,C.g]}),_})()}}]);