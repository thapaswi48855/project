import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../app/home/home.component';
// import { LoginComponent } from './directives/login.component';
import { ModulesComponent } from '../app/home/modules.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './directives/header.component';
import { LoginComponent } from './home/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'home',
    component: HomeComponent,
    children: [
      {path: 'newuser',loadChildren: () =>import('./security/new-user.module').then((m) => m.NewUserModule)},
      {path: 'document',loadChildren: () =>import('./security/document.module').then((m) => m.DocumentModule)},
      {path: 'documentlist',loadChildren:()=>import('./security/documentlist.module').then((m)=>m.DocumentlistModule)},
      {path: 'module',loadChildren: () =>import('./security/module.module').then((m) => m.ModuleModule)},
      {path: 'modulelist',loadChildren: () =>import('./security/modulelist.module').then((m) => m.ModulelistModule)},
      {path: 'moduledocument',loadChildren:()=>import('./security/moduledocument.module').then((m)=>m.ModuledocumentModule)},
      {path: 'assignebypermission',loadChildren: () =>import('./security/assignepermissions.module').then((m) => m.AssignepermissionsModule)},
      // {path: 'dmaster',loadChildren: () =>import('./masters/dmaster.module').then((m) => m.DmasterModule)},
      // {path: 'dmasterlist',loadChildren:()=>import('./masters/dmasterlist.module').then((m)=>m.DmasterlistModule)},
      // {path: 'drmaster',loadChildren: () =>import('./masters/drmaster.module').then((m) => m.DrmasterModule)},
      // {path: 'drmasterlist',loadChildren:()=>import('./masters/drmasterlist.module').then((m)=>m.DrmasterlistModule)},
      // {path: 'registration',loadChildren: () =>import('./registration/registrtion.module').then((m) => m.RegistrtionModule)},
      // {path: 'drcharges',loadChildren: () => import('./masters/drcharges.module').then((m) => m.DrchargesModule)},
      // {path: 'drschedule',loadChildren: () =>import('./masters/drschedule.module').then((m) => m.DrscheduleModule)},
      // {path: 'availabledrs',loadChildren:()=>import('./masters/availabledrs.module').then((m)=>m.AvailabledrsModule)},

      //Store

      {
        path: 'storetype',
        loadChildren: () =>
          import('./stores/storetypemaster.module').then(
            (m) => m.StoretypemasterModule
          ),
      },
      {
        path: 'storetypelist',
        loadChildren: () =>
          import('./stores/storetypemasterlist.module').then(
            (m) => m.StoretypemasterlistModule
          ),
      },
      {
        path: 'storemaster',
        loadChildren: () =>
          import('./stores/storemaster.module').then(
            (m) => m.StoremasterModule
          ),
      },
      {
        path: 'storemasterlist',
        loadChildren: () =>
          import('./stores/storemasterlist.module').then(
            (m) => m.StoremasterlistModule
          ),
      },
      {
        path: 'uomcreation',
        loadChildren: () =>
          import('./stores/uomcreation.module').then(
            (m) => m.UomcreationModule
          ),
      },
      {
        path: 'uomcreationlist',
        loadChildren: () =>
          import('./stores/uomcreationlist.module').then(
            (m) => m.UomcreationlistModule
          ),
      },
      {
        path: 'additemcategory',
        loadChildren: () =>
          import('./stores/additemcategory.module').then(
            (m) => m.AdditemcategoryModule
          ),
      },
      {
        path: 'additemcategorylist',
        loadChildren: () =>
          import('./stores/additemcategorylist.module').then(
            (m) => m.AdditemcategorylistModule
          ),
      },
      {
        path: 'genericclassifications',
        loadChildren: () =>
          import('./stores/genericclassificationdetails.module').then(
            (m) => m.GenericclassificationdetailsModule
          ),
      },
      {
        path: 'genericclassificationslist',
        loadChildren: () =>
          import('./stores/genericclassificationdetailslist.module').then(
            (m) => m.GenericclassificationdetailslistModule
          ),
      },
      {
        path: 'genericsubclassifications',
        loadChildren: () =>
          import('./stores/genericsubclassificationdetails.module').then(
            (m) => m.GenericsubclassificationdetailsModule
          ),
      },
      {
        path: 'genericsubclassificationslist',
        loadChildren: () =>
          import('./stores/genericsubclassificationdetailslist.module').then(
            (m) => m.GenericsubclassificationdetailslistModule
          ),
      },
      {
        path: 'genericdetails',
        loadChildren: () =>
          import('./stores/genericdetails.module').then(
            (m) => m.GenericdetailsModule
          ),
      },
      {
        path: 'genericdetailslist',
        loadChildren: () =>
          import('./stores/genericdetailslist.module').then(
            (m) => m.GenericdetailslistModule
          ),
      },
      {
        path: 'manufacturecreation',
        loadChildren: () =>
          import('./stores/manufacturecreation.module').then(
            (m) => m.ManufacturecreationModule
          ),
      },
      {
        path: 'manufacturecreationlist',
        loadChildren: () =>
          import('./stores/manufacturecreationlist.module').then(
            (m) => m.ManufacturecreationlistModule
          ),
      },
      {
        path: 'suppliercategory',
        loadChildren: () =>
          import('./stores/suppliercategory.module').then(
            (m) => m.SuppliercategoryModule
          ),
      },
      {
        path: 'suppliercategorylist',
        loadChildren: () =>
          import('./stores/suppliercategorylist.module').then(
            (m) => m.SuppliercategorylistModule
          ),
      },
      {
        path: 'supplierdetails',
        loadChildren: () =>
          import('./stores/supplierdetails.module').then(
            (m) => m.SupplierdetailsModule
          ),
      },
      {
        path: 'supplierdetailslist',
        loadChildren: () =>
          import('./stores/supplierdetailslist.module').then(
            (m) => m.SupplierdetailslistModule
          ),
      },
      {
        path: 'storesitem',
        loadChildren: () =>
          import('./stores/storesitem.module').then((m) => m.StoresitemModule),
      },
      {path:'newitem',loadChildren:()=>import('./stores/newitem.module').then((m)=>m.NewitemModule)},
      {path:'newitemlist',loadChildren:()=>import('./stores/newitemlist.module').then((m)=>m.NewitemlistModule)},
      {path:'deparment',loadChildren:()=>import('./stores/department.module').then((m)=>m.DepartmentModule)},
      {path:'departmentlist',loadChildren:()=>import('./stores/departmentlist.module').then((m)=>m.DepartmentlistModule)},
        //Procurement

      {path:'raiseparchaseorder',loadChildren:()=>import('./Procurement/raisepurchaseorder.module').then((m)=>m.RaisepurchaseorderModule)},
      {path:'raiseparchaseorderlist',loadChildren:()=>import('./Procurement/raisepurchaseorderlist.module').then((m)=>m.RaisepurchaseorderlistModule)},
      {path:'stockentry',loadChildren:()=>import('./Procurement/stockentry.module').then((m)=>m.StockentryModule)},
      {path:'stockentrylist',loadChildren:()=>import('./Procurement/stockentrylist.module').then((m)=>m.StockentrylistModule)},

      //Masters
      {path:'generalmaster',loadChildren:()=>import('./masters/generalmaster.module').then((m)=>m.GeneralmasterModule)},
      {path:'generalmastergrid',loadChildren:()=>import('./masters/generalmastergrid.module').then((m)=>m.GeneralmastergridModule)},
   
      //Sales and issues
      {path:'sales',loadChildren:()=>import('./salesandissues/sales.module').then((m)=>m.SalesModule)},
      {path:'saleslist',loadChildren:()=>import('./salesandissues/saleslist.module').then((m)=>m.SaleslistModule)},
      {path:'salesreturn',loadChildren:()=>import('./salesandissues/salesreturn.module').then((m)=>m.SalesreturnModule)},
      {path:'prescriptionlist',loadChildren:()=>import('./salesandissues/prescriptionlist.module').then((m)=>m.PrescriptionlistModule)},
      {path:'duplicatesalebill',loadChildren:()=>import('./salesandissues/duplicatesalebill.module').then((m)=>m.DuplicatesalebillModule)},
      {path:'pharmacyreceipts',loadChildren:()=>import('./salesandissues/pharmacyreceipts.module').then((m)=>m.PharmacyreceiptsModule)},
      {path:'receipt',loadChildren:()=>import('./salesandissues/receipt.module').then((m)=>m.ReceiptModule)},
      {path:'raisepatientindent',loadChildren:()=>import('./salesandissues/raisepatientindent.module').then((m)=>m.RaisepatientindentModule)},
      {path:'patientindent',loadChildren:()=>import('./salesandissues/patientindent.module').then((m)=>m.PatientindentModule)},
      {path:'patientreturnindent',loadChildren:()=>import('./salesandissues/patientreturnindent.module').then((m)=>m.PatientreturnindentModule)},
      {path:'pendingbilllist',loadChildren:()=>import('./salesandissues/pendingbilllist.module').then((m)=>m.PendingbilllistModule)},
      {path:'pendingcreditbilllist',loadChildren:()=>import('./salesandissues/pendingcreditbilllist.module').then((m)=>m.PendingcreditbilllistModule)},
      //service
      {path:'servicegroup',loadChildren:()=>import('./service/servicegroup.module').then((m)=>m.ServicegroupModule)},
      {path:'servicegrouplist',loadChildren:()=>import('./service/servicegrouplist.module').then((m)=>m.ServicegrouplistModule)},
      {path:'servicesubgroup',loadChildren:()=>import('./service/servicesubgroup.module').then((m)=>m.ServicesubgroupModule)},
      {path:'servicesubgrouplist',loadChildren:()=>import('./service/servicesubgrouplist.module').then((m)=>m.ServicesubgrouplistModule)},
      //Tax
      {path:'taxgroup',loadChildren:()=>import('./tax/taxgroup.module').then((m)=>m.TaxgroupModule)},
      {path:'taxgrouplist',loadChildren:()=>import('./tax/taxgrouplist.module').then((m)=>m.TaxgrouplistModule)},
      {path:'taxsubgroup',loadChildren:()=>import('./tax/taxsubgroup.module').then((m)=>m.TaxsubgroupModule)},
      {path:'taxsubgrouplist',loadChildren:()=>import('./tax/taxsubgrouplist.module').then((m)=>m.TaxsubgrouplistModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
