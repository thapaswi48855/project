"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[7121],{8213:(U,C,r)=>{r.d(C,{R:()=>f});var s=r(4946),c=r(6814),m=r(95),M=r(3259),_=r(218),e=r(6218);const N=function(u,p){return{"ng-invalid":u,"ng-dirty":p}};let f=(()=>{var u;class p{constructor(){this.inputModel="",this.errorMessages="",this.labelName="",this.isMandatoryIcon=!1,this.rows=0,this.cols=0,this.disabled=!1,this.onBlur=new s.vpe,this.inputModelChange=new s.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(u=p).\u0275fac=function(d){return new(d||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-textarea"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",rows:"rows",cols:"cols",disabled:"disabled"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:7,vars:10,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["rows","rows","cols","cols","pInputTextarea","","pAutoFocus","",3,"ngModel","disabled","pTooltip","ngClass","ngModelChange","blur"],["id","username-help"]],template:function(d,l){1&d&&(s.TgZ(0,"div",0)(1,"div",1)(2,"label",2),s._uU(3),s.qZA(),s.TgZ(4,"textarea",3),s.NdJ("ngModelChange",function(w){return l.inputModel=w})("blur",function(){return l.onLeaveControl()}),s.qZA(),s.TgZ(5,"small",4),s._uU(6),s.qZA()()()),2&d&&(s.xp6(2),s.s9C("htmlFor",l.labelName),s.xp6(1),s.hij("",l.labelName," :"),s.xp6(1),s.s9C("pTooltip",l.errorMessages),s.Q6J("ngModel",l.inputModel)("disabled",l.disabled)("ngClass",s.WLB(7,N,""!==l.errorMessages,""!==l.errorMessages)),s.xp6(2),s.Oqu(l.errorMessages))},dependencies:[c.mk,m.Fj,m.JJ,m.On,M.u,_.P,e.g]}),p})()},7121:(U,C,r)=>{r.r(C),r.d(C,{NewUserModule:()=>P});var s=r(6814),c=r(5861),m=r(6990),M=r(7934),_=r(1038),e=r(4946),N=r(6113),f=r(7338),u=r(8911),p=r(2154),v=r(8213);const d=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let l=(()=>{var i;class g{constructor(t){this._service=t,this.pageTitle="User",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.rolesLists=[{label:"Select One",value:""}],this.user={userid:"",userRoleid:"",userName:"",userPhno:"",userEmail:"",userPwd:"",useraddress:"",userstatus:"A"}}ngOnInit(){var t=this;return(0,c.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._service.serGetData("getRoles").subscribe(n=>{console.log("a",n.data),m.forEach(n.data,(a,A)=>{t.rolesLists.push({label:a["Role Name"],value:a._id})})})})()}onSaveClick(){this.saving.onSaveJson(this.pageTitle,"insertNewUsers",[{userid:0,userRoleid:this.user.userRoleid,userName:this.user.userName,userPhno:this.user.userPhno,userEmail:this.user.userEmail,userPwd:this.user.userPwd,useraddress:this.user.useraddress,userstatus:this.user.userstatus}]),this.onClearClick()}onClearClick(){}}return(i=g).\u0275fac=function(t){return new(t||i)(e.Y36(N.f))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-new-user"]],viewQuery:function(t,n){if(1&t&&(e.Gf(M.G,5),e.Gf(_.g,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.header=o.first),e.iGM(o=e.CRH())&&(n.saving=o.first)}},decls:20,vars:27,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","submitClick","clearClick"],["header",""],[1,"div-padding"],["styleClass","custombar1"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"inputModel","labelName","options","errorMessages","inputModelChange","onBlur"],[3,"inputModel","labelName","errorMessages","inputModelChange","onBlur"],[3,"labelName","rows","cols","inputModel","inputModelChange"],["saving",""]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return n.onSaveClick()})("clearClick",function(){return n.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"div",5)(7,"app-dropdown",6),e.NdJ("inputModelChange",function(a){return n.user.userRoleid=a})("onBlur",function(){return n._service.onGetErrorMsgs(n.user,"role",!0)}),e.qZA()(),e.TgZ(8,"div",5)(9,"app-inputtext",7),e.NdJ("inputModelChange",function(a){return n.user.userName=a})("onBlur",function(){return n._service.onGetErrorMsgs(n.user,"name",!0)}),e.qZA()(),e.TgZ(10,"div",5)(11,"app-inputtext",7),e.NdJ("inputModelChange",function(a){return n.user.userPhno=a})("onBlur",function(){return n._service.onGetErrorMsgs(n.user,"phno",!0)}),e.qZA()(),e.TgZ(12,"div",5)(13,"app-inputtext",7),e.NdJ("inputModelChange",function(a){return n.user.userEmail=a})("onBlur",function(){return n._service.onGetErrorMsgs(n.user,"email",!0)}),e.qZA()(),e.TgZ(14,"div",5)(15,"app-inputtext",7),e.NdJ("inputModelChange",function(a){return n.user.userPwd=a})("onBlur",function(){return n._service.onGetErrorMsgs(n.user,"pwd",!0)}),e.qZA()(),e.TgZ(16,"div",5)(17,"app-textarea",8),e.NdJ("inputModelChange",function(a){return n.user.useraddress=a}),e.qZA()()()()(),e._UZ(18,"app-saving",null,9)),2&t&&(e.xp6(2),e.Q6J("pageTitle",n.pageTitle)("onSubmit",n.onSubmit)("onGrid",n.onGrid)("onAddNew",n.onAddNew),e.xp6(3),e.Akn(e.DdM(26,d)),e.xp6(2),e.s9C("errorMessages",n._service.errorMsgs.role),e.Q6J("inputModel",n.user.userRoleid)("labelName","Role Name")("options",n.rolesLists),e.xp6(2),e.s9C("errorMessages",n._service.errorMsgs.name),e.Q6J("inputModel",n.user.userName)("labelName","Name"),e.xp6(2),e.s9C("errorMessages",n._service.errorMsgs.phno),e.Q6J("inputModel",n.user.userPhno)("labelName","Phone No."),e.xp6(2),e.s9C("errorMessages",n._service.errorMsgs.email),e.Q6J("inputModel",n.user.userEmail)("labelName","Email"),e.xp6(2),e.s9C("errorMessages",n._service.errorMsgs.pwd),e.Q6J("inputModel",n.user.userPwd)("labelName","PWD"),e.xp6(2),e.Q6J("labelName","Address")("rows","2")("cols","5")("inputModel",n.user.useraddress))},dependencies:[f.P,u.G,p.J,M.G,v.R,_.g]}),g})();var T=r(7664),w=r(8032);const E=[{path:"",component:l}];let P=(()=>{var i;class g{}return(i=g).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.ez,w.u,T.Bz.forChild(E)]}),g})()}}]);