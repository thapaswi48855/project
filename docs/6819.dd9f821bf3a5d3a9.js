"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[6819],{6819:(F,C,c)=>{c.d(C,{J:()=>B});var f=c(5861),t=c(4946),d=c(6990),v=c(6113),g=c(7664),h=c(6814),T=c(5219),p=c(9232);function b(i,s){1&i&&(t.TgZ(0,"span",9),t._uU(1," Actions "),t.qZA())}function A(i,s){if(1&i&&(t.TgZ(0,"th",7),t._uU(1," Action "),t.YNc(2,b,2,0,"span",8),t.qZA()),2&i){const n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",n.mobileState)}}function O(i,s){if(1&i&&(t.TgZ(0,"th",10),t._UZ(1,"p-columnFilter",11),t._uU(2),t._UZ(3,"p-sortIcon",12),t.qZA()),2&i){const n=s.$implicit;t.Q6J("pSortableColumn",n.field)("ngStyle",n.style),t.xp6(1),t.Q6J("field",n.field),t.xp6(1),t.hij(" ",n.header," "),t.xp6(1),t.Q6J("field",n.field)}}function E(i,s){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,A,3,1,"th",5),t.YNc(2,O,4,5,"th",6),t.qZA()),2&i){const n=s.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.printOptions.length>0||e.actionOptions.length>0),t.xp6(1),t.Q6J("ngForOf",n)}}function G(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onActionClick(a,o.reportName))}),t._UZ(1,"i"),t.qZA()}if(2&i){const n=t.oxw().$implicit;t.xp6(1),t.Tol(n.iconClass)}}function k(i,s){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,G,2,3,"a",17),t.qZA()),2&i){const n=s.$implicit,e=t.oxw(2).$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.showActionOptions(n,e))}}function N(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,a=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.onPrintClick(a,o.reportName))}),t._UZ(1,"i"),t.qZA()}if(2&i){const n=t.oxw().$implicit;t.xp6(1),t.Tol(n.iconClass)}}function Z(i,s){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,N,2,3,"a",17),t.qZA()),2&i){const n=s.$implicit,e=t.oxw(2).$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.showPrintOptions(n,e))}}function y(i,s){if(1&i&&(t.TgZ(0,"td",16),t.YNc(1,k,2,1,"span",15),t.YNc(2,Z,2,1,"span",15),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.actionOptions),t.xp6(1),t.Q6J("ngForOf",n.printOptions)}}function D(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a")(1,"i",22),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.onCheckBox(o,"EDIT"))}),t.qZA()()}}function I(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a")(1,"i",23),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.onCheckBox(o,"VIEW"))}),t.qZA()()}}function J(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a")(1,"i",24),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.onCancelClick(o,"Cancel"))}),t.qZA()()}}function M(i,s){1&i&&(t.TgZ(0,"a",25),t._UZ(1,"span",26),t.qZA())}function $(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"a",25)(1,"p-tableCheckbox",27),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.onCheckBox(o,"check"))}),t.qZA()()}if(2&i){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",n)}}function S(i,s){if(1&i&&(t.TgZ(0,"a",25),t._UZ(1,"p-tableRadioButton",28),t.qZA()),2&i){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("value",n)}}function R(i,s){if(1&i&&(t.TgZ(0,"td",19),t.YNc(1,D,2,0,"a",20),t.YNc(2,I,2,0,"a",20),t.YNc(3,J,2,0,"a",20),t.YNc(4,M,2,0,"a",21),t.YNc(5,$,2,1,"a",21),t.YNc(6,S,2,1,"a",21),t.qZA()),2&i){const n=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",!(e.showEdit&&"C"==n.status)),t.xp6(1),t.Q6J("ngIf",e.showView),t.xp6(1),t.Q6J("ngIf",!(e.showCancel&&"C"==n.status)),t.xp6(1),t.Q6J("ngIf",e.showReOrder),t.xp6(1),t.Q6J("ngIf",e.showCheckBox),t.xp6(1),t.Q6J("ngIf",e.showRadioButton)}}const P=function(i){return[i]};function Q(i,s){if(1&i&&(t.TgZ(0,"span",30),t._uU(1),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.VKq(1,P,n.field)," ")}}function K(i,s){if(1&i&&(t.TgZ(0,"td"),t.YNc(1,Q,2,3,"span",29),t._uU(2),t.qZA()),2&i){const n=s.$implicit,e=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.mobileState),t.xp6(1),t.hij(" ",e[n.field]," ")}}function U(i,s){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,y,3,2,"td",13),t.YNc(2,R,7,6,"td",14),t.YNc(3,K,3,2,"td",15),t.qZA()),2&i){const n=s.columns,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.printOptions.length>0||e.actionOptions.length>0),t.xp6(1),t.Q6J("ngIf",!1),t.xp6(1),t.Q6J("ngForOf",n)}}function Y(i,s){if(1&i&&t._uU(0),2&i){const n=s.$implicit,e=t.oxw();t.lnq(" Showing ",n.first+1," to ",e.math.min((n.page+1)*n.rows,n.totalRecords)," of ",n.totalRecords," Records ")}}let B=(()=>{var i;class s{constructor(e,o,a){this._service=e,this._router=o,this._activateroute=a,this.mastersGridColumns="",this.masterGridData=[],this.paramKey="",this.showCheckBox=!1,this.showReOrder=!1,this.showRadioButton=!1,this.showEdit=!1,this.showView=!1,this.showCancel=!1,this.printOptions=[],this.actionOptions=[],this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.printClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.docParams={},this.docAccPer={},this.first=1,this.rows=20,this.gridCols=[],this.gridData=[],this.selectedSize="p-datatable-gridlines",this.products=[],this.exportColumns=[],this.mobileState=!1,this.viewPermission=!0,this.math=Math,this.mobileState=this._service.isMobileDevice(),this.layoutRes=this.mobileState?"stack":"scroll"}ngOnInit(){var e=this;return(0,f.Z)(function*(){0==Object.keys(e._service.appConfig).length&&(yield e._service.getConfigData()),e.mobileState=e._service.isMobileDevice(),e.layoutRes=e.mobileState?"stack":"scroll",console.log("mobileState",e.mobileState),console.log(e),e._activateroute.paramMap.subscribe(function(){var o=(0,f.Z)(function*(a){let r=a.get("params");if(null!=r&&null!=r){let l=JSON.parse(atob(r)),u=e._service.getDocPermissions(l).subscribe(_=>{u=_.data[0],e.permissions(l,u)})}else e._router.navigate(["/home"],{relativeTo:e._activateroute})});return function(a){return o.apply(this,arguments)}}()),e.sizes=[{name:"Small",class:"p-datatable-sm"},{name:"Normal",class:""},{name:"Large",class:"p-datatable-lg"}],e.gridCols=yield e._service.getGridColumns(e.mastersGridColumns),console.log(e.gridCols),e._service.serGetData(e.masterGridData).subscribe(o=>{e.gridData=o.data,d.forEach(e.gridData,(a,r)=>{a.actionOptions=JSON.parse(JSON.stringify(e.actionOptions)),a.printOptions=JSON.parse(JSON.stringify(e.printOptions))})}),e.exportColumns=e.gridCols.map(o=>({title:"Deparment",dataKey:"deparment"}))})()}permissions(e,o){null!=e&&null!=e&&(this.pageTitle=o.documentname,this.onSubmit=o.docAccSubmit,this.onGrid=o.docAccGridView,this.onAddNew=o.docAccAddNew,this.onClear=o.docAccClear,this.onEdit=o.docAccEdit,this.onView=o.docAccView,this.export=o.docAccExport,this.routerAddNew=`/home/${o.documentpageurl}`,this.routerGridView=`/home/${o.documentgridUrl}`,this.docParams=e,this.docAccPer=o)}onCheckBox(e,o){if("EDIT"==o&&(console.log(this.paramKey),console.log(e),this.viewPermission="C"!=e.status),"EDIT"!=o||"D"!=e.recordStatus){let a="";d.forEach(this.paramKey,(r,l)=>{a+=`"${r}":"${e[r]}"`}),a.length>0&&(a=`{${a}, "mode":"${o}"}`,a=btoa(a),this._router.navigate([this.routerAddNew,{param:a,params:btoa(JSON.stringify(this.docParams))}],{relativeTo:this._activateroute}))}}onCancelClick(e,o){e.reportName=o,this.printClick.emit(e),alert("gridPrint")}showActionOptions(e,o){let a=!0;if("VIEW"!=e.reportName&&"A"==o.status)return void(a=!1);let r=[];var l=!0;if(null==e.display||""==e.display)a=!0;else{let u=e.display;d.forEach(u,(_,w)=>{a=!0;let x=_.indexOf("!");if(_=_.replace("!",""),o[w]!=(_="(null)"==_?null:_)&&x<0&&(a=!1),o[w]==_&&x>=0&&(a=!1),r.push(a),"AND"==e.conditionOperator)for(var m=0;m<r.length;m++)l=l&&r[m];else if(Object.keys(u).length>1)for(m=0;m<r.length;m++)0==m&&(l=r[0]),l=l||r[m]})}return null!=e.display&&Object.keys(e.display).length>1&&(a=l),a}onActionClick(e,o){if("EDIT"!=o||"C"!=e.recordStatus){let a="";d.forEach(this.paramKey,(r,l)=>{a+=`"${r}":"${e[r]}"`}),a.length>0&&(a=`{${a}, "mode":"${o}"}`,a=btoa(a),this._router.navigate([this.routerAddNew,{param:a,params:btoa(JSON.stringify(this.docParams))}],{relativeTo:this._activateroute}))}}showPrintOptions(e,o){return!0}onPrintClick(e,o){}exportPdf(){}exportExcel(){}saveAsExcelFile(e,o){}}return(i=s).\u0275fac=function(e){return new(e||i)(t.Y36(v.f),t.Y36(g.F0),t.Y36(g.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-gridview"]],inputs:{mastersGridColumns:"mastersGridColumns",masterGridData:"masterGridData",paramKey:"paramKey",showCheckBox:"showCheckBox",showReOrder:"showReOrder",showRadioButton:"showRadioButton",showEdit:"showEdit",showView:"showView",showCancel:"showCancel",printOptions:"printOptions",actionOptions:"actionOptions",pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export"},outputs:{printClick:"printClick"},decls:5,vars:8,consts:[["styleClass","p-datatable-gridlines  p-datatable-sm pb-1","scrollHeight","flex",3,"columns","value","paginator","rows","responsive","resizableColumns","responsiveLayout","breakpoint"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["style","width: 2rem; background-color: rgb(138 138 233);color: white;text-align: center;",4,"ngIf"],["pResizableColumn","","style","background-color: rgb(138 138 233);color: white;text-align: center;",3,"pSortableColumn","ngStyle",4,"ngFor","ngForOf"],[2,"width","2rem","background-color","rgb(138 138 233)","color","white","text-align","center"],["style","width: 2rem",4,"ngIf"],[2,"width","2rem"],["pResizableColumn","",2,"background-color","rgb(138 138 233)","color","white","text-align","center",3,"pSortableColumn","ngStyle"],["type","text","display","menu",3,"field"],[3,"field"],["style","justify-content: end",4,"ngIf"],["pFrozenColumn","",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"justify-content","end"],["href","javascript:return",3,"click",4,"ngIf"],["href","javascript:return",3,"click"],["pFrozenColumn",""],[4,"ngIf"],["href","javascripct:return",4,"ngIf"],[1,"pi","pi-user-edit",3,"click"],[1,"pi","pi-user",3,"click"],[1,"pi","pi-times-circle",3,"click"],["href","javascripct:return"],["pReorderableRowHandle","",1,"pi","pi-bars"],[3,"value","click"],[3,"value"],["class","ui-column-title mobile-view-stack-header-color",4,"ngIf"],[1,"ui-column-title","mobile-view-stack-header-color"]],template:function(e,o){1&e&&(t.TgZ(0,"p-table",0,1),t.YNc(2,E,3,2,"ng-template",2),t.YNc(3,U,4,3,"ng-template",3),t.YNc(4,Y,1,3,"ng-template",4),t.qZA()),2&e&&t.Q6J("columns",o.gridCols)("value",o.gridData)("paginator",!0)("rows",25)("responsive",!0)("resizableColumns",!0)("responsiveLayout",o.layoutRes)("breakpoint","575.98px")},dependencies:[h.sg,h.O5,h.PC,T.jx,p.iA,p.lQ,p.on,p.Q7,p.fz,p.GE,p.UA,p.Mv,p.xl],styles:["[_nghost-%COMP%]     .p-datatable .p-sortable-column .p-sortable-column-icon {\n    color: white !important;\n  }\n  icon-size[_ngcontent-%COMP%]{\n    font-size: 1.5rem !important;\n  }"]}),s})()}}]);