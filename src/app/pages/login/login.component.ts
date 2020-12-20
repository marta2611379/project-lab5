import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  login: string = "";
  password: string = "";
  name: string = ""
  tel: string = "";

  passwordLog: string = "";
  loginLog: string = "";

  expressionL: boolean = true;
  expressionR: boolean = true;
  user;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.user = {
      id: 0,
      name: this.name,
      login: this.login,
      password: this.password,
      email: this.email,
      tel: this.tel
    };
    this.dataService.addUser(this.user).subscribe((data) => {
      console.log(data);
      this.dataService.localStorageUser(data);
      this.dataService.sessionObj.session = true;
      console.log(JSON.parse(data));
    });
    this.clearInput();
  }

  displayLog(): void {

    this.expressionR = true;
    this.expressionL = true;
  }
  displayReg(): void {

    this.expressionL = false;
    this.expressionR = false;
  }

  disableBtnAdd() {
    if (this.name.length == 0 ||
      this.email.length == 0 ||
      this.tel.length == 0 ||
      this.login.length == 0 ||
      this.password.length == 0) {
      return false;
    } else { return true; }
  }

  disableBtnLog(): boolean {
    if (this.loginLog.length == 0 ||
      this.passwordLog.length == 0) {
      return false;
    } else { return true; }
  }

  clearInput() {
    this.email = "";
    this.login = "";
    this.password = "";
    this.name = ""
    this.tel = "";
    this.passwordLog = "";
    this.loginLog = "";
  }

  LoginUser() {
    this.user = {
      password: this.passwordLog,
      login: this.loginLog
    }
    console.log(this.user);

    this.dataService.findUser(this.user).subscribe(data => {
      this.dataService.localStorageUser(data);
      this.dataService.sessionObj.session = true;
    })
    this.clearInput();
  }
}
