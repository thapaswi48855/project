"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[2821],{2154:(N,b,s)=>{s.d(b,{J:()=>u});var a=s(4946),e=s(6814),M=s(3965),v=s(95),C=s(3259);const i=function(){return{width:"100%"}},E=function(m,f){return{"ng-invalid":m,"ng-dirty":f}};let u=(()=>{var m;class f{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new a.vpe,this.onChange=new a.vpe,this.inputModelChange=new a.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(m=f).\u0275fac=function(A){return new(A||m)},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(A,p){1&A&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),a._uU(4),a.qZA(),a.TgZ(5,"p-dropdown",4),a.NdJ("ngModelChange",function(w){return p.inputModel=w})("onBlur",function(){return p.onLeaveControl()})("onChange",function(){return p.onChangeControl()}),a.qZA(),a.TgZ(6,"small",5),a._uU(7),a.qZA()()()()),2&A&&(a.xp6(2),a.Q6J("ngClass",!0===p.dropdownAxis?"formgroup-inline":"displayBlock"),a.xp6(1),a.s9C("htmlFor",p.labelName),a.xp6(1),a.Oqu(p.labelName),a.xp6(1),a.Akn(a.DdM(16,i)),a.MGl("placeholder","Select ",p.labelName,""),a.Q6J("filter",!0)("options",p.options)("ngModel",p.inputModel)("optionLabel",p.optionLabel)("optionValue",p.optionValue)("appendTo",p.appendTo)("ngClass",a.WLB(17,E,""!==p.errorMessages,""!==p.errorMessages))("disabled",p.disabled),a.xp6(1),a.s9C("pTooltip",p.errorMessages),a.xp6(1),a.Oqu(p.errorMessages))},dependencies:[e.mk,M.Lt,v.JJ,v.On,C.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),f})()},7934:(N,b,s)=>{s.d(b,{G:()=>k});var a=s(5861),e=s(4946),M=s(7664),v=s(6113),C=s(5219),i=s(6814),E=s(707),u=s(4104);function m(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function f(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function g(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function A(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function p(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function T(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function w(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let k=(()=>{var d;class h{constructor(l,t,o,n){this._router=l,this._service=t,this._activatedRoute=o,this._messageService=n,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var l=this;return(0,a.Z)(function*(){0==Object.keys(l._service.appConfig).length&&(yield l._service.getConfigData()),console.log(l),l._activatedRoute.paramMap.subscribe(function(){var t=(0,a.Z)(function*(o){let n=o.get("params");if(null!=n&&null!=n){let c=JSON.parse(atob(n)),_=l._service.getDocPermissions(c).subscribe(G=>{_=G.data[0],l.permissions(c,_)})}else l._router.navigate(["/home"],{relativeTo:l._activatedRoute})});return function(o){return t.apply(this,arguments)}}())})()}permissions(l,t){null!=l&&null!=l&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=l,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:l}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:l}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(d=h).\u0275fac=function(l){return new(l||d)(e.Y36(M.F0),e.Y36(v.f),e.Y36(M.gz),e.Y36(C.ez))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,m,1,0,"button",4),e.YNc(6,f,1,0,"button",5),e.YNc(7,g,1,0,"button",6),e.YNc(8,A,1,0,"button",7),e.YNc(9,p,1,0,"button",8),e.YNc(10,T,1,0,"button",9),e.YNc(11,w,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&l&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[i.O5,E.Hq,u.FN]}),h})()},1038:(N,b,s)=>{s.d(b,{g:()=>v});var a=s(4946),e=s(6113),M=s(5219);let v=(()=>{var C;class i{constructor(u,m){this._service=u,this._messageService=m}onSaveJson(u,m,f){console.log(u),console.log(f),this._service.serpostData(m,f).subscribe(g=>{console.log(g),"200"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Create Successfully `}):"201"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Update Successfully `}):"500"==g.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${u} Unable to Create / Update Successfully `})})}}return(C=i).\u0275fac=function(u){return new(u||C)(a.Y36(e.f),a.Y36(M.ez))},C.\u0275cmp=a.Xpm({type:C,selectors:[["app-saving"]],decls:0,vars:0,template:function(u,m){}}),i})()},2821:(N,b,s)=>{s.r(b),s.d(b,{GenericclassificationdetailsModule:()=>h});var a=s(6814),e=s(5861),M=s(6990),v=s(7934),C=s(1038),i=s(4946),E=s(6113),u=s(7664),m=s(5219),f=s(7338),g=s(8911),A=s(2154),p=s(8213);const T=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let w=(()=>{var r;class l{constructor(o,n,c){this._service=o,this._activatedRoute=n,this._messageService=c,this.pageTitle="Generic",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericClassification={clasificationName:"",clasificationDesc:"",status:"ZLS11",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyGenericClassification=JSON.stringify(this.genericClassification),this.errorMsgs={clasificationName:""},this.statusList=[]}onGetErrorMsgs(o,n){"clasificationName"===o&&(this.errorMsgs.clasificationName=""==this.genericClassification[o]||null==this.genericClassification[o]||null==this.genericClassification[o]?this._service.onGetErrorMsgs(o,!0,"Clasification Name"):"")}ngOnInit(){var o=this;return(0,e.Z)(function*(){0==Object.keys(o._service.appConfig).length&&(yield o._service.getConfigData()),o._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(n=>{o.statusList=n.data[0].subMasterData}),o._activatedRoute.paramMap.subscribe(n=>{let c=n.get("param");null!=c?(c=JSON.parse(atob(c)),o.getMasterData(c._id),o.pageMode=c.mode):(o.isEditable=!0,o.pageMode="NEW"),o.isEditable="VIEW"!=o.pageMode})})()}getMasterData(o){this._service.serGetDataobject("getGenericClassificationDetails",{_id:o}).subscribe(n=>{console.log("dt",n),this.genericClassification=n.data[0],this.genericClassification._id=this.genericClassification._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){if(M.forEach(["clasificationName"],_=>{this.onGetErrorMsgs(_,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let c=this.genericClassification;console.log(this.genericClassification),this.saving.onSaveJson("Generic ClassificationDetails","insertGenericClassificationDetails",[c]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.genericClassification=JSON.parse(this.emptyGenericClassification),this.isEditable=!0):this.isEditable=!1}}return(r=l).\u0275fac=function(o){return new(o||r)(i.Y36(E.f),i.Y36(u.gz),i.Y36(m.ez))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-genericclassificationdetails"]],viewQuery:function(o,n){if(1&o&&(i.Gf(v.G,5),i.Gf(C.g,5)),2&o){let c;i.iGM(c=i.CRH())&&(n.header=c.first),i.iGM(c=i.CRH())&&(n.saving=c.first)}},decls:14,vars:24,consts:[[1,"d-flex","flex-column","h-100","overflow-hidden"],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],["styleClass","custombar1"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(o,n){1&o&&(i.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),i.NdJ("submitClick",function(){return n.onSaveClick()})("clearClick",function(){return n.onClearClick()}),i.qZA()(),i.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"div",5)(7,"app-inputtext",6),i.NdJ("inputModelChange",function(_){return n.genericClassification.clasificationName=_})("onBlur",function(){return n.onGetErrorMsgs("clasificationName",!0)}),i.qZA()(),i.TgZ(8,"div",5)(9,"app-dropdown",7),i.NdJ("inputModelChange",function(_){return n.genericClassification.status=_}),i.qZA()(),i.TgZ(10,"div",5)(11,"app-textarea",8),i.NdJ("inputModelChange",function(_){return n.genericClassification.clasificationDesc=_}),i.qZA()()()()(),i._UZ(12,"app-saving",null,9)),2&o&&(i.xp6(2),i.Q6J("pageTitle",n.pageTitle)("onSubmit",n.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",n.onClear)("onEdit",n.onEdit)("onView",n.onView)("redirectToGrid",n.redirectToGrid),i.xp6(3),i.Akn(i.DdM(23,T)),i.xp6(2),i.s9C("errorMessages",n.errorMsgs.clasificationName),i.Q6J("labelName","Clasification Name")("inputModel",n.genericClassification.clasificationName)("disabled",!n.isEditable),i.xp6(2),i.Q6J("labelName","statusList")("inputModel",n.genericClassification.status)("disabled",!n.isEditable)("options",n.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"),i.xp6(2),i.Q6J("labelName","Clasification Description")("inputModel",n.genericClassification.clasificationDesc)("disabled",!n.isEditable))},dependencies:[f.P,g.G,A.J,v.G,p.R,C.g]}),l})();var k=s(8032);const d=[{path:"",component:w}];let h=(()=>{var r;class l{}return(r=l).\u0275fac=function(o){return new(o||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[a.ez,k.u,u.Bz.forChild(d)]}),l})()}}]);