"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[9734],{7934:(S,C,r)=>{r.d(C,{G:()=>a});var g=r(5861),t=r(4946),c=r(7664),e=r(6113),v=r(5219),f=r(6814),h=r(707),T=r(4104);function A(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onSaveClick())}),t.qZA()}}function b(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onGridClick())}),t.qZA()}}function Z(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onAddNewClick())}),t.qZA()}}function k(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onClearClick())}),t.qZA()}}function s(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onEditClick())}),t.qZA()}}function u(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onSaveApproveClick())}),t.qZA()}}function d(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onSavePrintClick())}),t.qZA()}}let a=(()=>{var i;class p{constructor(l,o,_,m){this._router=l,this._service=o,this._activatedRoute=_,this._messageService=m,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new t.vpe,this.addNewClick=new t.vpe,this.clearClick=new t.vpe,this.editClick=new t.vpe,this.viewClick=new t.vpe,this.submitClick=new t.vpe,this.saveApproveClick=new t.vpe,this.savePrintClick=new t.vpe,this.routerAddNew="",this.routerGridView="",this.gridCols=[],this.mastersGridColumns=[],this.gridData=[],this.exportColumns=[]}ngOnInit(){var l=this;return(0,g.Z)(function*(){0==Object.keys(l._service.appConfig).length&&(yield l._service.getConfigData()),console.log(l),l._activatedRoute.paramMap.subscribe(function(){var o=(0,g.Z)(function*(_){let m=_.get("params");if(null!=m&&null!=m){let M=JSON.parse(atob(m)),y=l._service.getDocPermissions(M).subscribe(J=>{y=J.data[0],l.permissions(M,y)})}else l._router.navigate(["/home"],{relativeTo:l._activatedRoute})});return function(_){return o.apply(this,arguments)}}())})()}permissions(l,o){console.log("aaa",l),null!=l&&null!=l&&(this.pageTitle=o.documentname,this.docAccSubmit=o.docAccSubmit,this.docAccGridView=o.docAccGridView,this.docAccAddNew=o.docAccAddNew,this.docAccClear=o.docAccClear,this.docAccEdit=o.docAccEdit,this.docAccView=o.docAccView,this.docAccExport=o.docAccExport,this.routerAddNew=`/home/${o.documentpageurl}`,this.routerGridView=`/home/${o.documentgridUrl}`,this.docParams=l,this.docAccPer=o)}onGridClick(){this.gridClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:l}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let l=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:l}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){}}return(i=p).\u0275fac=function(l){return new(l||i)(t.Y36(c.F0),t.Y36(e.f),t.Y36(c.gz),t.Y36(v.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-image","linear-gradient(to bottom right , var(--primary-50),var(--primary-100))"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"text-primary",2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",3,"click"],["pButton","","pRipple","","label","GridView",3,"click"],["pButton","","pRipple","","label","Add New",3,"click"],["pButton","","pRipple","","label","Clear",3,"click"],["pButton","","pRipple","","label","Edit",3,"click"],["pButton","","pRipple","","label","Save & Approve",3,"click"],["pButton","","pRipple","","label","Save & Print",3,"click"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,A,1,0,"button",4),t.YNc(6,b,1,0,"button",5),t.YNc(7,Z,1,0,"button",6),t.YNc(8,k,1,0,"button",7),t.YNc(9,s,1,0,"button",8),t.YNc(10,u,1,0,"button",9),t.YNc(11,d,1,0,"button",10),t.qZA()(),t.TgZ(12,"p-toast",11),t.NdJ("onClose",function(){return o.onMessageClose()}),t.qZA()),2&l&&(t.xp6(3),t.hij(" ",o.pageTitle,""),t.xp6(2),t.Q6J("ngIf",o.onSubmit&&o.docAccSubmit),t.xp6(1),t.Q6J("ngIf",o.onGrid&&o.docAccGridView),t.xp6(1),t.Q6J("ngIf",o.onAddNew&&o.docAccAddNew),t.xp6(1),t.Q6J("ngIf",o.onClear&&o.docAccClear),t.xp6(1),t.Q6J("ngIf",o.onEdit&&o.docAccEdit),t.xp6(1),t.Q6J("ngIf",o.onSaveApprove),t.xp6(1),t.Q6J("ngIf",o.onSavePrint))},dependencies:[f.O5,h.Hq,T.FN]}),p})()},9734:(S,C,r)=>{r.r(C),r.d(C,{StoresitemModule:()=>k});var g=r(6814),t=r(5861),c=r(7934),e=r(4946),v=r(6113),f=r(7791),h=r(8911);let T=(()=>{var s;class u{constructor(a){this._service=a,this.pageTitle="Type",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.storeitems={type:"",desc:"",selected:!0},this.emptyStoreitems=JSON.stringify(this.storeitems)}ngOnInit(){var a=this;return(0,t.Z)(function*(){0==Object.keys(a._service.appConfig).length&&(yield a._service.getConfigData())})()}onGridClick(){}onSaveClick(){console.log(this.storeitems),this._service.onSaveJson(this.pageTitle,"Store",{})}onClearClick(){this.storeitems=JSON.parse(this.emptyStoreitems)}}return(s=u).\u0275fac=function(a){return new(a||s)(e.Y36(v.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-storesitem"]],viewQuery:function(a,i){if(1&a&&e.Gf(c.G,5),2&a){let p;e.iGM(p=e.CRH())&&(i.header=p.first)}},decls:83,vars:24,consts:[[1,"d-flex","flex-column","h-100","overflow-hidden","p-2"],[3,"pageTitle","onSubmit","onGrid","onAddNew","gridClick","submitClick","clearClick"],["headers",""],[1,"flex-fill","border","p-2","overflow-auto"],[1,"row","m-2"],[1,"flex","justify-content-center","col-12"],["legend","Item Details",3,"toggleable"],[1,"formgrid","grid"],[1,"field","col-12","md:col-6","sm:col-6","lg:col-6","xl:col-6"],["for","firstname2"],[3,"inputModel","inputModelChange"],[1,"flex","justify-content-center","col-4","p-2"],["legend","Header",3,"toggleable"],[1,"flex","justify-content-center","col-6"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),e.NdJ("gridClick",function(){return i.onGridClick()})("submitClick",function(){return i.onSaveClick()})("clearClick",function(){return i.onClearClick()}),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"p-fieldset",6)(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(13,"div",8)(14,"label",9),e._uU(15,"Type"),e.qZA(),e.TgZ(16,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(17,"div",8)(18,"label",9),e._uU(19,"Type"),e.qZA(),e.TgZ(20,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(21,"div",8)(22,"label",9),e._uU(23,"Type"),e.qZA(),e.TgZ(24,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()()()()(),e.TgZ(25,"div",11)(26,"p-fieldset",12)(27,"div",7)(28,"div",8)(29,"label",9),e._uU(30,"Type"),e.qZA(),e.TgZ(31,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(32,"div",8)(33,"label",9),e._uU(34,"Type"),e.qZA(),e.TgZ(35,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(36,"div",8)(37,"label",9),e._uU(38,"Type"),e.qZA(),e.TgZ(39,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(40,"div",8)(41,"label",9),e._uU(42,"Type"),e.qZA(),e.TgZ(43,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()()()()()(),e.TgZ(44,"div",4)(45,"div",13)(46,"p-fieldset",12)(47,"div",7)(48,"div",8)(49,"label",9),e._uU(50,"Type"),e.qZA(),e.TgZ(51,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(52,"div",8)(53,"label",9),e._uU(54,"Type"),e.qZA(),e.TgZ(55,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(56,"div",8)(57,"label",9),e._uU(58,"Type"),e.qZA(),e.TgZ(59,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(60,"div",8)(61,"label",9),e._uU(62,"Type"),e.qZA(),e.TgZ(63,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()()()()(),e.TgZ(64,"div",11)(65,"p-fieldset",12)(66,"div",7)(67,"div",8)(68,"label",9),e._uU(69,"Type"),e.qZA(),e.TgZ(70,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(71,"div",8)(72,"label",9),e._uU(73,"Type"),e.qZA(),e.TgZ(74,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(75,"div",8)(76,"label",9),e._uU(77,"Type"),e.qZA(),e.TgZ(78,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()(),e.TgZ(79,"div",8)(80,"label",9),e._uU(81,"Type"),e.qZA(),e.TgZ(82,"app-inputtext",10),e.NdJ("inputModelChange",function(n){return i.storeitems.type=n}),e.qZA()()()()()()()()),2&a&&(e.xp6(2),e.Q6J("pageTitle",i.pageTitle)("onSubmit",i.onSubmit)("onGrid",i.onGrid)("onAddNew",i.onAddNew),e.xp6(5),e.Q6J("toggleable",!0),e.xp6(5),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(5),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(3),e.Q6J("toggleable",!0),e.xp6(5),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(2),e.Q6J("toggleable",!0),e.xp6(5),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type),e.xp6(4),e.Q6J("inputModel",i.storeitems.type))},dependencies:[f.p,h.G,c.G]}),u})();var A=r(7664),b=r(8032);const Z=[{path:"",component:T}];let k=(()=>{var s;class u{}return(s=u).\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,b.u,A.Bz.forChild(Z)]}),u})()}}]);