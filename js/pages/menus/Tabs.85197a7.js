webpackJsonp([13],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Tabs.vue":function(e,s,t){"use strict";s.a={name:"tabs",props:{links:{type:Array,required:!0},isAnimated:Boolean,isExpanded:Boolean,position:{type:String,default:"top",validator:function(e){return["left","right","top","bottom"].some(function(s){return s===e})}}},data:function(){return{currentLink:""}},computed:{classes:function(){var e=[];return this.isAnimated&&e.push("is-animated"),this.isExpanded&&e.push("is-expanded"),e.push("is-"+this.position),e}},mounted:function(){if(this.links&&0!==this.links.length){this.$el.querySelector(".tab-link").click()}},methods:{isActive:function(e){return this.currentLink===e},toggle:function(e,s){this.currentLink&&this.$el.querySelector("#"+this.currentLink).classList.remove("is-active"),this.$el.querySelector("#"+s).classList.add("is-active"),this.currentLink=s}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Tabs.vue":function(e,s,t){"use strict";var o=t("./src/components/menus/Tabs.vue");s.a={name:"tabs-page",data:function(){return{examples:[["``` html",'<div class="tab">','  <button class="tablinks" onclick="openCity(event, \'London\')">London</button>','  <button class="tablinks" onclick="openCity(event, \'Paris\')">Paris</button>','  <button class="tablinks" onclick="openCity(event, \'Tokyo\')">Tokyo</button>',"</div>","",'<div id="London" class="tabcontent">',"  <h3>London</h3>","  <p>London is the capital city of England.</p>","</div>","",'<div id="Paris" class="tabcontent">',"  <h3>Paris</h3>","  <p>Paris is the capital of France.</p> ","</div>","",'<div id="Tokyo" class="tabcontent">',"  <h3>Tokyo</h3>","  <p>Tokyo is the capital of Japan.</p>","</div>","```"],["``` css","/* Style the tab */","div.tab {","    overflow: hidden;","    border: 1px solid #ccc;","    background-color: #f1f1f1;","}","","/* Style the buttons inside the tab */","div.tab button {","    background-color: inherit;","    float: left;","    border: none;","    outline: none;","    cursor: pointer;","    padding: 14px 16px;","    transition: 0.3s;","}","","/* Change background color of buttons on hover */","div.tab button:hover {","    background-color: #ddd;","}","","/* Create an active/current tablink class */","div.tab button.active {","    background-color: #ccc;","}","","/* Style the tab content */",".tabcontent {","    display: none;","    padding: 6px 12px;","    border: 1px solid #ccc;","    border-top: none;","}","```"],["``` js","function openCity(evt, cityName) {","    // Declare all variables","    var i, tabcontent, tablinks;","",'    // Get all elements with class="tabcontent" and hide them','    tabcontent = document.getElementsByClassName("tabcontent");',"    for (i = 0; i < tabcontent.length; i++) {",'        tabcontent[i].style.display = "none";',"    }","",'    // Get all elements with class="tablinks" and remove the class "active"','    tablinks = document.getElementsByClassName("tablinks");',"    for (i = 0; i < tablinks.length; i++) {",'        tablinks[i].className = tablinks[i].className.replace(" active", "");',"    }","",'    // Show the current tab, and add an "active" class to the button that opened the tab','    document.getElementById(cityName).style.display = "block";','    evt.currentTarget.className += " active";',"}","```"],["``` css",".tabcontent {","    -webkit-animation: fadeEffect 1s;","    animation: fadeEffect 1s; /* Fading effect takes 1 second */","}","","@-webkit-keyframes fadeEffect {","    from {opacity: 0;}","    to {opacity: 1;}","}","","@keyframes fadeEffect {","    from {opacity: 0;}","    to {opacity: 1;}","}","```"],["``` js",'<button class="tablinks" onclick="openCity(event, \'London\')" id="defaultOpen">London</button>',"","<script>",'// Get the element with id="defaultOpen" and click on it','document.getElementById("defaultOpen").click();',"<\/script>","```"],["``` html","\x3c!-- Click on the <span> element to close the tab --\x3e","",'<div id="London" class="tabcontent">',"  <h3>London</h3>","  <p>London is the capital city of England.</p>","  <span onclick=\"this.parentElement.style.display='none'\">x</span> ","</div>","```"]]}},components:{Tabs:o.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-41732244","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Tabs.vue':function(e,s,t){s=e.exports=t("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,"",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5c70015c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Tabs.vue':function(e,s,t){s=e.exports=t("./node_modules/css-loader/lib/css-base.js")(void 0),s.push([e.i,".tabs{width:100%;overflow:hidden;border:1px solid #ccc;display:flex;flex-direction:column}.tabs.is-left,.tabs.is-right{flex-direction:row}.tabs.is-left .tabs-links,.tabs.is-right .tabs-links{flex-direction:column;min-width:100px;flex:0.3}.tabs.is-left .tabs-links .tab-link,.tabs.is-right .tabs-links .tab-link{text-align:left}.tabs.is-left .tabs-contents,.tabs.is-right .tabs-contents{flex:1}.tabs.is-left .tabs-links{border-right:1px solid #ccc}.tabs.is-right{flex-direction:row-reverse}.tabs.is-right .tabs-links{border-left:1px solid #ccc}.tabs.is-top .tabs-links{border-bottom:1px solid #ccc}.tabs.is-bottom{flex-direction:column-reverse}.tabs.is-expanded .tabs-links .tab-link{flex:1}.tabs .tabs-links{display:flex;width:100%;background-color:#f1f1f1}.tabs .tabs-links .tab-link{background-color:inherit;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:.3s;margin:0}.tabs .tabs-links .tab-link:hover{background-color:#ddd}.tabs .tabs-links .tab-link.is-active{background-color:#ccc}.tabs .tabs-contents .tab-content{display:none;padding:6px 12px;border-top:none}.tabs .tabs-contents .tab-content.is-active{display:block}.tabs.is-animated .tab-content{animation:fadeEffect 1s}@keyframes fadeEffect{0%{opacity:0}to{opacity:1}}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-41732244","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Tabs.vue':function(e,s,t){"use strict";var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("page",{attrs:{title:"Tabs",intro:"tabs with CSS and JavaScript"}},[t("template",{slot:"header"},[t("h2",[e._v("Tabs")]),e._v(" "),t("p",[e._v("Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects:")])]),e._v(" "),t("sample",[t("tabs",{attrs:{"is-animated":"",links:["London","Paris","Tokyo"]}},[t("div",{staticClass:"tab-content",attrs:{id:"London"}},[t("h3",[e._v("London")]),e._v(" "),t("p",[e._v("London is the capital city of England.")])]),e._v(" "),t("div",{staticClass:"tab-content",attrs:{id:"Paris"}},[t("h3",[e._v("Paris")]),e._v(" "),t("p",[e._v("Paris is the capital of France.")])]),e._v(" "),t("div",{staticClass:"tab-content",attrs:{id:"Tokyo"}},[t("h3",[e._v("Tokyo")]),e._v(" "),t("p",[e._v("Tokyo is the capital of Japan.")])])])],1),e._v(" "),t("template",{slot:"examples"},[t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Create Toggleable Tabs")]),e._v(" "),t("step",{attrs:{no:"1",html:""}}),e._v(" "),t("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),t("p",[e._v("Create buttons to open specific tab content. All <div> elements with "),t("code",[e._v('class="tabcontent"')]),e._v(' are hidden by default (with CSS & JS). When the user clicks on a button - it will open the tab content that "matches" this button.')]),e._v(" "),t("hr"),e._v(" "),t("step",{attrs:{no:"2",css:""}},[t("p",[e._v("Style the buttons and the tab content:")])]),e._v(" "),t("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),t("step",{attrs:{no:"3",js:""}}),e._v(" "),t("example-code",{attrs:{code:e.examples[2]}}),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Fade in Tabs:")]),e._v(" "),t("p",[e._v("If you want to fade in the tab content, add the following CSS:")]),e._v(" "),t("example-code",{attrs:{code:e.examples[3]}}),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Show a tab by default")]),e._v(" "),t("p",[e._v('To open a specific tab on page load, use JavaScript to "click" on the specified tab button:')]),e._v(" "),t("example-code",{attrs:{code:e.examples[4]}}),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Close a tab")]),e._v(" "),t("p",[e._v("If you want to close a specific tab, use JavaScript to hide the tab with a click of a button:")]),e._v(" "),t("example-code",{attrs:{code:e.examples[5]}})],1)],2)},a=[],n={render:o,staticRenderFns:a};s.a=n},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5c70015c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Tabs.vue':function(e,s,t){"use strict";var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"tabs",class:e.classes},[t("div",{staticClass:"tabs-links"},e._l(e.links,function(s){return t("button",{key:s,staticClass:"tab-link",class:{"is-active":e.isActive(s)},domProps:{textContent:e._s(s)},on:{click:function(t){e.toggle(t,s)}}})})),e._v(" "),t("div",{staticClass:"tabs-contents"},[e._t("default")],2)])},a=[],n={render:o,staticRenderFns:a};s.a=n},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-41732244","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Tabs.vue':function(e,s,t){var o=t('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-41732244","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Tabs.vue');"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("./node_modules/vue-style-loader/lib/addStylesClient.js")("75e6886d",o,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5c70015c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Tabs.vue':function(e,s,t){var o=t('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5c70015c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Tabs.vue');"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("./node_modules/vue-style-loader/lib/addStylesClient.js")("fe9bec20",o,!0)},"./src/components/menus/Tabs.vue":function(e,s,t){"use strict";function o(e){t('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5c70015c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/Tabs.vue')}var a=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/Tabs.vue"),n=t('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5c70015c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menus/Tabs.vue'),l=t("./node_modules/vue-loader/lib/component-normalizer.js"),i=o,d=l(a.a,n.a,!1,i,null,null);s.a=d.exports},"./src/pages/menus/Tabs.vue":function(e,s,t){"use strict";function o(e){t('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-41732244","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/Tabs.vue')}Object.defineProperty(s,"__esModule",{value:!0});var a=t("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/Tabs.vue"),n=t('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-41732244","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/Tabs.vue'),l=t("./node_modules/vue-loader/lib/component-normalizer.js"),i=o,d=l(a.a,n.a,!1,i,null,null);s.default=d.exports}});
//# sourceMappingURL=Tabs.85197a7.js.map