"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[6198],{6198:(J,p,t)=>{t.r(p),t.d(p,{ServicesubgroupModule:()=>T});var v=t(6814),l=t(5861),d=t(7934),c=t(1038),b=t(6990),e=t(4946),m=t(6113),g=t(7664),h=t(5219),M=t(7338),C=t(8911),S=t(2154);const f=function(){return{width:"100%",height:" calc(100vh - 120px)"}};let E=(()=>{var a;class n{constructor(s,i,r){this._service=s,this._activatedRoute=i,this._messageService=r,this.pageTitle="Service Sub Group",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.serviceGroupList=[],this.accountHeadList=[],this.servicesubgroup={servicegroupname:"",accounthead:"",status:"ZLS11",servicesubgroupname:"",displayorder:"",code:"",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyServicesubgroup=JSON.stringify(this.servicesubgroup),this.errorMsgs={servicegroupname:""},this.statusList=[],this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(s,i){"servicegroupname"===s&&(this.errorMsgs.servicegroupname=""==this.servicesubgroup[s]||null==this.servicesubgroup[s]||null==this.servicesubgroup[s]?this._service.onGetErrorMsgs("servicegroupname",!0,"Service Group Name"):"")}ngOnInit(){var s=this;return(0,l.Z)(function*(){0==Object.keys(s._service.appConfig).length&&(yield s._service.getConfigData()),s._service.serGetDataobject("getServiceGroupMaster",{status:"ZLS11"}).subscribe(i=>{s.serviceGroupList=i.data}),s._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(i=>{s.statusList=i.data[0].subMasterData}),s._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAH1"}).subscribe(i=>{s.accountHeadList=i.data[0].subMasterData}),s._activatedRoute.paramMap.subscribe(i=>{let r=i.get("param");null!=r?(r=JSON.parse(atob(r)),s.getMasterData(r._id),s.pageMode=r.mode):(s.isEditable=!0,s.pageMode="NEW"),s.isEditable="VIEW"!=s.pageMode})})()}getMasterData(s){this._service.serGetDataobject("getServiceSubGroupMaster",{_id:s}).subscribe(i=>{console.log("dt",i),this.servicesubgroup=i.data[0],this.servicesubgroup._id=this.servicesubgroup._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onSaveClick(){var s=this;return(0,l.Z)(function*(){if(b.forEach(["servicegroupname"],y=>{s.onGetErrorMsgs(y,!0)}),s._service.showErr(s.errorMsgs))return void s._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let o=s.servicesubgroup;yield s.saving.onSaveJson(s.pageTitle,"insertServiceSubGroupMaster",[o]),s.redirectToGrid="NEW"!=s.pageMode,s.onClearClick()})()}onClearClick(){"NEW"==this.pageMode?(this.servicesubgroup=JSON.parse(this.emptyServicesubgroup),this.isEditable=!0):this.isEditable=!1,this.errorMsgs=JSON.parse(this.emptyErrorMsgs)}}return(a=n).\u0275fac=function(s){return new(s||a)(e.Y36(m.f),e.Y36(g.gz),e.Y36(h.ez))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-servicesubgroup"]],viewQuery:function(s,i){if(1&s&&(e.Gf(d.G,5),e.Gf(c.g,5)),2&s){let r;e.iGM(r=e.CRH())&&(i.header=r.first),e.iGM(r=e.CRH())&&(i.saving=r.first)}},decls:17,vars:38,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"card"],[1,"grid"],[1,"field","col-12","md:col-6","sm:col-6","lg:col-3","xl:col-3"],[3,"inputModel","labelName","optionLabel","optionValue","disabled","options","inputModelChange"],[3,"inputModel","labelName","disabled","options","optionLabel","optionValue","inputModelChange"],[3,"inputModel","labelName","disabled","inputModelChange"],["saving",""]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"p-scrollPanel")(7,"div",5)(8,"div",6)(9,"app-dropdown",7),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.servicegroupname=o}),e.qZA(),e.TgZ(10,"app-dropdown",8),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.accounthead=o}),e.qZA(),e.TgZ(11,"app-dropdown",7),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.status=o}),e.qZA(),e.TgZ(12,"app-inputtext",9),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.servicesubgroupname=o}),e.qZA(),e.TgZ(13,"app-inputtext",9),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.code=o}),e.qZA(),e.TgZ(14,"app-inputtext",9),e.NdJ("inputModelChange",function(o){return i.servicesubgroup.displayorder=o}),e.qZA()()()()()()(),e._UZ(15,"app-saving",null,10)),2&s&&(e.xp6(2),e.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",i.onClear)("onEdit",i.onEdit)("onView",i.onView)("redirectToGrid",i.redirectToGrid),e.xp6(4),e.Akn(e.DdM(37,f)),e.xp6(3),e.Q6J("inputModel",i.servicesubgroup.servicegroupname)("labelName","Service Group Name")("optionLabel","servicegroupname")("optionValue","_id")("disabled",!i.isEditable)("options",i.serviceGroupList),e.xp6(1),e.Q6J("inputModel",i.servicesubgroup.accounthead)("labelName","Account Head")("disabled",!i.isEditable)("options",i.accountHeadList)("optionLabel","subMasterName")("optionValue","subMasterId"),e.xp6(1),e.Q6J("inputModel",i.servicesubgroup.status)("labelName","Status")("optionLabel","subMasterName")("optionValue","subMasterId")("disabled",!i.isEditable)("options",i.statusList),e.xp6(1),e.Q6J("inputModel",i.servicesubgroup.servicesubgroupname)("labelName","Service Sub Group Name")("disabled",!i.isEditable),e.xp6(1),e.Q6J("inputModel",i.servicesubgroup.code)("labelName","Alias/Code")("disabled",!i.isEditable),e.xp6(1),e.Q6J("inputModel",i.servicesubgroup.displayorder)("labelName","Display Order:")("disabled",!i.isEditable))},dependencies:[M.P,C.G,S.J,d.G,c.g],encapsulation:2}),n})();var G=t(8032);const N=[{path:"",component:E}];let T=(()=>{var a;class n{}return(a=n).\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[v.ez,G.u,g.Bz.forChild(N)]}),n})()}}]);