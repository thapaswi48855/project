"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[8980],{7934:(J,b,r)=>{r.d(b,{G:()=>Z});var h=r(5861),t=r(4946),_=r(7664),v=r(6113),e=r(5219),k=r(6814),A=r(707),M=r(4104);function f(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onSaveClick())}),t.qZA()}}function T(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onGridClick())}),t.qZA()}}function S(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onAddNewClick())}),t.qZA()}}function x(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onClearClick())}),t.qZA()}}function w(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onEditClick())}),t.qZA()}}function E(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onSaveApproveClick())}),t.qZA()}}function N(u,C){if(1&u){const m=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(m);const n=t.oxw();return t.KtG(n.onSavePrintClick())}),t.qZA()}}let Z=(()=>{var u;class C{constructor(c,n,g,l){this._router=c,this._service=n,this._activatedRoute=g,this._messageService=l,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var c=this;return(0,h.Z)(function*(){0==Object.keys(c._service.appConfig).length&&(yield c._service.getConfigData()),console.log(c),c._activatedRoute.paramMap.subscribe(function(){var n=(0,h.Z)(function*(g){let l=g.get("params");if(null!=l&&null!=l){let a=JSON.parse(atob(l)),s=c._service.getDocPermissions(a).subscribe(o=>{s=o.data[0],c.permissions(a,s)})}else c._router.navigate(["/home"],{relativeTo:c._activatedRoute})});return function(g){return n.apply(this,arguments)}}())})()}permissions(c,n){console.log("aaa",c),null!=c&&null!=c&&(this.pageTitle=n.documentname,this.docAccSubmit=n.docAccSubmit,this.docAccGridView=n.docAccGridView,this.docAccAddNew=n.docAccAddNew,this.docAccClear=n.docAccClear,this.docAccEdit=n.docAccEdit,this.docAccView=n.docAccView,this.docAccExport=n.docAccExport,this.routerAddNew=`/home/${n.documentpageurl}`,this.routerGridView=`/home/${n.documentgridUrl}`,this.docParams=c,this.docAccPer=n)}onGridClick(){this.gridClick.emit(!0);let c=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:c}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let c=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:c}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(u=C).\u0275fac=function(c){return new(c||u)(t.Y36(_.F0),t.Y36(v.f),t.Y36(_.gz),t.Y36(e.ez))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(c,n){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,f,1,0,"button",4),t.YNc(6,T,1,0,"button",5),t.YNc(7,S,1,0,"button",6),t.YNc(8,x,1,0,"button",7),t.YNc(9,w,1,0,"button",8),t.YNc(10,E,1,0,"button",9),t.YNc(11,N,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return n.onMessageClose()}),t.qZA()),2&c&&(t.xp6(3),t.hij(" ",n.pageTitle,""),t.xp6(2),t.Q6J("ngIf",n.onSubmit&&n.docAccSubmit),t.xp6(1),t.Q6J("ngIf",n.onGrid&&n.docAccGridView),t.xp6(1),t.Q6J("ngIf",n.onAddNew&&n.docAccAddNew),t.xp6(1),t.Q6J("ngIf",n.onClear&&n.docAccClear),t.xp6(1),t.Q6J("ngIf",n.onEdit&&n.docAccEdit),t.xp6(1),t.Q6J("ngIf",n.onSaveApprove),t.xp6(1),t.Q6J("ngIf",n.onSavePrint))},dependencies:[k.O5,A.Hq,M.FN]}),C})()},8980:(J,b,r)=>{r.r(b),r.d(b,{ModuledocumentModule:()=>g});var h=r(6814),t=r(5861),_=r(6990),v=r(7934),e=r(4946),k=r(6113),A=r(5219),M=r(95),f=r(9232),T=r(8057);function S(l,a){1&l&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Modules"),e.qZA()())}function x(l,a){if(1&l){const s=e.EpF();e.TgZ(0,"tr",10)(1,"td",11)(2,"p-checkbox",12),e.NdJ("ngModelChange",function(i){const p=e.CHM(s).$implicit;return e.KtG(p.selected=i)})("click",function(){const d=e.CHM(s).$implicit,p=e.oxw();return e.KtG(p.onSelectmodule(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&l){const s=a.$implicit;e.Q6J("pSelectableRow",s),e.xp6(1),e.Q6J("ngClass",1==s.selected?"grid-selected-row":null),e.xp6(1),e.Q6J("ngModel",s.selected)("binary",!0),e.xp6(1),e.hij(" ",s.modulename," ")}}function w(l,a){1&l&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Sub Modules"),e.qZA()())}function E(l,a){if(1&l){const s=e.EpF();e.TgZ(0,"tr",10)(1,"td",11)(2,"p-checkbox",12),e.NdJ("ngModelChange",function(i){const p=e.CHM(s).$implicit;return e.KtG(p.selected=i)})("click",function(){const d=e.CHM(s).$implicit,p=e.oxw();return e.KtG(p.onSelectSubmodule(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&l){const s=a.$implicit;e.Q6J("pSelectableRow",s),e.xp6(1),e.Q6J("ngClass",1==s.selected?"grid-selected-row":null),e.xp6(1),e.Q6J("ngModel",s.selected)("binary",!0),e.xp6(1),e.AsE(" ",s.submodulename," ",s.selected," ")}}function N(l,a){if(1&l&&(e.TgZ(0,"th"),e._UZ(1,"p-columnFilter",14),e.qZA()),2&l){const s=a.$implicit;e.xp6(1),e.Q6J("field",s.field)}}function Z(l,a){if(1&l&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Documents"),e.qZA()(),e.TgZ(3,"tr"),e.YNc(4,N,2,1,"th",13),e.qZA()),2&l){const s=a.$implicit;e.xp6(4),e.Q6J("ngForOf",s)}}function u(l,a){if(1&l){const s=e.EpF();e.TgZ(0,"tr",10)(1,"td")(2,"p-checkbox",12),e.NdJ("ngModelChange",function(i){const p=e.CHM(s).$implicit;return e.KtG(p.selected=i)})("click",function(){const d=e.CHM(s).$implicit,p=e.oxw();return e.KtG(p.onSelectDocuments(d,d.selected))}),e.qZA(),e._uU(3),e.qZA()()}if(2&l){const s=a.$implicit;e.Q6J("pSelectableRow",s),e.xp6(2),e.Q6J("ngModel",s.selected)("binary",!0),e.xp6(1),e.AsE(" ",s.document," ",s.selected," ")}}let C=(()=>{var l;class a{constructor(o){this._service=o,this.pageTitle="Module",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.modulesLists=[],this.subModulesLists=[],this.documentLists=[],this.selectedModule=[],this.selectedSubModule=[],this.selectedDocuments=[],this.selectmodulesLists=[],this.filterSubmodule=[]}ngOnInit(){var o=this;return(0,t.Z)(function*(){0==Object.keys(o._service.appConfig).length&&(yield o._service.getConfigData()),o.modulesLists=o._service.serGetData("getModules").subscribe(i=>(console.log(i),o.modulesLists=i.data,_.forEach(o.modulesLists,(d,p)=>{d.selected=!1}))),o.documentLists=o._service.serGetData("documents").subscribe(i=>(console.log(i),o.documentLists=i.data,_.forEach(o.documentLists,(d,p)=>{d.selected=!1})))})()}onSelectmodule(o,i){console.log(o),console.log(i),this.subModulesLists=[],1==i&&(this.selectmodulesLists=this._service.serGetSelectedDataobject("getModuleDocuments",o).subscribe(d=>{console.log(d),this.selectmodulesLists=d.data,this.selectGetModule(o,i)}))}selectGetModule(o,i){this.selectedModule=o,this.filterSubmodule=[],this.filterSubmodule=_.filter(this.selectmodulesLists,{moduleid:o._id}),this.subModulesLists=o.submodel,_.filter(this.filterSubmodule,(d,p)=>{null==d.submoduleid&&this.onSelectSubmodule(null,!1)})}onSelectSubmodule(o,i){this.selectedSubModule=[],this.selectedSubModule=o,this.filterSubmodule.length>0&&_.filter(this.filterSubmodule,(d,p)=>{_.filter(this.documentLists,(G,L)=>{d.documentid==G._id&&(G.selected=d.documentstatus)})})}onSelectDocuments(o,i){console.log(i),o.selected=i,o.id=0,console.log(this.documentLists)}onGridClick(){}onSaveClick(){console.log(this.selectedModule),console.log(this.selectedSubModule),console.log(this.documentLists),this.selectedDocuments=_.filter(this.documentLists,{id:0});let o=[];_.forEach(this.selectedDocuments,(i,d)=>{let p=_.filter(this.selectmodulesLists,{moduleid:this.selectedModule._id,documentid:i._id});console.log(p),o.push({_id:p.length>0?p[0]._id:0,moduleid:this.selectedModule._id,modulename:this.selectedModule.modulename,submoduleid:null==this.selectedSubModule?null:this.selectedSubModule._id,submodulename:null==this.selectedSubModule?null:this.selectedSubModule.submodulename,documentid:i._id,documentname:i.document,documentstatus:i.selected,documentpageurl:i.documentpageurl,documentgridUrl:i.documentgridUrl})}),_.forEach(o,(i,d)=>{0==i._id&&delete i._id}),this._service.onSaveJson(this.pageTitle,"insertModuleDocuments",o),this.onClearClick()}onClearClick(){this.selectedModule.selected=!1,this.selectedSubModule.selected=!1,_.forEach(this.selectedDocuments,(o,i)=>{o.selected=!1})}}return(l=a).\u0275fac=function(o){return new(o||l)(e.Y36(k.f))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-moduledocument"]],viewQuery:function(o,i){if(1&o&&e.Gf(v.G,5),2&o){let d;e.iGM(d=e.CRH())&&(i.header=d.first)}},decls:20,vars:22,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","gridClick","submitClick","clearClick"],["header",""],[1,"grid"],[1,"col","p-4"],["styleClass","p-datatable-gridlines","scrollHeight","400px","selectionMode","single",3,"value","paginator","rows","responsive","resizableColumns","scrollable"],["dt",""],["pTemplate","header"],["pTemplate","body"],["styleClass","p-datatable-gridlines","scrollHeight","400px","selectionMode","multiple",3,"value","paginator","rows","responsive","resizableColumns","scrollable"],[3,"pSelectableRow"],[3,"ngClass"],["inputId","binary",3,"ngModel","binary","ngModelChange","click"],[4,"ngFor","ngForOf"],["type","text",3,"field"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("gridClick",function(){return i.onGridClick()})("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"p-table",5,6),e.YNc(8,S,3,0,"ng-template",7),e.YNc(9,x,4,5,"ng-template",8),e.qZA()(),e.TgZ(10,"div",4)(11,"p-table",5,6),e.YNc(13,w,3,0,"ng-template",7),e.YNc(14,E,4,6,"ng-template",8),e.qZA()(),e.TgZ(15,"div",4)(16,"p-table",9,6),e.YNc(18,Z,5,1,"ng-template",7),e.YNc(19,u,4,5,"ng-template",8),e.qZA()()()()),2&o&&(e.xp6(2),e.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",i.onGrid)("onAddNew",i.onAddNew),e.xp6(4),e.Q6J("value",i.modulesLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0),e.xp6(5),e.Q6J("value",i.subModulesLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0),e.xp6(5),e.Q6J("value",i.documentLists)("paginator",!1)("rows",25)("responsive",!0)("resizableColumns",!0)("scrollable",!0))},dependencies:[h.mk,h.sg,A.jx,M.JJ,M.On,f.iA,f.Ei,f.xl,T.XZ,v.G]}),a})();var m=r(7664),c=r(8032);const n=[{path:"",component:C}];let g=(()=>{var l;class a{}return(l=a).\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[h.ez,c.u,m.Bz.forChild(n)]}),a})()}}]);