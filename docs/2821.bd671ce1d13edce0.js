"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[2821],{8213:(N,m,s)=>{s.d(m,{R:()=>M});var t=s(4946),E=s(6814),u=s(95),h=s(3259),C=s(218),i=s(6218);const b=function(r,d){return{"ng-invalid":r,"ng-dirty":d}};let M=(()=>{var r;class d{constructor(){this.inputModel="",this.errorMessages="",this.labelName="",this.isMandatoryIcon=!1,this.rows=0,this.cols=0,this.disabled=!1,this.onBlur=new t.vpe,this.inputModelChange=new t.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(r=d).\u0275fac=function(p){return new(p||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-textarea"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",rows:"rows",cols:"cols",disabled:"disabled"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:7,vars:10,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["rows","rows","cols","cols","pInputTextarea","","pAutoFocus","",3,"ngModel","disabled","pTooltip","ngClass","ngModelChange","blur"],["id","username-help"]],template:function(p,o){1&p&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3),t.qZA(),t.TgZ(4,"textarea",3),t.NdJ("ngModelChange",function(G){return o.inputModel=G})("blur",function(){return o.onLeaveControl()}),t.qZA(),t.TgZ(5,"small",4),t._uU(6),t.qZA()()()),2&p&&(t.xp6(2),t.s9C("htmlFor",o.labelName),t.xp6(1),t.hij("",o.labelName," :"),t.xp6(1),t.s9C("pTooltip",o.errorMessages),t.Q6J("ngModel",o.inputModel)("disabled",o.disabled)("ngClass",t.WLB(7,b,""!==o.errorMessages,""!==o.errorMessages)),t.xp6(2),t.Oqu(o.errorMessages))},dependencies:[E.mk,u.Fj,u.JJ,u.On,h.u,C.P,i.g]}),d})()},2821:(N,m,s)=>{s.r(m),s.d(m,{GenericclassificationdetailsModule:()=>_});var t=s(6814),E=s(5861),u=s(6990),h=s(7934),C=s(1038),i=s(4946),b=s(6113),M=s(7664),r=s(5219),d=s(7338),v=s(8911),p=s(2154),o=s(8213),T=s(6782);let G=(()=>{var l;class f{constructor(a,e,n){this._service=a,this._activatedRoute=e,this._messageService=n,this.pageTitle="Generic",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericClassification={genericClassificationId:0,clasificationid:0,clasificationName:"",clasificationDesc:"",status:"ZLS11",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyGenericClassification=JSON.stringify(this.genericClassification),this.errorMsgs={clasificationName:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs),this.statusList=[]}onGetErrorMsgs(a,e){"clasificationName"===a&&(this.errorMsgs.clasificationName=""==this.genericClassification[a]||null==this.genericClassification[a]||null==this.genericClassification[a]?this._service.onGetErrorMsgs(a,!0,"Clasification Name"):"")}ngOnInit(){var a=this;return(0,E.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(e=>{a.statusList=e.data[0].subMasterData}),a._activatedRoute.paramMap.subscribe(e=>{let n=e.get("param");null!=n?(n=JSON.parse(atob(n)),a.getMasterData(n.genericClassificationId),a.pageMode=n.mode):(a.isEditable=!0,a.pageMode="NEW"),a.isEditable="VIEW"!=a.pageMode})})()}getMasterData(a){this._service.serGetDataobject("getGenericClassificationDetails",{genericClassificationId:a}).subscribe(e=>{console.log("dt",e),this.genericClassification={genericClassificationId:e.data[0].genericClassificationId,clasificationid:e.data[0].clasificationid,clasificationName:e.data[0].clasificationName,clasificationDesc:e.data[0].clasificationDesc,status:e.data[0].status,createdt:e.data[0].createdt,createby:e.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){if(u.forEach(["clasificationName"],c=>{this.onGetErrorMsgs(c,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let n=this.genericClassification;console.log(this.genericClassification),this.saving.onSaveJson("Generic ClassificationDetails","insertGenericClassificationDetails",[n]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.genericClassification=JSON.parse(this.emptyGenericClassification),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(l=f).\u0275fac=function(a){return new(a||l)(i.Y36(b.f),i.Y36(M.gz),i.Y36(r.ez))},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-genericclassificationdetails"]],viewQuery:function(a,e){if(1&a&&(i.Gf(h.G,5),i.Gf(C.g,5)),2&a){let n;i.iGM(n=i.CRH())&&(e.header=n.first),i.iGM(n=i.CRH())&&(e.saving=n.first)}},decls:16,vars:22,consts:[[1,"d-flex","flex-column","h-100","overflow-hidden"],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"grid"],[1,"col-12","col-offset-0","md:col-6","md:col-offset-3","lg:col-4","lg:col-offset-4","xl:col-4","xl:col-offset-4"],[1,"card"],[1,"col-12"],[3,"labelName","inputModel","errorMessages","disabled","pKeyFilter","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(a,e){1&a&&(i.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),i.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()}),i.qZA()(),i.TgZ(4,"p-scrollPanel")(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",4)(10,"div",7)(11,"app-inputtext",8),i.NdJ("inputModelChange",function(c){return e.genericClassification.clasificationName=c})("onBlur",function(){return e.onGetErrorMsgs("clasificationName",!0)}),i.qZA(),i.TgZ(12,"app-dropdown",9),i.NdJ("inputModelChange",function(c){return e.genericClassification.status=c}),i.qZA(),i.TgZ(13,"app-textarea",10),i.NdJ("inputModelChange",function(c){return e.genericClassification.clasificationDesc=c}),i.qZA()()()()()()()()(),i._UZ(14,"app-saving",null,11)),2&a&&(i.xp6(2),i.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("redirectToGrid",e.redirectToGrid),i.xp6(9),i.s9C("errorMessages",e.errorMsgs.clasificationName),i.Q6J("labelName","Clasification Name")("inputModel",e.genericClassification.clasificationName)("disabled",!e.isEditable)("pKeyFilter","alpha"),i.xp6(1),i.Q6J("labelName","Status")("inputModel",e.genericClassification.status)("disabled","EDIT"!=e.pageMode)("options",e.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"),i.xp6(1),i.Q6J("labelName","Clasification Description")("inputModel",e.genericClassification.clasificationDesc)("disabled",!e.isEditable))},dependencies:[d.P,v.G,p.J,h.G,o.R,C.g,T.Fr]}),f})();var y=s(8032);const D=[{path:"",component:G}];let _=(()=>{var l;class f{}return(l=f).\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[t.ez,y.u,M.Bz.forChild(D)]}),f})()}}]);