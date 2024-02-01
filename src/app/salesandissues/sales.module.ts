import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from '../salesandissues/sales.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:SalesComponent}
]

@NgModule({
  declarations: [
    SalesComponent,
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesModule { }
