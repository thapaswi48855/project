"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[8955],{8955:(E,d,o)=>{o.r(d),o.d(d,{AdditemcategoryModule:()=>A});var g=o(6814),b=o(5861),c=o(6990),p=o(7934),u=o(1038),t=o(4946),C=o(6113),m=o(7664),h=o(5219),y=o(7338),M=o(8911),v=o(2154),f=o(5996);const N=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let _=(()=>{var r;class n{constructor(a,e,i){this._service=a,this._activatedRoute=e,this._messageService=i,this.pageTitle="Item",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.zeroLevelEntity=[],this.redirectToGrid=!1,this.itemCategory={categoryName:"",identification:"",issuseType:"",bilable:"",retilable:"",calmiable:"",validateExpireDate:"08-10-2023",discount:"",prescribable:"",assestsTracking:"",status:"ZLS11",drug:"",createdt:null,createby:"",modifydt:null,modifyby:""},this.identificationList=[{label:"Select One",value:""}],this.issuseTypeList=[{label:"Select One",value:""}],this.billableList=[{label:"Select One",value:""}],this.retilableList=[{label:"Select One",value:""}],this.clamiableList=[{label:"Select One",value:""}],this.prescribableList=[{label:"Select One",value:""}],this.asseststrackingList=[{label:"Select One",value:""}],this.drugList=[{label:"Select One",value:""}],this.statusList=[{label:"Select One",value:""}],this.emptyItemCategory=JSON.stringify(this.itemCategory),this.errorMsgs={categoryName:""}}onGetErrorMsgs(a,e){"categoryName"===a&&(this.errorMsgs.categoryName=""==this.itemCategory[a]||null==this.itemCategory[a]||null==this.itemCategory[a]?this._service.onGetErrorMsgs("categoryName",!0,"Category Name"):"")}ngOnInit(){var a=this;return(0,b.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLI1"}).subscribe(e=>{a.identificationList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLIT1"}).subscribe(e=>{a.issuseTypeList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLB1"}).subscribe(e=>{a.billableList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLR1"}).subscribe(e=>{a.retilableList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLCal1"}).subscribe(e=>{a.clamiableList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLPre1"}).subscribe(e=>{a.prescribableList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAT1"}).subscribe(e=>{a.asseststrackingList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(e=>{a.statusList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLD1"}).subscribe(e=>{a.drugList=e.data[0].subMasterData}),a._activatedRoute.paramMap.subscribe(e=>{let i=e.get("param");null!=i?(i=JSON.parse(atob(i)),a.getMasterData(i._id),a.pageMode=i.mode):(a.isEditable=!0,a.pageMode="NEW"),a.isEditable="VIEW"!=a.pageMode})})()}getMasterData(a){this._service.serGetDataobject("getAddItemCategory",{_id:a}).subscribe(e=>{console.log("dt",e),this.itemCategory=e.data[0],this.itemCategory.validateExpireDate=new Date(this.itemCategory.validateExpireDate),this.itemCategory._id=this.itemCategory._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){if(c.forEach(["categoryName"],s=>{this.onGetErrorMsgs(s,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let i=this.itemCategory;console.log(this.itemCategory),this.saving.onSaveJson("Add Item Category","insertAddItemCategory",[i]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.itemCategory=JSON.parse(this.emptyItemCategory),this.isEditable=!0):this.isEditable=!1}}return(r=n).\u0275fac=function(a){return new(a||r)(t.Y36(C.f),t.Y36(m.gz),t.Y36(h.ez))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-additemcategory"]],viewQuery:function(a,e){if(1&a&&(t.Gf(p.G,5),t.Gf(u.g,5)),2&a){let i;t.iGM(i=t.CRH())&&(e.header=i.first),t.iGM(i=t.CRH())&&(e.saving=i.first)}},decls:33,vars:75,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"formgrid","grid"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","options","inputModel","disabled","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()}),t.qZA()(),t.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"div",5)(8,"app-inputtext",6),t.NdJ("inputModelChange",function(s){return e.itemCategory.categoryName=s})("onBlur",function(){return e.onGetErrorMsgs("categoryName",!0)}),t.qZA()(),t.TgZ(9,"div",5)(10,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.identification=s}),t.qZA()(),t.TgZ(11,"div",5)(12,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.issuseType=s}),t.qZA()(),t.TgZ(13,"div",5)(14,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.bilable=s}),t.qZA()(),t.TgZ(15,"div",5)(16,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.retilable=s}),t.qZA()(),t.TgZ(17,"div",5)(18,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.calmiable=s}),t.qZA()(),t.TgZ(19,"div",5)(20,"app-datepicker",8),t.NdJ("inputModelChange",function(s){return e.itemCategory.validateExpireDate=s}),t.qZA()(),t.TgZ(21,"div",5)(22,"app-inputtext",8),t.NdJ("inputModelChange",function(s){return e.itemCategory.discount=s}),t.qZA()(),t.TgZ(23,"div",5)(24,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.prescribable=s}),t.qZA()(),t.TgZ(25,"div",5)(26,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.assestsTracking=s}),t.qZA()(),t.TgZ(27,"div",5)(28,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.status=s}),t.qZA()(),t.TgZ(29,"div",5)(30,"app-dropdown",7),t.NdJ("inputModelChange",function(s){return e.itemCategory.drug=s}),t.qZA()()()()()(),t._UZ(31,"app-saving",null,9)),2&a&&(t.xp6(2),t.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("redirectToGrid",e.redirectToGrid),t.xp6(3),t.Akn(t.DdM(74,N)),t.xp6(3),t.s9C("errorMessages",e.errorMsgs.categoryName),t.Q6J("labelName","Category Name")("inputModel",e.itemCategory.categoryName)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Identification")("options",e.identificationList)("inputModel",e.itemCategory.identification)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Issuse Type ")("options",e.issuseTypeList)("inputModel",e.itemCategory.issuseType)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Bilable")("options",e.billableList)("inputModel",e.itemCategory.bilable)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Retilable")("options",e.retilableList)("inputModel",e.itemCategory.retilable)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Calmiable")("options",e.clamiableList)("inputModel",e.itemCategory.calmiable)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Validate Expire Date")("inputModel",e.itemCategory.validateExpireDate)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Discount %")("inputModel",e.itemCategory.discount)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","prescribable")("options",e.prescribableList)("inputModel",e.itemCategory.prescribable)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Assests Tracking")("options",e.asseststrackingList)("inputModel",e.itemCategory.assestsTracking)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Status")("options",e.statusList)("inputModel",e.itemCategory.status)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Drug")("options",e.drugList)("inputModel",e.itemCategory.drug)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[y.P,M.G,v.J,p.G,u.g,f.Q]}),n})();var T=o(8032);const L=[{path:"",component:_}];let A=(()=>{var r;class n{}return(r=n).\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,T.u,m.Bz.forChild(L)]}),n})()}}]);