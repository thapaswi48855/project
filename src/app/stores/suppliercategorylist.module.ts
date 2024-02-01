import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliercategorylistComponent } from './suppliercategorylist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:SuppliercategorylistComponent}
]

@NgModule({
  declarations: [
    SuppliercategorylistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SuppliercategorylistModule { }
