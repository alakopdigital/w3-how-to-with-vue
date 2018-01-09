webpackJsonp([24],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/ButtonGroup.vue":function(e,o,s){"use strict";o.a={name:"button-group",functional:!0,props:{isFullwidth:Boolean},render:function(e,o){return e("div",{class:["button-group",{"is-fullwidth":o.props.isFullwidth}]},o.children)}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/ButtonGroup.vue":function(e,o,s){"use strict";var t=s("./src/components/menus/ButtonGroup.vue");o.a={name:"button-group-page",data:function(){return{intro:'a "button group" with CSS',buttons:["Apple","Samsung","Sony"],examples:[["``` html",'<div class="btn-group">',"  <button>Apple</button>","  <button>Samsung</button>","  <button>Sony</button>","</div>","```"],["``` css",".btn-group button {","  background-color: #4CAF50; /* Green background */","  border: 1px solid green; /* Green border */","  color: white; /* White text */","  padding: 10px 24px; /* Some padding */","  cursor: pointer; /* Pointer/hand icon */","  float: left; /* Float the buttons side by side */","}","",".btn-group button:not(:last-child) {","  border-right: none; /* Prevent double borders */","}","","/* Clear floats (clearfix hack) */",".btn-group:after {",'  content: "";',"  clear: both;","  display: table;","}","","/* Add a background color on hover */",".btn-group button:hover {","  background-color: #3e8e41;","}","```"],["``` html","\x3c!-- Three buttons in a group --\x3e",'<div class="btn-group" style="width:100%">','  <button style="width:33.3%">Apple</button>','  <button style="width:33.3%">Samsung</button>','  <button style="width:33.3%">Sony</button>',"</div>","","\x3c!-- Four buttons in a group --\x3e",'<div class="btn-group" style="width:100%">','  <button style="width:25%">Apple</button>','  <button style="width:25%">Samsung</button>','  <button style="width:25%">Sony</button>','  <button style="width:25%">HTC</button>',"</div>","```"]]}},components:{ButtonGroup:t.a}}},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b8908d3","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/ButtonGroup.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".button-group{display:flex}.button-group.is-fullwidth{width:100%}.button-group button{background-color:#4caf50;border:1px solid green;color:#fff;padding:10px 24px;cursor:pointer;flex:1}.button-group button:hover{background-color:#3e8e41}.button-group button:not(:last-child){border-right:none}",""])},'./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-82257886","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ButtonGroup.vue':function(e,o,s){o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,"",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-82257886","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/ButtonGroup.vue':function(e,o,s){"use strict";var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("page",{staticClass:"button-group-page",attrs:{title:"Button Group",intro:e.intro}},[s("template",{slot:"header"},[s("h2",{staticClass:"title"},[e._v("Horizontal Button Groups")]),e._v(" "),s("p",[e._v("Group a series of buttons together on a single line in a button group:")])]),e._v(" "),s("sample",[s("button-group",e._l(e.buttons,function(o){return s("button",{key:o,domProps:{textContent:e._s(o)}})}))],1),e._v(" "),s("br"),e._v(" "),s("sample",[s("button-group",{attrs:{"is-fullwidth":""}},e._l(e.buttons,function(o){return s("button",{key:o,domProps:{textContent:e._s(o)}})}))],1),e._v(" "),s("template",{slot:"examples"},[s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("How To Create a Button Group")]),e._v(" "),s("step",{attrs:{no:"1",html:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[0]}}),e._v(" "),s("step",{attrs:{no:"2",css:""}}),e._v(" "),s("example-code",{attrs:{code:e.examples[1]}}),e._v(" "),s("hr"),e._v(" "),s("h2",{staticClass:"title"},[e._v("Justified / Full-width Button Group:")]),e._v(" "),s("example-code",{attrs:{code:e.examples[2]}})],1)],2)},l=[],n={render:t,staticRenderFns:l};o.a=n},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b8908d3","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/ButtonGroup.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b8908d3","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/ButtonGroup.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("162fe6a7",t,!0)},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-82257886","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ButtonGroup.vue':function(e,o,s){var t=s('./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-82257886","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ButtonGroup.vue');"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("./node_modules/vue-style-loader/lib/addStylesClient.js")("368999bf",t,!0)},"./src/components/menus/ButtonGroup.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b8908d3","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menus/ButtonGroup.vue')}var l=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menus/ButtonGroup.vue"),n=s("./node_modules/vue-loader/lib/component-normalizer.js"),d=t,u=n(l.a,null,!1,d,null,null);o.a=u.exports},"./src/pages/menus/ButtonGroup.vue":function(e,o,s){"use strict";function t(e){s('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-82257886","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/menus/ButtonGroup.vue')}Object.defineProperty(o,"__esModule",{value:!0});var l=s("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/menus/ButtonGroup.vue"),n=s('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-82257886","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/menus/ButtonGroup.vue'),d=s("./node_modules/vue-loader/lib/component-normalizer.js"),u=t,r=d(l.a,n.a,!1,u,null,null);o.default=r.exports}});
//# sourceMappingURL=ButtonGroup.js.map?id=abe9e909cec067d0fc60