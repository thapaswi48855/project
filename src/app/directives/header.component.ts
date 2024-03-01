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
  onSavePrintClick(){
    this.savePrintClick.emit(true);
  }
}
