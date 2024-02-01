import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as _ from 'lodash';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css'],
})
export class GridviewComponent {
  @Input() public mastersGridColumns: any = '';
  @Input() public masterGridData: any = [];
  @Input() public paramKey: any = '';

  @Input() public showCheckBox: boolean = false;
  @Input() public showReOrder: boolean = false;
  @Input() public showRadioButton: boolean = false;
  @Input() public showEdit: boolean = false;
  @Input() public showView: boolean = false;
  @Input() public showCancel: boolean = false;
  @Input() public printOptions: any = [];
  @Input() public actionOptions:any =[];

  @Input() public pageTitle = '';
  @Input() public onSubmit = false;
  @Input() public onGrid = false;
  @Input() public onAddNew = false;
  @Input() public onClear = false;
  @Input() public onEdit = false;
  @Input() public onView = false;
  @Input() public export = false;

  @Output() public printClick = new EventEmitter();

  public routerAddNew = '';
  public routerGridView = '';
  public docParams: any = {};
  public docAccPer: any = {};

  first = 1;
  rows = 20;
  public gridCols = [];
  public gridData: any = [];
  public math: any;

  sizes!: any[];

  // selectedSize: any = "p-datatable-sm";
  selectedSize: any = 'p-datatable-gridlines';
  products = [];
  selectedProduct!: [];

  public exportColumns: any = [];
  // cols:[];
  constructor(
    private _service: MasterserviceService,
    private _router: Router,
    private _activateroute: ActivatedRoute
  ) {
    this.math = Math;
  }

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    console.log(this);
    this._activateroute.paramMap.subscribe(async (param: ParamMap) => {
      let params = param.get('params');
      if (params != null && params != undefined) {
        let docPermissions = JSON.parse(atob(params));
        let docPermission: any = this._service
          .getDocPermissions(docPermissions)
          .subscribe((dt: any) => {
            docPermission = dt.data[0];
            this.permissions(docPermissions, docPermission);
          });
        //await this._service.getDocPermission(docPermissions);

        // let docPermission = console.log(docParms); //.documentDet;
      } else {
        this._router.navigate(['/home'], { relativeTo: this._activateroute });
      }
    });

