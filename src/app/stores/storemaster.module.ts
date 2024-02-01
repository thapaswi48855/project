import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoremasterComponent } from './storemaster.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:StoremasterComponent}
]

@NgModule({
  declarations: [
    StoremasterComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StoremasterModule { }
