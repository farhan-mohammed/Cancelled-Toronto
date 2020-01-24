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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Header.js */ "./components/Header.js");







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\components\\wrapper\\mainSite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var mainSite =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(mainSite, _Component);

  function mainSite(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, mainSite);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(mainSite).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleHamburger", function () {
      _this.setState({
        hamburger: !_this.state.hamburger,
        pooped: false
      });
    });

    _this.state = {
      hamburger: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(mainSite, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var trigger = this.state.hamburger && this.pooped ? 'outer-containerOpen' : '';
      var containerWrapper = "container outer-container ".concat(trigger);
      return __jsx("div", {
        className: containerWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("link", {
        href: "/styles.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Cancelled Toronto")), __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        toggleHamburger: this.toggleHamburger,
        activeHam: this.state.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        toggleHamburger: this.toggleHamburger,
        open: this.state.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            pooped: !_this2.setState.pooped
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Hi Danny, Click me to change the hamburger style"), this.props.children);
    }
  }]);

  return mainSite;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4296964616674d7b47ab.hot-update.js.map