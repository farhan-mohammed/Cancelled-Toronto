webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WebsiteWrapper.js":
/*!**************************************!*\
  !*** ./components/WebsiteWrapper.js ***!
  \**************************************/
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
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header.js */ "./components/Header.js");







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\components\\WebsiteWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



 // NavList contains the list of pages and their repesective propers to be displayed on the header and the side menu

var NavList = [{
  decade: '1970',
  files: [{
    year: '1973',
    name: 'Go-Urban',
    // link: '/'
    link: 'go-urban'
  }]
}, {
  decade: '1980',
  files: [{
    year: '1985',
    name: 'Network 2011',
    // link: '/'
    link: 'network-2011'
  }]
}, {
  decade: '1990',
  files: [// {
  // 	year: '1990',
  // 	name: "Let's Move",
  // 	link: 'lets-move'
  // },
  {
    year: '1993',
    name: 'Rapid Transit Expansion Program',
    // link: '/'
    link: 'rapid-transit-expansion-program'
  }]
}, {
  decade: '2000',
  files: [{
    year: '2007',
    name: 'Transit City',
    // link: '/'
    link: 'transit-city'
  }]
}, {
  decade: '2010',
  files: [{
    year: '2011',
    name: 'Metrolinx / Toronto Transit Plan',
    // link: '/'
    link: 'metrolinx-toronto-transit-plan'
  }, {
    year: '2016',
    name: 'Relief Line',
    // link: '/'
    link: 'relief-line'
  }]
}];

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
        hamburger: !_this.state.hamburger
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderFooter", __jsx("footer", {
      className: "ft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "ft-ptf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "ft-ptf_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      src: "/images/footer/danny.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("div", {
      className: "ft-ptf_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "content researched and written by danny xue"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/danny-xue/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "linkedin.com/in/danny-xue")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("a", {
      href: "mailto:danny.xue@edu.uwaterloo.ca",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "danny.xue@edu.uwaterloo.ca")))), __jsx("div", {
      className: "ft-ptf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("div", {
      className: "ft-ptf_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("img", {
      src: "/images/footer/farhan.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), __jsx("div", {
      className: "ft-ptf_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "site built by farhan mohammed"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("a", {
      href: "https://farhan.site",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "farhan.site")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.linkedin.com/in/farhanmoh/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "linkedin.com/in/farhanmoh")))), __jsx("div", {
      className: "ft-cp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Copyright \xA9 2020 cancelledtoronto.ca. all rights reserved")));

    _this.state = {
      /** Store the state of whether the sidemenu is open or close */
      hamburger: false
    };
    return _this;
  } // Function toggles the Sidemenu whenever called, causing the sidemenu to change from an open -> close or close -> open state


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(mainSite, [{
    key: "render",
    value: function render() {
      var containerWrapper = "container outer-container ".concat(this.state.hamburger ? 'outer-containerOpen' : '');
      return __jsx("div", {
        className: containerWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("meta", {
        property: "og:title",
        content: "Cancelled Toronto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image",
        content: "/images/back.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        href: "/images/thumb.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), __jsx("link", {
        href: "/styles.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), __jsx("script", {
        src: "https://www.w3counter.com/tracker.js?id=130470",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Cancelled Toronto")), __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        NavList: NavList
        /**Passing the power to close and open the Sidemenu */
        ,
        toggleHamburger: this.toggleHamburger
        /** Passing the current state of the sidemenu as well to ensure that the states are consistent througout components */
        ,
        activeHam: this.state.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        NavList: NavList
        /**Passing the power to close and open the Sidemenu */
        ,
        toggleHamburger: this.toggleHamburger
        /** Passing the current state of the sidemenu as well to ensure that the states are consistent througout components */
        ,
        open: this.state.hamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }),
      /** The content for the rest of the site i.e the core of the website goes here*/
      this.props.children,
      /**    Renders the footer with contact and copyright information about the website*/
      this.renderFooter);
    }
  }]);

  return mainSite;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_WebsiteWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/WebsiteWrapper */ "./components/WebsiteWrapper.js");







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var ImageList = [{
  // href: '/',
  href: '/2010/relief-line',
  title: 'Relief Line (2016)',
  subtitle: __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Cancelled, replaced with Ontario Line"),
  img: 'Relief Line.png'
}, {
  // href: '/',
  href: '/2010/metrolinx-toronto-transit-plan',
  title: 'Metrolinx/Toronto Transit Plan (2011)',
  subtitle: 'Cancelled',
  // subtitle: '',
  img: 'Metrolinx-Toronto Transit Plan.png'
}, {
  // href: '/',
  href: '/2000/transit-city',
  title: 'Transit City (2007)',
  subtitle: 'Cancelled, partially under construction',
  img: 'Transit City.png'
}, {
  // href: '/',
  href: '/1990/rapid-transit-expansion-program',
  title: 'Rapid Transit Expansion Program (1993)',
  subtitle: 'Cancelled, partially built',
  // subtitle: '',
  img: 'Rapid Transit Expansion Program.png'
}, // {
// 	// href: '/',
// 	href: '/1990/lets-move',
// 	title: "Let's Move (1990)",
// 	subtitle: 'Cancelled, replaced with Rapid Transit Expansion Program',
// 	img: '/images/Let's-Move.png'
// },
{
  // href: '/',
  href: '/1980/network-2011',
  title: 'Network 2011 (1985)',
  subtitle: "Cancelled, replaced with Let's Move",
  img: 'Network 2011.png'
}, {
  // href: '/',
  href: '/1970/go-urban',
  title: 'Go-Urban (1973)',
  subtitle: 'Cancelled, evolved into go-alrt',
  img: 'GO-Urban.png'
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
        return __jsx("div", {
          key: item.href,
          className: "homepage-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: item.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("a", {
          className: "homepage-item-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx("div", {
          className: "homepage-item__img-con",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("img", {
          className: "homepage-item__img",
          src: "images/homepage/".concat(item.img),
          alt: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })), __jsx("div", {
          className: "homepage-item__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, __jsx("div", {
          className: "homepage-item__text-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, item.title), __jsx("div", {
          className: "homepage-item__text-subtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
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
      return __jsx(_components_WebsiteWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "homepage-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.renderList()));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.594db8978707dc7aa557.hot-update.js.map