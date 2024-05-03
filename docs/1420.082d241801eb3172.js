"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[1420],{1420:(G,d,a)=>{a.r(d),a.d(d,{UomcreationModule:()=>T});var g=a(6814),c=a(5861),h=a(6990),p=a(7934),u=a(1038),t=a(4946),C=a(6113),m=a(7664),M=a(5219),U=a(7338),b=a(8911),f=a(2154),v=a(6782);let E=(()=>{var r;class s{constructor(o,e,i){this._service=o,this._activatedRoute=e,this._messageService=i,this.pageTitle="UOM",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.uomCreation={uomCreationId:0,packageUom:"",unitUom:"",pkgSize:"",integrationId:"",status:"ZLS11",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyUomCreation=JSON.stringify(this.uomCreation),this.errorMsgs={packageUom:"",unitUom:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs),this.unitUomList=[],this.statusList=[]}onGetErrorMsgs(o,e){switch(o){case"packageUom":this.errorMsgs.packageUom=""==this.uomCreation[o]||null==this.uomCreation[o]||null==this.uomCreation[o]?this._service.onGetErrorMsgs(o,!0,"Package Uom"):"";break;case"unitUom":this.errorMsgs.unitUom=""==this.uomCreation[o]||null==this.uomCreation[o]||null==this.uomCreation[o]?this._service.onGetErrorMsgs(o,!0,"Unit Uom"):""}}ngOnInit(){var o=this;return(0,c.Z)(function*(){0==Object.keys(o._service.appConfig).length&&(yield o._service.getConfigData()),o._service.serGetDataobject("getGeneralMaster",{masterid:"ZLUU1"}).subscribe(e=>{o.unitUomList=e.data[0].subMasterData}),o._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(e=>{o.statusList=e.data[0].subMasterData}),o._activatedRoute.paramMap.subscribe(e=>{let i=e.get("param");null!=i?(i=JSON.parse(atob(i)),o.getMasterData(i._id),o.pageMode=i.mode):(o.isEditable=!0,o.pageMode="NEW"),o.isEditable="VIEW"!=o.pageMode})})()}getMasterData(o){this._service.serGetDataobject("getUomCreation",{_id:o}).subscribe(e=>{console.log("dt",e),this.uomCreation={uomCreationId:e.data[0].uomCreationId,packageUom:e.data[0].packageUom,unitUom:e.data[0].unitUom,pkgSize:e.data[0].pkgSize,integrationId:e.data[0].integrationId,status:e.data[0].status,createdt:e.data[0].createdt,createby:e.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){if(h.forEach(["packageUom","unitUom"],n=>{this.onGetErrorMsgs(n,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let i=this.uomCreation;console.log(this.uomCreation),this.saving.onSaveJson("UOM Creation","insertUomCreation",[i]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.uomCreation=JSON.parse(this.emptyUomCreation),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(r=s).\u0275fac=function(o){return new(o||r)(t.Y36(C.f),t.Y36(m.gz),t.Y36(M.ez))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-uomcreation"]],viewQuery:function(o,e){if(1&o&&(t.Gf(p.G,5),t.Gf(u.g,5)),2&o){let i;t.iGM(i=t.CRH())&&(e.header=i.first),t.iGM(i=t.CRH())&&(e.saving=i.first)}},decls:18,vars:35,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"grid"],[1,"col-12","col-offset-0","md:col-6","md:col-offset-3","lg:col-4","lg:col-offset-4","xl:col-4","xl:col-offset-4"],[1,"card"],[1,"col-12"],[3,"labelName","pKeyFilter","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","errorMessages","disabled","options","optionLabel","optionValue","inputModelChange","onBlur"],[3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],["saving",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()}),t.qZA()(),t.TgZ(4,"p-scrollPanel")(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",4)(10,"div",7)(11,"app-inputtext",8),t.NdJ("inputModelChange",function(n){return e.uomCreation.packageUom=n})("onBlur",function(){return e.onGetErrorMsgs("packageUom",!0)}),t.qZA(),t.TgZ(12,"app-dropdown",9),t.NdJ("inputModelChange",function(n){return e.uomCreation.unitUom=n})("onBlur",function(){return e.onGetErrorMsgs("unitUom",!0)}),t.qZA(),t.TgZ(13,"app-inputtext",10),t.NdJ("inputModelChange",function(n){return e.uomCreation.pkgSize=n}),t.qZA(),t.TgZ(14,"app-inputtext",10),t.NdJ("inputModelChange",function(n){return e.uomCreation.integrationId=n}),t.qZA(),t.TgZ(15,"app-dropdown",11),t.NdJ("inputModelChange",function(n){return e.uomCreation.status=n}),t.qZA()()()()()()()()(),t._UZ(16,"app-saving",null,12)),2&o&&(t.xp6(2),t.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("redirectToGrid",e.redirectToGrid),t.xp6(9),t.s9C("errorMessages",e.errorMsgs.packageUom),t.Q6J("labelName","Package UOM")("pKeyFilter","alpha")("inputModel",e.uomCreation.packageUom)("disabled",!e.isEditable),t.xp6(1),t.s9C("errorMessages",e.errorMsgs.unitUom),t.Q6J("labelName","Unit UOM")("inputModel",e.uomCreation.unitUom)("disabled",!e.isEditable)("options",e.unitUomList)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(1),t.Q6J("labelName","PKG Size")("pKeyFilter","num")("inputModel",e.uomCreation.pkgSize)("disabled",!e.isEditable),t.xp6(1),t.Q6J("labelName","Integration ID")("pKeyFilter","num")("inputModel",e.uomCreation.integrationId)("disabled",!e.isEditable),t.xp6(1),t.Q6J("labelName","status")("inputModel",e.uomCreation.status)("disabled",!e.isEditable)("options",e.statusList)("disabled","EDIT"!=e.pageMode)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[U.P,b.G,f.J,p.G,u.g,v.Fr]}),s})();var y=a(8032);const N=[{path:"",component:E}];let T=(()=>{var r;class s{}return(r=s).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,y.u,m.Bz.forChild(N)]}),s})()}}]);