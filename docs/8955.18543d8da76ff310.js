"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[8955],{2154:(E,v,a)=>{a.d(v,{J:()=>m});var n=a(4946),e=a(6814),M=a(3965),h=a(95),_=a(3259);const t=function(){return{width:"100%"}},f=function(g,C){return{"ng-invalid":g,"ng-dirty":C}};let m=(()=>{var g;class C{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new n.vpe,this.onChange=new n.vpe,this.inputModelChange=new n.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(g=C).\u0275fac=function(y){return new(y||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(y,c){1&y&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),n._uU(4),n.qZA(),n.TgZ(5,"p-dropdown",4),n.NdJ("ngModelChange",function(T){return c.inputModel=T})("onBlur",function(){return c.onLeaveControl()})("onChange",function(){return c.onChangeControl()}),n.qZA(),n.TgZ(6,"small",5),n._uU(7),n.qZA()()()()),2&y&&(n.xp6(2),n.Q6J("ngClass",!0===c.dropdownAxis?"formgroup-inline":"displayBlock"),n.xp6(1),n.s9C("htmlFor",c.labelName),n.xp6(1),n.Oqu(c.labelName),n.xp6(1),n.Akn(n.DdM(16,t)),n.MGl("placeholder","Select ",c.labelName,""),n.Q6J("filter",!0)("options",c.options)("ngModel",c.inputModel)("optionLabel",c.optionLabel)("optionValue",c.optionValue)("appendTo",c.appendTo)("ngClass",n.WLB(17,f,""!==c.errorMessages,""!==c.errorMessages))("disabled",c.disabled),n.xp6(1),n.s9C("pTooltip",c.errorMessages),n.xp6(1),n.Oqu(c.errorMessages))},dependencies:[e.mk,M.Lt,h.JJ,h.On,_.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),C})()},7934:(E,v,a)=>{a.d(v,{G:()=>N});var n=a(5861),e=a(4946),M=a(7664),h=a(6113),_=a(5219),t=a(6814),f=a(707),m=a(4104);function g(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onSaveClick())}),e.qZA()}}function C(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onGridClick())}),e.qZA()}}function b(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onAddNewClick())}),e.qZA()}}function y(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onClearClick())}),e.qZA()}}function c(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onEditClick())}),e.qZA()}}function A(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onSaveApproveClick())}),e.qZA()}}function T(u,d){if(1&u){const p=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(p);const i=e.oxw();return e.KtG(i.onSavePrintClick())}),e.qZA()}}let N=(()=>{var u;class d{constructor(s,i,o,r){this._router=s,this._service=i,this._activatedRoute=o,this._messageService=r,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var s=this;return(0,n.Z)(function*(){0==Object.keys(s._service.appConfig).length&&(yield s._service.getConfigData()),console.log(s),s._activatedRoute.paramMap.subscribe(function(){var i=(0,n.Z)(function*(o){let r=o.get("params");if(null!=r&&null!=r){let l=JSON.parse(atob(r)),w=s._service.getDocPermissions(l).subscribe(S=>{w=S.data[0],s.permissions(l,w)})}else s._router.navigate(["/home"],{relativeTo:s._activatedRoute})});return function(o){return i.apply(this,arguments)}}())})()}permissions(s,i){console.log("aaa",s),null!=s&&null!=s&&(this.pageTitle=i.documentname,this.docAccSubmit=i.docAccSubmit,this.docAccGridView=i.docAccGridView,this.docAccAddNew=i.docAccAddNew,this.docAccClear=i.docAccClear,this.docAccEdit=i.docAccEdit,this.docAccView=i.docAccView,this.docAccExport=i.docAccExport,this.routerAddNew=`/home/${i.documentpageurl}`,this.routerGridView=`/home/${i.documentgridUrl}`,this.docParams=s,this.docAccPer=i)}onGridClick(){this.gridClick.emit(!0);let s=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:s}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let s=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:s}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(u=d).\u0275fac=function(s){return new(s||u)(e.Y36(M.F0),e.Y36(h.f),e.Y36(M.gz),e.Y36(_.ez))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,g,1,0,"button",4),e.YNc(6,C,1,0,"button",5),e.YNc(7,b,1,0,"button",6),e.YNc(8,y,1,0,"button",7),e.YNc(9,c,1,0,"button",8),e.YNc(10,A,1,0,"button",9),e.YNc(11,T,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return i.onMessageClose()}),e.qZA()),2&s&&(e.xp6(3),e.hij(" ",i.pageTitle,""),e.xp6(2),e.Q6J("ngIf",i.onSubmit&&i.docAccSubmit),e.xp6(1),e.Q6J("ngIf",i.onGrid&&i.docAccGridView),e.xp6(1),e.Q6J("ngIf",i.onAddNew&&i.docAccAddNew),e.xp6(1),e.Q6J("ngIf",i.onClear&&i.docAccClear),e.xp6(1),e.Q6J("ngIf",i.onEdit&&i.docAccEdit),e.xp6(1),e.Q6J("ngIf",i.onSaveApprove),e.xp6(1),e.Q6J("ngIf",i.onSavePrint))},dependencies:[t.O5,f.Hq,m.FN]}),d})()},1038:(E,v,a)=>{a.d(v,{g:()=>h});var n=a(4946),e=a(6113),M=a(5219);let h=(()=>{var _;class t{constructor(m,g){this._service=m,this._messageService=g}onSaveJson(m,g,C){console.log(m),console.log(C),this._service.serpostData(g,C).subscribe(b=>{console.log(b),"200"==b.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Create Successfully `}):"201"==b.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Update Successfully `}):"500"==b.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Unable to Create / Update Successfully `})})}}return(_=t).\u0275fac=function(m){return new(m||_)(n.Y36(e.f),n.Y36(M.ez))},_.\u0275cmp=n.Xpm({type:_,selectors:[["app-saving"]],decls:0,vars:0,template:function(m,g){}}),t})()},8955:(E,v,a)=>{a.r(v),a.d(v,{AdditemcategoryModule:()=>u});var n=a(6814),e=a(5861),M=a(6990),h=a(7934),_=a(1038),t=a(4946),f=a(6113),m=a(7664),g=a(5219),C=a(7338),b=a(8911),y=a(2154);const c=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let A=(()=>{var d;class p{constructor(i,o,r){this._service=i,this._activatedRoute=o,this._messageService=r,this.pageTitle="Item",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.zeroLevelEntity=[],this.redirectToGrid=!1,this.itemCategory={categoryName:"",identification:"",issuseType:"",bilable:"ZLAS11",retilable:"ZLAS11",calmiable:"ZLAS11",validateExpireDate:"ZLAS11",discount:"0.0",prescribable:"ZLAS11",assestsTracking:"ZLAS12",status:"ZLS11",drug:"ZLAS12",createdt:null,createby:"",modifydt:null,modifyby:""},this.identificationList=[],this.issuseTypeList=[],this.billableList=[],this.retilableList=[],this.clamiableList=[],this.prescribableList=[],this.asseststrackingList=[],this.drugList=[],this.statusList=[],this.validDateList=[],this.allowStatusList=[],this.emptyItemCategory=JSON.stringify(this.itemCategory),this.errorMsgs={categoryName:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(i,o){"categoryName"===i&&(this.errorMsgs.categoryName=""==this.itemCategory[i]||null==this.itemCategory[i]||null==this.itemCategory[i]?this._service.onGetErrorMsgs("categoryName",!0,"Category Name"):"")}ngOnInit(){var i=this;return(0,e.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData()),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLI1"}).subscribe(o=>{i.identificationList=o.data[0].subMasterData}),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLIT1"}).subscribe(o=>{i.issuseTypeList=o.data[0].subMasterData}),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAS1"}).subscribe(o=>{i.allowStatusList=o.data[0].subMasterData}),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(o=>{i.statusList=o.data[0].subMasterData}),i._activatedRoute.paramMap.subscribe(o=>{let r=o.get("param");null!=r?(r=JSON.parse(atob(r)),i.getMasterData(r._id),i.pageMode=r.mode):(i.isEditable=!0,i.pageMode="NEW"),i.isEditable="VIEW"!=i.pageMode})})()}getMasterData(i){this._service.serGetDataobject("getAddItemCategory",{_id:i}).subscribe(o=>{console.log("dt",o),this.itemCategory=o.data[0],this.itemCategory.validateExpireDate=new Date(this.itemCategory.validateExpireDate),this.itemCategory._id=this.itemCategory._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){if(M.forEach(["categoryName"],l=>{this.onGetErrorMsgs(l,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let r=this.itemCategory;console.log(this.itemCategory),this.saving.onSaveJson("Add Item Category","insertAddItemCategory",[r]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.itemCategory=JSON.parse(this.emptyItemCategory),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(d=p).\u0275fac=function(i){return new(i||d)(t.Y36(f.f),t.Y36(m.gz),t.Y36(g.ez))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-additemcategory"]],viewQuery:function(i,o){if(1&i&&(t.Gf(h.G,5),t.Gf(_.g,5)),2&i){let r;t.iGM(r=t.CRH())&&(o.header=r.first),t.iGM(r=t.CRH())&&(o.saving=r.first)}},decls:33,vars:78,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"formgrid","grid"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","options","inputModel","disabled","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("submitClick",function(){return o.onSaveClick()})("clearClick",function(){return o.onClearClick()}),t.qZA()(),t.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"div",5)(8,"app-inputtext",6),t.NdJ("inputModelChange",function(l){return o.itemCategory.categoryName=l})("onBlur",function(){return o.onGetErrorMsgs("categoryName",!0)}),t.qZA()(),t.TgZ(9,"div",5)(10,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.identification=l}),t.qZA()(),t.TgZ(11,"div",5)(12,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.issuseType=l}),t.qZA()(),t.TgZ(13,"div",5)(14,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.bilable=l}),t.qZA()(),t.TgZ(15,"div",5)(16,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.retilable=l}),t.qZA()(),t.TgZ(17,"div",5)(18,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.calmiable=l}),t.qZA()(),t.TgZ(19,"div",5)(20,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.validateExpireDate=l}),t.qZA()(),t.TgZ(21,"div",5)(22,"app-inputtext",8),t.NdJ("inputModelChange",function(l){return o.itemCategory.discount=l}),t.qZA()(),t.TgZ(23,"div",5)(24,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.prescribable=l}),t.qZA()(),t.TgZ(25,"div",5)(26,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.assestsTracking=l}),t.qZA()(),t.TgZ(27,"div",5)(28,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.status=l}),t.qZA()(),t.TgZ(29,"div",5)(30,"app-dropdown",7),t.NdJ("inputModelChange",function(l){return o.itemCategory.drug=l}),t.qZA()()()()()(),t._UZ(31,"app-saving",null,9)),2&i&&(t.xp6(2),t.Q6J("pageTitle",o.pageTitle)("onSubmit",o.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",o.onClear)("onEdit",o.onEdit)("onView",o.onView)("redirectToGrid",o.redirectToGrid),t.xp6(3),t.Akn(t.DdM(77,c)),t.xp6(3),t.s9C("errorMessages",o.errorMsgs.categoryName),t.Q6J("labelName","Category Name")("inputModel",o.itemCategory.categoryName)("disabled",!o.isEditable),t.xp6(2),t.Q6J("labelName","Identification")("options",o.identificationList)("inputModel",o.itemCategory.identification)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Issuse Type ")("options",o.issuseTypeList)("inputModel",o.itemCategory.issuseType)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Bilable")("options",o.allowStatusList)("inputModel",o.itemCategory.bilable)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Retilable")("options",o.allowStatusList)("inputModel",o.itemCategory.retilable)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Calmiable")("options",o.allowStatusList)("inputModel",o.itemCategory.calmiable)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Validate Expire Date")("options",o.allowStatusList)("inputModel",o.itemCategory.validateExpireDate)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Discount %")("inputModel",o.itemCategory.discount)("disabled",!o.isEditable),t.xp6(2),t.Q6J("labelName","prescribable")("options",o.allowStatusList)("inputModel",o.itemCategory.prescribable)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Assests Tracking")("options",o.allowStatusList)("inputModel",o.itemCategory.assestsTracking)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Status")("options",o.statusList)("inputModel",o.itemCategory.status)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Drug")("options",o.allowStatusList)("inputModel",o.itemCategory.drug)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[C.P,b.G,y.J,h.G,_.g]}),p})();var T=a(8032);const N=[{path:"",component:A}];let u=(()=>{var d;class p{}return(d=p).\u0275fac=function(i){return new(i||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[n.ez,T.u,m.Bz.forChild(N)]}),p})()}}]);