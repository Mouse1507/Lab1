import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDTComponent } from './product-dt/product-dt.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CenterComponent } from './center/center.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { CardInfoComponent } from './card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDTComponent,
    ProductListComponent,
    CenterComponent,
    ProductCartComponent,
    SinhvienComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
