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
/* harmony import */ var _subpages_ModalAcademicBackground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subpages/ModalAcademicBackground.js */ "./pages/subpages/ModalAcademicBackground.js");
/* harmony import */ var _subpages_ModalProfessionalExperience_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subpages/ModalProfessionalExperience.js */ "./pages/subpages/ModalProfessionalExperience.js");
/* harmony import */ var _subpages_ModalPersonalProject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subpages/ModalPersonalProject.js */ "./pages/subpages/ModalPersonalProject.js");
/* harmony import */ var _subpages_ModalContact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subpages/ModalContact.js */ "./pages/subpages/ModalContact.js");
/* harmony import */ var _subpages_ModalSkills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subpages/ModalSkills.js */ "./pages/subpages/ModalSkills.js");
var _jsxFileName = "C:\\Users\\willi\\Desktop\\portifolio\\william-portfolio\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var mapModal = {
  'AcademicBackground': _subpages_ModalAcademicBackground_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  'ProfessionalExperience': _subpages_ModalProfessionalExperience_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  'Skills': _subpages_ModalSkills_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  'PersonalProject': _subpages_ModalPersonalProject_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  'Contact': _subpages_ModalContact_js__WEBPACK_IMPORTED_MODULE_6__["default"]
};

function ChoseModal(item, handleClose) {
  return mapModal[item](true, handleClose);
}

