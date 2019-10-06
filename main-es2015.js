(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banhang/banhang.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banhang/banhang.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Bán hàng giải khát</h2>\n      <div class=\"card\">\n        <div class=\"card-header\">Bán hàng giải khát</div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Tên hàng</th>\n                <th>Số lượng</th>\n                <th>Đơn giá</th>\n                <th>Thành tiền</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let mh of mathang\">\n                <td><input type=\"checkbox\" [(ngModel)]=\"mh.check\" style=\"width:15px;height:15px;\"></td>\n                <td>{{mh.name}}</td>\n                <td><input type=\"number\" [disabled]=\"!mh.check\" name=\"soluong\" style=\"width:100%;\" (change)=\"tongTungCai()\" [(ngModel)]=\"mh.soluong\" ></td>\n                <td>{{mh.price}}</td>\n                <td>{{mh.tong}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer\">Tong tien : {{tinhtongTien()}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-info/card-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-info/card-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" style=\"width:300px\">\n    <img class=\"card-img-top\" src=\"assets/{{people.img}}\" alt=\"{{people.name}}\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{people.name}}</h4>\n      <p class=\"card-text\">{{people.birth}}</p>\n      <p class=\"card-text\">{{people.gender}}</p>\n      <p class=\"card-text\">{{people.mark}}</p>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/center/center.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/center/center.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pad-20\">\n    <div class=\"col-md-3 left-column\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-right\">\n           <i class=\"fas fa-bars fa-3x menu-show\"></i>\n        </div>\n        <div class=\"col-md-12 text-center\">\n          <img src=\"assets/bootstrap.jpg\" alt=\"bootstrap\" class=\"logo\" />\n        </div>\n        <div class=\"col-md-12\">\n          <ul class=\"nav flex-column left-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i> Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-user\"></i> Employees</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-file\"></i> Project</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\"><i class=\"fas fa-pen\"></i> Skills</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-bookmark\"></i> Topics</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-file\"></i> Courses</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\"><i class=\"fas fa-bookmark\"></i> Topic-Courses</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\"><i class=\"fas fa-pen\"></i> Classes</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Photos</a></li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Summer 2017</a></li>\n            <li class=\"breadcrumb-item\"><a href=\"#\">Italy</a></li>\n            <li class=\"breadcrumb-item active\">Rome</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <p>Show\n            <select name=\"entry\" id=\"entry\">\n              <option value=\"10\">10</option>\n              <option value=\"20\">20</option>\n              <option value=\"50\">50</option>\n              <option value=\"100\">100</option>\n            </select>\n            entries</p>\n        </div>\n        <div class=\"col-md-8 text-right\">\n          <button type=\"button\" class=\"btn btn-primary ex-but\">Excel</button>\n          <button type=\"button\" class=\"btn btn-primary pdf-but\">PDF</button>\n          <div class=\"search-box\">\n            <input type=\"search\" class=\"search-field\" placeholder=\"Search\" />\n            <i class=\"fas fa-search search-icon\"></i>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary add-but\"><i class=\"fas fa-plus\"></i> Add Employee</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table class=\"table table-borderless text-center\">\n            <thead>\n              <tr>\n                <th>Id</th>\n                <th>Firstname</th>\n                <th>Lastname</th>\n                <th>Email</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Cong</td>\n                <td>Ngo</td>\n                <td>ntcong@gmail.com</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Thuy</td>\n                <td>Thanh</td>\n                <td>â@gmail.com</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Nguyen</td>\n                <td>Nam</td>\n                <td>acb@gmail.com</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Le</td>\n                <td>Hoang</td>\n                <td>lhva@gmail.com</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td>Cuong</td>\n                <td>Huy</td>\n                <td>thcuong@gmail.com</td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <p>Showing 1 of 5 of Employees</p>\n        </div>\n        <div class=\"col-md-8\">\n          <ul class=\"pagination pagination-sm justify-content-end\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fas fa-backward\"></i></a></li>\n            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fas fa-forward\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chungloai/chungloai.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chungloai/chungloai.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-t-15\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/online-shop-mall.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/header-object.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark menu-bar\">\n        <!-- Links -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i> Trang chủ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-barcode\"></i> Giới thiệu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-address-book\"></i> Liên hệ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-envelope\"></i> Góp ý</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-question\"></i> Hỏi đáp</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"row pad-t-15\">\n    <div class=\"col-md-9 pad-l-0 \">\n      <div class=\"row chungloai-list\">\n        <div class=\"col-md-4\">\n          <div class=\"card cl-item\">\n            <img class=\"card-img-top cl-item-img\" src=\"assets/images/products/1001.jpg\" alt=\"Card image\">\n            <div class=\"card-body\">\n              <p>Yeu cau khach hang cung cap giay chung nhan tieu chuan chat luong va dau tu vao noi dung quang cao cho\n                nhung website</p>\n              <button type=\"button\" class=\"cl-item-button btn btn-primary\">Chi tiết</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card cl-item\">\n            <img class=\"card-img-top cl-item-img\" src=\"assets/images/products/1001.jpg\" alt=\"Card image\">\n            <div class=\"card-body\">\n              <p>Yeu cau khach hang cung cap giay chung nhan tieu chuan chat luong va dau tu vao noi dung quang cao cho\n                nhung website</p>\n              <button type=\"button\" class=\"cl-item-button btn btn-primary\">Chi tiết</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card cl-item\">\n            <img class=\"card-img-top cl-item-img\" src=\"assets/images/products/1001.jpg\" alt=\"Card image\">\n            <div class=\"card-body\">\n              <p>Yeu cau khach hang cung cap giay chung nhan tieu chuan chat luong va dau tu vao noi dung quang cao cho\n                nhung website</p>\n              <button type=\"button\" class=\"cl-item-button btn btn-primary\">Chi tiết</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row cl-action pos-relative\">\n        <div class=\"btn-group btn-group-sm\">\n          <button type=\"button\" class=\"btn btn-dark cl-action-icon\"><i class=\"fas fa-thumbs-up\"></i></button>\n          <button type=\"button\" class=\"btn btn-light cl-action-icon\"><i class=\"fas fa-thumbs-down\"></i></button>\n          <button type=\"button\" class=\"btn btn-light cl-action-icon\"><i class=\"fas fa-hand-point-left\"></i></button>\n          <button type=\"button\" class=\"btn btn-dark cl-action-icon\"><i class=\"fas fa-hand-point-right\"></i></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"row right-box\">\n        <div class=\"col-md-5 text-right pos-relative\">\n          <img src=\"assets/images/shoppingcart.gif\" alt=\"shopping-cart\" class=\"cart-icon\">\n        </div>\n        <div class=\"col-md-7 cart-info\">\n          <p>100 items</p>\n          <p>$ 56.8</p>\n          <a href=\"cart\">View Cart</a>\n        </div>\n      </div>\n      <div class=\"row right-box\">\n        <input type=\"text\" class=\"keywords-field\" placeholder=\"keywords ..\">\n      </div>\n      <div class=\"row right-box\">\n        <table class=\"table table-bordered chungloai-list\">\n          <thead class=\"bg-light\">\n            <tr>\n              <th><i class=\"fas fa-list\"></i> Chủng loại</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let cl of chungLoai\">\n              <td>{{cl.clName}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/congnghe-detail/congnghe-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/congnghe-detail/congnghe-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-t-15\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/online-shop-mall.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/header-object.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark menu-bar\">\n        <!-- Links -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i> Trang chủ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-barcode\"></i> Giới thiệu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-address-book\"></i> Liên hệ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-envelope\"></i> Góp ý</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-question\"></i> Hỏi đáp</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"row pad-t-15\">\n    <div class=\"col-md-5\">\n      <img src=\"assets/images/products/1005.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-7\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item list-group-item-light\">Tên hàng : <span></span></li>\n        <li class=\"list-group-item list-group-item-light\">Đơn giá : <span></span></li>\n        <li class=\"list-group-item list-group-item-light\">Nhà cung cấp : <span></span></li>\n        <li class=\"list-group-item list-group-item-light\">Chủng loại : <span></span></li>\n        <li class=\"list-group-item list-group-item-light\">Số lượng : <span></span></li>\n        <li class=\"list-group-item list-group-item-light\">Giảm giá : <span></span></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"related-list\">\n    <h2>Hàng liên quan</h2>\n    <hr>\n    <div class=\"related-item-list pos-relative\">\n      <ul class=\"list-group list-group-horizontal\">\n        <li class=\"list-group-item\">\n          <img src=\"assets/images/products/1002.jpg\" alt=\"\" class=\"related-it-img\" />\n        </li>\n        <li class=\"list-group-item\">\n          <img src=\"assets/images/products/1002.jpg\" alt=\"\" class=\"related-it-img\" />\n        </li>\n        <li class=\"list-group-item\">\n          <img src=\"assets/images/products/1002.jpg\" alt=\"\" class=\"related-it-img\" />\n        </li>\n        <li class=\"list-group-item\">\n          <img src=\"assets/images/products/1002.jpg\" alt=\"\" class=\"related-it-img\" />\n        </li>\n        <li class=\"list-group-item\">\n          <img src=\"assets/images/products/1002.jpg\" alt=\"\" class=\"related-it-img\" />\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/congnghe/congnghe.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/congnghe/congnghe.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-t-15\">\n  <header>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/online-shop-mall.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-6\">\n        <img src=\"assets/images/header-object.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark menu-bar\">\n        <!-- Links -->\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-home\"></i> Trang chủ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-barcode\"></i> Giới thiệu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-address-book\"></i> Liên hệ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-envelope\"></i> Góp ý</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fas fa-question\"></i> Hỏi đáp</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"row pad-t-15\">\n    <div class=\"col-md-9 pad-l-0 \">\n      <div class=\"jumbotron\">\n        <h1>FRONT-END FRAMEWORK</h1>\n        <p>One of the most popular framework in the world</p>\n        <button type=\"button\" class=\"btn btn-primary\">Xem thêm ...</button>\n      </div>\n      <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"assets/images/products/1001.jpg\" alt=\"Los Angeles\" class=\"carou-item-img\">\n            <div class=\"carousel-caption\">\n              <h3>Los Angeles</h3>\n              <p>We had such a great time in LA!</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"assets/images/products/1002.jpg\" alt=\"Chicago\" class=\"carou-item-img\">\n            <div class=\"carousel-caption\">\n              <h3>Chicago</h3>\n              <p>Thank you, Chicago!</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"assets/images/products/1003.jpg\" alt=\"New York\" class=\"carou-item-img\">\n            <div class=\"carousel-caption\">\n              <h3>New York</h3>\n              <p>We love the Big Apple!</p>\n            </div>\n          </div>\n        </div>\n        <a class=\"carou-control carousel-control-prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carou-control carousel-control-next\">\n          <span class=\"carousel-control-next-icon\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"row right-box\">\n        <div class=\"col-md-5 text-right pos-relative\">\n          <img src=\"assets/images/shoppingcart.gif\" alt=\"shopping-cart\" class=\"cart-icon\">\n        </div>\n        <div class=\"col-md-7 cart-info\">\n          <p>100 items</p>\n          <p>$ 56.8</p>\n          <a href=\"cart\">View Cart</a>\n        </div>\n      </div>\n      <div class=\"row right-box\">\n        <input type=\"text\" class=\"keywords-field\" placeholder=\"keywords ..\">\n      </div>\n      <div class=\"row right-box\">\n        <table class=\"table table-bordered chungloai-list\">\n          <thead class=\"bg-light\">\n            <tr>\n              <th><i class=\"fas fa-list\"></i> Chủng loại</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let cl of chungLoai\">\n              <td><a routerLink=\"/chung-loai/{{cl.clId}}\">{{cl.clName}}</a></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hinhchunhat/hinhchunhat.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hinhchunhat/hinhchunhat.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Calculate Hinh Chu Nhat</h2>\n      <form action=\"\" method=\"POST\">\n        <div class=\"form-group\">\n          <label for=\"dai\">Dai:</label>\n          <input type=\"text\" class=\"form-control\" id=\"dai\" name=\"dai\" [(ngModel)]=\"hcn.dai\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"rong\">Rong:</label>\n          <input type=\"text\" class=\"form-control\" id=\"rong\" name=\"rong\" [(ngModel)]=\"hcn.rong\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"chuvi\">Chuvi:</label>\n          <input type=\"text\" class=\"form-control\" id=\"chuvi\" name=\"chuvi\" [(ngModel)]=\"hcn.chuvi\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"dtich\">Dien Tich:</label>\n          <input type=\"text\" class=\"form-control\" id=\"dtich\" name=\"dtich\" [(ngModel)]=\"hcn.dtich\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"calculate()\">Calculate</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hocluc/hocluc.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hocluc/hocluc.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Học lực</h2>\n      <form action=\"\" method=\"POST\">\n        <div class=\"form-group\">\n          <label for=\"ten\">Họ và tên:</label>\n          <input type=\"text\" class=\"form-control\" id=\"ten\" name=\"ten\" [(ngModel)]=\"sv.ten\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ns\">Ngày sinh:</label>\n          <input type=\"text\" class=\"form-control\" id=\"ns\" name=\"ns\" [(ngModel)]=\"sv.ngaysinh\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"diem\">Diem:</label>\n          <input type=\"text\" class=\"form-control\" id=\"diem\" name=\"diem\" [(ngModel)]=\"sv.diem\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"gt\">Giới tính:</label><br>\n          <select name=\"gt\" id=\"gt\" [(ngModel)]=\"sv.gioitinh\">\n            <option value=\"nam\">Nam</option>\n            <option value=\"nu\">Nữ</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"hocluc\">Hoc Lực:</label>\n          <input type=\"text\" class=\"form-control\" id=\"\n                \" name=\"hocluc\" [(ngModel)]=\"sv.hocluc\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"xeploai()\">Xep loai</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kiemloi/kiemloi.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kiemloi/kiemloi.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>TÍnh thưởng</h2>\n        <div class=\"card\">\n          <div class=\"card-header\">Tính thưởng tết nguyên đán</div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"POST\">\n              <div class=\"form-group\">\n                <label for=\"\">Họ và tên</label><br>\n                <input type=\"text\" [(ngModel)]=\"cn.ten\" [ngModelOptions]=\"{standalone: true}\" required/>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"\">Luong</label>\n                <div class=\"input-group mb-3\">\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cn.luong\" [ngModelOptions]=\"{standalone: true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">VNĐ</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"\">Giới tính</label><br>\n                <input type=\"radio\" value=\"nam\" name=\"gender\" [(ngModel)]=\"cn.gioitinh\"\n                  [ngModelOptions]=\"{standalone: true}\" /> Nam <input type=\"radio\" value=\"nu\" name=\"gender\"\n                  [(ngModel)]=\"cn.gioitinh\" /> Nữ\n              </div>\n              <div class=\"form-group\">\n                <label for=\"\">Tuổi</label><br>\n                <select name=\"tuoi\" id=\"cn-gender\" [(ngModel)]=\"cn.tuoi\" [ngModelOptions]=\"{standalone: true}\">\n                  <option value=\"1\">Dưới 25</option>\n                  <option value=\"2\">Từ 25 đến 40</option>\n                  <option value=\"3\">Trên 40 </option>\n                </select>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer\">\n            Tiền thưởng : {{cn.thuong}}\n          </div>\n        </div>\n        <br>\n        <button type=\"button\" (click)=\"thuong()\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Tinh Thuong</button>\n      </div>\n    </div>\n    <div class=\"modal fade\" id=\"myModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n    \n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Thông báo </h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n    \n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <div *ngIf='errorTen'>Tên không được bỏ trống</div>\n            <div *ngIf='errorLuong'>Lương phải hơn 2 triệu</div>\n            <div *ngIf='success'>Thành công</div> \n          </div>\n    \n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n          </div>\n    \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-menu/main-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-list\">Lab1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sinhvien\">Lab2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cong-nghe\">Lab3</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pagination\">Lab4</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbardrop\" data-toggle=\"dropdown\" (click) = \"toggleMenu()\">Lab5</a>\n        <div class=\"dropdown-menu\" *ngIf=\"toggleTus\">\n          <a class=\"dropdown-item\" routerLink = \"/hinhchunhat\">Bài 1-1</a>\n          <a class=\"dropdown-item\" routerLink = \"/hocluc\">Bài 1-2</a>\n          <a class=\"dropdown-item\" routerLink = \"/thuong\">Bài 2</a>\n          <a class=\"dropdown-item\" routerLink = \"/banhang\">Bài 3</a>\n          <a class=\"dropdown-item\" routerLink = \"/kiemloi\">Bài 4</a>\n\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12\">\n    <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/product-list\" >Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/product-list\">Product List</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/product-cart\">Product Cart</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/sinhvien\">Lab2</a>\n          </li>\n        </ul>\n      </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagination/pagination.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagination/pagination.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n          <tr>\n            <th (click)=\"orderClick('name')\">Name</th>\n            <th (click)=\"orderClick('price')\">Price</th>\n            <th (click)=\"orderClick('discount')\">Discount</th>\n            <th (click)=\"orderClick('date')\">Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor='let lIt of list | paginate : {itemsPerPage : itemPage, currentPage : curPage} | orderBy: orderName'>\n            <td>{{lIt.name}}</td>\n            <td>{{lIt.price}}</td>\n            <td>{{lIt.discount}}</td>\n            <td>{{lIt.date}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n      <div class=\"btn-group round-corner\">\n        <button type=\"button\" (click)=\"toPage(1)\" class=\"btn btn-primary\">First</button>\n        <button type=\"button\" (click)=\"prevPage()\" class=\"btn btn-primary\">Prev</button>\n        <button type=\"button\" (click)=\"nextPage()\" class=\"btn btn-primary\">Next</button>\n        <button type=\"button\" (click)=\"toPage(numberOfPage)\" class=\"btn btn-primary\">Last</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-cart/product-cart.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-cart/product-cart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main-menu\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-list\">Product List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-cart\">Product Cart</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n\n\n<h2>Your Cart</h2>\n\n<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th>Id</th>\n      <th>Image</th>\n      <th>Name</th>\n      <th>Price</th>\n      <th>Quantity</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let c of cartPD\">\n      <td>{{c.id}}</td>\n      <td><img src=\"assets/{{c.name}}.jpg\" alt=\"{{c.name}}\" class=\"img-cart\"></td>\n      <td>{{c.name}}</td>\n      <td>{{c.price}}</td>\n      <td><b class=\"number\">{{c.quantity}}</b><button class=\"btn btn-success bonus\" (click)=\"bonus(c)\">+</button><button\n          class=\"btn btn-danger minus\" (click)=\"minus(c)\">-</button></td>\n      <td><button class=\"btn btn-primary btn-view\">View</button> <button\n          class=\"btn btn-danger btn-delete\">Delete</button></td>\n    </tr>\n    <tr>\n      <td colspan=\"5\">total price</td>\n      <td class=\"text-left\">{{tongTien()}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-dt/product-dt.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-dt/product-dt.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main-menu\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-list\">Product List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-cart\">Product Cart</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n<div class=\"card\">\n  <div class=\"card-header\">{{prod.name}}</div>\n  <div class=\"card-body\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-6 no-padding\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">Name:</div>\n            <div class=\"col-md-8\">{{prod.name}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">Code:</div>\n            <div class=\"col-md-8\">{{prod.code}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">Description:</div>\n            <div class=\"col-md-8\">Leaf rake with 48-inch wooden handle.</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">Availability:</div>\n            <div class=\"col-md-8\">{{prod.available}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">Price:</div>\n            <div class=\"col-md-8\">${{prod.price}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">5 Star Rating:</div>\n            <div class=\"col-md-8\">{{prod.star}}</div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"assets/{{prod.image}}\" alt=\"{{prod.name}}\" class=\"pd-img\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">Back</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-lg-12\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main-menu\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-list\">Product List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/product-cart\">Product Cart</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">List Product</div>\n  <div class=\"card-body\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-2 no-padding\">Filter By:</div>\n        <div class=\"col-md-10\">\n          <input type=\"text\" name=\"filter\" id=\"filter\" placeholder=\".....\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <h2>Filter By:</h2>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"AnHien()\">Hien Image</button></td>\n              <td>Product</td>\n              <td>Code</td>\n              <td>Available</td>\n              <td>Price</td>\n              <td>5 Star Rating</td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let p of listPD\">\n              <td><a routerLink=\"/product-detail/{{p.id}}\" target=\"_blank\"><img src=\"assets/{{p.image}}\"\n                    alt=\"{{p.name}}\" class=\"image-list\" *ngIf=\"isShow\" /></a> </td>\n              <td>{{p.name}}</td>\n              <td>{{p.code}}</td>\n              <td>{{p.available}}</td>\n              <td>{{p.price}}</td>\n              <td>\n                <div class=\"star-rate\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <div class=\"hidden\" [ngStyle]=\"{'left':p.width}\"></div>\n                </div>\n                {{TinhSao(p)}}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sinhvien/sinhvien.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sinhvien/sinhvien.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=container>\n  <ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Sinh vien</a></li>\n  </ul>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><i class=\"fas fa-table\"></i> Danh sach sinh vien</div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"input-group col-md-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"search....\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg-primary\"><i class=\"fas fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table class=\"table table-bordered text-left sv-table\">\n            <thead>\n              <tr>\n                <th>LastName</th>\n                <th>FirstName</th>\n                <th>EnrollDate</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let sv of students\">\n                <td>{{sv.LastName}}</td>\n                <td>{{sv.FirstMidName}}</td>\n                <td>{{sv.EnrollmentDate}}</td>\n                <td>\n                  <a routerLink=\"/sv-detail/{{sv.ID}}\" (click) = chooseStudent(sv.ID)><i class=\"fas fa-info info-ico\"></i></a> \n                  <button (click) = removeStudent(sv.ID)><i class=\"fas fa-trash del-ico\"></i> </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">Showing 1 of 3</div>\n        <div class=\"col-md-6 foot-card\">\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fas fa-forward\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sv-detail/sv-detail.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sv-detail/sv-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=container>\n  <ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Sinhvien</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">{{sinhvien.LastName}}</a></li>\n  </ul>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\"><i class=\"fas fa-table\"></i> Details</div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"input-group col-md-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search....\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg-primary\"><i class=\"fas fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <br>\n            <div class=row>\n            <div class=\"col-md-4\">\n              Last Name : {{sinhvien.LastName}}\n            </div>\n            <div class=\"col-md-4\">\n              First Name : {{sinhvien.FirstMidName}}\n            </div>\n            <div class=\"col-md-4\">\n              Enroll Date : {{sinhvien.EnrollmentDate}} 12:00:00 AM\n            </div>\n          </div>\n          <br>\n        </div>\n        <div class=\"col-md-12\">\n          <table class=\"table table-bordered text-left sv-table\">\n            <thead>\n              <tr>\n                <th>Course Title</th>\n                <th>Grade</th>\n                <th>Credits</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let ele of thongtinlienquansv\">\n                <td>{{ele.Title}} </td>\n                <td>{{ele.Grade}}</td>\n                <td>{{ele.Credits}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/thuong/thuong.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thuong/thuong.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>TÍnh thưởng</h2>\n      <div class=\"card\">\n        <div class=\"card-header\">Tính thưởng tết nguyên đán</div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"POST\">\n            <div class=\"form-group\">\n              <label for=\"\">Họ và tên</label><br>\n              <input type=\"text\" [(ngModel)]=\"cn.ten\" [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Luong</label>\n              <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cn.luong\" [ngModelOptions]=\"{standalone: true}\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">VNĐ</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Giới tính</label><br>\n              <input type=\"radio\" value=\"nam\" name=\"gender\" [(ngModel)]=\"cn.gioitinh\"\n                [ngModelOptions]=\"{standalone: true}\" /> Nam <input type=\"radio\" value=\"nu\" name=\"gender\"\n                [(ngModel)]=\"cn.gioitinh\" /> Nữ\n            </div>\n            <div class=\"form-group\">\n              <label for=\"\">Tuổi</label><br>\n              <select name=\"tuoi\" id=\"cn-gender\" [(ngModel)]=\"cn.tuoi\" [ngModelOptions]=\"{standalone: true}\">\n                <option value=\"1\">Dưới 25</option>\n                <option value=\"2\">Từ 25 đến 40</option>\n                <option value=\"3\">Trên 40 </option>\n              </select>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          Tiền thưởng : {{cn.thuong}}\n        </div>\n      </div>\n      <br>\n      <button type=\"button\" (click)=\"thuong()\" class=\"btn btn-primary\">Tinh Thuong</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'lab1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_dt_product_dt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-dt/product-dt.component */ "./src/app/product-dt/product-dt.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _center_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./center/center.component */ "./src/app/center/center.component.ts");
/* harmony import */ var _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-cart/product-cart.component */ "./src/app/product-cart/product-cart.component.ts");
/* harmony import */ var _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sinhvien/sinhvien.component */ "./src/app/sinhvien/sinhvien.component.ts");
/* harmony import */ var _card_info_card_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-info/card-info.component */ "./src/app/card-info/card-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _sv_detail_sv_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sv-detail/sv-detail.component */ "./src/app/sv-detail/sv-detail.component.ts");
/* harmony import */ var _student_info_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student-info.service */ "./src/app/student-info.service.ts");
/* harmony import */ var _congnghe_congnghe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./congnghe/congnghe.component */ "./src/app/congnghe/congnghe.component.ts");
/* harmony import */ var _chungloai_chungloai_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chungloai/chungloai.component */ "./src/app/chungloai/chungloai.component.ts");
/* harmony import */ var _congnghe_detail_congnghe_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./congnghe-detail/congnghe-detail.component */ "./src/app/congnghe-detail/congnghe-detail.component.ts");
/* harmony import */ var _tech_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tech-service.service */ "./src/app/tech-service.service.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _hinhchunhat_hinhchunhat_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hinhchunhat/hinhchunhat.component */ "./src/app/hinhchunhat/hinhchunhat.component.ts");
/* harmony import */ var _hocluc_hocluc_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hocluc/hocluc.component */ "./src/app/hocluc/hocluc.component.ts");
/* harmony import */ var _thuong_thuong_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./thuong/thuong.component */ "./src/app/thuong/thuong.component.ts");
/* harmony import */ var _banhang_banhang_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./banhang/banhang.component */ "./src/app/banhang/banhang.component.ts");
/* harmony import */ var _kiemloi_kiemloi_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./kiemloi/kiemloi.component */ "./src/app/kiemloi/kiemloi.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _product_dt_product_dt_component__WEBPACK_IMPORTED_MODULE_5__["ProductDTComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
            _center_center_component__WEBPACK_IMPORTED_MODULE_7__["CenterComponent"],
            _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_8__["ProductCartComponent"],
            _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_9__["SinhvienComponent"],
            _card_info_card_info_component__WEBPACK_IMPORTED_MODULE_10__["CardInfoComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
            _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"],
            _sv_detail_sv_detail_component__WEBPACK_IMPORTED_MODULE_14__["SvDetailComponent"],
            _congnghe_congnghe_component__WEBPACK_IMPORTED_MODULE_16__["CongngheComponent"],
            _chungloai_chungloai_component__WEBPACK_IMPORTED_MODULE_17__["ChungloaiComponent"],
            _congnghe_detail_congnghe_detail_component__WEBPACK_IMPORTED_MODULE_18__["CongngheDetailComponent"],
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
            _hinhchunhat_hinhchunhat_component__WEBPACK_IMPORTED_MODULE_23__["HinhchunhatComponent"],
            _hocluc_hocluc_component__WEBPACK_IMPORTED_MODULE_24__["HoclucComponent"],
            _thuong_thuong_component__WEBPACK_IMPORTED_MODULE_25__["ThuongComponent"],
            _banhang_banhang_component__WEBPACK_IMPORTED_MODULE_26__["BanhangComponent"],
            _kiemloi_kiemloi_component__WEBPACK_IMPORTED_MODULE_27__["KiemloiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                { path: '', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"] },
                { path: 'product-detail/:id', component: _product_dt_product_dt_component__WEBPACK_IMPORTED_MODULE_5__["ProductDTComponent"] },
                { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"] },
                { path: 'product-cart', component: _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_8__["ProductCartComponent"] },
                { path: 'sinhvien', component: _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_9__["SinhvienComponent"] },
                { path: 'main-menu', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"] },
                { path: 'sv-detail/:svId', component: _sv_detail_sv_detail_component__WEBPACK_IMPORTED_MODULE_14__["SvDetailComponent"] },
                { path: 'cong-nghe', component: _congnghe_congnghe_component__WEBPACK_IMPORTED_MODULE_16__["CongngheComponent"] },
                { path: 'chung-loai/:clId', component: _chungloai_chungloai_component__WEBPACK_IMPORTED_MODULE_17__["ChungloaiComponent"] },
                { path: 'cong-nghe-detail', component: _congnghe_detail_congnghe_detail_component__WEBPACK_IMPORTED_MODULE_18__["CongngheDetailComponent"] },
                { path: 'pagination', component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"] },
                { path: 'hinhchunhat', component: _hinhchunhat_hinhchunhat_component__WEBPACK_IMPORTED_MODULE_23__["HinhchunhatComponent"] },
                { path: 'hocluc', component: _hocluc_hocluc_component__WEBPACK_IMPORTED_MODULE_24__["HoclucComponent"] },
                { path: 'thuong', component: _thuong_thuong_component__WEBPACK_IMPORTED_MODULE_25__["ThuongComponent"] },
                { path: 'banhang', component: _banhang_banhang_component__WEBPACK_IMPORTED_MODULE_26__["BanhangComponent"] },
                { path: 'kiemloi', component: _kiemloi_kiemloi_component__WEBPACK_IMPORTED_MODULE_27__["KiemloiComponent"] }
            ])
        ],
        providers: [_student_info_service__WEBPACK_IMPORTED_MODULE_15__["StudentInfoService"], _tech_service_service__WEBPACK_IMPORTED_MODULE_19__["TechServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/banhang/banhang.component.css":
/*!***********************************************!*\
  !*** ./src/app/banhang/banhang.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYmFuaGFuZy9iYW5oYW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/banhang/banhang.component.ts":
/*!**********************************************!*\
  !*** ./src/app/banhang/banhang.component.ts ***!
  \**********************************************/
/*! exports provided: BanhangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanhangComponent", function() { return BanhangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BanhangComponent = class BanhangComponent {
    constructor() {
        this.mathang = [{
                name: "nuoc ngot",
                price: 10000,
                soluong: 0,
                tong: 0,
                check: false
            },
            {
                name: "ca phe den",
                price: 12000,
                soluong: 0,
                tong: 0,
                check: false
            },
            {
                name: "thuoc la",
                price: 18000,
                soluong: 0,
                tong: 0,
                check: false
            }
        ];
        this.tongTien = 0;
    }
    tongTungCai() {
        this.mathang.forEach(element => {
            if (element.soluong <= 0)
                element.soluong = 0;
            if (element.check) {
                element.tong = element.price * element.soluong;
            }
        });
    }
    tinhtongTien() {
        var tong = 0;
        this.mathang.forEach(element => {
            tong += element.tong;
        });
        return tong;
    }
    ngOnInit() {
    }
};
BanhangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banhang',
        template: __webpack_require__(/*! raw-loader!./banhang.component.html */ "./node_modules/raw-loader/index.js!./src/app/banhang/banhang.component.html"),
        styles: [__webpack_require__(/*! ./banhang.component.css */ "./src/app/banhang/banhang.component.css")]
    })
], BanhangComponent);



