"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[8515],{6819:($,N,p)=>{p.d(N,{J:()=>F});var x=p(5861),t=p(4946),g=p(6990),G=p(6113),k=p(7664),b=p(6814),O=p(5219),u=p(9232);function Z(i,l){1&i&&(t.TgZ(0,"span",9),t._uU(1," Actions "),t.qZA())}function S(i,l){if(1&i&&(t.TgZ(0,"th",7),t._uU(1," Action "),t.YNc(2,Z,2,0,"span",8),t.qZA()),2&i){const o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",o.mobileState)}}function D(i,l){if(1&i&&(t.TgZ(0,"th",10),t._UZ(1,"p-columnFilter",11),t._uU(2),t._UZ(3,"p-sortIcon",12),t.qZA()),2&i){const o=l.$implicit;t.Q6J("pSortableColumn",o.field)("ngStyle",o.style),t.xp6(1),t.Q6J("field",o.field),t.xp6(1),t.hij(" ",o.header," "),t.xp6(1),t.Q6J("field",o.field)}}function I(i,l){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,S,3,1,"th",5),t.YNc(2,D,4,5,"th",6),t.qZA()),2&i){const o=l.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.printOptions.length>0||e.actionOptions.length>0),t.xp6(1),t.Q6J("ngForOf",o)}}function y(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,r=t.oxw(2).$implicit,_=t.oxw();return t.KtG(_.onActionClick(r,n.reportName))}),t._UZ(1,"i"),t.qZA()}if(2&i){const o=t.oxw().$implicit;t.xp6(1),t.Tol(o.iconClass)}}function M(i,l){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,y,2,3,"a",17),t.qZA()),2&i){const o=l.$implicit,e=t.oxw(2).$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.showActionOptions(o,e))}}function J(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(o);const n=t.oxw().$implicit,r=t.oxw(2).$implicit,_=t.oxw();return t.KtG(_.onPrintClick(r,n.reportName))}),t._UZ(1,"i"),t.qZA()}if(2&i){const o=t.oxw().$implicit;t.xp6(1),t.Tol(o.iconClass)}}function s(i,l){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,J,2,3,"a",17),t.qZA()),2&i){const o=l.$implicit,e=t.oxw(2).$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.showPrintOptions(o,e))}}function m(i,l){if(1&i&&(t.TgZ(0,"td",16),t.YNc(1,M,2,1,"span",15),t.YNc(2,s,2,1,"span",15),t.qZA()),2&i){const o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",o.actionOptions),t.xp6(1),t.Q6J("ngForOf",o.printOptions)}}function d(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a")(1,"i",22),t.NdJ("click",function(){t.CHM(o);const n=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onCheckBox(n,"EDIT"))}),t.qZA()()}}function c(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a")(1,"i",23),t.NdJ("click",function(){t.CHM(o);const n=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onCheckBox(n,"VIEW"))}),t.qZA()()}}function a(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a")(1,"i",24),t.NdJ("click",function(){t.CHM(o);const n=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onCancelClick(n,"Cancel"))}),t.qZA()()}}function w(i,l){1&i&&(t.TgZ(0,"a",25),t._UZ(1,"span",26),t.qZA())}function v(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"a",25)(1,"p-tableCheckbox",27),t.NdJ("click",function(){t.CHM(o);const n=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onCheckBox(n,"check"))}),t.qZA()()}if(2&i){const o=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",o)}}function T(i,l){if(1&i&&(t.TgZ(0,"a",25),t._UZ(1,"p-tableRadioButton",28),t.qZA()),2&i){const o=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",o)}}function E(i,l){if(1&i&&(t.TgZ(0,"td",19),t.YNc(1,d,2,0,"a",20),t.YNc(2,c,2,0,"a",20),t.YNc(3,a,2,0,"a",20),t.YNc(4,w,2,0,"a",21),t.YNc(5,v,2,1,"a",21),t.YNc(6,T,2,1,"a",21),t.qZA()),2&i){const o=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",!(e.showEdit&&"C"==o.status)),t.xp6(1),t.Q6J("ngIf",e.showView),t.xp6(1),t.Q6J("ngIf",!(e.showCancel&&"C"==o.status)),t.xp6(1),t.Q6J("ngIf",e.showReOrder),t.xp6(1),t.Q6J("ngIf",e.showCheckBox),t.xp6(1),t.Q6J("ngIf",e.showRadioButton)}}const R=function(i){return[i]};function H(i,l){if(1&i&&(t.TgZ(0,"span",30),t._uU(1),t.qZA()),2&i){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.VKq(1,R,o.field)," ")}}function Y(i,l){if(1&i&&(t.TgZ(0,"td"),t.YNc(1,H,2,3,"span",29),t._uU(2),t.qZA()),2&i){const o=l.$implicit,e=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.mobileState),t.xp6(1),t.hij(" ",e[o.field]," ")}}function U(i,l){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,m,3,2,"td",13),t.YNc(2,E,7,6,"td",14),t.YNc(3,Y,3,2,"td",15),t.qZA()),2&i){const o=l.columns,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.printOptions.length>0||e.actionOptions.length>0),t.xp6(1),t.Q6J("ngIf",!1),t.xp6(1),t.Q6J("ngForOf",o)}}function Q(i,l){if(1&i&&t._uU(0),2&i){const o=l.$implicit,e=t.oxw();t.lnq(" Showing ",o.first+1," to ",e.math.min((o.page+1)*o.rows,o.totalRecords)," of ",o.totalRecords," Records ")}}let F=(()=>{var i;class l{constructor(e,n,r){this._service=e,this._router=n,this._activateroute=r,this.mastersGridColumns="",this.masterGridData=[],this.paramKey="",this.showCheckBox=!1,this.showReOrder=!1,this.showRadioButton=!1,this.showEdit=!1,this.showView=!1,this.showCancel=!1,this.printOptions=[],this.actionOptions=[],this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.printClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.docParams={},this.docAccPer={},this.first=1,this.rows=20,this.gridCols=[],this.gridData=[],this.selectedSize="p-datatable-gridlines",this.products=[],this.exportColumns=[],this.mobileState=!1,this.viewPermission=!0,this.math=Math,this.mobileState=this._service.isMobileDevice(),this.layoutRes=this.mobileState?"stack":"scroll"}ngOnInit(){var e=this;return(0,x.Z)(function*(){0==Object.keys(e._service.appConfig).length&&(yield e._service.getConfigData()),e.mobileState=e._service.isMobileDevice(),e.layoutRes=e.mobileState?"stack":"scroll",console.log("mobileState",e.mobileState),console.log(e),e._activateroute.paramMap.subscribe(function(){var n=(0,x.Z)(function*(r){let _=r.get("params");if(null!=_&&null!=_){let f=JSON.parse(atob(_)),A=e._service.getDocPermissions(f).subscribe(h=>{A=h.data[0],e.permissions(f,A)})}else e._router.navigate(["/home"],{relativeTo:e._activateroute})});return function(r){return n.apply(this,arguments)}}()),e.sizes=[{name:"Small",class:"p-datatable-sm"},{name:"Normal",class:""},{name:"Large",class:"p-datatable-lg"}],e.gridCols=yield e._service.getGridColumns(e.mastersGridColumns),console.log(e.gridCols),e._service.serGetData(e.masterGridData).subscribe(n=>{e.gridData=n.data,g.forEach(e.gridData,(r,_)=>{r.actionOptions=JSON.parse(JSON.stringify(e.actionOptions)),r.printOptions=JSON.parse(JSON.stringify(e.printOptions))})}),e.exportColumns=e.gridCols.map(n=>({title:"Deparment",dataKey:"deparment"}))})()}permissions(e,n){null!=e&&null!=e&&(this.pageTitle=n.documentname,this.onSubmit=n.docAccSubmit,this.onGrid=n.docAccGridView,this.onAddNew=n.docAccAddNew,this.onClear=n.docAccClear,this.onEdit=n.docAccEdit,this.onView=n.docAccView,this.export=n.docAccExport,this.routerAddNew=`/home/${n.documentpageurl}`,this.routerGridView=`/home/${n.documentgridUrl}`,this.docParams=e,this.docAccPer=n)}onCheckBox(e,n){if("EDIT"==n&&(console.log(this.paramKey),console.log(e),this.viewPermission="C"!=e.status),"EDIT"!=n||"D"!=e.recordStatus){let r="";g.forEach(this.paramKey,(_,f)=>{r+=`"${_}":"${e[_]}"`}),r.length>0&&(r=`{${r}, "mode":"${n}"}`,r=btoa(r),this._router.navigate([this.routerAddNew,{param:r,params:btoa(JSON.stringify(this.docParams))}],{relativeTo:this._activateroute}))}}onCancelClick(e,n){e.reportName=n,this.printClick.emit(e),alert("gridPrint")}showActionOptions(e,n){let r=!0;if("VIEW"!=e.reportName&&"A"==n.status)return void(r=!1);let _=[];var f=!0;if(null==e.display||""==e.display)r=!0;else{let A=e.display;g.forEach(A,(h,B)=>{r=!0;let K=h.indexOf("!");if(h=h.replace("!",""),n[B]!=(h="(null)"==h?null:h)&&K<0&&(r=!1),n[B]==h&&K>=0&&(r=!1),_.push(r),"AND"==e.conditionOperator)for(var C=0;C<_.length;C++)f=f&&_[C];else if(Object.keys(A).length>1)for(C=0;C<_.length;C++)0==C&&(f=_[0]),f=f||_[C]})}return null!=e.display&&Object.keys(e.display).length>1&&(r=f),r}onActionClick(e,n){if("EDIT"!=n||"C"!=e.recordStatus){let r="";g.forEach(this.paramKey,(_,f)=>{r+=`"${_}":"${e[_]}"`}),r.length>0&&(r=`{${r}, "mode":"${n}"}`,r=btoa(r),this._router.navigate([this.routerAddNew,{param:r,params:btoa(JSON.stringify(this.docParams))}],{relativeTo:this._activateroute}))}}showPrintOptions(e,n){return!0}onPrintClick(e,n){}exportPdf(){}exportExcel(){}saveAsExcelFile(e,n){}}return(i=l).\u0275fac=function(e){return new(e||i)(t.Y36(G.f),t.Y36(k.F0),t.Y36(k.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-gridview"]],inputs:{mastersGridColumns:"mastersGridColumns",masterGridData:"masterGridData",paramKey:"paramKey",showCheckBox:"showCheckBox",showReOrder:"showReOrder",showRadioButton:"showRadioButton",showEdit:"showEdit",showView:"showView",showCancel:"showCancel",printOptions:"printOptions",actionOptions:"actionOptions",pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export"},outputs:{printClick:"printClick"},decls:5,vars:8,consts:[["styleClass","p-datatable-gridlines  p-datatable-sm pb-1","scrollHeight","flex",3,"columns","value","paginator","rows","responsive","resizableColumns","responsiveLayout","breakpoint"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["style","width: 2rem; background-color: rgb(138 138 233);color: white;text-align: center;",4,"ngIf"],["pResizableColumn","","style","background-color: rgb(138 138 233);color: white;text-align: center;",3,"pSortableColumn","ngStyle",4,"ngFor","ngForOf"],[2,"width","2rem","background-color","rgb(138 138 233)","color","white","text-align","center"],["style","width: 2rem",4,"ngIf"],[2,"width","2rem"],["pResizableColumn","",2,"background-color","rgb(138 138 233)","color","white","text-align","center",3,"pSortableColumn","ngStyle"],["type","text","display","menu",3,"field"],[3,"field"],["style","justify-content: end",4,"ngIf"],["pFrozenColumn","",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"justify-content","end"],["href","javascript:return",3,"click",4,"ngIf"],["href","javascript:return",3,"click"],["pFrozenColumn",""],[4,"ngIf"],["href","javascripct:return",4,"ngIf"],[1,"pi","pi-user-edit",3,"click"],[1,"pi","pi-user",3,"click"],[1,"pi","pi-times-circle",3,"click"],["href","javascripct:return"],["pReorderableRowHandle","",1,"pi","pi-bars"],[3,"value","click"],[3,"value"],["class","ui-column-title mobile-view-stack-header-color",4,"ngIf"],[1,"ui-column-title","mobile-view-stack-header-color"]],template:function(e,n){1&e&&(t.TgZ(0,"p-table",0,1),t.YNc(2,I,3,2,"ng-template",2),t.YNc(3,U,4,3,"ng-template",3),t.YNc(4,Q,1,3,"ng-template",4),t.qZA()),2&e&&t.Q6J("columns",n.gridCols)("value",n.gridData)("paginator",!0)("rows",25)("responsive",!0)("resizableColumns",!0)("responsiveLayout",n.layoutRes)("breakpoint","575.98px")},dependencies:[b.sg,b.O5,b.PC,O.jx,u.iA,u.lQ,u.on,u.Q7,u.fz,u.GE,u.UA,u.Mv,u.xl]}),l})()},7934:($,N,p)=>{p.d(N,{G:()=>J});var x=p(5861),t=p(4946),g=p(7664),P=p(6113),G=p(5219),k=p(6814),b=p(707),O=p(4104);function u(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onSaveClick())}),t.qZA()}}function Z(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onGridClick())}),t.qZA()}}function S(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onAddNewClick())}),t.qZA()}}function D(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onClearClick())}),t.qZA()}}function I(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onEditClick())}),t.qZA()}}function y(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onSaveApproveClick())}),t.qZA()}}function M(s,m){if(1&s){const d=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(d);const a=t.oxw();return t.KtG(a.onSavePrintClick())}),t.qZA()}}let J=(()=>{var s;class m{constructor(c,a,w,v){this._router=c,this._service=a,this._activatedRoute=w,this._messageService=v,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var c=this;return(0,x.Z)(function*(){0==Object.keys(c._service.appConfig).length&&(yield c._service.getConfigData()),console.log(c),c._activatedRoute.paramMap.subscribe(function(){var a=(0,x.Z)(function*(w){let v=w.get("params");if(null!=v&&null!=v){let T=JSON.parse(atob(v)),E=c._service.getDocPermissions(T).subscribe(R=>{E=R.data[0],c.permissions(T,E)})}else c._router.navigate(["/home"],{relativeTo:c._activatedRoute})});return function(w){return a.apply(this,arguments)}}())})()}permissions(c,a){console.log("aaa",c),null!=c&&null!=c&&(this.pageTitle=a.documentname,this.docAccSubmit=a.docAccSubmit,this.docAccGridView=a.docAccGridView,this.docAccAddNew=a.docAccAddNew,this.docAccClear=a.docAccClear,this.docAccEdit=a.docAccEdit,this.docAccView=a.docAccView,this.docAccExport=a.docAccExport,this.routerAddNew=`/home/${a.documentpageurl}`,this.routerGridView=`/home/${a.documentgridUrl}`,this.docParams=c,this.docAccPer=a)}onGridClick(){this.gridClick.emit(!0);let c=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:c}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let c=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:c}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(s=m).\u0275fac=function(c){return new(c||s)(t.Y36(g.F0),t.Y36(P.f),t.Y36(g.gz),t.Y36(G.ez))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(c,a){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,u,1,0,"button",4),t.YNc(6,Z,1,0,"button",5),t.YNc(7,S,1,0,"button",6),t.YNc(8,D,1,0,"button",7),t.YNc(9,I,1,0,"button",8),t.YNc(10,y,1,0,"button",9),t.YNc(11,M,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return a.onMessageClose()}),t.qZA()),2&c&&(t.xp6(3),t.hij(" ",a.pageTitle,""),t.xp6(2),t.Q6J("ngIf",a.onSubmit&&a.docAccSubmit),t.xp6(1),t.Q6J("ngIf",a.onGrid&&a.docAccGridView),t.xp6(1),t.Q6J("ngIf",a.onAddNew&&a.docAccAddNew),t.xp6(1),t.Q6J("ngIf",a.onClear&&a.docAccClear),t.xp6(1),t.Q6J("ngIf",a.onEdit&&a.docAccEdit),t.xp6(1),t.Q6J("ngIf",a.onSaveApprove),t.xp6(1),t.Q6J("ngIf",a.onSavePrint))},dependencies:[k.O5,b.Hq,O.FN]}),m})()}}]);