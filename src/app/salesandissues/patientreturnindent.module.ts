import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientreturnindentComponent } from './patientreturnindent.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PatientreturnindentComponent}
]

@NgModule({
  declarations: [
    PatientreturnindentComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientreturnindentModule { }
