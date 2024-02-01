import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoretypemasterlistComponent } from './storetypemasterlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:StoretypemasterlistComponent}
]

@NgModule({
  declarations: [
    StoretypemasterlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StoretypemasterlistModule { }
