"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[4128],{4128:(G,p,o)=>{o.r(p),o.d(p,{StoremasterModule:()=>v});var b=o(6814),M=o(5861),g=o(6990),d=o(7934),u=o(1038),t=o(4946),c=o(6113),h=o(5219),m=o(7664),S=o(7338),_=o(8911),T=o(2154),L=o(6782);const C=function(){return{width:"100%",height:" calc(100vh - 120px)"}};let P=(()=>{var i;class n{constructor(a,e,r){this._service=a,this._messageService=e,this._activatedRoute=r,this.pageTitle="Store Master",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.storeMaster={storemasterid:0,store:"",counter:"ZLC11",status:"ZLS11",gstinno:"",drugLicenceNo:"",autoFillPrecription:"ZLAS12",accountGroup:"ZLAG11",salesAcountPrefix:"",purcheseAccountPrefix:"",storeType:"",isSuperStore:"ZLAS11",salesUnit:"ZLSU11",allowToRiseBill:"ZLAS12",precriptionPrintTemplate:"ZLPPT11",precriptionLabelPrintTemplate:"ZLPLPT11",salesPrintTemplate:"ZLSPT11",isSalesStore:"ZLAS11",autoFillIndent:"ZLAS12",isSterileStore:"ZLIStS11",storesTariff:"ZLST11",useSellingPriceFromItemBatch:"ZLAS12",grnPrintTemplate:"ZLGrnPT11",allowAutoPOGeneration:"ZLAS12",pOGenerationFrequency:"",autoCancelPO:"ZLAS12",autoCancelPOFreuency:"",salesWebTemplate:"ZLSWT11",salesWebPrinter:"ZLSWP11",batchExpireThesholdForStockTake:"0",createdt:null,createby:this._service.getUserVal("userid"),modifydt:null,modifyby:""},this.emptyStoreMaster=JSON.stringify(this.storeMaster),this.zeroLevelEntity=[],this.storeTypeList=[],this.counterList=[],this.autoFillPrecriptionList=[],this.accountGroupList=[],this.isSuperStoreList=[],this.salesUnitList=[],this.riseBillList=[],this.precriptionPrintTemplateList=[],this.precriptionLabelPrintTemplateList=[],this.salesPrintTemplateList=[],this.statusList=[],this.isSalesStoreList=[],this.autoFillIndentList=[],this.isSterileStoreList=[],this.storesTariffList=[],this.sellingPriceItemList=[],this.grnPrintTemplateList=[],this.autoPoGenerationList=[],this.autoCancelPoList=[],this.webtemplateList=[],this.webPrinterList=[],this.allowStatusList=[],this.errorMsgs={store:"",storeType:""},this.emptyErrorMsgs=JSON.stringify(this.errorMsgs)}onGetErrorMsgs(a,e){switch(a){case"store":this.errorMsgs.store=""==this.storeMaster[a]||null==this.storeMaster[a]||null==this.storeMaster[a]?this._service.onGetErrorMsgs("store",!0,"Store Name"):"";break;case"storeType":this.errorMsgs.storeType=""==this.storeMaster[a]||null==this.storeMaster[a]||null==this.storeMaster[a]?this._service.onGetErrorMsgs("storeType",!0,"Store Type Name"):""}}ngOnInit(){var a=this;return(0,M.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData()),a._service.serGetDataobject("getStoreTypeMaster",{status:"ZLS11"}).subscribe(e=>{a.storeTypeList=e.data}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(e=>{console.log(e),a.statusList=e.data[0].subMasterData,console.log("this.statusList",a.statusList)}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAS1"}).subscribe(e=>{a.allowStatusList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLC1"}).subscribe(e=>{console.log(e),a.counterList=e.data[0].subMasterData,console.log("this.statusList",a.statusList)}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLA1"}).subscribe(e=>{console.log(e),a.autoFillPrecriptionList=e.data[0].subMasterData,console.log("this.statusList",a.statusList)}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAG1"}).subscribe(e=>{console.log(e),a.accountGroupList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLISS1"}).subscribe(e=>{console.log(e),a.isSuperStoreList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLSU1"}).subscribe(e=>{console.log(e),a.salesUnitList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLATRB1"}).subscribe(e=>{console.log(e),a.riseBillList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLPPT1"}).subscribe(e=>{console.log(e),a.precriptionPrintTemplateList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLPLPT1"}).subscribe(e=>{console.log(e),a.precriptionLabelPrintTemplateList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLSPT1"}).subscribe(e=>{console.log(e),a.salesPrintTemplateList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLISaS1"}).subscribe(e=>{console.log(e),a.isSalesStoreList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAFI1"}).subscribe(e=>{console.log(e),a.autoFillIndentList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLIStS1"}).subscribe(e=>{console.log(e),a.isSterileStoreList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLST1"}).subscribe(e=>{console.log(e),a.storesTariffList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLSPIB1"}).subscribe(e=>{console.log(e),a.sellingPriceItemList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLGrnPT1"}).subscribe(e=>{console.log(e),a.grnPrintTemplateList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLAPoG1"}).subscribe(e=>{console.log(e),a.autoPoGenerationList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLACPo1"}).subscribe(e=>{console.log(e),a.autoCancelPoList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLSWT1"}).subscribe(e=>{console.log(e),a.webtemplateList=e.data[0].subMasterData}),a._service.serGetDataobject("getGeneralMaster",{masterid:"ZLSWP1"}).subscribe(e=>{console.log(e),a.webPrinterList=e.data[0].subMasterData}),a._activatedRoute.paramMap.subscribe(e=>{let r=e.get("param");null!=r?(r=JSON.parse(atob(r)),a.getMasterData(r.storemasterid),a.pageMode=r.mode):(a.isEditable=!0,a.pageMode="NEW"),a.isEditable="VIEW"!=a.pageMode})})()}getMasterData(a){this._service.serGetDataobject("getStoreMaster",{storemasterid:a}).subscribe(e=>{this.storeMaster={storemasterid:e.data[0].storemasterid,store:e.data[0].store,counter:e.data[0].counter,status:e.data[0].status,gstinno:e.data[0].gstinno,drugLicenceNo:e.data[0].drugLicenceNo,autoFillPrecription:e.data[0].autoFillPrecription,accountGroup:e.data[0].accountGroup,salesAcountPrefix:e.data[0].salesAcountPrefix,purcheseAccountPrefix:e.data[0].purcheseAccountPrefix,storeType:e.data[0].storeType,isSuperStore:e.data[0].isSuperStore,salesUnit:e.data[0].salesUnit,allowToRiseBill:e.data[0].allowToRiseBill,precriptionPrintTemplate:e.data[0].precriptionPrintTemplate,precriptionLabelPrintTemplate:e.data[0].precriptionLabelPrintTemplate,salesPrintTemplate:e.data[0].salesPrintTemplate,isSalesStore:e.data[0].isSalesStore,autoFillIndent:e.data[0].autoFillIndent,isSterileStore:e.data[0].isSterileStore,storesTariff:e.data[0].storesTariff,useSellingPriceFromItemBatch:e.data[0].useSellingPriceFromItemBatch,grnPrintTemplate:e.data[0].grnPrintTemplate,allowAutoPOGeneration:e.data[0].allowAutoPOGeneration,pOGenerationFrequency:e.data[0].pOGenerationFrequency,autoCancelPO:e.data[0].autoCancelPO,autoCancelPOFreuency:e.data[0].autoCancelPOFreuency,salesWebTemplate:e.data[0].salesWebTemplate,salesWebPrinter:e.data[0].salesWebPrinter,batchExpireThesholdForStockTake:e.data[0].batchExpireThesholdForStockTake,createdt:null,createby:e.data[0].createby,modifydt:null,modifyby:this._service.getUserVal("userid")},this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode,console.log("this.isShowEditable",this.isShowEditable)})}onGridClick(){}onSaveClick(){if(g.forEach(["store","storeType"],Z=>{this.onGetErrorMsgs(Z,!0)}),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});let r=this.storeMaster;this._service.getDate(),console.log("Date",this._service.getDate()),this.saving.onSaveJson("Store Master","insertStoreMaster",[r]),this.redirectToGrid="NEW"!=this.pageMode,this.onClearClick()}onClearClick(){this.errorMsgs=JSON.parse(this.emptyErrorMsgs),"NEW"==this.pageMode?(this.storeMaster=JSON.parse(this.emptyStoreMaster),this.isEditable=!0):this.isEditable=!1}}return(i=n).\u0275fac=function(a){return new(a||i)(t.Y36(c.f),t.Y36(h.ez),t.Y36(m.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-storemaster"]],viewQuery:function(a,e){if(1&a&&(t.Gf(d.G,5),t.Gf(u.g,5)),2&a){let r;t.iGM(r=t.CRH())&&(e.header=r.first),t.iGM(r=t.CRH())&&(e.saving=r.first)}},decls:70,vars:167,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"card"],[1,"formgrid","grid"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],["pKeyFilter","alpha",3,"labelName","inputModel","errorMessages","disabled","inputModelChange","onBlur"],[3,"labelName","options","inputModel","disabled","optionLabel","optionValue","inputModelChange"],["pKeyFilter","alphanum",3,"labelName","inputModel","disabled","inputModelChange"],["pKeyFilter","alphanum",3,"labelName","disabled","inputModel","inputModelChange"],[3,"labelName","isMandatoryIcon","inputModel","options","errorMessages","disabled","optionLabel","optionValue","inputModelChange","onBlur"],["pKeyFilter","int",3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()}),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"p-scrollPanel")(7,"div",5)(8,"div",6)(9,"app-inputtext",7),t.NdJ("inputModelChange",function(s){return e.storeMaster.store=s})("onBlur",function(){return e.onGetErrorMsgs("store",!0)}),t.qZA()(),t.TgZ(10,"div",6)(11,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.counter=s}),t.qZA()(),t.TgZ(12,"div",6)(13,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.status=s}),t.qZA()(),t.TgZ(14,"div",6)(15,"app-inputtext",9),t.NdJ("inputModelChange",function(s){return e.storeMaster.gstinno=s}),t.qZA()(),t.TgZ(16,"div",6)(17,"app-inputtext",10),t.NdJ("inputModelChange",function(s){return e.storeMaster.drugLicenceNo=s}),t.qZA()(),t.TgZ(18,"div",6)(19,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.autoFillPrecription=s}),t.qZA()(),t.TgZ(20,"div",6)(21,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.accountGroup=s}),t.qZA()(),t.TgZ(22,"div",6)(23,"app-inputtext",10),t.NdJ("inputModelChange",function(s){return e.storeMaster.salesAcountPrefix=s}),t.qZA()(),t.TgZ(24,"div",6)(25,"app-inputtext",10),t.NdJ("inputModelChange",function(s){return e.storeMaster.purcheseAccountPrefix=s}),t.qZA()(),t.TgZ(26,"div",6)(27,"app-inputtext",10),t.NdJ("inputModelChange",function(s){return e.storeMaster.purcheseAccountPrefix=s}),t.qZA()(),t.TgZ(28,"div",6)(29,"app-dropdown",11),t.NdJ("inputModelChange",function(s){return e.storeMaster.storeType=s})("onBlur",function(){return e.onGetErrorMsgs("storeType",!0)}),t.qZA()(),t.TgZ(30,"div",6)(31,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.isSuperStore=s}),t.qZA()(),t.TgZ(32,"div",6)(33,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.salesUnit=s}),t.qZA()(),t.TgZ(34,"div",6)(35,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.allowToRiseBill=s}),t.qZA()(),t.TgZ(36,"div",6)(37,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.precriptionPrintTemplate=s}),t.qZA()(),t.TgZ(38,"div",6)(39,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.precriptionLabelPrintTemplate=s}),t.qZA()(),t.TgZ(40,"div",6)(41,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.salesPrintTemplate=s}),t.qZA()(),t.TgZ(42,"div",6)(43,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.isSalesStore=s}),t.qZA()(),t.TgZ(44,"div",6)(45,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.autoFillIndent=s}),t.qZA()(),t.TgZ(46,"div",6)(47,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.isSterileStore=s}),t.qZA()(),t.TgZ(48,"div",6)(49,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.storesTariff=s}),t.qZA()(),t.TgZ(50,"div",6)(51,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.useSellingPriceFromItemBatch=s}),t.qZA()(),t.TgZ(52,"div",6)(53,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.grnPrintTemplate=s}),t.qZA()(),t.TgZ(54,"div",6)(55,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.allowAutoPOGeneration=s}),t.qZA()(),t.TgZ(56,"div",6)(57,"app-inputtext",9),t.NdJ("inputModelChange",function(s){return e.storeMaster.pOGenerationFrequency=s}),t.qZA()(),t.TgZ(58,"div",6)(59,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.autoCancelPO=s}),t.qZA()(),t.TgZ(60,"div",6)(61,"app-inputtext",9),t.NdJ("inputModelChange",function(s){return e.storeMaster.autoCancelPOFreuency=s}),t.qZA()(),t.TgZ(62,"div",6)(63,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.salesWebTemplate=s}),t.qZA()(),t.TgZ(64,"div",6)(65,"app-dropdown",8),t.NdJ("inputModelChange",function(s){return e.storeMaster.salesWebPrinter=s}),t.qZA()(),t.TgZ(66,"div",6)(67,"app-inputtext",12),t.NdJ("inputModelChange",function(s){return e.storeMaster.batchExpireThesholdForStockTake=s}),t.qZA()()()()()()(),t._UZ(68,"app-saving",null,13)),2&a&&(t.xp6(2),t.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("redirectToGrid",e.redirectToGrid),t.xp6(4),t.Akn(t.DdM(166,C)),t.xp6(3),t.s9C("errorMessages",e.errorMsgs.store),t.Q6J("labelName","Store ")("inputModel",e.storeMaster.store)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Counter ")("options",e.counterList)("inputModel",e.storeMaster.counter)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Status")("options",e.statusList)("inputModel",e.storeMaster.status)("disabled","EDIT"!=e.pageMode)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","GSTIN Number")("inputModel",e.storeMaster.gstinno)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Drug Licence Number")("disabled",!e.isEditable)("inputModel",e.storeMaster.drugLicenceNo),t.xp6(2),t.Q6J("labelName","Auto Fill Precription")("options",e.allowStatusList)("inputModel",e.storeMaster.autoFillPrecription)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Account Group")("options",e.accountGroupList)("inputModel",e.storeMaster.accountGroup)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Sales Acount Prefix(GST)")("disabled",!e.isEditable)("inputModel",e.storeMaster.salesAcountPrefix),t.xp6(2),t.Q6J("labelName","Purchese Account prefix(GST)")("disabled",!e.isEditable)("inputModel",e.storeMaster.purcheseAccountPrefix),t.xp6(2),t.Q6J("labelName","Purchese Account prefix(GST)")("disabled",!e.isEditable)("inputModel",e.storeMaster.purcheseAccountPrefix),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.storeType),t.Q6J("labelName","Store Type ")("isMandatoryIcon","true")("inputModel",e.storeMaster.storeType)("options",e.storeTypeList)("disabled",!e.isEditable)("optionLabel","storetypename")("optionValue","_id"),t.xp6(2),t.Q6J("labelName","Is Super Store")("options",e.allowStatusList)("inputModel",e.storeMaster.isSuperStore)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Sales Unit")("options",e.salesUnitList)("inputModel",e.storeMaster.salesUnit)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Allow To Rise Bill")("options",e.allowStatusList)("inputModel",e.storeMaster.allowToRiseBill)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Precription Print Template")("options",e.precriptionPrintTemplateList)("inputModel",e.storeMaster.precriptionPrintTemplate)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Precription Label Print Template")("options",e.precriptionLabelPrintTemplateList)("inputModel",e.storeMaster.precriptionLabelPrintTemplate)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Sales Print Template")("options",e.salesPrintTemplateList)("inputModel",e.storeMaster.salesPrintTemplate)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Is Sales Store")("options",e.allowStatusList)("inputModel",e.storeMaster.isSalesStore)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Auto fill Indent")("options",e.allowStatusList)("inputModel",e.storeMaster.autoFillIndent)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Is Sterile Store")("options",e.isSterileStoreList)("inputModel",e.storeMaster.isSterileStore)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Stores Tariff")("options",e.storesTariffList)("inputModel",e.storeMaster.storesTariff)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Use Selling Price from Item Batch")("options",e.allowStatusList)("inputModel",e.storeMaster.useSellingPriceFromItemBatch)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Grn Print Template")("options",e.grnPrintTemplateList)("inputModel",e.storeMaster.grnPrintTemplate)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Allow Auto PO Generation")("options",e.allowStatusList)("inputModel",e.storeMaster.allowAutoPOGeneration)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","PO Generation Frequency")("inputModel",e.storeMaster.pOGenerationFrequency)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Auto Cancel PO")("options",e.allowStatusList)("inputModel",e.storeMaster.autoCancelPO)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Auto Cancel PO Freuency")("inputModel",e.storeMaster.autoCancelPOFreuency)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Sales Web Template")("options",e.webtemplateList)("inputModel",e.storeMaster.salesWebTemplate)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Sales Web Printer")("options",e.webPrinterList)("inputModel",e.storeMaster.salesWebPrinter)("disabled",!e.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Batch Expire Theshold for Stock Take(In Months)")("inputModel",e.storeMaster.batchExpireThesholdForStockTake)("disabled",!e.isEditable))},dependencies:[S.P,_.G,T.J,d.G,u.g,L.Fr]}),n})();var f=o(8032);const N=[{path:"",component:P}];let v=(()=>{var i;class n{}return(i=n).\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[b.ez,f.u,m.Bz.forChild(N)]}),n})()}}]);