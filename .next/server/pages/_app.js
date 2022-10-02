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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AppContext.jsx":
/*!*********************************!*\
  !*** ./contexts/AppContext.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\nfirebase_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppProvider(props) {\n    const { 0: loginState , 1: setNewLoginState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: loginInfo , 1: setNewLoginInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: authLoading , 1: setAuthLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        /**\n     * Función para detectar el cambio en el estado de autenticación\n     * @param {Object} user\n     */ (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, async (user)=>{\n            if (user) {\n                setNewLoginState(true);\n                // create resolver\n                if (user.displayName === null) {\n                    const user = JSON.parse(localStorage.getItem(\"user\"));\n                    setNewLoginInfo({\n                        uid: user.uid,\n                        names: user.displayName.split(\":\")[0],\n                        surnames: user.displayName.split(\":\")[1],\n                        img: user.photoURL\n                    });\n                    localStorage.removeItem(\"user\");\n                    setAuthLoading(false);\n                } else {\n                    setNewLoginInfo({\n                        uid: user.uid,\n                        names: user.displayName.split(\":\")[0],\n                        surnames: user.displayName.split(\":\")[1],\n                        img: user.photoURL\n                    });\n                    setAuthLoading(false);\n                }\n            } else {\n                setNewLoginInfo({});\n                setNewLoginState(false);\n                setAuthLoading(false);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            authLoading,\n            setAuthLoading,\n            loginState,\n            setNewLoginState,\n            loginInfo,\n            setNewLoginInfo\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/josedrz/Documents/GitHub/bbva-reto/contexts/AppContext.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n}\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUMwQjtBQUNaO0FBRS9DLEtBQUssQ0FBQ0ssVUFBVSxpQkFBR0Ysb0RBQWE7U0FFdkJHLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDM0IsS0FBSyxNQUFFQyxVQUFVLE1BQUVDLGdCQUFnQixNQUFJTCwrQ0FBUSxDQUFDLEtBQUs7SUFDckQsS0FBSyxNQUFFTSxTQUFTLE1BQUVDLGVBQWUsTUFBSVAsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEQsS0FBSyxNQUFFUSxXQUFXLE1BQUVDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBQyxJQUFJO0lBQ25ELEtBQUssQ0FBQ1UsSUFBSSxHQUFHYixzREFBTztJQUNwQkQsZ0RBQVMsV0FBYSxDQUFDO1FBQ3JCLEVBR0c7OztLQUFBLEdBQ0hFLGlFQUFrQixDQUFDWSxJQUFJLFNBQVNDLElBQUksR0FBSyxDQUFDO1lBQ3hDLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1ROLGdCQUFnQixDQUFDLElBQUk7Z0JBQ3JCLEVBQWtCO2dCQUNsQixFQUFFLEVBQUVNLElBQUksQ0FBQ0MsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUM5QixLQUFLLENBQUNELElBQUksR0FBR0UsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07b0JBQ25EVCxlQUFlLENBQUMsQ0FBQzt3QkFDZlUsR0FBRyxFQUFFTixJQUFJLENBQUNNLEdBQUc7d0JBQ2JDLEtBQUssRUFBRVAsSUFBSSxDQUFDQyxXQUFXLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQzt3QkFDcENDLFFBQVEsRUFBRVQsSUFBSSxDQUFDQyxXQUFXLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQzt3QkFDdkNFLEdBQUcsRUFBRVYsSUFBSSxDQUFDVyxRQUFRO29CQUNwQixDQUFDO29CQUNEUCxZQUFZLENBQUNRLFVBQVUsQ0FBQyxDQUFNO29CQUM5QmQsY0FBYyxDQUFDLEtBQUs7Z0JBQ3RCLENBQUMsTUFBTSxDQUFDO29CQUNORixlQUFlLENBQUMsQ0FBQzt3QkFDZlUsR0FBRyxFQUFFTixJQUFJLENBQUNNLEdBQUc7d0JBQ2JDLEtBQUssRUFBRVAsSUFBSSxDQUFDQyxXQUFXLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQzt3QkFDcENDLFFBQVEsRUFBRVQsSUFBSSxDQUFDQyxXQUFXLENBQUNPLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQzt3QkFDdkNFLEdBQUcsRUFBRVYsSUFBSSxDQUFDVyxRQUFRO29CQUNwQixDQUFDO29CQUNEYixjQUFjLENBQUMsS0FBSztnQkFDdEIsQ0FBQztZQUNILENBQUMsTUFBTSxDQUFDO2dCQUNORixlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNsQkYsZ0JBQWdCLENBQUMsS0FBSztnQkFDdEJJLGNBQWMsQ0FBQyxLQUFLO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQ0hSLFVBQVUsQ0FBQ3VCLFFBQVE7UUFDbEJDLEtBQUssRUFBRSxDQUFDO1lBQ05qQixXQUFXO1lBQ1hDLGNBQWM7WUFDZEwsVUFBVTtZQUNWQyxnQkFBZ0I7WUFDaEJDLFNBQVM7WUFDVEMsZUFBZTtRQUNqQixDQUFDO2tCQUVBSixLQUFLLENBQUN1QixRQUFROzs7Ozs7QUFHckIsQ0FBQztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmsvLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzeD85OWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmZ1bmN0aW9uIEFwcFByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IFtsb2dpblN0YXRlLCBzZXROZXdMb2dpblN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2luSW5mbywgc2V0TmV3TG9naW5JbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2F1dGhMb2FkaW5nLCBzZXRBdXRoTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBGdW5jacOzbiBwYXJhIGRldGVjdGFyIGVsIGNhbWJpbyBlbiBlbCBlc3RhZG8gZGUgYXV0ZW50aWNhY2nDs25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXNlclxuICAgICAqL1xuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBhc3luYyAodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0TmV3TG9naW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgLy8gY3JlYXRlIHJlc29sdmVyXG4gICAgICAgIGlmICh1c2VyLmRpc3BsYXlOYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgICAgICBzZXROZXdMb2dpbkluZm8oe1xuICAgICAgICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgICAgICAgIG5hbWVzOiB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiOlwiKVswXSxcbiAgICAgICAgICAgIHN1cm5hbWVzOiB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiOlwiKVsxXSxcbiAgICAgICAgICAgIGltZzogdXNlci5waG90b1VSTCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICAgICAgc2V0QXV0aExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldE5ld0xvZ2luSW5mbyh7XG4gICAgICAgICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgICAgICAgbmFtZXM6IHVzZXIuZGlzcGxheU5hbWUuc3BsaXQoXCI6XCIpWzBdLFxuICAgICAgICAgICAgc3VybmFtZXM6IHVzZXIuZGlzcGxheU5hbWUuc3BsaXQoXCI6XCIpWzFdLFxuICAgICAgICAgICAgaW1nOiB1c2VyLnBob3RvVVJMLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldEF1dGhMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TmV3TG9naW5JbmZvKHt9KTtcbiAgICAgICAgc2V0TmV3TG9naW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIHNldEF1dGhMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBhdXRoTG9hZGluZyxcbiAgICAgICAgc2V0QXV0aExvYWRpbmcsXG4gICAgICAgIGxvZ2luU3RhdGUsXG4gICAgICAgIHNldE5ld0xvZ2luU3RhdGUsXG4gICAgICAgIGxvZ2luSW5mbyxcbiAgICAgICAgc2V0TmV3TG9naW5JbmZvLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgeyBBcHBDb250ZXh0LCBBcHBQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwiQXBwUHJvdmlkZXIiLCJwcm9wcyIsImxvZ2luU3RhdGUiLCJzZXROZXdMb2dpblN0YXRlIiwibG9naW5JbmZvIiwic2V0TmV3TG9naW5JbmZvIiwiYXV0aExvYWRpbmciLCJzZXRBdXRoTG9hZGluZyIsImF1dGgiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidWlkIiwibmFtZXMiLCJzcGxpdCIsInN1cm5hbWVzIiwiaW1nIiwicGhvdG9VUkwiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AppContext.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/AppContext */ \"./contexts/AppContext.jsx\");\n/* harmony import */ var styles_custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/custom.css */ \"./styles/custom.css\");\n/* harmony import */ var styles_custom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_custom_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_1__]);\n([contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    /**\n   * Tailwind CSS SSR resolver\n   */ if (true) {\n        __webpack_require__.e(/*! import() */ \"styles_globals_css\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../styles/globals.css */ \"./styles/globals.css\", 23));\n    }\n    /**\n   * Init firebaseConfig\n   */ const firebaseConfig = {\n        apiKey: \"AIzaSyAfW9cJGuzky_v8zWjWE-BkVtsh-nWFmJ4\",\n        authDomain: \"bbva-reto.firebaseapp.com\",\n        projectId: \"bbva-reto\",\n        storageBucket: \"bbva-reto.appspot.com\",\n        messagingSenderId: \"20973843587\",\n        appId: \"1:20973843587:web:9250d74952ec42007617b6\",\n        measurementId: \"G-WRF3VMXC1K\"\n    };\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/josedrz/Documents/GitHub/bbva-reto/pages/_app.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/josedrz/Documents/GitHub/bbva-reto/pages/_app.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNLO0FBQ3ZCO1NBRWpCRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxFQUVHOztHQUFBLEdBQ0gsRUFBRSxFQVJKLElBUTJDLEVBQUUsQ0FBQztRQUMxQywwS0FBOEI7SUFDaEMsQ0FBQztJQUNELEVBRUc7O0dBQUEsR0FDSCxLQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFDO1FBQ3RCQyxNQUFNLEVBQUUsQ0FBeUM7UUFDakRDLFVBQVUsRUFBRSxDQUEyQjtRQUN2Q0MsU0FBUyxFQUFFLENBQVc7UUFDdEJDLGFBQWEsRUFBRSxDQUF1QjtRQUN0Q0MsaUJBQWlCLEVBQUUsQ0FBYTtRQUNoQ0MsS0FBSyxFQUFFLENBQTBDO1FBQ2pEQyxhQUFhLEVBQUUsQ0FBYztJQUMvQixDQUFDO0lBQ0QsS0FBSyxDQUFDQyxHQUFHLEdBQUdiLDJEQUFhLENBQUNLLGNBQWM7SUFDeEMsTUFBTTs4RkFFREosNERBQVc7a0dBQ1RFLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmsvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCJjb250ZXh0cy9BcHBDb250ZXh0XCI7XG5pbXBvcnQgXCJzdHlsZXMvY3VzdG9tLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLyoqXG4gICAqIFRhaWx3aW5kIENTUyBTU1IgcmVzb2x2ZXJcbiAgICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpbXBvcnQoXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIik7XG4gIH1cbiAgLyoqXG4gICAqIEluaXQgZmlyZWJhc2VDb25maWdcbiAgICovXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBZlc5Y0pHdXpreV92OHpXaldFLUJrVnRzaC1uV0ZtSjRcIixcbiAgICBhdXRoRG9tYWluOiBcImJidmEtcmV0by5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiYmJ2YS1yZXRvXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJiYnZhLXJldG8uYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMDk3Mzg0MzU4N1wiLFxuICAgIGFwcElkOiBcIjE6MjA5NzM4NDM1ODc6d2ViOjkyNTBkNzQ5NTJlYzQyMDA3NjE3YjZcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctV1JGM1ZNWEMxS1wiLFxuICB9O1xuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFwcFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0FwcFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiQXBwUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();