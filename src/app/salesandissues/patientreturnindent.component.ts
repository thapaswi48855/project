import { Component, ViewChild, inject } from '@angular/core';
import { SavingComponent } from '../directives/saving.component';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-patientreturnindent',
  templateUrl: './patientreturnindent.component.html',
  styleUrls: ['./patientreturnindent.component.css']
})
export class PatientreturnindentComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Patient Return Indent';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;
  public isEditable:boolean=false;
  public redirectToGrid:boolean=false;
  public pageMode:string="NEW";

  public patientreturnIndent:any={
    "mrNo":"",
    "name":"",
    "age":"",
    "visitNo":"",
    "dept":"",
    "doctor":"",
    "ratePlan":"",
    "raisedBy":"",
    "indentStore":"",
    "status":"",
    "expectedDate":null,
    "remarks":"",
    "dispenseStatus":"",
    "priortity":"",
    "priscriptionDoctor":""
  }
  public statusTypeList=[];
  public gridCols=[];
  public newItemList=[];

  public name="";
public countries =[{name:'india',value:'1'},
{name:'asia',value:'2'}];

  public _service=inject(MasterserviceService)

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }
    
    this.gridCols = this._service.getGridColumns('newItemCols');
console.log('gridCols',this.gridCols)
    this._service.serGetDataobject('getNewItem', {}).subscribe((dt: any) => {
      console.log(dt);
      this.newItemList = dt.data;
    });
  }


  onSaveClick(){
    let savingJson = this.patientreturnIndent;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson(this.pageTitle, 'insertPatientIndentMaster', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }

  onClearClick(){}
}
