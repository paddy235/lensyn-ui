webpackJsonplensyn_ui([7],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_65a84e1a_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Selection_vue__ = __webpack_require__(529);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(527)
}
var normalizeComponent = __webpack_require__(22)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65a84e1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Selection_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_65a84e1a_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Selection_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\components\\common\\selection\\Selection.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65a84e1a", Component.options)
  } else {
    hotAPI.reload("data-v-65a84e1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            showContent: false,
            menuList: {
                list: [{ id: "ID1", name: "?????????" }, { id: "ID2", name: "?????????" }, { id: "ID3", name: "?????????" }, { id: "ID4", name: "?????????" }, { id: "ID5", name: "?????????" }, { id: "ID6", name: "?????????" }, { id: "ID7", name: "?????????" }, { id: "ID8", name: "?????????" }]
            },
            params: [[{ name: "??????", cls: "col col-2" }, { name: "??????", cls: "col col-6" }, { name: "??????", cls: "col col-2" }], [{ name: "objProps", cls: "col col-2" }, { name: "???????????????????????????", cls: "col col-6" }, { name: "array", cls: "col col-2" }], [{ name: "clickEvt", cls: "col col-2" }, { name: "??????????????????", cls: "col col-6" }, { name: "function", cls: "col col-6" }], [{ name: "showFieldKey", cls: "col col-2" }, { name: "??????????????????????????????????????????????????? name", cls: "col col-6" }, { name: "string", cls: "col col-2" }], [{ name: "idKey", cls: "col col-2" }, { name: "?????????????????????????????? id", cls: "col col-6" }, { name: "string", cls: "col col-2" }], [{ name: "isDisabled", cls: "col col-2" }, { name: "???????????????????????????????????? false", cls: "col col-6" }, { name: "boolean", cls: "col col-2" }], [{ name: "inputClass", cls: "col col-2" }, { name: "?????????????????????????????? class,????????????", cls: "col col-6" }, { name: "string", cls: "col col-2" }], [{ name: "showType", cls: "col col-2" }, { name: "??????????????????????????????????????????????????????????????????", cls: "col col-6" }, { name: "string", cls: "col col-2" }]],

            methodParams: [[{ name: "?????????", cls: "col col-2" }, { name: "??????", cls: "col col-6" }, { name: "??????", cls: "col col-2" }], [{ name: "getSelected", cls: "col col-2" }, { name: "????????????????????????????????????????????? null", cls: "col col-6" }, { name: "???", cls: "col col-2" }], [{ name: "clearSelected", cls: "col col-2" }, { name: "?????????????????????", cls: "col col-6" }, { name: "???", cls: "col col-2" }], [{ name: "setItemBeSelected", cls: "col col-2" }, { name: "??????????????????????????????", cls: "col col-6" }, { name: "????????????????????????", cls: "col col-2" }]]
        };
    },

    watch: {},
    methods: {
        tempListClick: function tempListClick(val) {
            console.log(val);
        },
        footerEvt: function footerEvt() {
            var that = this;
            that.showContent = !that.showContent;
        }
    },
    mounted: function mounted() {
        var that = this;
        that.$nextTick(function () {
            var boxFooter = that.$refs.boxFooter;
            /* ???????????????????????????????????? */
            var scrollNode = that.$refs.containerNode.parentNode;
            scrollNode.addEventListener('scroll', function () {
                /* ?????????????????????????????????????????????+????????????????????????????????? */
                var scrollTop = scrollNode.scrollTop + scrollNode.offsetHeight;
                /* ??????????????????????????????????????? */
                var boxFooterClass = boxFooter.className;
                var state = boxFooterClass.endsWith(' fixedBottom');
                /* ????????????????????????????????? */
                var node = document.getElementById("basicLayout");
                /**
                 * ????????????????????????????????????????????????????????????
                 * ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                 */
                var startY = node.offsetTop + node.querySelector("div.box-content").offsetHeight - scrollTop;
                var endY = node.offsetTop + node.offsetHeight - scrollTop;
                /* ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */
                if (that.showContent && endY >= 0 && startY <= 0) {
                    /* ??????????????????????????????????????????????????????????????? */
                    if (!state) {
                        /* ?????????????????????????????? */
                        boxFooter.style.width = boxFooter.getBoundingClientRect().width + 'px';
                        boxFooter.className += ' fixedBottom';
                    }
                } else {
                    /* ???????????????????????????????????????????????? */
                    if (state) boxFooter.className = boxFooterClass.replace(' fixedBottom', '');
                }
            });
        });
    }
};

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("c0a90764", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.8@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65a84e1a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./Selection.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.8@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65a84e1a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./Selection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, "\n.component-content .grid .col-2[data-v-65a84e1a] {\n  flex-basis: 20%;\n}\n.component-content .grid .col-6[data-v-65a84e1a] {\n  flex-basis: 60%;\n}\n", ""]);

