import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';

@Component({
  selector: 'app-duplicatesalebill',
  templateUrl: './duplicatesalebill.component.html',
  styleUrls: ['./duplicatesalebill.component.css']
})
export class DuplicatesalebillComponent {

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
