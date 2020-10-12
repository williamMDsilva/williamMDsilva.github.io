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
  'Skills': ModalSkills,
  'PersonalProject': ModalPersonalProject,
  'Contact': ModalContact
};

function ModalPersonalProject() {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, "PersonalProject"));
  }

  return;
}

_c = ModalPersonalProject;

function ModalContact() {}

_c2 = ModalContact;

function ModalAcademicBackground(open, handleClose) {
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
    }, "AcademicBackground"));
  }

  return;
}

_c3 = ModalAcademicBackground;

function ModalProfessionalExperience(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, "ProfessionalExperience"));
  }

  return;
}

_c4 = ModalProfessionalExperience;

function ModalSkills(open, handleClose) {
  if (open) {
    return __jsx(_components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      open: open,
      onClose: handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "ModalSkills"));
  }

  return;
}

_c5 = ModalSkills;

function ChoseModal(item, handleClose) {
  return mapModal[item](true, handleClose);
}

_c6 = ChoseModal;
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
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
  }, "Skills \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('PersonalProject');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, "2020 by William."));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c7 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "ModalPersonalProject");
$RefreshReg$(_c2, "ModalContact");
$RefreshReg$(_c3, "ModalAcademicBackground");
$RefreshReg$(_c4, "ModalProfessionalExperience");
$RefreshReg$(_c5, "ModalSkills");
$RefreshReg$(_c6, "ChoseModal");
$RefreshReg$(_c7, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsIk1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSIsIk1vZGFsU2tpbGxzIiwiTW9kYWxQZXJzb25hbFByb2plY3QiLCJNb2RhbENvbnRhY3QiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJDaG9zZU1vZGFsIiwiaXRlbSIsIkhvbWUiLCJ1c2VTdGF0ZSIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwid2hpY2hNb2RhbCIsInNldFdoaWNoTW9kYWwiLCJvcGVuTW9kYWwiLCJtb2RhbCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3VidGlsZSIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZix3QkFBdUJDLHVCQURSO0FBRWYsNEJBQTJCQywyQkFGWjtBQUdmLFlBQVdDLFdBSEk7QUFJZixxQkFBb0JDLG9CQUpMO0FBS2YsYUFBWUM7QUFMRyxDQUFqQjs7QUFRQSxTQUFTRCxvQkFBVCxHQUFnQztBQUM5QixNQUFHRSxJQUFILEVBQVE7QUFDTixXQUNFLE1BQUMsa0VBQUQ7QUFBTyxVQUFJLEVBQUVBLElBQWI7QUFBbUIsYUFBTyxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGO0FBS0Q7O0FBQ0Q7QUFDRDs7S0FUUUgsb0I7O0FBV1QsU0FBU0MsWUFBVCxHQUF3QixDQUV2Qjs7TUFGUUEsWTs7QUFJVCxTQUFTSix1QkFBVCxDQUFpQ0ssSUFBakMsRUFBdUNDLFdBQXZDLEVBQW1EO0FBQ2pELE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBREY7QUFLRDs7QUFDRDtBQUNEOztNQVRRTix1Qjs7QUFXVCxTQUFTQywyQkFBVCxDQUFxQ0ksSUFBckMsRUFBMkNDLFdBQTNDLEVBQXVEO0FBQ3JELE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREY7QUFLRDs7QUFDRDtBQUNEOztNQVRRTCwyQjs7QUFXVCxTQUFTQyxXQUFULENBQXFCRyxJQUFyQixFQUEyQkMsV0FBM0IsRUFBdUM7QUFDckMsTUFBR0QsSUFBSCxFQUFRO0FBQ04sV0FDRSxNQUFDLGtFQUFEO0FBQU8sVUFBSSxFQUFFQSxJQUFiO0FBQW1CLGFBQU8sRUFBRUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERjtBQUtEOztBQUNEO0FBQ0Q7O01BVFFKLFc7O0FBV1QsU0FBU0ssVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJGLFdBQTFCLEVBQXNDO0FBQ3BDLFNBQU9QLFFBQVEsQ0FBQ1MsSUFBRCxDQUFSLENBQWUsSUFBZixFQUFxQkYsV0FBckIsQ0FBUDtBQUNEOztNQUZRQyxVO0FBSU0sU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ3hCQyxVQUR3QjtBQUFBLE1BQ1pDLGFBRFk7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFeEJHLFVBRndCO0FBQUEsTUFFWkMsYUFGWTs7QUFJN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCRixpQkFBYSxDQUFDRSxLQUFELENBQWI7QUFDQUosaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVLLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREYsRUFNR1AsVUFBVSxHQUFHSixVQUFVLENBQUNNLFVBQUQsRUFBYSxZQUFNO0FBQUNELGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQXFCLEdBQXpDLENBQWIsR0FBMEQsSUFOdkUsRUFRRTtBQUFNLGFBQVMsRUFBRUssOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBS0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUosOERBQU0sQ0FBQ0ssT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFFTCw4REFBTSxDQUFDTSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUZGLENBTEYsRUFVRTtBQUFLLGFBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFUCw4REFBTSxDQUFDUSxJQUFyQjtBQUEyQixXQUFPLEVBQUUsbUJBQU07QUFDeENWLGVBQVMsQ0FBQyxvQkFBRCxDQUFUO0FBQ0QsS0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FIRixDQURGLEVBUUU7QUFBRyxhQUFTLEVBQUVFLDhEQUFNLENBQUNRLElBQXJCO0FBQTJCLFdBQU8sRUFBRSxtQkFBTTtBQUN4Q1YsZUFBUyxDQUFDLHdCQUFELENBQVQ7QUFDRCxLQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUhGLENBUkYsRUFlRTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FmRixFQXlCRTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLGlCQUFELENBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU5GLENBekJGLEVBcUNFO0FBQ0UsYUFBUyxFQUFFRSw4REFBTSxDQUFDUSxJQURwQjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiVixlQUFTLENBQUMsU0FBRCxDQUFUO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixDQXJDRixFQWlERTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FqREYsQ0FWRixDQVJGLEVBaUZFO0FBQVEsYUFBUyxFQUFFRSw4REFBTSxDQUFDUyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpGRixDQURGO0FBdUZEOztHQWhHdUJqQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3Njg1OTZjZTk5YWY2NzJmYTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1hcE1vZGFsID0ge1xuICAnQWNhZGVtaWNCYWNrZ3JvdW5kJyA6IE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLFxuICAnUHJvZmVzc2lvbmFsRXhwZXJpZW5jZScgOiBNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2UsXG4gICdTa2lsbHMnIDogTW9kYWxTa2lsbHMsXG4gICdQZXJzb25hbFByb2plY3QnIDogTW9kYWxQZXJzb25hbFByb2plY3QsXG4gICdDb250YWN0JyA6IE1vZGFsQ29udGFjdCxcbn1cblxuZnVuY3Rpb24gTW9kYWxQZXJzb25hbFByb2plY3QgKCl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2PlBlcnNvbmFsUHJvamVjdDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBNb2RhbENvbnRhY3QgKCl7XG4gIFxufVxuXG5mdW5jdGlvbiBNb2RhbEFjYWRlbWljQmFja2dyb3VuZChvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2PkFjYWRlbWljQmFja2dyb3VuZDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2Uob3BlbiwgaGFuZGxlQ2xvc2Upe1xuICBpZihvcGVuKXtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdj5Qcm9mZXNzaW9uYWxFeHBlcmllbmNlPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIE1vZGFsU2tpbGxzKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+TW9kYWxTa2lsbHM8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gQ2hvc2VNb2RhbChpdGVtLCBoYW5kbGVDbG9zZSl7XG4gIHJldHVybiBtYXBNb2RhbFtpdGVtXSh0cnVlLCBoYW5kbGVDbG9zZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgbGV0IFttb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFt3aGljaE1vZGFsLCBzZXRXaGljaE1vZGFsXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICBzZXRXaGljaE1vZGFsKG1vZGFsKTtcbiAgICBzZXRNb2RhbFN0YXRlKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldpbGxpYW0gTW9yZWlyYSBkYSBTaXZsYTwvdGl0bGU+XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7bW9kYWxTdGF0ZSA/IENob3NlTW9kYWwod2hpY2hNb2RhbCwgKCkgPT4ge3NldE1vZGFsU3RhdGUoZmFsc2UpfSkgOiBudWxsfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXaWxsaWFtIE1vcmVpcmEgZGEgU2lsdmFcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aWxlfT5EZXNlbnZvbHZlZG9yIEZ1bGwtU3RhY2s8L3N0cm9uZz5cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT53aWxsaWFtLm1vcmVpcmFzaWx2YUBob3RtYWlsLmNvbTwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdBY2FkZW1pY0JhY2tncm91bmQnKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxoMz5BY2FkZW1pYyBCYWNrZ3JvdW5kICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvcGVuTW9kYWwoJ1Byb2Zlc3Npb25hbEV4cGVyaWVuY2UnKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxoMz5Qcm9mZXNzaW9uYWwgRXhwZXJpZW5jZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvcGVuTW9kYWwoJ1NraWxscycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+U2tpbGxzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdQZXJzb25hbFByb2plY3QnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlBlcnNvbmFsIFByb2plY3RzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdDb250YWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5Db250YWN0ICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdSZXN1bWUnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlJlc3VtZSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDIwMjAgYnkgV2lsbGlhbS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9