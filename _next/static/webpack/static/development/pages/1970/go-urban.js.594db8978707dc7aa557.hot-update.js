webpackHotUpdate("static\\development\\pages\\1970\\go-urban.js",{

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

/***/ "./pages/1970/go-urban.js":
/*!********************************!*\
  !*** ./pages/1970/go-urban.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoUrban; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/templates/WebColumn */ "./components/templates/WebColumn.js");
/* harmony import */ var _components_WebsiteWrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/WebsiteWrapper.js */ "./components/WebsiteWrapper.js");
/* harmony import */ var _components_Footnotes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Footnotes */ "./components/Footnotes.js");





var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\pages\\1970\\go-urban.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var GoUrban =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GoUrban, _Component);

  function GoUrban() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoUrban);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoUrban).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoUrban, [{
    key: "renderView",
    value: function renderView() {
      return __jsx("div", {
        className: "body__img-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("img", {
        src: "/images/GO-Urban/GO-Urban Map.png",
        alt: "",
        className: "body__img",
        style: {
          margin: '10px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }, {
    key: "renderFootnotes",
    value: function renderFootnotes() {
      var footnotes = ["Canada. Ontario. Ministry of Transportation and Communications. Urban Transportation Policy for Ontario \u2013 A Statement by the Honourable William G. Davis Premier of Ontario. Toronto: Queen\u2019s Printer for Ontario, 1972.", "Canada. Ontario. Ministry of Transportation and Communications. Urban Transportation Policy for Ontario \u2013 A Statement by the Honourable William G. Davis Premier of Ontario.", "Ibid.", "Boris Spremo. Expressway fears: The Allen Rd.; above; formerly known as the Spadina Expressway;; was stopped at Eglinton Ave. in the mid-\u201870s after public outcry. Some Metro Politicians say transfortation will be the crucial issue over the next three years because of the rail lands development, 1985, black and white digital, Toronto Star photo archive, Toronto, accessed February 23, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115155F&R=DC-TSPA_0115155F&searchPageType=vrl", "Canada. Ontario. Ministry of Transportation and Communications. Urban Transportation Policy for Ontario \u2013 A Statement by the Honourable William G. Davis Premier of Ontario.", "Ibid.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project. Toronto: Queen\u2019s Printer for Ontario, 1973.", "Ibid.", "Ibid.", "Ibid.", "Ibid.", "Canada. Ontario. Ministry of Transportation and Communications. Urban Transportation Policy for Ontario \u2013 A Statement by the Honourable William G. Davis Premier of Ontario.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "Ibid.", "Ibid.", "Robert, Williamson. \u201CDavis Says Multi-Region Board to Run GO, Buses near Metro.\u201D The Globe and Mail. August 24, 1973, sec. 5.", "Thomas, Coleman. \u201CGermans Back out: Ontario Cancels Plan for Magnetic Trains.\u201D The Globe and Mail. November 14, 1974, page 1.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "Ibid.", "Ibid.", "Ibid.", "Ibid.", "Ibid.", "Ibid.", "Ibid.", "Pat, McNenly. \u201CAirport Plan to Create a City of 150,000.\u201D Toronto Star, March 3, 1973, sec. A1.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "Ibid.", "Thomas, Coleman. \u201CHalf of GO-Urban Plan Won't Be Built Experts Predict.\u201D The Globe and Mail. October 11, 1973, page 47.", "Coleman. \u201CHalf of GO-Urban Plan Won't Be Built Experts Predict.\u201D page 47.", "\u201CTTC: 2 Rails Better for GO-Urban.\u201D Toronto Star, November 27, 1973, sec. A4.", "Thomas, Coleman. \u201CGRO 'Declares War' on Godfrey over Expressway.\u201D The Globe and Mail. September 11, 1973, page 5.", "Thomas, Coleman. \u201CElevated Train System Called 'Flying Coffin' by Skeptical Audience Members in Scarboro.\u201D The Globe and Mail. September 12, 1973, page 1.", "\u201CGO-Urban Stations Will Be Huge, Unsightly in Suburbs, Report Says.\u201D The Globe and Mail. April 22, 1974, page 29.", "Thomas, Coleman. \u201CGroup Accuses Queen's Park of Naivete, Extravagance: GO-Urban Stems from Misjudgment of Metro Transit Needs, Street Car Boosters Say.\u201D The Globe and Mail. November 12, 1973, page 5.", "Canada. Ontario. Ministry of Transportation and Communications. GO-Urban \u2013 A Government of Ontario Project.", "\u201CDelays, Cost Increases Plague GO-Urban Plan.\u201D The Globe and Mail. May 7, 1974, page 5.", "\u201CGO-Urban's Magnet Malfunction Makes Tories Target of Ridicule.\u201D The Globe and Mail. November 8, 1973, page 3; Peter, Mosher. \u201CTrains Won't Be Ready for the CNE: 'Elegance' of GO-Urban Track to Be Sacrificed for $2 Million Saving.\u201D The Globe and Mail. May 22, 1974, page 31.", "\u201CWork behind on GO-Urban, Firm Admits.\u201D The Globe and Mail. May 4, 1974, page 4.", "\u201CWork behind on GO-Urban, Firm Admits.\u201D page 4.", "Thomas, Coleman. \u201CBreakdown at Munich Test Site: Bugs Halt GO-Urban Train, Ontario Visit Off.\u201D The Globe and Mail. October 29, 1974, page 4.", "\u201CGO-Urban's Magnet Malfunction Makes Tories Target of Ridicule.\u201D page 3; Thomas, Coleman. \u201C'Would Be like Fire Blowout': GO-Urban Magnetic Train Having Trouble on Curves.\u201D The Globe and Mail. November 7, 1973, page 1.", "Coleman. \u201CGermans Back out: Ontario Cancels Plan for Magnetic Trains.\u201D page 1.", "Coleman. \u201CGermans Back out: Ontario Cancels Plan for Magnetic Trains.\u201D page 1.", "Ibid.", "Ibid.", "Thomas, Coleman. \u201COntario Revives Old Transit Plan in a Bid to Refurbish Its Image.\u201D The Globe and Mail. January 10, 1975, page 5.", "Coleman. \u201COntario Revives Old Transit Plan.\u201D page 5.", "\u201CCosts of Transit System Have Risen $47 Million.\u201D The Globe and Mail. July 14, 1982, page 4.", "Coleman. \u201COntario Revives Old Transit Plan.\u201D page 5.", "\u201CCosts of Transit System Have Risen $47 Million.\u201D page 4; David Cooper. Spring is coming. Yes; it is; and that is about as soon as you will get a chance to board one of these new Toronto Transit Commission (TTC) Light Rail Vehicles (LRVs). They are four feet longer and seat three more passengers than the old cars. Until spring - maybe longer - they are being tested over every foot of TTC streetcar track in the Metro area, 1979, black and white digital, Toronto Star photo archive, Toronto, accessed February 16, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115612F&R=DC-TSPA_0115612F", "Michael, Moore. \u201C$6 Million Spent on Successor to Magnetic Train as Ontario 'Picks up the Pieces of Krauss-Maffei'.\u201D The Globe and Mail. May 14, 1976, page 1.", "Moore. \u201C$6 Million Spent on Successor to Magnetic Train\u201D page 1.", "Ibid.", "Thomas, Coleman. \u201CGO-Urban Still Alive but End Product Could Change, Official Says.\u201D The Globe and Mail. February 15, 1975, page 1.", "Paul, Palango. \u201CIs Ontario on the Wrong Track?\u201D The Globe and Mail. August 5, 1982, page 7.", "Russwurm, Lani and Nathan Baker. SkyTrain. English ed. ed. Toronto: Historica Canada, 2019.", "Alan Dunlop. Canada - Ontario - Toronto - Transit Commission - Rapid Transit - Scarborough LRT, 1985, colour digital, Toronto Star photo archive, Toronto, accessed February 16, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0115590F&R=DC-TSPA_0115590F"];
      return __jsx(_components_Footnotes__WEBPACK_IMPORTED_MODULE_9__["default"], {
        footnotes: footnotes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "GO-Urban (1973)"), __jsx("meta", {
        property: "og:image",
        content: "/images/GO-Urban/GO-Urban Map.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx("meta", {
        property: "og:title",
        content: "Go-Urban (1973): Cancelled, evolved into go-arlt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'main-title',
          title: 'Go-Urban (1973)'
        }, {
          type: 'main-subtitle',
          title: 'cancelled'
        }, {
          type: 'main-subtitle',
          title: "Evolved into go-alrt"
        }],
        right: [{
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, "GO-Urban was an ambitious plan created by the Province of Ontario towards creating an urban transit network spanning across Metropolitan Toronto and two other large Ontario cities utilising an experimental maglev system powered by linear induction motors. It was projected to fill the niche of intermediate-capacity transit, a gap between low-capacity surface bus routes and high-capacity, high-cost underground subways.");
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            }, "The first major endeavour into large-scale transit planning by the province of Ontario was with the introduction of an urban transportation policy for Ontario in 1972.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, "1"), " The suspension of further work of the Spadina Expressway in 1971 effectively shattered Metropolitan\u2019s Toronto intricate plans for expressways crisscrossing the city, leaving a gap in the transportation needs for the region, with an incomplete expressway network and insufficient public transit options to replace it.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, "2"), " In response, the provincial government\u2019s urban transportation policy outlined several steps in combatting growing congestion in the region including subsidises for transit-related facilities, staggered working hour programs, expansion of computerized traffic control systems, and most notably, the introduction of a new six-line urban intermediate-capacity transit system (ICTS), later dubbed GO-Urban.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }, "3"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Cancelled Expressways'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, "The obstruction of the completion of the Spadina Expressway by the provincial government in the 1970s was the final straw for many of the other proposed expressways meant to span Metropolitan Toronto, creating issues with transportation plans after, which had planned for those expressways to play a crucial role in the transportation needs of the city and region.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            }, "4"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }, "(Boris Spremo / Toronto Star) \xA9 Toronto Star, 1985. Reproduced under license.");
          }
        }],
        right: [{
          type: 'img',
          adjust: {
            hide: true,
            width: '2/3'
          },
          src: 'GO-Urban/Allen Road.jpg',
          alt: 'This is an image of Allen Road, previously the Spadina Expressway, which work was halted after opposition from local residents. This crucial moment was the end of a comprehensive network of highways planned for Toronto in the 1950s to early 1970s'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            }, "The system, planned to fill the gap between low-capacity surface bus routes and costly but high capacity subway lines, was planned to run mostly above-ground along railway and hydro right-of-ways, as well as the median of streets, saving costs from tunnelling.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, "5"), " It was envisioned to carry a maximum of 20,000 passengers per hour in the peak direction at an estimated cost of $13.4 million per mile (or ~$21.5 million per kilometre) compared to $25-40+ million per mile (~$40-$64 million per kilometre) for subways, which could carry a theoretical maximum of 40,000 passengers per hour in the peak direction.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }, "6"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'GO-Urban Along Hydro Right-of-ways'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            }, "A number of GO-Urban lines were planned to utilise hydro right-of-ways in their routing. Here, an artist rendering shows what a conceptual line would look like.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              },
              __self: this
            }, "7"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              },
              __self: this
            }, "\xA9 Queen\u2019s Printer for Ontario, 1973. Reproduced with permission.");
          }
        }],
        right: [{
          type: 'img',
          src: 'GO-Urban/GO-Urban Rendering 1.png',
          alt: 'This image shows the proposed GO-Urban system running elevated in a hydro right-of-way.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            }, "Study began for such a system began in 1969, and by 1972, eight companies were invited to submit proposals for the implementation of ICTS in Ontario.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              },
              __self: this
            }, "8"), ' ', "Three finalists were selected in late 1972, Ford Motors, Hawker-Siddeley, and Krauss-Maffei of West Germany, with the province finally choosing Krauss-Maffei\u2019s magnetically suspended, linear induction motor propelled system.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              },
              __self: this
            }, "9"), " Their proposal planned for small vehicles holding 20 passengers (12 passengers sitting and 8 standing) operating on elevated guideways at planned frequencies of up to 20-second intervals.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 203
              },
              __self: this
            }, "10"), " Operations of the system were extremely flexible, with vehicles able to operate singly or coupled together up to six cars, all controlled by a central control centre. Stations were also to be automated, with platform screen doors and automated ticketing.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              },
              __self: this
            }, "11"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        oneColumn: true,
        center: [{
          type: 'content-title',
          title: 'finalists'
        }, {
          type: 'img3row',
          // /images/ already saved
          images: ['GO-Urban/Krauss-Maffei Prototype.png', 'GO-Urban/Ford Prototype.png', 'GO-Urban/Hawker-Siddeley Prototype.png'],
          alt: 'These images show the prototype vehicles created by each of the finalists in the search for a system that the ICTS program would use.'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              },
              __self: this
            }, "The three finalists chosen all followed the people-mover concept of small vehicles running along guideways. From left, prototypes by Krauss-Maffei, Ford, and Hawker-Siddeley. The Krauss-Maffei system was the only one proposed to utilise magnetic attraction, with the other two companies utilising rubber tires.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 232
              },
              __self: this
            }, "12"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 238
              },
              __self: this
            }, "\xA9 Queen\u2019s Printer for Ontario, 1973. Reproduced with permission.");
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [],
        rightOnly: true,
        right: [{
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249
              },
              __self: this
            }, "A 2.5-mile (4 kilometres) preliminary demonstration system with four stations began construction on the CNE grounds for testing of the system by the newly formed Ontario Transportation Development Corporation, which was tasked with developing future iterations of the system.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              },
              __self: this
            }, "13"), " Construction began on the demonstration line on August 23rd, 1973 and was projected to be completed in time for the 1975 CNE, with a possibility of permanently retaining the line after 1979 and extending it to Union Station.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 256
              },
              __self: this
            }, "14"), " A larger, 56.1-mile (~90 kilometres) system costing an estimated $756 million and with five lines initially was proposed for Metropolitan Toronto, along with a two-line 11.4-mile (~18.3 kilometres) system in Ottawa costing $195 million and a three-line 17.3-mile (~27.8 kilometres) system in Hamilton, although the latter two systems never progressed past the drawing board.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 261
              },
              __self: this
            }, "15"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        oneColumn: true,
        center: [{
          type: 'content-title',
          title: 'cne demonstration track'
        }, {
          type: 'img',
          // /images/ already saved
          src: 'GO-Urban/CNE Demonstration Track Map.png',
          alt: 'This image shows the proposed demonstration track for the GO-Urban system, which started construction late in 1973. There would be four stations, one at Exhibition GO Station/streetcar loop, one at Dufferin Street, one across Ontario Place, and one at Princes Gate. It was overbudget and was ultimately never completed following the cancellation of GO-Urban.'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 283
              },
              __self: this
            }, "The CNE demonstration track would test the real-world applications of the technology for future implementation across Ontario. What began as a four station, 2.5-mile (4 kilometres) line costing $16 million quickly ballooned to over $25 million, with the station at Exhibition GO cut.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 287
              },
              __self: this
            }, "16"), " The line was cancelled when the West German government pulled funding for Krauss-Maffei, which forced them to cancel their agreement with the Ontario government.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 289
              },
              __self: this
            }, "17"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Ontario Place Station'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 301
              },
              __self: this
            }, "The CNE demonstration line would run elevated through the Exhibition grounds. Here, an artist\u2019s rendition of the proposed Ontario Place station at the southern end of the grounds.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 304
              },
              __self: this
            }, "18"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 310
              },
              __self: this
            }, "\xA9 Queen\u2019s Printer for Ontario, 1973. Reproduced with permission.");
          }
        }],
        right: [{
          type: 'img',
          src: 'GO-Urban/Ontario Place Station.png',
          alt: 'This image shows the proposed Ontario Place Station. The station would sit across from the artificial islands which Ontario Place is located on.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318
              },
              __self: this
            }, "Within Metropolitan Toronto, the five routes proposed to be built first would both provide access to the downtown core and enhance east-west access through the city, with several of the routes roughly following the path of cancelled expressways. A sixth line was outlined but would be built at a future date.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 322
              },
              __self: this
            }, "20"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              },
              __self: this
            }, "A Malvern route would connect Union Station in the south-west to the Malvern area in Scarborough in the north-east, following the rail-corridor in the downtown area, then the Don Valley and through the Thorncliffe Park and Flemingdon Park neighbourhoods before utilising the Gatineau hydro corridor to pass through Scarborough.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 334
              },
              __self: this
            }, "21"), " It would connect with the Bloor-Danforth subway at a station envisioned in the Lawrence Avenue East and Kennedy Road area, the proposed Finch route in the north, as well as existing TTC and GO Transit services downtown at Union Station.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 337
              },
              __self: this
            }, "22"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 344
              },
              __self: this
            }, "A Don Mills route would branch off the Malvern route just north of Flemingdon Park to follow Don Mills Road northwards to the vicinity of Finch Avenue and Don Mills Road, where it would connect with the proposed Finch route.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 347
              },
              __self: this
            }, "23"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 354
              },
              __self: this
            }, "A Malton/Islington route would begin at Union Station in the south-east and follow the Weston rail subdivision northwards before turning west near Eglinton Avenue West to connect with the then Malton Airport.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 357
              },
              __self: this
            }, "24"), " This route would roughly follow the cancelled Richview Expressway and proposed southern extension of Highway 400.");
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 366
              },
              __self: this
            }, "A crosstown route would branch from the Malton/Islington route in the east and the Malvern route in the west to follow Eglinton Avenue, providing an east-west connection through the city.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 369
              },
              __self: this
            }, "26"), " It was proposed to be built underground in the urban areas of the route and would connect with the Yonge and then-planned Spadina subway. This route would roughly follow the cancelled Crosstown Expressway.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 371
              },
              __self: this
            }, "27"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 378
              },
              __self: this
            }, "An additional Finch route that was not part of the initial five-line, 56.1-mile plan would branch from the Malton/Islington route near the airport in the west and follow the Finch hydro corridor to the eastern boundary of Metropolitan Toronto, with possible extension to the never-built satellite city of Cedarwood north of Pickering and adjacent to the planned Pickering international airport.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 383
              },
              __self: this
            }, "28"), " It would intersect four of the five initially planned lines and provide east-west access in the quickly urbanising areas in the northern part of Metropolitan Toronto.");
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'GO-Urban Along Street'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 398
              },
              __self: this
            }, "Several of the GO-Urban lines were proposed to run along the streets, either in the median or along the right-of-way. Here, an artist rendering shows what a conceptual line would look like.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 401
              },
              __self: this
            }, "29"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 407
              },
              __self: this
            }, "\xA9 Queen\u2019s Printer for Ontario, 1973. Reproduced with permission.");
          }
        }],
        right: [{
          type: 'img',
          src: 'GO-Urban/GO-Urban Rendering 2.png',
          alt: 'This image shows the proposed GO-Urban system running elevated along a street.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 415
              },
              __self: this
            }, "Beyond implementation of the system in Ontario, the provincial government received the exclusive rights and licenses for the sale and implementation of similar systems in South and Central America and the European Union, as well as a ten percent royalty for systems sold in the United States.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 419
              },
              __self: this
            }, "30"), " Several urban centres in foreign markets were identified as potential markets for the system including Buenos Aires, Caracas, Melbourne, Mexico City, Rio de Janeiro, Sao Paulo, and Sydney.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 421
              },
              __self: this
            }, "31"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 428
              },
              __self: this
            }, "From the beginning of the announcement for the system, transportation planners were pessimistic of the plan, with some predicting that half of the network was infeasible and would not be built.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 431
              },
              __self: this
            }, "32"), " Others were critical of the proposed routing of one line through Flemingdon Park, with planners adamant that an ICTS system would have insufficient capacity for the projected ridership, and that the proposed Queen subway line, which would roughly follow the same route, would be needed instead.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 435
              },
              __self: this
            }, "33"), " Opposition from Metropolitan Toronto and the TTC was also an issue, with TTC planners working on their own ICTS system utilising light rail vehicles, which the province criticised as being noisy and unsuitable for residential areas despite TTC reports saying otherwise.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 438
              },
              __self: this
            }, "34"), " And while Metropolitan Toronto planners continued to plan for an extension of the Gardiner Expressway through Scarborough, the province was adamant that the new system would make the expressway unnecessary.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 441
              },
              __self: this
            }, "35"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Proposed Hamilton and Ottawa GO-Urban Systems'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 453
              },
              __self: this
            }, "Besides Toronto, both potential lines in Hamilton and Ottawa were identified. Similar to the proposed routings for GO-Urban in Toronto, they were to follow streets, railway right-of-ways, and hydro corridors. In Ottawa, there would be a brief tunnel for the system under Sparks Street.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 457
              },
              __self: this
            }, "19"));
          }
        }],
        right: [{
          type: 'img',
          adjust: {
            width: '2/3'
          },
          src: 'GO-Urban/Proposed Hamilton System Map.png',
          alt: 'This image shows the proposed system in Hamilton. Lines would mostly follow right-of-ways of railways and hydro-corridors.'
        }, {
          type: 'img',
          adjust: {
            width: '2/3'
          },
          src: 'GO-Urban/Proposed Ottawa System Map.png',
          alt: 'This image shows the proposed system in Ottawa. Lines would mostly follow right-of-ways of railways and hydro-corridors.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 468
              },
              __self: this
            }, "The public was even less supportive of GO-Urban, with initial reactions to the proposed system largely negative, with Scarborough residents calling the vehicles \u201Cflying coffins\u201D in initial public consultations.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 471
              },
              __self: this
            }, "36"), " Fears of the aesthetic impact of the system were confirmed when internal government reports revealed that GO-Urban stations would be double to triple the length of a subway station, either above ground or elevated, and with a width as wide as an arterial road.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 475
              },
              __self: this
            }, "37"), " Meanwhile, Streetcars for Toronto, a transit advocate group originally formed to promote the retention of streetcars in Toronto highlighted the potential operational, cost, safety, and security issues with the proposed system, arguing that proven conventional light rail technology using streetcars would provide the capacity necessary for an ICTS system without such issues.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 479
              },
              __self: this
            }, "38"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'GO-Urban Along Railway'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 491
              },
              __self: this
            }, "Besides running along streets and hydro right-of-ways, GO-Urban was planned to utilise railway right-of-ways. Here, an artist rendering shows what a conceptual routing would look like.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 494
              },
              __self: this
            }, "39"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 500
              },
              __self: this
            }, "\xA9 Queen\u2019s Printer for Ontario, 1973. Reproduced with permission.");
          }
        }],
        right: [{
          type: 'img',
          src: 'GO-Urban/GO-Urban Rendering 3.png',
          alt: 'This image shows the proposed GO-Urban system running elevated along a railway right-of-way.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 508
              },
              __self: this
            }, "Such issues with the system began soon during the testing stage. Beginning with delays to the demonstration line on the CNE, costs of the line soon rose dramatically from a budgeted $17 million to $25 million.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 511
              },
              __self: this
            }, "40"), " Even after cutting \u201Cfrills\u201D and even one of the four stations from the line, construction was delayed past the 1975 opening date.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 513
              },
              __self: this
            }, "41"), " In West Germany, where development of the technology was taking place, work was delayed as issues towards creating a working prototype continued.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 515
              },
              __self: this
            }, "42"), " A scheduled trip by a provincial delegation was postponed from June 1974 to September 1974.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 516
              },
              __self: this
            }, "43"), " Soon after the September visit, the completed prototype was damaged while testing as bugs continued to plague the system.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 518
              },
              __self: this
            }, "44"), " Then, on November 7th, 1974, it was revealed that the system was incapable of reliably handling curves, cancelling another visit by provincial and municipal officials and dignitaries from Los Angeles and drawing ridicule from opposition parties in the provincial legislature.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 521
              },
              __self: this
            }, "45"), ' ');
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 528
              },
              __self: this
            }, "The final straw came a week later on November 14th, when funding for the development of Krauss-Maffei\u2019s ICTS technology was halted by the West German government.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 530
              },
              __self: this
            }, "46"), ' ', "Krauss-Maffei was forced to withdraw from the GO-Urban project, and with the technology incomplete, GO-Urban was paused.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 532
              },
              __self: this
            }, "47"), " Under the conditions of withdrawal, the Ontario government was allowed to retain exclusive rights to patents and the technology, as well as use of a test track of the system operational in Munich, West Germany for just under two years.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 535
              },
              __self: this
            }, "48"), " The demonstration system under construction was cancelled, with a portion of the $25 million spent on the project to be refunded by Krauss-Maffei, while the rest of the lines planned under GO-Urban were put on hold pending further development of the technology by the province.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 539
              },
              __self: this
            }, "49"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 546
              },
              __self: this
            }, "Although provincial officials maintained that GO-Urban was not cancelled, the lines proposed as part of the project quickly faded into obscurity. One proposed line, the Malvern route, had a segment between the proposed Bloor-Danforth subway extension and Scarborough City Centre quickly replaced with plans for a light rail transit line using streetcars, similar to what was originally proposed by Metropolitan Toronto and the TTC.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 552
              },
              __self: this
            }, "50"), " The line would utilise new light rail vehicles developed by the same government agency tasked with GO-Urban, the Ontario Transportation Development Corporation, and would follow a similar route as what GO-Urban was planned to utilise.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 555
              },
              __self: this
            }, "51"), " Eventually, plans for that line would change as well, with the province pressuring Metropolitan Toronto and the TTC to replace the light rail vehicles planned to be utilised on the line with GO-Urban\u2019s successor \u2013 Urban Transportation Development Corporation\u2019s (previously known as the Ontario Transportation Development Corporation) ICTS.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 559
              },
              __self: this
            }, "52"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Coupled Light Rail Vehicle'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 571
              },
              __self: this
            }, "Light rail vehicles developed by the same Crown corporation tasked with research, development, and promotion of GO-Urban in Ontario were planned to be utilised for routes previously set for GO-Urban technology after its cancellation.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 574
              },
              __self: this
            }, "50"), ' ', "The vehicles, later dubbed the CLRV (Canadian Light Rail Vehicle), were planned to be run in coupled pairs, as pictured, in their own dedicated right-of-ways, although the eventual shift in plans to utilise ICTS technology meant neither ambitious happened.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 578
              },
              __self: this
            }, "53"), " The same vehicles were the workhorse for Toronto\u2019s streetcar fleet for over 40 years before their retirement in late 2019.");
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 586
              },
              __self: this
            }, "(David Cooper / Toronto Star) \xA9 Toronto Star, 1979. Reproduced under license.");
          }
        }],
        right: [{
          type: 'img',
          src: 'GO-Urban/CLRV LRV.jpg',
          alt: 'This image shows two CLRV LRV streetcars coupled together.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 597
              },
              __self: this
            }, "Despite Ontario\u2019s ambitions for ICTS across the province suffering a serious blow-back with the demise of GO-Urban, development for a system of similar purpose continued. Although magnetic levitation was shelved, the linear induction motor technology used to propel GO-Urban vehicles saw further development \u2013 this time with steel wheels to support it.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 602
              },
              __self: this
            }, "54"), " Instead of small vehicles with a capacity of 20 passengers, the successor ICTS vehicle would hold 75 to 100 passengers and would run in trainsets of three to four vehicles.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 604
              },
              __self: this
            }, "55"), " Dubious plans for 20 second frequencies for GO-Urban trains were replaced with possible frequencies to as low as 60 seconds a train.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 606
              },
              __self: this
            }, "56"), " The new system was initially called Advanced Light Guideway Transit \u2013 ALGT, and was developed in partnership with a variety of companies including SPAR Aerospace, which constructed a test track for the successor project and Standard Electric Lorenz, a West German firm which was tasked with developing the automated train control system planned to be utilised.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 610
              },
              __self: this
            }, "57"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 617
              },
              __self: this
            }, "The successor system to GO-Urban was eventually completed and marketed as Urban Transportation Development Corporation\u2019s ICTS and was meant to serve the same principle goals of filling a gap in the need for capacity between surface transit options such as buses and costly underground subways.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 621
              },
              __self: this
            }, "58"), " Initially implemented in Toronto (in a section of the originally proposed GO-Urban route serving Scarborough), Vancouver (where it forms the backbone of their rapid transit system), and Detroit, updated versions of the technology continue to be used and implemented in cities across the world after the sale of Urban Transportation Development Corporation by the provincial government to Lavalin (and eventually to Bombardier).", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 627
              },
              __self: this
            }, "59"));
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'Scarborough Rapid Transit'
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 640
              },
              __self: this
            }, "GO-Urban\u2019s legacy in Toronto today remains in the Scarborough Rapid Transit Line, which utilises both technologies developed from Krauss-Maffei\u2019s initial work on linear induction motors as well as the route planned for GO-Urban through Scarborough.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 644
              },
              __self: this
            }, "60"));
          }
        }, {
          type: 'quote',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 651
              },
              __self: this
            }, "(Alan Dunlop / Toronto Star) \xA9 Toronto Star, 1985. Reproduced under license.");
          }
        }],
        right: [{
          type: 'img',
          adjust: {
            hide: true
          },
          src: 'GO-Urban/McCowan Station.jpg',
          alt: 'This image shows McCowan Station of the Scarborough Rapid Transit Line, a sort of successor station to the GO-Urban system.'
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 662
              },
              __self: this
            }, "The successor system to GO-Urban was eventually completed and marketed as Urban Transportation Development Corporation\u2019s ICTS and was meant to serve the same principle goals of filling a gap in the need for capacity between surface transit options such as buses and costly underground subways.", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 666
              },
              __self: this
            }, "58"), " Initially implemented in Toronto (in a section of the originally proposed GO-Urban route serving Scarborough), Vancouver (where it forms the backbone of their rapid transit system), and Detroit, updated versions of the technology continue to be used and implemented in cities across the world after the sale of Urban Transportation Development Corporation by the provincial government to Lavalin (and eventually to Bombardier).", __jsx("sup", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 672
              },
              __self: this
            }, "59"));
          }
        }, {
          type: 'para',
          text: function text() {
            return __jsx("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 679
              },
              __self: this
            }, "Ultimately, GO-Urban represented forward, if not slightly misguided thinking towards the future of urban transit. Fulfilling the need for an enticing alternative to the automobile through a high-frequency network of rapid transit, the plan was ultimately plagued by issues with the experimental technology utilised \u2013 with critics of the plan pointing out existing technologies such as light rail transit as proven alternatives. Although the province\u2019s persistence in the further development of the technology never resulted in the ambitious network of ICTS lines as originally proposed in GO-Urban (and other ICTS projects such as GO-ALRT), the eventual product for such a system first envisioned by GO-Urban has played a significant role in fulfilling the transit needs of other cities worldwide.");
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }), __jsx(_components_templates_WebColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        left: [{
          type: 'content-title',
          title: 'footnotes'
        }],
        right: [{
          type: 'para',
          text: this.renderFootnotes
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 695
        },
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_WebsiteWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, __jsx("div", {
        className: "body-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706
        },
        __self: this
      }, this.renderView()), this.renderText()));
    }
  }]);

  return GoUrban;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=go-urban.js.594db8978707dc7aa557.hot-update.js.map