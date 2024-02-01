import { Component, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../directives/header.component';
import { SavingComponent } from '../directives/saving.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving: SavingComponent;

  public pageMode: string = 'NEW';

  public pageTitle = 'Sales';
  public onSubmit: boolean = true;
  public onClear: boolean = true;
  public onEdit: boolean = false;
  public onView: boolean = false;
  public redirectToGrid: boolean = false;

  public isEditable: boolean = true;

  public sales: any = {
    patientType: '2',
    date: null,
    store: '',
    mrNo: '112222',
    name: '',
    age: '',
    visitNo: '',
    dept: '',
    doctor: '',
    regdate: null,
    refferBy: '',
    sponsor: '',
    mobileNo: '',
    ipCreditLimit: '',
    govtIdproof: '',
    govtIdProofNo: '',
    bed: '',
    discountPlan: '',
    itemDiscounts: '',
    discountAuth: '',
    billDiscountAp: '',
    roundOffs: '',
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
    patientItems:[]
  };
  public patientTypeList: any = [
    { label: 'Retail', value: '1' },
    { label: 'Retail Credit', value: '2' },
    { label: 'Hospital Patient', value: '3' },
  ];
  public storeTypeList: any = [];
  public billTypeList: any = [];
  public gridCols = [];
  public newItemList: any = [];
  public zeroLevelEntity: any = [];
  public filteredOptions: any = [];
  public saleUomList:any =[];

  public _service = inject(MasterserviceService);
  public _messageService= inject(MessageService)
  // public _messageService: MessageService
  // public countries:any=[];
  public name = '';
  public countries = [
    { name: 'india', value: '1' },
    { name: 'asia', value: '2' },
  ];
  public poDiscountTypeList: any = [];
  public errorMsgs:any={
    nameReq:'',
    doctorReq:'',
    mobileNoReq:''
  }

  onGetErrorMsgs(ctrl: any, showToast: any) {
    switch (ctrl) {
      case 'name':
        this.errorMsgs.nameReq =
          this.sales[ctrl] == '' ||
          this.sales[ctrl] == undefined ||
          this.sales[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Name')
            : '';
        break;
        case 'doctor':
        this.errorMsgs.doctorReq =
          this.sales[ctrl] == '' ||
          this.sales[ctrl] == undefined ||
          this.sales[ctrl] == null
            ? this._service.onGetErrorMsgs(ctrl, true, 'Doctor')
            : '';
        break;
        case 'mobileNo':
          this.errorMsgs.mobileNoReq =
            this.sales[ctrl] == '' ||
            this.sales[ctrl] == undefined ||
            this.sales[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Mobile no.')
              : '';
          break;
          case 'itemName':
          this.errorMsgs.itemNameReq =
            this.itemDetails[ctrl] == '' ||
            this.itemDetails[ctrl] == undefined ||
            this.itemDetails[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Item Name')
              : '';
          break;
          case 'cgst':
          this.errorMsgs.cgstReq =
            this.itemDetails[ctrl] == '' ||
            this.itemDetails[ctrl] == undefined ||
            this.itemDetails[ctrl] == null
              ? this._service.onGetErrorMsgs(ctrl, true, 'Cgst')
              : '';
          break;
          case 'sgst':
            this.errorMsgs.sgstReq =
              this.itemDetails[ctrl] == '' ||
              this.itemDetails[ctrl] == undefined ||
              this.itemDetails[ctrl] == null
                ? this._service.onGetErrorMsgs(ctrl, true, 'Sgst')
                : '';
            break;
            case 'saleQty':
            this.errorMsgs.saleQtyReq =
              this.itemDetails[ctrl] == '' ||
              this.itemDetails[ctrl] == undefined ||
              this.itemDetails[ctrl] == null
                ? this._service.onGetErrorMsgs(ctrl, true, 'Sale Qty')
                : '';
            break;
            case 'saleUom':
              this.errorMsgs.saleUomReq =
                this.itemDetails[ctrl] == '' ||
                this.itemDetails[ctrl] == undefined ||
                this.itemDetails[ctrl] == null
                  ? this._service.onGetErrorMsgs(ctrl, true, 'Sale Uom')
                  : '';
              break;
    }
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this.gridCols = this._service.getGridColumns('newItemCols');

    // this._service.serGetDataobject('getNewItem', {}).subscribe((dt: any) => {
    //   console.log(dt);
    //   this.newItemList = dt.data;
    // });
    this._service.serGetDataobject('getStockEntryMaster', {}).subscribe((dt: any) => {
      console.log(dt);
      this.newItemList = dt.data[10].seletedItemList;
      // _.forEach(this.newItemList, (item, ind) => {
      //   item['selected'] = false;
      // });
    });
    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLPoDT' })
      .subscribe((dt: any) => {
        this.poDiscountTypeList = dt.data[0].subMasterData;
      });
    this._service
      .serGetDataobject('getTaxSubGroup', { status: 'ZLS11' })
      .subscribe((dt: any) => {
        this.taxSubGrpList = dt.data;
        this.cgstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList);
        this.sgstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList);
        this.igstList = this.taxSubGrpList; //_.filter(this.taxSubGrpList)
      });

    this._service
      .serGetDataobject('getGeneralMaster', { masterid: 'ZLTGT1' })
      .subscribe((dt: any) => {
        this.taxGrpTypeList = dt.data[0].subMasterData;
      });
  }
  onApplyDiscount() {}

  onSaveClick() {
    let objectstore = ['name', 'doctor','mobileNo'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    let errorExist = this._service.showErr(this.errorMsgs);
    // if (errorExist) {
    //   this._messageService.add({
    //     sticky: true,
    //     severity: 'warn',
    //     summary: 'Warn',
    //     detail: 'Please Check the below Errors',
    //   });
    //   return;
    // }

this.sales.patientItems=this.newItemsList ;
    let savingJson = this.sales;
    let Date = this._service.getDate();
    console.log('Date', this._service.getDate());

    this.saving.onSaveJson(this.pageTitle, 'insertSalesMaster', [savingJson]);
    this.onClearClick();
    this.redirectToGrid = this.pageMode == 'NEW' ? false : true;
  }

  onClearClick() {}
  public itemDialogDisplay = false;
  onDialogClick() {
    this.itemDialogDisplay = true;
  }
  public visible: any = false;
  public taxSubGrpList: any = [];
  public cgstList: any = [];
  public sgstList: any = [];
  public igstList: any = [];
  public taxGrpTypeList: any = [];
  public itemDetails: any = {
    itemName: '',
    batch: '',
    expiry: '',
    store: '',
    pckSize: '',
    pckUOM: '',
    unitUOM: '',
    mrp: '',
    adjMrp: '',
    rate: '',
    qty: 0,
    bouns: 0,
    discountPer: '',
    discount: 0,
    disAmt: 0,
    schDiscountPer: '',
    schDiscount: 0,
    status: '',
    remarks: '',
    taxBasis: 'ZLTGT11',
    taxRate: 0,
    taxAmt: 0,
    cgst: '',
    sgst: '',
    igst: '',
    cgstTaxRate: '',
    sgstTaxRte: '',
  };
  public emptyItemDetails = JSON.stringify(this.itemDetails);
  public newItemsList: any = [];
  onItemClick(itemsD: any) {
    itemsD['disRate'] = parseFloat(itemsD.rate) - parseFloat(itemsD.discount);
    this.newItemsList.push(itemsD);
    this.sales.totalcgst = 0;
    this.sales.totalsgst = 0;
    this.sales.tataltaxAmt = 0;
    this.sales.itemDiscount = 0;
    this.sales.billedAmnt = 0;
    this.sales.sgsttaxrate = 0;
    this.sales.cgsttaxRate = 0;

    _.forEach(this.newItemsList, (item, ind) => {
      item['itemId'] = ind + 1;
      this.sales.totalcgst += item.cgsttaxAmt;
      this.sales.totalsgst += item.sgsttaxAmt;
      this.sales.tataltaxAmt += item.taxAmt;
      this.sales.itemDiscount += parseFloat(item.discount);
      this.sales.billedAmnt += parseFloat(item.disRate);
      this.sales.sgsttaxrate += item.sgsttaxrate;
      this.sales.cgsttaxRate += item.cgsttaxRate;
    });

    this.itemDetails = JSON.parse(this.emptyItemDetails);
    this.sales.patientAmnt = this.sales.billedAmnt;
    this.sales.grandTotal = this.sales.billedAmnt + this.sales.tataltaxAmt;
  }
  onItemClicks() {
    this.visible = true;
  }
  onEditSelect(row: any) {}
  onInvDisAmt(poValue: any) {
    this.sales.poDiscontAmount = 0;
    console.log('poValue', poValue);
    if (poValue == 'ZLPoDT1') {
      this.sales.InvDiscountValue =
        parseFloat(this.sales.billedAmnt) *
        (parseFloat(this.sales.InvDiscountValue) / 100);
      this.sales.InvDiscontAmount = this.sales.InvDiscountValue;
      this.sales.InvTotal =
        parseFloat(this.sales.billedAmnt) -
        parseFloat(this.sales.InvDiscountValue);
    } else {
      this.sales.InvDiscontAmount = this.sales.InvDiscountValue;
      this.sales.InvTotal =
        parseFloat(this.sales.billedAmnt) -
        parseFloat(this.sales.InvDiscontAmount);
    }
    this.sales.billDiscount = parseFloat(this.sales.InvDiscontAmount);
    this.sales.patientAmnt = this.sales.billedAmnt - this.sales.billDiscount;
    this.sales.grandTotal = this.sales.patientAmnt + this.sales.tataltaxAmt;
  }
  onCgstTaxAmt(cgst: any) {
    let cgstAmt = _.filter(this.cgstList, { _id: cgst });
    if (this.itemDetails.cgstTaxRate != '') {
      this.itemDetails.taxRate -= this.itemDetails.cgstTaxRate;
    }
    this.itemDetails.cgstTaxRate = parseFloat(cgstAmt[0].taxrate);
    this.itemDetails.taxRate += this.itemDetails.cgstTaxRate;
  }
  onSgstTaxAmt(sgst: any) {
    let sgstAmt = _.filter(this.cgstList, { _id: sgst });
    if (this.itemDetails.sgstTaxRte != '') {
      this.itemDetails.taxRate -= this.itemDetails.sgstTaxRte;
    }
    this.itemDetails.sgstTaxRte = parseFloat(sgstAmt[0].taxrate);
    this.itemDetails.taxRate += this.itemDetails.sgstTaxRte;
  }
  onChangeMrpAmt(mrp: any) {
    this.itemDetails.adjMrp =
      this.itemDetails.mrp - mrp * (this.itemDetails.taxRate / 100);
  }
  // onDiscountAmt(discount: any) {
  //   this.itemDetails.taxAmt = discount / 100;
  //   this.itemDetails.disAmt = -(parseFloat(discount) + discount / 100);
  // }
  // onRateWiseTaxAmt(qty: any) {

  //   this.itemDetails.taxRate= this.itemDetails.sgstTaxRte +  this.itemDetails.cgstTaxRate ;

  //   this.itemDetails.adjMrp=parseFloat(this.itemDetails.mrp) - (parseFloat(this.itemDetails.mrp) *this.itemDetails.taxRate/100) ;

  //   this.itemDetails.taxAmt=parseFloat(this.itemDetails.rate) *this.itemDetails.taxRate/100 ;
  //   this.itemDetails.cgsttaxAmt=parseFloat(this.itemDetails.rate) * this.itemDetails.cgstTaxRate/100;
  //   this.itemDetails.sgsttaxAmt=parseFloat(this.itemDetails.rate) * this.itemDetails.sgstTaxRte /100 ;

  // }

  public itemName: any = '';
  public itemDet:any ='';
  onLoopUp(event: any) {
    this.itemDet=event;
    console.log('onLoopUp', event);
    this.itemName = event.itemName;
    this.itemDetails.pckUOM = event.packageUOM;
    this.itemDetails.unitUOM = event.unitUOM;
    this.itemDetails.pckSize = event.packageSize;
    this.itemDetails.manufacture = event.manufacture;
    this.itemDetails.stock = event.stock;
    this.itemDetails.allStoreStock = event.allStoreStock;
  }

  onRateWiseTaxAmt(qty: any) {
    if (this.itemDetails.disAmt !== '') {
      this.itemDetails.taxAmt =
        ((parseFloat(this.itemDetails.rate) * parseFloat(qty) -
          (parseFloat(this.itemDetails.disAmt) +
            parseFloat(this.itemDetails.schDiscount))) *
          this.itemDetails.taxRate) /
        100;
    }
    this.itemDetails.cgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.cgstTaxRate) / 100;
    this.itemDetails.sgsttaxAmt =
      (parseFloat(this.itemDetails.rate) * this.itemDetails.sgstTaxRte) / 100;
  }

  onDiscountAmt(discount: any) {
    if (
      this.itemDetails.rate != '' &&
      this.itemDetails.qty != '' &&
      this.itemDetails.discountPer != ''
    ) {
      this.itemDetails.disAmt =
        (parseFloat(this.itemDetails.rate) *
          parseFloat(this.itemDetails.qty) *
          parseFloat(discount)) /
        100;
    } else {
      this.itemDetails.disAmt = 0;
    }
  }
  onSchDiscountAmt(schDis: any) {
    if (
      this.itemDetails.rate != '' &&
      this.itemDetails.qty != '' &&
      this.itemDetails.schDiscountPer != ''
    ) {
      this.itemDetails.disAmt =
        (parseFloat(this.itemDetails.rate) *
          parseFloat(this.itemDetails.qty) *
          parseFloat(schDis)) /
        100;
    } else {
      this.itemDetails.schDiscount = 0;
    }
  }
  onDisPer(Amt: any) {
    if (this.itemDetails.disAmt !== '') {
      this.itemDetails.discountPer =
        (parseFloat(this.itemDetails.disAmt) /
          parseFloat(this.itemDetails.rate)) *
        100;
    } else {
      this.itemDetails.discountPer = '';
      this.itemDetails.disAmt = 0;
    }
  }

  onSchDisPer(Amt: any) {
    if (this.itemDetails.schDiscount !== '') {
      this.itemDetails.schDiscountPer =
        (parseFloat(this.itemDetails.schDiscount) /
          parseFloat(this.itemDetails.rate)) *
        100;
    } else {
      this.itemDetails.schDiscountPer = '';
      this.itemDetails.schDiscount = 0;
    }
  }

  onAddItemClick(item: any) {


    let objectstore = ['itemName','cgst','sgst','saleQty','saleUom'];
    _.forEach(objectstore, (ctrl) => {
      this.onGetErrorMsgs(ctrl, true);
    });

    console.log('newItemList', this.newItemList);

    let errorExist = this._service.showErr(this.errorMsgs);
    // if (errorExist) {
    //   this._messageService.add({
    //     sticky: true,
    //     severity: 'warn',
    //     summary: 'Warn',
    //     detail: 'Please Check the below Errors',
    //   });
    //   return;
    // }

    // item.itemName = this.itemName;i
  
    // item.totalAmt =
    //   parseFloat(item.rate) -
    //   parseFloat(item.disAmt);
    this.itemDetails.itemName = this.itemName;
    this.itemDetails=this.itemDet ;
    if (item['rowInd'] == undefined) {
      this.newItemsList.push(this.itemDetails);
    } else {
      this.newItemsList['rowInd'] = item;
    }

    this.sales.billedAmnt = 0;
    this.sales.billDiscount = 0;
    this.sales.patientAmnt = 0;
    this.sales.tataltaxAmt = 0;
    this.sales.grandTotal = 0;
    this.sales.itemDiscount = 0;
    this.sales.priClaim = 0;
    this.sales.priClaimtax = 0;
    this.sales.itemTotal = 0;
    this.sales.billLevelTotal = 0;
    this.sales.secClaim = 0;
    this.sales.secClaimTax = 0;

    _.forEach(this.newItemsList, (item, ind) => {
      this.sales.billedAmnt += parseFloat(item.rate) ;
      this.sales.billDiscount += item.disAmt ;
      this.sales.patientAmnt += parseFloat(item.rate) + parseFloat(item.taxAmt) ;
      this.sales.tataltaxAmt += item.taxAmt ;
      this.sales.grandTotal += parseFloat(item.rate) + parseFloat(item.taxAmt) ;
      // this.sales.itemDiscount += item. ;
      // this.sales.priClaim += item. ;
      // this.sales.priClaimtax +=  item. 
      // this.sales.itemTotal += item. ;
      // this.sales.billLevelTotal += item. ;
      // this.sales.secClaim += item. ;
      // this.sales.secClaimTax += item. ;
    });
  }
}
