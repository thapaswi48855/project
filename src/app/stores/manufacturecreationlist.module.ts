import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturecreationlistComponent } from './manufacturecreationlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:ManufacturecreationlistComponent}
]

@NgModule({
  declarations: [
    ManufacturecreationlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ManufacturecreationlistModule { }
