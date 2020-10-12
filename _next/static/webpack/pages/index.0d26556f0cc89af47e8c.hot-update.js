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
  'ProfessionalExperience': ModalProfessionalExperience
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
  }, "Professional Experience \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('AcademicBackground');
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
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Skills \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('AcademicBackground');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
  }, "Contact \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Resume');
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
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsIk1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIkNob3NlTW9kYWwiLCJpdGVtIiwiSG9tZSIsInVzZVN0YXRlIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJ3aGljaE1vZGFsIiwic2V0V2hpY2hNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aWxlIiwiY29kZSIsImdyaWQiLCJjYXJkIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmLHdCQUF1QkMsdUJBRFI7QUFFZiw0QkFBMkJDO0FBRlosQ0FBakI7O0FBS0EsU0FBU0QsdUJBQVQsQ0FBaUNFLElBQWpDLEVBQXVDQyxXQUF2QyxFQUFtRDtBQUNqRCxNQUFHRCxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQWI7QUFBbUIsYUFBTyxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGO0FBS0Q7O0FBQ0Q7QUFDRDs7S0FUUUgsdUI7O0FBV1QsU0FBU0MsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxXQUEzQyxFQUF1RDtBQUNyRCxNQUFHRCxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQWI7QUFBbUIsYUFBTyxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLG9CQUFELENBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU5GLENBekJGLEVBcUNFO0FBQ0UsYUFBUyxFQUFFRSw4REFBTSxDQUFDUSxJQURwQjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiVixlQUFTLENBQUMsU0FBRCxDQUFUO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixDQXJDRixFQWlERTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FqREYsQ0FWRixDQVJGLEVBaUZFO0FBQVEsYUFBUyxFQUFFRSw4REFBTSxDQUFDUyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpGRixDQURGO0FBdUZEOztHQWhHdUJqQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkMjY1NTZmMGNjODlhZjQ3ZThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1hcE1vZGFsID0ge1xuICAnQWNhZGVtaWNCYWNrZ3JvdW5kJyA6IE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLFxuICAnUHJvZmVzc2lvbmFsRXhwZXJpZW5jZScgOiBNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2UsXG59XG5cbmZ1bmN0aW9uIE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+QWNhZGVtaWNCYWNrZ3JvdW5kPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZShvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2Pm9pPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIENob3NlTW9kYWwoaXRlbSwgaGFuZGxlQ2xvc2Upe1xuICByZXR1cm4gbWFwTW9kYWxbaXRlbV0odHJ1ZSwgaGFuZGxlQ2xvc2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbd2hpY2hNb2RhbCwgc2V0V2hpY2hNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgc2V0V2hpY2hNb2RhbChtb2RhbCk7XG4gICAgc2V0TW9kYWxTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaWxsaWFtIE1vcmVpcmEgZGEgU2l2bGE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21vZGFsU3RhdGUgPyBDaG9zZU1vZGFsKHdoaWNoTW9kYWwsICgpID0+IHtzZXRNb2RhbFN0YXRlKGZhbHNlKX0pIDogbnVsbH1cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2lsbGlhbSBNb3JlaXJhIGRhIFNpbHZhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGlsZX0+RGVzZW52b2x2ZWRvciBGdWxsLVN0YWNrPC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnQWNhZGVtaWNCYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+QWNhZGVtaWMgQmFja2dyb3VuZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdBY2FkZW1pY0JhY2tncm91bmQnKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxoMz5Qcm9mZXNzaW9uYWwgRXhwZXJpZW5jZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvcGVuTW9kYWwoJ0FjYWRlbWljQmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+U2tpbGxzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdBY2FkZW1pY0JhY2tncm91bmQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlBlcnNvbmFsIFByb2plY3RzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdDb250YWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5Db250YWN0ICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdSZXN1bWUnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlJlc3VtZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDIwMjAgYnkgV2lsbGlhbS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9