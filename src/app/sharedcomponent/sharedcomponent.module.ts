import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { TreeSelectModule } from 'primeng/treeselect';



// import {MenubarModule} from 'primeng/menubar'



// import {} from 'C:\New folder (2)\projects\node_modules\@fullcalendar'
  // import { FullCalendarModule } from '@fullcalendar/angular';
  // import dayGridPlugin from '@fullcalendar/daygrid';
// FullCalendarModule.registerPlugins([
//   dayGridPlugin
// ])


import {InputtextComponent} from '../directives/inputtext.component';
import {DropdownComponent} from '../directives/dropdown.component';
import {HeaderComponent} from '../directives/header.component';
import {CheckboxComponent} from '../directives/checkbox.component';
import {HomeComponent} from '../home/home.component';
import { GridviewComponent } from '../directives/gridview.component';
import { TextareaComponent } from '../directives/textarea.component';
import { LoginComponent } from '../home/login.component';
import { SavingComponent } from '../directives/saving.component';
import { DatepickerComponent } from '../directives/datepicker.component';
import { MultiselectComponent } from '../directives/multiselect.component';
import { LabelbindComponent } from '../directives/labelbind.component';
import { LookupComponent } from '../directives/lookup.component';

@NgModule({
  declarations: [InputtextComponent,DropdownComponent,HeaderComponent,CheckboxComponent,HomeComponent,GridviewComponent,TextareaComponent,
    LoginComponent,SavingComponent,DatepickerComponent,MultiselectComponent,LabelbindComponent,LookupComponent],
  imports: [CommonModule, DropdownModule,InputTextModule,FormsModule ,ReactiveFormsModule,TableModule,
    CheckboxModule,HttpClientModule,MenuModule,TabMenuModule,PaginatorModule,ScrollTopModule,TabViewModule,
    ButtonModule,AutoCompleteModule,FieldsetModule,DynamicDialogModule,TreeSelectModule,OverlayPanelModule,MegaMenuModule,PanelMenuModule,
    ToastModule,CheckboxModule,SelectButtonModule,SplitterModule,ScrollPanelModule,PanelModule,FileUploadModule,DialogModule,
    InputTextareaModule,SidebarModule,ConfirmPopupModule,RadioButtonModule,CalendarModule,MultiSelectModule],
  exports: [CommonModule, DropdownModule,InputTextModule,FormsModule ,ReactiveFormsModule,TableModule,
    CheckboxModule,HttpClientModule,MenuModule,TabMenuModule,PaginatorModule,ScrollTopModule,TabViewModule,
    ButtonModule,AutoCompleteModule,FieldsetModule,DynamicDialogModule,TreeSelectModule,OverlayPanelModule,ToastModule,CheckboxModule,
    SelectButtonModule,SplitterModule,ScrollPanelModule,PanelModule,MegaMenuModule,PanelMenuModule,InputTextareaModule,SidebarModule,
    InputtextComponent,DropdownComponent,HeaderComponent,CheckboxComponent,HomeComponent,GridviewComponent,
    TextareaComponent,LoginComponent,ConfirmPopupModule,RadioButtonModule,SavingComponent,MultiselectComponent,LabelbindComponent,LookupComponent,
    DatepickerComponent,CalendarModule,MultiSelectModule,FileUploadModule,DialogModule,TreeSelectModule],
    providers: [DialogService,MessageService,ConfirmationService]
})
export class SharedcomponentModule { }
