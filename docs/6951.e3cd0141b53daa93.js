"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[6951],{6951:(T,d,i)=>{i.r(d),i.d(d,{AdditemcategorylistModule:()=>G});var l=i(6814),m=i(5861),t=i(4946),c=i(6819),p=i(5219),u=i(6113),g=i(7338),h=i(7934);const v=function(){return{width:"100%",height:" calc(100vh - 150px)"}};let y=(()=>{var n;class r{constructor(e){this._service=e,this.mastersGridColumns="addItemCategoryGridColumns",this.masterGridData="getAddItemCategory",this.paramKey=["_id"],this.showEdit=!0,this.showView=!0,this.pageTitle="Module List",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[{reportName:"cancel",iconClass:"pi pi-times-circle"}],this.confirmationService=(0,t.f3M)(p.YP)}ngOnInit(){var e=this;return(0,m.Z)(function*(){0==Object.keys(e._service.appConfig).length&&(yield e._service.getConfigData())})()}onPrintClick(e){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{e.status="C",this._service.onSaveJson("Add Item Category","insertAddItemCategory",[e])},reject:()=>{}})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(u.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-additemcategorylist"]],viewQuery:function(e,o){if(1&e&&t.Gf(c.J,5),2&e){let a;t.iGM(a=t.CRH())&&(o.gridView=a.first)}},decls:8,vars:12,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"div-padding"],["styleClass","custombar1"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","printOptions","actionOptions","printClick"],["grid",""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"app-header",1,2),t.qZA(),t.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"app-gridview",5,6),t.NdJ("printClick",function(O){return o.onPrintClick(O)}),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("pageTitle",o.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),t.xp6(3),t.Akn(t.DdM(11,v)),t.xp6(1),t.Q6J("mastersGridColumns",o.mastersGridColumns)("masterGridData",o.masterGridData)("paramKey",o.paramKey)("printOptions",o.printOptions)("actionOptions",o.actionOptions))},dependencies:[g.P,h.G,c.J]}),r})();var C=i(7664),f=i(8032);const A=[{path:"",component:y}];let G=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,f.u,C.Bz.forChild(A)]}),r})()}}]);