"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ \"./web3/provider.js\");\n\n\n\nclass IndexPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    async componentDidMount() {\n        try {\n            await ethereum.enable() // Prompt user to let our DApp access their addresses\n            ;\n            const addresses = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getAccounts() // Get user's ETH addresses\n            ;\n            console.log(addresses);\n            const balance = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getBalance(addresses[0]);\n            console.log(balance);\n        } catch (err) {\n            console.error(\"User denied access to their ETH addresses!\");\n        }\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"hello world!\"\n        }, void 0, false, {\n            fileName: \"/home/supersahil_blockchain/Desktop/BlockchainProjects/Tweether/client/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFdkIsTUFBTUUsU0FBUyxTQUFTRix3REFBZTtVQUU5Q0ksaUJBQWlCLEdBQUcsQ0FBQztRQUN6QixHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEVBQUcsQ0FBcUQ7O1lBQzdFLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQ04sMkRBQWUsRUFBRyxDQUEyQjs7WUFDckVRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTO1lBRXJCLEtBQUssQ0FBQ0ksT0FBTyxHQUFHLEtBQUssQ0FBQ1YsMERBQWMsQ0FBQ00sU0FBUyxDQUFDLENBQUM7WUFDaERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO1FBRXJCLENBQUMsQ0FBQyxLQUFLLEVBQUVFLEdBQUcsRUFBRSxDQUFDO1lBQ2JKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLENBQTRDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRURDLE1BQU0sR0FBRyxDQUFDO1FBQ1IsTUFBTSw2RUFDSEMsQ0FBRTtzQkFBQyxDQUFZOzs7Ozs7SUFFcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXRoIH0gZnJvbSAnLi4vd2ViMy9wcm92aWRlcicgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKCkgLy8gUHJvbXB0IHVzZXIgdG8gbGV0IG91ciBEQXBwIGFjY2VzcyB0aGVpciBhZGRyZXNzZXNcbiAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IGV0aC5nZXRBY2NvdW50cygpIC8vIEdldCB1c2VyJ3MgRVRIIGFkZHJlc3Nlc1xuICAgICAgY29uc29sZS5sb2coYWRkcmVzc2VzKVxuXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZXRoLmdldEJhbGFuY2UoYWRkcmVzc2VzWzBdKVxuICAgICAgY29uc29sZS5sb2coYmFsYW5jZSlcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgZGVuaWVkIGFjY2VzcyB0byB0aGVpciBFVEggYWRkcmVzc2VzIVwiKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxPmhlbGxvIHdvcmxkITwvaDE+XG4gICAgKVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZXRoIiwiSW5kZXhQYWdlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJldGhlcmV1bSIsImVuYWJsZSIsImFkZHJlc3NlcyIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImJhbGFuY2UiLCJnZXRCYWxhbmNlIiwiZXJyIiwiZXJyb3IiLCJyZW5kZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eth\": () => (/* binding */ eth)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst provider = ()=>{\n    // If the user has MetaMask:\n    if (typeof web3 !== 'undefined') {\n        console.log(\"Connected to MetaMask successfully\");\n        return web3.currentProvider;\n    } else {\n        console.error(\"You need to install MetaMask for this app to work!\");\n    }\n};\nconst eth = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider()).eth;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzL3Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QjtBQUV2QixLQUFLLENBQUNDLFFBQVEsT0FBUyxDQUFDO0lBQ3RCLEVBQTRCO0lBQzVCLEVBQUUsRUFBRSxNQUFNLENBQUNDLElBQUksS0FBSyxDQUFXLFlBQUUsQ0FBQztRQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0M7UUFDaEQsTUFBTSxDQUFDRixJQUFJLENBQUNHLGVBQWU7SUFDN0IsQ0FBQyxNQUFNLENBQUM7UUFDTkYsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBb0Q7SUFDcEUsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLEdBQUcsR0FBRyxHQUFHLENBQUNQLDZDQUFJLENBQUNDLFFBQVEsSUFBSU0sR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYjMvcHJvdmlkZXIuanM/YmRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5cbmNvbnN0IHByb3ZpZGVyID0gKCkgPT4ge1xuICAvLyBJZiB0aGUgdXNlciBoYXMgTWV0YU1hc2s6XG4gIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNZXRhTWFzayBzdWNjZXNzZnVsbHlcIilcbiAgICByZXR1cm4gd2ViMy5jdXJyZW50UHJvdmlkZXJcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiWW91IG5lZWQgdG8gaW5zdGFsbCBNZXRhTWFzayBmb3IgdGhpcyBhcHAgdG8gd29yayFcIilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXRoID0gbmV3IFdlYjMocHJvdmlkZXIoKSkuZXRoIl0sIm5hbWVzIjpbIldlYjMiLCJwcm92aWRlciIsIndlYjMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFByb3ZpZGVyIiwiZXJyb3IiLCJldGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web3/provider.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();