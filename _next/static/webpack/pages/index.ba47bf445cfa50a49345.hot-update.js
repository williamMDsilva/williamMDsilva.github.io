webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/Modal.js */ "./components/modal/Modal.js");
/* harmony import */ var _subpages_ModalAcademicBackground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subpages/ModalAcademicBackground.js */ "./pages/subpages/ModalAcademicBackground.js");
/* harmony import */ var _subpages_ModalProfessionalExperience_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subpages/ModalProfessionalExperience.js */ "./pages/subpages/ModalProfessionalExperience.js");
/* harmony import */ var _subpages_ModalPersonalProject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subpages/ModalPersonalProject.js */ "./pages/subpages/ModalPersonalProject.js");
/* harmony import */ var _subpages_ModalContact_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subpages/ModalContact.js */ "./pages/subpages/ModalContact.js");
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var mapModal = {
  'AcademicBackground': _subpages_ModalAcademicBackground_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  'ProfessionalExperience': _subpages_ModalProfessionalExperience_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  'Skills': ModalSkills,
  'PersonalProject': _subpages_ModalPersonalProject_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  'Contact': _subpages_ModalContact_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};

function ModalSkills(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, "ModalSkills"));
  }

  return;
}

_c = ModalSkills;

function ChoseModal(item, handleClose) {
  return mapModal[item](true, handleClose);
}

_c2 = ChoseModal;
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalState = _useState[0],
      setModalState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      whichModal = _useState2[0],
      setWhichModal = _useState2[1];

  var openModal = function openModal(modal) {
    setWhichModal(modal);
    setModalState(true);
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('AcademicBackground');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Academic Background \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('ProfessionalExperience');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Professional Experience \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Skills');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "Skills \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('PersonalProject');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Personal Projects \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Contact');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Contact \u2192")), __jsx("a", {
    href: "/resume.pdf",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "2020 by William."));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ModalSkills");
$RefreshReg$(_c2, "ChoseModal");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/subpages/ModalContact.js":
/*!****************************************!*\
  !*** ./pages/subpages/ModalContact.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalContact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal/Modal.js */ "./components/modal/Modal.js");
/* harmony import */ var _Subpage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subpage.module.css */ "./pages/subpages/Subpage.module.css");
/* harmony import */ var _Subpage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subpage_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\subpages\\ModalContact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ModalContact(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _Subpage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modal_content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 22
      }
    }, "william.moreirasilva@hotmail.com"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 22
      }
    }, "+55 45 9 9835 - 2261"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 22
      }
    }, "https://www.gitshowcase.com/williammdsilva")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 22
      }
    }, "https://github.com/williammdsilva"))))));
  }

  return;
}
_c = ModalContact;

var _c;

$RefreshReg$(_c, "ModalContact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N1YnBhZ2VzL01vZGFsQ29udGFjdC5qcyJdLCJuYW1lcyI6WyJtYXBNb2RhbCIsIk1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kIiwiTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlIiwiTW9kYWxTa2lsbHMiLCJNb2RhbFBlcnNvbmFsUHJvamVjdCIsIk1vZGFsQ29udGFjdCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIkNob3NlTW9kYWwiLCJpdGVtIiwiSG9tZSIsInVzZVN0YXRlIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJ3aGljaE1vZGFsIiwic2V0V2hpY2hNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aWxlIiwiY29kZSIsImdyaWQiLCJjYXJkIiwiZm9vdGVyIiwiU3R5bGVzIiwibW9kYWxfY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZix3QkFBdUJDLDRFQURSO0FBRWYsNEJBQTJCQyxnRkFGWjtBQUdmLFlBQVdDLFdBSEk7QUFJZixxQkFBb0JDLHlFQUpMO0FBS2YsYUFBWUMsaUVBQVlBO0FBTFQsQ0FBakI7O0FBU0EsU0FBU0YsV0FBVCxDQUFxQkcsSUFBckIsRUFBMkJDLFdBQTNCLEVBQXVDO0FBQ3JDLE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBQUwsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFMLENBREYsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQUwsQ0FGRixDQVBGLENBREYsQ0FERixDQURGO0FBa0JEOztBQUNEO0FBQ0Q7S0F0QnFCeEIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYTQ3YmY0NDVjZmE1MGE0OTM0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanMnXG5cbmltcG9ydCBNb2RhbEFjYWRlbWljQmFja2dyb3VuZCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLmpzJ1xuaW1wb3J0IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZS5qcydcbmltcG9ydCBNb2RhbFBlcnNvbmFsUHJvamVjdCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUGVyc29uYWxQcm9qZWN0LmpzJ1xuaW1wb3J0IE1vZGFsQ29udGFjdCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsQ29udGFjdC5qcydcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1hcE1vZGFsID0ge1xuICAnQWNhZGVtaWNCYWNrZ3JvdW5kJyA6IE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLFxuICAnUHJvZmVzc2lvbmFsRXhwZXJpZW5jZScgOiBNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2UsXG4gICdTa2lsbHMnIDogTW9kYWxTa2lsbHMsXG4gICdQZXJzb25hbFByb2plY3QnIDogTW9kYWxQZXJzb25hbFByb2plY3QsXG4gICdDb250YWN0JyA6IE1vZGFsQ29udGFjdCxcbn1cblxuXG5mdW5jdGlvbiBNb2RhbFNraWxscyhvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2Pk1vZGFsU2tpbGxzPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIENob3NlTW9kYWwoaXRlbSwgaGFuZGxlQ2xvc2Upe1xuICByZXR1cm4gbWFwTW9kYWxbaXRlbV0odHJ1ZSwgaGFuZGxlQ2xvc2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbd2hpY2hNb2RhbCwgc2V0V2hpY2hNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgc2V0V2hpY2hNb2RhbChtb2RhbCk7XG4gICAgc2V0TW9kYWxTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaWxsaWFtIE1vcmVpcmEgZGEgU2l2bGE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21vZGFsU3RhdGUgPyBDaG9zZU1vZGFsKHdoaWNoTW9kYWwsICgpID0+IHtzZXRNb2RhbFN0YXRlKGZhbHNlKX0pIDogbnVsbH1cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2lsbGlhbSBNb3JlaXJhIGRhIFNpbHZhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGlsZX0+RGVzZW52b2x2ZWRvciBGdWxsLVN0YWNrPC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnQWNhZGVtaWNCYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+QWNhZGVtaWMgQmFja2dyb3VuZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+UHJvZmVzc2lvbmFsIEV4cGVyaWVuY2UgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdTa2lsbHMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlNraWxscyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUGVyc29uYWxQcm9qZWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5QZXJzb25hbCBQcm9qZWN0cyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnQ29udGFjdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9Jy9yZXN1bWUucGRmJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlJlc3VtZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDIwMjAgYnkgV2lsbGlhbS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcydcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9TdWJwYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENvbnRhY3Qob3BlbiwgaGFuZGxlQ2xvc2Upe1xyXG4gICAgaWYob3Blbil7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubW9kYWxfY29udGVudH0+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz4rNTUgNDUgOSA5ODM1IC0gMjI2MTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPmh0dHBzOi8vd3d3LmdpdHNob3djYXNlLmNvbS93aWxsaWFtbWRzaWx2YTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPmh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbWRzaWx2YTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=