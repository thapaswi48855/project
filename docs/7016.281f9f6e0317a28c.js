"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[7016],{7016:(T,l,e)=>{e.r(l),e.d(l,{GenericclassificationdetailslistModule:()=>D});var d=e(6814),p=e(5861),i=e(4946),c=e(6819),m=e(5219),u=e(6113),f=e(7338),h=e(7934);const v=function(){return{width:"100%",height:" calc(100vh - 150px)"}};let C=(()=>{var s;class a{constructor(t){this._service=t,this.mastersGridColumns="genericClssificationDetailsGridColumns",this.masterGridData="getGenericClassificationDetails",this.paramKey=["_id"],this.showEdit=!0,this.showView=!0,this.pageTitle="Module List",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[{reportName:"cancel",iconClass:"pi pi-times-circle"}],this.confirmationService=(0,i.f3M)(m.YP)}ngOnInit(){var t=this;return(0,p.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData())})()}onPrintClick(t){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{t.status="C",this._service.onSaveJson("Generic ClassificationDetails","insertGenericClassificationDetails",[t])},reject:()=>{}})}}return(s=a).\u0275fac=function(t){return new(t||s)(i.Y36(u.f))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-genericclassificationdetailslist"]],viewQuery:function(t,n){if(1&t&&i.Gf(c.J,5),2&t){let r;i.iGM(r=i.CRH())&&(n.gridView=r.first)}},decls:8,vars:12,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"div-padding"],["styleClass","custombar1"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","printOptions","actionOptions","printClick"],["grid",""]],template:function(t,n){1&t&&(i.TgZ(0,"div",0)(1,"div"),i._UZ(2,"app-header",1,2),i.qZA(),i.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"app-gridview",5,6),i.NdJ("printClick",function(O){return n.onPrintClick(O)}),i.qZA()()()()),2&t&&(i.xp6(2),i.Q6J("pageTitle",n.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),i.xp6(3),i.Akn(i.DdM(11,v)),i.xp6(1),i.Q6J("mastersGridColumns",n.mastersGridColumns)("masterGridData",n.masterGridData)("paramKey",n.paramKey)("printOptions",n.printOptions)("actionOptions",n.actionOptions))},dependencies:[f.P,h.G,c.J]}),a})();var G=e(7664),g=e(8032);const y=[{path:"",component:C}];let D=(()=>{var s;class a{}return(s=a).\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[d.ez,g.u,G.Bz.forChild(y)]}),a})()}}]);