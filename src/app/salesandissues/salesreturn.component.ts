import { Component, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';

@Component({
  selector: 'app-salesreturn',
  templateUrl: './salesreturn.component.html',
  styleUrls: ['./salesreturn.component.css'],
})
export class SalesreturnComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageTitle = 'Sales Return';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;
  public redirectToGrid: boolean = false;

  public isEditable: boolean = true;
  public pageMode:string="NEW"

  public salesreturn: any = {
    patientType: '',
    date: null,
    store: '',
    mrNo: '',
    name: '',
    age: '',
    visitNo: '',
    dept: '',
    doctor: '',
    regdate: null,
    refferBy: '',
    bed: '',
    billedAmnt: 0.0,
    billDiscount: 0.0,
    patientAmnt: 0.0,
    patientTax: 0.0,
    grandTotal: 0.0,
    itemDiscount: 0.0,
    roundOff: 0.0,
    priClaim: 0.0,
    priClaimtax: 0.0,
    itemTotal: 0.0,
    billLevelTotal: 0.0,
    secClaim: 0.0,
    secClaimTax: 0.0,
    billType: '',
    remarks: '',
    narration: '',
  };
  public emptysalesreturn =JSON.stringify(this.salesreturn)
  public patientTypeList: any = [
    { label: 'Bill No', value: '1' },
    { label: 'Hospital Patient', value: '2' },
  ];
  public storeTypeList: any = [];
  public billTypeList: any = [];

  public gridCols = [];
  public newItemList = [];

  public _service = inject(MasterserviceService);

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.gridCols = this._service.getGridColumns('newItemCols');

    this._service.serGetDataobject('getNewItem', {}).subscribe((dt: any) => {
      console.log(dt);
      this.newItemList = dt.data;
    });
  }

  onSaveClick() {
    let savingJson = this.salesreturn;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson(this.pageTitle, 'insertSalesReturnMaster', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }

  onClearClick() {
    this.salesreturn=JSON.parse(this.emptysalesreturn)
  }

  onApplyDiscount() {}
  public itemDialogDisplay = false;
  onDialogClick() {
    this.itemDialogDisplay = true;
  }
}
