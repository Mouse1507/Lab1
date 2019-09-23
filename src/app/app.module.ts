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
import { StudentInfoService } from './student-info.service';
import { CongngheComponent } from './congnghe/congnghe.component';
import { ChungloaiComponent } from './chungloai/chungloai.component';
import { CongngheDetailComponent } from './congnghe-detail/congnghe-detail.component'
import { TechServiceService } from './tech-service.service';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
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
    SvDetailComponent,
    CongngheComponent,
    ChungloaiComponent,
    CongngheDetailComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,NgxPaginationModule,OrderModule,
    RouterModule.forRoot([
      {path : '', component : MainMenuComponent},
      {path : 'product-detail/:id', component :  ProductDTComponent},
      {path: 'product-list', component : ProductListComponent},
      {path : 'product-cart', component : ProductCartComponent},
      {path : 'sinhvien', component : SinhvienComponent},
      {path : 'main-menu', component : MainMenuComponent},
      {path : 'sv-detail/:svId', component : SvDetailComponent},
      {path : 'cong-nghe', component : CongngheComponent},
      {path : 'chung-loai/:clId', component :ChungloaiComponent},
      {path : 'cong-nghe-detail', component : CongngheDetailComponent},
      {path : 'pagination', component : PaginationComponent},

    ])
  ],
  providers: [StudentInfoService,TechServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
