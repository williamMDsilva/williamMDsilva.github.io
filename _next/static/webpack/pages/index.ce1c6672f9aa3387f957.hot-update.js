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
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var mapModal = {
  'AcademicBackground': ModalAcademicBackground,
  'ProfessionalExperience': ModalProfessionalExperience,
  'Skills': ModalSkills
};

function ModalAcademicBackground(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, "AcademicBackground"));
  }

  return;
}

_c = ModalAcademicBackground;

function ModalProfessionalExperience(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, "ProfessionalExperience"));
  }

  return;
}

_c2 = ModalProfessionalExperience;

function ModalSkills(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, "ModalSkills"));
  }

  return;
}

_c3 = ModalSkills;

function ChoseModal(item, handleClose) {
  return mapModal[item](true, handleClose);
}

_c4 = ChoseModal;
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
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Contact \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Resume');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, "2020 by William."));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c5 = Home;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ModalAcademicBackground");
$RefreshReg$(_c2, "ModalProfessionalExperience");
$RefreshReg$(_c3, "ModalSkills");
$RefreshReg$(_c4, "ChoseModal");
$RefreshReg$(_c5, "Home");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsIk1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSIsIk1vZGFsU2tpbGxzIiwib3BlbiIsImhhbmRsZUNsb3NlIiwiQ2hvc2VNb2RhbCIsIml0ZW0iLCJIb21lIiwidXNlU3RhdGUiLCJtb2RhbFN0YXRlIiwic2V0TW9kYWxTdGF0ZSIsIndoaWNoTW9kYWwiLCJzZXRXaGljaE1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpbGUiLCJjb2RlIiwiZ3JpZCIsImNhcmQiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2Ysd0JBQXVCQyx1QkFEUjtBQUVmLDRCQUEyQkMsMkJBRlo7QUFHZixZQUFXQztBQUhJLENBQWpCOztBQU1BLFNBQVNGLHVCQUFULENBQWlDRyxJQUFqQyxFQUF1Q0MsV0FBdkMsRUFBbUQ7QUFDakQsTUFBR0QsSUFBSCxFQUFRO0FBQ04sV0FDRSxNQUFDLGtFQUFEO0FBQU8sVUFBSSxFQUFFQSxJQUFiO0FBQW1CLGFBQU8sRUFBRUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FERjtBQUtEOztBQUNEO0FBQ0Q7O0tBVFFKLHVCOztBQVdULFNBQVNDLDJCQUFULENBQXFDRSxJQUFyQyxFQUEyQ0MsV0FBM0MsRUFBdUQ7QUFDckQsTUFBR0QsSUFBSCxFQUFRO0FBQ04sV0FDRSxNQUFDLGtFQUFEO0FBQU8sVUFBSSxFQUFFQSxJQUFiO0FBQW1CLGFBQU8sRUFBRUMsV0FBNUI7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d0JBakZGLENBREY7QUF1RkQ7O0dBaEd1QmpCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2UxYzY2NzJmOWFhMzM4N2Y5NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbWFwTW9kYWwgPSB7XG4gICdBY2FkZW1pY0JhY2tncm91bmQnIDogTW9kYWxBY2FkZW1pY0JhY2tncm91bmQsXG4gICdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyA6IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSxcbiAgJ1NraWxscycgOiBNb2RhbFNraWxscyxcbn1cblxuZnVuY3Rpb24gTW9kYWxBY2FkZW1pY0JhY2tncm91bmQob3BlbiwgaGFuZGxlQ2xvc2Upe1xuICBpZihvcGVuKXtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdj5BY2FkZW1pY0JhY2tncm91bmQ8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+UHJvZmVzc2lvbmFsRXhwZXJpZW5jZTwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBNb2RhbFNraWxscyhvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2Pk1vZGFsU2tpbGxzPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIENob3NlTW9kYWwoaXRlbSwgaGFuZGxlQ2xvc2Upe1xuICByZXR1cm4gbWFwTW9kYWxbaXRlbV0odHJ1ZSwgaGFuZGxlQ2xvc2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbd2hpY2hNb2RhbCwgc2V0V2hpY2hNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgc2V0V2hpY2hNb2RhbChtb2RhbCk7XG4gICAgc2V0TW9kYWxTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaWxsaWFtIE1vcmVpcmEgZGEgU2l2bGE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21vZGFsU3RhdGUgPyBDaG9zZU1vZGFsKHdoaWNoTW9kYWwsICgpID0+IHtzZXRNb2RhbFN0YXRlKGZhbHNlKX0pIDogbnVsbH1cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2lsbGlhbSBNb3JlaXJhIGRhIFNpbHZhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGlsZX0+RGVzZW52b2x2ZWRvciBGdWxsLVN0YWNrPC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnQWNhZGVtaWNCYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+QWNhZGVtaWMgQmFja2dyb3VuZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+UHJvZmVzc2lvbmFsIEV4cGVyaWVuY2UgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdTa2lsbHMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlNraWxscyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUGVyc29uYWxQcm9qZWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5QZXJzb25hbCBQcm9qZWN0cyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnQ29udGFjdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUmVzdW1lJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5SZXN1bWUgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAyMDIwIGJ5IFdpbGxpYW0uXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==