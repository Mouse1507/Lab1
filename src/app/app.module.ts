import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDTComponent } from './product-dt/product-dt.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDTComponent,
    ProductListComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
