"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[9094],{7934:(N,u,r)=>{r.d(u,{G:()=>l});var m=r(5861),e=r(4946),s=r(7664),a=r(6113),C=r(5219),_=r(6814),v=r(707),g=r(4104);function f(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function h(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function A(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function b(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function k(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function T(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function G(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let l=(()=>{var o;class c{constructor(i,t,p,d){this._router=i,this._service=t,this._activatedRoute=p,this._messageService=d,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var i=this;return(0,m.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData()),console.log(i),i._activatedRoute.paramMap.subscribe(function(){var t=(0,m.Z)(function*(p){let d=p.get("params");if(null!=d&&null!=d){let w=JSON.parse(atob(d)),E=i._service.getDocPermissions(w).subscribe(S=>{E=S.data[0],i.permissions(w,E)})}else i._router.navigate(["/home"],{relativeTo:i._activatedRoute})});return function(p){return t.apply(this,arguments)}}())})()}permissions(i,t){console.log("aaa",i),null!=i&&null!=i&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=i,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let i=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:i}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let i=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:i}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(o=c).\u0275fac=function(i){return new(i||o)(e.Y36(s.F0),e.Y36(a.f),e.Y36(s.gz),e.Y36(C.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,f,1,0,"button",4),e.YNc(6,h,1,0,"button",5),e.YNc(7,A,1,0,"button",6),e.YNc(8,b,1,0,"button",7),e.YNc(9,k,1,0,"button",8),e.YNc(10,T,1,0,"button",9),e.YNc(11,G,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&i&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[_.O5,v.Hq,g.FN]}),c})()},9094:(N,u,r)=>{r.r(u),r.d(u,{GeneralmastergridModule:()=>G});var m=r(6814),e=r(5861),s=r(6819),a=r(4946),C=r(6113),_=r(4104),v=r(7338),g=r(7934),f=r(1494);const h=function(){return{width:"100%",height:" calc(100vh - 150px)"}};let A=(()=>{var l;class o{constructor(n){this._service=n,this.mastersGridColumns="generalMastersGridColumns",this.masterGridData="getGeneralMaster",this.paramKey=["_id"],this.pageTitle="Master",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[{reportName:"cancel",iconClass:"pi pi-times-circle"}]}ngOnInit(){var n=this;return(0,e.Z)(function*(){0==Object.keys(n._service.appConfig).length&&(yield n._service.getConfigData())})()}}return(l=o).\u0275fac=function(n){return new(n||l)(a.Y36(C.f))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-generalmastergrid"]],viewQuery:function(n,i){if(1&n&&a.Gf(s.J,5),2&n){let t;a.iGM(t=a.CRH())&&(i.gridView=t.first)}},decls:10,vars:11,consts:[[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"div-padding"],["styleClass","custombar1"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","actionOptions"],["grid",""]],template:function(n,i){1&n&&(a.TgZ(0,"div")(1,"div"),a._UZ(2,"app-header",0,1),a.qZA(),a.TgZ(4,"div",2)(5,"p-scrollPanel",3),a._UZ(6,"app-gridview",4,5),a.qZA()()(),a._UZ(8,"p-toast")(9,"p-confirmPopup")),2&n&&(a.xp6(2),a.Q6J("pageTitle",i.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),a.xp6(3),a.Akn(a.DdM(10,h)),a.xp6(1),a.Q6J("mastersGridColumns",i.mastersGridColumns)("masterGridData",i.masterGridData)("paramKey",i.paramKey)("actionOptions",i.actionOptions))},dependencies:[_.FN,v.P,g.G,s.J,f.P],encapsulation:2}),o})();var b=r(8032),k=r(7664);const T=[{path:"",component:A}];let G=(()=>{var l;class o{}return(l=o).\u0275fac=function(n){return new(n||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[m.ez,b.u,k.Bz.forChild(T)]}),o})()}}]);