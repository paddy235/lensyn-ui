webpackJsonplensyn_ui([8],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5efa0bba_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(523);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(521)
}
var normalizeComponent = __webpack_require__(22)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_Layout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5efa0bba_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devPkg\\components\\common\\layout\\Layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5efa0bba", Component.options)
  } else {
    hotAPI.reload("data-v-5efa0bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 481:
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

exports.default = {
    data: function data() {
        return {
            showContent: false,
            list: [["col-12", "col-12"], ["col-8", "col-8", "col-8"], ["col-6", "col-6", "col-6", "col-6"], ["col-4", "col-4", "col-4", "col-4", "col-4", "col-4"], ["col-offset", "col-6 col-offset-6", "col-offset", "col-6 col-offset-6"]],
            params: [[{ name: "??????", cls: "col" }, { name: "??????", cls: "col mark" }, { name: "??????", cls: "col" }], [{ name: "xs", cls: "col" }, { name: "<em>&lt;1336</em>???????????????1024?????????????????????", cls: "col mark" }, { name: "px", cls: "col" }], [{ name: "xs", cls: "col" }, { name: "<em>&ge;1336</em>???<em>&lt;1680</em>???????????????1336?????????????????????", cls: "col mark" }, { name: "px", cls: "col" }], [{ name: "xs", cls: "col" }, { name: "<em>&ge;1680</em>???<em>&lt;1920</em>???????????????1680?????????????????????", cls: "col mark" }, { name: "px", cls: "col" }], [{ name: "xs", cls: "col" }, { name: "<em>&ge;1920</em>???????????????1920?????????????????????", cls: "col mark" }, { name: "px", cls: "col" }]]
        };
    },

    methods: {
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

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("6d58dc59", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.8@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5efa0bba\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.8@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5efa0bba\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "containerNode", staticClass: "component-content" }, [
    _c("span", { staticClass: "title" }, [_vm._v("??????")]),
    _vm._v(" "),
    _c("span", { staticClass: "desc" }, [
      _vm._v("???????????????????????????????????????24???????????????????????????????????????")
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "sub" }, [_vm._v("??????????????????")]),
    _vm._v(" "),
    _c("span", { staticClass: "desc" }, [
      _vm._v("?????????????????????????????????????????????")
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "desc" }, [
      _vm._v("?????????????????????????????????xs???sm???md???lg???")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "box", attrs: { id: "basicLayout" } }, [
      _c(
        "div",
        { staticClass: "box-content" },
        _vm._l(_vm.list, function(item) {
          return _c(
            "div",
            { staticClass: "layout-row" },
            _vm._l(item, function(it) {
              return _c("div", { class: [it] }, [
                _vm._v(_vm._s(it === "col-offset" ? "" : it))
              ])
            })
          )
        })
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
      _vm._l(_vm.params, function(item) {
        return _c(
          "li",
          { staticClass: "row" },
          _vm._l(item, function(it) {
            return _c("div", {
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
        '\n                <div class="row">\n                    <div class="col-12"></div>\n                    <div class="col-12"></div>\n                </div>\n                <div class="row">\n                    <div class="col-8"></div>\n                    <div class="col-8"></div>\n                    <div class="col-8"></div>\n                </div>\n                <div class="row">\n                    <div class="col-6"></div>\n                    <div class="col-6"></div>\n                    <div class="col-6"></div>\n                    <div class="col-6"></div>\n                </div>\n                <div class="row">\n                    <div class="col-4"></div>\n                    <div class="col-4"></div>\n                    <div class="col-4"></div>\n                    <div class="col-4"></div>\n                    <div class="col-4"></div>\n                    <div class="col-4"></div>\n                </div>\n                <div class="row">\n                    <div class="col-6 col-offset-6"></div>\n                    <div class="col-6 col-offset-6"></div>\n                </div>\n            '
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5efa0bba", esExports)
  }
}

/***/ })

});