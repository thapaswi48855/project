"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[3468],{3468:(T,l,t)=>{t.r(l),t.d(l,{GenericdetailslistModule:()=>D});var p=t(6814),d=t(5861),e=t(4946),c=t(6819),m=t(5219),u=t(6113),h=t(7338),v=t(7934);const G=function(){return{width:"100%",height:" calc(100vh - 150px)"}};let f=(()=>{var n;class r{constructor(i){this._service=i,this.mastersGridColumns="genericDetailsGridColumns",this.masterGridData="getGenericDetails",this.paramKey=["_id"],this.showEdit=!0,this.showView=!0,this.pageTitle="Module List",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[{reportName:"cancel",iconClass:"pi pi-times-circle"}],this.confirmationService=(0,e.f3M)(m.YP)}ngOnInit(){var i=this;return(0,d.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData())})()}onPrintClick(i){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{i.status="C",this._service.onSaveJson("Generic Details","insertGenericDetails",[i])},reject:()=>{}})}}return(n=r).\u0275fac=function(i){return new(i||n)(e.Y36(u.f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-genericdetailslist"]],viewQuery:function(i,s){if(1&i&&e.Gf(c.J,5),2&i){let a;e.iGM(a=e.CRH())&&(s.gridView=a.first)}},decls:8,vars:12,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"div-padding"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","printOptions","actionOptions","printClick"],["grid",""]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"app-header",1,2),e.qZA(),e.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"app-gridview",4,5),e.NdJ("printClick",function(O){return s.onPrintClick(O)}),e.qZA()()()()),2&i&&(e.xp6(2),e.Q6J("pageTitle",s.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),e.xp6(3),e.Akn(e.DdM(11,G)),e.xp6(1),e.Q6J("mastersGridColumns",s.mastersGridColumns)("masterGridData",s.masterGridData)("paramKey",s.paramKey)("printOptions",s.printOptions)("actionOptions",s.actionOptions))},dependencies:[h.P,v.G,c.J]}),r})();var C=t(7664),g=t(8032);const y=[{path:"",component:f}];let D=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,g.u,C.Bz.forChild(y)]}),r})()}}]);