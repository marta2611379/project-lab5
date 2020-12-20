import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  username: String = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  countProd() {
    let count = 0
    if (this.dataService.prodArray == null) {
      return 0
    } else {
      this.dataService.prodArray.forEach(el => {
        count += el.count;
      });
      return count;
    }
  }


  loginOrUser(): Boolean {
    if ((this.dataService.sessionObj==null)||(this.dataService.sessionObj.session==false)) {
      // console.log(false);
      return false;
    } else {
      this.username = this.dataService.sessionObj.obj.login;
      console.log(this.dataService.sessionObj);
      return true;
    }
  }

  logOut(): void {
    // localStorage.removeItem("user");
    this.dataService.logOut();
    this.loginOrUser();
  }

}
