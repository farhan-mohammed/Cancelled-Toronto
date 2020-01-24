webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var NavList = [{
  decade: '1980',
  files: [{
    name: 'Network 2011',
    link: '/' // link: 'network-2011'

  }]
}, {
  decade: '1990',
  files: [{
    name: "Let's Move",
    link: 'lets-move'
  }, {
    name: 'Rapid Transit Expansion Program',
    link: '/' // link: 'rapid-transit-expansion-program'

  }]
}, {
  decade: '2000',
  files: [{
    name: 'Transit City',
    link: '/' // link: 'transit-city'

  }]
}, {
  decade: '2010',
  files: [{
    name: 'Metrolinx/Toronto Transit Plan',
    link: '/' // link: 'metrolinx-toronto-transit-plan'

  }, {
    name: 'Relief Line',
    link: '/' // link: 'relief-line'

  }]
}];

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderList", function () {
      return NavList.map(function (_ref) {
        var decade = _ref.decade,
            files = _ref.files;
        return __jsx("li", {
          className: "header-nav_li  hnv-li",
          key: decade,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "".concat(decade, "s")), __jsx("ul", {
          className: " hnv-li-ul",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, files.map(function (_ref2) {
          var name = _ref2.name,
              link = _ref2.link;
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/".concat(decade, "/").concat(link),
            key: link,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("li", {
            className: "hnv-li hnv-li-ul-li",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, name)));
        })));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "header-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        className: "header-top-pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("div", {
        className: "header-pic_wide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        className: "header-pic_widepng",
        src: "/images/header/wide.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), __jsx("div", {
        className: "header-pic_narrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("img", {
        className: "header-pic_narrowpng",
        src: "/images/header/narrow.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))), __jsx("div", {
        className: "header-top-ham",
        onClick: this.props.toggleHamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "Hamburg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "HamBurg1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("div", {
        className: "HamBurg2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx("div", {
        className: "HamBurg3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))), __jsx("nav", {
        className: "header-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("div", {
        className: "header-bar-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Cancelled Projects", __jsx("div", {
        className: "header-bar-starttxt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " of the"), ":"), __jsx("ul", {
        className: "header-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.renderList())));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.62fa950e59320fe52f3d.hot-update.js.map