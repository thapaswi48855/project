"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[4938],{4938:(D,u,t)=>{t.r(u),t.d(u,{GenericsubclassificationdetailsModule:()=>T});var b=t(6814),g=t(5861),c=t(6990),d=t(7934),p=t(1038),e=t(4946),C=t(6113),f=t(7664),m=t(5219),h=t(7338),M=t(8911),v=t(2154),S=t(6782);const N=function(){return{width:"100%",height:" calc(100vh - 120px)"}};let G=(()=>{var o;class l{constructor(s,i,a){this._service=s,this._activatedRoute=i,this._messageService=a,this.pageTitle="Generic Sub Classification",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.genericSubClassification={genSubClasiId:0,clasificationName:"",subClasificationName:"",subClasificationDesc:"",status:"ZLS11",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyGenericSubClassification=JSON.stringify(this.genericSubClassification),this.geneticClassificationList=[],this.statusList=[],this.zeroLevelEntity=[],this.errorMsgs={clasificationNameReq:"",subClasificationNameReq:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(s,i){switch(s){case"clasificationName":this.errorMsgs.clasificationNameReq=""==this.genericSubClassification[s]||null==this.genericSubClassification[s]||null==this.genericSubClassification[s]?this._service.onGetErrorMsgs(s,!0,"Clasification Name"):"";break;case"subClasificationName":this.errorMsgs.subClasificationNameReq=""==this.genericSubClassification[s]||null==this.genericSubClassification[s]||null==this.genericSubClassification[s]?this._service.onGetErrorMsgs(s,!0,"Sub Clasification Name"):""}}ngOnInit(){var s=this;return(0,g.Z)(function*(){0==Object.keys(s._service.appConfig).length&&(yield s._service.getConfigData()),s._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(i=>{s.statusList=i.data[0].subMasterData}),s._service.serGetDataobject("getGenericClassificationDetails",{status:"ZLS11"}).subscribe(i=>{s.geneticClassificationList=i.data}),s._service.serGetData("getGeneralMaster").subscribe(i=>{s.zeroLevelEntity=i.data;let a=c.filter(s.zeroLevelEntity,{masterid:"ZLC9"});c.forEach(a,(n,J)=>{s.statusList.push({label:n.mastername,value:n._id})})}),s._activatedRoute.paramMap.subscribe(i=>{let a=i.get("param");null!=a?(a=JSON.parse(atob(a)),s.getMasterData(a.genSubClasiId),s.pageMode=a.mode):(s.isEditable=!0,s.pageMode="NEW"),s.isEditable="VIEW"!=s.pageMode})})()}getMasterData(s){this._service.serGetDataobject("getGenericSubClassificationDetails",{genSubClasiId:s}).subscribe(i=>{console.log("dt",i),this.genericSubClassification={genSubClasiId:i.data[0].genSubClasiId,clasificationName:i.data[0].clasificationName,subClasificationName:i.data[0].subClasificationName,subClasificationDesc:i.data[0].subClasificationDesc,status:i.data[0].status,createdt:i.data[0].createdt,createby:i.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){if(c.forEach(["clasificationName","subClasificationName"],n=>{this.onGetErrorMsgs(n,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let a=this.genericSubClassification;console.log(this.genericSubClassification),this.saving.onSaveJson(this.pageTitle,"insertGenericSubClassificationDetails",[a]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.genericSubClassification=JSON.parse(this.emptyGenericSubClassification),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(o=l).\u0275fac=function(s){return new(s||o)(e.Y36(C.f),e.Y36(f.gz),e.Y36(m.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-genericsubclassificationdetails"]],viewQuery:function(s,i){if(1&s&&(e.Gf(d.G,5),e.Gf(p.g,5)),2&s){let a;e.iGM(a=e.CRH())&&(i.header=a.first),e.iGM(a=e.CRH())&&(i.saving=a.first)}},decls:14,vars:30,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"card"],["styleClass","custombar1"],[1,"field","col-12","md:col-6","sm:col-6","lg:col-3","xl:col-3"],[3,"labelName","options","inputModel","errorMessages","optionLabel","optionValue","inputModelChange","onBlur"],["pKeyFilter","alpha",3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","options","inputModel","optionLabel","optionValue","disabled","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"p-scrollPanel",5)(7,"div",6)(8,"app-dropdown",7),e.NdJ("inputModelChange",function(n){return i.genericSubClassification.clasificationName=n})("onBlur",function(){return i.onGetErrorMsgs("clasificationName",!0)}),e.qZA(),e.TgZ(9,"app-inputtext",8),e.NdJ("inputModelChange",function(n){return i.genericSubClassification.subClasificationName=n})("onBlur",function(){return i.onGetErrorMsgs("subClasificationName",!0)}),e.qZA(),e.TgZ(10,"app-dropdown",9),e.NdJ("inputModelChange",function(n){return i.genericSubClassification.status=n}),e.qZA(),e.TgZ(11,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.genericSubClassification.subClasificationDesc=n}),e.qZA()()()()()(),e._UZ(12,"app-saving",null,11)),2&s&&(e.xp6(2),e.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",i.onClear)("onEdit",i.onEdit)("onView",i.onView)("redirectToGrid",i.redirectToGrid),e.xp6(4),e.Akn(e.DdM(29,N)),e.xp6(2),e.s9C("errorMessages",i.errorMsgs.clasificationNameReq),e.Q6J("labelName","Clasification Name")("options",i.geneticClassificationList)("inputModel",i.genericSubClassification.clasificationName)("optionLabel","clasificationName")("optionValue","genericClassificationId"),e.xp6(1),e.s9C("errorMessages",i.errorMsgs.subClasificationNameReq),e.Q6J("labelName","Sub Clasification Name")("inputModel",i.genericSubClassification.subClasificationName)("disabled",!i.isEditable),e.xp6(1),e.Q6J("labelName","Status")("options",i.statusList)("inputModel",i.genericSubClassification.status)("optionLabel","subMasterName")("optionValue","subMasterId")("disabled","EDIT"!=i.pageMode),e.xp6(1),e.Q6J("labelName","Clasification Description")("inputModel",i.genericSubClassification.subClasificationDesc)("disabled",!i.isEditable))},dependencies:[h.P,M.G,v.J,d.G,p.g,S.Fr]}),l})();var E=t(8032);const y=[{path:"",component:G}];let T=(()=>{var o;class l{}return(o=l).\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[b.ez,E.u,f.Bz.forChild(y)]}),l})()}}]);