/***/ }),

/***/ "./src/app/card-info/card-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-info/card-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\r\n    width:300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jYXJkLWluZm8vY2FyZC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL2NhcmQtaW5mby9jYXJkLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3Age1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card-info/card-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-info/card-info.component.ts ***!
  \**************************************************/
/*! exports provided: CardInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInfoComponent", function() { return CardInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardInfoComponent = class CardInfoComponent {
    constructor() {
        this.people = {
            "name": "Nguyễn Văn Tèo",
            "img": "avatar.png",
            "birth": "20-01-1999",
            "gender": "Nam",
            "mark": 8.5
        };
    }
    ngOnInit() {
    }
};
CardInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-info',
        template: __webpack_require__(/*! raw-loader!./card-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-info/card-info.component.html"),
        styles: [__webpack_require__(/*! ./card-info.component.css */ "./src/app/card-info/card-info.component.css")]
    })
], CardInfoComponent);



/***/ }),

/***/ "./src/app/center/center.component.css":
/*!*********************************************!*\
  !*** ./src/app/center/center.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-column {\r\n    background-color: rgba(0,0,0,0.5);\r\n    color:white;\r\n    border-radius: 5px;\r\n}\r\n.logo{\r\n    width:100px;\r\n    height:100px;\r\n}\r\n.left-nav li a  {\r\n    color:white;\r\n    font-weight: 400;\r\n}\r\n.fas {\r\n    width:30px;\r\n}\r\n.pad-20 {\r\n    padding:20px;\r\n}\r\n#entry {\r\n    border-radius: 5px;\r\n    width:100px;\r\n    height:30px;\r\n    margin:0 20px;\r\n}\r\n.ex-but, .pdf-but, .add-but, .search-field {\r\n    height: 30px;\r\n    margin-left:5px;\r\n    line-height: 0px;\r\n}\r\n.search-box {\r\n    display: inline;\r\n    position: relative;\r\n    height:30px;\r\n}\r\n.search-field {\r\n    border:0.5px solid blue;\r\n    vertical-align: middle;\r\n    border-radius: 5px;\r\n    padding-left:30px;\r\n    font-size:12px;\r\n    color:gray;\r\n}\r\n.search-icon {\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    transform:translateY(30%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jZW50ZXIvY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxNQUFNO0lBQ04seUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFwcC9jZW50ZXIvY2VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxufVxyXG4ubGVmdC1uYXYgbGkgYSAge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mYXMge1xyXG4gICAgd2lkdGg6MzBweDtcclxufVxyXG4ucGFkLTIwIHtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG4jZW50cnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG1hcmdpbjowIDIwcHg7XHJcbn1cclxuLmV4LWJ1dCwgLnBkZi1idXQsIC5hZGQtYnV0LCAuc2VhcmNoLWZpZWxkIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbn1cclxuLnNlYXJjaC1ib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLnNlYXJjaC1maWVsZCB7XHJcbiAgICBib3JkZXI6MC41cHggc29saWQgYmx1ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgzMCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/center/center.component.ts":
/*!********************************************!*\
  !*** ./src/app/center/center.component.ts ***!
  \********************************************/
