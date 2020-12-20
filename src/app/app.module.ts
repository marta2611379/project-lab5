import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/services/data.service';
import { HttpClientModule }from'@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from "@angular/common";
import { AdminComponent } from './pages/admin/admin/admin.component';
import { ShoperComponent } from './pages/shoper/shoper.component';
// import { AdminProdComponent } from './admin/admin-prod/admin-prod.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MobileMenuComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ShoperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // NgModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
