"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[2618],{8213:(y,g,i)=>{i.d(g,{R:()=>h});var r=i(4946),b=i(6814),d=i(95),M=i(3259),v=i(218),e=i(6218);const _=function(s,p){return{"ng-invalid":s,"ng-dirty":p}};let h=(()=>{var s;class p{constructor(){this.inputModel="",this.errorMessages="",this.labelName="",this.isMandatoryIcon=!1,this.rows=0,this.cols=0,this.disabled=!1,this.onBlur=new r.vpe,this.inputModelChange=new r.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(s=p).\u0275fac=function(c){return new(c||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-textarea"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",rows:"rows",cols:"cols",disabled:"disabled"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:7,vars:10,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["rows","rows","cols","cols","pInputTextarea","","pAutoFocus","",3,"ngModel","disabled","pTooltip","ngClass","ngModelChange","blur"],["id","username-help"]],template:function(c,u){1&c&&(r.TgZ(0,"div",0)(1,"div",1)(2,"label",2),r._uU(3),r.qZA(),r.TgZ(4,"textarea",3),r.NdJ("ngModelChange",function(E){return u.inputModel=E})("blur",function(){return u.onLeaveControl()}),r.qZA(),r.TgZ(5,"small",4),r._uU(6),r.qZA()()()),2&c&&(r.xp6(2),r.s9C("htmlFor",u.labelName),r.xp6(1),r.hij("",u.labelName," :"),r.xp6(1),r.s9C("pTooltip",u.errorMessages),r.Q6J("ngModel",u.inputModel)("disabled",u.disabled)("ngClass",r.WLB(7,_,""!==u.errorMessages,""!==u.errorMessages)),r.xp6(2),r.Oqu(u.errorMessages))},dependencies:[b.mk,d.Fj,d.JJ,d.On,M.u,v.P,e.g]}),p})()},2618:(y,g,i)=>{i.r(g),i.d(g,{ManufacturecreationModule:()=>A});var r=i(6814),b=i(5861),d=i(7934),M=i(1038),v=i(6990),e=i(4946),_=i(6113),h=i(7664),s=i(5219),p=i(7791),C=i(7338),c=i(8911),u=i(2154),T=i(8213),E=i(6782);let N=(()=>{var l;class m{constructor(t,a,n){this._service=t,this._activatedRoute=a,this._messageService=n,this.pageTitle="Manufacture Creation",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.manufacture={manufacureId:0,manufacturename:"",status:"ZLS11",manufacturecode:"",manufacturedesc:"",regioncountry:"",regionstate:"",regioncity:"",contactaddress:"",contactphone1:"",contactphone2:"",contactpostalCode:"",contactfax:"",contactemail:"",contactwebsite:"",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyManufacture=JSON.stringify(this.manufacture),this.statusList=[],this.zeroLevelEntity=[],this.errorMsgs={manufacturenameReq:"",manufacturecodeReq:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(t,a){switch(t){case"manufacturename":this.errorMsgs.manufacturenameReq=""==this.manufacture[t]||null==this.manufacture[t]||null==this.manufacture[t]?this._service.onGetErrorMsgs(t,!0,"Manufacture Name"):"";break;case"manufacturecode":this.errorMsgs.manufacturecodeReq=""==this.manufacture[t]||null==this.manufacture[t]||null==this.manufacture[t]?this._service.onGetErrorMsgs(t,!0,"Manufacture Code"):""}}ngOnInit(){var t=this;return(0,b.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(a=>{console.log(a),t.statusList=a.data[0].subMasterData,console.log("this.statusList",t.statusList)}),t._activatedRoute.paramMap.subscribe(a=>{let n=a.get("param");null!=n?(n=JSON.parse(atob(n)),t.getMasterData(n.manufacureId),t.pageMode=n.mode):(t.isEditable=!0,t.pageMode="NEW"),t.isEditable="VIEW"!=t.pageMode})})()}getMasterData(t){this._service.serGetDataobject("getManufacureCreation",{manufacureId:t}).subscribe(a=>{this.manufacture={manufacureId:a.data[0].manufacureId,manufacturename:a.data[0].manufacturename,status:a.data[0].status,manufacturecode:a.data[0].manufacturecode,regioncountry:a.data[0].regioncountry,regionstate:a.data[0].regionstate,regioncity:a.data[0].regioncity,contactaddress:a.data[0].contactaddress,contactphone1:a.data[0].contactphone1,contactphone2:a.data[0].contactphone2,contactpostalCode:a.data[0].contactpostalCode,contactfax:a.data[0].contactfax,contactemail:a.data[0].contactemail,contactwebsite:a.data[0].contactwebsite,createdt:a.data[0].createdt,createby:a.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){v.forEach(["manufacturename","manufacturecode"],o=>{this.onGetErrorMsgs(o,!0)}),this._service.showErr(this.errorMsgs)?this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}):(this.saving.onSaveJson(this.pageTitle,"insertManufacureCreation",[this.manufacture]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode)}onClearClick(){"NEW"==this.pageMode?(this.manufacture=JSON.parse(this.emptyManufacture),this.isEditable=!0):this.isEditable=!1}}return(l=m).\u0275fac=function(t){return new(t||l)(e.Y36(_.f),e.Y36(h.gz),e.Y36(s.ez))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-manufacturecreation"]],viewQuery:function(t,a){if(1&t&&(e.Gf(d.G,5),e.Gf(M.g,5)),2&t){let n;e.iGM(n=e.CRH())&&(a.header=n.first),e.iGM(n=e.CRH())&&(a.saving=n.first)}},decls:56,vars:66,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"grid"],[1,"col-12","sm:col-12","md:col-12","lg:col-4","xl:col-4"],[1,"card"],[1,"col-12","md:col-12","lg:col-12","xl:col-12"],["legend","Manufacture",3,"toggleable"],[1,"formgrid","grid"],[1,"field","col-12","md:col-12","lg:col-12","xl:col-12"],[3,"labelName","inputModel","errorMessages","disabled","pKeyFilter","inputModelChange","onBlur"],[3,"labelName","options","disabled","inputModel","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","inputModelChange"],["legend","Region",3,"toggleable"],[1,"field","col-12","md:col-4","lg:col-12","xl:col-12"],[3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],[1,"col-12","sm:col-12","md:col-12","lg:col-8","xl:col-8"],["legend","Contact",3,"toggleable"],[1,"field","col-12","md:col-4","lg:col-4","xl:col-4"],["maxlength","10",3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],["maxlength","6",3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],["maxlength","12",3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],["saving",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return a.onSaveClick()})("clearClick",function(){return a.onClearClick()}),e.qZA()(),e.TgZ(4,"p-scrollPanel")(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",4)(10,"div",7)(11,"p-fieldset",8)(12,"div",9)(13,"div",10)(14,"app-inputtext",11),e.NdJ("inputModelChange",function(o){return a.manufacture.manufacturename=o})("onBlur",function(){return a.onGetErrorMsgs("manufacturename",!0)}),e.qZA()(),e.TgZ(15,"div",10)(16,"app-dropdown",12),e.NdJ("inputModelChange",function(o){return a.manufacture.status=o}),e.qZA()(),e.TgZ(17,"div",10)(18,"app-inputtext",13),e.NdJ("inputModelChange",function(o){return a.manufacture.manufacturecode=o})("onBlur",function(){return a.onGetErrorMsgs("manufacturecode",!0)}),e.qZA()(),e.TgZ(19,"div",10)(20,"app-textarea",14),e.NdJ("inputModelChange",function(o){return a.manufacture.manufacturedesc=o}),e.qZA()()()()()()()(),e.TgZ(21,"div",5)(22,"div",6)(23,"div",4)(24,"div",7)(25,"p-fieldset",15)(26,"div",9)(27,"div",16)(28,"app-inputtext",17),e.NdJ("inputModelChange",function(o){return a.manufacture.regioncountry=o}),e.qZA()(),e.TgZ(29,"div",16)(30,"app-inputtext",17),e.NdJ("inputModelChange",function(o){return a.manufacture.regionstate=o}),e.qZA()(),e.TgZ(31,"div",16)(32,"app-inputtext",17),e.NdJ("inputModelChange",function(o){return a.manufacture.regioncity=o}),e.qZA()()()()()()()(),e.TgZ(33,"div",18)(34,"div",6)(35,"div",4)(36,"div",7)(37,"p-fieldset",19)(38,"div",9)(39,"div",4)(40,"div",10)(41,"app-textarea",14),e.NdJ("inputModelChange",function(o){return a.manufacture.contactaddress=o}),e.qZA()(),e.TgZ(42,"div",20)(43,"app-inputtext",21),e.NdJ("inputModelChange",function(o){return a.manufacture.contactphone1=o}),e.qZA()(),e.TgZ(44,"div",20)(45,"app-inputtext",21),e.NdJ("inputModelChange",function(o){return a.manufacture.contactphone2=o}),e.qZA()(),e.TgZ(46,"div",20)(47,"app-inputtext",22),e.NdJ("inputModelChange",function(o){return a.manufacture.contactpostalCode=o}),e.qZA()(),e.TgZ(48,"div",20)(49,"app-inputtext",23),e.NdJ("inputModelChange",function(o){return a.manufacture.contactfax=o}),e.qZA()(),e.TgZ(50,"div",20)(51,"app-inputtext",14),e.NdJ("inputModelChange",function(o){return a.manufacture.contactemail=o}),e.qZA()(),e.TgZ(52,"div",20)(53,"app-inputtext",14),e.NdJ("inputModelChange",function(o){return a.manufacture.contactwebsite=o}),e.qZA()()()()()()()()()()()()(),e._UZ(54,"app-saving",null,24)),2&t&&(e.xp6(2),e.Q6J("pageTitle",a.pageTitle)("onSubmit",a.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",a.onClear)("onEdit",a.onEdit)("onView",a.onView)("redirectToGrid",a.redirectToGrid),e.xp6(9),e.Q6J("toggleable",!0),e.xp6(3),e.s9C("errorMessages",a.errorMsgs.manufacturenameReq),e.Q6J("labelName","Manufacture Name")("inputModel",a.manufacture.manufacturename)("disabled",!a.isEditable)("pKeyFilter","alpha"),e.xp6(2),e.Q6J("labelName","Status")("options",a.statusList)("disabled","EDIT"!=a.pageMode)("inputModel",a.manufacture.status)("optionLabel","subMasterName")("optionValue","subMasterId"),e.xp6(2),e.s9C("errorMessages",a.errorMsgs.manufacturecodeReq),e.Q6J("labelName","Manufacture Code")("inputModel",a.manufacture.manufacturecode)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Manufacture Description")("inputModel",a.manufacture.manufacturedesc)("disabled",!a.isEditable),e.xp6(5),e.Q6J("toggleable",!0),e.xp6(3),e.Q6J("labelName","Country")("pKeyFilter","alpha")("inputModel",a.manufacture.regioncountry)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","State")("pKeyFilter","alpha")("inputModel",a.manufacture.regionstate)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","City")("pKeyFilter","alpha")("inputModel",a.manufacture.regioncity)("disabled",!a.isEditable),e.xp6(5),e.Q6J("toggleable",!0),e.xp6(4),e.Q6J("labelName","Address")("inputModel",a.manufacture.contactaddress)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Phone 1")("pKeyFilter","num")("inputModel",a.manufacture.contactphone1)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Phone 2")("pKeyFilter","num")("inputModel",a.manufacture.contactphone2)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","postal Code")("pKeyFilter","num")("inputModel",a.manufacture.contactpostalCode)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Fax")("pKeyFilter","alphanum")("inputModel",a.manufacture.contactfax)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Contact Email")("inputModel",a.manufacture.contactemail)("disabled",!a.isEditable),e.xp6(2),e.Q6J("labelName","Web Site")("inputModel",a.manufacture.contactwebsite)("disabled",!a.isEditable))},dependencies:[p.p,C.P,c.G,u.J,d.G,T.R,M.g,E.Fr]}),m})();var J=i(8032);const Z=[{path:"",component:N}];let A=(()=>{var l;class m{}return(l=m).\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[r.ez,J.u,h.Bz.forChild(Z)]}),m})()}}]);