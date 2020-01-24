webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/wrapper/mainSite.js":
/*!****************************************!*\
  !*** ./components/wrapper/mainSite.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainSite; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../example */ "./components/example.js");
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Header.js */ "./components/Header.js");





var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\components\\wrapper\\mainSite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var mainSite =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(mainSite, _Component);

  function mainSite(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, mainSite);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(mainSite).call(this, props));
    _this.state = {
      hamburger: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(mainSite, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerWrapper = "container outer-container ".concat(this.state.hamburger ? 'outer-containerOpen' : '');
      return __jsx("div", {
        className: containerWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("link", {
        href: "/styles.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Cancelled Toronto")), __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: this.state.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            hamburger: !_this2.state.hamburger
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "'hahahxd' ", this.state.hamburger.toString(), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx(HamburgerMenu, {
        isOpen: this.state.hamburger,
        width: 18,
        height: 15,
        strokeWidth: 1,
        rotate: 0,
        color: "black",
        borderRadius: 0,
        animationDuration: 0.5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), this.props.children);
    }
  }]);

  return mainSite;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ddb5480741c7e54c96f6.hot-update.js.map