/*! exports provided: CenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterComponent", function() { return CenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CenterComponent = class CenterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-center',
        template: __webpack_require__(/*! raw-loader!./center.component.html */ "./node_modules/raw-loader/index.js!./src/app/center/center.component.html"),
        styles: [__webpack_require__(/*! ./center.component.css */ "./src/app/center/center.component.css")]
    })
], CenterComponent);



/***/ }),

/***/ "./src/app/chungloai/chungloai.component.css":
/*!***************************************************!*\
  !*** ./src/app/chungloai/chungloai.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carou-item-img {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n  \r\n  .carou-control {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .cart-icon {\r\n    width:50%;\r\n    height:50px;\r\n    position: absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n  }\r\n  \r\n  .pad-t-15 {\r\n    padding-top:15px;\r\n  }\r\n  \r\n  .cart-info p {\r\n    margin:0;\r\n  }\r\n  \r\n  .pos-relative {\r\n    position: relative;\r\n  }\r\n  \r\n  .right-box {\r\n    border:1px solid lightgray;\r\n    border-radius:5px;\r\n    padding:10px;\r\n    margin-bottom:15px;\r\n  }\r\n  \r\n  .keywords-field {\r\n    width:100%;\r\n    border-radius:5px;\r\n    border:0.5px solid lightgray;\r\n    padding:10px;\r\n  }\r\n  \r\n  .right-box .list-group{\r\n    width:100%;\r\n  }\r\n  \r\n  .list-group-item.active {\r\n    background-color: rgba(0,0,0,.03);\r\n    border:1px solid rgba(0,0,0,.03);\r\n    color:black;\r\n  }\r\n  \r\n  .menu-bar{\r\n    width:100%;\r\n    border-radius:5px;\r\n  }\r\n  \r\n  .pad-l-0 {\r\n    padding-left:0;\r\n  }\r\n  \r\n  .pad-t-15 {\r\n      padding-top:15px;\r\n  }\r\n  \r\n  .nav-item {\r\n    margin:0 10px;\r\n  }\r\n  \r\n  .chungloai-list {\r\n    padding-left:15px; ;\r\n}\r\n  \r\n  .cl-item-button {\r\n    position: absolute;\r\n    right:20px;\r\n    bottom:20px;\r\n}\r\n  \r\n  .cl-item-img {\r\n    height:150px;\r\n}\r\n  \r\n  .cl-action {\r\n    margin-top:30px;\r\n}\r\n  \r\n  .cl-action div {\r\n    position: absolute;\r\n    left:50%;\r\n    transform: translateX(-50%);\r\n}\r\n  \r\n  .cl-action-icon {\r\n    border-radius:50%;\r\n    margin:0 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaHVuZ2xvYWkvY2h1bmdsb2FpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7RUFDaEM7O0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUNGO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0VBQ0E7SUFDSSxZQUFZO0FBQ2hCOztFQUNBO0lBQ0ksZUFBZTtBQUNuQjs7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0FBQy9COztFQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwL2NodW5nbG9haS9jaHVuZ2xvYWkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdS1pdGVtLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdS1jb250cm9sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgLmNhcnQtaWNvbiB7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB9XHJcbiAgLnBhZC10LTE1IHtcclxuICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgfVxyXG4gIC5jYXJ0LWluZm8gcCB7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgLnBvcy1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5yaWdodC1ib3gge1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICB9XHJcbiAgLmtleXdvcmRzLWZpZWxkIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGJvcmRlcjowLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG4gIC5yaWdodC1ib3ggLmxpc3QtZ3JvdXB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAubWVudS1iYXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgfVxyXG4gIC5wYWQtbC0wIHtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gIH1cclxuICAucGFkLXQtMTUge1xyXG4gICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gIH1cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luOjAgMTBweDtcclxuICB9XHJcbi5jaHVuZ2xvYWktbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDsgO1xyXG59ICBcclxuLmNsLWl0ZW0tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICBib3R0b206MjBweDtcclxufVxyXG4uY2wtaXRlbS1pbWcge1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG59XHJcbi5jbC1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi5jbC1hY3Rpb24gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5jbC1hY3Rpb24taWNvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIG1hcmdpbjowIDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chungloai/chungloai.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chungloai/chungloai.component.ts ***!
  \**************************************************/
