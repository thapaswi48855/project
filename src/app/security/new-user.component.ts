import { Component, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { HeaderComponent } from '../directives/header.component';
import { MasterserviceService } from '../masterService/masterservice.service';
import { SavingComponent } from '../directives/saving.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(SavingComponent) saving:SavingComponent;

  public pageTitle: string = 'User';
  public onSubmit: boolean = true;
  public onGrid: boolean = true;
  public onAddNew: boolean = true;

  public rolesLists: any = [{label:'Select One',value:''}];

  public user: any = {
    userRoleid: '',
    userName: '',
    userPhno: '',
    userEmail: '',
    userPwd: '',
    useraddress: '',
    userstatus: 'A',
  };
  constructor(public _service: MasterserviceService) {}

  async ngOnInit() {
    if (Object.keys(this._service.appConfig).length == 0) {
      await this._service.getConfigData();
    }

    this._service.serGetData('getRoles').subscribe((dt: any) => {
      console.log('a', dt.data);
      let rolesLists = dt.data;
      _.forEach(rolesLists, (role, ind) => {
        this.rolesLists.push({
          label: role['Role Name'],
          value: role['_id'],
        });
      });
    });
  }

  onSaveClick() {
    let savingJson = {
      'userRoleid' : this.user.userRoleid,
      'userName' : this.user.userName,
      'userPhno' : this.user.userPhno,
      'userEmail' : this.user.userEmail,
      'userPwd' : this.user.userPwd,
      'useraddress' : this.user.useraddress,
      'userstatus' : this.user.userstatus,
    };

    this.saving.onSaveJson(this.pageTitle, 'insertNewUsers', [savingJson]);
    this.onClearClick();
  }
  onClearClick() {}
}
