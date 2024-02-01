import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent {

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Item';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;

  public isEditable=false;

  onSaveClick(){}

  onClearClick(){}

}
