webpackHotUpdate("static\\development\\pages\\1970\\go-urban.js",{

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







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\components\\templates\\WebColumn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// There is documentation available on what the blocks and lists mean in the same directory as this file


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
      var type = item.type;

      if (type === 'img') {
        var specClass = 'WC-item_img';
        var specClassCon = 'WC-item_img-con ';

        if (item.adjust) {
          if (item.adjust.width == '2/3') {
            specClass += ' WC-item_img_23';
          }

          if (item.adjust.hide === true) {
            specClassCon += ' WC-item_img-con_hide';
          }
        }

        return __jsx("div", {
          className: specClassCon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, __jsx("img", {
          className: specClass,
          src: "/images/".concat(item.src) // '/images/test.png'
          ,
          alt: item.alt || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      } else if (type === 'para') {
        return __jsx("div", {
          className: "WC-item_para-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx("span", {
          className: "WC-item_para",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, typeof item.text == 'function' ? item.text() : item.title));
      } else if (type === 'content-title') {
        return __jsx("div", {
          className: "WC-item_ct",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (type === 'main-title') {
        return __jsx("div", {
          className: "WC-item_mt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (type === 'main-subtitle') {
        return __jsx("div", {
          className: "WC-item_mst",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, typeof item.title == 'function' ? item.title() : item.title);
      } else if (type === 'quote') {
        return __jsx("div", {
          className: "WC-item_quote-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("span", {
          className: "WC-item_quote",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, typeof item.text == 'function' ? item.text() : item.title));
      } else if (type === 'img3row') {
        return __jsx("div", {
          className: "WC-item_img3row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("div", {
          className: "WC-item_img3row__img1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("img", {
          src: "/images/".concat(item.images[0]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })), __jsx("div", {
          className: "WC-item_img3row__img2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("img", {
          src: "/images/".concat(item.images[1]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        })), __jsx("div", {
          className: "WC-item_img3row__img3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("img", {
          src: "/images/".concat(item.images[2]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })));
      } else if (type === 'column2') {
        return __jsx("div", {
          className: "WC-item_col2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("div", {
          className: "WC-item_col2-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, _this.renderList(item.left)), __jsx("div", {
          className: "WC-item_col2-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, _this.renderList(item.right)));
      } else if (type === 'empty') {
        return __jsx("div", {
          className: "WC-item_empty",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        });
      } else if (type === 'general') {
        return __jsx("div", {
          className: "WC-item_gereal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, item.render());
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderList", function (list) {
      return list.map(function (item, i) {
        return __jsx("div", {
          key: i,
          className: "WC-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, _this.renderItem(item));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderRight", function () {
      var right = _this.props.right || [];
      return _this.renderList(right);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderLeft", function () {
      var left = _this.props.left || [];
      return _this.renderList(left);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCenter", function () {
      var center = _this.props.center || [];
      return _this.renderList(center);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebColumn, [{
    key: "render",
    value: function render() {
      // oneColumn , rightOnly are properties that can be passed through to format how the component is goingt to look like
      var WC = "".concat(this.props.oneColumn ? 'WC-center' : '', " WC ").concat(this.props.rightOnly ? 'WC-rightOnly' : '');

      if (this.props.oneColumn) {
        return __jsx("div", {
          className: WC,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("div", {
          className: "WC-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, this.renderCenter()));
      }

      return __jsx("div", {
        className: WC,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        className: "WC-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.renderLeft()), __jsx("div", {
        className: "WC-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.renderRight()));
    }
  }]);

  return WebColumn;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=go-urban.js.3120f34b6179e2a5cc30.hot-update.js.map