/*! exports provided: ChungloaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungloaiComponent", function() { return ChungloaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tech_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tech-service.service */ "./src/app/tech-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChungloaiComponent = class ChungloaiComponent {
    constructor(_techServices, route) {
        this._techServices = _techServices;
        this.route = route;
    }
    ngOnInit() {
        this.chungLoai = this._techServices.chungLoai;
        this.route.paramMap.subscribe(param => {
            this.clId = +param.get("clId");
        });
        this.cl = this.chungLoai.find(cl => cl.clId === this.clId);
    }
};
ChungloaiComponent.ctorParameters = () => [
    { type: _tech_service_service__WEBPACK_IMPORTED_MODULE_2__["TechServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ChungloaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chungloai',
        template: __webpack_require__(/*! raw-loader!./chungloai.component.html */ "./node_modules/raw-loader/index.js!./src/app/chungloai/chungloai.component.html"),
        styles: [__webpack_require__(/*! ./chungloai.component.css */ "./src/app/chungloai/chungloai.component.css")]
    })
], ChungloaiComponent);



/***/ }),

/***/ "./src/app/congnghe-detail/congnghe-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/congnghe-detail/congnghe-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-icon {\r\n  width: 50%;\r\n  height: 50px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.pad-t-15 {\r\n  padding-top: 15px;\r\n}\r\n\r\n.cart-info p {\r\n  margin: 0;\r\n}\r\n\r\n.pos-relative {\r\n  position: relative;\r\n}\r\n\r\n.right-box {\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.keywords-field {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 0.5px solid lightgray;\r\n  padding: 10px;\r\n}\r\n\r\n.right-box .list-group {\r\n  width: 100%;\r\n}\r\n\r\n.list-group-item.active {\r\n  background-color: rgba(0, 0, 0, .03);\r\n  border: 1px solid rgba(0, 0, 0, .03);\r\n  color: black;\r\n}\r\n\r\n.menu-bar {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.pad-l-0 {\r\n  padding-left: 0;\r\n}\r\n\r\n.nav-item {\r\n  margin: 0 10px;\r\n}\r\n\r\n.related-it-img {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.related-item-list {\r\n    margin:0 auto;\r\n}\r\n\r\n.related-item-list .list-group .list-group-item {\r\n    margin:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25nbmdoZS1kZXRhaWwvY29uZ25naGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL2NvbmduZ2hlLWRldGFpbC9jb25nbmdoZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWljb24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5wYWQtdC0xNSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJ0LWluZm8gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucG9zLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yaWdodC1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ua2V5d29yZHMtZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtYm94IC5saXN0LWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjAzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wMyk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudS1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBhZC1sLTAge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnJlbGF0ZWQtaXQtaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4ucmVsYXRlZC1pdGVtLWxpc3Qge1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4ucmVsYXRlZC1pdGVtLWxpc3QgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBtYXJnaW46MTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/congnghe-detail/congnghe-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/congnghe-detail/congnghe-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: CongngheDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongngheDetailComponent", function() { return CongngheDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CongngheDetailComponent = class CongngheDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
CongngheDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congnghe-detail',
        template: __webpack_require__(/*! raw-loader!./congnghe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/congnghe-detail/congnghe-detail.component.html"),
        styles: [__webpack_require__(/*! ./congnghe-detail.component.css */ "./src/app/congnghe-detail/congnghe-detail.component.css")]
    })
], CongngheDetailComponent);



