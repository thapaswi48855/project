"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[733],{733:(T,c,n)=>{n.r(c),n.d(c,{GenericdetailsModule:()=>S});var h=n(6814),p=n(5861),d=n(6990),u=n(7934),g=n(1038),i=n(4946),b=n(6113),m=n(7664),f=n(5219),C=n(7338),M=n(8911),N=n(2154),v=n(6782);const G=function(){return{width:"100%",height:" calc(100vh - 120px)"}};let D=(()=>{var r;class o{constructor(t,e,s){this._service=t,this._activatedRoute=e,this._messageService=s,this.pageTitle="Generic Details",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericDetails={generDetId:0,genericName:"",clasificationName:"",subClassificationName:"",standrdAdultDose:"",status:"ZLS11",crability:"",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyGenericDetails=JSON.stringify(this.genericDetails),this.geneticClassificationList=[],this.geneticSubClassificationList=[],this.zeroLevelEntity=[],this.critialityList=[],this.statusList=[],this.errorMsgs={clasificationNameReq:"",genericNameReq:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(t,e){"genericName"===t&&(this.errorMsgs.genericNameReq=""==this.genericDetails[t]||null==this.genericDetails[t]||null==this.genericDetails[t]?this._service.onGetErrorMsgs(t,!0,"Generic Name"):"")}ngOnInit(){var t=this;return(0,p.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._activatedRoute.paramMap.subscribe(e=>{let s=e.get("param");null!=s?(s=JSON.parse(atob(s)),t.getMasterData(s.generDetId),t.pageMode=s.mode):(t.isEditable=!0,t.pageMode="NEW"),t.isEditable="VIEW"!=t.pageMode}),t._service.serGetDataobject("getGenericClassificationDetails",{status:"ZLS11"}).subscribe(e=>{t.geneticClassificationList=e.data}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(e=>{t.statusList=e.data[0].subMasterData}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLCra1"}).subscribe(e=>{t.critialityList=e.data[0].subMasterData}),t._service.serGetData("getGeneralMaster").subscribe(e=>{t.zeroLevelEntity=e.data;let s=d.filter(t.zeroLevelEntity,{masterid:"ZLC9"});d.forEach(s,(a,L)=>{t.statusList.push({label:a.mastername,value:a._id})})})})()}onSubClasification(t){this._service.serGetDataobject("getGenericSubClassificationDetails",{status:"ZLS11",clasificationName:t}).subscribe(e=>{this.geneticSubClassificationList=e.data})}getMasterData(t){var e=this;this._service.serGetDataobject("getGenericDetails",{generDetId:t}).subscribe(function(){var s=(0,p.Z)(function*(a){yield e.onSubClasification(a.data[0].clasificationName),e.genericDetails={generDetId:a.data[0].generDetId,genericName:a.data[0].genericName,clasificationName:a.data[0].clasificationName,subClassificationName:a.data[0].subClassificationName,standrdAdultDose:a.data[0].standrdAdultDose,status:a.data[0].status,crability:a.data[0].crability,createdt:a.data[0].createdt,createby:a.data[0].createby,modifydt:null,modifyby:e._service.getUserVal("userid")},e.isShowEditable=!e.isEditable&&"NEW"!=e.pageMode});return function(a){return s.apply(this,arguments)}}())}onGridClick(){}onSaveClick(){d.forEach(["genericName"],a=>{this.onGetErrorMsgs(a,!0)}),this._service.showErr(this.errorMsgs)?this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}):(this.saving.onSaveJson(this.pageTitle,"insertGenericDetails",[this.genericDetails]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode)}onClearClick(){"NEW"==this.pageMode?(this.genericDetails=JSON.parse(this.emptyGenericDetails),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(r=o).\u0275fac=function(t){return new(t||r)(i.Y36(b.f),i.Y36(m.gz),i.Y36(f.ez))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-genericdetails"]],viewQuery:function(t,e){if(1&t&&(i.Gf(u.G,5),i.Gf(g.g,5)),2&t){let s;i.iGM(s=i.CRH())&&(e.header=s.first),i.iGM(s=i.CRH())&&(e.saving=s.first)}},decls:16,vars:42,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"card"],[1,"field","col-12","md:col-6","sm:col-6","lg:col-3","xl:col-3"],["pKeyFilter","alpha",3,"labelName","inputModel","disabled","errorMessages","inputModelChange","onBlur"],[3,"labelName","inputModel","options","disabled","optionLabel","optionValue","inputModelChange","onChange"],[3,"labelName","inputModel","options","disabled","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],["saving",""]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),i.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()}),i.qZA()(),i.TgZ(4,"div",3)(5,"div",4)(6,"p-scrollPanel")(7,"div",5)(8,"app-inputtext",6),i.NdJ("inputModelChange",function(a){return e.genericDetails.genericName=a})("onBlur",function(){return e.onGetErrorMsgs("genericName",!0)}),i.qZA(),i.TgZ(9,"app-dropdown",7),i.NdJ("inputModelChange",function(a){return e.genericDetails.clasificationName=a})("onChange",function(){return e.onSubClasification(e.genericDetails.clasificationName)}),i.qZA(),i.TgZ(10,"app-dropdown",8),i.NdJ("inputModelChange",function(a){return e.genericDetails.subClassificationName=a}),i.qZA(),i.TgZ(11,"app-inputtext",9),i.NdJ("inputModelChange",function(a){return e.genericDetails.standrdAdultDose=a}),i.qZA(),i.TgZ(12,"app-dropdown",10),i.NdJ("inputModelChange",function(a){return e.genericDetails.crability=a}),i.qZA(),i.TgZ(13,"app-dropdown",10),i.NdJ("inputModelChange",function(a){return e.genericDetails.status=a}),i.qZA()()()()()(),i._UZ(14,"app-saving",null,11)),2&t&&(i.xp6(2),i.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("redirectToGrid",e.redirectToGrid),i.xp6(4),i.Akn(i.DdM(41,G)),i.xp6(2),i.s9C("errorMessages",e.errorMsgs.genericNameReq),i.Q6J("labelName","Generic Name")("inputModel",e.genericDetails.genericName)("disabled",!e.isEditable),i.xp6(1),i.Q6J("labelName","Classification Name")("inputModel",e.genericDetails.clasificationName)("options",e.geneticClassificationList)("disabled",!e.isEditable)("optionLabel","clasificationName")("optionValue","genericClassificationId"),i.xp6(1),i.Q6J("labelName","Sub Classification Name")("inputModel",e.genericDetails.subClassificationName)("options",e.geneticSubClassificationList)("disabled",!e.isEditable)("optionLabel","subClasificationName")("optionValue","genSubClasiId"),i.xp6(1),i.Q6J("labelName","standrd Adult Dose")("inputModel",e.genericDetails.standrdAdultDose)("disabled",!e.isEditable),i.xp6(1),i.Q6J("labelName","Crability")("inputModel",e.genericDetails.crability)("disabled",!e.isEditable)("options",e.critialityList)("optionLabel","subMasterName")("optionValue","subMasterId"),i.xp6(1),i.Q6J("labelName","Status")("inputModel",e.genericDetails.status)("disabled","EDIT"!=e.pageMode)("options",e.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[C.P,M.G,N.J,u.G,g.g,v.Fr]}),o})();var y=n(8032);const E=[{path:"",component:D}];let S=(()=>{var r;class o{}return(r=o).\u0275fac=function(t){return new(t||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[h.ez,y.u,m.Bz.forChild(E)]}),o})()}}]);