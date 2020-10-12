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
  'AcademicBackground': ModalAcademicBackground(true, handleClose),
  'ProfessionalExperience': ModalProfessionalExperience(true, handleClose)
};

function ModalAcademicBackground(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
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
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, "oi"));
  }

  return;
}

_c2 = ModalProfessionalExperience;

function ChoseModal(item, handleClose) {
  return mapModal[item];
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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Academic Background \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
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
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Professional Experience \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
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
  }, "Skills \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
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
  }, "Personal Projects \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Contact \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "2020 by William."));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ModalAcademicBackground");
$RefreshReg$(_c2, "ModalProfessionalExperience");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsImhhbmRsZUNsb3NlIiwiTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlIiwib3BlbiIsIkNob3NlTW9kYWwiLCJpdGVtIiwiSG9tZSIsInVzZVN0YXRlIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJ3aGljaE1vZGFsIiwic2V0V2hpY2hNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aWxlIiwiY29kZSIsImdyaWQiLCJjYXJkIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmLHdCQUF1QkMsdUJBQXVCLENBQUMsSUFBRCxFQUFPQyxXQUFQLENBRC9CO0FBRWYsNEJBQTJCQywyQkFBMkIsQ0FBQyxJQUFELEVBQU9ELFdBQVA7QUFGdkMsQ0FBakI7O0FBS0EsU0FBU0QsdUJBQVQsQ0FBaUNHLElBQWpDLEVBQXVDRixXQUF2QyxFQUFtRDtBQUNqRCxNQUFHRSxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQWI7QUFBbUIsYUFBTyxFQUFFRixXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGO0FBS0Q7O0FBQ0Q7QUFDRDs7S0FUUUQsdUI7O0FBV1QsU0FBU0UsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDRixXQUEzQyxFQUF1RDtBQUNyRCxNQUFHRSxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElB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QUFBQTtBQUFBLGdDQUhGLENBcEJGLEVBNkJFO0FBQ0UsYUFBUyxFQUFFUiw4REFBTSxDQUFDUSxJQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixDQTdCRixFQXNDRTtBQUNFLGFBQVMsRUFBRVIsOERBQU0sQ0FBQ1EsSUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsQ0F0Q0YsQ0FWRixDQVJGLEVBbUVFO0FBQVEsYUFBUyxFQUFFUiw4REFBTSxDQUFDUyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5FRixDQURGO0FBeUVEOztHQWxGdUJqQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxMGI1ODYxZjhhYWFkMDdmNWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1hcE1vZGFsID0ge1xuICAnQWNhZGVtaWNCYWNrZ3JvdW5kJyA6IE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kKHRydWUsIGhhbmRsZUNsb3NlKSxcbiAgJ1Byb2Zlc3Npb25hbEV4cGVyaWVuY2UnIDogTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlKHRydWUsIGhhbmRsZUNsb3NlKSxcbn1cblxuZnVuY3Rpb24gTW9kYWxBY2FkZW1pY0JhY2tncm91bmQob3BlbiwgaGFuZGxlQ2xvc2Upe1xuICBpZihvcGVuKXtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdj5BY2FkZW1pY0JhY2tncm91bmQ8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+b2k8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gQ2hvc2VNb2RhbChpdGVtLCBoYW5kbGVDbG9zZSl7XG4gIHJldHVybiBtYXBNb2RhbFtpdGVtXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3doaWNoTW9kYWwsIHNldFdoaWNoTW9kYWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgIHNldFdoaWNoTW9kYWwobW9kYWwpO1xuICAgIHNldE1vZGFsU3RhdGUodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2lsbGlhbSBNb3JlaXJhIGRhIFNpdmxhPC90aXRsZT5cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHttb2RhbFN0YXRlID8gQ2hvc2VNb2RhbCh3aGljaE1vZGFsLCAoKSA9PiB7c2V0TW9kYWxTdGF0ZShmYWxzZSl9KSA6IG51bGx9XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdpbGxpYW0gTW9yZWlyYSBkYSBTaWx2YVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpbGV9PkRlc2Vudm9sdmVkb3IgRnVsbC1TdGFjazwvc3Ryb25nPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PndpbGxpYW0ubW9yZWlyYXNpbHZhQGhvdG1haWwuY29tPC9jb2RlPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvcGVuTW9kYWwoJ0FjYWRlbWljQmFja2dyb3VuZCcpO1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGgzPkFjYWRlbWljIEJhY2tncm91bmQgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPlByb2Zlc3Npb25hbCBFeHBlcmllbmNlICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlNraWxscyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlBlcnNvbmFsIFByb2plY3RzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlJlc3VtZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDIwMjAgYnkgV2lsbGlhbS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9