(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102cc"],{b789:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"top-menu"},[s("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),s("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[s("li",[s("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),s("li",[s("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),s("li",[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),s("span",[t._v("("+t._s(t.cart.length)+")")])])]),s("li",[s("a",{attrs:{href:"#"},on:{click:function(a){t.opensearch=!0}}},[s("i",{staticClass:"fas fa-search search-icon"})])]),s("li",{staticClass:"ham-btn",on:{click:function(a){a.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[s("span"),s("span"),s("span")])]),s("shopping",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen},on:{deleteproduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),s("ul",{staticClass:"top__main-menu"},[s("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/"}},[s("span",[t._v("HOME")]),s("span",[t._v("首頁")])])],1),s("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/All-Products"}},[s("span",[t._v("ALL PRODUCTS")]),s("span",[t._v("所有商品")])])],1),s("li",{staticClass:"top__all-product"},[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[s("span",[t._v("PRODUCT CATEGORY ▸")]),s("span",[t._v("分類單品 ▸")])]),s("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Sofa"}},[t._v("Sofa")])],1),s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Chair"}},[t._v("Chair")])],1),s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Table"}},[t._v("Table")])],1),s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Cabinet"}},[t._v("Cabinet")])],1),s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Side Table"}},[t._v("Side Table")])],1),s("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Lighting"}},[t._v("Lighting")])],1)])]),s("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/products/Sale"}},[s("span",[t._v("SALE")]),s("span",[t._v("限時特價")])])],1),s("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/guide"}},[s("span",[t._v("SHIPPING GUIDE")]),s("span",[t._v("運送須知")])])],1),s("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[s("router-link",{attrs:{to:"/contact"}},[s("span",[t._v("CONTACT")]),s("span",[t._v("聯絡我們")])])],1)]),s("search",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),s("div",{staticClass:"logo-wrap"},[s("div",{staticClass:"logo-frame"}),s("h1",[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Hurley Furniture")])],1)]),s("div",{staticClass:"header"},[s("ul",{staticClass:"header__main-menu main-menu-nobanner"},[s("li",[s("router-link",{attrs:{to:"/"}},[s("span",[t._v("HOME")]),s("span",[t._v("首頁")])])],1),s("li",[s("router-link",{attrs:{to:"/products/All-Products"}},[s("span",[t._v("ALL PRODUCTS")]),s("span",[t._v("所有商品")])])],1),s("li",{staticClass:"header__all-product"},[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[s("span",[t._v("PRODUCT CATEGORY ▾")]),s("span",[t._v("分類單品 ▾")])]),s("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Sofa"}},[s("img",{attrs:{src:e("259b"),alt:""}}),s("p",[t._v("Sofa")])])],1),s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Chair"}},[s("img",{attrs:{src:e("1c39"),alt:""}}),s("p",[t._v("Chair")])])],1),s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Table"}},[s("img",{attrs:{src:e("9cb8"),alt:""}}),s("p",[t._v("Table")])])],1),s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Cabinet"}},[s("img",{attrs:{src:e("ec17"),alt:""}}),s("p",[t._v("Cabinet")])])],1),s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Side Table"}},[s("img",{attrs:{src:e("6707"),alt:""}}),s("p",[t._v("Side Table")])])],1),s("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[s("router-link",{attrs:{to:"/products/Lighting"}},[s("img",{attrs:{src:e("5470"),alt:""}}),s("p",[t._v("Lighting")])])],1)])]),s("li",[s("router-link",{attrs:{to:"/products/Sale"}},[s("span",[t._v("SALE")]),s("span",[t._v("限時特價")])])],1),s("li",[s("router-link",{attrs:{to:"/guide"}},[s("span",[t._v("SHIPPING GUIDE")]),s("span",[t._v("運送須知")])])],1),s("li",[s("router-link",{attrs:{to:"/contact"}},[s("span",[t._v("CONTACT")]),s("span",[t._v("聯絡我們")])])],1)])]),s("div",{staticClass:"content content-cart"},[s("h3",[t._v("CHECK OUT")]),s("ul",{staticClass:"step"},[s("li",[s("span",[t._v("1")]),s("p",[t._v("購物車")]),s("div",{staticClass:"bar bar-one",class:{focus:1===t.page}})]),s("li",[s("span",[t._v("2")]),s("p",[t._v("填寫資料")]),s("div",{staticClass:"bar bar-two",class:{focus:2===t.page}})]),s("li",[s("span",[t._v("3")]),s("p",[t._v("訂單確認")]),s("div",{staticClass:"bar bar-three",class:{focus:3===t.page}})])]),s("div",{staticClass:"step-one",class:{show:1===t.page}},[s("table",{staticClass:"checkout-table"},[t._m(1),t._l(t.cart,(function(a){return s("tr",{key:a.product.id+"cart"},[s("td",{staticClass:"pic"},[s("img",{attrs:{src:a.product.imageUrl[0],alt:""}})]),s("td",[t._v(t._s(a.product.title))]),s("td",{staticClass:"unit"},[t._v(t._s(a.product.unit))]),s("td",[t._v("NT$"+t._s(t._f("thousands")(a.product.price)))]),s("td",[s("form",{staticClass:"select_qty"},[s("div",{staticClass:"input-group"},[s("button",{staticClass:"decrease-btn",attrs:{type:"button",disabled:0===a.quantity},on:{click:function(e){return t.qtyUpdate(a.product.id,a.quantity-1)}}},[s("i",{staticClass:"fa fa-minus"})]),s("input",{staticClass:"product-number",attrs:{type:"number"},domProps:{value:a.quantity},on:{input:function(e){return t.qtyUpdate(a.product.id,e.target.value)}}}),s("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(e){return t.qtyUpdate(a.product.id,a.quantity+1)}}},[s("i",{staticClass:"fa fa-plus"})])])])]),s("td",{staticClass:"subtotal"},[t._v("NT$"+t._s(t._f("thousands")(a.product.price*a.quantity)))]),s("td",{staticClass:"delete",on:{click:function(e){return t.deleteCartItem(a.product.id)}}},[s("i",{staticClass:"fas fa-times"})])])}))],2),s("div",{staticClass:"cart-select-wrap"},[s("div",{staticClass:"cart-select"},[s("h4",[t._v("選擇送貨及付款方式")]),s("div",{staticClass:"input-wrap"},[s("label",{attrs:{for:"delivery-place"}},[t._v("送貨地點")]),s("select",{ref:"pay",attrs:{id:"delivery-place"}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("台灣")])]),s("label",{attrs:{for:"delivery-method"}},[t._v("送貨方式")]),t._m(2),s("span",[t._v("1. 預購商品會因不同品牌有不同的等待期，請您耐心等候。")]),s("span",[t._v("2. 提交訂單後，我們會寄送一封確認訂單的 E-mail 到您指定的電子郵件信箱中，再次確認本次訂購內容、金額、付款方式等項目。")])])]),s("div",{staticClass:"sum-check"},[s("h4",[t._v("訂單資訊")]),s("div",{staticClass:"sum-wrap"},[s("div",{staticClass:"product-sum"},[s("p",[t._v("小計：")]),s("p",[t._v("NT$ "+t._s(t._f("thousands")(t.totalPrice)))])]),t._m(3),s("div",{staticClass:"sale-price",class:{delete:t.totalPrice<1e4}},[s("p",[t._v("優惠促銷：滿一萬免運")]),t.totalPrice>=1e4?s("p",[t._v("-NT$ 350")]):t._e()]),t.coupon.enabled?s("div",{staticClass:"coupon-price"},[s("p",[t._v("優惠券折扣：")]),s("p",[t._v("-NT$ "+t._s(t._f("thousands")(t.totalPrice*((100-t.coupon.percent)/100))))])]):t._e(),s("div",{staticClass:"coupon-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("button",{attrs:{type:"button"},on:{click:t.addCoupon}},[t._v("套用優惠碼")]),s("span",[t._v(t._s(t.alert))])]),s("div",{staticClass:"all-sum"},[s("p",[t._v("總金額")]),t.coupon.enabled?s("p",[t._v("NT$ "+t._s(t._f("thousands")(t.totalPrice*(t.coupon.percent/100)+t.deliveryFee)))]):s("p",[t._v("NT$ "+t._s(t._f("thousands")(t.totalPrice+t.deliveryFee)))])]),s("button",{staticClass:"checkout",attrs:{type:"button"},on:{click:function(a){t.page=2}}},[t._v("前往結帳")])])])])]),s("div",{staticClass:"step-two",class:{show:2===t.page}},[s("div",{staticClass:"form-wrap"},[s("h4",[t._v("顧客資料")]),s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder()}}},[s("div",{staticClass:"input-wrap"},[s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[s("label",{attrs:{for:"reciever-name"}},[t._v(" 收件人姓名 "),s("span",[t._v("*")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",id:"reciever-name",name:"收件人姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),s("p",[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[s("label",{attrs:{for:"email"}},[t._v(" 電子信箱 "),s("span",[t._v("*")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",id:"email",name:"電子信箱"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),s("p",[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[s("label",{attrs:{for:"reciever-tel"}},[t._v(" 收件人電話 "),s("span",[t._v("*")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],attrs:{type:"tel",id:"reciever-tel",name:"收件人電話"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),s("p",[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[s("label",{attrs:{for:"address"}},[t._v(" 地址 "),s("span",[t._v("*")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],attrs:{type:"text",id:"address",name:"地址"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),s("p",[t._v(t._s(e[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"input-wrap"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"payment"}},[t._v("付款方式")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],attrs:{id:"payment"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇")]),s("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),s("option",{attrs:{value:"ATM"}},[t._v("ATM")]),s("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),s("option",{attrs:{value:"Credit"}},[t._v("Credit")]),s("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),s("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"remark"}},[t._v("訂單備註")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],attrs:{id:"remark",placeholder:"有什麼想告訴我們的嗎？"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),s("button",{staticClass:"submit-btn",attrs:{type:"submit",disabled:e},on:{click:function(a){t.page=3}}},[t._v("提交訂單")])])])]}}])})],1),s("div",{staticClass:"btns"},[s("a",{staticClass:"back-btn",attrs:{href:"cart.html"},on:{click:function(a){a.preventDefault(),t.page=1}}},[t._v("← 返回購物車")])])]),s("div",{staticClass:"step-three",class:{show:3===t.page}},[t.completed?s("div",{staticClass:"pay-completed"},[s("h4",[t._v("付款完成，謝謝您的訂單")]),s("div",{staticClass:"btns"},[s("a",{attrs:{href:"#"}},[t._v("← 訂單查詢")]),s("router-link",{attrs:{to:"/products/All-Products"}},[t._v("繼續購物 →")])],1)]):s("div",[s("form",{on:{submit:function(a){return a.preventDefault(),t.payOrder()}}},[s("table",{staticClass:"checkorder-table"},[t._m(4),t._l(t.order.products,(function(a,e){return s("tr",{key:e},[s("td",[s("img",{attrs:{src:a.product.imageUrl[0],alt:""}})]),s("td",[t._v(t._s(a.product.title))]),s("td",[t._v(t._s(a.quantity))]),s("td",[t._v("NT$"+t._s(t._f("thousands")(a.product.price)))])])})),s("tr",[s("td"),s("td"),s("td",[t._v("總價")]),s("td",{staticClass:"total-price"},[t._v("NT$"+t._s(t._f("thousands")(parseInt(t.order.amount))))])])],2),s("table",{staticClass:"checkinfo-table"},[s("tr",[s("th",{attrs:{width:"120px"}},[t._v("收件人姓名")]),s("td",[t._v(t._s(t.form.name))])]),s("tr",[s("th",[t._v("電子信箱")]),s("td",[t._v(t._s(t.form.email))])]),s("tr",[s("th",[t._v("收件人電話")]),s("td",[t._v(t._s(t.form.tel))])]),s("tr",[s("th",[t._v("地址")]),s("td",[t._v(t._s(t.form.address))])])]),s("button",{staticClass:"pay-btn",attrs:{type:"submit"}},[t._v("確認付款")])])])])]),t._m(5),s("gotop",{tag:"div"}),s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"top__icon"},[e("li",[e("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),e("li",[e("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),e("li",[e("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-title"},[e("th",{staticClass:"pic",attrs:{width:"13%"}}),e("th",{attrs:{width:"21%"}},[t._v("品名")]),e("th",{staticClass:"unit",attrs:{width:"10%"}},[t._v("單位")]),e("th",{attrs:{width:"15%"}},[t._v("售價")]),e("th",{attrs:{width:"19%"}},[t._v("數量")]),e("th",{staticClass:"subtotal",attrs:{width:"15%"}},[t._v("小計")]),e("th",{attrs:{width:"7%"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("select",{attrs:{id:"delivery-method"}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("宅配到府")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deliver-sum"},[e("p",[t._v("運費：")]),e("p",[t._v("NT$ 350")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-title"},[e("th",{attrs:{width:"25%"}}),e("th",{attrs:{width:"25%"}},[t._v("品名")]),e("th",{attrs:{width:"25%"}},[t._v("數量")]),e("th",{attrs:{width:"25%"}},[t._v("單價")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer footer-white"},[e("div",{staticClass:"text"},[e("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),e("p",[t._v("圖片為練習使用，無商業用途。")])])])}],n=(e("99af"),e("4160"),e("159b"),e("d9b9")),i=e("3712"),r=e("9e6f"),c={components:{shopping:n["a"],search:i["a"],gotop:r["a"]},data:function(){return{openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:[],totalPrice:0,deliveryFee:350,email:"",page:1,form:{name:"",email:"",tel:"",address:"",payment:"",coupon:"",message:""},coupon_code:"",coupon:{},completed:!1,orderId:"",order:{user:{}},alert:""}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(a).then((function(a){t.isLoading=!1,t.cart=a.data.data,t.getTotalPrice()})).catch((function(a){t.isLoading=!1,console.log(a)}))},getTotalPrice:function(){var t=this;this.totalPrice=0,this.cart.forEach((function(a){t.totalPrice+=a.product.price*a.quantity})),this.totalPrice>3e3?this.deliveryFee=0:this.deliveryFee=350},deleteCartItem:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(e).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))},qtyUpdate:function(t,a){var e=this;this.isLoading=!0;var s={product:t,quantity:a};if(0===a){var o="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(o).then((function(){e.isLoading=!1,e.getCart()})).catch((function(t){e.isLoading=!1,console.log(t)}))}else{var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(n,s).then((function(){e.isLoading=!1,e.getCart()})).catch((function(t){e.isLoading=!1,console.log(t)}))}},addCoupon:function(){var t=this;this.isLoading=!0,this.alert="";var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/coupon/search");this.$http.post(a,{code:this.coupon_code}).then((function(a){t.isLoading=!1,t.coupon=a.data.data,t.form.coupon=a.data.data.code})).catch((function(a){t.isLoading=!1,t.alert=a.response.data.message,t.coupon_code="",console.log(a.response.data)}))},createOrder:function(){var t=this;this.isLoading=!0,console.log(this.form);var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/orders"),e=Object.assign({},this.form);this.$http.post(a,e).then((function(a){a.data.data.id&&(t.isLoading=!1,t.getCart(),t.orderId=a.data.data.id,t.getSingleOrder())})).catch((function(a){t.isLoading=!1,console.log(a.response.data.errors)}))},getSingleOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/orders/").concat(this.orderId);this.$http.get(a).then((function(a){t.isLoading=!1,t.order=a.data.data,console.log(t.order)})).catch((function(a){t.isLoading=!1,console.log(a)}))},payOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/orders/").concat(this.orderId,"/paying");this.$http.post(a).then((function(a){t.getSingleOrder(),t.completed=!0})).catch((function(a){t.isLoading=!1,console.log(a.response.data.errors)}))},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},l=c,p=e("2877"),u=Object(p["a"])(l,s,o,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2102cc.eba76d35.js.map