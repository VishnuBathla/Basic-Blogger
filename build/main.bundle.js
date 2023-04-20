/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blogpost.js":
/*!*************************!*\
  !*** ./src/blogpost.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Blogpost {\n    constructor(id, title, body) {\n        this.id = id;\n        this.title = title;\n        this.body = body;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogpost);\n\n//# sourceURL=webpack://babel_webpack_starter/./src/blogpost.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _blogpost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogpost */ \"./src/blogpost.js\");\n/* harmony import */ var _main_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main_data */ \"./src/main_data.js\");\n\n\n\nlet ind = 0;\nlet previous_blog = {};\nfunction adder(e) {\n    e.preventDefault();\n    try {\n        const title = document.querySelector(\"#Title\").value;\n        const body = document.querySelector(\"#post_body\").value;\n        const post = new _blogpost__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ind.toString(), title, body);\n        _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add_blog(post);\n        const ui = new _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        console.log(_main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        ui.blog(post);\n        document.querySelector(`#d${ind}`).addEventListener('click', del);\n        document.querySelector(`#i${ind}`).addEventListener('click', edit);\n        ind += 1;\n    } catch (e) {\n        console.log(e.message);\n    }\n}\nfunction del(e) {\n    e.preventDefault();\n    try {\n        if (confirm(\"Are you sure?\") == true) {\n            _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete_blog(e.target.id.substring(1));\n            const ui = new _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            console.log(_main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            ui.reset();\n            _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].data.forEach(blog => {\n                ui.blog(blog);\n                document.querySelector(`#d${blog.id}`).addEventListener('click', del);\n                document.querySelector(`#i${blog.id}`).addEventListener('click', edit);\n            });\n        }\n    } catch (e) {\n        console.log(e.message);\n    }\n}\nfunction updater(e) {\n    e.preventDefault();\n\n    try {\n        // console.log(prev_blog)\n        const title = document.querySelector(\"#Title\").value;\n        const body = document.querySelector(\"#post_body\").value;\n        const post = new _blogpost__WEBPACK_IMPORTED_MODULE_1__[\"default\"](previous_blog.id, title, body);\n        console.log(post);\n        _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update_blog(previous_blog, post);\n        reset_back(e);\n    } catch (e) {\n        console.log(e.message);\n    }\n}\nfunction edit(e) {\n    e.preventDefault();\n    try {\n        const index = e.target.id.substring(1);\n        const prev_blog = _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get_data(index);\n        previous_blog = prev_blog;\n        document.querySelector(\"#Title\").value = prev_blog.title;\n        document.querySelector(\"#post_body\").value = prev_blog.body;\n        const cancel = document.querySelector(\"#cancel_edit_btn\");\n        cancel.style.display = \"inline-block\";\n        const update = document.querySelector(\"#update_btn\");\n        update.style.display = \"inline-block\";\n        document.querySelector(\"#post_it\").style.display = \"none\";\n    } catch (e) {\n        console.log(e.message);\n    }\n}\n\nfunction reset_back(e) {\n    e.preventDefault();\n    document.querySelector(\"#Title\").value = \"\";\n    document.querySelector(\"#post_body\").value = \"\";\n    const cancel = document.querySelector(\"#cancel_edit_btn\");\n    cancel.style.display = \"none\";\n    const update = document.querySelector(\"#update_btn\");\n    update.style.display = \"none\";\n    document.querySelector(\"#post_it\").style.display = \"inline-block\";\n    // document.querySelector('#post_it').addEventListener('click',adder) \n    const ui = new _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    console.log(_main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    ui.reset();\n    _main_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].data.forEach(blog => {\n        ui.blog(blog);\n        document.querySelector(`#d${blog.id}`).addEventListener('click', del);\n        document.querySelector(`#i${blog.id}`).addEventListener('click', edit);\n    });\n}\n\ndocument.querySelector('#post_it').addEventListener('click', adder);\ndocument.querySelector(\"#update_btn\").addEventListener('click', updater);\ndocument.querySelector(\"#cancel_edit_btn\").addEventListener('click', reset_back);\n\n//# sourceURL=webpack://babel_webpack_starter/./src/main.js?");

/***/ }),

/***/ "./src/main_data.js":
/*!**************************!*\
  !*** ./src/main_data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Main_Data {\n    constructor() {\n        this.data = [];\n    }\n    add_blog(blog) {\n        this.data.push(blog);\n    }\n    delete_blog(index) {\n        this.data = this.data.filter(blg => blg.id !== index);\n    }\n    update_blog(prev_blog, new_blog) {\n        let index = this.data.indexOf(prev_blog);\n        console.log(index);\n        this.data[index].id = new_blog.id;\n        this.data[index].title = new_blog.title;\n        this.data[index].body = new_blog.body;\n    }\n    get_data(index) {\n        return this.data.find(blog => blog.id === index);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Main_Data());\n\n//# sourceURL=webpack://babel_webpack_starter/./src/main_data.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _main_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_data */ \"./src/main_data.js\");\n\nclass UI {\n    blog(post) {\n        const list = document.querySelector('.main_body');\n        const row = document.createElement('section');\n        row.innerHTML = `<h5>${post.title}</h5>\n                        <h5>${post.body}</h5>\n                        <button class=\"edit_but\" id=i${post.id}>✏️</button><button class=\"cancel_but\" id=d${post.id}>❌</button>\n                        `;\n        row.setAttribute('class', 'blog');\n        list.appendChild(row);\n    }\n    reset() {\n        const list = document.querySelector('.main_body');\n        list.innerHTML = ``;\n    }\n\n}\n\n//# sourceURL=webpack://babel_webpack_starter/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;