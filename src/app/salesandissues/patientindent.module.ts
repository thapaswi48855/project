import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientindentComponent } from './patientindent.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PatientindentComponent}
]

@NgModule({
  declarations: [
    PatientindentComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientindentModule { }
