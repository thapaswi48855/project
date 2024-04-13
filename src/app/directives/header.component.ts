import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MasterserviceService } from '../masterService/masterservice.service';
import { throwIfEmpty } from 'rxjs';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() pageTitle = '';
  @Input() onSubmit = false;
  @Input() onGrid = false;
  @Input() onAddNew = false;
  @Input() onClear = false;
  @Input() onEdit = false;
  @Input() onView = false;
  @Input() export = false;
  @Input() redirectToGrid: boolean = false;
  @Input() onSaveApprove: boolean = false;
  @Input() onSavePrint: boolean = false;

  @Output() gridClick = new EventEmitter<any>();
  @Output() addNewClick = new EventEmitter<any>();
  @Output() clearClick = new EventEmitter<any>();
  @Output() editClick = new EventEmitter<any>();
  @Output() viewClick = new EventEmitter<any>();
  @Output() submitClick = new EventEmitter<any>();
  @Output() saveApproveClick = new EventEmitter<any>();
  @Output() savePrintClick = new EventEmitter<any>();

  public routerAddNew: string = '';
  public routerGridView: string = '';
  public docParams: any;
  public docAccPer: any;

  public docAccSubmit: any;
  public docAccGridView: any;
  public docAccAddNew: any;
  public docAccClear: any;
  public docAccEdit: any;
  public docAccView: any;
  public docAccExport: any;

  // public documentPermissions = [
  //   {
  //     documentName: 'Modules',
  //     primaryUrl: 'module',
  //     secoundryUrl: 'moduleList',
  //     addNew: true,
  //     gird: false,
  //     submit: true,
  //     clear: true,
  //   },
  // ];
public gridCols =[];
public mastersGridColumns :any=[];
public gridData:any =[];
  constructor(
    private _router: Router,
    private _service: MasterserviceService,
    private _activatedRoute: ActivatedRoute,
    private _messageService: MessageService
  ) {}

  async ngOnInit() {
    // this.onAddNew = this.documentPermissions[0].addNew;
    // this.onGrid = this.documentPermissions[0].gird;
    // this.onClear = this.documentPermissions[0].clear;
    // this.pageTitle=this.documentPermissions[0].documentName;

    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    console.log(this);

    this._activatedRoute.paramMap.subscribe(async (param: ParamMap) => {
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
        this._router.navigate(['/home'], { relativeTo: this._activatedRoute });
      }
    });
    this.gridCols = await this._service.getGridColumns(this.mastersGridColumns);
    // this.exportColumns = this.gridCols.map((col) => ({
    //   title: 'Deparment',
    //   dataKey: 'deparment',
    // }));

  }
  permissions(docPermissions: any, docPermission: any) {
    console.log('aaa',docPermissions)
    if (docPermissions != null && docPermissions != undefined) {
      this.pageTitle = docPermission['documentname']; //['Document Page Url] ['Document Grid Url']
      this.docAccSubmit = docPermission['docAccSubmit'];
      this.docAccGridView = docPermission['docAccGridView'];
      this.docAccAddNew = docPermission['docAccAddNew'];
      this.docAccClear = docPermission['docAccClear'];
      this.docAccEdit = docPermission['docAccEdit'];
      this.docAccView = docPermission['docAccView'];
      this.docAccExport = docPermission['docAccExport'];
      this.routerAddNew = `/home/${docPermission['documentpageurl']}`;
      this.routerGridView = `/home/${docPermission['documentgridUrl']}`;
      this.docParams = docPermissions;
      this.docAccPer = docPermission;
    }
  }

  onGridClick() {
    this.gridClick.emit(true);
    let param = btoa(JSON.stringify(this.docParams));
    let docAccPer = btoa(JSON.stringify(this.docAccPer));
    this._router.navigate([this.routerGridView, { params: param }], {
      relativeTo: this._activatedRoute,
    });
  }

  onAddNewClick() {
    this.addNewClick.emit(true);
    let param = btoa(JSON.stringify(this.docParams));
    this._router.navigate([this.routerAddNew, { params: param }], {
      relativeTo: this._activatedRoute,
    });
  }
  onClearClick() {
    this.clearClick.emit(true);
  }
  onEditClick() {
    this.editClick.emit(true);
  }
  onViewClick() {
    this.viewClick.emit(true);
  }
  onSaveClick() {
    this.submitClick.emit(true);
  }
  onMessageClose() {
    if (this.redirectToGrid == true) this.onGridClick();
  }
  onSaveApproveClick() {
    this.saveApproveClick.emit(true);
  }
  public exportColumns: any = [];
  
  onSavePrintClick(){
    // // this.savePrintClick.emit(true);
    // import('jspdf').then((jsPDF) => {
    //   import('jspdf-autotable').then((x) => {
    //     const doc = new jsPDF.default('p', 'px', 'a4');

    //     // Define the title and date for the PDF
    //     const title: any = 'Name';
    //     const date: any = 'Date: 23-10-2023';

    //     const subTitle:any = `GST : ${title}`;

    //     // Add a hook to add the title and date to the header of each page
    //     (doc as any).autoTable({
    //       head: [this.exportColumns], // Table header
    //       body: this.gridData, // Empty table data
    //       didDrawPage: function (data: any) {
    //         // Add the title to the header
    //         doc.setFontSize(16);
    //         const titleWidth =
    //           (doc.getStringUnitWidth(title) * doc.getFontSize()) /
    //           doc.internal.scaleFactor;
    //         const titleX: any =
    //           (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    //         doc.text(titleX, 10, title);


    //         // Add the subtitle below the title
    //     doc.setFontSize(12);
    //     const subTitleWidth =
    //       (doc.getStringUnitWidth(subTitle) * doc.getFontSize()) /
    //       doc.internal.scaleFactor;
    //     const subTitleX :any=
    //       (doc.internal.pageSize.getWidth() - subTitleWidth) / 3;
    //     doc.text(subTitleX, 20, subTitle);


    //         // Add the date below the title
    //         doc.setFontSize(12);
    //         const dateWidth =
    //           (doc.getStringUnitWidth(date) * doc.getFontSize()) /
    //           doc.internal.scaleFactor;
    //         const dateX: any =
    //           (doc.internal.pageSize.getWidth() - dateWidth) / 2;
    //         doc.text(dateX, 20, date);
    //       },
    //     });
    //     doc.save('products.pdf');
    //   });
    // });
  }
}
