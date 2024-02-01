import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoremasterlistComponent } from './storemasterlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:StoremasterlistComponent}
]

@NgModule({
  declarations: [
    StoremasterlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StoremasterlistModule { }
