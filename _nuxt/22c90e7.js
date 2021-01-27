(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{245:function(t,e,o){var content=o(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("6c331d2d",content,!0,{sourceMap:!1})},246:function(t,e,o){"use strict";o.r(e);o(24);var r={name:"CartPage",props:{data:{type:Object,required:!1},option:{type:String,required:!1}},data:function(){return{cartItems:"",isSuccess:!1,dismissSecs:3,dismissCountDown:0}},mounted:function(){this.cartItems=this.$store.getters.getAllCart},methods:{calculatePercentage:function(t,e){return Math.round(100*t/e)},removeFromCart:function(t){this.$store.commit("REMOVE_CART",t),this.isSuccess=!this.isSuccess},closeAlert:function(){this.isSuccess=!this.isSuccess},changeOption:function(data,t){console.log("this is data",data),console.log("this is idx",t),this.$store.commit("EDIT_CART",{payload:data,idx:t})},getTotalAmount:function(){return this.cartItems.reduce((function(a,b){return+a+ +b.price}),0)},getTotalAmountSaved:function(){var data=this.getTotalAmount();return this.cartItems.reduce((function(a,b){return+a+ +b.compare_at_price}),0)-data}}},n=(o(249),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[t.cartItems.length<=0?r("div",[r("img",{staticClass:"empty-cart",attrs:{src:o(247),alt:""}}),t._v(" "),r("div",{staticClass:"empty-cart-description"},[r("p",[t._v("Hey, it feels so light!")]),t._v(" "),r("p",[t._v("There is nothing in your bag. Let's add some items.")])])]):r("div",[r("p",[t._v("Total Amount : $ "+t._s(t.getTotalAmount()))]),t._v(" "),r("p",[t._v("Total Amount Saved: $ "+t._s(t.getTotalAmountSaved()))]),t._v(" "),r("b-row",t._l(t.cartItems,(function(e,o){return r("b-col",{key:e.id,attrs:{cols:"12"}},[r("b-card",{attrs:{title:e.name,"sub-title":"sold by "+e.vendor,"img-src":e.image_src[0],"img-alt":"Card image","img-left":""}},[r("b-card-text",[r("span",{staticClass:"price"},[t._v("$"+t._s(e.price)+"\n              "),r("del",{staticClass:"old_price"},[t._v("$"+t._s(e.compare_at_price))]),r("span",{staticClass:"percentage"},[t._v("\n                (\n                "+t._s(t.calculatePercentage(e.price,e.compare_at_price))+"% OFF )")])]),t._v(" "),r("div",{staticStyle:{padding:"5px"}},[t._v("\n              Selected Size :\n              "),r("b-form-select",{staticClass:"mb-3",attrs:{options:e.options,"value-field":"value","text-field":"value","disabled-field":"notEnabled"},on:{input:function(r){return t.changeOption(e,o)}},model:{value:e.selectedoption.value,callback:function(o){t.$set(e.selectedoption,"value",o)},expression:"cartItem.selectedoption.value"}})],1)]),t._v(" "),r("b-button",{attrs:{squared:"",id:"remove_button"},on:{click:function(e){return t.removeFromCart(o)}}},[t._v("Remove")])],1)],1)})),1)],1),t._v(" "),t.isSuccess?r("div",[r("b-alert",{staticClass:"alert",attrs:{show:"",variant:"success"}},[t._v("Successfully Deleted "),r("a",{attrs:{href:""},on:{click:t.closeAlert}},[r("img",{staticClass:"close-img",attrs:{src:o(248),alt:""}})])])],1):t._e()])}),[],!1,null,"ec2a41d6",null);e.default=component.exports},247:function(t,e,o){t.exports=o.p+"img/pngfind.com-cart-png-2727925.0280082.png"},248:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM2NS42OTZwdCIgdmlld0JveD0iMCAwIDM2NS42OTYgMzY1LjY5NiIgd2lkdGg9IjM2NS42OTZwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjQzLjE4NzUgMTgyLjg1OTM3NSAxMTMuMTMyODEyLTExMy4xMzI4MTNjMTIuNS0xMi41IDEyLjUtMzIuNzY1NjI0IDAtNDUuMjQ2MDkzbC0xNS4wODIwMzEtMTUuMDgyMDMxYy0xMi41MDM5MDYtMTIuNTAzOTA3LTMyLjc2OTUzMS0xMi41MDM5MDctNDUuMjUgMGwtMTEzLjEyODkwNiAxMTMuMTI4OTA2LTExMy4xMzI4MTMtMTEzLjE1MjM0NGMtMTIuNS0xMi41LTMyLjc2NTYyNC0xMi41LTQ1LjI0NjA5MyAwbC0xNS4xMDU0NjkgMTUuMDgyMDMxYy0xMi41IDEyLjUwMzkwNy0xMi41IDMyLjc2OTUzMSAwIDQ1LjI1bDExMy4xNTIzNDQgMTEzLjE1MjM0NC0xMTMuMTI4OTA2IDExMy4xMjg5MDZjLTEyLjUwMzkwNyAxMi41MDM5MDctMTIuNTAzOTA3IDMyLjc2OTUzMSAwIDQ1LjI1bDE1LjA4MjAzMSAxNS4wODIwMzFjMTIuNSAxMi41IDMyLjc2NTYyNSAxMi41IDQ1LjI0NjA5MyAwbDExMy4xMzI4MTMtMTEzLjEzMjgxMiAxMTMuMTI4OTA2IDExMy4xMzI4MTJjMTIuNTAzOTA3IDEyLjUgMzIuNzY5NTMxIDEyLjUgNDUuMjUgMGwxNS4wODIwMzEtMTUuMDgyMDMxYzEyLjUtMTIuNTAzOTA2IDEyLjUtMzIuNzY5NTMxIDAtNDUuMjV6bTAgMCIvPjwvc3ZnPg=="},249:function(t,e,o){"use strict";o(245)},250:function(t,e,o){(e=o(53)(!1)).push([t.i,".empty-cart[data-v-ec2a41d6]{width:60%;height:auto;display:table;margin:0 auto}.empty-cart-description[data-v-ec2a41d6]{padding:10px;text-align:center;font-style:normal;font-weight:700;font-size:16px;line-height:19px;text-transform:capitalize;color:#000}img[data-v-ec2a41d6]{-o-object-fit:contain;object-fit:contain}.card-title[data-v-ec2a41d6]{font-style:normal;font-weight:700;font-size:16px;line-height:19px;text-transform:capitalize;color:#000}.card-subtitle[data-v-ec2a41d6]{font-weight:300;color:#878787}.card-subtitle[data-v-ec2a41d6],.price[data-v-ec2a41d6]{font-style:normal;font-size:14px;line-height:16px;text-transform:capitalize}.price[data-v-ec2a41d6]{font-weight:700;color:#000}.old_price[data-v-ec2a41d6]{color:#878787}.old_price[data-v-ec2a41d6],.percentage[data-v-ec2a41d6]{font-style:normal;font-weight:300;font-size:12px;line-height:14px}.percentage[data-v-ec2a41d6]{color:red}select[data-v-ec2a41d6]{width:20%}.card-body #remove_button[data-v-ec2a41d6]{display:inline;background-color:coral;color:#fff;padding-left:25px;padding-right:25px;text-decoration:none}.alert[data-v-ec2a41d6]{width:50%;height:50px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.close-img[data-v-ec2a41d6]{float:right;width:20px}",""]),t.exports=e},251:function(t,e,o){var content=o(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("7e95f2f0",content,!0,{sourceMap:!1})},252:function(t,e,o){var content=o(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("9b4d1834",content,!0,{sourceMap:!1})},253:function(t,e,o){var content=o(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("204bf4ea",content,!0,{sourceMap:!1})},254:function(t,e,o){"use strict";o.r(e);var r={name:"AddCartModal",components:{CartPage:o(246).default},data:function(){return{isSuccess:!1}},props:{component:{type:Object,required:!0},option:{type:String,required:!1}},methods:{sendData:function(){this.component.selectedoption=this.option,this.$store.commit("ADD_CART_DATA",this.component),this.$emit("close")},closeAlert:function(){this.isSuccess=!this.isSuccess}}},n=(o(259),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[o("div",{staticClass:"modal-dialog modal-dialog-top modal-lg",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-body"},[o("div",{staticClass:"modal-text"},[o("div",[o("h3",{staticClass:"text-center"},[t._v("Add this to cart?")]),t._v(" "),o("b-row",{staticStyle:{padding:"5px"}},[o("b-col",{attrs:{cols:"4"}},[o("img",{attrs:{src:t.component.image_src[0],alt:""}})]),t._v(" "),o("b-col",{attrs:{cols:"8"}},[o("p",{staticClass:"product-title"},[t._v(t._s(t.component.name))]),t._v(" "),o("p",{staticClass:"product-subtitle"},[t._v(t._s(t.component.vendor))]),t._v(" "),o("p",{staticClass:"product-title"},[o("span",{staticClass:"product-subtitle"},[t._v(" Selected option :")]),t._v("\n                  "+t._s(t.option.value)+"\n                ")]),t._v(" "),o("h4",{staticClass:"product-price"},[t._v("Price $"+t._s(t.component.price))])])],1),t._v(" "),o("div",{staticClass:"button-wrapper"},[o("b-button",{staticStyle:{"background-color":"coral",color:"white","padding-left":"25px","padding-right":"25px","text-decoration":"none"},attrs:{squared:""},on:{click:t.sendData}},[t._v("Add")]),t._v(" "),o("b-button",{staticStyle:{color:"white","margin-left":"10px","padding-left":"25px","padding-right":"25px","text-decoration":"none"},attrs:{squared:""},on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[t._v("Cancel")])],1)],1)])])])])])}),[],!1,null,"c2f21490",null);e.default=component.exports},255:function(t,e,o){"use strict";o.r(e);var r={name:"InviteAlert"},n=(o(257),o(40)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-card",{staticClass:"text-center"},[e("div",{staticClass:"text-light"},[this._v("\n      Invite friends to Big Fashion Festival & get up to $150 MynCash for\n      every person who visits    \n      "),e("b-button",{attrs:{id:"button",pill:"",variant:"outline-secondary"}},[this._v("Invite Now")])],1)])],1)}),[],!1,null,"cceaea76",null);e.default=component.exports},256:function(t,e,o){"use strict";o.r(e);o(3);var r={name:"MensClothing",components:{AddCartModal:o(254).default},data:function(){return{userFilterKey:"all",active:!1,selectedOption:"",selectedData:"",modalAddCart:!1}},computed:{userFilter:function(){return this[this.userFilterKey]},all:function(){return this.$store.getters.getAllData},filterTshirt:function(){return this.$store.getters.getAllData.filter((function(t){return"T-shirt"===t.tag}))},filterDenim:function(){return this.$store.getters.getAllData.filter((function(t){return"Denim"===t.tag}))},filterSweatshirts:function(){return this.$store.getters.getAllData.filter((function(t){return"Sweatshirts"===t.tag}))},filterPoloTeeShirt:function(){return this.$store.getters.getAllData.filter((function(t){return"Polo Tee Shirt"===t.tag}))},filterShirt:function(){return this.$store.getters.getAllData.filter((function(t){return"shirt"===t.tag}))},sortPrice:function(){return this.$store.getters.getAllData.sort((function(a,b){return parseFloat(a.price)-parseFloat(b.price)}))}},methods:{calculatePercentage:function(t,e){return Math.round(100*t/e)},addToCart:function(data,option){this.selectedData=data,this.selectedOption=option,this.modalAddCart=!0}}},n=(o(261),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("div",{staticClass:"route"},[o("p",[t._v("Home / Clothing / Mens Clothing / All Mens Clothing")])]),t._v(" "),o("div",[o("p",{staticClass:"total"},[t._v("\n      ALL Products\n      "),o("span",{staticClass:"total_product"},[t._v("("+t._s(t.all.length)+" products)")])])]),t._v(" "),o("div",{staticClass:"filter-button"},[t._v("\n    FILTERS :\n    "),o("b-button",{class:{active:"all"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="all"}}},[t._v("All Products")]),t._v(" "),o("b-button",{class:{active:"filterTshirt"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="filterTshirt"}}},[t._v("Tee Shirt")]),t._v(" "),o("b-button",{class:{active:"filterDenim"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="filterDenim"}}},[t._v("Denim")]),t._v(" "),o("b-button",{class:{active:"Sweatshirts"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="filterSweatshirts"}}},[t._v("Sweatshirts")]),t._v(" "),o("b-button",{class:{active:"PoloTeeShirt"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="filterPoloTeeShirt"}}},[t._v("Polo Tee Shirt")]),t._v(" "),o("b-button",{class:{active:"filterShirt"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="filterShirt"}}},[t._v("Shirt")]),t._v(" "),o("div",{staticStyle:{float:"right"}},[o("b-button",{class:{active:"sortPrice"==t.userFilterKey},attrs:{id:"filterButton",pill:"",variant:"outline-secondary"},on:{click:function(e){t.userFilterKey="sortPrice"}}},[t._v("Sort low to high")])],1)],1),t._v(" "),o("b-row",t._l(t.userFilter,(function(e){return o("b-card-group",{key:e.id,staticClass:"col-md-3 col-6 my-1"},[o("b-card",{staticClass:"mb-1",staticStyle:{"max-width":"15rem",padding:"5px",border:"none"},attrs:{title:e.vendor,"sub-title":e.name,"img-src":e.image_src[0],"img-alt":"Image","img-top":"",tag:"article"}},[o("div",{staticClass:"middle",staticStyle:{display:"flex"}},t._l(e.options,(function(option){return o("div",{key:option.id,staticClass:"text",staticStyle:{display:"flex"}},[o("p",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Add to cart "+option.value},on:{click:function(o){return t.addToCart(e,option)}}},[t._v(t._s(option.value))])])})),0),t._v(" "),o("span",{staticClass:"price"},[t._v("$"+t._s(e.price)+"\n          "),o("del",{staticClass:"old_price"},[t._v("$"+t._s(e.compare_at_price))]),o("span",{staticClass:"percentage"},[t._v("\n            ( "+t._s(t.calculatePercentage(e.price,e.compare_at_price))+"%\n            OFF )")])])])],1)})),1),t._v(" "),t.modalAddCart?o("AddCartModal",{attrs:{component:t.selectedData,option:t.selectedOption},on:{close:function(e){t.modalAddCart=!1}}}):t._e()],1)}),[],!1,null,"cabd9c1a",null);e.default=component.exports;installComponents(component,{AddCartModal:o(254).default})},257:function(t,e,o){"use strict";o(251)},258:function(t,e,o){(e=o(53)(!1)).push([t.i,".text-center[data-v-cceaea76]{background:linear-gradient(90.06deg,#181716,#ed4e08 99.97%);font-style:normal;font-weight:500;font-size:16px;line-height:19px}#button[data-v-cceaea76]{background:#fff;color:#000}",""]),t.exports=e},259:function(t,e,o){"use strict";o(252)},260:function(t,e,o){(e=o(53)(!1)).push([t.i,".modal[data-v-c2f21490]{overflow-y:auto;background:rgba(0,0,0,.7);display:block}.modal-content[data-v-c2f21490]{background:#fff;color:#000;text-decoration:none;text-transform:none}.modal-dialog[data-v-c2f21490]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.button-wrapper[data-v-c2f21490]{display:flex;align-items:center;justify-content:center}img[data-v-c2f21490]{width:55%}.product-title[data-v-c2f21490]{font-weight:700;font-size:16px;line-height:19px;color:#000}.product-subtitle[data-v-c2f21490],.product-title[data-v-c2f21490]{font-style:normal;text-transform:capitalize}.product-subtitle[data-v-c2f21490]{font-weight:300;font-size:14px;line-height:16px;color:#878787}.close-img[data-v-c2f21490]{float:right;width:20px}",""]),t.exports=e},261:function(t,e,o){"use strict";o(253)},262:function(t,e,o){(e=o(53)(!1)).push([t.i,".active[data-v-cabd9c1a]{font-weight:700}.card-title[data-v-cabd9c1a]{font-weight:700;font-size:16px;line-height:19px;color:#000}.card-subtitle[data-v-cabd9c1a],.card-title[data-v-cabd9c1a]{font-style:normal;text-transform:capitalize}.card-subtitle[data-v-cabd9c1a]{font-weight:300;color:#878787}.card-subtitle[data-v-cabd9c1a],.price[data-v-cabd9c1a]{font-size:14px;line-height:16px}.price[data-v-cabd9c1a]{font-style:normal;font-weight:700;text-transform:capitalize;color:#000}.old_price[data-v-cabd9c1a]{font-weight:300;font-size:12px;line-height:14px}.old_price[data-v-cabd9c1a],.total_product[data-v-cabd9c1a]{color:#878787;font-style:normal}.total_product[data-v-cabd9c1a]{width:235px;height:23px;left:24px;top:174px;font-family:Roboto;font-weight:700;font-size:20px;line-height:23px;text-transform:capitalize}.percentage[data-v-cabd9c1a]{color:red;font-style:normal;font-weight:300;font-size:12px;line-height:14px}.total[data-v-cabd9c1a]{width:235px;height:23px;left:24px;top:174px;font-style:normal;font-weight:700;font-size:20px;line-height:23px;text-transform:capitalize;white-space:nowrap;text-overflow:ellipsis;color:#000}.image[data-v-cabd9c1a]{opacity:1;display:block;width:100%;height:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}.image[data-v-cabd9c1a],.middle[data-v-cabd9c1a]{transition:.5s ease}.middle[data-v-cabd9c1a]{opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.container .card:hover img[data-v-cabd9c1a]{opacity:.3}.container .card:hover .middle[data-v-cabd9c1a]{opacity:1}.text[data-v-cabd9c1a]{color:#000}.text[data-v-cabd9c1a],.text[data-v-cabd9c1a]:hover{background-color:#fff;padding:5px}.text[data-v-cabd9c1a]:hover{color:#ed4e08}.filter-button[data-v-cabd9c1a]{padding-bottom:40px}.route[data-v-cabd9c1a]{padding-top:10px;font-style:normal;font-weight:300;font-size:12px;line-height:14px;text-transform:capitalize;color:#000}",""]),t.exports=e},264:function(t,e,o){var content=o(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("9c823df2",content,!0,{sourceMap:!1})},265:function(t,e,o){var content=o(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("0c5b51c4",content,!0,{sourceMap:!1})},266:function(t,e,o){var content=o(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("1b7833da",content,!0,{sourceMap:!1})},267:function(t,e,o){"use strict";o.r(e);var r={name:"HomePageCarousel",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},n=(o(271),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v("\n     \n   "),o("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[o("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/da81fe0e-9616-43b1-a2c9-2f8ed876e41f1611677035261-H-M_Desk_Banner.jpg"}}),t._v(" "),o("b-carousel-slide",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/b5ec5f4f-b404-43a9-8dfd-e20342e94a111611677198549-Desktop-Vday-Unisex.jpg"}},[o("h1",[t._v("Hello world!")])]),t._v(" "),o("b-carousel-slide",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/26/cff0d343-3631-45f9-9a0b-cc69a4cf27671611677096992-Sarees_Desktop_Banner.jpg"}})],1)],1)}),[],!1,null,"b74b8d18",null);e.default=component.exports},268:function(t,e,o){"use strict";o.r(e);var r={name:"DealsOfTheDay"},n=(o(273),o(40)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",[e("div",{staticClass:"todayDeal"},[e("h2",[this._v("DEALS OF THE DAY")]),this._v(" "),e("b-card-group",{attrs:{deck:""}},[e("b-card",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/27/52fbf978-cb95-49f9-a1a2-429593929d331611723884420-VALENTINE-S-DAY-GIFT.jpg","img-alt":"Image","img-top":""}}),this._v(" "),e("b-card",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/25/6f15204a-b0e8-40bf-974a-afe76c6195e01611590021057-Min.40.jpg","img-alt":"Image","img-top":""}}),this._v(" "),e("b-card",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/25/34603f9f-6fb8-4f2a-8fb5-e78ea8faf8bf1611590021072-Min.40_2.jpg","img-alt":"Image","img-top":""}}),this._v(" "),e("b-card",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/25/77bcacce-cc69-45a8-b398-6197dad952831611590021044-Min.50.jpg","img-alt":"Image","img-top":""}}),this._v(" "),e("b-card",{attrs:{"img-src":"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/15/c667839e-0b9b-43d3-afea-8b9574fb9e731610726293090-Extra10--1-.jpg","img-alt":"Image","img-top":""}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,o){"use strict";o(264)},272:function(t,e,o){(e=o(53)(!1)).push([t.i,"img[data-v-b74b8d18]{height:100px}",""]),t.exports=e},273:function(t,e,o){"use strict";o(265)},274:function(t,e,o){(e=o(53)(!1)).push([t.i,".todayDeal{margin-top:100px}",""]),t.exports=e},275:function(t,e,o){"use strict";o(266)},276:function(t,e,o){(e=o(53)(!1)).push([t.i,"body{font-family:Roboto}.categories{margin-top:100px}.category{display:flex;text-align:center}.category img{width:45%}",""]),t.exports=e},279:function(t,e,o){"use strict";o.r(e);var r=o(255),n=o(256),c=o(267),l=o(268),d={head:{title:"home page"},components:{InviteAlert:r.default,MensClothing:n.default,HomePageCarousel:c.default,DealsOfTheDay:l.default}},f=(o(275),o(40)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HomePageCarousel"),t._v(" "),o("DealsOfTheDay"),t._v(" "),o("b-container",{staticClass:"categories"},[o("h2",[t._v("CATEGORIES")]),t._v(" "),o("div",{staticClass:"category"},[o("div",[o("nuxt-link",{attrs:{to:"/mens"}},[o("img",{attrs:{src:"https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:""}})]),t._v(" "),o("h3",[t._v("Mens")])],1),t._v(" "),o("div",[o("img",{attrs:{src:"https://images.unsplash.com/photo-1557771551-634f8d68b0a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:""}}),t._v(" "),o("h3",[t._v("Women")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomePageCarousel:o(267).default,DealsOfTheDay:o(268).default})}}]);