_c = ChoseModal;
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
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "William Moreira da Sivla"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), modalState ? ChoseModal(whichModal, function () {
    setModalState(false);
  }) : null, __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "William Moreira da Silva"), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("strong", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mark,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Full-Stack Developer")), __jsx("code", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "william.moreirasilva@hotmail.com")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
  }, "Personal Projects \u2192")), __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    onClick: function onClick() {
      openModal('Contact');
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
  }, "Contact \u2192")), __jsx("a", {
    href: "/resume.pdf",
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    target: "_blank",
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
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Resume \u2192")))), __jsx("footer", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "By William Moreira da silva - 2020 with NextJS"));
}

_s(Home, "1IaWg2uPHktddzPXVpqgUAgVWhM=");

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "ChoseModal");
$RefreshReg$(_c2, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWFwTW9kYWwiLCJNb2RhbEFjYWRlbWljQmFja2dyb3VuZCIsIk1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSIsIk1vZGFsU2tpbGxzIiwiTW9kYWxQZXJzb25hbFByb2plY3QiLCJNb2RhbENvbnRhY3QiLCJDaG9zZU1vZGFsIiwiaXRlbSIsImhhbmRsZUNsb3NlIiwiSG9tZSIsInVzZVN0YXRlIiwibW9kYWxTdGF0ZSIsInNldE1vZGFsU3RhdGUiLCJ3aGljaE1vZGFsIiwic2V0V2hpY2hNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aWxlIiwibWFyayIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZix3QkFBdUJDLDRFQURSO0FBRWYsNEJBQTJCQyxnRkFGWjtBQUdmLFlBQVdDLGdFQUhJO0FBSWYscUJBQW9CQyx5RUFKTDtBQUtmLGFBQVlDLGlFQUFZQTtBQUxULENBQWpCOztBQVFBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxXQUExQixFQUFzQztBQUNwQyxTQUFPUixRQUFRLENBQUNPLElBQUQsQ0FBUixDQUFlLElBQWYsRUFBcUJDLFdBQXJCLENBQVA7QUFDRDs7S0FGUUYsVTtBQUlNLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN4QkMsVUFEd0I7QUFBQSxNQUNaQyxhQURZOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRXhCRyxVQUZ3QjtBQUFBLE1BRVpD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LENBQUNTLElBRHBCO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JYLGVBQVMsQ0FBQyxTQUFELENBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLENBckNGLEVBaURFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxhQUFTLEVBQUVFLDhEQUFNLENBQUNTLElBRnBCO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsQ0FqREYsQ0FaRixDQVJGLEVBa0ZFO0FBQVEsYUFBUyxFQUFFVCw4REFBTSxDQUFDVSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQWxGRixDQURGO0FBd0ZEOztHQWpHdUJsQixJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkMGU1NTAxMmJkZGI0OTRmZGVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBNb2RhbEFjYWRlbWljQmFja2dyb3VuZCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsQWNhZGVtaWNCYWNrZ3JvdW5kLmpzJ1xuaW1wb3J0IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZS5qcydcbmltcG9ydCBNb2RhbFBlcnNvbmFsUHJvamVjdCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsUGVyc29uYWxQcm9qZWN0LmpzJ1xuaW1wb3J0IE1vZGFsQ29udGFjdCBmcm9tICcuL3N1YnBhZ2VzL01vZGFsQ29udGFjdC5qcydcbmltcG9ydCBNb2RhbFNraWxscyBmcm9tICcuL3N1YnBhZ2VzL01vZGFsU2tpbGxzLmpzJ1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbWFwTW9kYWwgPSB7XG4gICdBY2FkZW1pY0JhY2tncm91bmQnIDogTW9kYWxBY2FkZW1pY0JhY2tncm91bmQsXG4gICdQcm9mZXNzaW9uYWxFeHBlcmllbmNlJyA6IE1vZGFsUHJvZmVzc2lvbmFsRXhwZXJpZW5jZSxcbiAgJ1NraWxscycgOiBNb2RhbFNraWxscyxcbiAgJ1BlcnNvbmFsUHJvamVjdCcgOiBNb2RhbFBlcnNvbmFsUHJvamVjdCxcbiAgJ0NvbnRhY3QnIDogTW9kYWxDb250YWN0LFxufVxuXG5mdW5jdGlvbiBDaG9zZU1vZGFsKGl0ZW0sIGhhbmRsZUNsb3NlKXtcbiAgcmV0dXJuIG1hcE1vZGFsW2l0ZW1dKHRydWUsIGhhbmRsZUNsb3NlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBsZXQgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3doaWNoTW9kYWwsIHNldFdoaWNoTW9kYWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgIHNldFdoaWNoTW9kYWwobW9kYWwpO1xuICAgIHNldE1vZGFsU3RhdGUodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2lsbGlhbSBNb3JlaXJhIGRhIFNpdmxhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7bW9kYWxTdGF0ZSA/IENob3NlTW9kYWwod2hpY2hNb2RhbCwgKCkgPT4ge3NldE1vZGFsU3RhdGUoZmFsc2UpfSkgOiBudWxsfVxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXaWxsaWFtIE1vcmVpcmEgZGEgU2lsdmFcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aWxlfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1hcmt9PkZ1bGwtU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PndpbGxpYW0ubW9yZWlyYXNpbHZhQGhvdG1haWwuY29tPC9jb2RlPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBvcGVuTW9kYWwoJ0FjYWRlbWljQmFja2dyb3VuZCcpO1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGgzPkFjYWRlbWljIEJhY2tncm91bmQgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgnUHJvZmVzc2lvbmFsRXhwZXJpZW5jZScpO1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGgzPlByb2Zlc3Npb25hbCBFeHBlcmllbmNlICZyYXJyOzwvaDM+XG4gICAgICAgICAgICB7LyogPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD4gKi99XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbCgnU2tpbGxzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5Ta2lsbHMgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvcGVuTW9kYWwoJ1BlcnNvbmFsUHJvamVjdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+UGVyc29uYWwgUHJvamVjdHMgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvcGVuTW9kYWwoJ0NvbnRhY3QnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPkNvbnRhY3QgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPScvcmVzdW1lLnBkZidcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5SZXN1bWUgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIHsvKiA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+ICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICBCeSBXaWxsaWFtIE1vcmVpcmEgZGEgc2lsdmEgLSAyMDIwIHdpdGggTmV4dEpTXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==