/***/ }),

/***/ "./src/app/congnghe/congnghe.component.css":
/*!*************************************************!*\
  !*** ./src/app/congnghe/congnghe.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carou-item-img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.carou-control {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.cart-icon {\r\n  width:50%;\r\n  height:50px;\r\n  position: absolute;\r\n  top:50%;\r\n  left:50%;\r\n  transform:translate(-50%,-50%);\r\n}\r\n\r\n.pad-t-15 {\r\n  padding-top:15px;\r\n}\r\n\r\n.cart-info p {\r\n  margin:0;\r\n}\r\n\r\n.pos-relative {\r\n  position: relative;\r\n}\r\n\r\n.right-box {\r\n  border:1px solid lightgray;\r\n  border-radius:5px;\r\n  padding:10px;\r\n  margin-bottom:15px;\r\n}\r\n\r\n.keywords-field {\r\n  width:100%;\r\n  border-radius:5px;\r\n  border:0.5px solid lightgray;\r\n  padding:10px;\r\n}\r\n\r\n.right-box .list-group{\r\n  width:100%;\r\n}\r\n\r\n.list-group-item.active {\r\n  background-color: rgba(0,0,0,.03);\r\n  border:1px solid rgba(0,0,0,.03);\r\n  color:black;\r\n}\r\n\r\n.menu-bar{\r\n  width:100%;\r\n  border-radius:5px;\r\n}\r\n\r\n.pad-l-0 {\r\n  padding-left:0;\r\n}\r\n\r\n.nav-item {\r\n  margin:0 10px;\r\n}\r\n\r\n.chungloai-list {\r\n  border-radius:5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25nbmdoZS9jb25nbmdoZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAvY29uZ25naGUvY29uZ25naGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdS1pdGVtLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNhcm91LWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uY2FydC1pY29uIHtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcbi5wYWQtdC0xNSB7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxufVxyXG4uY2FydC1pbmZvIHAge1xyXG4gIG1hcmdpbjowO1xyXG59XHJcbi5wb3MtcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmlnaHQtYm94IHtcclxuICBib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcbi5rZXl3b3Jkcy1maWVsZCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBib3JkZXI6MC41cHggc29saWQgbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4ucmlnaHQtYm94IC5saXN0LWdyb3Vwe1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4ubWVudS1iYXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4ucGFkLWwtMCB7XHJcbiAgcGFkZGluZy1sZWZ0OjA7XHJcbn1cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW46MCAxMHB4O1xyXG59XHJcbi5jaHVuZ2xvYWktbGlzdCB7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/congnghe/congnghe.component.ts":
/*!************************************************!*\
  !*** ./src/app/congnghe/congnghe.component.ts ***!
  \************************************************/
/*! exports provided: CongngheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongngheComponent", function() { return CongngheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tech_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tech-service.service */ "./src/app/tech-service.service.ts");



let CongngheComponent = class CongngheComponent {
    constructor(_techServices) {
        this._techServices = _techServices;
    }
    ngOnInit() {
        this.chungLoai = this._techServices.chungLoai;
    }
};
CongngheComponent.ctorParameters = () => [
    { type: _tech_service_service__WEBPACK_IMPORTED_MODULE_2__["TechServiceService"] }
];
CongngheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congnghe',
        template: __webpack_require__(/*! raw-loader!./congnghe.component.html */ "./node_modules/raw-loader/index.js!./src/app/congnghe/congnghe.component.html"),
        styles: [__webpack_require__(/*! ./congnghe.component.css */ "./src/app/congnghe/congnghe.component.css")]
    })
], CongngheComponent);



/***/ }),

/***/ "./src/app/hinhchunhat/hinhchunhat.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hinhchunhat/hinhchunhat.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gt {\r\n    height:38px;\r\n    width:200px;\r\n}\r\ninput{\r\n    width:100%;\r\n}\r\ninput[type = 'radio'] {\r\n    width:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oaW5oY2h1bmhhdC9oaW5oY2h1bmhhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYXBwL2hpbmhjaHVuaGF0L2hpbmhjaHVuaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3Qge1xyXG4gICAgaGVpZ2h0OjM4cHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuaW5wdXRbdHlwZSA9ICdyYWRpbyddIHtcclxuICAgIHdpZHRoOmF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hinhchunhat/hinhchunhat.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hinhchunhat/hinhchunhat.component.ts ***!
  \******************************************************/
/*! exports provided: HinhchunhatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HinhchunhatComponent", function() { return HinhchunhatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HinhchunhatComponent = class HinhchunhatComponent {
    constructor() {
        this.hcn = {
            dai: null,
            rong: null,
            chuvi: null,
            dtich: null,
        };
    }
    calculate() {
        this.hcn.chuvi = (this.hcn.dai * 1 + this.hcn.rong * 1) * 2;
        this.hcn.dtich = this.hcn.dai * this.hcn.rong;
    }
    ngOnInit() { }
};
HinhchunhatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hinhchunhat',
        template: __webpack_require__(/*! raw-loader!./hinhchunhat.component.html */ "./node_modules/raw-loader/index.js!./src/app/hinhchunhat/hinhchunhat.component.html"),
        styles: [__webpack_require__(/*! ./hinhchunhat.component.css */ "./src/app/hinhchunhat/hinhchunhat.component.css")]
    })
], HinhchunhatComponent);



/***/ }),

/***/ "./src/app/hocluc/hocluc.component.css":
/*!*********************************************!*\
  !*** ./src/app/hocluc/hocluc.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaG9jbHVjL2hvY2x1Yy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hocluc/hocluc.component.ts":
/*!********************************************!*\
  !*** ./src/app/hocluc/hocluc.component.ts ***!
  \********************************************/
/*! exports provided: HoclucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoclucComponent", function() { return HoclucComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HoclucComponent = class HoclucComponent {
    constructor() {
        this.sv = {
            ten: "",
            ngaysinh: "",
            gioitinh: "nam",
            diem: 0,
            hocluc: "",
        };
    }
    xeploai() {
        if (this.sv.diem >= 5) {
            this.sv.hocluc = "Dau";
            document.getElementById("hocluc").style.backgroundColor = "lightgreen";
        }
        else {
            this.sv.hocluc = "Rot";
            document.getElementById("hocluc").style.backgroundColor = "lightcoral";
        }
    }
    ngOnInit() { }
};
HoclucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hocluc',
        template: __webpack_require__(/*! raw-loader!./hocluc.component.html */ "./node_modules/raw-loader/index.js!./src/app/hocluc/hocluc.component.html"),
        styles: [__webpack_require__(/*! ./hocluc.component.css */ "./src/app/hocluc/hocluc.component.css")]
    })
], HoclucComponent);



/***/ }),

/***/ "./src/app/kiemloi/kiemloi.component.css":
/*!***********************************************!*\
  !*** ./src/app/kiemloi/kiemloi.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    width:100%;\r\n}\r\ninput[type = 'radio'] {\r\n    width:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9raWVtbG9pL2tpZW1sb2kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC9raWVtbG9pL2tpZW1sb2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5pbnB1dFt0eXBlID0gJ3JhZGlvJ10ge1xyXG4gICAgd2lkdGg6YXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/kiemloi/kiemloi.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kiemloi/kiemloi.component.ts ***!
  \**********************************************/
