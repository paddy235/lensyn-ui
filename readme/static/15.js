webpackJsonplensyn_ui([15],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_95ad1e0c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Colors_vue__ = __webpack_require__(524);
var disposed = false
var normalizeComponent = __webpack_require__(22)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Colors_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_95ad1e0c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Colors_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\components\\common\\colors\\Colors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95ad1e0c", Component.options)
  } else {
    hotAPI.reload("data-v-95ad1e0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 482:
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


exports.default = {
    data: function data() {
        return {
            list: [{ title: "?????????", txt: "????????????????????????????????????????????????", list: [{ title: "Primary", sub: "#407dd1" }] }, { title: "?????????", txt: "?????????????????????????????????????????????????????????????????????", list: [{ title: "?????????01", sub: "#27518d" }, { title: "?????????02", sub: "#333743" }, { title: "?????????03", sub: "#f5f6fa" }, { title: "?????????04", sub: "#2d8d46" }, { title: "?????????05", sub: "#d93b25" }] }, { title: "???????????????", list: [{ title: "???????????????", sub: "#407dd1" }, { title: "?????????????????????", sub: "#333" }, { title: "????????????????????????", sub: "#fffff" }, { title: "?????????????????????", sub: "#999" }, { title: "???????????????", sub: "#2d8d46" }, { title: "???????????????", sub: "#d93b25" }] }, { title: "?????????", list: [{ title: "?????????????????????", sub: "#27518d" }, { title: "????????????", sub: "#333743" }, { title: "??????????????????", sub: "#41485b" }, { title: "???????????????", sub: "#e2e7ed" }, { title: "???????????????", sub: "#2d8d46" }, { title: "??????????????????", sub: "#f5f6fa" }] }, { title: "?????????", list: [{ title: "????????????", sub: "#407dd1" }, { title: "????????????", sub: "#62a5ff" }, { title: "????????????", sub: "#62a5ff" }, { title: "??????????????????", sub: "#999999" }] }, { title: "?????????", list: [{ title: "??????", sub: "#dcdcdc" }] }]
        };
    },

    watch: {},
    methods: {},
    created: function created() {}
};

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "containerNode", staticClass: "component-content" },
    [
      _c("span", { staticClass: "title" }, [_vm._v("????????????")]),
      _vm._v(" "),
      _c("span", { staticClass: "desc" }, [
        _vm._v("????????????????????????????????????????????????????????????????????????????????????")
      ]),
      _vm._v(" "),
      _vm._l(_vm.list, function(item) {
        return _c("div", { staticClass: "color-box" }, [
          _c("span", { staticClass: "sub" }, [_vm._v(_vm._s(item.title))]),
          _vm._v(" "),
          item.txt
            ? _c("span", { staticClass: "desc" }, [_vm._v(_vm._s(item.txt))])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "layout-row line" },
            _vm._l(item.list, function(it) {
              return _c("div", { staticClass: "col-color" }, [
                _c(
                  "span",
                  {
                    staticClass: "box",
                    style: [{ "background-color": it.sub }]
                  },
                  [
                    _c("span", { staticClass: "title" }, [
                      _vm._v(_vm._s(it.title))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "sub" }, [
                      _vm._v(_vm._s(it.sub.toUpperCase()))
                    ])
                  ]
                )
              ])
            })
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-95ad1e0c", esExports)
  }
}

/***/ })

});