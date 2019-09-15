import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDTComponent } from './product-dt/product-dt.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CenterComponent } from './center/center.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SvDetailComponent } from './sv-detail/sv-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDTComponent,
    ProductListComponent,
    CenterComponent,
    ProductCartComponent,
    SinhvienComponent,
    CardInfoComponent,
    MenuComponent,
    MainMenuComponent,
    SvDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : '', component : MainMenuComponent},
      {path : 'product-detail/:id', component :  ProductDTComponent},
      {path: 'product-list', component : ProductListComponent},
      {path : 'product-cart', component : ProductCartComponent},
      {path : 'sinhvien', component : SinhvienComponent},
      {path : 'main-menu', component : MainMenuComponent},
      {path : 'sv-detail/:svId', component : SvDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
