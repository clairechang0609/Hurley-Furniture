(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aad77976"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination"},[a("li",{class:{disabled:1===t.pages.current_page}},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page-1)}}},[t._v("←")])]),t._l(t.pages.total_pages,(function(e,i){return a("li",{key:i+e,class:{active:e===t.pages.current_page}},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pages.current_page+1)}}},[t._v("→")])])],2)},n=[],r={props:["pages"],methods:{changePage:function(t){this.$emit("changepage",t)}}},c=r,s=a("2877"),d=Object(s["a"])(c,i,n,!1,null,null,null);e["a"]=d.exports},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var c=i(e);c in t?n.f(t,c,r(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),c=a("861d"),s=a("7b0b"),d=a("50c4"),o=a("8418"),u=a("65f0"),p=a("1dde"),l=a("b622"),h=a("2d00"),f=l("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",_=h>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=p("concat"),b=function(t){if(!c(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},k=!_||!m;i({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,i,n,r,c=s(this),p=u(c,0),l=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?c:arguments[e],b(r)){if(n=d(r.length),l+n>g)throw TypeError(v);for(a=0;a<n;a++,l++)a in r&&o(p,l,r[a])}else{if(l>=g)throw TypeError(v);o(p,l++,r)}return p.length=l,p}})},d56e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order"},[a("table",[t._m(0),t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.created.datetime))]),a("td",{staticClass:"title"},[a("ul",t._l(e.products,(function(i,n){return a("li",{key:e.id+n},[t._v(" "+t._s(i.product.title)+" * "+t._s(i.quantity)+" ")])})),0)]),a("td",[t._v("NT$"+t._s(t._f("thousands")(e.amount)))]),a("td",[t._v(t._s(e.payment))]),a("td",[a("label",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.paid,expression:"order.paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.paid)?t._i(e.paid,null)>-1:e.paid},on:{click:function(a){return t.editPaid(e)},change:function(a){var i=e.paid,n=a.target,r=!!n.checked;if(Array.isArray(i)){var c=null,s=t._i(i,c);n.checked?s<0&&t.$set(e,"paid",i.concat([c])):s>-1&&t.$set(e,"paid",i.slice(0,s).concat(i.slice(s+1)))}else t.$set(e,"paid",r)}}}),a("span",{staticClass:"checkmark"}),a("p",[t._v("付款")])])])])}))],2)]),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("pagination",{tag:"div",attrs:{pages:t.pagination},on:{changepage:t.getOrders}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"table-title"},[a("th",{attrs:{width:"20%"}},[t._v("購買時間")]),a("th",{attrs:{width:"25%"}},[t._v("品項")]),a("th",{attrs:{width:"18%"}},[t._v("金額")]),a("th",{attrs:{width:"17%"}},[t._v("付款方式")]),a("th",{attrs:{width:"20%"}},[t._v("是否付款")])])}],r=(a("99af"),a("1799")),c={components:{pagination:r["a"]},data:function(){return{orders:{},editOrder:{},isLoading:!1,pagination:{}}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/admin/ec/orders?page=").concat(e);this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.get(a).then((function(e){t.isLoading=!1,t.orders=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(){}))},editPaid:function(t){this.editOrder=Object.assign({},t),this.editOrder.paid=!this.editOrder.paid,this.updateOrder()},updateOrder:function(){var t=this;this.isLoading=!0;var e="";e=this.editOrder.paid?"".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/admin/ec/orders/").concat(this.editOrder.id,"/paid"):"".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/admin/ec/orders/").concat(this.editOrder.id,"/unpaid"),this.$http.patch(e).then((function(){t.isLoading=!1,t.getOrders()})).catch((function(){})),this.editOrder={}}}},s=c,d=a("2877"),o=Object(d["a"])(s,i,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-aad77976.9c655342.js.map