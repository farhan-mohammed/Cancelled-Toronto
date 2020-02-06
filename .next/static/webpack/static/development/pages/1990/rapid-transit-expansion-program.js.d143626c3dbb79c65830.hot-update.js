webpackHotUpdate("static/development/pages/1990/rapid-transit-expansion-program.js",{

/***/ "./components/templates/WebColumn.js":
/*!*******************************************!*\
  !*** ./components/templates/WebColumn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebColumn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/templates/WebColumn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var WebColumn =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WebColumn, _Component);

  function WebColumn() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebColumn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WebColumn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderItem", function (item) {
      var boilerplate = {
        stockArray: [{
          type: 'img',
          // /images/ already saved
          src: ''
        }, {
          type: 'para',
          text: function text() {
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            });
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            });
          }
        }, // Titles text can be function or strings
        {
          type: 'content-title',
          title: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        }, {
          type: 'main-title',
          title: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, "can be function or title")
        }, {
          type: 'main-subtitle',
          title: __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, "can be function or title")
        }, {
          type: 'column2',
          right: [],
          left: []
        }]
      }; // Wide image

      if (item.type == 'img') {
        return __jsx("div", {
          className: "WC-item_img-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("img", {
          className: "WC-item_img",
          src: "/images/".concat(item.src),
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      } else if (item.type == 'para') {
        return __jsx("div", {
          className: "WC-item_para-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("p", {
          className: "WC-item_para",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, item.text()));
      } else if (item.type == 'content-title') {
        return __jsx("div", {
          className: "WC-item_ct",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (item.type == 'main-title') {
        return __jsx("div", {
          className: "WC-item_mt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (item.type == 'main-subtitle') {
        return __jsx("div", {
          className: "WC-item_mst",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (item.type == 'quote') {
        return __jsx("div", {
          className: "WC-item_quote-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("p", {
          className: "WC-item_quote",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, item.text()));
      } else if (item.type == 'column2') {
        return __jsx("div", {
          className: "WC-item_col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("div", {
          className: "WC-item_col2-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, item.left.map(function (son) {
          return _this.renderItem(son);
        })), __jsx("div", {
          className: "WC-item_col2-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, item.right.map(function (son) {
          return _this.renderItem(son);
        })));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderRight", function () {
      return _this.props.right.map(function (item) {
        return __jsx("div", {
          className: "WC-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, _this.renderItem(item));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderLeft", function () {
      return _this.props.left.map(function (item) {
        return __jsx("div", {
          className: "WC-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, _this.renderItem(item));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebColumn, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "WC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "WC-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.renderLeft()), __jsx("div", {
        className: "WC-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.renderRight()));
    }
  }]);

  return WebColumn;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=rapid-transit-expansion-program.js.d143626c3dbb79c65830.hot-update.js.map