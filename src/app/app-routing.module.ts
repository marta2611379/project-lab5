import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './pages/menu/menu.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
// import { AdminProdComponent } from './admin/admin-prod/admin-prod.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { ShoperComponent } from './pages/shoper/shoper.component';



const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'mobile-menu', component: MobileMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'shoper', component: ShoperComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
