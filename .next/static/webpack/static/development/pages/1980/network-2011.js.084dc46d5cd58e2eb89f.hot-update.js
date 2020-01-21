webpackHotUpdate("static\\development\\pages\\1980\\network-2011.js",{

/***/ "./pages/1980/network-2011.js":
/*!************************************!*\
  !*** ./pages/1980/network-2011.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Year1980; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-images */ "./node_modules/next-images/index.js");
/* harmony import */ var next_images__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_images__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/wrapper/mainSite */ "./components/wrapper/mainSite.js");







var _jsxFileName = "C:\\Users\\Farhan Mohammed\\Desktop\\Cancelled-Toronto\\pages\\1980\\network-2011.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Year1980 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Year1980, _Component);

  function Year1980(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Year1980);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Year1980).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderButton", function () {
      return __jsx("button", {
        onClick: function onClick() {
          if (_this.state.toggled) {
            _this.setState({
              toggled: false
            });
          } else {
            _this.setState({
              toggled: true
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Click Me to Change!");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderText", function () {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, _this.renderButton(), _this.state.toggled, _this.state.toggled ? _this.renderText1() : _this.renderText2());
    });

    _this.state = {
      toggled: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Year1980, [{
    key: "renderView",
    value: function renderView() {
      return __jsx("div", {
        className: "body__img-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("img", {
        src: "/images/1980.png",
        alt: "",
        className: "body__img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }, {
    key: "renderText1",
    value: function renderText1() {
      return __jsx("div", {
        className: "body__text-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        className: "body__text-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Network 2011"), __jsx("h2", {
        className: "body__text-h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Evolved into Let\u2019s Move (1990)"), __jsx("p", {
        className: "body__text-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Network 2011 was a 1985 plan by the Toronto Transit Commission for transit expansion, named for the target completion date of 2011. The plan focused on three new rapid transit lines: a subway along Sheppard Avenue from Downsview in the west to Scarborough City Centre in the east, a new rapid transit corridor on Eglinton Avenue West composed of express buses linking Mississauga to Eglinton West Station, and a downtown subway between Union Station and Pape Station.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "1"), " Furthermore, an extension of the Spadina line from Wilson Station to the Downsview Area would allow for transfers between the Yonge-University-Spadina line and the future Sheppard subway.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "2"), " All-in-all, the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government and 75 per cent from the provincial government.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "3")), __jsx("p", {
        className: "body__text-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Approved by Metro Toronto Council by 1986, the plan would be implemented in phases, with council deciding on a subway on Sheppard Avenue from Yonge Street to Victoria Park Avenue as the priority, much to the dismay of municipal officials in Etobicoke, York, and Peel Region who wanted rapid transit on Eglinton Avenue first.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "4"), " Officials from the three municipal bodies were further appalled at the plan\u2019s commitment to construct only a busway on Eglinton, rather than a light rail line or a subway, with the plan only specifying that it could be replaced with a subway \u2013 eventually.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "5"), " The plan saw further opposition from surrounding municipal and regional governments including York, Peel, and Durham Regions who sought funding for their transportation plans centred around the then proposed Highway 407, and who saw Network 2011 as competition for such funding.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "6")), __jsx("p", {
        className: "body__text-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Ultimately, difficulties in funding the plan quickly derailed the timelines proposed in the plan. The then-Liberal provincial government \u2013 who was not involved in the development of the Network 2011 plan, baulked at the $75 million a year from the province necessary for a full build-out and decided to conduct a full study of all transit proposals in the province.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "7"), " Completed in May of 1988, the report downgraded funding priority of the Sheppard subway in favour of expanding GO Transit services and extending the Spadina line towards York Region.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "8"), " By then, the cost for completing a Sheppard subway from Yonge Street to Victoria Park Avenue had more than doubled from a 1985 estimate of $500 million to an estimate of $1.1 billion in 1989.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "9"), " Come 1990 \u2013 an election year, the (eventually defeated) Liberals kept the Sheppard subway on life support by supporting the project only if a portion of the project could be paid for through private sector investment and without disrupting funding for their transit plan, dubbed \u201CLet\u2019s Move\u201D.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "10"), ' ', "Also retained was plans for rapid transit on Eglinton in the form of a busway to Peel Region but a downtown subway and a complete Sheppard subway from Downsview to Scarborough City Centre were dropped.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "11")), __jsx("p", {
        className: "body__text-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Although much of what Network 2011 proposed was never built in the timeframes proposed, elements of the plan were highly influential to the plans of subsequent provincial and municipal governments and remain so. Today, plans for a downtown subway continue to be studied while rapid transit on Eglinton has taken the form of light rail, currently under-construction and planned for a 2021 opening."), __jsx("h1", {
        className: "body__text-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Footnotes"), __jsx("ol", {
        className: "footnotes__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Smith, Mitchell. \u201CTTC Urges $2.7 Billion Expansion.\u201D Toronto Star, October 1, 1985, sec. A19."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Smith, Mitchell. \u201CTTC Urges $2.7 Billion Expansion.\u201D Toronto Star, October 1, 1985, sec. A19."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Smith, Michael. \u201CProvince Considering New Subway TTC Says.\u201D Toronto Star, April 5, 1987, sec. A3; Smith, Mitchell. \u201CTTC Urges $2.7 Billion Expansion.\u201D Toronto Star, October 1, 1985, sec. A19."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Smith, Mitchell. \u201CTonks Makes Pitch to Keep Subway Plan Alive for Eglinton.\u201D Toronto Star, June 24, 1986, sec. A6."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Mitchell, Bob. \u201CEglinton Transit Line Gets Top Billing in 2011.\u201D Toronto Star. June 3, 1986, sec. W6."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Foster, Mike. \u201CMetro's the Loser If Network 2011 Put Back on Shelf.\u201D Toronto Star, February 17, 1987, sec. N4."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Smith, Michael. \u201COntario Likely to Derail Sheppard Subway, Officials Fear.\u201D Toronto Star, December 26, 1987, sec. A8."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Howell, Peter. \u201CTTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.\u201D Toronto Star, March 12, 1990, sec. A1."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Howell, Peter. \u201CTTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.\u201D Toronto Star, March 12, 1990, sec. A1."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Byers, Jim. \u201CHuge Transit Expansion Announced for Metro.\u201D Toronto Star, April 5, 1990, sec. A1."), __jsx("li", {
        className: "footnotes__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Byers, Jim. \u201CHuge Transit Expansion Announced for Metro.\u201D Toronto Star, April 5, 1990, sec. A1.")));
    }
  }, {
    key: "renderText2",
    value: function renderText2() {
      function footnotes() {
        return __jsx("ol", {
          className: "footnotes__list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011. Toronto: Toronto Transit Commission, 1985; Mitchell Smith. \u201CTTC Urges $2.7 Billion Expansion.\u201D Toronto Star, October 1, 1985, sec. A19."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, "Smith. \u201CTTC Urges $2.7 Billion Expansion.\u201D sec. A19."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Michael Smith. \u201CProvince Considering New Subway TTC Says.\u201D Toronto Star, April 5, 1987, sec. A3; Smith. \u201CTTC Urges $2.7 Billion Expansion.\u201D sec. A19."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011. Toronto: Toronto Transit Commission, 1985."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, "Ibid."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, "Ibid, 14."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "Ibid, 14."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, "Ibid, 59, A.3."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, "Ibid, 26."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Downtown Rapid Transit Study. Toronto: Toronto Transit Commission, 1985"), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Downtown Rapid Transit Study, 52."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Mitchell Smith. \u201CTonks Makes Pitch to Keep Subway Plan Alive for Eglinton.\u201D Toronto Star, June 24, 1986, sec. A6."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, "Bob Mitchell. \u201CEglinton Transit Line Gets Top Billing in 2011.\u201D Toronto Star. June 3, 1986, sec. W6."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, "Mike Foster. \u201CMetro's the Loser If Network 2011 Put Back on Shelf.\u201D Toronto Star, February 17, 1987, sec. N4."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011, 56."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, "Canada. Ontario. Metropolitan Toronto. Metropolitan Toronto Technical Transportation Planning Committee. Network 2011. 57."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, "Ibid, 58."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, "Ibid, 58."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, "Doug Griffin. Canada \u2013 Ontario \u2013 North York \u2013 Yonge St, 1981, black and white digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107107F&R=DC-TSPA_0107107F"), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Alan Dunlop. Scar Town Centre, 1985, black and white digital, Toronto Star photo archive, Toronto, accessed January 7, 2020, https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMDC-TSPA_0107997F&R=DC-TSPA_0107997F"), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "W R Code. \u201CThe Strength of the Centre: Downtown Offices and Metropolitan Decentralization Policy in Toronto.\u201D Environment and Planning A: Economy and Space 15, no. 10 (1983): 1361. https://doi.org/10.1068/a151361."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, "Code. \u201CThe Strength of the Centre,\u201D 1361-1362."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, "Michael Smith. \u201COntario Likely to Derail Sheppard Subway, Officials Fear.\u201D Toronto Star, December 26, 1987, sec. A8."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, "Peter Howell. \u201CTTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.\u201D Toronto Star, March 12, 1990, sec. A1"), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, "Howell. \u201CTTC Fighting on Two Fronts Province, Toronto Give It Rough Ride.\u201D sec. A1."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "Jim Byers. \u201CHuge Transit Expansion Announced for Metro.\u201D Toronto Star, April 5, 1990, sec. A1."), __jsx("li", {
          className: "footnotes__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, "Byers. \u201CHuge Transit Expansion Announced for Metro.\u201D sec. A1."));
      }

      var breakMark = '';
      return __jsx("div", {
        className: "body__text-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx("h1", {
        className: "body__text-h1 body__text-h11980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Network 2011 (1985)"), __jsx("h2", {
        className: "body__text-h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Cancelled, evolved to Let\u2019s Move (1990)"), __jsx("div", {
        className: "mediumshow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("p", {
        className: "body__text-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, __jsx("div", {
        className: "column2 Sec1980adjust1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Network 2011 was a 1985 plan by the Toronto Transit Com-mission for transit expansion, named for the target completion date of 2011. The plan focused on three new rapid transit lines: a subway along Sheppard Avenue from Downsview in the west to Scarborough City Centre in the east, a new rapid transit corridor on Eglinton Avenue West initially composed of express buses linking Mississauga to Eglinton West Station, and a"), __jsx("div", {
        className: "column2spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "the study were then broken down into three more detailed studies offering further analysis of the ridership and feasibility of each of the corridors: the Sheppard/Finch Rapid Transit Study, the Downtown Rapid Transit Study, and the Eglinton West Rapid Transit Study.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "6"), " The outcomes of these studies and the recommended alignments were combined to create Network 2011, which utilised the findings of the three studies")), __jsx("div", {
        className: "flexrow flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "downtown subway between approximately the intersection of Front Street and Spadina Avenue and Pape Station.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "1"), " Furthermore, an extension of the Spadina line from Wilson Station to the Downsview Area would allow for transfers between the Yonge-University-Spadina line and the future Sheppard subway.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "2"), " All-in-all, the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government and 75 per cent from the provincial government.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "3"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), "Planning for what became of Network 2011"), __jsx("div", {
        className: "blurb RFSpecialblurb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "Network 2011 at its core was a transit plan that was planned to achieve the planning goals of Metro-politan Toronto and their objective of creating multiple central business districts within the city."), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "to recommended alignments were combined to create Network 2011, which utilised the findings of the three studies to recommend suggested phases in constructing the plan according to Metro Toronto planning objectives. The Metro Toronto official plan of the time (Metroplan) called for the creation of a multi-centred urban structure within Metro Toronto, with the development of nodes which would act as major employment and activity centres besides downtown Toronto to encourage decentralisation.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "7"), " As a result, the proposed Sheppard subway, which would")), __jsx("div", {
        className: "column2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "began in 1982, with the release of the Accelerated Rapid Transit Study undertaken by Metro Toronto and the TTC.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "4"), " The report, which studied four corridors for future rapid transit expansion including Eglinton, \u201CCentral Radial\u201D (a route downtown via existing rail corridors), Sheppard, and the Finch hydro corridor, identified potential station, yard, and routing locations, as well as potential costs and impacts on the surrounding community and environment.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "5"), " The findings of"), __jsx("div", {
        className: "column2spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "connect two of the identified nodes, Scarborough City Centre and North York Centre, was identified as the priority of the Network 2011 plan.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "8"), " A downtown subway that would aim to relieve the Yonge subway line would follow, followed by rapid transit on Eglinton West, which Network 2011 recommended to be implemented initially as a partially grade-separated busway that could eventually be upgraded to a subway.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "9"))))), __jsx("div", {
        className: "mediumhide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "Network 2011 was a 1985 plan by the Toronto Transit Com-mission for transit expansion, named for the target completion date of 2011. The plan focused on three new rapid transit lines: a subway along Sheppard Avenue from Downsview in the west to Scarborough City Centre in the east, a new rapid transit corridor on Eglinton Avenue West initially composed of express buses linking Mississauga to Eglinton West Station, and a downtown subway between approximately the intersection of Front Street and Spadina Avenue and Pape Station.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "1"), " Furthermore, an extension of the Spadina line from Wilson Station to the Downsview Area would allow for transfers between the Yonge-University-Spadina line and the future Sheppard subway.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "2"), ' ', "All-in-all, the plan would cost $2.7 billion, 25 per cent paid for by the Metro Toronto government and 75 per cent from the provincial government.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "3")), __jsx("div", {
        className: "blurb x1980Specialblurb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Network 2011 at its core was a transit plan that was planned to achieve the planning goals of Metro-politan Toronto and their objective of creating multiple central business districts within the city."), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Planning for what became of Network 2011 began in 1982, with the release of the Accelerated Rapid Transit Study undertaken by Metro Toronto and the TTC.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "4"), " The report, which studied four corridors for future rapid transit expansion including Eglinton, \u201CCentral Radial\u201D (a route downtown via existing rail corridors), Sheppard, and the Finch hydro corridor, identified potential station, yard, and routing locations, as well as potential costs and impacts on the surrounding community and environment.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, "5"), " The findings of the study were then broken down into three more detailed studies offering further analysis of the ridership and feasibility of each of the corridors: the Sheppard/Finch Rapid Transit Study, the Downtown Rapid Transit Study, and the Eglinton West Rapid Transit Study.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "6"), ' ', "The outcomes of these studies and the recommended alignments were combined to create Network 2011, which utilised the findings of the three studies to recommended alignments were combined to create Network 2011, which utilised the findings of the three studies to recommend suggested phases in constructing the plan according to Metro Toronto planning objectives."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }), "The Metro Toronto official plan of the time (Metroplan) called for the creation of a multi-centred urban structure within Metro Toronto, with the development of nodes which would act as major employment and activity centres besides downtown Toronto to encourage decentralisation.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "7"), " As a result, the proposed Sheppard subway, which would connect two of the identified nodes, Scarborough City Centre and North York Centre, was identified as the priority of the Network 2011 plan.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "8"), " A downtown subway that would aim to relieve the Yonge subway line would follow, followed by rapid transit on Eglinton West, which Network 2011 recommended to be implemented initially as a partially grade-separated busway that could eventually be upgraded to a subway.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "9")))), __jsx("div", {
        className: "body_divide body_divideVL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, __jsx("img", {
        src: '/images/1980B.jpg',
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }), __jsx("div", {
        className: "body__img-p italy",
        style: {
          marginTop: '1em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "The routing of the proposed downtown subway was a key concern of the Downtown Rapid Transit Study, a precursor document of Network 2011. The main concern for the downtown subway was to relieve pressure off the Yonge subway line, which would otherwise exceed design capacity if unbuilt.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "10"), " A variety of routings were considered, including a subway along Bay Street from Bay Station on the Bloor-Danforth line to Union Station on the Yonge line, but the majority of alignments created a \u201CJ\u201D or \u201CU\u201D shape.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, "11"), " In the end, a routing along Pape-Eastern-Railway Corridor-Front was recommended, with the western terminus located at approximately Front Street and Spadina Avenue.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "12"))), __jsx("p", {
        className: "body__text-p column2easy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Approved by Metro Toronto Council by 1986, the plan was to be implemented in phases according to the Network 2011 plan, with council deciding on a subway on Sheppard Avenue from Yonge Street to Victoria Park Avenue as the priority, much to the dismay of municipal officials in Etobicoke, York, and Peel Region who wanted rapid transit on Eglinton Avenue first.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, "13"), " Officials from the three municipal bodies were further appalled at the plan\u2019s commitment to construct only a busway on Eglinton, rather than a light rail line or a subway, with the plan only specifying that it could be replaced with a subway \u2013 eventually.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "14"), " The plan saw further opposition from surrounding municipal and regional governments including York, Peel, and Durham Regions who sought funding for their transportation plans centred around the then proposed Highway 407, and who saw Network 2011 as competition for such funding.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "15")), __jsx("div", {
        className: "imgLefttextRigtBelow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, __jsx("div", {
        className: "imgLefttextRigtBelow-row_top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, __jsx("div", {
        className: "imgLefttextRigtBelow_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, __jsx("img", {
        src: '/images/1980C.jpg',
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      })), __jsx("div", {
        className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "North York Centre", __jsx("span", {
        className: "mediumshow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, ", Left"), ' '), __jsx("p", {
        className: "italy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "The planned Sheppard subway, when fully built, was planned to connect two emerging central business districts, North York Centre and Scarborough City Centre. Pictured to the left is North York Centre, with the intersection and western terminus of the first phase of the subway, Sheppard Avenue and Yonge Street, at the top right.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "20")))), __jsx("div", {
        className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-bottom italy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Rapid transit expansion in the Network 2011 plan was to be phased over a 26-year timeframe, beginning with a Sheppard subway between Yonge Street to Victoria Park Avenue to be constructed between 1989-1994.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "16"), " Then, a downtown subway between Pape Station on the Bloor-Danforth Line in the east to approximately the intersection of Spadina Avenue and Front Street in the west would be constructed in the years of 1994-1999.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, "17"), " Then, between 1999-2004, rapid transit on Eglinton Avenue West would be constructed, initially as a partially grade-separated busway, with the possibility of converting it to a subway later.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "18"), ' ', "Finally, between 2004-2010, the Sheppard subway would be extended on both ends from Yonge Street to Dufferin Street in the west, and from Victoria Park Avenue to Scarborough City Centre in the east.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "19"))), __jsx("div", {
        className: "imgLefttextRigtBelow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, __jsx("div", {
        className: "imgLefttextRigtBelow-row_top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, __jsx("div", {
        className: "imgLefttextRigtBelow_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }, __jsx("img", {
        src: '/images/1980D.jpg',
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      })), __jsx("div", {
        className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, "Scarborough City Centre", __jsx("span", {
        className: "mediumshow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, ", Left"), ' '))), __jsx("div", {
        className: "imgLefttextRigtBelow_text imgLefttextRigtBelow_text-bottom italy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, "Scarborough City Centre, planned eventual terminus of the Sheppard subway and emerging central business district.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, "21"), " Planning in Metro Toronto at the time de-emphasised growth in the downtown, taking action such as restricting office development to protect adjacent communities and reduce the pressure of redevelopment for historic structures within them.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, "22"), ' ', "New central business districts such as Scarborough City Centre were intended to receive the majority of new office developments, something planners hoped would decrease the pressure of large amounts of commuters headed downtown in the peak direction by encouraging reverse commuting.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, "23"))), __jsx("p", {
        className: "body__text-p column2easy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, "Ultimately, difficulties in funding the plan quickly derailed the timelines proposed in the plan. The then-Liberal provincial government \u2013 who was not involved in the development of the Network 2011 plan, baulked at the $75 million a year from the province necessary for a full build-out and decided to conduct a full study of all transit proposals in the province.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "24"), " Completed in May of 1988, the report downgraded funding priority of the Sheppard subway in favour of expanding GO Transit services and extending the Spadina line towards York Region.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "25"), " By then, the cost for completing a Sheppard subway from Yonge Street to Victoria Park Avenue had more than doubled from a 1985 estimate of $500 million to an estimate of $1.1 billion in 1989.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, "26"), " Come 1990 \u2013 an election year, the (eventually defeated) Liberals kept the Sheppard subway on life support by supporting the project only if a portion of the project could be paid for through private sector investment and without disrupting funding for their transit plan, dubbed \u201CLet\u2019s Move\u201D.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, "27"), ' ', "Also retained was plans for rapid transit on Eglinton in the form of a busway to Peel Region but a downtown subway and a complete Sheppard subway from Downsview to Scarborough City Centre were dropped.", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "28"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }), "Although much of what Network 2011 proposed was never built in the timeframes proposed, elements of the plan were highly influential to the plans of subsequent provincial and municipal governments and remain so. The Sheppard subway, a key element of the Network 2011 plan was funded several years later under the Rapid Transit Expansion Program and opened in 2003, ten years after the original proposed opening date of 1993 detailed in Network 2011. Meanwhile today, plans for a downtown subway continue to be studied while rapid transit on Eglinton has taken the form of light rail, currently under-construction and planned for a 2021 opening."), __jsx("h1", {
        className: "body__text-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, "Footnotes"), footnotes());
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_wrapper_mainSite__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, __jsx("div", {
        className: "body-con",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, this.renderView()), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, this.renderText())));
    }
  }]);

  return Year1980;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=network-2011.js.084dc46d5cd58e2eb89f.hot-update.js.map