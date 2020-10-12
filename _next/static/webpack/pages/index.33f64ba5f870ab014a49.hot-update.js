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

function ModalPersonalProject() {}

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
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
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
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
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
        lineNumber: 47,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
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
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "William Moreira da Sivla")), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "Desenvolvedor Full-Stack"), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
  }, "Professional Experience \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Skills');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsIk1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSIsIk1vZGFsU2tpbGxzIiwiTW9kYWxQZXJzb25hbFByb2plY3QiLCJNb2RhbENvbnRhY3QiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJDaG9zZU1vZGFsIiwiaXRlbSIsIkhvbWUiLCJ1c2VTdGF0ZSIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwid2hpY2hNb2RhbCIsInNldFdoaWNoTW9kYWwiLCJvcGVuTW9kYWwiLCJtb2RhbCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3VidGlsZSIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZix3QkFBdUJDLHVCQURSO0FBRWYsNEJBQTJCQywyQkFGWjtBQUdmLFlBQVdDLFdBSEk7QUFJZixxQkFBb0JDLG9CQUpMO0FBS2YsYUFBWUM7QUFMRyxDQUFqQjs7QUFRQSxTQUFTRCxvQkFBVCxHQUFnQyxDQUUvQjs7S0FGUUEsb0I7O0FBR1QsU0FBU0MsWUFBVCxHQUF3QixDQUV2Qjs7TUFGUUEsWTs7QUFJVCxTQUFTSix1QkFBVCxDQUFpQ0ssSUFBakMsRUFBdUNDLFdBQXZDLEVBQW1EO0FBQ2pELE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBREY7QUFLRDs7QUFDRDtBQUNEOztNQVRRTix1Qjs7QUFXVCxTQUFTQywyQkFBVCxDQUFxQ0ksSUFBckMsRUFBMkNDLFdBQTNDLEVBQXVEO0FBQ3JELE1BQUdELElBQUgsRUFBUTtBQUNOLFdBQ0UsTUFBQyxrRUFBRDtBQUFPLFVBQUksRUFBRUEsSUFBYjtBQUFtQixhQUFPLEVBQUVDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREY7QUFLRDs7QUFDRDtBQUNEOztNQVRRTCwyQjs7QUFXVCxTQUFTQyxXQUFULENBQXFCRyxJQUFyQixFQUEyQkMsV0FBM0IsRUFBdUM7QUFDckMsTUFBR0QsSUFBSCxFQUFRO0FBQ04sV0FDRSxNQUFDLGtFQUFEO0FBQU8sVUFBSSxFQUFFQSxJQUFiO0FBQW1CLGFBQU8sRUFBRUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FERjtBQUtEOztBQUNEO0FBQ0Q7O01BVFFKLFc7O0FBV1QsU0FBU0ssVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJGLFdBQTFCLEVBQXNDO0FBQ3BDLFNBQU9QLFFBQVEsQ0FBQ1MsSUFBRCxDQUFSLENBQWUsSUFBZixFQUFxQkYsV0FBckIsQ0FBUDtBQUNEOztNQUZRQyxVO0FBSU0sU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ3hCQyxVQUR3QjtBQUFBLE1BQ1pDLGFBRFk7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFeEJHLFVBRndCO0FBQUEsTUFFWkMsYUFGWTs7QUFJN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCRixpQkFBYSxDQUFDRSxLQUFELENBQWI7QUFDQUosaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVLLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREYsRUFNR1AsVUFBVSxHQUFHSixVQUFVLENBQUNNLFVBQUQsRUFBYSxZQUFNO0FBQUNELGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQXFCLEdBQXpDLENBQWIsR0FBMEQsSUFOdkUsRUFRRTtBQUFNLGFBQVMsRUFBRUssOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBS0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUosOERBQU0sQ0FBQ0ssT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFFTCw4REFBTSxDQUFDTSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUZGLENBTEYsRUFVRTtBQUFLLGFBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFUCw4REFBTSxDQUFDUSxJQUFyQjtBQUEyQixXQUFPLEVBQUUsbUJBQU07QUFDeENWLGVBQVMsQ0FBQyxvQkFBRCxDQUFUO0FBQ0QsS0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FIRixDQURGLEVBUUU7QUFBRyxhQUFTLEVBQUVFLDhEQUFNLENBQUNRLElBQXJCO0FBQTJCLFdBQU8sRUFBRSxtQkFBTTtBQUN4Q1YsZUFBUyxDQUFDLHdCQUFELENBQVQ7QUFDRCxLQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUhGLENBUkYsRUFlRTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FmRixFQXlCRTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLGlCQUFELENBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU5GLENBekJGLEVBcUNFO0FBQ0UsYUFBUyxFQUFFRSw4REFBTSxDQUFDUSxJQURwQjtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiVixlQUFTLENBQUMsU0FBRCxDQUFUO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixDQXJDRixFQWlERTtBQUNFLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ1EsSUFEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYlYsZUFBUyxDQUFDLFFBQUQsQ0FBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FqREYsQ0FWRixDQVJGLEVBaUZFO0FBQVEsYUFBUyxFQUFFRSw4REFBTSxDQUFDUyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWpGRixDQURGO0FBdUZEOztHQWhHdUJqQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzZjY0YmE1Zjg3MGFiMDE0YTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1hcE1vZGFsID0ge1xuICAnQWNhZGVtaWNCYWNrZ3JvdW5kJyA6IE1vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLFxuICAnUHJvZmVzc2lvbmFsRXhwZXJpZW5jZScgOiBNb2RhbFByb2Zlc3Npb25hbEV4cGVyaWVuY2UsXG4gICdTa2lsbHMnIDogTW9kYWxTa2lsbHMsXG4gICdQZXJzb25hbFByb2plY3QnIDogTW9kYWxQZXJzb25hbFByb2plY3QsXG4gICdDb250YWN0JyA6IE1vZGFsQ29udGFjdCxcbn1cblxuZnVuY3Rpb24gTW9kYWxQZXJzb25hbFByb2plY3QgKCl7XG4gIFxufVxuZnVuY3Rpb24gTW9kYWxDb250YWN0ICgpe1xuICBcbn1cblxuZnVuY3Rpb24gTW9kYWxBY2FkZW1pY0JhY2tncm91bmQob3BlbiwgaGFuZGxlQ2xvc2Upe1xuICBpZihvcGVuKXtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdj5BY2FkZW1pY0JhY2tncm91bmQ8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gTW9kYWxQcm9mZXNzaW9uYWxFeHBlcmllbmNlKG9wZW4sIGhhbmRsZUNsb3NlKXtcbiAgaWYob3Blbil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxkaXY+UHJvZmVzc2lvbmFsRXhwZXJpZW5jZTwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBNb2RhbFNraWxscyhvcGVuLCBoYW5kbGVDbG9zZSl7XG4gIGlmKG9wZW4pe1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8ZGl2Pk1vZGFsU2tpbGxzPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIENob3NlTW9kYWwoaXRlbSwgaGFuZGxlQ2xvc2Upe1xuICByZXR1cm4gbWFwTW9kYWxbaXRlbV0odHJ1ZSwgaGFuZGxlQ2xvc2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbd2hpY2hNb2RhbCwgc2V0V2hpY2hNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgc2V0V2hpY2hNb2RhbChtb2RhbCk7XG4gICAgc2V0TW9kYWxTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaWxsaWFtIE1vcmVpcmEgZGEgU2l2bGE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21vZGFsU3RhdGUgPyBDaG9zZU1vZGFsKHdoaWNoTW9kYWwsICgpID0+IHtzZXRNb2RhbFN0YXRlKGZhbHNlKX0pIDogbnVsbH1cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2lsbGlhbSBNb3JlaXJhIGRhIFNpbHZhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGlsZX0+RGVzZW52b2x2ZWRvciBGdWxsLVN0YWNrPC9zdHJvbmc+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+d2lsbGlhbS5tb3JlaXJhc2lsdmFAaG90bWFpbC5jb208L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnQWNhZGVtaWNCYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+QWNhZGVtaWMgQmFja2dyb3VuZCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8aDM+UHJvZmVzc2lvbmFsIEV4cGVyaWVuY2UgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPiAqL31cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb3Blbk1vZGFsKCdTa2lsbHMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPlNraWxscyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUGVyc29uYWxQcm9qZWN0Jyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5QZXJzb25hbCBQcm9qZWN0cyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnQ29udGFjdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCAmcmFycjs8L2gzPlxuICAgICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnUmVzdW1lJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5SZXN1bWUgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAyMDIwIGJ5IFdpbGxpYW0uXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==