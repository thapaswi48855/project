import { Component } from '@angular/core';
import { MasterserviceService } from '../masterService/masterservice.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public userLogin = {
    userName: '',
    userPwd: '',
  };

  public roleId: string = '';
  public modulesList: any = [];
  constructor(public _service: MasterserviceService, private _route: Router,
    private _messageService:MessageService) {}

 async onLoginClick() {
    let loginJson: any = {
      'userName': this.userLogin.userName,
      'userPwd': this.userLogin.userPwd,
    };

    let login= await this._service.login('getNewUsers',loginJson).subscribe((dt: any) => {
      console.log(dt);
      window.localStorage.setItem("UserInfo",JSON.stringify(dt.data))
      if (dt.status == '200') {
        // this._messageService.add({
        //   sticky: true,
        //   severity: 'success',
        //   summary: 'Success',
        //   detail: 'Create Succesfull',
        // });
        this._route.navigate(['home']);
      }else{
         this._messageService.add({
          sticky: true,
          severity: 'success',
          summary: 'Success',
          detail: 'Unable to Login',
        });
      }
      
    });
console.log(login)
this._route.navigate(['home']);
    // this._service
    //   .serGetDataobject('getUsersData', loginJson)
    //   .subscribe((dt: any) => {
    //     console.log(dt);
    //     console.log(dt.data[0]['Role Id']);
    //     this.roleId = dt.data[0]['Role Id'];
    //   });

    
  }
}