// exports


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "containerNode", staticClass: "component-content" }, [
    _c("span", { staticClass: "title" }, [_vm._v("Selection ??????")]),
    _vm._v(" "),
    _c("span", { staticClass: "desc" }, [
      _vm._v("web ???????????????????????????????????????????????????????????????")
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "sub" }, [_vm._v("Selection ????????????")]),
    _vm._v(" "),
    _c("span", { staticClass: "desc" }, [_vm._v("??????????????????????????????")]),
    _vm._v(" "),
    _c("div", { staticClass: "box", attrs: { id: "basicLayout" } }, [
      _c(
        "div",
        { staticClass: "box-content" },
        [
          _c("ls-selection", {
            staticClass: "box",
            attrs: { showType: "scroll", objProps: _vm.menuList },
            on: { clickEvt: _vm.tempListClick }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "boxTagger",
          staticClass: "box-tagger",
          style: [{ height: _vm.showContent ? "auto" : "0" }]
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "fixed-footer" }, [
        _c(
          "div",
          {
            ref: "boxFooter",
            staticClass: "box-footer",
            on: { click: _vm.footerEvt }
          },
          [
            _c("i", {
              staticClass: "box-footer-icon",
              class: [{ active: _vm.showContent }]
            }),
            _c("span", [
              _vm._v(_vm._s(_vm.showContent ? "????????????" : "????????????"))
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "box-footer-btn",
              style: [{ opacity: _vm.showContent ? 1 : 0 }],
              attrs: { type: "button", tabindex: "0" }
            })
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "sub" }, [_vm._v("????????????????????????")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "grid" },
      _vm._l(_vm.params, function(item, index) {
        return _c(
          "li",
          { key: index, staticClass: "row" },
          _vm._l(item, function(it, index) {
            return _c("div", {
              key: index,
              class: [it.cls],
              domProps: { innerHTML: _vm._s(it.name) }
            })
          })
        )
      })
    ),
    _vm._v(" "),
    _c("span", { staticClass: "sub" }, [_vm._v("????????????")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "grid" },
      _vm._l(_vm.methodParams, function(item, index) {
        return _c(
          "li",
          { key: index, staticClass: "row" },
          _vm._l(item, function(it, index) {
            return _c("div", {
              key: index,
              class: [it.cls],
              domProps: { innerHTML: _vm._s(it.name) }
            })
          })
        )
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("pre", [
      _vm._v("                "),
      _c("p", { staticClass: "txt" }, [_vm._v("vue ??????")]),
      _vm._v(
        '\n                <ls-selection class="box" :objProps="menuList" @clickEvt="tempListClick"></ls-selection>\n                '
      ),
      _c("p", { staticClass: "txt" }, [_vm._v("????????????")]),
      _vm._v(
        '\n                data() {\n                    return {\n                        menuList: {\n                            list: [\n                                {id: "ID1", name: "?????????"},\n                                {id: "ID2", name: "?????????"},\n                                {id: "ID3", name: "?????????"},\n                                {id: "ID4", name: "?????????"},\n                                {id: "ID5", name: "?????????"},\n                                {id: "ID6", name: "?????????"},\n                                {id: "ID7", name: "?????????"},\n                                {id: "ID8", name: "?????????"}\n                            ]\n                        }\n                    }\n                }\n                methods: {\n                    tempListClick(val) {\n                        console.log(val);\n                    }\n                }\n            '
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-65a84e1a", esExports)
  }
}

/***/ })

});