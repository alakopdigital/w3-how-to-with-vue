webpackJsonp([20],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/SideNav.vue":function(e,t,s){"use strict";t.a={name:"side-nav",props:{active:Boolean,isAnimated:Boolean,pushContent:Boolean,isDimmed:Boolean,textCenter:Boolean,selector:String,direction:{type:String,default:"right",validator:function(e){return["right","down"].some(function(t){return t===e})}},width:{type:String,default:"250px",validator:function(e){return/^\d+(px|%)$/.test(e)}}},data:function(){return{contentMarginLeft:""}},computed:{$content:function(){return this.selector?document.querySelector(this.selector):this.$el.parentElement},isGoToRight:function(){return"right"===this.direction}},mounted:function(){if(this.isGoToRight?this.$el.style.height="100%":this.$el.style.width=this.width,this.pushContent&&(this.isAnimated&&this.$content.classList.add("pushable"),this.contentMarginLeft=this.$content.style.marginLeft),this.isDimmed){var e=document.createElement("div");e.classList.add("dimmable"),e.addEventListener("click",this.close),document.body.appendChild(e),this.dim=e}},beforeDestroy:function(){this.dim&&this.dim.remove()},watch:{active:function(e){e?(this.isGoToRight?this.$el.style.width=this.width:this.$el.style.height="100%",this.pushContent&&(this.$content.style.marginLeft=this.width),this.isDimmed&&this.dim.classList.add("dimmed")):(this.isGoToRight?this.$el.style.width="0":this.$el.style.height="0",this.pushContent&&(this.$content.style.marginLeft=this.contentMarginLeft),this.isDimmed&&this.dim.classList.remove("dimmed"))}},methods:{close:function(){this.$emit("close"),this.$emit("update:active",!1)}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/SideNavigation.vue":function(e,t,s){"use strict";var i=s("./src/components/menus/SideNav.vue");t.a={name:"side-navigation-page",data:function(){return{samples:[{isActive:!1},{isActive:!1},{isActive:!1},{isActive:!1},{isActive:!1}],links:["About","Services","Clients","Contact"],examples:[["``` html",'<div id="mySidenav" class="sidenav">','  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>','  <a href="#">About</a>','  <a href="#">Services</a>','  <a href="#">Clients</a>','  <a href="#">Contact</a>',"</div>","","\x3c!-- Use any element to open the sidenav --\x3e",'<span onclick="openNav()">open</span>',"","\x3c!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --\x3e",'<div id="main">',"  ...","</div>","```"],["``` css","/* The side navigation menu */",".sidenav {","  height: 100%; /* 100% Full-height */","  width: 0; /* 0 width - change this with JavaScript */","  position: fixed; /* Stay in place */","  z-index: 1; /* Stay on top */","  top: 0; /* Stay at the top */","  left: 0;","  background-color: #111; /* Black*/","  overflow-x: hidden; /* Disable horizontal scroll */","  padding-top: 60px; /* Place content 60px from the top */","  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */","}","","/* The navigation menu links */",".sidenav a {","  padding: 8px 8px 8px 32px;","  text-decoration: none;","  font-size: 25px;","  color: #818181;","  display: block;","  transition: 0.3s;","}","","/* When you mouse over the navigation links, change their color */",".sidenav a:hover {","  color: #f1f1f1;","}","","/* Position and style the close button (top right corner) */",".sidenav .closebtn {","  position: absolute;","  top: 0;","  right: 25px;","  font-size: 36px;","  margin-left: 50px;","}","","/* Style page content - use this if you want to push the page content to the right when you open the side navigation */","#main {","  transition: margin-left .5s;","  padding: 20px;","}","","/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */","@media screen and (max-height: 450px) {","  .sidenav {padding-top: 15px;}","  .sidenav a {font-size: 18px;}","}","```"],["``` js","/* Set the width of the side navigation to 250px */","function openNav() {",'  document.getElementById("mySidenav").style.width = "250px";',"}","","/* Set the width of the side navigation to 0 */","function closeNav() {",'  document.getElementById("mySidenav").style.width = "0";',"}","```"],["``` js","/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */","function openNav() {",'  document.getElementById("mySidenav").style.width = "250px";','  document.getElementById("main").style.marginLeft = "250px";',"}","","/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */","function closeNav() {",'  document.getElementById("mySidenav").style.width = "0";','  document.getElementById("main").style.marginLeft = "0";',"}","```"],["``` js","/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */","function openNav() {",'  document.getElementById("mySidenav").style.width = "250px";','  document.getElementById("main").style.marginLeft = "250px";','  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";',"}","","/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */","function closeNav() {",'  document.getElementById("mySidenav").style.width = "0";','  document.getElementById("main").style.marginLeft = "0";','  document.body.style.backgroundColor = "white";',"}","```"],["``` js","/* Open the sidenav */","function openNav() {",'  document.getElementById("mySidenav").style.width = "100%";',"}","","/* Close/hide the sidenav */","function closeNav() {",'  document.getElementById("mySidenav").style.width = "0";',"}","```"],["``` js","/* Open the sidenav */","function openNav() {",'  document.getElementById("mySidenav").style.display = "block";',"}","","/* Close/hide the sidenav */","function closeNav() {",'  document.getElementById("mySidenav").style.display = "none";',"}","```"],["``` css",".sidenav {","  right: 0;","}","```"],["``` css","/* The sidenav */",".sidenav {","  height: 100%;","  width: 200px;","  position: fixed;","  z-index: 1;","  top: 0;","  left: 0;","  background-color: #111;","  overflow-x: hidden;","  padding-top: 20px;","}","","/* Page content */",".main {","  margin-left: 200px; /* Same as the width of the sidenav */","}","```"]]}},methods:{toggle:function(e){e.isActive=!0}},components:{SideNav:i.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-013bb108","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/SideNavigation.vue':function(e,t,s){t=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".side-navigation-page{display:block!important}.side-navigation-page button{display:block}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-07365f02","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/SideNav.vue':function(e,t,s){t=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".side-nav{height:0;width:0;position:fixed;z-index:12;top:0;left:0;background-color:#111;overflow-x:hidden}.side-nav.is-animated{transition:.5s}.side-nav.has-text-centered{text-align:center}.side-nav .menus{padding-top:60px}.side-nav a{padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#818181;cursor:pointer;display:block;transition:.3s}.side-nav a:hover{color:#f1f1f1}.side-nav .close-btn{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}.pushable{transition:margin-left .5s}.dimmable{width:0;height:100%;z-index:11;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.9);transition:opacity 1s;opacity:0}.dimmed{width:100%;opacity:.8}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-013bb108","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/SideNavigation.vue':function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("page",{attrs:{title:"Side Navigation",intro:"an animated, closable side navigation menu"}},[s("side-nav",{attrs:{active:e.samples[0].isActive,selector:".container","is-animated":""},on:{"update:active":function(t){e.$set(e.samples[0],"isActive",t)}}},e._l(e.links,function(t){return s("a",{domProps:{textContent:e._s(t)}})})),e._v(" "),s("side-nav",{attrs:{active:e.samples[1].isActive,selector:".container"},on:{"update:active":function(t){e.$set(e.samples[1],"isActive",t)}}},e._l(e.links,function(t){return s("a",{domProps:{textContent:e._s(t)}})})),e._v(" "),s("side-nav",{attrs:{active:e.samples[2].isActive,selector:".container","is-animated":"","push-content":""},on:{"update:active":function(t){e.$set(e.samples[2],"isActive",t)}}},e._l(e.links,function(t){return s("a",{domProps:{textContent:e._s(t)}})})),e._v(" "),s("side-nav",{attrs:{active:e.samples[3].isActive,selector:".container","is-animated":"","push-content":"","is-dimmed":""},on:{"update:active":function(t){e.$set(e.samples[3],"isActive",t)}}},e._l(e.links,function(t){return s("a",{domProps:{textContent:e._s(t)}})})),e._v(" "),s("side-nav",{attrs:{active:e.samples[4].isActive,selector:".container","is-animated":"",width:"100%","text-center":""},on:{"update:active":function(t){e.$set(e.samples[4],"isActive",t)}}},e._l(e.links,function(t){return s("a",{domProps:{textContent:e._s(t)}})})),e._v(" "),s("sample",{staticClass:"side-navigation-page"},[s("button",{staticClass:"w3-btn",on:{click:function(t){e.toggle(e.samples[0])}}},[e._v("Sidenav overlay")]),e._v(" "),s("button",{staticClass:"w3-btn",on:{click:function(t){e.toggle(e.samples[1])}}},[e._v("Sidenav overlay without animation")]),e._v(" "),s("button",{staticClass:"w3-btn",on:{click:function(t){e.toggle(e.samples[2])}}},[e._v("Sidenav push (off-canvas)")]),e._v(" "),s("button",{staticClass:"w3-btn",on:{click:function(t){e.toggle(e.samples[3])}}},[e._v("Sidenav push w/opacity")]),e._v(" "),s("button",{staticClass:"w3-btn",on:{click:function(t){e.toggle(e.samples[4])}}},[e._v("Sidenav full-width")])]),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Create an Animated Side Navigation")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("step",{attrs:{no:"3",js:""}}),e._v(" "),s("p",[e._v("The example below slides in the side navigation, and makes it 250px wide:")]),e._v(" "),s("example-code",{attrs:{title:"Sidenav Overlay Example",code:e.examples[2]}}),e._v(" "),s("p",[e._v('The example below slides in the side navigation, and pushes the page content to the right (the value used to set the width of the sidenav is also used to set the left margin of the "page content"):')]),e._v(" "),s("example-code",{attrs:{title:"Sidenav Push Content",code:e.examples[3]}}),e._v(" "),s("p",[e._v('The example below also slides in the side navigation, and pushes the page content to the right, only this time, we add a black background color with a 40% opacity to the body element, to "highlight" the side navigation:')]),e._v(" "),s("example-code",{attrs:{title:"Sidenav Push Content w/ opacity",code:e.examples[4]}}),e._v(" "),s("p",[e._v("The example below slides in the side navigation from the left and covers the whole page (100% width):")]),e._v(" "),s("example-code",{attrs:{title:"Sidenav Full-width:",code:e.examples[5]}}),e._v(" "),s("p",[e._v("The example below opens and close the side navigation menu without animations:")]),e._v(" "),s("example-code",{attrs:{title:"Sidenav without Animation",code:e.examples[6]}}),e._v(" "),s("p",[e._v("The example below shows how to create a right-sided navigation menu:")]),e._v(" "),s("example-code",{attrs:{title:"Right-sided navigation:",code:e.examples[7]}}),e._v(" "),s("p",[e._v("The example below shows how to create a side navigation menu that is always shown (fixed):")]),e._v(" "),s("example-code",{attrs:{title:"Always show sidenav:",code:e.examples[8]}})],1)],2)},n=[],o={render:i,staticRenderFns:n};t.a=o},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-07365f02","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/SideNav.vue':function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"side-nav",class:{"is-animated":e.isAnimated,"has-text-centered":e.textCenter}},[s("div",{staticClass:"menus"},[e._t("default"),e._v(" "),s("a",{staticClass:"close-btn",on:{click:function(t){e.close()}}},[e._v("×")])],2)])},n=[],o={render:i,staticRenderFns:n};t.a=o},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-013bb108","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/SideNavigation.vue':function(e,t,s){var i=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-013bb108","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/SideNavigation.vue');"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("25d4afed",i,!0,{})},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-07365f02","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/SideNav.vue':function(e,t,s){var i=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-07365f02","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/SideNav.vue');"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("4da663af",i,!0,{})},"./src/components/menus/SideNav.vue":function(e,t,s){"use strict";function i(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-07365f02","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/SideNav.vue')}var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/SideNav.vue"),o=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-07365f02","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/SideNav.vue'),a=s("./node_modules/vue-loader/lib/component-normalizer.js"),d=i,l=a(n.a,o.a,!1,d,null,null);t.a=l.exports},"./src/pages/menus/SideNavigation.vue":function(e,t,s){"use strict";function i(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-013bb108","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/SideNavigation.vue')}Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/SideNavigation.vue"),o=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-013bb108","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/SideNavigation.vue'),a=s("./node_modules/vue-loader/lib/component-normalizer.js"),d=i,l=a(n.a,o.a,!1,d,null,null);t.default=l.exports}});
//# sourceMappingURL=SideNavigation.js.map?id=a6df3029dbc9735fefd4