(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9f6bace"],{"45fc":function(t,n,a){"use strict";var e=a("23e7"),i=a("b727").some,s=a("a640"),o=a("ae40"),c=s("some"),r=o("some");e({target:"Array",proto:!0,forced:!c||!r},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},a434:function(t,n,a){"use strict";var e=a("23e7"),i=a("23cb"),s=a("a691"),o=a("50c4"),c=a("7b0b"),r=a("65f0"),u=a("8418"),l=a("1dde"),p=a("ae40"),d=l("splice"),h=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,v=9007199254740991,_="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,n){var a,e,l,p,d,h,C=c(this),M=o(C.length),b=i(t,M),m=arguments.length;if(0===m?a=e=0:1===m?(a=0,e=M-b):(a=m-2,e=g(f(s(n),0),M-b)),M+a-e>v)throw TypeError(_);for(l=r(C,e),p=0;p<e;p++)d=b+p,d in C&&u(l,p,C[d]);if(l.length=e,a<e){for(p=b;p<M-e;p++)d=p+e,h=p+a,d in C?C[h]=C[d]:delete C[h];for(p=M;p>M-e+a;p--)delete C[p-1]}else if(a>e)for(p=M-e;p>b;p--)d=p+e-1,h=p+a-1,d in C?C[h]=C[d]:delete C[h];for(p=0;p<a;p++)C[p+b]=arguments[p+2];return C.length=M-e+a,l}})},d2f1:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-menu"},[e("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),e("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[e("li",[e("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),e("li",[e("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),e("span",[t._v("("+t._s(t.cart.length)+")")])])]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){t.opensearch=!0}}},[e("i",{staticClass:"fas fa-search search-icon"})])]),e("li",{staticClass:"ham-btn",on:{click:function(n){n.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[e("span"),e("span"),e("span")])]),e("shopping",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen},on:{deleteproduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),e("ul",{staticClass:"top__main-menu"},[e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("HOME")]),e("span",[t._v("首頁")])])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/All-Products"}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])],1),e("li",{staticClass:"top__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▸")]),e("span",[t._v("分類單品 ▸")])]),e("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Sofa"}},[t._v("Sofa")])],1),e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Chair"}},[t._v("Chair")])],1),e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Table"}},[t._v("Table")])],1),e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Cabinet"}},[t._v("Cabinet")])],1),e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Side Table"}},[t._v("Side Table")])],1),e("li",{on:{click:function(n){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Lighting"}},[t._v("Lighting")])],1)])]),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Sale"}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/guide"}},[e("span",[t._v("SHIPPING GUIDE")]),e("span",[t._v("運送須知")])])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/contact"}},[e("span",[t._v("CONTACT")]),e("span",[t._v("聯絡我們")])])],1)]),e("search",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),e("div",{staticClass:"logo-wrap"},[e("div",{staticClass:"logo-frame"}),e("h1",[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Hurley Furniture")])],1)]),e("div",{staticClass:"header"},[e("ul",{staticClass:"header__main-menu main-menu-nobanner"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("HOME")]),e("span",[t._v("首頁")])])],1),e("li",[e("router-link",{attrs:{to:"/products/All-Products"}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])],1),e("li",{staticClass:"header__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▾")]),e("span",[t._v("分類單品 ▾")])]),e("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Sofa"}},[e("img",{attrs:{src:a("259b"),alt:""}}),e("p",[t._v("Sofa")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Chair"}},[e("img",{attrs:{src:a("1c39"),alt:""}}),e("p",[t._v("Chair")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Table"}},[e("img",{attrs:{src:a("9cb8"),alt:""}}),e("p",[t._v("Table")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Cabinet"}},[e("img",{attrs:{src:a("ec17"),alt:""}}),e("p",[t._v("Cabinet")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Side Table"}},[e("img",{attrs:{src:a("6707"),alt:""}}),e("p",[t._v("Side Table")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Lighting"}},[e("img",{attrs:{src:a("5470"),alt:""}}),e("p",[t._v("Lighting")])])],1)])]),e("li",[e("router-link",{attrs:{to:"/products/Sale"}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])],1),e("li",[e("router-link",{attrs:{to:"/guide"}},[e("span",[t._v("SHIPPING GUIDE")]),e("span",[t._v("運送須知")])])],1),e("li",[e("router-link",{attrs:{to:"/contact"}},[e("span",[t._v("CONTACT")]),e("span",[t._v("聯絡我們")])])],1)])]),e("div",{staticClass:"content contents-product"},[e("div",{staticClass:"product-main"},[e("div",{staticClass:"pics"},[e("img",{staticClass:"show-pic",attrs:{src:t.selectPic,alt:""}}),e("div",{staticClass:"other-pic"},t._l(t.showProduct.imageUrl,(function(n,a){return e("img",{key:t.showProduct.id+a,attrs:{src:n},on:{click:function(a){t.selectPic=n}}})})),0)]),e("div",{staticClass:"discription"},[e("h3",{staticClass:"title"},[t._v(t._s(t.showProduct.title)+" "),e("span",[t._v("design by "+t._s(t.brand))])]),e("p",{staticClass:"sale-price"},[t._v("NT$"+t._s(t._f("thousands")(t.price))+" "),t.showProduct.price!==t.showProduct.origin_price?e("span",{staticClass:"sale-icon"},[t._v("sale")]):t._e()]),t.showProduct.price!==t.showProduct.origin_price?e("p",{staticClass:"origin-price"},[t._v("NT$"+t._s(t._f("thousands")(t.showProduct.origin_price)))]):t._e(),t._m(1),e("form",{staticClass:"select_qty"},[e("div",{staticClass:"input-group"},[e("button",{staticClass:"decrease-btn",attrs:{type:"button",disabled:1===t.productQty},on:{click:function(n){t.productQty=t.productQty-1}}},[e("i",{staticClass:"fa fa-minus"})]),e("input",{staticClass:"product-number",attrs:{type:"number"},domProps:{value:t.productQty},on:{input:function(n){t.productQty=parseInt(n.target.value)}}}),e("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(n){t.productQty=t.productQty+1}}},[e("i",{staticClass:"fa fa-plus"})])])]),e("button",{staticClass:"add-cart",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.addToCart(t.showProduct.id,t.productQty)}}},[t._v("加入購物車")])])]),e("div",{staticClass:"product-detail"},[e("div",{staticClass:"description"},[t._m(2),e("p",[t._v(t._s(t.showProduct.description))])]),e("div",{staticClass:"content"},[t._m(3),e("p",{domProps:{innerHTML:t._s(t.showProduct.content)}})])]),e("div",{staticClass:"related"},[t._m(4),e("ul",{staticClass:"items"},t._l(t.selectedProducts,(function(n){return e("li",{key:n.id,staticClass:"item",on:{click:function(n){t.getSingleProduct(),t.getRelatedProducts()}}},[e("router-link",{attrs:{to:"/product/"+n.id}},[e("div",{staticClass:"card-img",style:"background-image: url("+n.imageUrl[0]+")"},[e("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addToCart(n.id,1)}}},[t._v("Add to Cart")])]),e("div",{staticClass:"card-text"},[e("h5",{staticClass:"card-title"},[t._v(t._s(n.title))]),e("p",{staticClass:"sale-price"},[t._v("NT$"+t._s(t._f("thousands")(n.price))),n.price!==n.origin_price?e("span",{staticClass:"sale-icon"},[t._v("sale")]):t._e()]),n.price!==n.origin_price?e("p",{staticClass:"origin-price"},[t._v("NT$"+t._s(t._f("thousands")(n.origin_price)))]):t._e()])])],1)})),0)])]),t._m(5),e("gotop",{tag:"div"}),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),e("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",{staticClass:"top__icon"},[a("li",[a("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"delivery-sale"},[a("p",[a("span"),t._v(" 全店購物滿 NT$10,000 全台免運")]),a("p",[a("span"),t._v(" 夏季限時 9 折優惠碼：summer90")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("h5",[a("span",[t._v("產品描述")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("h5",[a("span",[t._v("規格說明")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("h5",[a("span",[t._v("相關產品")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"footer"},[a("div",{staticClass:"text"},[a("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),a("p",[t._v("圖片為練習使用，無商業用途。")])])])}],s=(a("99af"),a("4160"),a("45fc"),a("a434"),a("159b"),a("d9b9")),o=a("3712"),c=a("9e6f"),r={components:{shopping:s["a"],search:o["a"],gotop:c["a"]},data:function(){return{products:[],showProduct:[],brand:"",price:0,selectPic:"",relatedProducts:[],selectedProducts:[],category:"",openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:{},productQty:1}},created:function(){var t=this;this.getCart(),this.getSingleProduct(),this.getRelatedProducts();var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/products?paged=40");this.$http.get(n).then((function(n){t.isLoading=!1,t.products=n.data.data})).catch((function(n){t.isLoading=!1,console.log(n)}))},methods:{getRelatedProducts:function(){var t=this;this.relatedProducts=[],this.selectedProducts=[];var n=this.$route.params.id,a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/product/").concat(n);this.isLoading=!0,this.$http.get(a).then((function(a){if(t.products.forEach((function(e){e.category===a.data.data.category&&e.id!==n&&t.relatedProducts.push(e)})),t.relatedProducts.length>4)for(var e=0;e<4;e++){var i=Math.random()*t.relatedProducts.length;i=Math.floor(i),t.selectedProducts.push(t.relatedProducts[i]),t.relatedProducts.splice(i,1)}else t.selectedProducts=t.relatedProducts;t.isLoading=!1})).catch((function(n){t.isLoading=!1,console.log(n)}))},getSingleProduct:function(){var t=this,n=this.$route.params.id;this.showProduct=[],this.brand="",this.price=0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/product/").concat(n);this.isLoading=!0,this.$http.get(a).then((function(n){t.isLoading=!1,t.showProduct=n.data.data,t.selectPic=t.showProduct.imageUrl[4],t.brand=t.showProduct.options.brand,t.price=t.showProduct.price})).catch((function(n){t.isLoading=!1,console.log(n)}))},getCart:function(){var t=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(n).then((function(n){t.isLoading=!1,t.cart=n.data.data})).catch((function(n){t.isLoading=!1,console.log(n)}))},deleteCartItem:function(t){var n=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(a).then((function(){n.isLoading=!1,n.getCart()})).catch((function(t){n.isLoading=!1,console.log(t)}))},addToCart:function(t,n){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping"),i={product:t,quantity:n},s=this.cart.some((function(e){if(e.product.id===t)return a.qtyUpdate(t,e.quantity+n),!0}));s||this.$http.post(e,i).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t.response.data.errors)}))},qtyUpdate:function(t,n){var a=this;this.isLoading=!0;var e={product:t,quantity:n};if(0===n){var i="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(i).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))}else{var s="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(s,e).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))}},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},u=r,l=a("2877"),p=Object(l["a"])(u,e,i,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-c9f6bace.92ca8c39.js.map