/*! exports provided: KiemloiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemloiComponent", function() { return KiemloiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KiemloiComponent = class KiemloiComponent {
    constructor() {
        this.cn = {
            ten: "",
            luong: null,
            gioitinh: 'nam',
            tuoi: '1',
            thuong: null,
            rate: null,
        };
    }
    thuong() {
        if (this.cn.ten == "") {
            this.success = false;
            this.errorTen = true;
        }
        else {
            this.success = true;
            this.errorTen = false;
        }
        if (this.cn.luong < 2000000) {
            this.success = false;
            this.errorLuong = true;
        }
        else {
            this.success = true;
            this.errorLuong = false;
        }
        if (this.cn.ten == "" || this.cn.luong < 2000000) {
            this.success = false;
        }
        else {
            this.success = true;
        }
        if (this.success == true) {
            switch (this.cn.tuoi) {
                case "1":
                    this.cn.rate = 0.07;
                    break;
                case "2":
                    this.cn.rate = 0.1;
                    break;
                case "3":
                    this.cn.rate = 0.15;
                    break;
            }
            this.cn.thuong = (this.cn.luong * 1) * this.cn.rate;
            if (this.cn.gioitinh == "nu") {
                this.cn.thuong += 200000;
            }
            this.cn.thuong = this.cn.thuong * 100 / 100;
        }
    }
    ngOnInit() { }
};
KiemloiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kiemloi',
        template: __webpack_require__(/*! raw-loader!./kiemloi.component.html */ "./node_modules/raw-loader/index.js!./src/app/kiemloi/kiemloi.component.html"),
        styles: [__webpack_require__(/*! ./kiemloi.component.css */ "./src/app/kiemloi/kiemloi.component.css")]
    })
], KiemloiComponent);



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\r\n    display:block;\r\n}\r\n#navbardrop {\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbiNuYXZiYXJkcm9wIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainMenuComponent = class MainMenuComponent {
    constructor() {
        this.toggleTus = false;
    }
    toggleMenu() {
        this.toggleTus = !this.toggleTus;
    }
    ngOnInit() {
    }
};
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html"),
        styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round-corner button {\r\n    margin: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJhcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmQtY29ybmVyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.list = [{
                "name": "Aniseed Syrup",
                "price": 190,
                "discount": 0.19,
                "date": "2000-03-16"
            },
            {
                "name": "Change",
                "price": 19,
                "discount": 0,
                "date": "1982-12-18"
            },
            {
                "name": "Aniseed Syrup",
                "price": 10,
                "discount": 0,
                "date": "1973-06-14"
            },
            {
                "name": "Chef Anton\u0027s Cajun Seasoning",
                "price": 22,
                "discount": 0,
                "date": "1976-03-10"
            }, {
                "name": "Chef Anton\u0027s Gumbo Mix",
                "price": 21.35,
                "discount": 0,
                "date": "1978-12-06"
            }, {
                "name": "Grandma\u0027s Boysenberry Spread",
                "price": 25,
                "discount": 0.03,
                "date": "1981-09-03"
            }, {
                "name": "Uncle Bob\u0027s Organic Dried Pears",
                "price": 30,
                "discount": 0.03,
                "date": "1983-03-13"
            }, {
                "name": "Northwoods Cranberry Sauce",
                "price": 40,
                "discount": 0.04,
                "date": "1972-02-26"
            }, {
                "name": "Mishi Kobe Niku",
                "price": 97,
                "discount": 0.1,
                "date": "1985-12-10"
            }, {
                "name": "Ikura",
                "price": 31,
                "discount": 0.03,
                "date": "1994-03-23"
            }, {
                "name": "Queso Cabrales",
                "price": 21,
                "discount": 0,
                "date": "1985-11-28"
            }, {
                "name": "Queso Manchego La Pastora",
                "price": 38,
                "discount": 0.04,
                "date": "1988-08-27"
            }, {
                "name": "Konbu",
                "price": 6,
                "discount": 0.5,
                "date": "2002-07-01"
            }, {
                "name": "Tofu",
                "price": 23.25,
                "discount": 0,
                "date": "2002-06-24"
            }, {
                "name": "Genen Shouyu",
                "price": 15.5,
                "discount": 0,
                "date": "1991-05-04"
            }, {
                "name": "Pavlova",
                "price": 17.45,
                "discount": 0,
                "date": "1996-11-09"
            }, {
                "name": "Alice Mutton",
                "price": 39,
                "discount": 0.04,
                "date": "2007-12-15"
            }, {
                "name": "Carnarvon Tigers",
                "price": 62.5,
                "discount": 0.06,
                "date": "2011-04-13"
            }, {
                "name": "Teatime Chocolate Biscuits",
                "price": 9.2,
                "discount": 0.5,
                "date": "2005-02-02"
            }, {
                "name": "Sir Rodney\u0027s Marmalade",
                "price": 81,
                "discount": 0.08,
                "date": "2007-11-01"
            }, {
                "name": "Sir Rodney\u0027s Scones",
                "price": 10,
                "discount": 0,
                "date": "2010-07-29"
            }, {
                "name": "Gustaf flower",
                "price": 21,
                "discount": 0,
                "date": "2008-12-01"
            }, {
                "name": "Tunnbr Korea",
                "price": 9,
                "discount": 0.5,
                "date": "2011-08-31"
            }, {
                "name": "Guarana¡ Fanta¡stica",
                "price": 4.5,
                "discount": 0.45,
                "date": "2008-03-13"
            }, {
                "name": "NuNuCa Nuaa-Nougat-Creme",
                "price": 14,
                "discount": 0,
                "date": "2011-07-20"
            }, {
                "name": "Gumbar Gummibarchen",
                "price": 31.23,
                "discount": 0.03,
                "date": "2009-04-17"
            }, {
                "name": "Schoggi Schokolade",
                "price": 43.9,
                "discount": 0.04,
                "date": "2007-01-14"
            }, {
                "name": "Russle Sauerkraut",
                "price": 45.6,
                "discount": 0.05,
                "date": "2011-01-14"
            }, {
                "name": "Tharinger Rostbratwurst",
                "price": 123.79,
                "discount": 0.12,
                "date": "2010-12-21"
            }, {
                "name": "Nord-Ost Matjeshering",
                "price": 25.89,
                "discount": 0.03,
                "date": "2011-05-14"
            }, {
                "name": "Gorgonzola Telino",
                "price": 12.5,
                "discount": 0,
                "date": "2010-10-30"
            }, {
                "name": "Mascarpone Fabioli",
                "price": 32,
                "discount": 0.03,
                "date": "2011-07-30"
            }, {
                "name": "Geitost",
                "price": 2.5,
                "discount": 0.25,
                "date": "2010-04-29"
            }, {
                "name": "Sasquatch Ale",
                "price": 14,
                "discount": 0,
                "date": "2010-07-30"
            }, {
                "name": "Steeleye Stout",
                "price": 18,
                "discount": 0,
                "date": "2011-04-25"
            }, {
                "name": "Inlagd Sill",
                "price": 19,
                "discount": 0,
                "date": "1980-11-28"
            }, {
                "name": "Gravad lax",
                "price": 26,
                "discount": 0.03,
                "date": "1983-08-31"
            }, {
                "name": "Cate de Blaye",
                "price": 263.5,
                "discount": 0.26,
                "date": "1981-07-12"
            }, {
                "name": "Chartreuse verte",
                "price": 18,
                "discount": 0,
                "date": "1984-04-08"
            }, {
                "name": "Boston Crab Meat",
                "price": 18.4,
                "discount": 0,
                "date": "1976-12-08"
            }, {
                "name": "Jack\u0027s New England Clam Chowder",
                "price": 9.65,
                "discount": 0.5,
                "date": "1979-09-10"
            }, {
                "name": "Singaporean Hokkien Fried Mee",
                "price": 14,
                "discount": 0,
                "date": "1973-11-21"
            }, {
                "name": "Ipoh Coffee",
                "price": 46,
                "discount": 0.05,
                "date": "1980-03-20"
            }, {
                "name": "Gula Malacca",
                "price": 19.45,
                "discount": 0,
                "date": "1970-10-25"
            }, {
                "name": "Rogede sild",
                "price": 9.5,
                "discount": 0.5,
                "date": "1990-09-21"
            }, {
                "name": "Spegesild",
                "price": 12,
                "discount": 0,
                "date": "1993-06-23"
            }, {
                "name": "Zaanse koeken",
                "price": 9.5,
                "discount": 0.5,
                "date": "1981-11-25"
            }, {
                "name": "Chocolade",
                "price": 12.75,
                "discount": 0,
                "date": "1984-08-24"
            }, {
                "name": "Maxilaku",
                "price": 20,
                "discount": 0,
                "date": "1987-05-23"
            }, {
                "name": "Valkoinen suklaa",
                "price": 16.25,
                "discount": 0,
                "date": "1990-02-17"
            }, {
                "name": "Manjimup Dried Apples",
                "price": 53,
                "discount": 0.05,
                "date": "2004-05-22"
            }, {
                "name": "Filo Mix",
                "price": 7,
                "discount": 0.5,
                "date": "2001-05-20"
            }, {
                "name": "Perth Pasties",
                "price": 32.8,
                "discount": 0.03,
                "date": "2007-01-06"
            }, {
                "name": "Tourtiare",
                "price": 7.45,
                "discount": 0.5,
                "date": "2009-10-07"
            }, {
                "name": "Pacta chinois",
                "price": 24,
                "discount": 0,
                "date": "2007-07-08"
            }, {
                "name": "Gnocchi di nonna Alice",
                "price": 38,
                "discount": 0.04,
                "date": "2007-05-18"
            }, {
                "name": "Ravioli Angelo",
                "price": 19.5,
                "discount": 0,
                "date": "2010-02-16"
            }, {
                "name": "Escargots de Bourgogne",
                "price": 13.25,
                "discount": 0,
                "date": "2011-07-26"
            }, {
                "name": "Raclette Courdavault",
                "price": 55,
                "discount": 0.05,
                "date": "2007-09-22"
            }, {
                "name": "Camembert Pierrot",
                "price": 34,
                "discount": 0.03,
                "date": "2010-06-20"
            }, {
                "name": "Sirop d\u0027aOrable",
                "price": 28.5,
                "discount": 0.03,
                "date": "2007-05-29"
            }, {
                "name": "Tarte au sucre",
                "price": 49.3,
                "discount": 0.05,
                "date": "2008-01-21"
            }, {
                "name": "Vegie-spread",
                "price": 43.9,
                "discount": 0.04,
                "date": "2007-11-21"
            }, {
                "name": "Wimmers gute Semmelknadel",
                "price": 33.25,
                "discount": 0.03,
                "date": "2009-05-15"
            }, {
                "name": "Louisiana Fiery Hot Pepper Sauce",
                "price": 21.05,
                "discount": 0,
                "date": "2008-05-15"
            }, {
                "name": "Louisiana Hot Spiced Okra",
                "price": 17,
                "discount": 0,
                "date": "2011-02-10"
            }, {
                "name": "Laughing Lumberjack Lager",
                "price": 14,
                "discount": 0,
                "date": "2010-12-05"
            }, {
                "name": "Scottish Longbreads",
                "price": 12.5,
                "discount": 0,
                "date": "2009-07-08"
            }, {
                "name": "Gudbrandsdalsost",
                "price": 36,
                "discount": 0.04,
                "date": "2011-03-09"
            }, {
                "name": "Outback Lager",
                "price": 15,
                "discount": 0,
                "date": "2009-02-21"
            }, {
                "name": "Flotemysost",
                "price": 21.5,
                "discount": 0,
                "date": "1980-09-04"
            }, {
                "name": "Mozzarella di Giovanni",
                "price": 34.8,
                "discount": 0.03,
                "date": "1983-06-03"
            }, {
                "name": "Rad Kaviar",
                "price": 15,
                "discount": 0,
                "date": "1982-12-03"
            }, {
                "name": "Longlife Tofu",
                "price": 10,
                "discount": 0.5,
                "date": "1982-09-27"
            }, {
                "name": "RhanbrAu Klosterbier",
                "price": 7.75,
                "discount": 0.5,
                "date": "1982-10-31"
            }, {
                "name": "Lakkalik AAri",
                "price": 18,
                "discount": 0,
                "date": "1970-07-28"
            }, {
                "name": "Original Frankfurter grane Soae",
                "price": 13,
                "discount": 0,
                "date": "1976-04-04"
            }, {
                "name": "Chai",
                "price": 19,
                "discount": 0,
                "date": "1984-04-04"
            }, {
                "name": "Mishi Kobe Niku",
                "price": 97,
                "discount": 0.1,
                "date": "1989-07-23"
            }
        ];
        this.itemPage = 10;
        this.curPage = 1;
        this.numberOfPage = (this.list.length % this.itemPage == 0) ? Math.floor(this.list.length / this.itemPage) : (Math.floor(this.list.length / this.itemPage) + 1);
        this.orderName = 'name';
    }
    nextPage() {
        if (this.curPage == this.numberOfPage) {
            return 0;
        }
        else {
            this.curPage++;
        }
    }
    prevPage() {
        if (this.curPage <= 1) {
            return 0;
        }
        else {
            this.curPage--;
        }
    }
    toPage(num) {
        this.curPage = num;
    }
    orderClick(name) {
        this.orderName = name;
    }
    ngOnInit() { }
};
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagination/pagination.component.html"),
        styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/product-cart/product-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-cart/product-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-cart {\r\n    width:50px;\r\n    border:0.5px solid gray;\r\n    padding:2px;\r\n}\r\n.bonus, .minus{\r\n    width:30px;\r\n    height:30px;\r\n    font-size: 16px;\r\n    padding:0;\r\n    line-height:0;\r\n    margin:0 3px;\r\n}\r\n.number {\r\n    margin-right:10px;\r\n}\r\n.btn-delete, .btn-view {\r\n    margin-right:10px;\r\n    height:30px;\r\n    line-height: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0LWNhcnQvcHJvZHVjdC1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC9wcm9kdWN0LWNhcnQvcHJvZHVjdC1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNhcnQge1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGJvcmRlcjowLjVweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZzoycHg7XHJcbn1cclxuLmJvbnVzLCAubWludXN7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaW5lLWhlaWdodDowO1xyXG4gICAgbWFyZ2luOjAgM3B4O1xyXG59XHJcbi5udW1iZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuLmJ0bi1kZWxldGUsIC5idG4tdmlldyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-cart/product-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-cart/product-cart.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartComponent", function() { return ProductCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductCartComponent = class ProductCartComponent {
    constructor() {
        this.cartPD = [
            {
                "id": "pd100",
                "name": "laptop",
                "price": 30000,
                "quantity": 1,
            },
            {
                "id": "pd101",
                "name": "mobile",
                "price": 54000,
                "quantity": 1,
            },
            {
                "id": "pd102",
                "name": "television",
                "price": 22000,
                "quantity": 2,
            },
            {
                "id": "pd103",
                "name": "headphone",
                "price": 1300,
                "quantity": 2,
            },
        ];
    }
    ngOnInit() {
    }
    tongTien() {
        let sum = 0;
        this.cartPD.forEach(function (c) {
            sum += c.price * c.quantity;
        });
        return sum;
    }
    bonus(item) {
        item.quantity++;
    }
    minus(item) {
        if (item.quantity <= 0)
            item.quantity = 0;
        else {
            item.quantity--;
        }
    }
};
ProductCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-cart',
        template: __webpack_require__(/*! raw-loader!./product-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-cart/product-cart.component.html"),
        styles: [__webpack_require__(/*! ./product-cart.component.css */ "./src/app/product-cart/product-cart.component.css")]
    })
], ProductCartComponent);



