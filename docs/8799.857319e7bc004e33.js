"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[8799],{8799:(N,C,r)=>{r.r(C),r.d(C,{StockentrylistModule:()=>w});var _=r(6814),t=r(5861),d=r(6819),o=r(4946),v=r(6113),f=r(7338),h=r(7934);const g=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let k=(()=>{var a;class s{constructor(i){this._service=i,this.mastersGridColumns="stockEntryGridColumns",this.masterGridData="getStockEntryMaster",this.paramKey=["_id"],this.pageTitle="Module List",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[{reportName:"cancel",iconClass:"pi pi-times-circle"}]}ngOnInit(){var i=this;return(0,t.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData())})()}onGridClick(){}onAddNewClick(){}onPrintClick(i){}}return(a=s).\u0275fac=function(i){return new(i||a)(o.Y36(v.f))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-stockentrylist"]],viewQuery:function(i,l){if(1&i&&o.Gf(d.J,5),2&i){let c;o.iGM(c=o.CRH())&&(l.gridView=c.first)}},decls:8,vars:12,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"div-padding"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","printOptions","actionOptions","printClick"],["grid",""]],template:function(i,l){1&i&&(o.TgZ(0,"div",0)(1,"div"),o._UZ(2,"app-header",1,2),o.qZA(),o.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"app-gridview",4,5),o.NdJ("printClick",function(n){return l.onPrintClick(n)}),o.qZA()()()()),2&i&&(o.xp6(2),o.Q6J("pageTitle",l.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),o.xp6(3),o.Akn(o.DdM(11,g)),o.xp6(1),o.Q6J("mastersGridColumns",l.mastersGridColumns)("masterGridData",l.masterGridData)("paramKey",l.paramKey)("printOptions",l.printOptions)("actionOptions",l.actionOptions))},dependencies:[f.P,h.G,d.J]}),s})();var A=r(8032),b=r(7664);const T=[{path:"",component:k}];let w=(()=>{var a;class s{}return(a=s).\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[_.ez,A.u,b.Bz.forChild(T)]}),s})()},7934:(N,C,r)=>{r.d(C,{G:()=>p});var _=r(5861),t=r(4946),d=r(7664),o=r(6113),v=r(5219),f=r(6814),h=r(707),g=r(4104);function k(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onSaveClick())}),t.qZA()}}function A(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onGridClick())}),t.qZA()}}function b(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onAddNewClick())}),t.qZA()}}function T(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onClearClick())}),t.qZA()}}function w(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onEditClick())}),t.qZA()}}function a(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onSaveApproveClick())}),t.qZA()}}function s(i,l){if(1&i){const c=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.onSavePrintClick())}),t.qZA()}}let p=(()=>{var i;class l{constructor(n,e,u,m){this._router=n,this._service=e,this._activatedRoute=u,this._messageService=m,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var n=this;return(0,_.Z)(function*(){0==Object.keys(n._service.appConfig).length&&(yield n._service.getConfigData()),console.log(n),n._activatedRoute.paramMap.subscribe(function(){var e=(0,_.Z)(function*(u){let m=u.get("params");if(null!=m&&null!=m){let E=JSON.parse(atob(m)),S=n._service.getDocPermissions(E).subscribe(G=>{S=G.data[0],n.permissions(E,S)})}else n._router.navigate(["/home"],{relativeTo:n._activatedRoute})});return function(u){return e.apply(this,arguments)}}())})()}permissions(n,e){console.log("aaa",n),null!=n&&null!=n&&(this.pageTitle=e.documentname,this.docAccSubmit=e.docAccSubmit,this.docAccGridView=e.docAccGridView,this.docAccAddNew=e.docAccAddNew,this.docAccClear=e.docAccClear,this.docAccEdit=e.docAccEdit,this.docAccView=e.docAccView,this.docAccExport=e.docAccExport,this.routerAddNew=`/home/${e.documentpageurl}`,this.routerGridView=`/home/${e.documentgridUrl}`,this.docParams=n,this.docAccPer=e)}onGridClick(){this.gridClick.emit(!0);let n=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:n}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let n=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:n}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(i=l).\u0275fac=function(n){return new(n||i)(t.Y36(d.F0),t.Y36(o.f),t.Y36(d.gz),t.Y36(v.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,k,1,0,"button",4),t.YNc(6,A,1,0,"button",5),t.YNc(7,b,1,0,"button",6),t.YNc(8,T,1,0,"button",7),t.YNc(9,w,1,0,"button",8),t.YNc(10,a,1,0,"button",9),t.YNc(11,s,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return e.onMessageClose()}),t.qZA()),2&n&&(t.xp6(3),t.hij(" ",e.pageTitle,""),t.xp6(2),t.Q6J("ngIf",e.onSubmit&&e.docAccSubmit),t.xp6(1),t.Q6J("ngIf",e.onGrid&&e.docAccGridView),t.xp6(1),t.Q6J("ngIf",e.onAddNew&&e.docAccAddNew),t.xp6(1),t.Q6J("ngIf",e.onClear&&e.docAccClear),t.xp6(1),t.Q6J("ngIf",e.onEdit&&e.docAccEdit),t.xp6(1),t.Q6J("ngIf",e.onSaveApprove),t.xp6(1),t.Q6J("ngIf",e.onSavePrint))},dependencies:[f.O5,h.Hq,g.FN]}),l})()}}]);