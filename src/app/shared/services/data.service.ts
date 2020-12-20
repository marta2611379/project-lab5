import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product.model';
import { server } from '../../../../server.js';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  countProdShoper: number = 0;
  prodArray = JSON.parse(localStorage.getItem('products'));

  countP: number = 1;
  // slogin;

  sessionObj = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) {
    console.log(this.sessionObj);

  }

  // session: boolean = false;

  getProducts() {
    return this.http.get('/getproducts')
  }

  removeProduct(prod) {
    let obj = { id: prod._id };
    return this.http.post('/removeproduct', obj, { responseType: 'text' });
  }

  addProduct(prod) {
    return this.http.post('/addproduct', prod, { responseType: 'text' });
  }

  findProduct(prod) {
    let obj = { id: prod._id };
    return this.http.post('/findproduct', obj, { responseType: 'text' })
  }

  updateProduct(prod) {
    return this.http.post('/updateproduct', prod, { responseType: 'text' })
  }

  getUsers() {
    return this.http.get('/getuser')
  }

  removeUser(user) {
    let obj = { id: user._id };
    return this.http.post('/removeuser', obj, { responseType: 'text' });
  }

  addUser(user) {
    return this.http.post('/adduser', user, { responseType: 'text' });
  }

  findUser(user) {
    console.log(user);
    
    let obj = {
      login: user.login,
      password: user.password
    };
    return this.http.post('/finduser', obj, { responseType: 'text' })
  }

  localStorage(product) {
    console.log(product);
    this.prodArray = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    this.prodArray.push({
      count: this.countP,
      _id: product._id
    });
    localStorage.setItem('products', JSON.stringify(this.prodArray));
  }

  localStorageUser(user) {
    user=JSON.parse(user);
    console.log(user);
    this.sessionObj = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    this.sessionObj =
    {
      session: true,
      obj: user
    }
    localStorage.setItem('user', JSON.stringify(this.sessionObj));
  };

  logOut() {
    this.sessionObj = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    this.sessionObj =
    {
      session: false,
      obj: {}
    }
    localStorage.setItem('user', JSON.stringify(this.sessionObj));
  };
}