/***/ }),

/***/ "./src/app/product-dt/product-dt.component.css":
/*!*****************************************************!*\
  !*** ./src/app/product-dt/product-dt.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvZHVjdC1kdC9wcm9kdWN0LWR0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-dt/product-dt.component.ts":
/*!****************************************************!*\
  !*** ./src/app/product-dt/product-dt.component.ts ***!
  \****************************************************/
/*! exports provided: ProductDTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDTComponent", function() { return ProductDTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductDTComponent = class ProductDTComponent {
    constructor(route) {
        this.route = route;
        this.listPD = [{
                "id": 1,
                "image": "leaf-rake.jpg",
                "name": "Leaf Rake",
                "code": "gdn-0011",
                "available": "March 19, 2016",
                "price": 19.95,
                "star": 3.2
            },
            {
                "id": 2,
                "image": "garden.jpg",
                "name": "Garden Cart",
                "code": "gdn-0023",
                "available": "March 18, 2016",
                "price": 32.99,
                "star": 4.1
            },
            {
                "id": 3,
                "image": "hammer.jpg",
                "name": "Hammer",
                "code": "tbx-0048",
                "available": "May 21, 2016",
                "price": 8.9,
                "star": 4.9
            },
            {
                "id": 4,
                "image": "saw.jpg",
                "name": "Saw",
                "code": "tbx-0022",
                "available": "May 15, 2016",
                "price": 11.55,
                "star": 3.9
            },
            {
                "id": 5,
                "image": "controller.jpg",
                "name": "Video Game Controller",
                "code": "gmg-0042",
                "available": "October 15, 2015",
                "price": 35.95,
                "star": 4.5
            }
        ];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(param => {
            this.prodId = +param.get("id");
        });
        this.prod = this.listPD.find(prod => prod.id === this.prodId);
    }
    addToCart(product) {
        window.alert('Your product has been added to the cart!');
    }
};
ProductDTComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductDTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-dt',
        template: __webpack_require__(/*! raw-loader!./product-dt.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-dt/product-dt.component.html"),
        styles: [__webpack_require__(/*! ./product-dt.component.css */ "./src/app/product-dt/product-dt.component.css")]
    })
], ProductDTComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-list {\r\n    width:50px;\r\n}\r\n.star-rate{\r\n    overflow: hidden;   \r\n    position: relative;\r\n}\r\n.hidden {\r\n    position: absolute;\r\n    background-color:white;\r\n    height:20px;\r\n    top:50%;\r\n    width:90px;\r\n    transform: translateY(-50%);\r\n    z-index: 10;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLE9BQU87SUFDUCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZiIsImZpbGUiOiJhcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWxpc3Qge1xyXG4gICAgd2lkdGg6NTBweDtcclxufVxyXG4uc3Rhci1yYXRle1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGlkZGVuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductListComponent = class ProductListComponent {
    constructor() {
        this.listPD = [{
                "id": 1,
                "image": "leaf-rake.jpg",
                "name": "Leaf Rake",
                "code": "gdn-0011",
                "available": "March 19, 2016",
                "price": 19.95,
                "star": 3.2,
                "width": ""
            },
            {
                "id": 2,
                "image": "garden.jpg",
                "name": "Garden Cart",
                "code": "gdn-0023",
                "available": "March 18, 2016",
                "price": 32.99,
                "star": 4.1,
                "width": ""
            },
            {
                "id": 3,
                "image": "hammer.jpg",
                "name": "Hammer",
                "code": "tbx-0048",
                "available": "May 21, 2016",
                "price": 8.9,
                "star": 4.9,
                "width": ""
            },
            {
                "id": 4,
                "image": "saw.jpg",
                "name": "Saw",
                "code": "tbx-0022",
                "available": "May 15, 2016",
                "price": 11.55,
                "star": 3.9,
                "width": ""
            },
            {
                "id": 5,
                "image": "controller.jpg",
                "name": "Video Game Controller",
                "code": "gmg-0042",
                "available": "October 15, 2015",
                "price": 35.95,
                "star": 4.5,
                "width": ""
            }
        ];
        this.isShow = true;
    }
    ngOnInit() {
        this.TinhSao();
    }
    AnHien() {
        this.isShow = !this.isShow;
    }
    TinhSao() {
        this.listPD.forEach(function (p) {
            let width = 0;
            width = (p.star * 17 / 18) * 20;
            p.width = width.toString() + "px";
        });
    }
};
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/sinhvien/sinhvien.component.css":
/*!*************************************************!*\
  !*** ./src/app/sinhvien/sinhvien.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-sv {\r\n    width:80px;\r\n}\r\n.sv-table td, .sv-table th {\r\n    vertical-align: middle;\r\n}\r\n.info-ico {\r\n    color: lightcoral;\r\n    margin-right:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaW5odmllbi9zaW5odmllbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwL3Npbmh2aWVuL3Npbmh2aWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXN2IHtcclxuICAgIHdpZHRoOjgwcHg7XHJcbn1cclxuLnN2LXRhYmxlIHRkLCAuc3YtdGFibGUgdGgge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW5mby1pY28ge1xyXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sinhvien/sinhvien.component.ts":
/*!************************************************!*\
  !*** ./src/app/sinhvien/sinhvien.component.ts ***!
  \************************************************/
/*! exports provided: SinhvienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhvienComponent", function() { return SinhvienComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../student-info.service */ "./src/app/student-info.service.ts");



let SinhvienComponent = class SinhvienComponent {
    constructor(_studentService) {
        this._studentService = _studentService;
    }
    ngOnInit() {
        this.students = this._studentService.students;
    }
    chooseStudent(studentId) {
        this._studentService.chooseStudent(studentId);
    }
    removeStudent(studentId) {
        this._studentService.removeStudent(studentId);
    }
};
SinhvienComponent.ctorParameters = () => [
    { type: _student_info_service__WEBPACK_IMPORTED_MODULE_2__["StudentInfoService"] }
];
SinhvienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sinhvien',
        template: __webpack_require__(/*! raw-loader!./sinhvien.component.html */ "./node_modules/raw-loader/index.js!./src/app/sinhvien/sinhvien.component.html"),
        styles: [__webpack_require__(/*! ./sinhvien.component.css */ "./src/app/sinhvien/sinhvien.component.css")]
    })
], SinhvienComponent);



/***/ }),

/***/ "./src/app/student-info.service.ts":
/*!*****************************************!*\
  !*** ./src/app/student-info.service.ts ***!
  \*****************************************/
