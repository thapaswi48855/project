"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[4737],{8213:(v,M,a)=>{a.d(M,{R:()=>C});var n=a(4946),c=a(6814),u=a(95),b=a(3259),N=a(218),e=a(6218);const f=function(o,d){return{"ng-invalid":o,"ng-dirty":d}};let C=(()=>{var o;class d{constructor(){this.inputModel="",this.errorMessages="",this.labelName="",this.isMandatoryIcon=!1,this.rows=0,this.cols=0,this.disabled=!1,this.onBlur=new n.vpe,this.inputModelChange=new n.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}}return(o=d).\u0275fac=function(g){return new(g||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-textarea"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",rows:"rows",cols:"cols",disabled:"disabled"},outputs:{onBlur:"onBlur",inputModelChange:"inputModelChange"},decls:7,vars:10,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["rows","rows","cols","cols","pInputTextarea","","pAutoFocus","",3,"ngModel","disabled","pTooltip","ngClass","ngModelChange","blur"],["id","username-help"]],template:function(g,r){1&g&&(n.TgZ(0,"div",0)(1,"div",1)(2,"label",2),n._uU(3),n.qZA(),n.TgZ(4,"textarea",3),n.NdJ("ngModelChange",function(S){return r.inputModel=S})("blur",function(){return r.onLeaveControl()}),n.qZA(),n.TgZ(5,"small",4),n._uU(6),n.qZA()()()),2&g&&(n.xp6(2),n.s9C("htmlFor",r.labelName),n.xp6(1),n.hij("",r.labelName," :"),n.xp6(1),n.s9C("pTooltip",r.errorMessages),n.Q6J("ngModel",r.inputModel)("disabled",r.disabled)("ngClass",n.WLB(7,f,""!==r.errorMessages,""!==r.errorMessages)),n.xp6(2),n.Oqu(r.errorMessages))},dependencies:[c.mk,u.Fj,u.JJ,u.On,b.u,N.P,e.g]}),d})()},4737:(v,M,a)=>{a.r(M),a.d(M,{SupplierdetailsModule:()=>A});var n=a(6814),c=a(5861),u=a(7934),b=a(1038),N=a(6990),e=a(4946),f=a(6113),C=a(7664),o=a(5219),d=a(7791),_=a(7338),g=a(8911),r=a(2154),T=a(8213),S=a(6782);const y=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let E=(()=>{var s;class m{constructor(p,t,l){this._service=p,this._activatedRoute=t,this._messageService=l,this.pageTitle="Supplier Details",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.supplier={supplierDetId:0,supplierName:"",suppliercode:"",status:"ZLS11",registeredsupplier:"ZLAS11",supplierCategory:"",supplierGSTINNumber:"",suppliercreditPeriod:"",supplierdrugLicenseNo:"",supplierPANNo:"",suppliercorporteIdentificationNumber:"",supplierapplyTCSforPOStockEntry:"ZLAS12",regioncountry:"",regionstate:"",regioncity:"",contactaddress:"",contactphone1:"",contactphone2:"",contactpostalCode:"",contactfax:"",contactemail:"",contactwebsite:"",helpdeskname:"",helpdeskphno:"",helpdeskemail:"",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptySupplier=JSON.stringify(this.supplier),this.supplierList=[],this.zeroLevelEntity=[],this.registerSupplierList=[],this.tcsPoStockEntryList=[],this.statusList=[],this.allowStatusList=[],this.errorMsgs={supplierNameReq:"",registeredsupplierReq:"",supplierGSTINNumberReq:""}}onGetErrorMsgs(p,t){switch(p){case"supplierName":this.errorMsgs.supplierNameReq=""==this.supplier[p]||null==this.supplier[p]||null==this.supplier[p]?this._service.onGetErrorMsgs(p,!0,"Supplier Name"):"";break;case"registeredsupplier":this.errorMsgs.registeredsupplierReq=""==this.supplier[p]||null==this.supplier[p]||null==this.supplier[p]?this._service.onGetErrorMsgs(p,!0,"Registered Supplier Name"):"";break;case"supplierGSTINNumber":this.errorMsgs.supplierGSTINNumberReq=""==this.supplier[p]||null==this.supplier[p]||null==this.supplier[p]?this._service.onGetErrorMsgs(p,!0,"Supplier GSTIN Number"):""}}ngOnInit(){var p=this;return(0,c.Z)(function*(){0==Object.keys(p._service.appConfig).length&&(yield p._service.getConfigData()),p._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(t=>{p.statusList=t.data[0].subMasterData}),p._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAS1"}).subscribe(t=>{p.allowStatusList=t.data[0].subMasterData}),p._service.serGetDataobject("getSupplierCategory",{status:"ZLS11"}).subscribe(t=>{p.supplierList=t.data}),p._activatedRoute.paramMap.subscribe(t=>{let l=t.get("param");null!=l?(l=JSON.parse(atob(l)),p.getMasterData(l.supplierDetId),p.pageMode=l.mode):(p.isEditable=!0,p.pageMode="NEW"),p.isEditable="VIEW"!=p.pageMode})})()}getMasterData(p){this._service.serGetDataobject("getSupplierDetails",{supplierDetId:p}).subscribe(t=>{this.supplier={supplierDetId:t.data[0].supplierDetId,supplierName:t.data[0].supplierName,suppliercode:t.data[0].suppliercode,status:t.data[0].status,registeredsupplier:t.data[0].registeredsupplier,supplierCategory:t.data[0].supplierCategory,supplierGSTINNumber:t.data[0].supplierGSTINNumber,suppliercreditPeriod:t.data[0].suppliercreditPeriod,supplierdrugLicenseNo:t.data[0].supplierdrugLicenseNo,supplierPANNo:t.data[0].supplierPANNo,suppliercorporteIdentificationNumber:t.data[0].suppliercorporteIdentificationNumber,supplierapplyTCSforPOStockEntry:t.data[0].supplierapplyTCSforPOStockEntry,regioncountry:t.data[0].regioncountry,regionstate:t.data[0].regionstate,regioncity:t.data[0].regioncity,contactaddress:t.data[0].contactaddress,contactphone1:t.data[0].contactphone1,contactphone2:t.data[0].contactphone2,contactpostalCode:t.data[0].contactpostalCode,contactfax:t.data[0].contactfax,contactemail:t.data[0].contactemail,contactwebsite:t.data[0].contactwebsite,helpdeskname:t.data[0].helpdeskname,helpdeskphno:t.data[0].helpdeskphno,helpdeskemail:t.data[0].helpdeskemail,createdt:t.data[0].createdt,createby:t.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){N.forEach(["supplierName","registeredsupplier","supplierGSTINNumber"],i=>{this.onGetErrorMsgs(i,!0)}),this._service.showErr(this.errorMsgs)?this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}):(this.saving.onSaveJson(this.pageTitle,"insertSupplierDetails",[this.supplier]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode)}onClearClick(){"NEW"==this.pageMode?(this.supplier=JSON.parse(this.emptySupplier),this.isEditable=!0):this.isEditable=!1}}return(s=m).\u0275fac=function(p){return new(p||s)(e.Y36(f.f),e.Y36(C.gz),e.Y36(o.ez))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-supplierdetails"]],viewQuery:function(p,t){if(1&p&&(e.Gf(u.G,5),e.Gf(b.g,5)),2&p){let l;e.iGM(l=e.CRH())&&(t.header=l.first),e.iGM(l=e.CRH())&&(t.saving=l.first)}},decls:61,vars:118,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"formgroup-inline"],[1,"field","col-7"],["legend","Supplier",3,"toggleable"],[1,"formgrid","grid"],[1,"field","col-12","md:col-6","lg:col-4","xl:col-4"],[3,"labelName","inputModel","errorMessages","disabled","pKeyFilter","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","pKeyFilter","inputModelChange"],[3,"labelName","options","inputModel","optionLabel","optionValue","disabled","inputModelChange"],[3,"labelName","options","inputModel","errorMessages","disabled","optionLabel","optionValue","inputModelChange","onBlur"],[1,"field","col-12","md:col-8","sm:col-10","lg:col-4","xl:col-4"],[3,"labelName","options","inputModel","disabled","optionLabel","optionValue","inputModelChange"],["maxlength","3",3,"labelName","inputModel","disabled","pKeyFilter","inputModelChange"],[3,"labelName","disabled","pKeyFilter","inputModel","inputModelChange"],["maxlength","12",3,"labelName","disabled","pKeyFilter","inputModel","inputModelChange"],[1,"field","col-4"],["legend","Region",3,"toggleable"],["legend","Contact",3,"toggleable"],[1,"field","col-10"],[3,"labelName","inputModel","disabled","inputModelChange"],[1,"field","col"],["maxlength","10",3,"labelName","pKeyFilter","inputModel","disabled","inputModelChange"],["maxlength","10",3,"labelName","inputModel","disabled","pKeyFilter","inputModelChange"],["maxlength","12",3,"labelName","inputModel","disabled","pKeyFilter","inputModelChange"],["legend","Help Desk",3,"toggleable"],["maxlength","10",3,"labelName","disabled","pKeyFilter","inputModel","inputModelChange"],[3,"labelName","disabled","inputModel","inputModelChange"],["saving",""]],template:function(p,t){1&p&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("submitClick",function(){return t.onSaveClick()})("clearClick",function(){return t.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"div",5)(8,"p-fieldset",6)(9,"div",7)(10,"div",8)(11,"app-inputtext",9),e.NdJ("inputModelChange",function(i){return t.supplier.supplierName=i})("onBlur",function(){return t.onGetErrorMsgs("supplierName",!0)}),e.qZA()(),e.TgZ(12,"div",8)(13,"app-inputtext",10),e.NdJ("inputModelChange",function(i){return t.supplier.suppliercode=i}),e.qZA()(),e.TgZ(14,"div",8)(15,"app-dropdown",11),e.NdJ("inputModelChange",function(i){return t.supplier.status=i}),e.qZA()(),e.TgZ(16,"div",8)(17,"app-dropdown",12),e.NdJ("inputModelChange",function(i){return t.supplier.registeredsupplier=i})("onBlur",function(){return t.onGetErrorMsgs("registeredsupplier",!0)}),e.qZA()(),e.TgZ(18,"div",13)(19,"app-dropdown",14),e.NdJ("inputModelChange",function(i){return t.supplier.supplierCategory=i}),e.qZA()(),e.TgZ(20,"div",13)(21,"app-inputtext",9),e.NdJ("inputModelChange",function(i){return t.supplier.supplierGSTINNumber=i})("onBlur",function(){return t.onGetErrorMsgs("supplierGSTINNumber",!0)}),e.qZA()(),e.TgZ(22,"div",13)(23,"app-inputtext",15),e.NdJ("inputModelChange",function(i){return t.supplier.suppliercreditPeriod=i}),e.qZA()(),e.TgZ(24,"div",13)(25,"app-inputtext",16),e.NdJ("inputModelChange",function(i){return t.supplier.supplierdrugLicenseNo=i}),e.qZA()(),e.TgZ(26,"div",13)(27,"app-inputtext",17),e.NdJ("inputModelChange",function(i){return t.supplier.supplierPANNo=i}),e.qZA()(),e.TgZ(28,"div",13)(29,"app-inputtext",10),e.NdJ("inputModelChange",function(i){return t.supplier.suppliercorporteIdentificationNumber=i}),e.qZA()(),e.TgZ(30,"div",13)(31,"app-dropdown",14),e.NdJ("inputModelChange",function(i){return t.supplier.supplierapplyTCSforPOStockEntry=i}),e.qZA()()()()(),e.TgZ(32,"div",18)(33,"p-fieldset",19)(34,"app-inputtext",10),e.NdJ("inputModelChange",function(i){return t.supplier.regioncity=i}),e.qZA(),e.TgZ(35,"app-inputtext",16),e.NdJ("inputModelChange",function(i){return t.supplier.regionstate=i}),e.qZA(),e.TgZ(36,"app-inputtext",16),e.NdJ("inputModelChange",function(i){return t.supplier.regioncountry=i}),e.qZA()()(),e.TgZ(37,"div",5)(38,"p-fieldset",20)(39,"div",7)(40,"div",21)(41,"app-textarea",22),e.NdJ("inputModelChange",function(i){return t.supplier.contactaddress=i}),e.qZA()(),e.TgZ(42,"div",23)(43,"app-inputtext",24),e.NdJ("inputModelChange",function(i){return t.supplier.contactphone1=i}),e.qZA()(),e.TgZ(44,"div",23)(45,"app-inputtext",24),e.NdJ("inputModelChange",function(i){return t.supplier.contactphone2=i}),e.qZA()(),e.TgZ(46,"div",23)(47,"app-inputtext",25),e.NdJ("inputModelChange",function(i){return t.supplier.contactpostalCode=i}),e.qZA()(),e.TgZ(48,"div",23)(49,"app-inputtext",26),e.NdJ("inputModelChange",function(i){return t.supplier.contactfax=i}),e.qZA()(),e.TgZ(50,"div",23)(51,"app-inputtext",22),e.NdJ("inputModelChange",function(i){return t.supplier.contactemail=i}),e.qZA()(),e.TgZ(52,"div",23)(53,"app-inputtext",22),e.NdJ("inputModelChange",function(i){return t.supplier.contactwebsite=i}),e.qZA()()()()(),e.TgZ(54,"div",18)(55,"p-fieldset",27)(56,"app-inputtext",16),e.NdJ("inputModelChange",function(i){return t.supplier.helpdeskname=i}),e.qZA(),e.TgZ(57,"app-inputtext",28),e.NdJ("inputModelChange",function(i){return t.supplier.helpdeskphno=i}),e.qZA(),e.TgZ(58,"app-inputtext",29),e.NdJ("inputModelChange",function(i){return t.supplier.helpdeskemail=i}),e.qZA()()()()()()(),e._UZ(59,"app-saving",null,30)),2&p&&(e.xp6(2),e.Q6J("pageTitle",t.pageTitle)("onSubmit",t.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",t.onClear)("onEdit",t.onEdit)("onView",t.onView)("redirectToGrid",t.redirectToGrid),e.xp6(3),e.Akn(e.DdM(117,y)),e.xp6(3),e.Q6J("toggleable",!0),e.xp6(3),e.s9C("errorMessages",t.errorMsgs.supplierNameReq),e.Q6J("labelName","Supplier Name")("inputModel",t.supplier.supplierName)("disabled",!t.isEditable)("pKeyFilter","alpha"),e.xp6(2),e.Q6J("labelName","Supplier Code")("inputModel",t.supplier.suppliercode)("disabled",!t.isEditable)("pKeyFilter","alphanum"),e.xp6(2),e.Q6J("labelName","Status")("options",t.statusList)("inputModel",t.supplier.status)("optionLabel","subMasterName")("optionValue","subMasterId")("disabled","EDIT"!=t.pageMode),e.xp6(2),e.s9C("errorMessages",t.errorMsgs.registeredsupplierReq),e.Q6J("labelName","Register Supplier")("options",t.allowStatusList)("inputModel",t.supplier.registeredsupplier)("disabled",!t.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),e.xp6(2),e.Q6J("labelName","Supplier Category")("options",t.supplierList)("inputModel",t.supplier.supplierCategory)("disabled",!t.isEditable)("optionLabel","categoryname")("optionValue","_id"),e.xp6(2),e.s9C("errorMessages",t.errorMsgs.supplierGSTINNumberReq),e.Q6J("labelName","GSTIN Number")("inputModel",t.supplier.supplierGSTINNumber)("disabled",!t.isEditable)("pKeyFilter","alphanum"),e.xp6(2),e.Q6J("labelName","Credite Periode (Days)")("inputModel",t.supplier.suppliercreditPeriod)("disabled",!t.isEditable)("pKeyFilter","num"),e.xp6(2),e.Q6J("labelName","Drug License Number")("disabled",!t.isEditable)("pKeyFilter","alphanum")("inputModel",t.supplier.supplierdrugLicenseNo),e.xp6(2),e.Q6J("labelName","PAN No.")("disabled",!t.isEditable)("pKeyFilter","alphanum")("inputModel",t.supplier.supplierPANNo),e.xp6(2),e.Q6J("labelName","Corparate Identification Number (CIN)")("inputModel",t.supplier.suppliercorporteIdentificationNumber)("disabled",!t.isEditable)("pKeyFilter","alphanum"),e.xp6(2),e.Q6J("labelName","Apply TCS PO Stock Entry")("options",t.allowStatusList)("inputModel",t.supplier.supplierapplyTCSforPOStockEntry)("disabled",!t.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("labelName","City")("inputModel",t.supplier.regioncity)("disabled",!t.isEditable)("pKeyFilter","alpha"),e.xp6(1),e.Q6J("labelName","State")("disabled",!t.isEditable)("pKeyFilter","alpha")("inputModel",t.supplier.regionstate),e.xp6(1),e.Q6J("labelName","Country")("disabled",!t.isEditable)("pKeyFilter","alpha")("inputModel",t.supplier.regioncountry),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(3),e.Q6J("labelName","Address")("inputModel",t.supplier.contactaddress)("disabled",!t.isEditable),e.xp6(2),e.Q6J("labelName","Phone 1")("pKeyFilter","num")("inputModel",t.supplier.contactphone1)("disabled",!t.isEditable),e.xp6(2),e.Q6J("labelName","Phone 2")("pKeyFilter","num")("inputModel",t.supplier.contactphone2)("disabled",!t.isEditable),e.xp6(2),e.Q6J("labelName","postal Code")("inputModel",t.supplier.contactpostalCode)("disabled",!t.isEditable)("pKeyFilter","alphanum"),e.xp6(2),e.Q6J("labelName","Fax")("inputModel",t.supplier.contactfax)("disabled",!t.isEditable)("pKeyFilter","alphanum"),e.xp6(2),e.Q6J("labelName","Contact Email")("inputModel",t.supplier.contactemail)("disabled",!t.isEditable),e.xp6(2),e.Q6J("labelName","Web Site")("inputModel",t.supplier.contactwebsite)("disabled",!t.isEditable),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(1),e.Q6J("labelName","Name")("disabled",!t.isEditable)("pKeyFilter","alpha")("inputModel",t.supplier.helpdeskname),e.xp6(1),e.Q6J("labelName","PH No.")("disabled",!t.isEditable)("pKeyFilter","num")("inputModel",t.supplier.helpdeskphno),e.xp6(1),e.Q6J("labelName","Email")("disabled",!t.isEditable)("inputModel",t.supplier.helpdeskemail))},dependencies:[d.p,_.P,g.G,r.J,u.G,T.R,b.g,S.Fr]}),m})();var J=a(8032);const Z=[{path:"",component:E}];let A=(()=>{var s;class m{}return(s=m).\u0275fac=function(p){return new(p||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[n.ez,J.u,C.Bz.forChild(Z)]}),m})()}}]);