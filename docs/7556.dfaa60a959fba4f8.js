"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[7556],{7556:(z,c,a)=>{a.r(c),a.d(c,{StockentryModule:()=>B});var d=a(6814),h=a(5861),g=a(7934),_=a(1038),p=a(6990),t=a(4946),k=a(6113),y=a(7664),b=a(5219),m=a(9232),C=a(707),v=a(7791),M=a(7338),D=a(8911),T=a(2154),f=a(2447),E=a(8259),S=a(5996),A=a(5096),N=a(1312);function Z(o,r){if(1&o){const l=t.EpF();t.TgZ(0,"p-fileUpload",43),t.NdJ("onUpload",function(e){t.CHM(l);const s=t.oxw();return t.KtG(s.onBasicUploadAuto(e))}),t.qZA()}2&o&&t.Q6J("auto",!0)}function J(o,r){if(1&o){const l=t.EpF();t.TgZ(0,"div",44)(1,"div",45),t._uU(2," image "),t.TgZ(3,"a",46)(4,"i",47),t.NdJ("click",function(){t.CHM(l);const e=t.oxw();return t.KtG(e.onShowImg())}),t.qZA()(),t.TgZ(5,"a",48)(6,"i",49),t.NdJ("click",function(){t.CHM(l);const e=t.oxw();return t.KtG(e.onRemoveImg())}),t.qZA()()()()}}function I(o,r){if(1&o&&(t.TgZ(0,"th",51),t._uU(1),t._UZ(2,"p-sortIcon",52),t.qZA()),2&o){const l=r.$implicit;t.Q6J("pSortableColumn",l.field)("ngStyle",l.style),t.xp6(1),t.hij(" ",l.header," "),t.xp6(1),t.Q6J("field",l.field)}}function L(o,r){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,I,3,4,"th",50),t._UZ(2,"th"),t.qZA()),2&o){const l=r.$implicit;t.xp6(1),t.Q6J("ngForOf",l)}}const q=function(o){return[o]};function R(o,r){if(1&o&&(t.TgZ(0,"span",55),t._uU(1),t.qZA()),2&o){const l=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.VKq(1,q,l.field)," ")}}function Q(o,r){if(1&o&&(t.TgZ(0,"td"),t.YNc(1,R,2,3,"span",54),t._uU(2),t.qZA()),2&o){const l=r.$implicit,i=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.mobileState),t.xp6(1),t.hij(" ",i[l.field]," ")}}function w(o,r){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,Q,3,2,"td",53),t.qZA()),2&o){const l=r.columns;t.xp6(1),t.Q6J("ngForOf",l)}}const G=function(){return{width:"100%",height:" calc(100vh - 120px)"}},x=function(){return{width:"700px",height:"100vh"}},U=function(){return{"425px":"100vw"}},P=function(){return{width:"50vw",height:"100%"}};let F=(()=>{var o;class r{constructor(i,e,s){this._service=i,this._activatedRoute=e,this._messageService=s,this.pageTitle="Manufacture Creation",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.stockEntry={store:"",ponumber:"",quantityUom:"",supplier:"",supplieraddress:"",invoiceNo:"",invoiceDte:"",dueDate:"",status:"",stockType:"",cashPurchase:"",poReference:"",itemDiscountType:"",itemDiscountValue:"",remarks:"",paymentRemarks:"",uploadInvoiceCopy:"",purposeOfPurchase:"",companyname:"",meansTransport:"",consignmentNo:"",consignmentDate:"",seletedItemList:[],totalItemSchDiscount:"",cgst:"",sgst:"",gst:"",taxAmount:"",invDiscountType:"",invDiscountValue:"",transportCharges:0,invDiscountAmount:"",otherCharges:0,roundOff:"",debitAmount:"",invoiceTotal:"",createdt:null,createby:"",modifydt:null,modifyby:"",totalcgst:"",totalsgst:"",tataltaxAmt:"",totalItemDiscount:"",totalItemAmount:"",sgsttaxrate:"",cgsttaxRate:"",InvDiscountType:"",InvDiscountValue:"",InvDiscontAmount:"",debitAmt:"",InvTotal:""},this.emptyStockEntry=JSON.stringify(this.stockEntry),this.checked=!1,this.UOMList=[{label:"Select one",value:""}],this.zeroLevelEntity=[],this.stockTypeList=[{label:"Select one",value:""}],this.discountTypeList=[{label:"Select one",value:""}],this.gridCols=[],this.newItemList=[],this.storeList=[],this.poDiscountTypeList=[],this.visible=!1,this.purchaseList=[],this.errorMsgs={supplierReq:"",invoiceNoReq:"",invoiceDteReq:"",dueDateReq:"",itemNameReq:"",mrpReq:"",rateReq:"",qtyReq:""},this.mobileState=!1,this.layoutRes="",this.taxGrpTypeList=[],this.taxSubGrpList=[],this.sgstList=[],this.igstList=[],this.url="",this.showImg=!1,this.centerTaxRate="0",this.itemDetails={itemName:"",batch:"",expiry:"",store:"",pckSize:"",pckUOM:"",unitUOM:"",mrp:"",adjMrp:"",rate:"",qty:0,bouns:0,discountPer:"",discount:"",disAmt:0,schDiscountPer:"",schDiscount:0,status:"",remarks:"",taxBasis:"ZLTGT11",taxRate:0,taxAmt:0,cgst:"",sgst:"",igst:"",cgstTaxRate:"",sgstTaxRte:"",totalAmt:""},this.emptyItemDetails=JSON.stringify(this.itemDetails),this.cgstList=[],this.stateTaxRate="0",this.newItemsList=[],this.itemName="",this.mobileState=this._service.isMobileDevice(),this.layoutRes=this.mobileState?"stack":"scroll"}onGetErrorMsgs(i,e){switch(i){case"supplier":this.errorMsgs.supplierReq=""==this.stockEntry[i]||null==this.stockEntry[i]||null==this.stockEntry[i]?this._service.onGetErrorMsgs(i,!0,"Supplier"):"";break;case"invoiceNo":this.errorMsgs.invoiceNoReq=""==this.stockEntry[i]||null==this.stockEntry[i]||null==this.stockEntry[i]?this._service.onGetErrorMsgs(i,!0,"Invoice no"):"";break;case"invoiceDte":this.errorMsgs.invoiceDteReq=""==this.stockEntry[i]||null==this.stockEntry[i]||null==this.stockEntry[i]?this._service.onGetErrorMsgs(i,!0,"invoice date"):"";break;case"dueDate":this.errorMsgs.dueDateReq=""==this.stockEntry[i]||null==this.stockEntry[i]||null==this.stockEntry[i]?this._service.onGetErrorMsgs(i,!0,"due date"):"";break;case"itemName":this.errorMsgs.itemNameReq=""==this.itemDetails[i]||null==this.itemDetails[i]||null==this.itemDetails[i]?this._service.onGetErrorMsgs(i,!0,"Item name"):"";break;case"mrp":this.errorMsgs.mrpReq=""==this.itemDetails[i]||null==this.itemDetails[i]||null==this.itemDetails[i]?this._service.onGetErrorMsgs(i,!0,"Mrp"):"";break;case"rate":this.errorMsgs.rateReq=""==this.itemDetails[i]||null==this.itemDetails[i]||null==this.itemDetails[i]?this._service.onGetErrorMsgs(i,!0,"Rate"):"";break;case"qty":this.errorMsgs.qtyReq=""==this.itemDetails[i]||null==this.itemDetails[i]||null==this.itemDetails[i]?this._service.onGetErrorMsgs(i,!0,"Qty"):""}}ngOnInit(){var i=this;return(0,h.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData()),i.mobileState=i._service.isMobileDevice(),i.layoutRes=i.mobileState?"stack":"scroll",i.gridCols=i._service.getGridColumns("purchaseItemListCols"),i._service.serGetDataobject("getNewItem",{}).subscribe(e=>{console.log(e),i.newItemList=e.data,p.forEach(i.newItemList,(s,n)=>{s.selected=!1})}),i._service.serGetDataobject("getStoreMaster",{status:"ZLS11"}).subscribe(e=>{i.storeList=e.data}),i._service.serGetDataobject("getRasiePurchaseOrderMaster",{}).subscribe(e=>{i.purchaseList=e.data}),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLPoDT"}).subscribe(e=>{i.poDiscountTypeList=e.data[0].subMasterData}),i._service.serGetDataobject("getUomCreation",{status:"A"}).subscribe(e=>{console.log(e),p.forEach(e.data,(s,n)=>{i.UOMList.push({label:s.packageUom,value:s._id})})}),i._service.serGetData("getGeneralMaster").subscribe(e=>{i.zeroLevelEntity=e.data;let s=p.filter(i.zeroLevelEntity,{masterid:"ZLC32"});p.forEach(s,(u,j)=>{i.stockTypeList.push({label:u.mastername,value:u._id})});let n=p.filter(i.zeroLevelEntity,{masterid:"ZLC33"});p.forEach(n,(u,j)=>{i.discountTypeList.push({label:u.mastername,value:u._id})})}),i._service.serGetDataobject("getTaxSubGroup",{status:"ZLS11"}).subscribe(e=>{i.taxSubGrpList=e.data,i.cgstList=i.taxSubGrpList,i.sgstList=i.taxSubGrpList,i.igstList=i.taxSubGrpList}),i._service.serGetDataobject("getGeneralMaster",{masterid:"ZLTGT1"}).subscribe(e=>{i.taxGrpTypeList=e.data[0].subMasterData}),i._activatedRoute.paramMap.subscribe(e=>{let s=e.get("param");null!=s?(s=JSON.parse(atob(s)),i.getMasterData(s._id),i.pageMode=s.mode):(i.isEditable=!0,i.pageMode="NEW"),i.isEditable="VIEW"!=i.pageMode})})()}onItemClick(){this.visible=!0,this._service.serGetDataobject("getTaxSubGroup",{status:"ZLS11"}).subscribe(i=>{this.taxSubGrpList=i.data,this.cgstList=this.taxSubGrpList,this.sgstList=this.taxSubGrpList,this.igstList=this.taxSubGrpList}),this._service.serGetDataobject("getGeneralMaster",{masterid:"ZLTGT1"}).subscribe(i=>{this.taxGrpTypeList=i.data[0].subMasterData})}getMasterData(i){this._service.serGetDataobject("getStockEntryMaster",{_id:i}).subscribe(e=>{console.log("dt",e),this.stockEntry=e.data[0],this.stockEntry._id=this.stockEntry._id,this.newItemsList=this.stockEntry.seletedItemList,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode,console.log("stockEntry",this.stockEntry)})}onBasicUploadAuto(i){console.log("event",event),i.files.length>0&&this.uploadFile(i.files[0])}uploadFile(i){let e=new FileReader;e.onload=s=>{this.url=s.target.result,console.log(this.url)},e.readAsDataURL(i)}onSaveClick(){if(p.forEach(["supplier","invoiceNo","invoiceDte","dueDate"],n=>{this.onGetErrorMsgs(n,!0)}),console.log("newItemList",this.newItemList),this._service.showErr(this.errorMsgs))return void this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"});this.stockEntry.seletedItemList=this.newItemsList;let s=this.stockEntry;console.log(this.stockEntry),this.saving.onSaveJson("Store","insertStockEntryMaster",[s]),this.onClearClick()}onClearClick(){"NEW"==this.pageMode?(this.stockEntry=JSON.parse(this.emptyStockEntry),this.isEditable=!0):this.isEditable=!1}onNewItemSelect(i){if(i.selected){let e=i._id;this.stockEntry.seletedItemList=""==this.stockEntry.seletedItemList?e:e+","}}onCgstTaxAmt(i){let e=p.filter(this.cgstList,{_id:i});""!=this.itemDetails.cgstTaxRate&&(this.itemDetails.taxRate-=this.itemDetails.cgstTaxRate),this.itemDetails.cgstTaxRate=parseFloat(e[0].taxrate),this.itemDetails.taxRate+=this.itemDetails.cgstTaxRate}onSgstTaxAmt(i){let e=p.filter(this.cgstList,{_id:i});""!=this.itemDetails.sgstTaxRte&&(this.itemDetails.taxRate-=this.itemDetails.sgstTaxRte),this.itemDetails.sgstTaxRte=parseFloat(e[0].taxrate),this.itemDetails.taxRate+=this.itemDetails.sgstTaxRte}onChangeMrpAmt(i){this.itemDetails.adjMrp=this.itemDetails.mrp-i*(this.itemDetails.taxRate/100)}onAddItem(i){console.log(i),i.totalAmt=parseFloat(this.itemDetails.qty)*parseFloat(this.itemDetails.rate)-this.itemDetails.disAmt+i.taxAmt,this.newItemsList.push(i),this.itemDetails=JSON.parse(this.emptyItemDetails)}onPoTotalAmt(i){}onSelectPoNum(i){let e=p.filter(this.purchaseList,{_id:i});console.log("stockDet",e),this.newItemsList=e[0].purchuseItems,this.stockEntry.quantityUom=e[0].quantityUom,this.stockEntry.supplier=e[0].supplier,this.stockEntry.supplieraddress=e[0].supplierAdderss,this.stockEntry.totalcgst=0,this.stockEntry.totalsgst=0,this.stockEntry.tataltaxAmt=0,this.stockEntry.totalItemDiscount=0,this.stockEntry.totalItemAmount=0,this.stockEntry.sgsttaxrate=0,this.stockEntry.cgsttaxRate=0,p.forEach(this.newItemsList,(s,n)=>{s.itemId=n+1,this.stockEntry.totalcgst+=s.cgsttaxAmt,this.stockEntry.totalsgst+=s.sgsttaxAmt,this.stockEntry.tataltaxAmt+=s.taxAmt,this.stockEntry.totalItemDiscount+=s.disAmt,this.stockEntry.totalItemAmount+=parseFloat(s.totalAmt),this.stockEntry.sgsttaxrate+=s.sgsttaxrate,this.stockEntry.cgsttaxRate+=s.cgsttaxRate})}onInvDisAmt(i){this.stockEntry.InvDiscontAmount=0,console.log("poValue",i),"ZLPoDT1"==i?(this.stockEntry.InvDiscountValue=parseFloat(this.stockEntry.totalItemAmount)*(parseFloat(this.stockEntry.InvDiscountValue)/100),this.stockEntry.InvDiscontAmount=this.stockEntry.InvDiscountValue,this.stockEntry.InvTotal=parseFloat(this.stockEntry.totalItemAmount)-parseFloat(this.stockEntry.InvDiscountValue)):(this.stockEntry.InvDiscontAmount=this.stockEntry.InvDiscountValue,this.stockEntry.InvTotal=parseFloat(this.stockEntry.totalItemAmount)-parseFloat(this.stockEntry.InvDiscontAmount))}onEditSelect(i,e){e.rowInd=i,this.visible=!0,this.itemDetails=e}onSaveApproveClick(){var i=this;return(0,h.Z)(function*(){i.stockEntry.approvalStatus="ZLARS11",i.onSaveClick()})()}onSavePrintClick(){}onAddItemClick(i){p.forEach(["qty","rate","mrp","itemName"],n=>{this.onGetErrorMsgs(n,!0)}),this._service.showErr(this.errorMsgs)?this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}):(i.totalAmt=parseFloat(i.rate)-(parseFloat(i.schDiscount)+parseFloat(i.disAmt))+parseFloat(i.taxAmt),i.itemName=this.itemName,null==i.rowInd?this.newItemsList.push(i):this.newItemsList.rowInd=i,this.stockEntry.totalcgst=0,this.stockEntry.totalsgst=0,this.stockEntry.tataltaxAmt=0,this.stockEntry.totalItemDiscount=0,this.stockEntry.totalItemAmount=0,this.stockEntry.sgsttaxrate=0,this.stockEntry.cgsttaxRate=0,p.forEach(this.newItemsList,(n,u)=>{n.itemId=u+1,this.stockEntry.totalcgst+=n.cgsttaxAmt,this.stockEntry.totalsgst+=n.sgsttaxAmt,this.stockEntry.tataltaxAmt+=n.taxAmt,this.stockEntry.totalItemDiscount+=n.disAmt,this.stockEntry.totalItemAmount+=parseFloat(n.totalAmt),this.stockEntry.sgsttaxrate+=n.sgsttaxrate,this.stockEntry.cgsttaxRate+=n.cgsttaxRate}))}onTransportCharges(){this.stockEntry.InvTotal=parseFloat(this.stockEntry.InvTotal)+parseFloat(this.stockEntry.transportCharges)}onOtherCharges(){this.stockEntry.InvTotal=parseFloat(this.stockEntry.InvTotal)+parseFloat(this.stockEntry.otherCharges)}onRateWiseTaxAmt(i){""!==this.itemDetails.disAmt&&(this.itemDetails.taxAmt=(parseFloat(this.itemDetails.rate)*parseFloat(i)-(parseFloat(this.itemDetails.disAmt)+parseFloat(this.itemDetails.schDiscount)))*this.itemDetails.taxRate/100),this.itemDetails.cgsttaxAmt=parseFloat(this.itemDetails.rate)*this.itemDetails.cgstTaxRate/100,this.itemDetails.sgsttaxAmt=parseFloat(this.itemDetails.rate)*this.itemDetails.sgstTaxRte/100}onDiscountAmt(i){this.itemDetails.disAmt=""!=this.itemDetails.rate&&""!=this.itemDetails.qty&&""!=this.itemDetails.discountPer?parseFloat(this.itemDetails.rate)*parseFloat(this.itemDetails.qty)*parseFloat(i)/100:0}onSchDiscountAmt(i){""!=this.itemDetails.rate&&""!=this.itemDetails.qty&&""!=this.itemDetails.schDiscountPer?this.itemDetails.disAmt=parseFloat(this.itemDetails.rate)*parseFloat(this.itemDetails.qty)*parseFloat(i)/100:this.itemDetails.schDiscount=0}onDisPer(i){""!==this.itemDetails.disAmt?this.itemDetails.discountPer=parseFloat(this.itemDetails.disAmt)/parseFloat(this.itemDetails.rate)*100:(this.itemDetails.discountPer="",this.itemDetails.disAmt=0)}onSchDisPer(i){""!==this.itemDetails.schDiscount?this.itemDetails.schDiscountPer=parseFloat(this.itemDetails.schDiscount)/parseFloat(this.itemDetails.rate)*100:(this.itemDetails.schDiscountPer="",this.itemDetails.schDiscount=0)}onLoopUp(i){console.log("onLoopUp",i),this.itemName=i.itemName,this.itemDetails.pckUOM=i.packageUOM,this.itemDetails.unitUOM=i.unitUOM,this.itemDetails.pckSize=i.packageSize,this.itemDetails.manufacture=i.manufacture,this.itemDetails.stock=i.stock,this.itemDetails.allStoreStock=i.allStoreStock}onRemoveImg(){}onShowImg(){this.showImg=!0}onCancelItem(i){}}return(o=r).\u0275fac=function(i){return new(i||o)(t.Y36(k.f),t.Y36(y.gz),t.Y36(b.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stockentry"]],viewQuery:function(i,e){if(1&i&&(t.Gf(g.G,5),t.Gf(_.g,5)),2&i){let s;t.iGM(s=t.CRH())&&(e.header=s.first),t.iGM(s=t.CRH())&&(e.saving=s.first)}},decls:152,vars:215,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","onSaveApprove","onSavePrint","submitClick","clearClick","saveApproveClick","savePrintClick"],["headers",""],[1,"div-padding"],[1,"card"],["legend","Manufacture",3,"toggleable"],[1,"formgrid","grid"],[1,"field","col-12","md:col-4","sm:col-6","lg:col-3","xl:col-3"],[3,"labelName","options","inputModel","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange","onChange"],[3,"labelName","options","inputModel","disabled","inputModelChange"],[3,"labelName","inputModel","disabled","errorMessages","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","inputModelChange"],[3,"labelName","options","disabled","inputModel","inputModelChange"],[1,"flex","flex-column","w-full","gap-1","reltive"],["for",""],["mode","basic","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","chooseLabel","Browse",3,"auto","onUpload",4,"ngIf"],["class","d-flex",4,"ngIf"],["legend","Details",3,"toggleable"],[1,"py-2"],["styleClass","p-datatable-gridlines p-datatable-striped p-datatable-sm pb-1","scrollHeight","flex",3,"columns","value","paginator","rows","responsive","resizableColumns","responsiveLayout","breakpoint"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-end"],["pButton","","pRipple","",2,"padding","4px","justify-content","center",3,"click"],["legend","Total",3,"toggleable"],[1,"field","col-12","md:col-4","sm:col-6","lg:col-2","xl:col-2"],[3,"labelName","labelValue"],[3,"labelName","inputModel","options","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","inputModelChange","onChange"],[3,"labelName","inputModel","inputModelChange"],["saving",""],[3,"visible","dismissableMask","breakpoints","visibleChange"],[1,"field","col-12","md:col-4","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","filteredOptions","filterName","errorMessages","inputModelChange","onLoopUp","onBlur"],[3,"labelName","inputModel","disabled","errorMessages","inputModelChange","onChange","onBlur"],[3,"labelName","inputModel","disabled","inputModelChange","onChange"],[3,"labelName","inputModel","options","optionLabel","optionValue","inputModelChange","onChange"],[1,"m-2"],["pButton","","pRipple","",2,"padding","4px","justify-content","center","margin-right","4px",3,"click"],["header","Image Viewer",3,"visible","visibleChange"],["alt","",3,"src"],["mode","basic","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","chooseLabel","Browse",3,"auto","onUpload"],[1,"d-flex"],[1,"reg-img-view"],["href","javascripct:return false",1,"time-icons","ml-2"],[1,"pi","pi-eye",3,"click"],["href","javascripct:return false",1,"time-icons","time-remove","ml-2"],[1,"pi","pi-times-circle",3,"click"],["pResizableColumn","","style","background-color: rgb(138 138 233);color: white;text-align: center;",3,"pSortableColumn","ngStyle",4,"ngFor","ngForOf"],["pResizableColumn","",2,"background-color","rgb(138 138 233)","color","white","text-align","center",3,"pSortableColumn","ngStyle"],[3,"field"],[4,"ngFor","ngForOf"],["class","ui-column-title mobile-view-stack-header-color",4,"ngIf"],[1,"ui-column-title","mobile-view-stack-header-color"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),t.NdJ("submitClick",function(){return e.onSaveClick()})("clearClick",function(){return e.onClearClick()})("saveApproveClick",function(){return e.onSaveApproveClick()})("savePrintClick",function(){return e.onSavePrintClick()}),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"p-scrollPanel")(7,"p-fieldset",5)(8,"div",6)(9,"div",7)(10,"app-dropdown",8),t.NdJ("inputModelChange",function(n){return e.stockEntry.store=n}),t.qZA()(),t.TgZ(11,"div",7)(12,"app-dropdown",9),t.NdJ("inputModelChange",function(n){return e.stockEntry.ponumber=n})("onChange",function(){return e.onSelectPoNum(e.stockEntry.ponumber)}),t.qZA()(),t.TgZ(13,"div",7)(14,"app-dropdown",10),t.NdJ("inputModelChange",function(n){return e.stockEntry.quantityUom=n}),t.qZA()(),t.TgZ(15,"div",7)(16,"app-inputtext",11),t.NdJ("inputModelChange",function(n){return e.stockEntry.supplier=n})("onBlur",function(){return e.onGetErrorMsgs("supplier",!0)}),t.qZA()(),t.TgZ(17,"div",7)(18,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.supplieraddress=n}),t.qZA()(),t.TgZ(19,"div",7)(20,"app-inputtext",11),t.NdJ("inputModelChange",function(n){return e.stockEntry.invoiceNo=n})("onBlur",function(){return e.onGetErrorMsgs("invoiceNo",!0)}),t.qZA()(),t.TgZ(21,"div",7)(22,"app-datepicker",11),t.NdJ("inputModelChange",function(n){return e.stockEntry.invoiceDte=n})("onBlur",function(){return e.onGetErrorMsgs("invoiceDte",!0)}),t.qZA()(),t.TgZ(23,"div",7)(24,"app-datepicker",11),t.NdJ("inputModelChange",function(n){return e.stockEntry.dueDate=n})("onBlur",function(){return e.onGetErrorMsgs("dueDate",!0)}),t.qZA()(),t.TgZ(25,"div",7)(26,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.status=n}),t.qZA()(),t.TgZ(27,"div",7)(28,"app-dropdown",13),t.NdJ("inputModelChange",function(n){return e.stockEntry.stockType=n}),t.qZA()(),t.TgZ(29,"div",7)(30,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.cashPurchase=n}),t.qZA()(),t.TgZ(31,"div",7)(32,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.poReference=n}),t.qZA()(),t.TgZ(33,"div",7)(34,"app-dropdown",13),t.NdJ("inputModelChange",function(n){return e.stockEntry.itemDiscountType=n}),t.qZA()(),t.TgZ(35,"div",7)(36,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.itemDiscountValue=n}),t.qZA()(),t.TgZ(37,"div",7)(38,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.remarks=n}),t.qZA()(),t.TgZ(39,"div",7)(40,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.paymentRemarks=n}),t.qZA()(),t.TgZ(41,"div",7)(42,"div",14)(43,"label",15),t._uU(44," Upload Document :"),t.qZA(),t.YNc(45,Z,1,1,"p-fileUpload",16),t.qZA(),t.YNc(46,J,7,0,"div",17),t.qZA(),t.TgZ(47,"div",7)(48,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.purposeOfPurchase=n}),t.qZA()()()(),t.TgZ(49,"p-fieldset",18)(50,"div",6)(51,"div",7)(52,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.companyname=n}),t.qZA()(),t.TgZ(53,"div",7)(54,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.meansTransport=n}),t.qZA()(),t.TgZ(55,"div",7)(56,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.consignmentNo=n}),t.qZA()(),t.TgZ(57,"div",7)(58,"app-datepicker",12),t.NdJ("inputModelChange",function(n){return e.stockEntry.consignmentDate=n}),t.qZA()()()(),t.TgZ(59,"div",19)(60,"p-table",20,21),t.YNc(62,L,3,1,"ng-template",22),t.YNc(63,w,2,1,"ng-template",23),t.qZA(),t.TgZ(64,"div",24)(65,"button",25),t.NdJ("click",function(){return e.onItemClick()}),t._uU(66," Add"),t.qZA()()(),t.TgZ(67,"p-fieldset",26)(68,"div",6)(69,"div",27),t._UZ(70,"app-labelbind",28),t.qZA(),t.TgZ(71,"div",27),t._UZ(72,"app-labelbind",28),t.qZA(),t.TgZ(73,"div",27),t._UZ(74,"app-labelbind",28),t.qZA(),t.TgZ(75,"div",27),t._UZ(76,"app-labelbind",28),t.qZA(),t.TgZ(77,"div",27),t._UZ(78,"app-labelbind",28),t.qZA(),t.TgZ(79,"div",27),t._UZ(80,"app-labelbind",28),t.qZA(),t.TgZ(81,"div",27),t._UZ(82,"app-labelbind",28),t.qZA(),t.TgZ(83,"div",27)(84,"app-dropdown",29),t.NdJ("inputModelChange",function(n){return e.stockEntry.InvDiscountType=n}),t.qZA()(),t.TgZ(85,"div",27)(86,"app-inputtext",30),t.NdJ("inputModelChange",function(n){return e.stockEntry.InvDiscountValue=n})("onChange",function(){return e.onInvDisAmt(e.stockEntry.InvDiscountType)}),t.qZA()(),t.TgZ(87,"div",27)(88,"app-inputtext",30),t.NdJ("inputModelChange",function(n){return e.stockEntry.transportCharges=n})("onChange",function(){return e.onTransportCharges()}),t.qZA()(),t.TgZ(89,"div",27),t._UZ(90,"app-labelbind",28),t.qZA(),t.TgZ(91,"div",27)(92,"app-inputtext",30),t.NdJ("inputModelChange",function(n){return e.stockEntry.otherCharges=n})("onChange",function(){return e.onOtherCharges()}),t.qZA()(),t.TgZ(93,"div",27)(94,"app-inputtext",31),t.NdJ("inputModelChange",function(n){return e.stockEntry.roundOff=n}),t.qZA()(),t.TgZ(95,"div",27)(96,"app-inputtext",31),t.NdJ("inputModelChange",function(n){return e.stockEntry.debitAmt=n}),t.qZA()(),t.TgZ(97,"div",27),t._UZ(98,"app-labelbind",28),t.qZA()()()()()()(),t._UZ(99,"app-saving",null,32),t.TgZ(101,"p-dialog",33),t.NdJ("visibleChange",function(n){return e.visible=n}),t.TgZ(102,"p-fieldset",26)(103,"div",6)(104,"div",34)(105,"app-lookup",35),t.NdJ("inputModelChange",function(n){return e.itemDetails.itemName=n})("onLoopUp",function(n){return e.onLoopUp(n)})("onBlur",function(){return e.onGetErrorMsgs("itemName",!0)}),t.qZA()(),t._uU(106),t.TgZ(107,"div",34)(108,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.itemDetails.batch=n}),t.qZA()(),t.TgZ(109,"div",34)(110,"app-datepicker",12),t.NdJ("inputModelChange",function(n){return e.itemDetails.expiry=n}),t.qZA()(),t.TgZ(111,"div",34)(112,"app-inputtext",36),t.NdJ("inputModelChange",function(n){return e.itemDetails.mrp=n})("onChange",function(){return e.onChangeMrpAmt(e.itemDetails.mrp)})("onBlur",function(){return e.onGetErrorMsgs("mrp",!0)}),t.qZA()(),t.TgZ(113,"div",34)(114,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.itemDetails.adjMrp=n}),t.qZA()(),t.TgZ(115,"div",34)(116,"app-inputtext",11),t.NdJ("inputModelChange",function(n){return e.itemDetails.rate=n})("onBlur",function(){return e.onGetErrorMsgs("rate",!0)}),t.qZA()(),t.TgZ(117,"div",34)(118,"app-inputtext",36),t.NdJ("inputModelChange",function(n){return e.itemDetails.qty=n})("onChange",function(){return e.onRateWiseTaxAmt(e.itemDetails.qty),e.onDiscountAmt(e.itemDetails.discountPer)})("onBlur",function(){return e.onGetErrorMsgs("qty",!0)}),t.qZA()(),t.TgZ(119,"div",34)(120,"app-inputtext",12),t.NdJ("inputModelChange",function(n){return e.itemDetails.bouns=n}),t.qZA()(),t.TgZ(121,"div",34)(122,"app-inputtext",37),t.NdJ("inputModelChange",function(n){return e.itemDetails.discountPer=n})("onChange",function(){return e.onDiscountAmt(e.itemDetails.discountPer)}),t.qZA()(),t.TgZ(123,"div",34)(124,"app-inputtext",37),t.NdJ("inputModelChange",function(n){return e.itemDetails.disAmt=n})("onChange",function(){return e.onDisPer(e.itemDetails.disAmt),e.onRateWiseTaxAmt(e.itemDetails.qty)}),t.qZA()(),t.TgZ(125,"div",34)(126,"app-inputtext",37),t.NdJ("inputModelChange",function(n){return e.itemDetails.schDiscountPer=n})("onChange",function(){return e.onSchDiscountAmt(e.itemDetails.schDiscountPer)}),t.qZA()(),t.TgZ(127,"div",34)(128,"app-inputtext",37),t.NdJ("inputModelChange",function(n){return e.itemDetails.schDiscount=n})("onChange",function(){return e.onSchDisPer(e.itemDetails.schDiscount),e.onRateWiseTaxAmt(e.itemDetails.qty)}),t.qZA()(),t.TgZ(129,"div",34),t._UZ(130,"app-labelbind",28),t.qZA()(),t.TgZ(131,"p-fieldset",26)(132,"div",6)(133,"div",34)(134,"app-dropdown",29),t.NdJ("inputModelChange",function(n){return e.itemDetails.taxBasis=n}),t.qZA()(),t.TgZ(135,"div",34),t._UZ(136,"app-labelbind",28),t.qZA(),t.TgZ(137,"div",34),t._UZ(138,"app-labelbind",28),t.qZA(),t.TgZ(139,"div",34)(140,"app-dropdown",38),t.NdJ("inputModelChange",function(n){return e.itemDetails.cgst=n})("onChange",function(){return e.onCgstTaxAmt(e.itemDetails.cgst)}),t.qZA()(),t.TgZ(141,"div",34)(142,"app-dropdown",38),t.NdJ("inputModelChange",function(n){return e.itemDetails.sgst=n})("onChange",function(){return e.onSgstTaxAmt(e.itemDetails.sgst)}),t.qZA()(),t.TgZ(143,"div",34)(144,"app-dropdown",29),t.NdJ("inputModelChange",function(n){return e.itemDetails.igst=n}),t.qZA()()()()(),t.TgZ(145,"div",39)(146,"button",40),t.NdJ("click",function(){return e.onAddItemClick(e.itemDetails)}),t._uU(147," Add"),t.qZA(),t.TgZ(148,"button",25),t.NdJ("click",function(){return e.onCancelItem(e.itemDetails)}),t._uU(149," Cancel"),t.qZA()()(),t.TgZ(150,"p-dialog",41),t.NdJ("visibleChange",function(n){return e.showImg=n}),t._UZ(151,"img",42),t.qZA()),2&i&&(t.xp6(2),t.Q6J("pageTitle",e.pageTitle)("onSubmit",e.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",e.onClear)("onEdit",e.onEdit)("onView",e.onView)("onSaveApprove",!0)("onSavePrint",!0),t.xp6(4),t.Akn(t.DdM(211,G)),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(3),t.Q6J("labelName","Store")("options",e.storeList)("inputModel",e.stockEntry.store)("optionLabel","store")("optionValue","_id"),t.xp6(2),t.Q6J("labelName","Po Number")("inputModel",e.stockEntry.ponumber)("disabled",!e.isEditable)("options",e.purchaseList)("optionLabel","poNumber")("optionValue","_id"),t.xp6(2),t.Q6J("labelName","Quantity UOM")("options",e.UOMList)("inputModel",e.stockEntry.quantityUom)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.supplierReq),t.Q6J("labelName","Supplier")("inputModel",e.stockEntry.supplier)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Supplier Address")("inputModel",e.stockEntry.supplieraddress)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.invoiceNoReq),t.Q6J("labelName","Invoice No.")("inputModel",e.stockEntry.invoiceNo)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.invoiceDteReq),t.Q6J("labelName","Invoice Date")("inputModel",e.stockEntry.invoiceDte)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.dueDateReq),t.Q6J("labelName","Due Date")("inputModel",e.stockEntry.dueDate)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Status")("inputModel",e.stockEntry.status)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Stock Type")("options",e.stockTypeList)("disabled",!e.isEditable)("inputModel",e.stockEntry.stockType),t.xp6(2),t.Q6J("labelName","Cash Purchase")("inputModel",e.stockEntry.cashPurchase)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","PO Reference")("inputModel",e.stockEntry.poReference)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Item Discount Type")("options",e.discountTypeList)("disabled",!e.isEditable)("inputModel",e.stockEntry.itemDiscountType),t.xp6(2),t.Q6J("labelName","Item Discount Value")("inputModel",e.stockEntry.itemDiscountValue)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Remarks")("inputModel",e.stockEntry.remarks)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Payment Remarks")("inputModel",e.stockEntry.paymentRemarks)("disabled",!e.isEditable),t.xp6(5),t.Q6J("ngIf",""==e.url),t.xp6(1),t.Q6J("ngIf",""!=e.url),t.xp6(2),t.Q6J("labelName","Purpose of Purchase")("inputModel",e.stockEntry.purposeOfPurchase)("disabled",!e.isEditable),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(3),t.Q6J("labelName","Company Name")("inputModel",e.stockEntry.companyname)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Means Transport")("inputModel",e.stockEntry.meansTransport)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Consignment No.")("inputModel",e.stockEntry.consignmentNo)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Consignment Date")("inputModel",e.stockEntry.consignmentDate)("disabled",!e.isEditable),t.xp6(2),t.Q6J("columns",e.gridCols)("value",e.newItemsList)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("responsiveLayout",e.layoutRes)("breakpoint","575.98px"),t.xp6(7),t.Q6J("toggleable",!0),t.xp6(3),t.Q6J("labelName","Total Item Discount")("labelValue",e.stockEntry.totalItemDis),t.xp6(2),t.Q6J("labelName","Total Item Sch Discount")("labelValue",e.stockEntry.itemSchDis),t.xp6(2),t.Q6J("labelName","Total Item Amount")("labelValue",e.stockEntry.totalItemAmount),t.xp6(2),t.Q6J("labelName","CGST")("labelValue",e.stockEntry.totalcgst),t.xp6(2),t.Q6J("labelName","SGST")("labelValue",e.stockEntry.totalsgst),t.xp6(2),t.Q6J("labelName","i-GST")("labelValue",e.stockEntry.gst),t.xp6(2),t.Q6J("labelName","Tax Amount")("labelValue",e.stockEntry.tataltaxAmt),t.xp6(2),t.Q6J("labelName","Inv. Discount Type")("inputModel",e.stockEntry.InvDiscountType)("options",e.poDiscountTypeList)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Inv. Discount Value")("inputModel",e.stockEntry.InvDiscountValue),t.xp6(2),t.Q6J("labelName","Transportation Charges")("inputModel",e.stockEntry.transportCharges),t.xp6(2),t.Q6J("labelName","Inv. Discount Amount")("labelValue",e.stockEntry.InvDiscontAmount),t.xp6(2),t.Q6J("labelName","Other Charges")("inputModel",e.stockEntry.otherCharges),t.xp6(2),t.Q6J("labelName","Round Off")("inputModel",e.stockEntry.roundOff),t.xp6(2),t.Q6J("labelName","Debit amount")("inputModel",e.stockEntry.debitAmt),t.xp6(2),t.Q6J("labelName","Invoice Total")("labelValue",e.stockEntry.InvTotal),t.xp6(3),t.Akn(t.DdM(212,x)),t.Q6J("visible",e.visible)("dismissableMask",!0)("breakpoints",t.DdM(213,U)),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(3),t.s9C("errorMessages",e.errorMsgs.itemNameReq),t.Q6J("labelName","Item")("inputModel",e.itemDetails.itemName)("filteredOptions",e.newItemList)("filterName","itemName"),t.xp6(1),t.hij(" ",e.itemDetails.itemName," "),t.xp6(2),t.Q6J("labelName","Batch/Serial No.")("inputModel",e.itemDetails.batch)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Expiry")("inputModel",e.itemDetails.expiry)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.mrpReq),t.Q6J("labelName","MRP")("inputModel",e.itemDetails.mrp)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Adj MRP")("inputModel",e.itemDetails.adjMrp)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.rateReq),t.Q6J("labelName","Rate")("inputModel",e.itemDetails.rate)("disabled",!e.isEditable),t.xp6(2),t.s9C("errorMessages",e.errorMsgs.qtyReq),t.Q6J("labelName","Qty")("inputModel",e.itemDetails.qty)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Bouns")("inputModel",e.itemDetails.bouns)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Discount (%)")("inputModel",e.itemDetails.discountPer)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Discount Amt")("inputModel",e.itemDetails.disAmt)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Scheme Discount (%)")("inputModel",e.itemDetails.schDiscountPer)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","Scheme Discount")("inputModel",e.itemDetails.schDiscount)("disabled",!e.isEditable),t.xp6(2),t.Q6J("labelName","package Size")("labelValue",e.itemDetails.pckSize),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(3),t.Q6J("labelName","Tax Basis")("inputModel",e.itemDetails.taxBasis)("options",e.taxGrpTypeList)("optionLabel","subMasterName")("optionValue","subMasterId"),t.xp6(2),t.Q6J("labelName","Tax Rate")("labelValue",e.itemDetails.taxRate),t.xp6(2),t.Q6J("labelName","Tax Amt")("labelValue",e.itemDetails.taxAmt),t.xp6(2),t.Q6J("labelName","CGST")("inputModel",e.itemDetails.cgst)("options",e.cgstList)("optionLabel","taxsubgroup")("optionValue","_id"),t.xp6(2),t.Q6J("labelName","SGST")("inputModel",e.itemDetails.sgst)("options",e.sgstList)("optionLabel","taxsubgroup")("optionValue","_id"),t.xp6(2),t.Q6J("labelName","IGST")("inputModel",e.itemDetails.igst)("options",e.igstList)("optionLabel","taxsubgroup")("optionValue","_id"),t.xp6(6),t.Akn(t.DdM(214,P)),t.Q6J("visible",e.showImg),t.xp6(1),t.Q6J("src",e.url,t.LSH))},dependencies:[d.sg,d.O5,d.PC,b.jx,m.iA,m.lQ,m.Q7,m.fz,C.Hq,v.p,M.P,D.G,T.J,g.G,_.g,f.F,E.q,S.Q,A.p,N.V],styles:["[_nghost-%COMP%]     .p-dialog-draggable .p-dialog-header {\n    padding: 0rem;\n  }"]}),r})();var V=a(8032);const O=[{path:"",component:F}];let B=(()=>{var o;class r{}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,V.u,y.Bz.forChild(O)]}),r})()}}]);