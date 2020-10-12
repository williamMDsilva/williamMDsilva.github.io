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
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var mapModal = {
  'AcademicBackground': _subpages_ModalAcademicBackground_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  'ProfessionalExperience': _subpages_ModalProfessionalExperience_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  'Skills': ModalSkills,
  'PersonalProject': _subpages_ModalPersonalProject_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  'Contact': ModalContact
};

function ModalContact(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, "Contact"));
  }

  return;
}

_c = ModalContact;

function ModalSkills(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, "ModalSkills"));
  }

  return;
}

_c2 = ModalSkills;

function ChoseModal(item, handleClose) {
  return mapModal[item](true, handleClose);
}

_c3 = ChoseModal;
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
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Contact \u2192")), __jsx("a", {
    href: "/resume.pdf",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "2020 by William."));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ModalContact");
$RefreshReg$(_c2, "ModalSkills");
$RefreshReg$(_c3, "ChoseModal");
$RefreshReg$(_c4, "Home");

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

/***/ "./pages/subpages/ModalPersonalProject.js":
/*!************************************************!*\
  !*** ./pages/subpages/ModalPersonalProject.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalPersonalProject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal/Modal.js */ "./components/modal/Modal.js");
/* harmony import */ var _Subpage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subpage.module.css */ "./pages/subpages/Subpage.module.css");
/* harmony import */ var _Subpage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subpage_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\subpages\\ModalPersonalProject.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ModalPersonalProject(open, handleClose) {
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
    }, "Sonata - schedule for violinists")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://play.google.com/store/apps/details?id=com.toque.violino.facil.sonata",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 19
      }
    }, "Ver no Google play")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "Technologies: JAVA, SQL, JQUERY, JS, HTML, CSS, REACT, REACT NATIVE GIT, SVN and SQL")))));
  }

  return;
}
_c = ModalPersonalProject;

var _c;

$RefreshReg$(_c, "ModalPersonalProject");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N1YnBhZ2VzL01vZGFsUGVyc29uYWxQcm9qZWN0LmpzIl0sIm5hbWVzIjpbIm1hcE1vZGFsIiwiTW9kYWxBY2FkZW1pY0JhY2tncm91bmQiLCJNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2UiLCJNb2RhbFNraWxscyIsIk1vZGFsUGVyc29uYWxQcm9qZWN0IiwiTW9kYWxDb250YWN0Iiwib3BlbiIsImhhbmRsZUNsb3NlIiwiQ2hvc2VNb2RhbCIsIml0ZW0iLCJIb21lIiwidXNlU3RhdGUiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsIndoaWNoTW9kYWwiLCJzZXRXaGljaE1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpbGUiLCJjb2RlIiwiZ3JpZCIsImNhcmQiLCJmb290ZXIiLCJTdHlsZXMiLCJtb2RhbF9jb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmLHdCQUF1QkMsNEVBRFI7QUFFZiw0QkFBMkJDLGdGQUZaO0FBR2YsWUFBV0MsV0FISTtBQUlmLHFCQUFvQkMseUVBSkw7QUFLZixhQUFZQztBQUxHLENBQWpCOztBQVFBLFNBQVNBLFlBQVQsQ0FBdUJDLElBQXZCLEVBQTZCQyxXQUE3QixFQUF5QztBQUN2QyxNQUFHRCxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQWI7QUFBbUIsYUFBTyxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxp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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3hCO0FBRUE7QUFFZSxTQUFTTixvQkFBVCxDQUE4QkUsSUFBOUIsRUFBb0NDLFdBQXBDLEVBQWdEO0FBQzNELE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRXFCLDBEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLEVBQUMsOEVBRFA7QUFFRSxZQUFNLEVBQUMsUUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBRkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQVJGLENBREYsQ0FERixDQURGLENBREY7QUFrQkQ7O0FBQ0Q7QUFDRDtLQXRCcUJ6QixvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjcwMGNkNzc2YjM0ZDUwMzZkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanMnXG5cbmltcG9ydCBNb2RhbEFjYWRlbWljQmFja2dyb3VuZCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLmpzJ1xuaW1wb3J0IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZS5qcydcbmltcG9ydCBNb2RhbFBlcnNvbmFsUHJvamVjdCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUGVyc29uYWxQcm9qZWN0LmpzJ1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbWFwTW9kYWwgPSB7XG4gICdBY2FkZW1pY0JhY2tncm91bmQnIDogTW9kYWxBY2FkZW1pY0JhY2tncm91bmQsXG4gICdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyA6IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSxcbiAgJ1NraWxscycgOiBNb2RhbFNraWxscyxcbiAgJ1BlcnNvbmFsUHJvamVjdCcgOiBNb2RhbFBlcnNvbmFsUHJvamVjdCxcbiAgJ0NvbnRhY3QnIDogTW9kYWxDb250YWN0LFxufVxuXG5mdW5jdGlvbiBNb2RhbENvbnRhY3QgKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+Q29udGFjdDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBNb2RhbFNraWxscyhvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2Pk1vZGFsU2tpbGxzPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIENob3NlTW9kYWwoaXRlbSwgaGFuZGxlQ2xvc2Upe1xuICByZXR1cm4gbWFwTW9kYWxbaXRlbV0odHJ1ZSwgaGFuZGxlQ2xvc2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbd2hpY2hNb2RhbCwgc2V0V2hpY2hNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgc2V0V2hpY2hNb2RhbChtb2RhbCk7XG4gICAgc2V0TW9kYWxTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaWxsaWFtIE1vcmVpcmEgZGEgU2l2bGE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21vZGFsU3RhdGUgPyBDaG9zZU1vZGFsKHdoaWNoTW9kYWwsICgpID0+IHtzZXRNb2RhbFN0YXRlKGZhbHNlKX0pIDogbnVsbH1cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2lsbGlhbSBNb3JlaXJhIGRhIFNpbHZhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGlsZX0+RGVzZW52b2x2ZWRvciBGdWxsLVN0YWNrPC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnQWNhZGVtaWNCYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+QWNhZGVtaWMgQmFja2dyb3VuZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+UHJvZmVzc2lvbmFsIEV4cGVyaWVuY2UgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdTa2lsbHMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlNraWxscyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUGVyc29uYWxQcm9qZWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5QZXJzb25hbCBQcm9qZWN0cyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnQ29udGFjdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9Jy9yZXN1bWUucGRmJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlJlc3VtZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDIwMjAgYnkgV2lsbGlhbS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcydcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9TdWJwYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbFBlcnNvbmFsUHJvamVjdChvcGVuLCBoYW5kbGVDbG9zZSl7XHJcbiAgICBpZihvcGVuKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz5Tb25hdGEgLSBzY2hlZHVsZSBmb3IgdmlvbGluaXN0czwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS50b3F1ZS52aW9saW5vLmZhY2lsLnNvbmF0YScgXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlZlciBubyBHb29nbGUgcGxheTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlRlY2hub2xvZ2llczogSkFWQSwgU1FMLCBKUVVFUlksIEpTLCBIVE1MLCBDU1MsIFJFQUNULCBSRUFDVCBOQVRJVkUgR0lULCBTVk4gYW5kIFNRTDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=