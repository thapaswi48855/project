"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[4938],{2154:(A,v,s)=>{s.d(v,{J:()=>C});var o=s(4946),e=s(6814),b=s(3965),h=s(95),m=s(3259);const i=function(){return{width:"100%"}},M=function(_,f){return{"ng-invalid":_,"ng-dirty":f}};let C=(()=>{var _;class f{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new o.vpe,this.onChange=new o.vpe,this.inputModelChange=new o.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(_=f).\u0275fac=function(E){return new(E||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(E,p){1&E&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),o._uU(4),o.qZA(),o.TgZ(5,"p-dropdown",4),o.NdJ("ngModelChange",function(T){return p.inputModel=T})("onBlur",function(){return p.onLeaveControl()})("onChange",function(){return p.onChangeControl()}),o.qZA(),o.TgZ(6,"small",5),o._uU(7),o.qZA()()()()),2&E&&(o.xp6(2),o.Q6J("ngClass",!0===p.dropdownAxis?"formgroup-inline":"displayBlock"),o.xp6(1),o.s9C("htmlFor",p.labelName),o.xp6(1),o.Oqu(p.labelName),o.xp6(1),o.Akn(o.DdM(16,i)),o.MGl("placeholder","Select ",p.labelName,""),o.Q6J("filter",!0)("options",p.options)("ngModel",p.inputModel)("optionLabel",p.optionLabel)("optionValue",p.optionValue)("appendTo",p.appendTo)("ngClass",o.WLB(17,M,""!==p.errorMessages,""!==p.errorMessages))("disabled",p.disabled),o.xp6(1),o.s9C("pTooltip",p.errorMessages),o.xp6(1),o.Oqu(p.errorMessages))},dependencies:[e.mk,b.Lt,h.JJ,h.On,m.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),f})()},7934:(A,v,s)=>{s.d(v,{G:()=>N});var o=s(5861),e=s(4946),b=s(7664),h=s(6113),m=s(5219),i=s(6814),M=s(707),C=s(4104);function _(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function f(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function g(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function E(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function p(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function S(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function T(u,r){if(1&u){const c=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(c);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let N=(()=>{var u;class r{constructor(a,t,n,l){this._router=a,this._service=t,this._activatedRoute=n,this._messageService=l,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var a=this;return(0,o.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),console.log(a),a._activatedRoute.paramMap.subscribe(function(){var t=(0,o.Z)(function*(n){let l=n.get("params");if(null!=l&&null!=l){let d=JSON.parse(atob(l)),w=a._service.getDocPermissions(d).subscribe(k=>{w=k.data[0],a.permissions(d,w)})}else a._router.navigate(["/home"],{relativeTo:a._activatedRoute})});return function(n){return t.apply(this,arguments)}}())})()}permissions(a,t){null!=a&&null!=a&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=a,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:a}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let a=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:a}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(u=r).\u0275fac=function(a){return new(a||u)(e.Y36(b.F0),e.Y36(h.f),e.Y36(b.gz),e.Y36(m.ez))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,_,1,0,"button",4),e.YNc(6,f,1,0,"button",5),e.YNc(7,g,1,0,"button",6),e.YNc(8,E,1,0,"button",7),e.YNc(9,p,1,0,"button",8),e.YNc(10,S,1,0,"button",9),e.YNc(11,T,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&a&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[i.O5,M.Hq,C.FN]}),r})()},1038:(A,v,s)=>{s.d(v,{g:()=>h});var o=s(4946),e=s(6113),b=s(5219);let h=(()=>{var m;class i{constructor(C,_){this._service=C,this._messageService=_}onSaveJson(C,_,f){console.log(C),console.log(f),this._service.serpostData(_,f).subscribe(g=>{console.log(g),"200"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${C} Create Successfully `}):"201"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${C} Update Successfully `}):"500"==g.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${C} Unable to Create / Update Successfully `})})}}return(m=i).\u0275fac=function(C){return new(C||m)(o.Y36(e.f),o.Y36(b.ez))},m.\u0275cmp=o.Xpm({type:m,selectors:[["app-saving"]],decls:0,vars:0,template:function(C,_){}}),i})()},4938:(A,v,s)=>{s.r(v),s.d(v,{GenericsubclassificationdetailsModule:()=>u});var o=s(6814),e=s(5861),b=s(6990),h=s(7934),m=s(1038),i=s(4946),M=s(6113),C=s(7664),_=s(5219),f=s(7338),g=s(8911),E=s(2154);const p=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let S=(()=>{var r;class c{constructor(t,n,l){this._service=t,this._activatedRoute=n,this._messageService=l,this.pageTitle="Generic Sub Classification",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericSubClassification={clasificationName:"",subClasificationName:"",subClasificationDesc:"",status:"ZLS11",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyGenericSubClassification=JSON.stringify(this.genericSubClassification),this.geneticClassificationList=[],this.statusList=[],this.zeroLevelEntity=[],this.errorMsgs={clasificationNameReq:"",subClasificationNameReq:""}}onGetErrorMsgs(t,n){switch(t){case"clasificationName":this.errorMsgs.clasificationNameReq=""==this.genericSubClassification[t]||null==this.genericSubClassification[t]||null==this.genericSubClassification[t]?this._service.onGetErrorMsgs(t,!0,"Clasification Name"):"";break;case"subClasificationName":this.errorMsgs.subClasificationNameReq=""==this.genericSubClassification[t]||null==this.genericSubClassification[t]||null==this.genericSubClassification[t]?this._service.onGetErrorMsgs(t,!0,"Sub Clasification Name"):""}}ngOnInit(){var t=this;return(0,e.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(n=>{t.statusList=n.data[0].subMasterData}),t._service.serGetDataobject("getGenericClassificationDetails",{status:"ZLS11"}).subscribe(n=>{t.geneticClassificationList=n.data}),t._service.serGetData("getGeneralMaster").subscribe(n=>{t.zeroLevelEntity=n.data;let l=b.filter(t.zeroLevelEntity,{masterid:"ZLC9"});b.forEach(l,(d,w)=>{t.statusList.push({label:d.mastername,value:d._id})})}),t._activatedRoute.paramMap.subscribe(n=>{let l=n.get("param");null!=l?(l=JSON.parse(atob(l)),t.getMasterData(l._id),t.pageMode=l.mode):(t.isEditable=!0,t.pageMode="NEW"),t.isEditable="VIEW"!=t.pageMode})})()}getMasterData(t){this._service.serGetDataobject("getGenericSubClassificationDetails",{_id:t}).subscribe(n=>{console.log("dt",n),this.genericSubClassification=n.data[0],this.genericSubClassification._id=this.genericSubClassification._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){if(b.forEach(["clasificationName","subClasificationName"],d=>{this.onGetErrorMsgs(d,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let l=this.genericSubClassification;console.log(this.genericSubClassification),this.saving.onSaveJson(this.pageTitle,"insertGenericSubClassificationDetails",[l]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){this.genericSubClassification=JSON.parse(this.emptyGenericSubClassification)}}return(r=c).\u0275fac=function(t){return new(t||r)(i.Y36(M.f),i.Y36(C.gz),i.Y36(_.ez))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-genericsubclassificationdetails"]],viewQuery:function(t,n){if(1&t&&(i.Gf(h.G,5),i.Gf(m.g,5)),2&t){let l;i.iGM(l=i.CRH())&&(n.header=l.first),i.iGM(l=i.CRH())&&(n.saving=l.first)}},decls:18,vars:33,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],["styleClass","custombar1"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","options","inputModel","errorMessages","optionLabel","optionValue","inputModelChange","onBlur"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","inputModelChange"],[3,"labelName","options","inputModel","optionLabel","optionValue","inputModelChange"],["saving",""]],template:function(t,n){1&t&&(i.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),i.NdJ("submitClick",function(){return n.onSaveClick()})("clearClick",function(){return n.onClearClick()}),i.qZA()(),i.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"div",5)(7,"app-dropdown",6),i.NdJ("inputModelChange",function(d){return n.genericSubClassification.clasificationName=d})("onBlur",function(){return n.onGetErrorMsgs("clasificationName",!0)}),i.qZA()(),i._uU(8),i.ALo(9,"json"),i.TgZ(10,"div",5)(11,"app-inputtext",7),i.NdJ("inputModelChange",function(d){return n.genericSubClassification.subClasificationName=d})("onBlur",function(){return n.onGetErrorMsgs("subClasificationName",!0)}),i.qZA()(),i.TgZ(12,"div",5)(13,"app-inputtext",8),i.NdJ("inputModelChange",function(d){return n.genericSubClassification.subClasificationDesc=d}),i.qZA()(),i.TgZ(14,"div",5)(15,"app-dropdown",9),i.NdJ("inputModelChange",function(d){return n.genericSubClassification.status=d}),i.qZA()()()()(),i._UZ(16,"app-saving",null,10)),2&t&&(i.xp6(2),i.Q6J("pageTitle",n.pageTitle)("onSubmit",n.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",n.onClear)("onEdit",n.onEdit)("onView",n.onView)("redirectToGrid",n.redirectToGrid),i.xp6(3),i.Akn(i.DdM(32,p)),i.xp6(2),i.s9C("errorMessages",n.errorMsgs.clasificationNameReq),i.Q6J("labelName","Clasification Name")("options",n.geneticClassificationList)("inputModel",n.genericSubClassification.clasificationName)("optionLabel","clasificationName")("optionValue","_id"),i.xp6(1),i.AsE("",n.genericSubClassification.clasificationName," , ",i.lcZ(9,30,n.geneticClassificationList)," "),i.xp6(3),i.s9C("errorMessages",n.errorMsgs.subClasificationNameReq),i.Q6J("labelName","Sub Clasification Name")("inputModel",n.genericSubClassification.subClasificationName)("disabled",!n.isEditable),i.xp6(2),i.Q6J("labelName","Clasification Description")("inputModel",n.genericSubClassification.subClasificationDesc)("disabled",!n.isEditable),i.xp6(2),i.Q6J("labelName","Status")("options",n.statusList)("inputModel",n.genericSubClassification.status)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[f.P,g.G,E.J,h.G,m.g,o.Ts]}),c})();var T=s(8032);const N=[{path:"",component:S}];let u=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[o.ez,T.u,C.Bz.forChild(N)]}),c})()}}]);