import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisepatientindentComponent } from './raisepatientindent.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:RaisepatientindentComponent}
]

@NgModule({
  declarations: [
    RaisepatientindentComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class RaisepatientindentModule { }
