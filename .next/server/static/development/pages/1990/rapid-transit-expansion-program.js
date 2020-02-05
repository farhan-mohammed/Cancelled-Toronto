module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderList", () => this.props.NavList.map(({
      decade,
      files
    }) => __jsx("li", {
      className: "header-nav_li  hnv-li",
      key: decade,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, `${decade}s`), __jsx("ul", {
      className: " hnv-li-ul",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, files.map(({
      name,
      link
    }) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/${decade}/${link}`,
      key: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("li", {
      className: "hnv-li hnv-li-ul-li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, name))))))));
  }

  render() {
    const activeClass = `HamBurg ${this.props.activeHam ? 'change' : ''}`;
    return __jsx("div", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "header-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "header-top-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "header-pic_narrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("img", {
      className: "header-pic_narrowpng",
      src: "/images/header/narrow.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }))))), __jsx("div", {
      className: "header-top-ham",
      onClick: this.props.toggleHamburger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: activeClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "HamBurgbar1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("div", {
      className: "HamBurgbar2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("div", {
      className: "HamBurgbar3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })))), __jsx("nav", {
      className: "header-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("ul", {
      className: "header-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, this.renderList())));
  }

}

/***/ }),

/***/ "./components/SideMenu.js":
/*!********************************!*\
  !*** ./components/SideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/SideMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SideMenuItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    let childClick = {};

    if (!this.state.clicked) {
      childClick = {
        padding: '0',
        height: '0'
      };
    }

    return __jsx("div", {
      className: "SMI_con",
      onClick: () => this.setState({
        clicked: !this.state.clicked
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "SMI_tcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "SMI_decade",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, `${this.props.item.decade}S`), __jsx("div", {
      className: "SMI_decade",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      className: "sideMenu_iconarrow",
      s: true,
      src: `/images/icons/${this.state.clicked ? 'up' : 'down'}.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }))), __jsx("div", {
      className: "SMI_scon",
      style: childClick,
      onClick: this.props.toggleHamburger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, this.props.item.files.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/${this.props.item.decade}/${item.link}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "SMI_scon-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "SMI_scon-list-year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.year), __jsx("div", {
      className: "SMI_scon-list-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.name)))))));
  }

}

class SideMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const triggeredClass = `sideMenu ${this.props.open ? 'sideMenuOpen' : ''}`;
    return __jsx("div", {
      className: triggeredClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "sideMenu-con",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "sideMenu_row sideMenu_X",
      onClick: this.props.toggleHamburger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      className: "sideMenu_icon",
      src: `/images/icons/x.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), this.props.NavList.map(item => __jsx("div", {
      className: "sideMenu_row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(SideMenuItem, {
      toggleHamburger: this.props.toggleHamburger,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })))));
  }

}

/***/ }),

/***/ "./components/content/TwoColumn.js":
/*!*****************************************!*\
  !*** ./components/content/TwoColumn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/content/TwoColumn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class TwoColumn extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "body__text-p column2easy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, this.props.text());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TwoColumn);

/***/ }),

/***/ "./components/templates/ImgAll.js":
/*!****************************************!*\
  !*** ./components/templates/ImgAll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImgAll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/templates/ImgAll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ImgAll extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "body__img-con",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      src: this.props.img,
      alt: "",
      className: "body__img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/templates/WebColumn.js":
/*!*******************************************!*\
  !*** ./components/templates/WebColumn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebColumn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/templates/WebColumn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class WebColumn extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderItem", item => {
      const boilerplate = {
        stockArray: [{
          type: 'img',
          // /images/ already saved
          src: ''
        }, {
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          })
        }, {
          type: 'quote',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          })
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
          src: `/images/${item.src}`,
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
          className: "WC-item_quote",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, item.text());
      } else if (item.type == 'column2') {
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
        }, item.left.map(son => this.renderItem(son))), __jsx("div", {
          className: "WC-item_col2-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, item.right.map(son => this.renderItem(son))));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderRight", () => {
      return this.props.right.map(item => __jsx("div", {
        className: "WC-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.renderItem(item)));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderLeft", () => {
      return this.props.left.map(item => __jsx("div", {
        className: "WC-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.renderItem(item)));
    });
  }

  render() {
    return __jsx("div", {
      className: "WC",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "WC-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, this.renderLeft()), __jsx("div", {
      className: "WC-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, this.renderRight()));
  }

}

/***/ }),

/***/ "./components/templates/imgTextBelow.js":
/*!**********************************************!*\
  !*** ./components/templates/imgTextBelow.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImgTextBelow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/templates/imgTextBelow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ImgTextBelow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "body_divide body_divideVL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("img", {
      src: this.props.img
      /*'/images/test.png'*/
      ,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("div", {
      className: "body__img-p italy",
      style: {
        marginTop: '1em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.text()));
  }

}

/***/ }),

/***/ "./components/templates/imgTextRightBelow.js":
/*!***************************************************!*\
  !*** ./components/templates/imgTextRightBelow.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImgTextRightBelow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/templates/imgTextRightBelow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class ImgTextRightBelow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "imgLefttextRigtBelow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "imgLefttextRigtBelow-row_top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "imgLefttextRigtBelow_img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("img", {
      src: this.props.img || ''
      /*'/images/test.png'*/
      ,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })), __jsx("div", {
      className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h1", {
      className: "imgLefttextRigtBelow_text-right_h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.title() || ''), __jsx("p", {
      className: "italy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, typeof this.props.text.right === 'function' ? this.props.text.right() : ''))), __jsx("div", {
      className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-bottom italy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, typeof this.props.text.bottom === 'function' ? this.props.text.bottom() : ''));
  }

}

/***/ }),

/***/ "./components/wrapper/mainSite.js":
/*!****************************************!*\
  !*** ./components/wrapper/mainSite.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainSite; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header.js */ "./components/Header.js");

var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/components/wrapper/mainSite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const NavList = [{
  decade: '1980',
  files: [{
    year: '1985',
    name: 'Network 2011',
    // link: '/'
    link: 'network-2011'
  }]
}, {
  decade: '1990',
  files: [{
    year: '1990',
    name: "Let's Move",
    link: 'lets-move'
  }, {
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
class mainSite extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleHamburger", () => {
      this.setState({
        hamburger: !this.state.hamburger
      });
    });

    this.state = {
      hamburger: false
    };
  }

  render() {
    let containerWrapper = `container outer-container ${this.state.hamburger ? 'outer-containerOpen' : ''}`;
    return __jsx("div", {
      className: containerWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: "/images/thumb.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("link", {
      href: "/styles.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Cancelled Toronto")), __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      NavList: NavList,
      toggleHamburger: this.toggleHamburger,
      activeHam: this.state.hamburger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      NavList: NavList,
      toggleHamburger: this.toggleHamburger,
      open: this.state.hamburger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), this.props.children);
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/1990/rapid-transit-expansion-program.js":
/*!*******************************************************!*\
  !*** ./pages/1990/rapid-transit-expansion-program.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RapidTransit; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/wrapper/mainSite */ "./components/wrapper/mainSite.js");
/* harmony import */ var _components_templates_imgTextRightBelow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/templates/imgTextRightBelow */ "./components/templates/imgTextRightBelow.js");
/* harmony import */ var _components_templates_imgTextBelow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/templates/imgTextBelow */ "./components/templates/imgTextBelow.js");
/* harmony import */ var _components_content_TwoColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/content/TwoColumn */ "./components/content/TwoColumn.js");
/* harmony import */ var _components_templates_ImgAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/templates/ImgAll */ "./components/templates/ImgAll.js");
/* harmony import */ var _components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/templates/WebColumn */ "./components/templates/WebColumn.js");

var _jsxFileName = "/home/farhanhm12/repos/Cancelled-Toronto/pages/1990/rapid-transit-expansion-program.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class RapidTransit extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderOldText", () => {
      const breakMark = '';

      const paraOne = () => __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "The 1993 Rapid Transit Expansion Program was the culmination of the NDP provincial government\u2019s study of the previous Liberal government\u2019s Let\u2019s Move transit plan. The highlights for phase one \u2013 a Sheppard subway between Yonge Street and Don Mills Road, a subway on Eglinton Avenue West from Eglinton West Station in the east to a new \u201CYork City Centre\u201D located at Black Creek Drive in the west, and eventually to Pearson Airport, an extended Spadina subway reaching York University, and an extension to the Scarborough rapid transit line.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "1"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), " This first phase of the plan would cost $2.5 billion and create 50,000 jobs, with $1.5 billion from the province, $500 million from Metro Toronto, and $500 million from the private sector.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "2"), " The plan, released at the end of the early 1990s recession, was seen as both a jobs creator and a way to rebuild ridership on the TTC subway system, which had fallen over 15 per cent between 1988 to 1993.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "3"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), "At the core of the NDP\u2019s new plan was many of the same projects found in both the Let\u2019s Move and Network 2011 plans: A Sheppard subway was made a priority in this plan, with provincial funding to match, unlike the previous conditional support for the line under the previous Liberal provincial government.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "4"), " On Eglinton, plans for a busway were upgraded to a subway, pleasing municipal officials in the surrounding area and especially those from the then City of York, where the first phase of the future subway line was to terminate in a new central business district dubbed \u201CYork City Centre\u201D.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "5"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), " Meanwhile, plans for a subway loop connecting the Yonge and Spadina subways were retained but expanded to include proposed stations at York University and with a more northerly alignment on Steeles Avenue rather than through the Finch hydro corridor as originally proposed.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "6"), " Similarly, plans for extensions to the Bloor-Danforth subway and Scarborough rapid transit lines were retained, with an extension to Sherway Gardens on the Bloor-Danforth subway proposed as a second phase of the plan.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "7"), __jsx("div", {
        className: "italy italybold",
        style: {
          padding: '0.5em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "The Rapid Transit Expansion Program put a focus on four projects: An Eglinton West subway, a Sheppard subway, an extension of the Scarborough rapid transit line, and an extension of the Spadina line to York University."));

      const paraTwo = () => __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Investment into these projects by the provincial government, Metro Toronto, and the private sector were to be funnelled through a new crown corporation, the Ontario Transportation Corporation, which with a budget separate from the province\u2019s revenues enabled the provincial government to proceed with projects without directly increasing Ontario\u2019s deficit.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "11"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), " Following the recession, the provincial government\u2019s deficit at the time \u2013 a record $10 billion was worrying for many and a key issue in the following 1995 provincial elections.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "12"), " Likewise, municipal officials in Metro Toronto were concerned with the cost associated with the four subway projects proposed and their effect on municipal finances, which would see cost-cutting on municipal programs to support the 25 per cent municipal funding necessary for the projects.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "13"), " Metro Toronto staff had earlier recommended Metro Toronto council to approve only the Eglinton West subway and Spadina extension to York University, leading to clashes between the province and Toronto municipal officials, with the province threatening to cut their share of funding for other municipal projects if only two of the four projects were approved.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "14"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), "In the end, both the Sheppard and Eglinton West subways were approved while the Spadina and Scarborough rapid transit extensions, with little political support, were left in limbo.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "15"), " A municipal election during the midst of the debate temporarily paused the discussion but both projects were eventually voted against by Metro Toronto council, leading to calls for the province to take control of the TTC.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "16"), " Several proposals reportedly investigated by the province included transferring ownership, planning, and day-to-day operation of the subways to GO Transit, leaving the TTC to run only streetcars and buses, taking over just the remaining two projects and funding them through provincial funds only, or taking control of the TTC completely.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "17"));

      return __jsx("div", {
        className: "body__text-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("h1", {
        className: "body__text-h1 body__text-h11980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Rapid Transit Expansion Program (1993)"), __jsx("h2", {
        className: "body__text-h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Cancelled in 1995, partially built"), __jsx(_components_content_TwoColumn__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: paraOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), __jsx(_components_templates_imgTextBelow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "/images/RTEPA.jpg",
        text: () => __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "The environmental assessment of the Eglinton West subway identified four new stations and an interchange with the existing Spadina line at Eglinton West station, which was planned to be renamed Allen Station. The Terminus would be located adjacent to a new central business district, dubbed York City Centre. That project died shortly afterwards the Eglinton West subway was cancelled in 1995.", __jsx("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, "8")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), __jsx(_components_templates_imgTextBelow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: "/images/RTEPB.jpg",
        text: () => __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "The environmental assessment of the Sheppard subway identified four new stations and an interchange with the existing Yonge lines at Sheppard Station, which was eventually renamed Sheppard-Yonge Station. That project was eventually completed in 2002.", __jsx("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, "9")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), __jsx(_components_templates_imgTextRightBelow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: "/images/RTEPC.jpg",
        title: () => __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "North York Centre", __jsx("span", {
          className: "mediumshow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, ", Left"), ' '),
        text: {
          right: () => __jsx("p", {
            className: "italy",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, "The Sheppard subway was crucial to the then-city of North York and Metropolitan Toronto\u2019s plan to build a downtown centered along Yonge Street. Road capacity in the area was already strained, and a subway was necessary to ensure development could continue without straining the transportation infrastructure in the area.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            },
            __self: this
          }, "10")),
          bottom: () => __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, "Rapid transit expansion in the Network 2011 plan was to be phased over a 26-year timeframe, beginning with a Sheppard subway between Yonge Street to Victoria Park Avenue to be constructed between 1989-1994.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, "16"), " Then, a downtown subway between Pape Station on the Bloor-Danforth Line in the east to approximately the intersection of Spadina Avenue and Front Street in the west would be constructed in the years of 1994-1999.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, "17"), " Then, between 1999-2004, rapid transit on Eglinton Avenue West would be constructed, initially as a partially grade-separated busway, with the possibility of converting it to a subway later.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, "18"), " Finally, between 2004-2010, the Sheppard subway would be extended on both ends from Yonge Street to Dufferin Street in the west, and from Victoria Park Avenue to Scarborough City Centre in the east.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, "19"))
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx(_components_content_TwoColumn__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: paraTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), __jsx(_components_templates_imgTextBelow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        img: '/images/RTEPD.jpg',
        text: () => __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, "The environmental assessment of the Scarborough rapid transit line extension identified four new station locations approximately following the route of Highland Creek.", __jsx("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "18"), ' ', "Three stops would be initially built at the intersection of Progress Avenue and Markham Road, the intersection of Milner Avenue and Progress Avenue, and at approximately the intersection of Sheppard Avenue and Markham Road. A station would be built in the future on Bellamy Station adjacent to Highland Creek. Metro Toronto council was unsupportive of the project."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), __jsx(_components_templates_imgTextBelow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: "/images/RTEPE.jpg",
        text: () => __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, "The environmental assessment of the Spadina subway extension to York University proposed three new stations following an entirely new alignment compared to the Let\u2019s Move extension plan.", __jsx("sup", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, "19"), " Stations were proposed at the C.N.R. subdivision at Finch Avenue West, near the intersection of Finch Avenue West and Kelle Street, and a station terminating at York University. Council was unsupportive of this plan, and it was later cancelled. An extension of the Spadina subway with a slightly different alignment was completed in 2017."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), __jsx("div", {
        className: "column2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: '1.75'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("img", {
        src: "/images/RTEPF.jpg",
        style: {
          width: '80%',
          margin: '0 auto',
          display: 'block'
        },
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "Sheppard Subway Under Construction, Above"), __jsx("div", {
        className: "italy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "The Sheppard subway was the only project spared cancellation by the Progressive Conservative provincial government, which deferred the other projects. Here, construction on the Sheppard subway progresses at the intersection of Sheppard Avenue and Leslie Street in 1998.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "24"))), __jsx("div", {
        className: "column2spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Ultimately, none of the proposals were enacted and by 1994, environmental assessments on the Eglinton West, Sheppard, Scarborough RT extension, and Spadina loop projects had been completed, with construction starting on the former two projects by late summer of 1994.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "20"), " By early 1995, excavation had already progressed for tail tracks on the Eglinton West subway and procurement of tunnel boring machines had been underway for the Sheppard subway, then projected to begin tunnelling in mid-1996.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "21"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), " However, the election of a new Progressive Conservative provincial government running under an austerity platform quickly put an end to three of the four projects, with the Eglinton West subway deferred after their election in June of 1995, funding cut for the Scarborough RT and Spadina extensions, leaving only the Sheppard subway left untouched.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "22"), ' ', "Construction was halted on the Eglinton West subway and work to revert the street was quickly undertaken.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "23"), " The poor financial status of both the province and Metro Toronto (later reorganized as the City of Toronto by the provincial government) kept the three unbuilt projects deferred for more than a decade before similar plans were explored by later provincial and municipal governments.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), " The Rapid Transit Expansion Program was a crucial point in transit planning for Toronto at its time. Not only did it refine and build upon plans studied for almost a decade, beginning with Network 2011, but it also provided the necessary funding for construction. Although never fully realized, the basis of the planning undertaken through this plan formed the first major extension to the TTC subway system for over two decades, with the Sheppard subway between Yonge Street and Don Mills Road opening in 2003. Meanwhile, key elements of the plan including a subway on Eglinton Avenue West and extensions to the Spadina line to York University have been revisited by later governments, with the Eglinton Crosstown LRT opening in 2021 to have a similar routing and station placement as the planned Eglinton West subway, while an extension of the Spadina line with stops at York University opening in 2017.")), __jsx("h1", {
        className: "body__text-h1 footnotes-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Footnotes"), this.footnotes());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderText", () => {
      return __jsx("div", {
        className: "body__text-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'main-title',
          title: 'Rapid Transit Expansion Program (1993)'
        }, {
          type: 'main-subtitle',
          title: 'Cancelled in 1995, partially built'
        }],
        right: [{
          type: 'quote',
          text: () => __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }, "The Rapid Transit Expansion Program put a focus on four projects: An Eglinton West subway, a Sheppard Subway, an extenstion of the Scarborough Rapid Transit Line, and an expansion of the Spadina line to York University")
        }, {
          type: 'para',
          text: () => __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 340
            },
            __self: this
          }, "The 1993 Rapid Transit Expansion Program was the culmination of the NDP provincial government\u2019s study of the previous Liberal government\u2019s Let\u2019s Move transit plan. The highlights for phase one \u2013 a Sheppard subway between Yonge Street and Don Mills Road, a subway on Eglinton Avenue West from Eglinton West Station in the east to a new \u201CYork City Centre\u201D located at Black Creek Drive in the west, and eventually to Pearson Airport, an extended Spadina subway reaching York University, and an extension to the Scarborough rapid transit line.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 347
            },
            __self: this
          }, "1"))
        }, {
          type: 'para',
          text: () => __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 354
            },
            __self: this
          }, "This first phase of the plan would cost $2.5 billion and create 50,000 jobs, with $1.5 billion from the province, $500 million from Metro Toronto, and $500 million from the private sector.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 358
            },
            __self: this
          }, "2"), " The plan, released at the end of the early 1990s recession, was seen as both a jobs creator and a way to rebuild ridership on the TTC subway system, which had fallen over 15 per cent between 1988 to 1993.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            },
            __self: this
          }, "3"))
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'North York Centre'
        }, {
          type: 'quote',
          text: () => __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            },
            __self: this
          }, "The Sheppard subway was crucial to the then-city of North York and Metropolitan Toronto\u2019s plan to build a downtown centered along Yonge Street. Road capacity in the area was already strained, and a subway was necessary to ensure development could continue without straining the transportation infrastructure in the area.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            },
            __self: this
          }, "10"))
        }],
        right: [{
          type: 'img',
          // /images/ already saved
          src: 'RTEPC.jpg'
        }, {
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, "The Sheppard subway was crucial to the then-city of North York and Metropolitan Toronto\u2019s plan to build a downtown centered along Yonge Street. Road capacity in the area was already strained, and a subway was necessary to ensure development could continue without straining the transportation infrastructure in the area.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 399
            },
            __self: this
          }, "10"))
        }, {
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406
            },
            __self: this
          }, "Rapid transit expansion in the Network 2011 plan was to be phased over a 26-year timeframe, beginning with a Sheppard subway between Yonge Street to Victoria Park Avenue to be constructed between 1989-1994.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }, "16"), " Then, a downtown subway between Pape Station on the Bloor-Danforth Line in the east to approximately the intersection of Spadina Avenue and Front Street in the west would be constructed in the years of 1994-1999.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412
            },
            __self: this
          }, "17"), " Then, between 1999-2004, rapid transit on Eglinton Avenue West would be constructed, initially as a partially grade-separated busway, with the possibility of converting it to a subway later.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 414
            },
            __self: this
          }, "18"), ' ', "Finally, between 2004-2010, the Sheppard subway would be extended on both ends from Yonge Street to Dufferin Street in the west, and from Victoria Park Avenue to Scarborough City Centre in the east.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 418
            },
            __self: this
          }, "19"))
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Eglinton west'
        }, {
          type: 'quote',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 433
            },
            __self: this
          }, "The environmental assessment of the Eglinton West subway identified four new stations and an interchange with the existing Spadina line at Eglinton West station, which was planned to be renamed Allen Station. The Terminus would be located adjacent to a new central business district, dubbed York City Centre. That project died shortly afterwards the Eglinton West subway was cancelled in 1995.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 438
            },
            __self: this
          }, "8"))
        }],
        right: [{
          type: 'img',
          // /images/ already saved
          src: 'RTEPA.jpg'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Sheppard'
        }, {
          type: 'quote',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 460
            },
            __self: this
          }, "The environmental assessment of the Sheppard subway identified four new stations and an interchange with the existing Yonge lines at Sheppard Station, which was eventually renamed Sheppard-Yonge Station. That project was eventually completed in 2002.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 464
            },
            __self: this
          }, "9"))
        }],
        right: [{
          type: 'img',
          // /images/ already saved
          src: 'RTEPB.jpg'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Younge-spadina loop'
        }, {
          type: 'quote',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 486
            },
            __self: this
          }, "The environmental assessment of the Spadina subway extension to York University proposed three new stations following an entirely new alignment compared to the Let\u2019s Move extension plan.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 490
            },
            __self: this
          }, "19"), " Stations were proposed at the C.N.R. subdivision at Finch Avenue West, near the intersection of Finch Avenue West and Kelle Street, and a station terminating at York University. Council was unsupportive of this plan, and it was later cancelled. An extension of the Spadina subway with a slightly different alignment was completed in 2017.")
        }],
        right: [{
          type: 'img',
          // /images/ already saved
          src: 'RTEPE.jpg'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [],
        right: [{
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 513
            },
            __self: this
          }, "Investment into these projects by the provincial government, Metro Toronto, and the private sector were to be funnelled through a new crown corporation, the Ontario Transportation Corporation, which with a budget separate from the province\u2019s revenues enabled the provincial government to proceed with projects without directly increasing Ontario\u2019s deficit.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518
            },
            __self: this
          }, "11"))
        }, {
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 525
            },
            __self: this
          }, "Following the recession, the provincial government\u2019s deficit at the time \u2013 a record $10 billion was worrying for many and a key issue in the following 1995 provincial elections.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528
            },
            __self: this
          }, "12"), " Likewise, municipal officials in Metro Toronto were concerned with the cost associated with the four subway projects proposed and their effect on municipal finances, which would see cost-cutting on municipal programs to support the 25 per cent municipal funding necessary for the projects.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 531
            },
            __self: this
          }, "13"), ' ', "Metro Toronto staff had earlier recommended Metro Toronto council to approve only the Eglinton West subway and Spadina extension to York University, leading to clashes between the province and Toronto municipal officials, with the province threatening to cut their share of funding for other municipal projects if only two of the four projects were approved.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 536
            },
            __self: this
          }, "14"))
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Sheppard subway under construction'
        }, {
          type: 'quote',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 551
            },
            __self: this
          }, "The Sheppard subway was the only project spared cancellation by the Progressive Conservative provincial government, which deferred the other projects. Here, construction on the Sheppard subway progresses at the intersection of Sheppard Avenue and Leslie Street in 1998.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 556
            },
            __self: this
          }, "24"))
        }],
        right: [{
          type: 'column2',
          right: [{
            type: 'para',
            text: () => __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 568
              },
              __self: this
            }, "Ultimately, none of the proposals were enacted and by 1994, environmental assessments on the Eglinton West, Sheppard, Scarborough RT extension, and Spadina loop projects had been completed, with construction starting on the former two projects by late summer of 1994.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 572
              },
              __self: this
            }, "20"), " By early 1995, excavation had already progressed for tail tracks on the Eglinton West subway and procurement of tunnel boring machines had been underway for the Sheppard subway, then projected to begin tunnelling in mid-1996.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 576
              },
              __self: this
            }, "21"))
          }],
          left: [{
            type: 'img',
            // /images/ already saved
            src: 'RTEPF.jpg'
          }]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [],
        right: [{
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 596
            },
            __self: this
          }, "However, the election of a new Progressive Conservative provincial government running under an austerity platform quickly put an end to three of the four projects, with the Eglinton West subway deferred after their election in June of 1995, funding cut for the Scarborough RT and Spadina extensions, leaving only the Sheppard subway left untouched.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 599
            },
            __self: this
          }, "22"), ' ', "Construction was halted on the Eglinton West subway and work to revert the street was quickly undertaken.", __jsx("sup", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 601
            },
            __self: this
          }, "23"), " The poor financial status of both the province and Metro Toronto (later reorganized as the City of Toronto by the provincial government) kept the three unbuilt projects deferred for more than a decade before similar plans were explored by later provincial and municipal governments.")
        }, {
          type: 'para',
          text: () => __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 608
            },
            __self: this
          }, "The Rapid Transit Expansion Program was a crucial point in transit planning for Toronto at its time. Not only did it refine and build upon plans studied for almost a decade, beginning with Network 2011, but it also provided the necessary funding for construction. Although never fully realized, the basis of the planning undertaken through this plan formed the first major extension to the TTC subway system for over two decades, with the Sheppard subway between Yonge Street and Don Mills Road opening in 2003. Meanwhile, key elements of the plan including a subway on Eglinton Avenue West and extensions to the Spadina line to York University have been revisited by later governments, with the Eglinton Crosstown LRT opening in 2021 to have a similar routing and station placement as the planned Eglinton West subway, while an extension of the Spadina line with stops at York University opening in 2017.")
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }), __jsx("h1", {
        className: "body__text-h1 footnotes-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }, "Footnotes"), this.footnotes());
    });
  }

  renderView() {
    return __jsx(_components_templates_ImgAll__WEBPACK_IMPORTED_MODULE_6__["default"], {
      img: "/images/RTEP.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }

  footnotes() {
    return __jsx("ol", {
      className: "footnotes__list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Nicolaas Van Rijn and Royson James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D Toronto Star, February 9, 1993, sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "James Royson. \u201CAttention, Subway Patrons: The TTC Needs More of You.\u201D Toronto Star, December 4, 1993, sec. A1; Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Jim Byers. \u201CHuge Transit Expansion Announced for Metro.\u201D Toronto Star, April 5, 1990, sec. A1; Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "David Lewis Stein. \u201CAfter $45 Million Is That All There Is?\u201D Toronto Star, February 5, 1993, sec. A27."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Toronto Transit Commission. \u201CToronto Rapid Transit Expansion Program.\u201D Tunnelling and Underground Space Technology 10, no. 1 (1995): 53\u201363. https://doi.org/10.1016/0886-7798(95)90002-0."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Toronto Transit Commission. \u201CToronto Rapid Transit Expansion Program.\u201D 53\u201363."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Alan Dunlop. Two proposals: The photo at left shows Yonge St. looking south; intersecting with Sheppard Ave. (at cluster of high-rises); where Mel Lastman wants the proposed subway to run. Others want the line further north; at Finch Ave.; near the Xerox building (partially out of the picture above). That line would parallel the hydro right of way (to the right of where the helicopter is circling), 1990, black and white digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0106979F&R=DC-TSPA_0106979F"), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Rijn and James. \u201CRae Okays New Lines for Subway 'Grand Slam'.\u201D sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "David Lewis Stein. \u201CMetro Taxpayers Being Taken for a Ride.\u201D Toronto Star, February 21, 1993, sec. B1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Stein. \u201CMetro Taxpayers Being Taken for a Ride.\u201D sec. B1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "James Royson. \u201CDeciding Which Train to Take Metro Council Has to Vote on Subway Expansion. Everyone has a Favorite.\u201D Toronto Star, March 8, 1994, sec. A15."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "James Royson. \u201CMetro Has Final Say on 2 Lines, NDP Says.\u201D Toronto Star, October 5, 1994, sec. A6."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Gail Swainson. \u201CTransit Lines Halted After Two Days of Debate, Plan Defeated 18-12.\u201D Toronto Star, February 24, 1995, sec. A1."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Bruce Campion-Smith. \u201CHow Province Could Take over the TTC But Potential Political Pitfalls in Store Should Queen's Park Override Metro.\u201D Toronto Star, February 25, 1995, sec. A2."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Toronto Transit Commission. \u201CToronto Rapid Transit Expansion Program.\u201D 53\u201363."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Toronto Transit Commission. \u201CToronto Rapid Transit Expansion Program.\u201D 53\u201363."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Bruce Campion-Smith. \u201CEglinton Subway Project under Way $740 Million Line Will Create Thousands of Jobs, Rae Pledges.\u201D Toronto Star, August 26, 1994, sec. A9; James, Royson. \u201CTTC Backs New Transit Lines 1925 Million to Lay Groundwork for 1994 Start.\u201D Toronto Star, February 17, 1993, sec. A6; James, Royson. \u201CWork Begins on Sheppard Subway Line Metro, Province in Fight over Two Other Lines.\u201D Toronto Star, June 23, 1994, sec. A10."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Bruce Campion-Smith. \u201CTories Derail Eglinton Subway But $945 Million Sheppard Line Gets Go-Ahead.\u201D Toronto Star, July 22, 1995, sec. A4."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Campion-Smith. \u201CTories Derail Eglinton Subway.\u201D sec. A4."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Ibid."), __jsx("li", {
      className: "footnotes__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Boris Spremo. Canada \u2013 Ontario \u2013 Toronto \u2013 Transit Commission - Subways - Sheppard Subway, 1998, colour digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115683F&R=DC-TSPA_0115683F"));
  }

  render() {
    return __jsx(_components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629
      },
      __self: this
    }, __jsx("div", {
      className: "body-con",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
      },
      __self: this
    }, this.renderView()), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }, this.renderText())));
  }

}

/***/ }),

/***/ 5:
/*!*************************************************************!*\
  !*** multi ./pages/1990/rapid-transit-expansion-program.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/farhanhm12/repos/Cancelled-Toronto/pages/1990/rapid-transit-expansion-program.js */"./pages/1990/rapid-transit-expansion-program.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=rapid-transit-expansion-program.js.map