webpackJsonplensyn_ui([6],{518:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s(544),i=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(n,t,function(){return e[t]})}(a);var r=s(585),c=!1;var o=function(t){c||s(583)},u=s(11)(i.a,r.a,!1,o,null,null);u.options.__file="devPkg\\components\\common\\update\\Record.vue",n.default=u.exports},544:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s(84);n.default={computed:(0,e.mapGetters)({versionList:"versionList"}),data:function(){return{}},watch:{versionList:function(t){this.$nextTick(function(){})}},created:function(){this.$store.dispatch("getVersionData")}}},583:function(t,n,s){var e=s(584);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(64)("27cc70b2",e,!1)},584:function(t,n,s){(t.exports=s(63)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},585:function(t,n,s){"use strict";var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"record-content"},[s("span",{staticClass:"title"},[t._v("版本更新信息")]),t._v(" "),t._l(t.versionList,function(n){return s("div",{staticClass:"box"},[s("span",{staticClass:"title"},[s("span",[t._v(t._s(n.version))]),s("span",{staticClass:"date"},[t._v(t._s(n.date))])]),t._v(" "),s("ul",{staticClass:"list"},t._l(n.list,function(n){return s("li",{staticClass:"item"},[s("i",{staticClass:"icon"}),s("span",{staticClass:"txt",domProps:{innerHTML:t._s(n.desc)}})])}))])})],2)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};n.a=i}});