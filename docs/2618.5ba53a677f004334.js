"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[2618],{2154:(N,b,i)=>{i.d(b,{J:()=>_});var a=i(4946),t=i(6814),C=i(3965),h=i(95),e=i(3259);const M=function(){return{width:"100%"}},v=function(m,f){return{"ng-invalid":m,"ng-dirty":f}};let _=(()=>{var m;class f{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new a.vpe,this.onChange=new a.vpe,this.inputModelChange=new a.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(m=f).\u0275fac=function(T){return new(T||m)},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(T,p){1&T&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),a._uU(4),a.qZA(),a.TgZ(5,"p-dropdown",4),a.NdJ("ngModelChange",function(A){return p.inputModel=A})("onBlur",function(){return p.onLeaveControl()})("onChange",function(){return p.onChangeControl()}),a.qZA(),a.TgZ(6,"small",5),a._uU(7),a.qZA()()()()),2&T&&(a.xp6(2),a.Q6J("ngClass",!0===p.dropdownAxis?"formgroup-inline":"displayBlock"),a.xp6(1),a.s9C("htmlFor",p.labelName),a.xp6(1),a.Oqu(p.labelName),a.xp6(1),a.Akn(a.DdM(16,M)),a.MGl("placeholder","Select ",p.labelName,""),a.Q6J("filter",!0)("options",p.options)("ngModel",p.inputModel)("optionLabel",p.optionLabel)("optionValue",p.optionValue)("appendTo",p.appendTo)("ngClass",a.WLB(17,v,""!==p.errorMessages,""!==p.errorMessages))("disabled",p.disabled),a.xp6(1),a.s9C("pTooltip",p.errorMessages),a.xp6(1),a.Oqu(p.errorMessages))},dependencies:[t.mk,C.Lt,h.JJ,h.On,e.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),f})()},7934:(N,b,i)=>{i.d(b,{G:()=>k});var a=i(5861),t=i(4946),C=i(7664),h=i(6113),e=i(5219),M=i(6814),v=i(707),_=i(4104);function m(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onSaveClick())}),t.qZA()}}function f(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onGridClick())}),t.qZA()}}function g(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onAddNewClick())}),t.qZA()}}function T(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onClearClick())}),t.qZA()}}function p(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onEditClick())}),t.qZA()}}function E(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onSaveApproveClick())}),t.qZA()}}function A(d,u){if(1&d){const c=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(c);const n=t.oxw();return t.KtG(n.onSavePrintClick())}),t.qZA()}}let k=(()=>{var d;class u{constructor(r,n,o,l){this._router=r,this._service=n,this._activatedRoute=o,this._messageService=l,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var r=this;return(0,a.Z)(function*(){0==Object.keys(r._service.appConfig).length&&(yield r._service.getConfigData()),console.log(r),r._activatedRoute.paramMap.subscribe(function(){var n=(0,a.Z)(function*(o){let l=o.get("params");if(null!=l&&null!=l){let s=JSON.parse(atob(l)),w=r._service.getDocPermissions(s).subscribe(S=>{w=S.data[0],r.permissions(s,w)})}else r._router.navigate(["/home"],{relativeTo:r._activatedRoute})});return function(o){return n.apply(this,arguments)}}())})()}permissions(r,n){null!=r&&null!=r&&(this.pageTitle=n.documentname,this.docAccSubmit=n.docAccSubmit,this.docAccGridView=n.docAccGridView,this.docAccAddNew=n.docAccAddNew,this.docAccClear=n.docAccClear,this.docAccEdit=n.docAccEdit,this.docAccView=n.docAccView,this.docAccExport=n.docAccExport,this.routerAddNew=`/home/${n.documentpageurl}`,this.routerGridView=`/home/${n.documentgridUrl}`,this.docParams=r,this.docAccPer=n)}onGridClick(){this.gridClick.emit(!0);let r=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:r}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let r=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:r}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(d=u).\u0275fac=function(r){return new(r||d)(t.Y36(C.F0),t.Y36(h.f),t.Y36(C.gz),t.Y36(e.ez))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,m,1,0,"button",4),t.YNc(6,f,1,0,"button",5),t.YNc(7,g,1,0,"button",6),t.YNc(8,T,1,0,"button",7),t.YNc(9,p,1,0,"button",8),t.YNc(10,E,1,0,"button",9),t.YNc(11,A,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return n.onMessageClose()}),t.qZA()),2&r&&(t.xp6(3),t.hij(" ",n.pageTitle,""),t.xp6(2),t.Q6J("ngIf",n.onSubmit&&n.docAccSubmit),t.xp6(1),t.Q6J("ngIf",n.onGrid&&n.docAccGridView),t.xp6(1),t.Q6J("ngIf",n.onAddNew&&n.docAccAddNew),t.xp6(1),t.Q6J("ngIf",n.onClear&&n.docAccClear),t.xp6(1),t.Q6J("ngIf",n.onEdit&&n.docAccEdit),t.xp6(1),t.Q6J("ngIf",n.onSaveApprove),t.xp6(1),t.Q6J("ngIf",n.onSavePrint))},dependencies:[M.O5,v.Hq,_.FN]}),u})()},1038:(N,b,i)=>{i.d(b,{g:()=>h});var a=i(4946),t=i(6113),C=i(5219);let h=(()=>{var e;class M{constructor(_,m){this._service=_,this._messageService=m}onSaveJson(_,m,f){console.log(_),console.log(f),this._service.serpostData(m,f).subscribe(g=>{console.log(g),"200"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Create Successfully `}):"201"==g.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Update Successfully `}):"500"==g.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${_} Unable to Create / Update Successfully `})})}}return(e=M).\u0275fac=function(_){return new(_||e)(a.Y36(t.f),a.Y36(C.ez))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-saving"]],decls:0,vars:0,template:function(_,m){}}),M})()},2618:(N,b,i)=>{i.r(b),i.d(b,{ManufacturecreationModule:()=>d});var a=i(6814),t=i(5861),C=i(7934),h=i(1038),e=i(4946),M=i(6113),v=i(7664),_=i(7791),m=i(7338),f=i(8911),g=i(2154),T=i(8213);const p=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let E=(()=>{var u;class c{constructor(n,o){this._service=n,this._activatedRoute=o,this.pageTitle="Manufacture Creation",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.manufacture={manufacturename:"",status:"ZLS11",manufacturecode:"",regioncountry:"",regionstate:"",regioncity:"",contactaddress:"",contactphone1:"",contactphone2:"",contactpostalCode:"",contactfax:"",contactemail:"",contactwebsite:"",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyManufacture=JSON.stringify(this.manufacture),this.statusList=[],this.zeroLevelEntity=[]}ngOnInit(){var n=this;return(0,t.Z)(function*(){0==Object.keys(n._service.appConfig).length&&(yield n._service.getConfigData()),n._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(o=>{console.log(o),n.statusList=o.data[0].subMasterData,console.log("this.statusList",n.statusList)}),n._activatedRoute.paramMap.subscribe(o=>{let l=o.get("param");null!=l?(l=JSON.parse(atob(l)),n.getMasterData(l._id),n.pageMode=l.mode):(n.isEditable=!0,n.pageMode="NEW"),n.isEditable="VIEW"!=n.pageMode})})()}getMasterData(n){this._service.serGetDataobject("getManufacureCreation",{_id:n}).subscribe(o=>{console.log("dt",o),this.manufacture=o.data[0],this.manufacture._id=this.manufacture._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){this.saving.onSaveJson(this.pageTitle,"insertManufacureCreation",[this.manufacture]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode}onClearClick(){"NEW"==this.pageMode?(this.manufacture=JSON.parse(this.emptyManufacture),this.isEditable=!0):this.isEditable=!1}}return(u=c).\u0275fac=function(n){return new(n||u)(e.Y36(M.f),e.Y36(v.gz))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-manufacturecreation"]],viewQuery:function(n,o){if(1&n&&(e.Gf(C.G,5),e.Gf(h.g,5)),2&n){let l;e.iGM(l=e.CRH())&&(o.header=l.first),e.iGM(l=e.CRH())&&(o.saving=l.first)}},decls:42,vars:57,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"formgrid","grid"],[1,"col-4","md:col-6","sm:col-6","lg:col-4","xl:col-4"],["legend","Manufacture",3,"toggleable"],[1,"field","col-12","md:col-12","sm:col-12","lg:col-12","xl:col-12"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","options","inputModel","optionLabel","optionValue","inputModelChange"],["legend","Region",3,"toggleable"],[3,"labelName","inputModel","disabled","inputModelChange"],[1,"col-7","md:col-8","sm:col-8","lg:col-6","xl:col-6"],["legend","Contact",3,"toggleable"],[1,"grid"],[1,"field","col-12","md:col-10","sm:col-10","lg:col-10","xl:col-10"],[1,"field","col-12","md:col-8","sm:col-6","lg:col-5","xl:col-5"],["saving",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return o.onSaveClick()})("clearClick",function(){return o.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"div",5)(8,"p-fieldset",6)(9,"div",7)(10,"app-inputtext",8),e.NdJ("inputModelChange",function(s){return o.manufacture.manufacturename=s})("onBlur",function(){return o._service.onGetErrorMsgs(o.manufacture,"name",!0)}),e.qZA()(),e.TgZ(11,"div",7)(12,"app-dropdown",9),e.NdJ("inputModelChange",function(s){return o.manufacture.status=s}),e.qZA()(),e.TgZ(13,"div",7)(14,"app-inputtext",8),e.NdJ("inputModelChange",function(s){return o.manufacture.manufacturecode=s})("onBlur",function(){return o._service.onGetErrorMsgs(o.manufacture,"code",!0)}),e.qZA()()()(),e.TgZ(15,"div",5)(16,"p-fieldset",10)(17,"div",7)(18,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.regioncountry=s}),e.qZA()(),e.TgZ(19,"div",7)(20,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.regionstate=s}),e.qZA()(),e.TgZ(21,"div",7)(22,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.regioncity=s}),e.qZA()()()()(),e.TgZ(23,"div",12)(24,"p-fieldset",13)(25,"div",14)(26,"div",15)(27,"app-textarea",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactaddress=s}),e.qZA()(),e.TgZ(28,"div",16)(29,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactphone1=s}),e.qZA()(),e.TgZ(30,"div",16)(31,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactphone2=s}),e.qZA()(),e.TgZ(32,"div",16)(33,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactpostalCode=s}),e.qZA()(),e.TgZ(34,"div",16)(35,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactfax=s}),e.qZA()(),e.TgZ(36,"div",16)(37,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactemail=s}),e.qZA()(),e.TgZ(38,"div",16)(39,"app-inputtext",11),e.NdJ("inputModelChange",function(s){return o.manufacture.contactwebsite=s}),e.qZA()()()()()()()(),e._UZ(40,"app-saving",null,17)),2&n&&(e.xp6(2),e.Q6J("pageTitle",o.pageTitle)("onSubmit",o.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",o.onClear)("onEdit",o.onEdit)("onView",o.onView)("redirectToGrid",o.redirectToGrid),e.xp6(3),e.Akn(e.DdM(56,p)),e.xp6(3),e.Q6J("toggleable",!0),e.xp6(2),e.s9C("errorMessages",o._service.errorMsgs.name),e.Q6J("labelName","Manufacture Name")("inputModel",o.manufacture.manufacturename)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Status")("options",o.statusList)("inputModel",o.manufacture.status)("optionLabel","subMasterName")("optionValue","subMasterId"),e.xp6(2),e.s9C("errorMessages",o._service.errorMsgs.code),e.Q6J("labelName","Manufacture Description")("inputModel",o.manufacture.manufacturecode)("disabled",!o.isEditable),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(2),e.Q6J("labelName","Country")("inputModel",o.manufacture.regioncountry)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","State")("inputModel",o.manufacture.regionstate)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","City")("inputModel",o.manufacture.regioncity)("disabled",!o.isEditable),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(3),e.Q6J("labelName","Address")("inputModel",o.manufacture.contactaddress)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Phone 1")("inputModel",o.manufacture.contactphone1)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Phone 2")("inputModel",o.manufacture.contactphone2)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","postal Code")("inputModel",o.manufacture.contactpostalCode)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Fax")("inputModel",o.manufacture.contactfax)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Contact Email")("inputModel",o.manufacture.contactemail)("disabled",!o.isEditable),e.xp6(2),e.Q6J("labelName","Web Site")("inputModel",o.manufacture.contactwebsite)("disabled",!o.isEditable))},dependencies:[_.p,m.P,f.G,g.J,C.G,T.R,h.g]}),c})();var A=i(8032);const k=[{path:"",component:E}];let d=(()=>{var u;class c{}return(u=c).\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[a.ez,A.u,v.Bz.forChild(k)]}),c})()}}]);