/*! exports provided: StudentInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInfoService", function() { return StudentInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentInfoService = class StudentInfoService {
    //Mảng chứa ID khóa học của 1 student
    //Mảng chứa 
    constructor() {
        this.students = [{
                ID: 1,
                FirstMidName: "Carson",
                LastName: "Alexander",
                EnrollmentDate: "2005-09-01"
            },
            {
                ID: 2,
                FirstMidName: "Meredith",
                LastName: "Alonso",
                EnrollmentDate: "2002-09-01"
            },
            {
                ID: 3,
                FirstMidName: "Arturo",
                LastName: "Anand",
                EnrollmentDate: "2003-09-01"
            },
            {
                ID: 4,
                FirstMidName: "Gytis",
                LastName: "Barzdukas",
                EnrollmentDate: "2002-09-01"
            },
            {
                ID: 5,
                FirstMidName: "Yan",
                LastName: "Li",
                EnrollmentDate: "2002-09-01"
            },
            {
                ID: 6,
                FirstMidName: "Peggy",
                LastName: "Justice",
                EnrollmentDate: "2001-09-01"
            },
            {
                ID: 7,
                FirstMidName: "Laura",
                LastName: "Norman",
                EnrollmentDate: "2003-09-01"
            },
            {
                ID: 8,
                FirstMidName: "Nino",
                LastName: "Olivetto",
                EnrollmentDate: "2005-09-01"
            }
        ];
        this.courses = [{
                CourseID: 1050,
                Title: "Chemistry",
                Credits: 3,
            },
            {
                CourseID: 4022,
                Title: "Python",
                Credits: 3,
            },
            {
                CourseID: 4041,
                Title: "Macroeconomics",
                Credits: 3,
            },
            {
                CourseID: 1045,
                Title: "Calculus",
                Credits: 4,
            },
            {
                CourseID: 3141,
                Title: "DjAngo",
                Credits: 4,
            },
            {
                CourseID: 2021,
                Title: "Composition",
                Credits: 3,
            },
            {
                CourseID: 2042,
                Title: "Literature",
                Credits: 4,
            }
        ];
        this.enrollments = [{
                StudentID: 1,
                CourseID: 1050,
                Grade: 'A'
            },
            {
                StudentID: 1,
                CourseID: 4022,
                Grade: 'C'
            },
            {
                StudentID: 1,
                CourseID: 4041,
                Grade: 'B'
            },
            {
                StudentID: 2,
                CourseID: 1045,
                Grade: 'B'
            },
            {
                StudentID: 2,
                CourseID: 3141,
                Grade: 'F'
            },
            {
                StudentID: 2,
                CourseID: 2021,
                Grade: 'F'
            },
            {
                StudentID: 3,
                CourseID: 1050,
                Grade: 'B'
            },
            {
                StudentID: 4,
                CourseID: 1050,
                Grade: 'B'
            },
            {
                StudentID: 4,
                CourseID: 4022,
                Grade: 'F'
            },
            {
                StudentID: 5,
                CourseID: 4041,
                Grade: 'C'
            },
            {
                StudentID: 6,
                CourseID: 1045,
                Grade: 'B'
            },
            {
                StudentID: 6,
                CourseID: 3141,
                Grade: 'A'
            },
        ];
        //Lấy chỉ mục student được chọn trong mảng students
        this.chooseIndex = null;
        this.coursesId = [];
    }
    chooseStudent(studentId) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].ID == studentId) {
                this.chooseIndex = i;
                this.studentID = this.students[this.chooseIndex].ID;
                return 0;
            }
            ;
        }
        ;
    }
    refreshStoredArray() {
        this.coursesId = [];
        this.studentID = null;
    }
    ;
    filterInfoStudent() {
        this.coursesId = this.enrollments.filter(course => {
            return course.StudentID == this.studentID;
        });
        for (let i = 0; i < this.coursesId.length; i++) {
            for (let j = 0; j < this.courses.length; j++) {
                if (this.courses[j].CourseID == this.coursesId[i].CourseID) {
                    Object.assign(this.coursesId[i], {
                        Title: this.courses[j].Title
                    }, {
                        Credits: this.courses[j].Credits
                    });
                }
            }
        }
        ;
        return this.coursesId;
    }
    ;
    removeStudent(studentId) {
        let startedIndex;
        let amountOfIndex = 0;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].ID == studentId) {
                this.chooseIndex = i;
                break;
            }
            ;
        }
        ;
        //Remove student in list students
        this.students.splice(this.chooseIndex, 1);
        for (let j = 0; j < this.enrollments.length; j++) {
            if (this.enrollments[j].StudentID == studentId) {
                startedIndex = j;
                for (let h = +startedIndex; h < this.enrollments.length; h++) {
                    if (this.enrollments[h].StudentID == studentId) {
                        amountOfIndex += 1;
                    }
                    else
                        break;
                }
            }
        }
        ;
        this.enrollments.splice(startedIndex, amountOfIndex);
    }
    ;
};
StudentInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentInfoService);



/***/ }),

/***/ "./src/app/sv-detail/sv-detail.component.css":
/*!***************************************************!*\
  !*** ./src/app/sv-detail/sv-detail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sv-table td, .sv-table th {\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdi1kZXRhaWwvc3YtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYXBwL3N2LWRldGFpbC9zdi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdi10YWJsZSB0ZCwgLnN2LXRhYmxlIHRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sv-detail/sv-detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sv-detail/sv-detail.component.ts ***!
  \**************************************************/
/*! exports provided: SvDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvDetailComponent", function() { return SvDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../student-info.service */ "./src/app/student-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SvDetailComponent = class SvDetailComponent {
    constructor(route, _studentService) {
        this.route = route;
        this._studentService = _studentService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(param => {
            this.svId = +param.get("svId");
        });
        this.sinhvien = this._studentService.students.find(sv => sv.ID === this.svId);
        //get student course
        this.thongtinlienquansv = this._studentService.filterInfoStudent();
    }
};
SvDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _student_info_service__WEBPACK_IMPORTED_MODULE_2__["StudentInfoService"] }
];
SvDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sv-detail',
        template: __webpack_require__(/*! raw-loader!./sv-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/sv-detail/sv-detail.component.html"),
        styles: [__webpack_require__(/*! ./sv-detail.component.css */ "./src/app/sv-detail/sv-detail.component.css")]
    })
], SvDetailComponent);



/***/ }),

/***/ "./src/app/tech-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tech-service.service.ts ***!
  \*****************************************/
/*! exports provided: TechServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechServiceService", function() { return TechServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechServiceService = class TechServiceService {
    constructor() {
        this.chungLoai = [{
                clId: 1,
                clName: "Điện thoại di động"
            }, {
                clId: 2,
                clName: "Laptop"
            }, {
                clId: 3,
                clName: "Đồ gia dụng"
            }, {
                clId: 4,
                clName: "Phụ kiện"
            }];
        this.sanpham = [{
                spId: 1,
                spName: "Galaxy S10",
                spNcc: "Samsung ",
                clId: 1,
                spSl: 5,
                spSale: "5%"
            },
            {
                spId: 2,
                spName: "Apple Iphone",
                spNcc: "Apple",
                clId: 1,
                spSl: 10,
                spSale: "5%"
            },
            {
                spId: 3,
                spName: "Note 9",
                spNcc: "Samsung",
                clId: 1,
                spSl: 10,
                spSale: "15%"
            },
            {
                spId: 4,
                spName: "Asus F560U",
                spNcc: "Asus",
                clId: 2,
                spSl: 1,
                spSale: "25%"
            },
            {
                spId: 5,
                spName: "Lenovo Idea Pad",
                spNcc: "Lenovo",
                clId: 2,
                spSl: 4,
                spSale: "5%"
            },
            {
                spId: 6,
                spName: "Dell XPS 13",
                spNcc: "Dell",
                clId: 2,
                spSl: 100,
                spSale: "13%"
            },
            {
                spId: 7,
                spName: "Noi com dien",
                spNcc: "Aqua",
                clId: 3,
                spSl: 1,
                spSale: "5%"
            },
            {
                spId: 8,
                spName: "Bep nuong",
                spNcc: "Lavie",
                clId: 3,
                spSl: 1,
                spSale: "5%"
            },
            {
                spId: 9,
                spName: "Tai nghe",
                spNcc: "Anker",
                clId: 4,
                spSl: 10,
                spSale: "7%"
            },
            {
                spId: 10,
                spName: "Sạc du phong",
                spNcc: "Enegizer",
                clId: 4,
                spSl: 1,
                spSale: "5%"
            }
        ];
    }
};
TechServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TechServiceService);



/***/ }),

/***/ "./src/app/thuong/thuong.component.css":
/*!*********************************************!*\
  !*** ./src/app/thuong/thuong.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n    width:100%;\r\n}\r\ninput[type = 'radio'] {\r\n    width:auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90aHVvbmcvdGh1b25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhcHAvdGh1b25nL3RodW9uZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbmlucHV0W3R5cGUgPSAncmFkaW8nXSB7XHJcbiAgICB3aWR0aDphdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/thuong/thuong.component.ts":
/*!********************************************!*\
  !*** ./src/app/thuong/thuong.component.ts ***!
  \********************************************/
/*! exports provided: ThuongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuongComponent", function() { return ThuongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThuongComponent = class ThuongComponent {
    constructor() {
        this.cn = {
            ten: "",
            luong: null,
            gioitinh: 'nam',
            tuoi: '1',
            thuong: null,
            rate: null,
        };
    }
    thuong() {
        switch (this.cn.tuoi) {
            case "1":
                this.cn.rate = 0.07;
                break;
            case "2":
                this.cn.rate = 0.1;
                break;
            case "3":
                this.cn.rate = 0.15;
                break;
        }
        this.cn.thuong = (this.cn.luong * 1) * this.cn.rate;
        if (this.cn.gioitinh == "nu") {
            this.cn.thuong += 200000;
        }
    }
    ngOnInit() {
    }
};
ThuongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thuong',
        template: __webpack_require__(/*! raw-loader!./thuong.component.html */ "./node_modules/raw-loader/index.js!./src/app/thuong/thuong.component.html"),
        styles: [__webpack_require__(/*! ./thuong.component.css */ "./src/app/thuong/thuong.component.css")]
    })
], ThuongComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vluon\OneDrive\Desktop\angular\lab1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map