    // this.routerAddNew=`/home/document`;

    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' },
    ];
    this.gridCols = await this._service.getGridColumns(this.mastersGridColumns);
    console.log(this.gridCols);

    // this.gridData=[{deparment:'1'},{deparment:'2'}]
    // this.selectedProduct= this.gridData;

    this._service.serGetData(this.masterGridData).subscribe((dt: any) => {
      this.gridData = dt.data;
      _.forEach(this.gridData, (row, ind) => {
        row.actionOptions = JSON.parse(JSON.stringify(this.actionOptions));
        row.printOptions = JSON.parse(JSON.stringify(this.printOptions));
      });
    });

    //
    this.exportColumns = this.gridCols.map((col) => ({
      title: 'Deparment',
      dataKey: 'deparment',
    }));
  }

  permissions(docPermissions: any, docPermission: any) {
    if (docPermissions != null && docPermissions != undefined) {
      this.pageTitle = docPermission['documentname']; //['Document Page Url] ['Document Grid Url']
      this.onSubmit = docPermission['docAccSubmit'];
      this.onGrid = docPermission['docAccGridView'];
      this.onAddNew = docPermission['docAccAddNew'];
      this.onClear = docPermission['docAccClear'];
      this.onEdit = docPermission['docAccEdit'];
      this.onView = docPermission['docAccView'];
      this.export = docPermission['docAccExport'];
      this.routerAddNew = `/home/${docPermission['documentpageurl']}`;
      this.routerGridView = `/home/${docPermission['documentgridUrl']}`;
      this.docParams = docPermissions;
      this.docAccPer = docPermission;
    }
  }
  public viewPermission = true;
  onCheckBox(rowData: any, mode: any) {
    if (mode == 'EDIT') {
      console.log(this.paramKey);
      console.log(rowData);
      this.viewPermission = rowData.status == 'C' ? false : true;
    }

    if (mode == 'EDIT' && rowData.recordStatus == 'D') {
      // this.messageService.add({ severity: 'error', summary: this.pageTitle, detail: `Deleted '${this.pageTitle}' can\'t be edited` });
    } else {
      let param = '';
      _.forEach(this.paramKey, (val, ind) => {
        param += `"${val}":"${rowData[val]}"`;
      });
      if (param.length > 0) {
        param = `{${param}, "mode":"${mode}"}`;
        param = btoa(param);
        this._router.navigate(
          [
            this.routerAddNew,
            { param: param, params: btoa(JSON.stringify(this.docParams)) },
          ],
          { relativeTo: this._activateroute }
        );
      }
    }
  }

  onCancelClick(rowData: any, reportName: any) {
    rowData.reportName = reportName;
    this.printClick.emit(rowData);
    alert('gridPrint');
  }

  showActionOptions(actionOption: any, rowData: any) {
    let showMe: any = true;
    if(actionOption.reportName !='VIEW' && rowData.status =='A'){
       showMe = false;
       return;
    }
    
    let list: any = [];
    var b: any = true;
    if (actionOption.display == undefined || actionOption.display == '')
      showMe = true;
    else {
      let displayOption = actionOption.display; //.split(",");
      _.forEach(displayOption, (dOption, dInd) => {
        showMe = true;
        let negIndex = dOption.indexOf('!');
        dOption = dOption.replace('!', '');
        dOption = dOption == '(null)' ? null : dOption;
        //       if (tData[dInnd] != dOption) {
        if (rowData[dInd] != dOption && negIndex < 0) {
          showMe = false;
        }
        if (rowData[dInd] == dOption && negIndex >= 0) {
          showMe = false;
        }
        list.push(showMe);
        if (actionOption.conditionOperator == 'AND') {
          for (var i = 0; i < list.length; i++) {
            b = b && list[i];
          }
        } else {
          // for (var i = 0; i < list.length; i++) {
          if (Object.keys(displayOption).length > 1) {
            for (var i = 0; i < list.length; i++) {
              if (i == 0) {
                b = list[0];
              }
              b = b || list[i];
            }
          }
          // b = b || list[i];
          // }
        }
      });
    }
    if (
      actionOption.display != undefined &&
      Object.keys(actionOption.display).length > 1
    ) {
      showMe = b;
    }
    return showMe;
  }
  
  onActionClick(rowData: any, mode: any) {
    if (mode == 'EDIT' && rowData.recordStatus == 'C') {
      // this.messageService.add({ severity: 'error', summary: this.pageTitle, detail: `Deleted '${this.pageTitle}' can\'t be edited` });
    } else {
      let param = '';
      _.forEach(this.paramKey, (val, ind) => {
        param += `"${val}":"${rowData[val]}"`;
      });
      if (param.length > 0) {
        param = `{${param}, "mode":"${mode}"}`;
        param = btoa(param);
        this._router.navigate(
          [
            this.routerAddNew,
            { param: param, params: btoa(JSON.stringify(this.docParams)) },
          ],
          { relativeTo: this._activateroute }
        );
      }
    }
  }

  showPrintOptions(rowData: any, mode: any){
    let showMe: any = true;
    return showMe;

  }
  onPrintClick(rowData: any, mode: any){

  }

  exportPdf() {
    // import('jspdf').then((jsPDF) => {
    //   import('jspdf-autotable').then((x) => {
    //     const doc = new jsPDF.default('p', 'px', 'a4');
    //     // var doc = new jsPDF();
    //     doc.text('Header or footer text', this.exportColumns, this.gridData);
    //     (doc as any).autoTable(this.exportColumns, this.gridData);
    //     doc.save('products.pdf');
    //     // window.open(doc)
    //   });
    // });
    // import('jspdf').then((jsPDF) => {
    //   import('jspdf-autotable').then((x) => {
    //     const doc = new jsPDF.default('p', 'px', 'a4');
    //     // Create a table using autoTable
    //     (doc as any).autoTable({
    //       title:'Name',
    //       head: [this.exportColumns], // Table header
    //       body: this.gridData, // Table data
    //     });
    //     doc.save('products.pdf');
    //   });
    // });

    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');

        // Define the title and date for the PDF
        const title: any = 'Name';
        const date: any = 'Date: 23-10-2023';

        // Add a hook to add the title and date to the header of each page
        (doc as any).autoTable({
          head: [this.exportColumns], // Table header
          body: this.gridData, // Empty table data
          didDrawPage: function (data: any) {
            // Add the title to the header
            doc.setFontSize(16);
            const titleWidth =
              (doc.getStringUnitWidth(title) * doc.getFontSize()) /
              doc.internal.scaleFactor;
            const titleX: any =
              (doc.internal.pageSize.getWidth() - titleWidth) / 2;
            doc.text(titleX, 10, title);

            // Add the date below the title
            doc.setFontSize(12);
            const dateWidth =
              (doc.getStringUnitWidth(date) * doc.getFontSize()) /
              doc.internal.scaleFactor;
            const dateX: any =
              (doc.internal.pageSize.getWidth() - dateWidth) / 2;
            doc.text(dateX, 20, date);
          },
        });
        doc.save('products.pdf');
      });
    });
  }

  exportExcel() {
    // alert('xls')
    // import('xlsx').then((xlsx) => {
    // const worksheet = xlsx.utils.json_to_sheet(this.gridData);
    // const workbook = {title:'Title', Sheets: { data: worksheet }, SheetNames: ['data'] };
    // const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    // this.saveAsExcelFile(excelBuffer, 'products');
    //       const worksheet = xlsx.utils.json_to_sheet(this.gridData);

    // // Define the title for the Excel file
    // const title = 'Product Data';

    // // Create the workbook and add the worksheet
    // const workbook = {
    //   Sheets: { data: worksheet },
    //   SheetNames: ['data'],
    //   Props: {
    //     Title: 'title', // Set the title property to define the title
    //   },
    // };

    // const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    // this.saveAsExcelFile(excelBuffer, 'products.xlsx');
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.gridData);

      // Define the title and date
      const title = 'Product Data';
      const date = '23-10-2023';

      // Add the title to a custom header row
      xlsx.utils.sheet_add_aoa(worksheet, [['Title: ' + title]], {
        origin: 'A1',
      });

      // Add the date to a custom header row
      xlsx.utils.sheet_add_aoa(worksheet, [['Date: ' + date]], {
        origin: 'A2',
      });

      // Create the workbook and add the worksheet
      const workbook = {
        Sheets: { data: worksheet },
        SheetNames: ['data'],
        Props: {
          Title: title, // Set the title property to define the title
        },
      };

      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products.xlsx');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
