webpackJsonp([15],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue":function(e,o,s){"use strict";o.a={name:"top-nav",props:{isResponsive:Boolean,isBottom:Boolean},data:function(){return{isActive:!1}},computed:{classes:function(){var e=[];return this.isResponsive&&e.push("is-responsive"),this.isActive&&e.push("is-active"),this.isBottom&&e.push("is-bottom"),e}},methods:{toggleMenu:function(){this.isActive=!this.isActive}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/BottomNavigation.vue":function(e,o,s){"use strict";var t=s("./src/components/menus/TopNav.vue");o.a={name:"bottom-navigation-page",data:function(){return{currentLink:"",links:["Home","News","Contact","About"],examples:[["``` html",'<div class="navbar">','  <a href="#home" class="active">Home</a>','  <a href="#news">News</a>','  <a href="#contact">Contact</a>',"</div>","```"],["``` css","/* Place the navbar at the bottom of the page, and make it stick */",".navbar {","  background-color: #333;","  overflow: hidden;","  position: fixed;","  bottom: 0;","  width: 100%;","}","","/* Style the links inside the navigation bar */",".navbar a {","  float: left;","  display: block;","  color: #f2f2f2;","  text-align: center;","  padding: 14px 16px;","  text-decoration: none;","  font-size: 17px;","}","","/* Change the color of links on hover */",".navbar a:hover {","  background-color: #ddd;","  color: black;","}","","/* Add a color to the active/current link */",".navbar a.active {","  background-color: #4CAF50;","  color: white;","}","```"]]}},mounted:function(){this.currentLink=this.links[0]},components:{TopNav:t.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1fcb6c76","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/BottomNavigation.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".bottom-navigation-page{flex-direction:column;border:3px solid #f1f1f1;height:300px;position:relative}.bottom-navigation-page .sample-contents{padding:16px 16px 0}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,".top-nav{width:100%;background-color:#333;overflow:auto;display:flex}.top-nav.is-responsive a{float:left}.top-nav.is-bottom{position:absolute!important;bottom:0}.top-nav a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:18px;cursor:pointer}.top-nav a:hover{background-color:#ddd;color:#000}.top-nav a.is-active{background-color:#4caf50;color:#fff}.top-nav a.toggle-menu{display:none}@media (max-width:768px){.top-nav.is-responsive{display:block}.top-nav.is-responsive a:not(.is-active){display:none}.top-nav.is-responsive .toggle-menu{float:right;font-size:1em;display:block!important}.top-nav.is-responsive.is-active{position:relative}.top-nav.is-responsive.is-active.is-bottom .toggle-menu{bottom:0;top:unset}.top-nav.is-responsive.is-active .toggle-menu{position:absolute;right:0;top:0}.top-nav.is-responsive.is-active a{float:none;display:block;text-align:left}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1fcb6c76","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/BottomNavigation.vue':function(e,o,s){"use strict";var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{attrs:{title:"Bottom Navigation",intro:"a bottom navigation menu with CSS"}},[s("template",{slot:"header"},[s("h2",{staticClass:"title"},[e._v("Bottom Navigation Menu")])]),e._v(" "),s("sample",{staticClass:"bottom-navigation-page"},[s("top-nav",{attrs:{"is-bottom":""}},e._l(e.links,function(o){return s("a",{class:{"is-active":o===e.currentLink},domProps:{textContent:e._s(o)},on:{click:function(s){e.currentLink=o}}})})),e._v(" "),s("div",{staticClass:"sample-contents"},[s("h1",[e._v("Bottom Navigation Bar")]),e._v(" "),s("p",[e._v("Some text some text some text.")])])],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Create A Bottom Navigation Menu")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}})],1)],2)},a=[],n={render:t,staticRenderFns:a};o.a=n},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6823dda5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue':function(e,o,s){"use strict";var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("nav",{staticClass:"top-nav",class:e.classes},[e._t("default"),e._v(" "),e.isResponsive?s("a",{staticClass:"toggle-menu",on:{click:function(o){e.toggleMenu()}}},[e._v("☰")]):e._e()],2)},a=[],n={render:t,staticRenderFns:a};o.a=n},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1fcb6c76","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/BottomNavigation.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1fcb6c76","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/BottomNavigation.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("df553f18",t,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("0bd37f5d",t,!0,{})},"./src/components/menus/TopNav.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6823dda5","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/TopNav.vue')}var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/TopNav.vue"),n=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6823dda5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/TopNav.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),i=t,d=l(a.a,n.a,!1,i,null,null);o.a=d.exports},"./src/pages/menus/BottomNavigation.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1fcb6c76","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/BottomNavigation.vue')}Object.defineProperty(o,"__esModule",{value:!0});var a=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/BottomNavigation.vue"),n=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-1fcb6c76","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/BottomNavigation.vue'),l=s("./node_modules/vue-loader/lib/component-normalizer.js"),i=t,d=l(a.a,n.a,!1,i,null,null);o.default=d.exports}});
//# sourceMappingURL=BottomNavigation.js.map?id=8d2995c66606fb6bd356