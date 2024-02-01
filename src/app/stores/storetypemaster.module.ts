import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoretypemasterComponent } from './storetypemaster.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:StoretypemasterComponent}
]

@NgModule({
  declarations: [
    StoretypemasterComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StoretypemasterModule { }
