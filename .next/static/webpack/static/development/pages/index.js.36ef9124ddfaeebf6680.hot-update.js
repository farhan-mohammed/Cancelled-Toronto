webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/wrapper/mainSite */ "./components/wrapper/mainSite.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var ImageList = [{
  href: '/2010/relief-line',
  title: 'Relief Line (2016)',
  subtitle: 'Cancelled, replaced with Ontario Line',
  img: '/images/homepage/image1.png'
}, {
  href: '/2010/metrolinx-toronto-transit-plan',
  title: 'Metrolinx/Toronto Transit Plan (2011)',
  subtitle: 'Cancelled',
  img: 'images/homepage/image2.png'
}, {
  href: '/2000/transit-city',
  title: 'Transit City (2017)',
  subtitle: 'Cancelled, partially under construction',
  img: 'images/homepage/image3.png'
}, {
  href: '/1990/rapid-transit-expansion-program',
  title: 'Rapid Transit Expansion Program (1993)',
  subtitle: 'Cancelled, partially built',
  img: 'images/homepage/image4.png'
}, {
  href: '/1990/lets-move',
  title: "Let's Move (1990)",
  subtitle: 'Cancelled, repalced with Rapid Transit Expansion Program',
  img: 'images/homepage/image5.png'
}, {
  href: '/1980/network-2011',
  title: 'Network 2011 (1985)',
  subtitle: 'Cancelled, replaced with Let`s Move',
  img: 'images/homepage/image6.png'
}];

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderList", function () {
      return ImageList.map(function (item) {
        console.log(item);
        return __jsx("div", {
          className: "homepage-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: item.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("div", {
          className: "homepage-item__img-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("img", {
          className: "homepage-item__img",
          src: item.img,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })), __jsx("div", {
          className: "homepage-item__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("div", {
          className: "homepage-item__text-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, item.title), __jsx("div", {
          className: "homepage-item__text-subtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, item.subtitle)))));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return __jsx(_components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", {
        className: "homepage-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.renderList()));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.36ef9124ddfaeebf6680.hot-update.js.map