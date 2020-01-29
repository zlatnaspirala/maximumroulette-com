/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/animations.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/animations.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* MessageBox animation */\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes autohide {\r\n  0%   {background-color:rgba(255, 0, 0, 0.5); right:0px; top:0px; transform: scale(0.5, 0.5);}\r\n  25%  {background-color:rgba(255, 255, 0, 0.5); right:-100px; top:0px; transform: scale(1, 1);}\r\n  50%  {background-color:rgba(30, 30, 175, 0.5); right:0px; top:0px; transform: scale(0.5, 0.5);}\r\n  75%  {background-color:rgba(0, 128, 0, 0.5); right:60px; top:0px; transform: scale(0.8, 0.8);}\r\n  100% {background-color:rgba(255, 0, 0, 0.1); right:88px; top:0px; transform: scale(1, 1);}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes autohide {\r\n  0%   {background-color:rgba(255, 0, 0, 0.164); right:0px; top:0px; transform: scale(0.5, 0.5);}\r\n  25%  {background-color:rgba(255, 255, 0, 0.164); right:-100px; top:0px; transform: scale(1, 1);}\r\n  50%  {background-color:rgba(30, 30, 175, 0.26); right:0px; top:0px; transform: scale(0.5, 0.5);}\r\n  75%  {background-color:rgba(0, 128, 0, 0.164); right:60px; top:0px; transform: scale(0.8, 0.8);}\r\n  100% {background-color:rgba(255, 0, 0, 0.15); right:88px; top:0px; transform: scale(1, 1);}\r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes scaleToCenter {\r\n  0%   {background-color:rgba(21, 0, 0, 0.9); right:0px; top:0px; transform: scale(1, 1);}\r\n  100% {background-color:rgba(21, 0, 0, 0.9); right:88px; top:0px; transform: scale(0.01, 0.1);}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes scaleToCenter {\r\n  0%   {background-color:rgba(21, 0, 0, 0.9); right:0px; top:0px; transform: scale(1, 1);}\r\n  100% {background-color:rgba(21, 0, 0, 0.9); right:88px; top:0px; transform: scale(0.01, 0.1);}\r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes scaleFromCenter {\r\n  0%   {background-color:rgba(21, 0, 0, 0.9); right:0px; top:0px; transform: scale(0.1, 0.1);}\r\n  100% {background-color:rgba(21, 0, 0, 0.9); right:88px; top:0px; transform: scale(1, 1);}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes scaleFromCenter {\r\n  0%   {background-color:rgba(21, 0, 0, 0.9); right:0px; top:0px; transform: scale(0.1, 0.1);}\r\n  100% {background-color:rgba(21, 0, 0, 0.9); right:88px; top:0px; transform: scale(1, 1);}\r\n}\r\n\r\n/* Network-Panel animation */\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes rightmove {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); right:0%; top:0px;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); right:-26%; top:95%;}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes rightmove {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); right:0%; top:0px;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); right:-26%; top:95%;}\r\n}\r\n\r\n@-webkit-keyframes leftmove {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); right:-26%; top:95%;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); right:0%; top:0px;}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes leftmove {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); right:-26%; top:95%;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); right:0%; top:0px;}\r\n}\r\n\r\n/* Vertical */\r\n/* Network-Panel animation */\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes goBottom {\r\n  0%   {background-color:rgba(155, 101, 10, 0.9); top:0px;}\r\n  100%  {background-color:rgba(155, 155, 0, 0.9); top:95%;}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes goBottom {\r\n  0%   {background-color:rgba(255, 120, 0, 0.9); top:0px;}\r\n  100%  {background-color:rgba(255, 25, 112, 0.9); top:95%;}\r\n}\r\n\r\n@-webkit-keyframes goUp {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); top:95%;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); top:0px;}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes goUp {\r\n  0%   {background-color:rgba(255, 0, 0, 0.9); top:95%;}\r\n  100%  {background-color:rgba(255, 255, 0, 0.9); top:0px;}\r\n}\r\n\r\n/* bounceIn */\r\n.bounceIn {\r\n  border: none;\r\n  -webkit-animation-name: bounceIn;\r\n  animation-name: bounceIn;\r\n  -webkit-animation-duration: .75s;\r\n  animation-duration: .75s;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: 1;\r\n  -webkit-animation-fill-mode: none;\r\n  animation-fill-mode: none;\r\n  animation-play-state: running;\r\n}\r\n\r\ndiv.bounceIn:hover {\r\n  border: solid red 1px;\r\n}\r\n\r\n@-webkit-keyframes bounceIn {\r\n0%, 20%, 40%, 60%, 80%, 100% {\r\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n}\r\n0% {\r\n  opacity: 0;\r\n  -webkit-transform: scale3d(.3, .3, .3);\r\n  transform: scale3d(.3, .3, .3);\r\n}\r\n20% {\r\n  -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n  transform: scale3d(1.1, 1.1, 1.1);\r\n}\r\n40% {\r\n  -webkit-transform: scale3d(.9, .9, .9);\r\n  transform: scale3d(.9, .9, .9);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n  transform: scale3d(1.03, 1.03, 1.03);\r\n}\r\n80% {\r\n  -webkit-transform: scale3d(.97, .97, .97);\r\n  transform: scale3d(.97, .97, .97);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: scale3d(1, 1, 1);\r\n  transform: scale3d(1, 1, 1);\r\n}\r\n}\r\n@keyframes bounceIn {\r\n0%, 20%, 40%, 60%, 80%, 100% {\r\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n}\r\n0% {\r\nopacity: 0;\r\n  -webkit-transform: scale3d(.3, .3, .3);\r\n  transform: scale3d(.3, .3, .3);\r\n}\r\n20% {\r\n  -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n  transform: scale3d(1.1, 1.1, 1.1);\r\n}\r\n40% {\r\n  -webkit-transform: scale3d(.9, .9, .9);\r\n  transform: scale3d(.9, .9, .9);\r\n}\r\n60% {\r\n  opacity: 1;\r\n  -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n  transform: scale3d(1.03, 1.03, 1.03);\r\n}\r\n80% {\r\n  -webkit-transform: scale3d(.97, .97, .97);\r\n  transform: scale3d(.97, .97, .97);\r\n}\r\n100% {\r\n  opacity: 1;\r\n  -webkit-transform: scale3d(1, 1, 1);\r\n  transform: scale3d(1, 1, 1);\r\n}\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../icon/permission/webcam.png */ "./src/icon/permission/webcam.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../icon/permission/microphone.png */ "./src/icon/permission/microphone.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../icon/permission/screen.png */ "./src/icon/permission/screen.png");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../icon/permission/share-files.png */ "./src/icon/permission/share-files.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  font: 14px/20px Impact, Helvetica, Arial, sans-serif;\r\n  color: lime;\r\n  margin: 0;\r\n  padding: 0;\r\n  border:none;\r\n  background-color:black;\r\n  overflow: hidden;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: Impact, Arial;\r\n}\r\n\r\n.hide {\r\n  display:none;\r\n}\r\n\r\ncanvas {\r\n    margin:0 auto;\r\n    font-family: Impact, Helvetica, Arial, sans-serif;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background: #14151f;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    height: 100vmin;\r\n    border-radius: 8px;\r\n    border: solid peru 10px;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n/* Scroll bars */\r\n/* width */\r\n::-webkit-scrollbar {\r\n    width: 20px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey;\r\n    border-radius: 6px;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: silver;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: green;\r\n}\r\n\r\n#msgbox {\r\n  position: absolute;\r\n  top:15%;\r\n  left:30%;\r\n  width: 40%;\r\n  height: 50%;\r\n  text-align: center;\r\n  margin: 0 0 0 0 auto;\r\n  vertical-align: middle;\r\n}\r\n\r\n.log-network {\r\n  position: absolute;\r\n  z-index: 150;\r\n  right: 0%;\r\n  width: 30%;\r\n  height: 100%;\r\n  -webkit-animation-name: autohide; /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */\r\n  animation-name: autohide;\r\n  animation-duration: 2s;\r\n}\r\n\r\n.network-panel-hide-animation {\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-name: rightmove;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-fill-mode: forwards;\r\n  animation-name: rightmove;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.network-panel-show-animation {\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-name: leftmove;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-fill-mode: forwards;\r\n  animation-name: leftmove;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.network-panel-hide-ver-animation {\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-name: goBottom;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-fill-mode: forwards;\r\n  animation-name: goBottom;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.network-panel-show-ver-animation {\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-name: goUp;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-fill-mode: forwards;\r\n  animation-name: goUp;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.message-box {\r\n  position: absolute;\r\n  background: black;\r\n  padding: 20px;\r\n  opacity: 1;\r\n  z-index: 1500000;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-animation-name: autohide; /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */\r\n  animation-name: autohide;\r\n  animation-duration: 2s;\r\n  font-size: normal;\r\n}\r\n\r\n.message-box-content {\r\n  text-align: center;\r\n  font-size: 140%;\r\n}\r\n\r\n.message-box-hide-animation {\r\n  -webkit-animation-name: scaleToCenter;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-name: scaleToCenter;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.message-box-show-animation {\r\n  -webkit-animation-name: scaleFromCenter;\r\n  -webkit-animation-duration: 1.2s;\r\n  animation-name: scaleFromCenter;\r\n  animation-duration: 1.2s;\r\n}\r\n\r\n.message-box-btn {\r\n  text-align: center;\r\n  position: absolute;\r\n  color: #ffffff;\r\n  bottom: 10px;\r\n  font-family: Impact, sans-serif;\r\n  text-transform: uppercase;\r\n  margin-bottom: 10px;\r\n  padding: .75rem;\r\n  display: flow-root;\r\n  width: 100%;\r\n  background-color: rgba(237, 17, 17, 0.75);\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 130%;\r\n}\r\n\r\n.logger {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 5%;\r\n  height: 200px;\r\n  overflow: auto;\r\n}\r\n\r\n.log-chat {\r\n  position: absolute;\r\n  top: 6%;\r\n  height: 89% !important;\r\n  width: 100%;\r\n  overflow: auto;\r\n  opacity: 0.7;\r\n  background: rgba(2,2,222,0.2);\r\n}\r\n\r\n.log-sender {\r\n  position:absolute;\r\n  bottom:10%;\r\n  left:0;\r\n  width:64%;\r\n  z-index: 100;\r\n}\r\n\r\n.textMessageNode {\r\n  word-break: break-all;\r\n}\r\n\r\n.new-message {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.user-info {\r\n  width: auto;\r\n  float: left;\r\n}\r\n\r\n.user-info img {\r\n  padding-top: 1px;\r\n  width: 55px;\r\n  height: 55px;\r\n}\r\n\r\n.whoIsTyping {\r\n  position: absolute;\r\n  left: 45%;\r\n  top: 1%;\r\n  height: 50px;\r\n  overflow: auto;\r\n}\r\n\r\n.webCamView {\r\n  position: absolute;\r\n  background: transparent;\r\n  width: 33%;\r\n  z-index: 20;\r\n  bottom: 0;\r\n}\r\n\r\n.controls {\r\n  margin: auto;\r\n  position: absolute;\r\n  padding-left: 28px;\r\n  right: 0;\r\n  background: transparent;\r\n  width: 111px;\r\n}\r\n\r\n.controls span {\r\n  padding-top: 20px\r\n}\r\n\r\n.icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  vertical-align:bottom !important;\r\n}\r\n\r\n.chatIcon {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n#user-profile-btn-ok {\r\n  position: absolute;\r\n  width: 10%;\r\n  min-width: 200px;\r\n  bottom: 0;\r\n  left: 40%;\r\n  z-index: 1000;\r\n  text-align: center;\r\n}\r\n\r\n.myButton {\r\n\tbackground-color:#d41111;\r\n\tborder:1px solid #9412219b;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#ffffff;\r\n\tfont-family: Impact, Arial;\r\n\tfont-size:17px;\r\n\tpadding:5px 33px;\r\n  text-decoration:none;\r\n  outline: none;\r\n}\r\n.myButton:hover {\r\n  background-color:#ffffff;\r\n  color:#d41111;\r\n}\r\n\r\n.myButtonChat {\r\n\tbackground-color:transparent;\r\n\tborder:1px solid #9412219b;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#ffffff;\r\n\tfont-family: Impact, Arial;\r\n\tfont-size:17px;\r\n\tpadding:5px 33px;\r\n  text-decoration:none;\r\n  outline: none;\r\n}\r\n\r\n.myButtonChat:hover {\r\n  background-color:rgba(123,12,33,0.3);\r\n  color:#d41111;\r\n}\r\n\r\n.myError {\r\n  display: none;\r\n\t-moz-box-shadow: 0px 0px 11px 3px darkred;\r\n\t-webkit-box-shadow: 0px 0px 11px 3px darkred;\r\n\tbox-shadow: 0px 0px 11px 3px darkred;\r\n\tbackground-color:darkred;\r\n\t-moz-border-radius:28px;\r\n\t-webkit-border-radius:28px;\r\n\tborder-radius:28px;\r\n\tborder:1px solid red;\r\n\tcursor:pointer;\r\n\tcolor:lightcoral;\r\n\tfont-family: Impact, Arial;\r\n\tfont-size:17px;\r\n\tpadding:5px 33px;\r\n\ttext-decoration:none;\r\n  text-shadow:0px 1px 8px #14151f;\r\n  width: 100%;\r\n}\r\n.myError:hover {\r\n  background-color:lightcoral;\r\n  color:white;\r\n}\r\n\r\n#allow-webcam {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position-x: center;\r\n  background-position-y: top;\r\n\r\n}\r\n\r\n#allow-mic {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position-x: center;\r\n  background-position-y: top;\r\n}\r\n\r\n#allow-screen {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position-x: center;\r\n  background-position-y: top;\r\n}\r\n\r\n#share-files {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position-x: center;\r\n  background-position-y: top;\r\n}\r\n\r\n/**\r\n  DOM Components CSS\r\n  - register form\r\n  - login form\r\n*/\r\n\r\n.make-center {\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.popup {\r\n  position: absolute;\r\n  margin: 0;\r\n  left : 0;\r\n  top: 0;\r\n  width: 99.5vw;\r\n  height: 100%;\r\n  background-color: rgba(32,112,132,0.5);\r\n  box-shadow: 0 -20px 150px -20px rgba(0, 0, 0, 0.5);\r\n  z-index: 200;\r\n}\r\n\r\n .container {\r\n  display: block;\r\n  position: relative;\r\n  z-index: 0;\r\n  margin: 1rem auto 0;\r\n  padding: 1rem 1rem 1rem 1rem;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  height: auto;\r\n  box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.8);\r\n  border-radius: 20px;\r\n}\r\n\r\nbutton:focus {outline:0;}\r\n\r\n.noselect {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently\r\n                        supported by Chrome and Opera */\r\n}\r\n\r\n.leftPanelUni {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10;\r\n  margin: auto 0;\r\n  padding: 0;\r\n  width: 20%;\r\n  height: 100%;\r\n  box-shadow: 0px 20px 70px -20px rgba(0, 0, 0, 0.8);\r\n  border-radius: 20px;\r\n  font-size: 80%;\r\n}\r\n\r\n.container:after {\r\n  content: '';\r\n  display: inline-block;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-image: radial-gradient(ellipse at left bottom, rgba(134, 9, 9, 1) 0%, rgba(150, 15, 15, 0.9) 60%, rgba(159, 14, 14, 0.9) 100%);\r\n  box-shadow: 0 -20px 150px -20px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.form-app {\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 5% 1% 4% 1%;\r\n  border-bottom: 1px solid rgba(255,255,255, 0.25);\r\n  font-size: x-large;\r\n}\r\n\r\n.form-selectplayer {\r\n  position: relative;\r\n  text-align: center;\r\n  z-index: 1;\r\n  padding: 1% 1% 4% 1%;\r\n  border-bottom: 1px solid rgba(255,255,255, 0.25);\r\n  font-size: x-large;\r\n}\r\n\r\n.nav {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0 0 2em 1rem;\r\n}\r\n\r\n.nav-item {\r\n  list-style: none;\r\n  display: inline-block;\r\n}\r\n\r\n.nav-item + .nav-item{\r\n  margin-left: 2.25rem;\r\n}\r\n\r\n.nav-item a {\r\n  position: relative;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  font-size: 1.25rem;\r\n  padding-bottom: .5rem;\r\n  transition: .20s all ease;\r\n}\r\n\r\n.nav-item.active a, .nav-item a:hover{\r\n  color: #FFFFFF;\r\n  transition: .15s all ease;\r\n}\r\n\r\n.nav-item a:after{\r\n  content: '';\r\n  display: inline-block;\r\n  height: 10px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: absolute;\r\n  right: 100%;\r\n  bottom: -1px;\r\n  left: 0;\r\n  border-radius: 50%;\r\n  transition: .15s all ease;\r\n}\r\n\r\n.nav-item a:hover:after, .nav-item.active a:after{\r\n  background-color: rgb(208, 183, 181);\r\n  height: 2px;\r\n  right: 0;\r\n  bottom: 2px;\r\n  border-radius: 0;\r\n  transition: .20s all ease;\r\n}\r\n\r\n.form-label, .form-checkbox-label{\r\n  color: rgba(255, 255, 255, 0.5);\r\n  text-transform: uppercase;\r\n  font-size: .75rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-checkbox-label{\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-left: 1rem;\r\n  color: #FFFFFF;\r\n  font-size: .75rem;\r\n  text-transform: inherit;\r\n}\r\n\r\n.form-input-text{\r\n  color: white;\r\n  font-size: 1.15rem;\r\n  width: 100%;\r\n  padding: .5rem 1rem;\r\n  border: 2px solid transparent;\r\n  outline: none;\r\n  border-radius: 0.2rem;\r\n  background-color: rgb(169, 11, 13);\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.form-input-text:hover,\r\n.form-input-text:focus{\r\n\tcolor: white;\r\n\tborder: 2px solid rgba(255, 255, 255, 0.5);\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.form-input-text + .form-label {\r\n\tmargin-top: 1.5rem;\r\n}\r\n\r\n.form-input-checkbox {\r\n\tposition: absolute;\r\n\ttop: .1rem;\r\n\tleft: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n.login-button {\r\n\tcolor: #ffffff;\r\n\tfont-size: 18px;\r\n\tfont-family: Impact, sans-serif;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tmargin-top: 1rem;\r\n\tpadding: .75rem;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(237, 17, 17, 0.75);\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.login-button:hover {\r\n\tbackground-color: rgba(237, 17, 17, 1);\r\n}\r\n\r\n.link {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n  color:white;\r\n  background-color: rgba(237, 17, 17, 0.75);\r\n\tfont-size: 16px;\r\n\ttext-decoration: none;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.link:disabled {\r\n  background: #462d2d;\r\n}\r\n\r\n.link:hover {\r\n\tbackground-color: rgba(237, 17, 17, 1);\r\n}\r\n\r\n.link:hover:disabled {\r\n  background: #4b2323;\r\n}\r\n\r\n.selectPlayerItemBox {\r\n  margin-top: 5%;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/**
* matter-js 0.14.2 by @liabru 2018-06-11
* http://brm.io/matter-js/
* License MIT
*/

/**
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Sleeping = _dereq_('../core/Sleeping');
var Render = _dereq_('../render/Render');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');
var Axes = _dereq_('../geometry/Axes');

(function() {

    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                },
                lineWidth: 0
            }
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#2e2b44' : Common.choose(['#006BA6', '#0496FF', '#FFBC42', '#D81159', '#8F2D56'])),
            defaultStrokeStyle = '#000';
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            value = settings[property];

            if (!settings.hasOwnProperty(property))
                continue;

            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                delete part._original;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia (i.e. second moment of area) of the body of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */
    Body.setPosition = function(body, position) {
        var delta = Vector.sub(position, body.position);
        body.positionPrev.x += delta.x;
        body.positionPrev.y += delta.y;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */
    Body.setAngle = function(body, angle) {
        var delta = angle - body.angle;
        body.anglePrev += delta;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        body.positionPrev.x = body.position.x - velocity.x;
        body.positionPrev.y = body.position.y - velocity.y;
        body.velocity.x = velocity.x;
        body.velocity.y = velocity.y;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        body.anglePrev = body.angle - velocity;
        body.angularVelocity = velocity;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */
    Body.translate = function(body, translation) {
        Body.setPosition(body, Vector.add(body.position, translation));
    };

    /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */
    Body.rotate = function(body, rotation, point) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.setAngle(body, body.angle + rotation);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */
    Body.update = function(body, deltaTime, timeScale, correction) {
        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

        // from the previous step
        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
            velocityPrevX = body.position.x - body.positionPrev.x,
            velocityPrevY = body.position.y - body.positionPrev.y;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // track speed and acceleration
        body.speed = Vector.magnitude(body.velocity);
        body.angularSpeed = Math.abs(body.angularVelocity);

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        body.force.x += force.x;
        body.force.y += force.y;
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */

    /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */

    /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */

    /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */

    /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

     /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

     /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */
     
    /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */

})();

},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31}],2:[function(_dereq_,module,exports){
/**
* The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
* A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
* It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
* Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = _dereq_('../core/Events');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');
var Body = _dereq_('./Body');

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {}
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for(var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic add function. Adds one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {} object
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
            Composite.setModified(compositeA, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
            Composite.setModified(composite, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;
        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
                        .concat(Composite.allConstraints(composite))
                        .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * Most `Matter.Composite` methods will automatically set this flag to `true` to inform the engine of changes to be handled.
     * If you need to change it manually, you should use the `Composite.setModified` method.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../core/Common":14,"../core/Events":16,"../geometry/Bounds":26,"./Body":1}],3:[function(_dereq_,module,exports){
/**
* The `Matter.World` module contains methods for creating and manipulating the world composite.
* A `Matter.World` is a `Matter.Composite` body, which is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`.
* A `Matter.World` has a few additional properties including `gravity` and `bounds`.
* It is important to use the functions in the `Matter.Composite` module to modify the world composite, rather than directly modifying its properties.
* There are also a few methods here that alias those in `Matter.Composite` for easier readability.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class World
* @extends Composite
*/

var World = {};

module.exports = World;

var Composite = _dereq_('./Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new world composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @constructor
     * @param {} options
     * @return {world} A new world
     */
    World.create = function(options) {
        var composite = Composite.create();

        var defaults = {
            label: 'World',
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            bounds: { 
                min: { x: -Infinity, y: -Infinity }, 
                max: { x: Infinity, y: Infinity } 
            }
        };
        
        return Common.extend(composite, defaults, options);
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The gravity to apply on the world.
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

    /**
     * A `Bounds` object that defines the world bounds for collision detection.
     *
     * @property bounds
     * @type bounds
     * @default { min: { x: -Infinity, y: -Infinity }, max: { x: Infinity, y: Infinity } }
     */

    // World is a Composite body
    // see src/module/Outro.js for these aliases:
    
    /**
     * An alias for Composite.add
     * @method add
     * @param {world} world
     * @param {} object
     * @return {composite} The original world with the objects added
     */

    /**
     * An alias for Composite.remove
     * @method remove
     * @param {world} world
     * @param {} object
     * @param {boolean} [deep=false]
     * @return {composite} The original world with the objects removed
     */

    /**
     * An alias for Composite.clear
     * @method clear
     * @param {world} world
     * @param {boolean} keepStatic
     */

    /**
     * An alias for Composite.addComposite
     * @method addComposite
     * @param {world} world
     * @param {composite} composite
     * @return {world} The original world with the objects from composite added
     */
    
     /**
      * An alias for Composite.addBody
      * @method addBody
      * @param {world} world
      * @param {body} body
      * @return {world} The original world with the body added
      */

     /**
      * An alias for Composite.addConstraint
      * @method addConstraint
      * @param {world} world
      * @param {constraint} constraint
      * @return {world} The original world with the constraint added
      */

})();

},{"../constraint/Constraint":12,"../core/Common":14,"./Composite":2}],4:[function(_dereq_,module,exports){
/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            id: Contact.id(vertex),
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };
    
    /**
     * Generates a contact id.
     * @method id
     * @param {vertex} vertex
     * @return {string} Unique contactID
     */
    Contact.id = function(vertex) {
        return vertex.body.id + '_' + vertex.index;
    };

})();

},{}],5:[function(_dereq_,module,exports){
/**
* The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
*
* @class Detector
*/

// TODO: speculative contacts

var Detector = {};

module.exports = Detector;

var SAT = _dereq_('./SAT');
var Pair = _dereq_('./Pair');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    /**
     * Finds all collisions given a list of pairs.
     * @method collisions
     * @param {pair[]} broadphasePairs
     * @param {engine} engine
     * @return {array} collisions
     */
    Detector.collisions = function(broadphasePairs, engine) {
        var collisions = [],
            pairsTable = engine.pairs.table;

        
        for (var i = 0; i < broadphasePairs.length; i++) {
            var bodyA = broadphasePairs[i][0], 
                bodyB = broadphasePairs[i][1];

            if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping))
                continue;
            
            if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter))
                continue;


            // mid phase
            if (Bounds.overlaps(bodyA.bounds, bodyB.bounds)) {
                for (var j = bodyA.parts.length > 1 ? 1 : 0; j < bodyA.parts.length; j++) {
                    var partA = bodyA.parts[j];

                    for (var k = bodyB.parts.length > 1 ? 1 : 0; k < bodyB.parts.length; k++) {
                        var partB = bodyB.parts[k];

                        if ((partA === bodyA && partB === bodyB) || Bounds.overlaps(partA.bounds, partB.bounds)) {
                            // find a previous collision we could reuse
                            var pairId = Pair.id(partA, partB),
                                pair = pairsTable[pairId],
                                previousCollision;

                            if (pair && pair.isActive) {
                                previousCollision = pair.collision;
                            } else {
                                previousCollision = null;
                            }

                            // narrow phase
                            var collision = SAT.collides(partA, partB, previousCollision);


                            if (collision.collided) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

})();

},{"../geometry/Bounds":26,"./Pair":7,"./SAT":11}],6:[function(_dereq_,module,exports){
/**
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
*/

var Grid = {};

module.exports = Grid;

var Pair = _dereq_('./Pair');
var Detector = _dereq_('./Detector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new grid.
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            controller: Grid,
            detector: Detector.collisions,
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;


        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // don't update out of world bodies
            if (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {


                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    /**
     * Clears the grid.
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        // add new pairs
        for (var i = 0; i < bucket.length; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair) {
                pair[2] += 1;
            } else {
                grid.pairs[pairId] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        // update pair counts
        for (var i = 0; i < bucket.length; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var bodyB = bucket[i],
                pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pairKeys,
            pair,
            pairs = [];

        // grid.pairs is used as a hashmap
        pairKeys = Common.keys(grid.pairs);

        // iterate over grid.pairs
        for (var k = 0; k < pairKeys.length; k++) {
            pair = grid.pairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete grid.pairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();

},{"../core/Common":14,"./Detector":5,"./Pair":7}],7:[function(_dereq_,module,exports){
/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = _dereq_('./Contact');

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB,
            parentA = collision.parentA,
            parentB = collision.parentB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            contacts: {},
            activeContacts: [],
            separation: 0,
            isActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: parentA.inverseMass + parentB.inverseMass,
            friction: Math.min(parentA.friction, parentB.friction),
            frictionStatic: Math.max(parentA.frictionStatic, parentB.frictionStatic),
            restitution: Math.max(parentA.restitution, parentB.restitution),
            slop: Math.max(parentA.slop, parentB.slop)
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB;
        
        pair.collision = collision;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = Math.min(parentA.friction, parentB.friction);
        pair.frictionStatic = Math.max(parentA.frictionStatic, parentB.frictionStatic);
        pair.restitution = Math.max(parentA.restitution, parentB.restitution);
        pair.slop = Math.max(parentA.slop, parentB.slop);
        activeContacts.length = 0;
        
        if (collision.collided) {
            for (var i = 0; i < supports.length; i++) {
                var support = supports[i],
                    contactId = Contact.id(support),
                    contact = contacts[contactId];

                if (contact) {
                    activeContacts.push(contact);
                } else {
                    activeContacts.push(contacts[contactId] = Contact.create(support));
                }
            }

            pair.separation = collision.depth;
            Pair.setActive(pair, true, timestamp);
        } else {
            if (pair.isActive === true)
                Pair.setActive(pair, false, timestamp);
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();

},{"./Contact":4}],8:[function(_dereq_,module,exports){
/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = _dereq_('./Pair');
var Common = _dereq_('../core/Common');

(function() {
    
    Pairs._pairMaxIdleLife = 1000;

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            activePairIds = [],
            collision,
            pairId,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < collisions.length; i++) {
            collision = collisions[i];

            if (collision.collided) {
                pairId = Pair.id(collision.bodyA, collision.bodyB);
                activePairIds.push(pairId);

                pair = pairsTable[pairId];
                
                if (pair) {
                    // pair already exists (but may or may not be active)
                    if (pair.isActive) {
                        // pair exists and is active
                        collisionActive.push(pair);
                    } else {
                        // pair exists but was inactive, so a collision has just started again
                        collisionStart.push(pair);
                    }

                    // update the pair
                    Pair.update(pair, collision, timestamp);
                } else {
                    // pair did not exist, create a new pair
                    pair = Pair.create(collision, timestamp);
                    pairsTable[pairId] = pair;

                    // push the new pair
                    collisionStart.push(pair);
                    pairsList.push(pair);
                }
            }
        }

        // deactivate previously active pairs that are now inactive
        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            if (pair.isActive && Common.indexOf(activePairIds, pair.id) === -1) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);
            }
        }
    };
    
    /**
     * Finds and removes pairs that have been inactive for a set amount of time.
     * @method removeOld
     * @param {object} pairs
     * @param {number} timestamp
     */
    Pairs.removeOld = function(pairs, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            indexesToRemove = [],
            pair,
            collision,
            pairIndex,
            i;

        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            collision = pair.collision;
            
            // never remove sleeping pairs
            if (collision.bodyA.isSleeping || collision.bodyB.isSleeping) {
                pair.timeUpdated = timestamp;
                continue;
            }

            // if pair is inactive for too long, mark it to be removed
            if (timestamp - pair.timeUpdated > Pairs._pairMaxIdleLife) {
                indexesToRemove.push(i);
            }
        }

        // remove marked pairs
        for (i = 0; i < indexesToRemove.length; i++) {
            pairIndex = indexesToRemove[i] - i;
            pair = pairsList[pairIndex];
            delete pairsTable[pair.id];
            pairsList.splice(pairIndex, 1);
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();

},{"../core/Common":14,"./Pair":7}],9:[function(_dereq_,module,exports){
/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = _dereq_('../geometry/Vector');
var SAT = _dereq_('./SAT');
var Bounds = _dereq_('../geometry/Bounds');
var Bodies = _dereq_('../factory/Bodies');
var Vertices = _dereq_('../geometry/Vertices');

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {object[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [];

        for (var i = 0; i < bodies.length; i++) {
            var bodyA = bodies[i];
            
            if (Bounds.overlaps(bodyA.bounds, body.bounds)) {
                for (var j = bodyA.parts.length === 1 ? 0 : 1; j < bodyA.parts.length; j++) {
                    var part = bodyA.parts[j];

                    if (Bounds.overlaps(part.bounds, body.bounds)) {
                        var collision = SAT.collides(part, body);

                        if (collision.collided) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {object[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();

},{"../factory/Bodies":23,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29,"./SAT":11}],10:[function(_dereq_,module,exports){
/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    Resolver._restingThresh = 4;
    Resolver._restingThreshTangent = 6;
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount;

        // find total contacts on each body
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solvePosition = function(pairs, timeScale) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            bodyBtoA,
            contactShare,
            positionImpulse,
            contactCount = {},
            tempA = Vector._temp[0],
            tempB = Vector._temp[1],
            tempC = Vector._temp[2],
            tempD = Vector._temp[3];

        // find impulses required to resolve penetration
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            bodyBtoA = Vector.sub(Vector.add(bodyB.positionImpulse, bodyB.position, tempA), 
                                    Vector.add(bodyA.positionImpulse, 
                                        Vector.sub(bodyB.position, collision.penetration, tempB), tempC), tempD);

            pair.separation = Vector.dot(normal, bodyBtoA);
        }
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = (pair.separation - pair.slop) * timeScale;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset contact count
            body.totalContacts = 0;

            if (body.positionImpulse.x !== 0 || body.positionImpulse.y !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    Vertices.translate(part.vertices, body.positionImpulse);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                    part.position.x += body.positionImpulse.x;
                    part.position.y += body.positionImpulse.y;
                }

                // move the body without changing velocity
                body.positionPrev.x += body.positionImpulse.x;
                body.positionPrev.y += body.positionImpulse.y;

                if (Vector.dot(body.positionImpulse, body.velocity) < 0) {
                    // reset cached impulse if the body has velocity along it
                    body.positionImpulse.x = 0;
                    body.positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    body.positionImpulse.x *= Resolver._positionWarming;
                    body.positionImpulse.y *= Resolver._positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var i,
            j,
            pair,
            contacts,
            collision,
            bodyA,
            bodyB,
            normal,
            tangent,
            contact,
            contactVertex,
            normalImpulse,
            tangentImpulse,
            offset,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1];
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            contacts = pair.activeContacts;
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            tangent = collision.tangent;

            // resolve each contact
            for (j = 0; j < contacts.length; j++) {
                contact = contacts[j];
                contactVertex = contact.vertex;
                normalImpulse = contact.normalImpulse;
                tangentImpulse = contact.tangentImpulse;

                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                    impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyA.position, tempA);
                        bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                        bodyA.anglePrev += Vector.cross(offset, impulse) * bodyA.inverseInertia;
                    }

                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyB.position, tempA);
                        bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                        bodyB.anglePrev -= Vector.cross(offset, impulse) * bodyB.inverseInertia;
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solveVelocity = function(pairs, timeScale) {
        var timeScaleSquared = timeScale * timeScale,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1],
            tempB = Vector._temp[2],
            tempC = Vector._temp[3],
            tempD = Vector._temp[4],
            tempE = Vector._temp[5];
        
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent,
                contacts = pair.activeContacts,
                contactShare = 1 / contacts.length;

            // update body velocities
            bodyA.velocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyA.velocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyB.velocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyB.velocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (var j = 0; j < contacts.length; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    offsetA = Vector.sub(contactVertex, bodyA.position, tempA),
                    offsetB = Vector.sub(contactVertex, bodyB.position, tempB),
                    velocityPointA = Vector.add(bodyA.velocity, Vector.mult(Vector.perp(offsetA), bodyA.angularVelocity), tempC),
                    velocityPointB = Vector.add(bodyB.velocity, Vector.mult(Vector.perp(offsetB), bodyB.angularVelocity), tempD), 
                    relativeVelocity = Vector.sub(velocityPointA, velocityPointB, tempE),
                    normalVelocity = Vector.dot(normal, relativeVelocity);

                var tangentVelocity = Vector.dot(tangent, relativeVelocity),
                    tangentSpeed = Math.abs(tangentVelocity),
                    tangentVelocityDirection = Common.sign(tangentVelocity);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity,
                    normalForce = Common.clamp(pair.separation + normalVelocity, 0, 1) * Resolver._frictionNormalMultiplier;

                // coulomb friction
                var tangentImpulse = tangentVelocity,
                    maxFriction = Infinity;

                if (tangentSpeed > pair.friction * pair.frictionStatic * normalForce * timeScaleSquared) {
                    maxFriction = tangentSpeed;
                    tangentImpulse = Common.clamp(
                        pair.friction * tangentVelocityDirection * timeScaleSquared,
                        -maxFriction, maxFriction
                    );
                }

                // modify impulses accounting for mass, inertia and offset
                var oAcN = Vector.cross(offsetA, normal),
                    oBcN = Vector.cross(offsetB, normal),
                    share = contactShare / (bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * oAcN * oAcN  + bodyB.inverseInertia * oBcN * oBcN);

                normalImpulse *= share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity < 0 && normalVelocity * normalVelocity > Resolver._restingThresh * timeScaleSquared) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse + normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity * tangentVelocity > Resolver._restingThreshTangent * timeScaleSquared) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse = Common.clamp(contact.tangentImpulse + tangentImpulse, -maxFriction, maxFriction);
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                    bodyA.anglePrev += Vector.cross(offsetA, impulse) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                    bodyB.anglePrev -= Vector.cross(offsetB, impulse) * bodyB.inverseInertia;
                }
            }
        }
    };

})();

},{"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],11:[function(_dereq_,module,exports){
/**
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
*/

// TODO: true circles and curves

var SAT = {};

module.exports = SAT;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {collision} previousCollision
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB, previousCollision) {
        var overlapAB,
            overlapBA, 
            minOverlap,
            collision,
            canReusePrevCol = false;

        if (previousCollision) {
            // estimate total motion
            var parentA = bodyA.parent,
                parentB = bodyB.parent,
                motion = parentA.speed * parentA.speed + parentA.angularSpeed * parentA.angularSpeed
                       + parentB.speed * parentB.speed + parentB.angularSpeed * parentB.angularSpeed;

            // we may be able to (partially) reuse collision result 
            // but only safe if collision was resting
            canReusePrevCol = previousCollision && previousCollision.collided && motion < 0.2;

            // reuse collision object
            collision = previousCollision;
        } else {
            collision = { collided: false, bodyA: bodyA, bodyB: bodyB };
        }

        if (previousCollision && canReusePrevCol) {
            // if we can reuse the collision result
            // we only need to test the previously found axis
            var axisBodyA = collision.axisBody,
                axisBodyB = axisBodyA === bodyA ? bodyB : bodyA,
                axes = [axisBodyA.axes[previousCollision.axisNumber]];

            minOverlap = SAT._overlapAxes(axisBodyA.vertices, axisBodyB.vertices, axes);
            collision.reused = true;

            if (minOverlap.overlap <= 0) {
                collision.collided = false;
                return collision;
            }
        } else {
            // if we can't reuse a result, perform a full SAT test

            overlapAB = SAT._overlapAxes(bodyA.vertices, bodyB.vertices, bodyA.axes);

            if (overlapAB.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            overlapBA = SAT._overlapAxes(bodyB.vertices, bodyA.vertices, bodyB.axes);

            if (overlapBA.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            if (overlapAB.overlap < overlapBA.overlap) {
                minOverlap = overlapAB;
                collision.axisBody = bodyA;
            } else {
                minOverlap = overlapBA;
                collision.axisBody = bodyB;
            }

            // important for reuse later
            collision.axisNumber = minOverlap.axisNumber;
        }

        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
        collision.collided = true;
        collision.depth = minOverlap.overlap;
        collision.parentA = collision.bodyA.parent;
        collision.parentB = collision.bodyB.parent;
        
        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        // ensure normal is facing away from bodyA
        if (Vector.dot(minOverlap.axis, Vector.sub(bodyB.position, bodyA.position)) < 0) {
            collision.normal = {
                x: minOverlap.axis.x,
                y: minOverlap.axis.y
            };
        } else {
            collision.normal = {
                x: -minOverlap.axis.x,
                y: -minOverlap.axis.y
            };
        }

        collision.tangent = Vector.perp(collision.normal);

        collision.penetration = collision.penetration || {};
        collision.penetration.x = collision.normal.x * collision.depth;
        collision.penetration.y = collision.normal.y * collision.depth; 

        // find support points, there is always either exactly one or two
        var verticesB = SAT._findSupports(bodyA, bodyB, collision.normal),
            supports = [];

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, verticesB[0]))
            supports.push(verticesB[0]);

        if (Vertices.contains(bodyA.vertices, verticesB[1]))
            supports.push(verticesB[1]);

        // find the supports from bodyA that are inside bodyB
        if (supports.length < 2) {
            var verticesA = SAT._findSupports(bodyB, bodyA, Vector.neg(collision.normal));
                
            if (Vertices.contains(bodyB.vertices, verticesA[0]))
                supports.push(verticesA[0]);

            if (supports.length < 2 && Vertices.contains(bodyB.vertices, verticesA[1]))
                supports.push(verticesA[1]);
        }

        // account for the edge case of overlapping but no vertex containment
        if (supports.length < 1)
            supports = [verticesB[0]];
        
        collision.supports = supports;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {} verticesA
     * @param {} verticesB
     * @param {} axes
     * @return result
     */
    SAT._overlapAxes = function(verticesA, verticesB, axes) {
        var projectionA = Vector._temp[0], 
            projectionB = Vector._temp[1],
            result = { overlap: Number.MAX_VALUE },
            overlap,
            axis;

        for (var i = 0; i < axes.length; i++) {
            axis = axes[i];

            SAT._projectToAxis(projectionA, verticesA, axis);
            SAT._projectToAxis(projectionB, verticesB, axis);

            overlap = Math.min(projectionA.max - projectionB.min, projectionB.max - projectionA.min);

            if (overlap <= 0) {
                result.overlap = overlap;
                return result;
            }

            if (overlap < result.overlap) {
                result.overlap = overlap;
                result.axis = axis;
                result.axisNumber = i;
            }
        }

        return result;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    SAT._projectToAxis = function(projection, vertices, axis) {
        var min = Vector.dot(vertices[0], axis),
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = Vector.dot(vertices[i], axis);

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };
    
    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {} bodyA
     * @param {} bodyB
     * @param {} normal
     * @return [vector]
     */
    SAT._findSupports = function(bodyA, bodyB, normal) {
        var nearestDistance = Number.MAX_VALUE,
            vertexToBody = Vector._temp[0],
            vertices = bodyB.vertices,
            bodyAPosition = bodyA.position,
            distance,
            vertex,
            vertexA,
            vertexB;

        // find closest vertex on bodyB
        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            vertexToBody.x = vertex.x - bodyAPosition.x;
            vertexToBody.y = vertex.y - bodyAPosition.y;
            distance = -Vector.dot(normal, vertexToBody);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertex;
            }
        }

        // find next closest vertex using the two connected to it
        var prevIndex = vertexA.index - 1 >= 0 ? vertexA.index - 1 : vertices.length - 1;
        vertex = vertices[prevIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        nearestDistance = -Vector.dot(normal, vertexToBody);
        vertexB = vertex;

        var nextIndex = (vertexA.index + 1) % vertices.length;
        vertex = vertices[nextIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        distance = -Vector.dot(normal, vertexToBody);
        if (distance < nearestDistance) {
            vertexB = vertex;
        }

        return [vertexA, vertexB];
    };

})();

},{"../geometry/Vector":28,"../geometry/Vertices":29}],12:[function(_dereq_,module,exports){
/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Sleeping = _dereq_('../core/Sleeping');
var Bounds = _dereq_('../geometry/Bounds');
var Axes = _dereq_('../geometry/Axes');
var Common = _dereq_('../core/Common');

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */
    Constraint.solveAll = function(constraints, timeScale) {
        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;

        if (constraint.damping) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],13:[function(_dereq_,module,exports){
/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = _dereq_('../geometry/Vertices');
var Sleeping = _dereq_('../core/Sleeping');
var Mouse = _dereq_('../core/Mouse');
var Events = _dereq_('../core/Events');
var Detector = _dereq_('../collision/Detector');
var Constraint = _dereq_('./Constraint');
var Composite = _dereq_('../body/Composite');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();

},{"../body/Composite":2,"../collision/Detector":5,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../core/Sleeping":22,"../geometry/Bounds":26,"../geometry/Vertices":29,"./Constraint":12}],14:[function(_dereq_,module,exports){
(function (global){
/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());

    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result will be high-resolution including decimal places if available.
     * @method now
     * @return {number} the current timestamp
     */
    Common.now = function() {
        if (window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Used to require external libraries outside of the bundle.
     * It first looks for the `globalName` on the environment's global namespace.
     * If the global is not found, it will fall back to using the standard `require` using the `moduleName`.
     * @private
     * @method _requireGlobal
     * @param {string} globalName The global module name
     * @param {string} moduleName The fallback CommonJS module name
     * @return {} The loaded module
     */
    Common._requireGlobal = function(globalName, moduleName) {
        var obj = (typeof window !== 'undefined' ? window[globalName] : typeof global !== 'undefined' ? global[globalName] : null);
        return obj || _dereq_(moduleName);
    };
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(_dereq_,module,exports){
/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var World = _dereq_('../body/World');
var Sleeping = _dereq_('./Sleeping');
var Resolver = _dereq_('../collision/Resolver');
var Render = _dereq_('../render/Render');
var Pairs = _dereq_('../collision/Pairs');
var Metrics = _dereq_('./Metrics');
var Grid = _dereq_('../collision/Grid');
var Events = _dereq_('./Events');
var Composite = _dereq_('../body/Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('./Common');
var Body = _dereq_('../body/Body');

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(element, options) {
        // options may be passed as the first (and only) argument
        options = Common.isElement(element) ? options : element;
        element = Common.isElement(element) ? element : null;
        options = options || {};

        if (element || options.render) {
            Common.warn('Engine.create: engine.render is deprecated (see docs)');
        }

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            timing: {
                timestamp: 0,
                timeScale: 1
            },
            broadphase: {
                controller: Grid
            }
        };

        var engine = Common.extend(defaults, options);

        // @deprecated
        if (element || engine.render) {
            var renderDefaults = {
                element: element,
                controller: Render
            };
            
            engine.render = Common.extend(renderDefaults, engine.render);
        }

        // @deprecated
        if (engine.render && engine.render.controller) {
            engine.render = engine.render.controller.create(engine.render);
        }

        // @deprecated
        if (engine.render) {
            engine.render.engine = engine;
        }

        engine.world = options.world || World.create(engine.world);
        engine.pairs = Pairs.create();
        engine.broadphase = engine.broadphase.controller.create(engine.broadphase);
        engine.metrics = engine.metrics || { extended: false };


        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */
    Engine.update = function(engine, delta, correction) {
        delta = delta || 1000 / 60;
        correction = correction || 1;

        var world = engine.world,
            timing = engine.timing,
            broadphase = engine.broadphase,
            broadphasePairs = [],
            i;

        // increment timestamp
        timing.timestamp += delta * timing.timeScale;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get lists of all bodies and constraints, no matter what composites they are in
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);


        // if sleeping enabled, call the sleeping controller
        if (engine.enableSleeping)
            Sleeping.update(allBodies, timing.timeScale);

        // applies gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, world.gravity);

        // update all body position and rotation by integration
        Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // broadphase pass: find potential collision pairs
        if (broadphase.controller) {
            // if world is dirty, we must flush the whole grid
            if (world.isModified)
                broadphase.controller.clear(broadphase);

            // update the grid buckets based on current bodies
            broadphase.controller.update(broadphase, allBodies, engine, world.isModified);
            broadphasePairs = broadphase.pairsList;
        } else {
            // if no broadphase set, we just pass all bodies
            broadphasePairs = allBodies;
        }

        // clear all composite modified flags
        if (world.isModified) {
            Composite.setModified(world, false, false, true);
        }

        // narrowphase pass: find actual collisions, then create or update collision pairs
        var collisions = broadphase.detector(broadphasePairs, engine);

        // update collision pairs
        var pairs = engine.pairs,
            timestamp = timing.timestamp;
        Pairs.update(pairs, collisions, timestamp);
        Pairs.removeOld(pairs, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list, timing.timeScale);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, timing.timeScale);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, timing.timeScale);
        }

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });


        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine including the world, pairs and broadphase.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        var world = engine.world;
        
        Pairs.clear(engine.pairs);

        var broadphase = engine.broadphase;
        if (broadphase.controller) {
            var bodies = Composite.allBodies(world);
            broadphase.controller.clear(broadphase);
            broadphase.controller.update(broadphase, bodies, engine, true);
        }
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // apply gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */
    Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, deltaTime, timeScale, correction);
        }
    };

    /**
     * An alias for `Runner.run`, see `Matter.Runner` for more information.
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * An instance of a `Render` controller. The default value is a `Matter.Render` instance created by `Engine.create`.
     * One may also develop a custom renderer module based on `Matter.Render` and pass an instance of it to `Engine.create` via `options.render`.
     *
     * A minimal custom renderer object must define at least three functions: `create`, `clear` and `world` (see `Matter.Render`).
     * It is also possible to instead pass the _module_ reference via `options.render.controller` and `Engine.create` will instantiate one for you.
     *
     * @property render
     * @type render
     * @deprecated see Demo.js for an example of creating a renderer
     * @default a Matter.Render instance
     */

    /**
     * An instance of a broadphase controller. The default value is a `Matter.Grid` instance created by `Engine.create`.
     *
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * A `World` composite object that will contain all simulated bodies and constraints.
     *
     * @property world
     * @type world
     * @default a Matter.World instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Grid":6,"../collision/Pairs":8,"../collision/Resolver":10,"../constraint/Constraint":12,"../render/Render":31,"./Common":14,"./Events":16,"./Metrics":18,"./Sleeping":22}],16:[function(_dereq_,module,exports){
/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = _dereq_('./Common');

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        if (object.events) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = object.events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();

},{"./Common":14}],17:[function(_dereq_,module,exports){
/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = _dereq_('./Plugin');
var Common = _dereq_('./Common');

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version = '0.14.2';

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();

},{"./Common":14,"./Plugin":20}],18:[function(_dereq_,module,exports){

},{"../body/Composite":2,"./Common":14}],19:[function(_dereq_,module,exports){
/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = mouse.element.getAttribute('data-pixel-ratio') || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();

},{"../core/Common":14}],20:[function(_dereq_,module,exports){
/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = _dereq_('./Common');

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var identifiers = range.split('-');
        range = identifiers[0];

        var isRange = isNaN(Number(range[0])),
            version = isRange ? range.substr(1) : range,
            parts = Common.map(version.split('.'), function(part) {
                return Number(part);
            });

        return {
            isRange: isRange,
            version: version,
            range: range,
            operator: isRange ? range[0] : '',
            parts: parts,
            prerelease: identifiers[1],
            number: parts[0] * 1e8 + parts[1] * 1e4 + parts[2]
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var rangeParsed = Plugin.versionParse(range),
            rangeParts = rangeParsed.parts,
            versionParsed = Plugin.versionParse(version),
            versionParts = versionParsed.parts;

        if (rangeParsed.isRange) {
            if (rangeParsed.operator === '*' || version === '*') {
                return true;
            }

            if (rangeParsed.operator === '~') {
                return versionParts[0] === rangeParts[0] && versionParts[1] === rangeParts[1] && versionParts[2] >= rangeParts[2];
            }

            if (rangeParsed.operator === '^') {
                if (rangeParts[0] > 0) {
                    return versionParts[0] === rangeParts[0] && versionParsed.number >= rangeParsed.number;
                }

                if (rangeParts[1] > 0) {
                    return versionParts[1] === rangeParts[1] && versionParts[2] >= rangeParts[2];
                }

                return versionParts[2] === rangeParts[2];
            }
        }

        return version === range || version === '*';
    };

})();

},{"./Common":14}],21:[function(_dereq_,module,exports){
/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = _dereq_('./Events');
var Engine = _dereq_('./Engine');
var Common = _dereq_('./Common');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            correction: 1,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            timeScalePrev: 1,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function render(time){
            runner.frameRequestId = _requestAnimationFrame(render);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Triggers `beforeTick`, `tick` and `afterTick` events on the engine.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            correction = 1,
            delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);
        Events.trigger(engine, 'beforeTick', event); // @deprecated

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);
            
            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // correction for delta
            correction = delta / runner.delta;

            // update engine timing object
            runner.delta = delta;
        }

        // time correction for time scaling
        if (runner.timeScalePrev !== 0)
            correction *= timing.timeScale / runner.timeScalePrev;

        if (timing.timeScale === 0)
            correction = 0;

        runner.timeScalePrev = timing.timeScale;
        runner.correction = correction;

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);
        Events.trigger(engine, 'tick', event); // @deprecated

        // if world has been modified, clear the render scene graph
        if (engine.world.isModified 
            && engine.render
            && engine.render.controller
            && engine.render.controller.clear) {
            engine.render.controller.clear(engine.render); // @deprecated
        }

        // update
        Events.trigger(runner, 'beforeUpdate', event);
        Engine.update(engine, delta, correction);
        Events.trigger(runner, 'afterUpdate', event);

        // render
        // @deprecated
        if (engine.render && engine.render.controller) {
            Events.trigger(runner, 'beforeRender', event);
            Events.trigger(engine, 'beforeRender', event); // @deprecated

            engine.render.controller.world(engine.render);

            Events.trigger(runner, 'afterRender', event);
            Events.trigger(engine, 'afterRender', event); // @deprecated
        }

        Events.trigger(runner, 'afterTick', event);
        Events.trigger(engine, 'afterTick', event); // @deprecated
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    * @deprecated
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    * @deprecated
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();

},{"./Common":14,"./Engine":15,"./Events":16}],22:[function(_dereq_,module,exports){
/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Events = _dereq_('./Events');

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */
    Sleeping.update = function(bodies, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
            
            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Sleeping.afterCollisions = function(pairs, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();

},{"./Events":16}],23:[function(_dereq_,module,exports){
/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = _dereq_('../geometry/Vertices');
var Common = _dereq_('../core/Common');
var Body = _dereq_('../body/Body');
var Bounds = _dereq_('../geometry/Bounds');
var Vector = _dereq_('../geometry/Vector');
var decomp;

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Creates a body using the supplied vertices (or an array containing multiple sets of vertices).
     * If the vertices are convex, they will pass through as supplied.
     * Otherwise if the vertices are concave, they will be decomposed if [poly-decomp.js](https://github.com/schteppe/poly-decomp.js) is available.
     * Note that this process is not guaranteed to support complex sets of vertices (e.g. those with holes may fail).
     * By default the decomposition will discard collinear edges (to improve performance).
     * It can also optionally discard any parts that have an area less than `minimumArea`.
     * If the vertices can not be decomposed, the result will fall back to using the convex hull.
     * The options parameter is an object that specifies any `Matter.Body` properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param [[vector]] vertexSets
     * @param {object} [options]
     * @param {bool} [flagInternal=false]
     * @param {number} [removeCollinear=0.01]
     * @param {number} [minimumArea=10]
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea) {
        if (!decomp) {
            decomp = Common._requireGlobal('decomp', 'poly-decomp');
        }

        var body,
            parts,
            isConvex,
            vertices,
            i,
            j,
            k,
            v,
            z;

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;

        if (!decomp) {
            Common.warn('Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull.');
        }

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);

            if (isConvex || !decomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();

},{"../body/Body":1,"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],24:[function(_dereq_,module,exports){
/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = _dereq_('../body/Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('../core/Common');
var Body = _dereq_('../body/Body');
var Bodies = _dereq_('./Bodies');

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * Creates a composite with a Newton's Cradle setup of bodies and constraints.
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                            { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };
    
    /**
     * Creates a composite with simple car setup of bodies and constraints.
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    /**
     * Creates a simple soft body like object.
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

})();

},{"../body/Body":1,"../body/Composite":2,"../constraint/Constraint":12,"../core/Common":14,"./Bodies":23}],25:[function(_dereq_,module,exports){
/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();

},{"../core/Common":14,"../geometry/Vector":28}],26:[function(_dereq_,module,exports){
/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();

},{}],27:[function(_dereq_,module,exports){
/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = _dereq_('../geometry/Bounds');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();
},{"../core/Common":14,"../geometry/Bounds":26}],28:[function(_dereq_,module,exports){
/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();
},{}],29:[function(_dereq_,module,exports){
/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        var i;
        if (scalar) {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x * scalar;
                vertices[i].y += vector.y * scalar;
            }
        } else {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x;
                vertices[i].y += vector.y;
            }
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                dx = vertice.x - point.x,
                dy = vertice.y - point.y;
                
            vertice.x = point.x + (dx * cos - dy * sin);
            vertice.y = point.y + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                nextVertice = vertices[(i + 1) % vertices.length];
            if ((point.x - vertice.x) * (nextVertice.y - vertice.y) + (point.y - vertice.y) * (vertice.x - nextVertice.x) > 0) {
                return false;
            }
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();

},{"../core/Common":14,"../geometry/Vector":28}],30:[function(_dereq_,module,exports){
var Matter = module.exports = _dereq_('../core/Matter');

Matter.Body = _dereq_('../body/Body');
Matter.Composite = _dereq_('../body/Composite');
Matter.World = _dereq_('../body/World');

Matter.Contact = _dereq_('../collision/Contact');
Matter.Detector = _dereq_('../collision/Detector');
Matter.Grid = _dereq_('../collision/Grid');
Matter.Pairs = _dereq_('../collision/Pairs');
Matter.Pair = _dereq_('../collision/Pair');
Matter.Query = _dereq_('../collision/Query');
Matter.Resolver = _dereq_('../collision/Resolver');
Matter.SAT = _dereq_('../collision/SAT');

Matter.Constraint = _dereq_('../constraint/Constraint');
Matter.MouseConstraint = _dereq_('../constraint/MouseConstraint');

Matter.Common = _dereq_('../core/Common');
Matter.Engine = _dereq_('../core/Engine');
Matter.Events = _dereq_('../core/Events');
Matter.Mouse = _dereq_('../core/Mouse');
Matter.Runner = _dereq_('../core/Runner');
Matter.Sleeping = _dereq_('../core/Sleeping');
Matter.Plugin = _dereq_('../core/Plugin');


Matter.Bodies = _dereq_('../factory/Bodies');
Matter.Composites = _dereq_('../factory/Composites');

Matter.Axes = _dereq_('../geometry/Axes');
Matter.Bounds = _dereq_('../geometry/Bounds');
Matter.Svg = _dereq_('../geometry/Svg');
Matter.Vector = _dereq_('../geometry/Vector');
Matter.Vertices = _dereq_('../geometry/Vertices');

Matter.Render = _dereq_('../render/Render');
Matter.RenderPixi = _dereq_('../render/RenderPixi');

// aliases

Matter.World.add = Matter.Composite.add;
Matter.World.remove = Matter.Composite.remove;
Matter.World.addComposite = Matter.Composite.addComposite;
Matter.World.addBody = Matter.Composite.addBody;
Matter.World.addConstraint = Matter.Composite.addConstraint;
Matter.World.clear = Matter.Composite.clear;
Matter.Engine.run = Matter.Runner.run;

},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Contact":4,"../collision/Detector":5,"../collision/Grid":6,"../collision/Pair":7,"../collision/Pairs":8,"../collision/Query":9,"../collision/Resolver":10,"../collision/SAT":11,"../constraint/Constraint":12,"../constraint/MouseConstraint":13,"../core/Common":14,"../core/Engine":15,"../core/Events":16,"../core/Matter":17,"../core/Metrics":18,"../core/Mouse":19,"../core/Plugin":20,"../core/Runner":21,"../core/Sleeping":22,"../factory/Bodies":23,"../factory/Composites":24,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Svg":27,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31,"../render/RenderPixi":32}],31:[function(_dereq_,module,exports){
/**
* The `Matter.Render` module is a simple HTML5 canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Common = _dereq_('../core/Common');
var Composite = _dereq_('../body/Composite');
var Bounds = _dereq_('../geometry/Bounds');
var Events = _dereq_('../core/Events');
var Grid = _dereq_('../collision/Grid');
var Vector = _dereq_('../geometry/Vector');
var Mouse = _dereq_('../core/Mouse');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            controller: Render,
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#18181d',
                wireframeBackground: '#0f0f13',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else if (!render.canvas.parentNode) {
            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            Render.world(render);
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
        render.context.scale(pixelRatio, pixelRatio);
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.scale(1 / boundsScaleX, 1 / boundsScaleY);
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render) {
        var engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.showBroadphase && engine.broadphase.controller === Grid)
            Render.grid(render, engine.broadphase, context);

        if (options.showDebug)
            Render.debug(render, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);
    };

    /**
     * Description
     * @private
     * @method debug
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.debug = function(render, context) {
        var c = context,
            engine = render.engine,
            world = engine.world,
            metrics = engine.metrics,
            options = render.options,
            bodies = Composite.allBodies(world),
            space = "    ";

        if (engine.timing.timestamp - (render.debugTimestamp || 0) >= 500) {
            var text = "";

            if (metrics.timing) {
                text += "fps: " + Math.round(metrics.timing.fps) + space;
            }


            render.debugString = text;
            render.debugTimestamp = engine.timing.timestamp;
        }

        if (render.debugString) {
            c.font = "12px Arial";

            if (options.wireframes) {
                c.fillStyle = 'rgba(255,255,255,0.5)';
            } else {
                c.fillStyle = 'rgba(0,0,0,0.5)';
            }

            var split = render.debugString.split('\n');

            for (var i = 0; i < split.length; i++) {
                c.fillText(split[i], 50, 50 + i * 18);
            }
        }
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodyShadows
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyShadows = function(render, bodies, context) {
        var c = context,
            engine = render.engine;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            if (body.circleRadius) {
                c.beginPath();
                c.arc(body.position.x, body.position.y, body.circleRadius, 0, 2 * Math.PI);
                c.closePath();
            } else {
                c.beginPath();
                c.moveTo(body.vertices[0].x, body.vertices[0].y);
                for (var j = 1; j < body.vertices.length; j++) {
                    c.lineTo(body.vertices[j].x, body.vertices[j].y);
                }
                c.closePath();
            }

            var distanceX = body.position.x - render.options.width * 0.5,
                distanceY = body.position.y - render.options.height * 0.2,
                distance = Math.abs(distanceX) + Math.abs(distanceY);

            c.shadowColor = 'rgba(0,0,0,0.15)';
            c.shadowOffsetX = 0.05 * distanceX;
            c.shadowOffsetY = 0.05 * distanceY;
            c.shadowBlur = 1 + 12 * Math.min(1, distance / 1000);

            c.fill();

            c.shadowColor = null;
            c.shadowOffsetX = null;
            c.shadowOffsetY = null;
            c.shadowBlur = null;
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                                 (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method grid
     * @param {render} render
     * @param {grid} grid
     * @param {RenderingContext} context
     */
    Render.grid = function(render, grid, context) {
        var c = context,
            options = render.options;

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,180,0,0.1)';
        } else {
            c.strokeStyle = 'rgba(255,180,0,0.5)';
        }

        c.beginPath();

        var bucketKeys = Common.keys(grid.buckets);

        for (var i = 0; i < bucketKeys.length; i++) {
            var bucketId = bucketKeys[i];

            if (grid.buckets[bucketId].length < 2)
                continue;

            var region = bucketId.split(/C|R/);
            c.rect(0.5 + parseInt(region[1], 10) * grid.bucketWidth,
                    0.5 + parseInt(region[2], 10) * grid.bucketHeight,
                    grid.bucketWidth,
                    grid.bucketHeight);
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                             Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                         Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Description
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

})();

},{"../body/Composite":2,"../collision/Grid":6,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../geometry/Bounds":26,"../geometry/Vector":28}],32:[function(_dereq_,module,exports){
/**
* The `Matter.RenderPixi` module is an example renderer using pixi.js.
* See also `Matter.Render` for a canvas based renderer.
*
* @class RenderPixi
* @deprecated the Matter.RenderPixi module will soon be removed from the Matter.js core.
* It will likely be moved to its own repository (but maintenance will be limited).
*/

var RenderPixi = {};

module.exports = RenderPixi;

var Bounds = _dereq_('../geometry/Bounds');
var Composite = _dereq_('../body/Composite');
var Common = _dereq_('../core/Common');
var Events = _dereq_('../core/Events');
var Vector = _dereq_('../geometry/Vector');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }
    
    /**
     * Creates a new Pixi.js WebGL renderer
     * @method create
     * @param {object} options
     * @return {RenderPixi} A new renderer
     * @deprecated
     */
    RenderPixi.create = function(options) {
        Common.warn('RenderPixi.create: Matter.RenderPixi is deprecated (see docs)');

        var defaults = {
            controller: RenderPixi,
            engine: null,
            element: null,
            frameRequestId: null,
            canvas: null,
            renderer: null,
            container: null,
            spriteContainer: null,
            pixiOptions: null,
            options: {
                width: 800,
                height: 600,
                background: '#fafafa',
                wireframeBackground: '#222',
                hasBounds: false,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false
            }
        };

        var render = Common.extend(defaults, options),
            transparent = !render.options.wireframes && render.options.background === 'transparent';

        // init pixi
        render.pixiOptions = render.pixiOptions || {
            view: render.canvas,
            transparent: transparent,
            antialias: true,
            backgroundColor: options.background
        };

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.renderer = render.renderer || new PIXI.WebGLRenderer(render.options.width, render.options.height, render.pixiOptions);
        render.container = render.container || new PIXI.Container();
        render.spriteContainer = render.spriteContainer || new PIXI.Container();
        render.canvas = render.canvas || render.renderer.view;
        render.bounds = render.bounds || { 
            min: {
                x: 0,
                y: 0
            }, 
            max: { 
                x: render.options.width,
                y: render.options.height
            }
        };

        // event listeners
        Events.on(render.engine, 'beforeUpdate', function() {
            RenderPixi.clear(render);
        });

        // caches
        render.textures = {};
        render.sprites = {};
        render.primitives = {};

        // use a sprite batch for performance
        render.container.addChild(render.spriteContainer);

        // insert canvas
        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else {
            Common.warn('No "render.element" passed, "render.canvas" was not inserted into document.');
        }

        // prevent menus on canvas
        render.canvas.oncontextmenu = function() { return false; };
        render.canvas.onselectstart = function() { return false; };

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     * @deprecated
     */
    RenderPixi.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            RenderPixi.world(render);
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     * @deprecated
     */
    RenderPixi.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Clears the scene graph
     * @method clear
     * @param {RenderPixi} render
     * @deprecated
     */
    RenderPixi.clear = function(render) {
        var container = render.container,
            spriteContainer = render.spriteContainer;

        // clear stage container
        while (container.children[0]) { 
            container.removeChild(container.children[0]); 
        }

        // clear sprite batch
        while (spriteContainer.children[0]) { 
            spriteContainer.removeChild(spriteContainer.children[0]); 
        }

        var bgSprite = render.sprites['bg-0'];

        // clear caches
        render.textures = {};
        render.sprites = {};
        render.primitives = {};

        // set background sprite
        render.sprites['bg-0'] = bgSprite;
        if (bgSprite)
            container.addChildAt(bgSprite, 0);

        // add sprite batch back into container
        render.container.addChild(render.spriteContainer);

        // reset background state
        render.currentBackground = null;

        // reset bounds transforms
        container.scale.set(1, 1);
        container.position.set(0, 0);
    };

    /**
     * Sets the background of the canvas 
     * @method setBackground
     * @param {RenderPixi} render
     * @param {string} background
     * @deprecated
     */
    RenderPixi.setBackground = function(render, background) {
        if (render.currentBackground !== background) {
            var isColor = background.indexOf && background.indexOf('#') !== -1,
                bgSprite = render.sprites['bg-0'];

            if (isColor) {
                // if solid background color
                var color = Common.colorToNumber(background);
                render.renderer.backgroundColor = color;

                // remove background sprite if existing
                if (bgSprite)
                    render.container.removeChild(bgSprite); 
            } else {
                // initialise background sprite if needed
                if (!bgSprite) {
                    var texture = _getTexture(render, background);

                    bgSprite = render.sprites['bg-0'] = new PIXI.Sprite(texture);
                    bgSprite.position.x = 0;
                    bgSprite.position.y = 0;
                    render.container.addChildAt(bgSprite, 0);
                }
            }

            render.currentBackground = background;
        }
    };

    /**
     * Description
     * @method world
     * @param {engine} engine
     * @deprecated
     */
    RenderPixi.world = function(render) {
        var engine = render.engine,
            world = engine.world,
            renderer = render.renderer,
            container = render.container,
            options = render.options,
            bodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            constraints = [],
            i;

        if (options.wireframes) {
            RenderPixi.setBackground(render, options.wireframeBackground);
        } else {
            RenderPixi.setBackground(render, options.background);
        }

        // handle bounds
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        if (options.hasBounds) {
            // Hide bodies that are not in view
            for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                body.render.sprite.visible = Bounds.overlaps(body.bounds, render.bounds);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            container.scale.set(1 / boundsScaleX, 1 / boundsScaleY);
            container.position.set(-render.bounds.min.x * (1 / boundsScaleX), -render.bounds.min.y * (1 / boundsScaleY));
        } else {
            constraints = allConstraints;
        }

        for (i = 0; i < bodies.length; i++)
            RenderPixi.body(render, bodies[i]);

        for (i = 0; i < constraints.length; i++)
            RenderPixi.constraint(render, constraints[i]);

        renderer.render(container);
    };


    /**
     * Description
     * @method constraint
     * @param {engine} engine
     * @param {constraint} constraint
     * @deprecated
     */
    RenderPixi.constraint = function(render, constraint) {
        var engine = render.engine,
            bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB,
            container = render.container,
            constraintRender = constraint.render,
            primitiveId = 'c-' + constraint.id,
            primitive = render.primitives[primitiveId];

        // initialise constraint primitive if not existing
        if (!primitive)
            primitive = render.primitives[primitiveId] = new PIXI.Graphics();

        // don't render if constraint does not have two end points
        if (!constraintRender.visible || !constraint.pointA || !constraint.pointB) {
            primitive.clear();
            return;
        }

        // add to scene graph if not already there
        if (Common.indexOf(container.children, primitive) === -1)
            container.addChild(primitive);

        // render the constraint on every update, since they can change dynamically
        primitive.clear();
        primitive.beginFill(0, 0);
        primitive.lineStyle(constraintRender.lineWidth, Common.colorToNumber(constraintRender.strokeStyle), 1);
        
        if (bodyA) {
            primitive.moveTo(bodyA.position.x + pointA.x, bodyA.position.y + pointA.y);
        } else {
            primitive.moveTo(pointA.x, pointA.y);
        }

        if (bodyB) {
            primitive.lineTo(bodyB.position.x + pointB.x, bodyB.position.y + pointB.y);
        } else {
            primitive.lineTo(pointB.x, pointB.y);
        }

        primitive.endFill();
    };
    
    /**
     * Description
     * @method body
     * @param {engine} engine
     * @param {body} body
     * @deprecated
     */
    RenderPixi.body = function(render, body) {
        var engine = render.engine,
            bodyRender = body.render;

        if (!bodyRender.visible)
            return;

        if (bodyRender.sprite && bodyRender.sprite.texture) {
            var spriteId = 'b-' + body.id,
                sprite = render.sprites[spriteId],
                spriteContainer = render.spriteContainer;

            // initialise body sprite if not existing
            if (!sprite)
                sprite = render.sprites[spriteId] = _createBodySprite(render, body);

            // add to scene graph if not already there
            if (Common.indexOf(spriteContainer.children, sprite) === -1)
                spriteContainer.addChild(sprite);

            // update body sprite
            sprite.position.x = body.position.x;
            sprite.position.y = body.position.y;
            sprite.rotation = body.angle;
            sprite.scale.x = bodyRender.sprite.xScale || 1;
            sprite.scale.y = bodyRender.sprite.yScale || 1;
        } else {
            var primitiveId = 'b-' + body.id,
                primitive = render.primitives[primitiveId],
                container = render.container;

            // initialise body primitive if not existing
            if (!primitive) {
                primitive = render.primitives[primitiveId] = _createBodyPrimitive(render, body);
                primitive.initialAngle = body.angle;
            }

            // add to scene graph if not already there
            if (Common.indexOf(container.children, primitive) === -1)
                container.addChild(primitive);

            // update body primitive
            primitive.position.x = body.position.x;
            primitive.position.y = body.position.y;
            primitive.rotation = body.angle - primitive.initialAngle;
        }
    };

    /**
     * Creates a body sprite
     * @method _createBodySprite
     * @private
     * @param {RenderPixi} render
     * @param {body} body
     * @return {PIXI.Sprite} sprite
     * @deprecated
     */
    var _createBodySprite = function(render, body) {
        var bodyRender = body.render,
            texturePath = bodyRender.sprite.texture,
            texture = _getTexture(render, texturePath),
            sprite = new PIXI.Sprite(texture);

        sprite.anchor.x = body.render.sprite.xOffset;
        sprite.anchor.y = body.render.sprite.yOffset;

        return sprite;
    };

    /**
     * Creates a body primitive
     * @method _createBodyPrimitive
     * @private
     * @param {RenderPixi} render
     * @param {body} body
     * @return {PIXI.Graphics} graphics
     * @deprecated
     */
    var _createBodyPrimitive = function(render, body) {
        var bodyRender = body.render,
            options = render.options,
            primitive = new PIXI.Graphics(),
            fillStyle = Common.colorToNumber(bodyRender.fillStyle),
            strokeStyle = Common.colorToNumber(bodyRender.strokeStyle),
            strokeStyleIndicator = Common.colorToNumber(bodyRender.strokeStyle),
            strokeStyleWireframe = Common.colorToNumber('#bbb'),
            strokeStyleWireframeIndicator = Common.colorToNumber('#CD5C5C'),
            part;

        primitive.clear();

        // handle compound parts
        for (var k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
            part = body.parts[k];

            if (!options.wireframes) {
                primitive.beginFill(fillStyle, 1);
                primitive.lineStyle(bodyRender.lineWidth, strokeStyle, 1);
            } else {
                primitive.beginFill(0, 0);
                primitive.lineStyle(1, strokeStyleWireframe, 1);
            }

            primitive.moveTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

            for (var j = 1; j < part.vertices.length; j++) {
                primitive.lineTo(part.vertices[j].x - body.position.x, part.vertices[j].y - body.position.y);
            }

            primitive.lineTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

            primitive.endFill();

            // angle indicator
            if (options.showAngleIndicator || options.showAxes) {
                primitive.beginFill(0, 0);

                if (options.wireframes) {
                    primitive.lineStyle(1, strokeStyleWireframeIndicator, 1);
                } else {
                    primitive.lineStyle(1, strokeStyleIndicator);
                }

                primitive.moveTo(part.position.x - body.position.x, part.position.y - body.position.y);
                primitive.lineTo(((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2 - body.position.x), 
                                 ((part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2 - body.position.y));

                primitive.endFill();
            }
        }

        return primitive;
    };

    /**
     * Gets the requested texture (a PIXI.Texture) via its path
     * @method _getTexture
     * @private
     * @param {RenderPixi} render
     * @param {string} imagePath
     * @return {PIXI.Texture} texture
     * @deprecated
     */
    var _getTexture = function(render, imagePath) {
        var texture = render.textures[imagePath];

        if (!texture)
            texture = render.textures[imagePath] = PIXI.Texture.fromImage(imagePath);

        return texture;
    };

})();

},{"../body/Composite":2,"../core/Common":14,"../core/Events":16,"../geometry/Bounds":26,"../geometry/Vector":28}]},{},[30])(30)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app-icon.ts":
/*!*************************!*\
  !*** ./src/app-icon.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./icon/android-icon.png */ "./src/icon/android-icon.png")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppIcon = (function () {
        function AppIcon(browser) {
            __webpack_require__(/*! ./icon/favicon.ico */ "./src/icon/favicon.ico");
            __webpack_require__(/*! ./icon/favicon-96x96.png */ "./src/icon/favicon-96x96.png");
            __webpack_require__(/*! ./icon/android-icon.png */ "./src/icon/android-icon.png");
            __webpack_require__(/*! ./icon/apple-icon.png */ "./src/icon/apple-icon.png");
            __webpack_require__(/*! ./icon/permission/warning.png */ "./src/icon/permission/warning.png");
            __webpack_require__(/*! ./icon/permission/webcam.png */ "./src/icon/permission/webcam.png");
            __webpack_require__(/*! ./icon/permission/gcheckmark.png */ "./src/icon/permission/gcheckmark.png");
        }
        return AppIcon;
    }());
    exports.default = AppIcon;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app-platformer-single.ts":
/*!**************************************!*\
  !*** ./src/app-platformer-single.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app-icon */ "./src/app-icon.ts"), __webpack_require__(/*! ./examples/platformer-single-player/scripts/game-play */ "./src/examples/platformer-single-player/scripts/game-play.ts"), __webpack_require__(/*! ./controllers/ioc-single-player */ "./src/controllers/ioc-single-player.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_icon_1, game_play_1, ioc_single_player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __webpack_require__(/*! ./style/animations.css */ "./src/style/animations.css");
    __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");
    var plarformerGameInfo = {
        name: "Platformer Single Player",
        title: "Start Single Platformer game",
    };
    var gamesList = [
        plarformerGameInfo,
    ];
    var master = new ioc_single_player_1.default(gamesList);
    var appIcon = new app_icon_1.default(master.get.Browser);
    master.singlton(game_play_1.default, master.get.Starter);
    console.log("Platformer single player: ", master.get.GamePlay);
    master.get.GamePlay.attachAppEvents();
    window.master = master;
    window.platformer = master.get.GamePlay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/client-config.ts":
/*!******************************!*\
  !*** ./src/client-config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientConfig = (function () {
        function ClientConfig(gameList) {
            this.addson = [
                {
                    name: "cache",
                    enabled: true,
                    scriptPath: "externals/cacheInit.ts",
                },
                {
                    name: "hackerTimer",
                    enabled: true,
                    scriptPath: "externals/hack-timer.js",
                },
                {
                    name: "dragging",
                    enabled: true,
                    scriptPath: "externals/drag.ts",
                },
                {
                    name: "adapter",
                    enabled: true,
                    scriptPath: "externals/adapter.js",
                },
            ];
            this.drawReference = "frame";
            this.aspectRatio = 1.333;
            this.domain = "maximumroulette.com";
            this.appUseNetwork = true;
            this.networkDeepLogs = false;
            this.masterServerKey = "maximumroulette.server1";
            this.rtcServerPort = 12034;
            this.connectorPort = 1234;
            this.broadcasterPort = 9001;
            this.broadcastSockRoute = "http://localhost:9001/";
            this.broadcastAutoConnect = true;
            this.runBroadcasterOnInt = true;
            this.broadcasterSessionDefaults = {
                sessionAudio: false,
                sessionVideo: false,
                sessionData: true,
                enableFileSharing: true
            };
            this.appUseAccountsSystem = true;
            this.appUseBroadcaster = true;
            this.stunList = [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun.l.google.com:19302?transport=udp"
            ];
            this.startUpHtmlForm = "register";
            this.defaultGamePlayLevelName = "public";
            this.autoStartGamePlay = false;
            this.gameList = gameList;
        }
        ClientConfig.prototype.getRunBroadcasterOnInt = function () {
            return this.runBroadcasterOnInt;
        };
        ClientConfig.prototype.getBroadcastAutoConnect = function () {
            return this.broadcastAutoConnect;
        };
        ClientConfig.prototype.getAddson = function () {
            return this.addson;
        };
        ClientConfig.prototype.getAutoStartGamePlay = function () {
            return this.autoStartGamePlay;
        };
        ClientConfig.prototype.getGamesList = function () {
            return this.gameList;
        };
        ClientConfig.prototype.getDefaultGamePlayLevelName = function () {
            return this.defaultGamePlayLevelName;
        };
        ClientConfig.prototype.didAppUseNetwork = function () {
            return this.appUseNetwork;
        };
        ClientConfig.prototype.didAppUseAccountsSystem = function () {
            return this.appUseAccountsSystem;
        };
        ClientConfig.prototype.didAppUseBroadcast = function () {
            return this.appUseBroadcaster;
        };
        ClientConfig.prototype.getStunList = function () {
            return this.stunList;
        };
        ClientConfig.prototype.getBroadcastSockRoute = function () {
            return this.broadcastSockRoute;
        };
        ClientConfig.prototype.getStartUpHtmlForm = function () {
            return this.startUpHtmlForm;
        };
        ClientConfig.prototype.getDomain = function () {
            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
                return window.location.hostname;
            }
            return this.domain;
        };
        ClientConfig.prototype.getBroadcasterPort = function () {
            return this.broadcasterPort;
        };
        ClientConfig.prototype.getBroadcasterSessionDefaults = function () {
            return this.broadcasterSessionDefaults;
        };
        ClientConfig.prototype.getConnectorPort = function () {
            return this.connectorPort;
        };
        ClientConfig.prototype.getDrawRefference = function () {
            return this.drawReference;
        };
        ClientConfig.prototype.getAspectRatio = function () {
            return this.aspectRatio;
        };
        ClientConfig.prototype.setAspectRatio = function (newAspectRatio) {
            this.aspectRatio = newAspectRatio;
        };
        ClientConfig.prototype.getProtocolFromAddressBar = function () {
            return (location.protocol === "https:" ? "https://" : "http://");
        };
        ClientConfig.prototype.getRemoteServerAddress = function () {
            return (location.protocol === "https:" ? "wss" : "ws") + "://" + document.domain + ":" + this.rtcServerPort + "/";
        };
        ClientConfig.prototype.getRemoteServerAddressControlller = function () {
            return (location.protocol === "https:" ? "wss" : "ws") + "://" + document.domain + ":" + this.connectorPort + "/";
        };
        ClientConfig.prototype.setNetworkDeepLog = function (newState) {
            this.networkDeepLogs = newState;
        };
        ClientConfig.prototype.getNetworkDeepLog = function () {
            return this.networkDeepLogs;
        };
        ClientConfig.prototype.getMasterServerKey = function () {
            return this.masterServerKey;
        };
        return ClientConfig;
    }());
    exports.default = ClientConfig;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/controllers/ioc-single-player.ts":
/*!**********************************************!*\
  !*** ./src/controllers/ioc-single-player.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../libs/class/browser */ "./src/libs/class/browser.ts"), __webpack_require__(/*! ../libs/class/system */ "./src/libs/class/system.ts"), __webpack_require__(/*! ../libs/class/view-port */ "./src/libs/class/view-port.ts"), __webpack_require__(/*! ../libs/class/visual-render */ "./src/libs/class/visual-render.ts"), __webpack_require__(/*! ../client-config */ "./src/client-config.ts"), __webpack_require__(/*! ../libs/events/global-event */ "./src/libs/events/global-event.ts"), __webpack_require__(/*! ../libs/starter */ "./src/libs/starter.ts"), __webpack_require__(/*! ../libs/class/messager-box */ "./src/libs/class/messager-box.ts"), __webpack_require__(/*! ../libs/class/sound */ "./src/libs/class/sound.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, browser_1, system_1, view_port_1, visual_render_1, client_config_1, global_event_1, starter_1, messager_box_1, sound_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ioc = (function () {
        function Ioc(gamesList) {
            this.get = {};
            this.config = new client_config_1.default(gamesList);
            this.loadAddson();
            this.singlton(sound_1.default, undefined);
            this.singlton(messager_box_1.default, undefined);
            this.singlton(browser_1.default, undefined);
            this.singlton(view_port_1.default, this.config);
            this.singlton(global_event_1.default, this.get.Browser);
            this.singlton(visual_render_1.default, undefined);
            this.singlton(starter_1.default, this);
        }
        Ioc.prototype.reLoadNetworking = function () { };
        Ioc.prototype.singlton = function (Singlton, args) {
            if (args !== undefined) {
                this.get[Singlton.name] = new Singlton(args);
            }
            else {
                this.get[Singlton.name] = new Singlton();
            }
        };
        Ioc.prototype.gen = function (newInstance) {
            return new newInstance();
        };
        Ioc.prototype.getConfig = function () {
            return this.config;
        };
        Ioc.prototype.loadAddson = function () {
            this.config.getAddson().forEach(function (addson) {
                if (addson.enabled) {
                    system_1.scriptManager.load(addson.scriptPath);
                    console.log("Addson: " + addson.name + " loaded.");
                }
            });
        };
        return Ioc;
    }());
    exports.default = Ioc;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/platformer-single-player/audios/map-themes/mishief-stroll.mp4":
/*!************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/audios/map-themes/mishief-stroll.mp4 ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/audios/mishief-stroll.mp4";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/backgrounds/wall3.png":
/*!**************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/backgrounds/wall3.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/6b050f0bb5b933f82099cac57d716610wall3.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/bitcoin.png":
/*!******************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/bitcoin.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/c7c8c111d27597d5d1bad464d12f6abcbitcoin.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png":
/*!*****************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/coin-1.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/427ca77792a478c5e1da508575060ca6coin-1.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_green_empty.png":
/*!*****************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/hudKey_green_empty.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/3eaac1f2ff378f800ce519e5499589abhudKey_green_empty.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_red.png":
/*!*********************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/hudKey_red.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/191399ceac4eb84694a93f05e7acb835hudKey_red.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_yellow.png":
/*!************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/hudKey_yellow.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4bb48c5e85759cf4cedb5d3fb1c73954hudKey_yellow.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/collect-items/tileRed_12.png":
/*!*********************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/collect-items/tileRed_12.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/86319b272b59464ca4d8a73cb7f87a4ctileRed_12.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/deadlines/flame2.png":
/*!*************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/deadlines/flame2.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/8dd5bdaf4eb9060226a86cc79cdb36ebflame2.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/enemies/chopper.png":
/*!************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/enemies/chopper.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/1eec36918eea9705145165d363349a73chopper.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png":
/*!**************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/enemies/crapmunch.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/ff42e4663491d439079f9fa7c68fe8e0crapmunch.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/explosion/explosion.png":
/*!****************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/explosion/explosion.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4310b53845b066f1bd7419726a1d787dexplosion.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png":
/*!***********************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/boxAlt.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/55435003f66f3611af6efe66fc23ce80boxAlt.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png":
/*!*************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/f12e7282598d6d6da5eef816874f6069boxEmpty.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/brickWall.png":
/*!**************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/brickWall.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4bd728248e2154429f50417a50e658bfbrickWall.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/castle.png":
/*!***********************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/castle.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/1f057d5bb83389f6f5126dee68ab3854castle.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png":
/*!**************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/castleMid.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/d487cf1a810021ad544d65b9a5ceab0ccastleMid.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png":
/*!****************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/9a80eca833ff1293217291496364a23bchocoCenter.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/elementGlass019.png":
/*!********************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/elementGlass019.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/3774add031b2c2020b69a18f41bb5853elementGlass019.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/floor2.png":
/*!***********************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/floor2.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/be9f1ef01636e914e49f583b5193fdf7floor2.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/grass.png":
/*!**********************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/grass.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/20b0b34073879122548aaf156c99728cgrass.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png":
/*!****************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/190bf4b440aeb418362c5fbd6a1cb718lollipopRed.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/reaper/poster.png":
/*!******************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/reaper/poster.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/eb36c42bd4bc3548a088ebce5fc5052eposter.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/reaper/reaper-idle.png":
/*!***********************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/reaper/reaper-idle.png ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/8370285072f8630118fada27335ef655reaper-idle.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/reaper/reaper-running.png":
/*!**************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/reaper/reaper-running.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/62cec67c68bca3f78c5ef2f1c52c28f2reaper-running.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/smart-girl/poster.png":
/*!**********************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/smart-girl/poster.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4381d93b6dbbd12fd03e0ee8589ba9b1poster.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl-idle.png":
/*!*******************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl-idle.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/566c5388433c6bcd8bf06649f471c563smart-girl-idle.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl.png":
/*!**************************************************************************************!*\
  !*** ./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/566c5388433c6bcd8bf06649f471c563smart-girl.png";

/***/ }),

/***/ "./src/examples/platformer-single-player/scripts/Platformer.ts":
/*!*********************************************************************!*\
  !*** ./src/examples/platformer-single-player/scripts/Platformer.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js"), __webpack_require__(/*! ../../../libs/class/system */ "./src/libs/class/system.ts"), __webpack_require__(/*! ../../../libs/class/visual-methods/sprite-animation */ "./src/libs/class/visual-methods/sprite-animation.ts"), __webpack_require__(/*! ../../../libs/class/visual-methods/texture */ "./src/libs/class/visual-methods/texture.ts"), __webpack_require__(/*! ../../../libs/defaults */ "./src/libs/defaults.ts"), __webpack_require__(/*! ./packs/level1 */ "./src/examples/platformer-single-player/scripts/packs/level1.ts"), __webpack_require__(/*! ./packs/level2 */ "./src/examples/platformer-single-player/scripts/packs/level2.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Matter, system_1, sprite_animation_1, texture_1, defaults_1, level1_1, level2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __webpack_require__(/*! ../audios/map-themes/mishief-stroll.mp4 */ "./src/examples/platformer-single-player/audios/map-themes/mishief-stroll.mp4");
    var Platformer = (function () {
        function Platformer(starter) {
            var _this = this;
            this.gameName = "platformer";
            this.version = 0.3;
            this.playerCategory = 0x0002;
            this.staticCategory = 0x0004;
            this.grounds = [];
            this.enemys = [];
            this.deadLines = [];
            this.labels = [];
            this.player = undefined;
            this.hudLives = null;
            this.selectPlayerArray = [];
            this.lives = 3;
            this.preventDoubleExecution = false;
            this.playerStartPositions = [{ x: 120, y: 200 }];
            this.playerDeadPauseInterval = 550;
            this.levelMaps = {
                generatedMap: level1_1.default,
                Level1: level1_1.default,
                Level2: level2_1.default
            };
            this.showPlayerBoardUI = function () {
                var myInstance = _this;
                fetch("./templates/ui/player-board.html", {
                    headers: system_1.htmlHeader,
                }).
                    then(function (res) {
                    return res.text();
                }).then(function (html) {
                    myInstance.UIPlayerBoard = system_1.byId("UIPlayerBoard");
                    myInstance.UIPlayerBoard.innerHTML = html;
                    myInstance.UIPlayerBoard.style.display = "block";
                    myInstance.UIPlayAgainBtn = system_1.byId("playAgainBtn");
                    myInstance.UIPlayAgainBtn.addEventListener("click", function () {
                        var appStartGamePlay = system_1.createAppEvent("game-init", {
                            mapName: "Level1",
                            game: myInstance.player,
                        });
                        window.dispatchEvent(appStartGamePlay);
                        myInstance.player.render.visualComponent.assets.SeqFrame.setNewValue(0);
                        myInstance.selectedPlayer.spriteTileCurrent = myInstance.selectedPlayer.spriteTile[0];
                        myInstance.player.render.visualComponent.setNewShema(myInstance.selectedPlayer.spriteTileCurrent);
                        myInstance.player.render.visualComponent.seqFrameX.setDelay(8);
                    }, false);
                });
                fetch("./templates/ui/select-player.html", {
                    headers: system_1.htmlHeader,
                }).
                    then(function (res) {
                    return res.text();
                }).then(function (html) {
                    var popup = system_1.byId("popup");
                    popup.innerHTML = html;
                    popup.style.display = "block";
                    myInstance.selectPlayerArray.forEach(function (itemPlayer) {
                        var local = document.createElement("div");
                        local.id = "" + itemPlayer.labelName;
                        local.className = "bounceIn";
                        local.setAttribute("style", "width:30%;display:inline-block;cursor:pointer;text-align:center;padding: 9px;");
                        local.innerHTML = "<span> Name:" +
                            itemPlayer.labelName +
                            "</span> <img src='" +
                            itemPlayer.poster +
                            "' width='150px' height='150px' class='selectPlayerItemBox' />";
                        local.addEventListener("click", function () {
                            myInstance.selectPlayer(itemPlayer.labelName);
                            var appStartGamePlay = system_1.createAppEvent("game-init", {
                                mapName: "Level1",
                                game: myInstance.levelMaps.Level1,
                            });
                            window.dispatchEvent(appStartGamePlay);
                            popup.innerHTML = "";
                            document.body.removeChild(popup);
                        }, false);
                        system_1.byId('listOfPlayers').appendChild(local);
                    });
                });
            };
            this.attachUpdateLives = function () {
                var root = _this;
                window.addEventListener("update-lives", function (e) {
                    root.lives = e.detail.data.lives;
                });
            };
            this.addUIPlayerBoard = function () {
                _this.UIPlayerBoard = document.createElement("div");
                _this.UIPlayerBoard.id = "UIPlayerBoard";
                _this.UIPlayerBoard.className = "leftPanelUni";
                document.getElementsByTagName("body")[0].appendChild(_this.UIPlayerBoard);
            };
            this.starter = starter;
            this.initSelectPlayer();
            this.addUIPlayerBoard();
            this.showPlayerBoardUI();
            this.attachUpdateLives();
        }
        Platformer.prototype.startGamplayAudioSystem = function () {
            this.starter.ioc.get.Sound.createAudio("audios/mishief-stroll.mp4", "surfaceLevel", true);
        };
        Platformer.prototype.initSelectPlayer = function () {
            this.selectPlayerArray.push({
                labelName: "reaper",
                poster: __webpack_require__(/*! ../imgs/players/reaper/poster.png */ "./src/examples/platformer-single-player/imgs/players/reaper/poster.png"),
                resource: [
                    __webpack_require__(/*! ../imgs/players/reaper/reaper-running.png */ "./src/examples/platformer-single-player/imgs/players/reaper/reaper-running.png"),
                    __webpack_require__(/*! ../imgs/explosion/explosion.png */ "./src/examples/platformer-single-player/imgs/explosion/explosion.png"),
                    __webpack_require__(/*! ../imgs/players/reaper/reaper-idle.png */ "./src/examples/platformer-single-player/imgs/players/reaper/reaper-idle.png"),
                ],
                type: "sprite",
                spriteTile: [{ byX: 5, byY: 1 }, { byX: 3, byY: 1 }],
                spriteTileCurrent: { byX: 5, byY: 1 }
            });
            this.selectPlayerArray.push({
                labelName: "smartGirl",
                poster: __webpack_require__(/*! ../imgs/players/smart-girl/poster.png */ "./src/examples/platformer-single-player/imgs/players/smart-girl/poster.png"),
                resource: [
                    __webpack_require__(/*! ../imgs/players/smart-girl/smart-girl.png */ "./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl.png"),
                    __webpack_require__(/*! ../imgs/explosion/explosion.png */ "./src/examples/platformer-single-player/imgs/explosion/explosion.png"),
                    __webpack_require__(/*! ../imgs/players/smart-girl/smart-girl-idle.png */ "./src/examples/platformer-single-player/imgs/players/smart-girl/smart-girl-idle.png"),
                ],
                type: "sprite",
                spriteTile: [{ byX: 5, byY: 1 }, { byX: 5, byY: 1 }],
                spriteTileCurrent: { byX: 5, byY: 1 }
            });
        };
        Platformer.prototype.selectPlayer = function (labelName) {
            var _this = this;
            if (labelName === void 0) { labelName = "reaper"; }
            this.selectPlayerArray.forEach(function (element, index) {
                if (element.labelName == labelName) {
                    _this.selectedPlayer = element;
                    if (element.type == "frameByFrame") {
                        _this.selectedPlayer.texCom = new texture_1.default("playerImage", _this.selectedPlayer.resource);
                    }
                    else if (element.type == "sprite") {
                        _this.selectedPlayer.texCom = new sprite_animation_1.default("playerImage", _this.selectedPlayer.resource, _this.selectedPlayer.spriteTileCurrent);
                    }
                }
            });
        };
        Platformer.prototype.createPlayer = function (addToScene) {
            var root = this;
            var TEST = new sprite_animation_1.default("playerImage", this.selectedPlayer.resource, this.selectedPlayer.spriteTileCurrent);
            this.preventDoubleExecution = false;
            var playerRadius = 50;
            this.player = Matter.Bodies.circle(this.playerStartPositions[0].x, this.playerStartPositions[0].y, playerRadius, {
                label: "player",
                density: 0.0005,
                friction: 0.01,
                frictionAir: 0.06,
                restitution: 0.3,
                ground: true,
                jumpCD: 0,
                portal: -1,
                collisionFilter: {
                    category: this.playerCategory,
                },
                render: {
                    visualComponent: TEST,
                    fillStyle: "blue",
                    sprite: {
                        xScale: 1,
                        yScale: 1,
                    },
                },
            });
            this.player.collisionFilter.group = -1;
            if (this.player.render.visualComponent instanceof sprite_animation_1.default) {
                this.player.render.visualComponent.assets.SeqFrame.setNewSeqFrameRegimeType("CONST");
                this.player.render.visualComponent.keepAspectRatio = true;
            }
            else {
                this.player.render.visualComponent.keepAspectRatio = true;
                this.player.render.sprite.xScale = 0.2;
                this.player.render.sprite.yScale = 0.2;
            }
            this.player.render.visualComponent.setHorizontalFlip(false);
            if (addToScene) {
                this.player.id = 2;
                this.starter.AddNewBodies(this.player);
                console.info("Player body created from 'dead'.");
            }
        };
        Platformer.prototype.playerSpawn = function (recreatePlayer) {
            if (this.player === null || this.player === undefined) {
                this.createPlayer(recreatePlayer);
            }
            else if (this.player.type === "body") {
            }
        };
        Platformer.prototype.collisionCheck = function (event, ground) {
            var _this = this;
            var myInstance = this;
            var pairs = event.pairs;
            for (var i = 0, j = pairs.length; i !== j; ++i) {
                var pair = pairs[i];
                if (pair.activeContacts) {
                    if (pair.bodyA.label === "player" && pair.bodyB.label.indexOf("Level") !== -1) {
                        var nextLevelItem = pair.bodyB.label;
                        myInstance.nextLevel(nextLevelItem);
                    }
                    if (pair.bodyA.label === "player" && pair.bodyB.label === "collectItemPoint") {
                        var collectitem = pair.bodyB;
                        this.starter.destroyBody(collectitem);
                    }
                    if (pair.bodyA.label === "player" && pair.bodyB.label === "crapmunch") {
                        var collectitem = pair.bodyA;
                        this.playerDie(collectitem);
                    }
                    else if (pair.bodyB.label === "player" && pair.bodyA.label === "crapmunch") {
                        var collectitem = pair.bodyB;
                        this.playerDie(collectitem);
                    }
                    pair.activeContacts.forEach(function (element) {
                        if (element.vertex.body.label === "player" &&
                            element.vertex.index > 5 && element.vertex.index < 8 &&
                            _this.player !== null) {
                            _this.player.ground = ground;
                        }
                        else if (element.vertex.body.label === "player") {
                            if (_this.player === null) {
                                return;
                            }
                            _this.player.ground = false;
                        }
                    });
                }
            }
        };
        Platformer.prototype.playerDie = function (collectitem) {
            if (!this.preventDoubleExecution) {
                var root_1 = this;
                this.preventDoubleExecution = true;
                console.info("D>>>>>>>>>>>>>>>>>>>>");
                this.player.render.visualComponent.shema = { byX: 4, byY: 4 };
                this.player.render.visualComponent.assets.SeqFrame.setNewValue(1);
                this.lives = this.lives - 1;
                this.UIPlayerBoard.getElementsByClassName("UIPlayerLives")[0].innerText = this.lives.toString();
                if (this.lives === 0 || this.lives < 0) {
                    this.starter.destroyBody(collectitem);
                    this.player = null;
                    if (system_1.byId("playAgainBtn")) {
                        system_1.byId("playAgainBtn").disabled = false;
                    }
                    return;
                }
                setTimeout(function () {
                    root_1.player.render.visualComponent.assets.SeqFrame.setNewValue(0);
                    root_1.selectedPlayer.spriteTileCurrent = root_1.selectedPlayer.spriteTile[0];
                    root_1.player.render.visualComponent.setNewShema(root_1.selectedPlayer.spriteTileCurrent);
                    Matter.Body.setPosition(root_1.player, root_1.playerStartPositions[0]);
                    root_1.playerSpawn(false);
                    root_1.preventDoubleExecution = false;
                }, this.playerDeadPauseInterval);
            }
        };
        Platformer.prototype.destroyGamePlayPlatformer = function () {
            this.starter.destroyGamePlay();
            this.starter.deattachMatterEvents();
            this.grounds = [];
            this.enemys = [];
            this.deadLines = [];
            this.labels = [];
        };
        Platformer.prototype.nextLevel = function (data) {
            var root = this;
            if (data.indexOf("Level") !== -1) {
                var appEndGamePlay = system_1.createAppEvent("game-end", { game: "Level1" });
                window.dispatchEvent(appEndGamePlay);
                root.player.render.visualComponent.assets.SeqFrame.setNewValue(0);
                root.selectedPlayer.spriteTileCurrent = root.selectedPlayer.spriteTile[0];
                root.player.render.visualComponent.setNewShema(root.selectedPlayer.spriteTileCurrent);
                root.player.render.visualComponent.seqFrameX.setDelay(8);
                Matter.Body.setPosition(root.player, root.playerStartPositions[0]);
                setTimeout(function () {
                    var appStartGamePlay = system_1.createAppEvent("game-init", {
                        mapName: data,
                        game: root.levelMaps[data]
                    });
                    window.dispatchEvent(appStartGamePlay);
                }, defaults_1.DEFAULT_GAMEPLAY_ROLES.RESPAWN_INTERVAL);
            }
        };
        return Platformer;
    }());
    exports.default = Platformer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/platformer-single-player/scripts/game-play.ts":
/*!********************************************************************!*\
  !*** ./src/examples/platformer-single-player/scripts/game-play.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js"), __webpack_require__(/*! ../../../libs/class/bot-behavior */ "./src/libs/class/bot-behavior.ts"), __webpack_require__(/*! ../../../libs/class/system */ "./src/libs/class/system.ts"), __webpack_require__(/*! ../../../libs/class/visual-methods/sprite-animation */ "./src/libs/class/visual-methods/sprite-animation.ts"), __webpack_require__(/*! ../../../libs/class/visual-methods/text */ "./src/libs/class/visual-methods/text.ts"), __webpack_require__(/*! ../../../libs/class/visual-methods/texture */ "./src/libs/class/visual-methods/texture.ts"), __webpack_require__(/*! ./map */ "./src/examples/platformer-single-player/scripts/map.ts"), __webpack_require__(/*! ./Platformer */ "./src/examples/platformer-single-player/scripts/Platformer.ts"), __webpack_require__(/*! ./packs/level1 */ "./src/examples/platformer-single-player/scripts/packs/level1.ts"), __webpack_require__(/*! ../../../libs/defaults */ "./src/libs/defaults.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Matter, bot_behavior_1, system_1, sprite_animation_1, text_1, texture_1, map_1, Platformer_1, level1_1, defaults_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GamePlay = (function (_super) {
        __extends(GamePlay, _super);
        function GamePlay(starter) {
            var _this = _super.call(this, starter) || this;
            _this.gamePlayWelcomeNote = "This application was created on visual-ts <br/>\
                                         Example: Single player `Platformer` zlatnaspirala@gmail.com <br/>\
                                         General: MIT License <br/>\
                                         Copyright (c) 2020 Nikola Lukic zlatnaspirala@gmail.com Serbia Nis <br/>\
                                         Except: Folder src/libs with licence: <br/>\
                                         GNU LESSER GENERAL PUBLIC LICENSE Version 3 <br/>\
                                         Copyright (c) 2020 maximumroulette.com ";
            _this.deadZoneForBottom = defaults_1.DEFAULT_GAMEPLAY_ROLES.MAP_MARGIN_BOTTOM;
            _this.deadZoneForRight = defaults_1.DEFAULT_GAMEPLAY_ROLES.MAP_MARGIN_RIGHT;
            _this.attachAppEvents = function () {
                var myInstance = _this;
                window.addEventListener("game-init", function (e) {
                    try {
                        if (e.detail &&
                            (e.detail.data.game !== "undefined" &&
                                e.detail.data.game !== null &&
                                typeof e.detail.data.game.label !== "undefined" &&
                                e.detail.data.game.label === "player")) {
                            console.warn("Bad #2 game-init attempt.");
                            return;
                        }
                        else if (e.detail &&
                            e.detail.data.game === null) {
                            console.info("game-init Player spawn. Player are not destroyed at this moment...");
                            myInstance.playerSpawn(true);
                            myInstance.initSelectPlayer();
                            myInstance.selectPlayer("reaper");
                            return;
                        }
                        myInstance.load(e.detail.data.game);
                        console.info("Player spawn on game-init");
                    }
                    catch (err) {
                        console.error("Very bad in game-init #1", err);
                    }
                });
                window.addEventListener("game-end", function (e) {
                    try {
                        if (e.detail &&
                            e.detail.data.game !== "undefined" &&
                            e.detail.data.game !== null) {
                            myInstance.destroyGamePlayPlatformer();
                            system_1.byId("playAgainBtn").disabled = false;
                            system_1.byId("out-of-game").disabled = true;
                            console.info("game-end global event. Destroying game play.");
                        }
                    }
                    catch (err) {
                        console.error("Very bad #00003 ", err);
                    }
                });
            };
            _this.overrideOnKeyDown = function () {
                if (typeof _this.player === "undefined" || _this.player === null) {
                    return;
                }
                var vc = _this.player.render.visualComponent;
                if (vc.assets.SeqFrame.getValue() === 0) {
                    return;
                }
                _this.selectedPlayer.spriteTileCurrent = _this.selectedPlayer.spriteTile[0];
                _this.player.render.visualComponent.setNewShemaByX(_this.selectedPlayer.spriteTileCurrent.byX);
                _this.player.render.visualComponent.assets.SeqFrame.setNewValue(0);
                _this.player.render.visualComponent.seqFrameX.setDelay(8);
            };
            _this.overrideOnKeyUp = function () {
                if (typeof _this.player === "undefined" || _this.player === null) {
                    return;
                }
                var vc = _this.player.render.visualComponent;
                if (vc.assets.SeqFrame.getValue() === 2) {
                    return;
                }
                vc.assets.SeqFrame.setNewValue(2);
                vc.seqFrameX.setDelay(8);
                _this.selectedPlayer.spriteTileCurrent = _this.selectedPlayer.spriteTile[1];
                vc.setNewShemaByX(_this.selectedPlayer.spriteTileCurrent.byX);
            };
            _this.deadZoneForBottom = 2500;
            if (_this.starter.ioc.getConfig().getAutoStartGamePlay()) {
            }
            _this.starter.ioc.get.MessageBox.show(_this.gamePlayWelcomeNote);
            return _this;
        }
        GamePlay.prototype.attachMatterEvents = function () {
            var root = this;
            var globalEvent = this.starter.ioc.get.GlobalEvent;
            globalEvent.providers.onkeydown = this.overrideOnKeyDown;
            globalEvent.providers.onkeyup = this.overrideOnKeyUp;
            var playerSpeed = 0.005;
            this.enemys.forEach(function (item) {
                var test = new bot_behavior_1.default(item);
                test.patrol();
            });
            Matter.Events.on(this.starter.getEngine(), "beforeUpdate", function (event) {
                if (!root.player) {
                    return;
                }
                if (root.player && root.player.position.y > root.deadZoneForBottom) {
                    root.playerDie(root.player);
                }
                if (root.player) {
                    Matter.Body.setAngle(root.player, -Math.PI * 0);
                    Matter.Bounds.shift(root.starter.getRender().bounds, {
                        x: root.player.position.x - 400,
                        y: root.player.position.y - 300,
                    });
                    if (root.player.velocity.x < 0.00001 && root.player.velocity.y == 0 &&
                        root.player.currentDir == "idle") {
                    }
                }
            });
            var limit = 0.3;
            Matter.Events.on(this.starter.getEngine(), "collisionStart", function (event) {
                root.collisionCheck(event, true);
            });
            Matter.Events.on(this.starter.getEngine(), "collisionActive", function (event) {
                root.collisionCheck(event, true);
            });
            Matter.Events.on(this.starter.getEngine(), "collisionEnd", function (event) {
                root.collisionCheck(event, false);
            });
            Matter.Events.on(this.starter.getEngine(), "afterTick", function (event) {
                if (!root.player) {
                    return;
                }
                if (globalEvent.activeKey[38] && root.player.ground) {
                    var s = (root.player.circleRadius * playerSpeed);
                    root.player.ground = false;
                    root.player.force = {
                        x: 0,
                        y: -(s),
                    };
                    Matter.Body.setVelocity(root.player, { x: 0, y: -s });
                }
                else if (globalEvent.activeKey[37] && root.player.angularVelocity > -limit) {
                    root.player.render.visualComponent.setHorizontalFlip(true);
                    root.player.force = {
                        x: -playerSpeed,
                        y: 0,
                    };
                    Matter.Body.applyForce(root.player, { x: root.player.position.x, y: root.player.position.y }, root.player.force);
                    root.player.currentDir = "left";
                }
                else if (globalEvent.activeKey[39] && root.player.angularVelocity < limit) {
                    root.player.render.visualComponent.setHorizontalFlip(false);
                    root.player.force = {
                        x: playerSpeed,
                        y: 0,
                    };
                    Matter.Body.applyForce(root.player, { x: root.player.position.x, y: root.player.position.y }, root.player.force);
                    root.player.currentDir = "right";
                }
                else {
                    root.player.currentDir = "idle";
                }
            });
            globalEvent.activateKeyDetection();
        };
        GamePlay.prototype.load = function (mapPack) {
            var _this = this;
            var root = this;
            if (typeof mapPack === "undefined") {
                mapPack = level1_1.default;
            }
            var gameMap = new map_1.default(mapPack);
            this.starter.setWorldBounds(defaults_1.DEFAULT_GAMEPLAY_ROLES.MAP_MARGIN_LEFT, defaults_1.DEFAULT_GAMEPLAY_ROLES.MAP_MARGIN_TOP, root.deadZoneForRight, root.deadZoneForBottom);
            this.playerSpawn(false);
            gameMap.getStaticBackgrounds().forEach(function (item) {
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: true,
                    isSleeping: false,
                    label: "background",
                    render: {
                        visualComponent: new texture_1.default("wall", item.tex),
                        sprite: {
                            olala: true,
                        },
                    },
                });
                newStaticElement.collisionFilter.group = -1;
                _this.grounds.push(newStaticElement);
                _this.grounds[_this.grounds.length - 1].render.visualComponent.setVerticalTiles(item.tiles.tilesY).
                    setHorizontalTiles(item.tiles.tilesX);
            });
            gameMap.getStaticGrounds().forEach(function (item) {
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: true,
                    isSleeping: false,
                    label: "ground",
                    collisionFilter: {
                        group: _this.staticCategory,
                    },
                    render: {
                        visualComponent: new texture_1.default("imgGround", item.tex),
                        sprite: {
                            olala: true,
                        },
                    },
                });
                _this.grounds.push(newStaticElement);
                _this.grounds[_this.grounds.length - 1].render.visualComponent.setVerticalTiles(item.tiles.tilesX).
                    setHorizontalTiles(item.tiles.tilesY);
            });
            gameMap.getCollectItems().forEach(function (item) {
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: true,
                    label: item.colectionLabel,
                    collisionFilter: {
                        group: _this.staticCategory,
                        mask: _this.playerCategory,
                    },
                    render: {
                        visualComponent: new texture_1.default("imgCollectItem1", item.tex),
                        sprite: {
                            olala: true,
                            xScale: 1,
                            yScale: 1,
                        },
                    },
                });
                newStaticElement.render.visualComponent.setVerticalTiles(item.tiles.tilesY).
                    setHorizontalTiles(item.tiles.tilesX);
                _this.grounds.push(newStaticElement);
            });
            gameMap.getEnemys().forEach(function (item) {
                var enemySprite;
                if (item.enemyLabel === "crapmunch") {
                    enemySprite = new sprite_animation_1.default("enemy", item.tex, { byX: 10, byY: 1 });
                }
                else if (item.enemyLabel === "chopper") {
                    enemySprite = new sprite_animation_1.default("enemy", item.tex, { byX: 5, byY: 1 });
                }
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: false,
                    label: item.enemyLabel,
                    density: 0.0005,
                    friction: 0.01,
                    frictionAir: 0.06,
                    restitution: 0.3,
                    collisionFilter: {
                        group: _this.staticCategory,
                        mask: _this.playerCategory,
                    },
                    render: {
                        visualComponent: enemySprite,
                        sprite: {
                            olala: true,
                            xScale: 1,
                            yScale: 1,
                        },
                    },
                });
                newStaticElement.render.visualComponent.keepAspectRatio = true;
                newStaticElement.render.visualComponent.setHorizontalFlip(true);
                _this.enemys.push(newStaticElement);
            });
            gameMap.getDeadLines().forEach(function (item) {
                var enemySprite;
                root.deadZoneForBottom = item.y;
                enemySprite = new sprite_animation_1.default("deadline", item.tex, { byX: item.tiles.tilesX, byY: item.tiles.tilesY });
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: true,
                    label: item.enemyLabel,
                    density: 0.0005,
                    friction: 0.01,
                    frictionAir: 0.06,
                    restitution: 0.3,
                    collisionFilter: {
                        group: -1,
                        mask: _this.playerCategory,
                    },
                    render: {
                        visualComponent: enemySprite,
                        sprite: {
                            olala: true,
                            xScale: 1,
                            yScale: 1,
                        },
                    },
                });
                newStaticElement.render.visualComponent.keepAspectRatio = true;
                newStaticElement.render.visualComponent.setHorizontalFlip(true);
                _this.deadLines.push(newStaticElement);
            });
            gameMap.getStaticBanners().forEach(function (item) {
                var newStaticElement = Matter.Bodies.rectangle(item.x, item.y, item.w, item.h, {
                    isStatic: true,
                    label: "Label Text",
                    render: {
                        visualComponent: new text_1.default(item.text, item.options),
                        sprite: {
                            olala: true,
                        },
                    },
                });
                newStaticElement.collisionFilter.group = -1;
                _this.labels.push(newStaticElement);
            });
            this.starter.AddNewBodies(this.grounds);
            this.starter.AddNewBodies(this.enemys);
            this.starter.AddNewBodies(this.deadLines);
            this.starter.AddNewBodies(this.player);
            this.starter.AddNewBodies(this.labels);
            this.attachMatterEvents();
        };
        return GamePlay;
    }(Platformer_1.default));
    exports.default = GamePlay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/platformer-single-player/scripts/map.ts":
/*!**************************************************************!*\
  !*** ./src/examples/platformer-single-player/scripts/map.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameMap = (function () {
        function GameMap(options) {
            this.options = {};
            this.staticGrounds = [];
            this.collectItems = [];
            this.collectEnemies = [];
            this.collectLabels = [];
            if (typeof options !== 'undefined') {
                this.options.mapPack = options;
                this.loadGeneratedMap(this.options.mapPack);
            }
        }
        GameMap.prototype.loadGeneratedMap = function (gMap) {
            var root = this;
            gMap.forEach(function (item) {
                if (typeof item.colectionLabel !== 'undefined') {
                    root.collectItems.push(item);
                }
                else if (typeof item.enemyLabel !== 'undefined') {
                    root.collectEnemies.push(item);
                }
                else if (typeof item.text !== 'undefined') {
                    root.collectLabels.push(item);
                }
                else {
                    root.staticGrounds.push(item);
                }
            });
        };
        GameMap.prototype.getStaticGrounds = function () {
            var LocalWidth = 650;
            var imgRes = [__webpack_require__(/*! ../imgs/grounds/elementGlass019.png */ "./src/examples/platformer-single-player/imgs/grounds/elementGlass019.png")];
            var imgResTest = [__webpack_require__(/*! ../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png")];
            var tileXLocal = 10;
            this.staticGrounds.push({ x: 100, y: 500, w: LocalWidth, h: 60, tex: imgRes, tiles: { tilesX: tileXLocal, tilesY: 1 } });
            return this.staticGrounds;
        };
        GameMap.prototype.getStaticBackgrounds = function () {
            var backgroundDiameter = 1000;
            var backgroundWall = __webpack_require__(/*! ../imgs/backgrounds/wall3.png */ "./src/examples/platformer-single-player/imgs/backgrounds/wall3.png");
            var shema = {
                byX: 8,
                byY: 4,
            };
            var subShema = {
                byX: 4,
                byY: 4,
            };
            var b = [];
            for (var x = 0; x < shema.byX; x++) {
                for (var y = 0; y < shema.byY; y++) {
                    b.push({
                        x: x * backgroundDiameter,
                        y: y * backgroundDiameter,
                        w: backgroundDiameter,
                        h: backgroundDiameter,
                        tex: backgroundWall, tiles: { tilesX: subShema.byX, tilesY: subShema.byY },
                    });
                }
            }
            return b;
        };
        GameMap.prototype.getCollectItems = function () {
            var LocalWidth = 60;
            var tileXLocal = 1;
            var deltaYLocal = -200;
            var imgRes = [__webpack_require__(/*! ../imgs/collect-items/bitcoin.png */ "./src/examples/platformer-single-player/imgs/collect-items/bitcoin.png")];
            return this.collectItems;
        };
        GameMap.prototype.getEnemys = function () {
            var imgCrap = [__webpack_require__(/*! ../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png")];
            var imgCooper = [__webpack_require__(/*! ../imgs/enemies/chopper.png */ "./src/examples/platformer-single-player/imgs/enemies/chopper.png")];
            var deltaYLocal = 100;
            var enemyWidth = 100;
            var enemyHeight = 100;
            return this.collectEnemies;
        };
        GameMap.prototype.getDeadLines = function () {
            var img = [__webpack_require__(/*! ../imgs/deadlines/flame2.png */ "./src/examples/platformer-single-player/imgs/deadlines/flame2.png")];
            return [
                { x: 0, y: 2500, w: 9000, h: 50, tex: img, tiles: { tilesX: 3, tilesY: 3 }, enemyLabel: "deadline", enemyOptions: "" },
            ];
        };
        GameMap.prototype.getStaticBanners = function () {
            this.collectLabels.forEach(function (item, i, array) {
                array[i].x = parseFloat(array[i].x);
                array[i].y = parseFloat(array[i].y);
                array[i].w = 200.0;
                array[i].h = 150;
                if (typeof array[i].options === "undefined") {
                    array[i].options = {
                        color: "lime",
                        size: 20
                    };
                }
                array[i].options.color = item.textColor;
                array[i].options.size = item.textSize;
            });
            this.collectLabels.push({ x: 0, y: 200, w: 400, h: 150,
                text: " `Platformer` single player mod ",
                options: {
                    color: "black",
                    size: 20
                }
            });
            return this.collectLabels;
        };
        return GameMap;
    }());
    exports.default = GameMap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/platformer-single-player/scripts/packs/level1.ts":
/*!***********************************************************************!*\
  !*** ./src/examples/platformer-single-player/scripts/packs/level1.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level1 = [{ "x": 700.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3800.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 4500.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5196.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5586.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 5900.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 6396.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7104.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7404.0,
            "y": 350.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7694.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7408.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 7586.0,
            "y": 1875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 6152.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 6794.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7396.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7638.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7450.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7900.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8196.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8590.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8994.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9202.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9482.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9800.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10200.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10698.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 11692.0,
            "y": 1275.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12304.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12004.0,
            "y": 1175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12600.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12892.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13116.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13308.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13502.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13706.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13900.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14094.0,
            "y": 175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14194.0,
            "y": 1375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14798.0,
            "y": 1375.0,
            "w": 650.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 13.0,
                "tilesY": 1.0 } },
        { "x": 15998.0,
            "y": 1300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 15990.0,
            "y": 900.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17006.0,
            "y": 800.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 16998.0,
            "y": 1100.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17938.0,
            "y": 1000.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18526.0,
            "y": 600.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18404.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 17892.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18144.0,
            "y": 2300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18148.0,
            "y": 2175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/hudKey_red.png */ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_red.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "Level2",
            "points": 10 },
        { "x": 6282.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6026.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6780.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 7092.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4398.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4504.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4596.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 11998.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12286.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12600.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12886.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13102.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13296.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13494.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13698.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13900.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 14188.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": "9069.0",
            "y": "1037.5",
            "text": "Level2",
            "textColor": "orange",
            "textSize": "22" },
        { "x": 800.0,
            "y": 350.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3600.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 5402.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15604.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16390.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16386.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15602.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15106.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14502.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 700.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3800.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 4500.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5196.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5586.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 5900.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 6396.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7104.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7404.0,
            "y": 350.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7694.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7408.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 7586.0,
            "y": 1875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 6152.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 6794.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7396.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7638.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7450.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7900.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8196.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8590.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8994.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9202.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9482.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9800.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10200.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10698.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 11692.0,
            "y": 1275.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12304.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12004.0,
            "y": 1175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12600.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12892.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13116.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13308.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13502.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13706.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13900.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14094.0,
            "y": 175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14194.0,
            "y": 1375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14798.0,
            "y": 1375.0,
            "w": 650.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 13.0,
                "tilesY": 1.0 } },
        { "x": 15998.0,
            "y": 1300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 15990.0,
            "y": 900.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17006.0,
            "y": 800.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 16998.0,
            "y": 1100.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17938.0,
            "y": 1000.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18526.0,
            "y": 600.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18404.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 17892.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18144.0,
            "y": 2300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18148.0,
            "y": 2175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/hudKey_red.png */ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_red.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "Level2",
            "points": 10 },
        { "x": 6282.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6026.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6780.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 7092.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4398.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4504.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4596.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 11998.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12286.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12600.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12886.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13102.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13296.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13494.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13698.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13900.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 14188.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": "9069.0",
            "y": "1037.5",
            "text": "Level2",
            "textColor": "orange",
            "textSize": "22" },
        { "x": 800.0,
            "y": 350.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3600.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 5402.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15604.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16390.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16386.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15602.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15106.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14502.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 700.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 1400.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 2300.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3000.0,
            "y": 675.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 3800.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 4500.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5196.0,
            "y": 475.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 5586.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 5900.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 6396.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7104.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7404.0,
            "y": 350.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7694.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 7408.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 7586.0,
            "y": 1875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 6152.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 6794.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7396.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7638.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7450.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 7900.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8196.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8590.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 8994.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9202.0,
            "y": 875.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9482.0,
            "y": 675.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 9800.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10200.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 10698.0,
            "y": 475.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 11692.0,
            "y": 1275.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/grass.png */ "./src/examples/platformer-single-player/imgs/grounds/grass.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12304.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12004.0,
            "y": 1175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12600.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 12892.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13116.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13308.0,
            "y": 975.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13502.0,
            "y": 775.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13706.0,
            "y": 575.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 13900.0,
            "y": 375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14094.0,
            "y": 175.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14194.0,
            "y": 1375.0,
            "w": 100.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/lollipopRed.png */ "./src/examples/platformer-single-player/imgs/grounds/lollipopRed.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 1.0 } },
        { "x": 14798.0,
            "y": 1375.0,
            "w": 650.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 13.0,
                "tilesY": 1.0 } },
        { "x": 15998.0,
            "y": 1300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 15990.0,
            "y": 900.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17006.0,
            "y": 800.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 16998.0,
            "y": 1100.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 17938.0,
            "y": 1000.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18526.0,
            "y": 600.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18404.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 17892.0,
            "y": 1800.0,
            "w": 200.0,
            "h": 800.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 16.0 } },
        { "x": 18144.0,
            "y": 2300.0,
            "w": 800.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 4.0 } },
        { "x": 18148.0,
            "y": 2175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/hudKey_red.png */ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_red.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "Level2",
            "points": 10 },
        { "x": 6282.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6026.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 6780.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 7092.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4398.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4504.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 4596.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3000.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 3100.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 11998.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12286.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12600.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 12886.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13102.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13296.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13494.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13698.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 13900.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 14188.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/coin-1.png */ "./src/examples/platformer-single-player/imgs/collect-items/coin-1.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": "9069.0",
            "y": "1037.5",
            "text": "Level2",
            "textColor": "orange",
            "textSize": "22" },
        { "x": 800.0,
            "y": 350.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 550.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3300.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 2000.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1100.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 1700.0,
            "y": 150.0,
            "w": 50.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 2.0 } },
        { "x": 3600.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 5402.0,
            "y": 350.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15604.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16390.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16386.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15602.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 15106.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14502.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/floor2.png */ "./src/examples/platformer-single-player/imgs/grounds/floor2.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": "200.0",
            "y": "87.5",
            "text": "Level1",
            "textColor": "orange",
            "textSize": "22" },
        { "x": 1200.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 1600.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 1200.0,
            "y": 575.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 1600.0,
            "y": 575.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 2100.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 2600.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 2400.0,
            "y": 575.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 3984.0,
            "y": 375.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 5066.0,
            "y": 375.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 7402.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 7280.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14824.0,
            "y": 1275.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 17890.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/hudKey_green_empty.png */ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_green_empty.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "Level2",
            "points": 10 }];
    exports.default = Level1;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/platformer-single-player/scripts/packs/level2.ts":
/*!***********************************************************************!*\
  !*** ./src/examples/platformer-single-player/scripts/packs/level2.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level2 = [{ "x": 600.0,
            "y": 600.0,
            "w": 600.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 12.0,
                "tilesY": 12.0 } },
        { "x": 1400.0,
            "y": 600.0,
            "w": 600.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 12.0,
                "tilesY": 12.0 } },
        { "x": 1000.0,
            "y": 1400.0,
            "w": 600.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 12.0,
                "tilesY": 12.0 } },
        { "x": 2300.0,
            "y": 600.0,
            "w": 600.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 12.0,
                "tilesY": 12.0 } },
        { "x": 1900.0,
            "y": 1400.0,
            "w": 600.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 12.0,
                "tilesY": 12.0 } },
        { "x": 3100.0,
            "y": 1500.0,
            "w": 1000.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 20.0,
                "tilesY": 4.0 } },
        { "x": 4410.0,
            "y": 1400.0,
            "w": 1000.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 20.0,
                "tilesY": 4.0 } },
        { "x": 5606.0,
            "y": 1100.0,
            "w": 1000.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxEmpty.png */ "./src/examples/platformer-single-player/imgs/grounds/boxEmpty.png"),
            "tiles": { "tilesX": 20.0,
                "tilesY": 4.0 } },
        { "x": 6604.0,
            "y": 800.0,
            "w": 1000.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/brickWall.png */ "./src/examples/platformer-single-player/imgs/grounds/brickWall.png"),
            "tiles": { "tilesX": 20.0,
                "tilesY": 4.0 } },
        { "x": 6598.0,
            "y": 1200.0,
            "w": 1000.0,
            "h": 200.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/brickWall.png */ "./src/examples/platformer-single-player/imgs/grounds/brickWall.png"),
            "tiles": { "tilesX": 20.0,
                "tilesY": 4.0 } },
        { "x": 7398.0,
            "y": 500.0,
            "w": 200.0,
            "h": 1000.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/brickWall.png */ "./src/examples/platformer-single-player/imgs/grounds/brickWall.png"),
            "tiles": { "tilesX": 4.0,
                "tilesY": 20.0 } },
        { "x": 7796.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 8000.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 8200.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 8396.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 8592.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 8804.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 9002.0,
            "y": 850.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 9402.0,
            "y": 650.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 10098.0,
            "y": 1250.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 10302.0,
            "y": 1150.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 10504.0,
            "y": 950.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 10696.0,
            "y": 750.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 10898.0,
            "y": 550.0,
            "w": 50.0,
            "h": 700.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 14.0 } },
        { "x": 11600.0,
            "y": 575.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 11594.0,
            "y": 875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 11596.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 11606.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 12602.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 12592.0,
            "y": 875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 12598.0,
            "y": 575.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 12590.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 13600.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 13598.0,
            "y": 875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 13584.0,
            "y": 575.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 13596.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 14592.0,
            "y": 1175.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 14580.0,
            "y": 875.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 14594.0,
            "y": 575.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 14598.0,
            "y": 275.0,
            "w": 700.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/chocoCenter.png */ "./src/examples/platformer-single-player/imgs/grounds/chocoCenter.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 1.0 } },
        { "x": 15396.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15398.0,
            "y": 750.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15396.0,
            "y": 950.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15394.0,
            "y": 1150.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15690.0,
            "y": 1050.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15696.0,
            "y": 850.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15690.0,
            "y": 650.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15700.0,
            "y": 450.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 15900.0,
            "y": 250.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 16298.0,
            "y": 450.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 17302.0,
            "y": 650.0,
            "w": 800.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 16.0,
                "tilesY": 2.0 } },
        { "x": 16896.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 17694.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 17100.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 17300.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 17500.0,
            "y": 550.0,
            "w": 100.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 2.0 } },
        { "x": 16906.0,
            "y": 1000.0,
            "w": 100.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 12.0 } },
        { "x": 17686.0,
            "y": 1000.0,
            "w": 100.0,
            "h": 600.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 2.0,
                "tilesY": 12.0 } },
        { "x": 17300.0,
            "y": 1250.0,
            "w": 700.0,
            "h": 100.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 14.0,
                "tilesY": 2.0 } },
        { "x": 17196.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17202.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17304.0,
            "y": 975.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17382.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17390.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16996.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17010.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17078.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17094.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17500.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17588.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17476.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17602.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17738.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17650.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17544.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17456.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17342.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17252.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17140.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17058.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16942.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 16852.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 700.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 1300.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 1600.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 2200.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 2000.0,
            "y": 275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 2600.0,
            "y": 275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 1700.0,
            "y": 275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 1100.0,
            "y": 275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 2600.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 3600.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 3900.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 4906.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 5112.0,
            "y": 975.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 6116.0,
            "y": 675.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7084.0,
            "y": 675.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7404.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7596.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7700.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7498.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7690.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7510.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7758.0,
            "y": 675.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7752.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7506.0,
            "y": 575.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 8294.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 8488.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 8696.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 8884.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 9094.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 9294.0,
            "y": 1375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 9402.0,
            "y": 1275.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 9510.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castleMid.png */ "./src/examples/platformer-single-player/imgs/grounds/castleMid.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 9694.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/tileRed_12.png */ "./src/examples/platformer-single-player/imgs/collect-items/tileRed_12.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 9898.0,
            "y": 975.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/tileRed_12.png */ "./src/examples/platformer-single-player/imgs/collect-items/tileRed_12.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "collectItemPoint",
            "points": 10 },
        { "x": 11248.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11952.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11230.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11944.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11234.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11944.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11226.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 11938.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12248.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12242.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12254.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12236.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12952.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12948.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12940.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 12932.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13242.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13924.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13902.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13232.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13254.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13916.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13258.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 13912.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14248.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14928.0,
            "y": 1075.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14252.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14892.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14260.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14908.0,
            "y": 475.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14900.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 14266.0,
            "y": 175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 17298.0,
            "y": 375.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/collect-items/hudKey_yellow.png */ "./src/examples/platformer-single-player/imgs/collect-items/hudKey_yellow.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "colectionLabel": "Level3",
            "points": 10 },
        { "x": 1000.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 1400.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 2300.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 1900.0,
            "y": 975.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 3100.0,
            "y": 1275.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 4172.0,
            "y": 1175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 4674.0,
            "y": 1175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 5342.0,
            "y": 875.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 2800.0,
            "y": 1275.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 5854.0,
            "y": 875.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 6428.0,
            "y": 575.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 6904.0,
            "y": 575.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 6282.0,
            "y": 975.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 11596.0,
            "y": 975.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 11582.0,
            "y": 675.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 11600.0,
            "y": 375.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 11618.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 12550.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 12604.0,
            "y": 475.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 12562.0,
            "y": 675.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 12530.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 13594.0,
            "y": 975.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 13586.0,
            "y": 675.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 13614.0,
            "y": 475.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 13580.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14586.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14504.0,
            "y": 475.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14622.0,
            "y": 775.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14566.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 13762.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 12724.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 14450.0,
            "y": 175.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": 17098.0,
            "y": 1075.0,
            "w": 75.0,
            "h": 75.0,
            "tex": __webpack_require__(/*! ../../imgs/enemies/crapmunch.png */ "./src/examples/platformer-single-player/imgs/enemies/crapmunch.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 },
            "enemyLabel": "crapmunch",
            "enemyOptions": 10 },
        { "x": "300.0",
            "y": "87.5",
            "text": "Level2",
            "textColor": "red",
            "textSize": "32" },
        { "x": "2493.0",
            "y": "537.5",
            "text": "jump",
            "textColor": "red",
            "textSize": "32" },
        { "x": "3597.0",
            "y": "487.5",
            "text": ">",
            "textColor": "red",
            "textSize": "32" },
        { "x": 4994.0,
            "y": 1175.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 6016.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/boxAlt.png */ "./src/examples/platformer-single-player/imgs/grounds/boxAlt.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 6892.0,
            "y": 775.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7570.0,
            "y": 875.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } },
        { "x": 7696.0,
            "y": 675.0,
            "w": 50.0,
            "h": 50.0,
            "tex": __webpack_require__(/*! ../../imgs/grounds/castle.png */ "./src/examples/platformer-single-player/imgs/grounds/castle.png"),
            "tiles": { "tilesX": 1.0,
                "tilesY": 1.0 } }];
    exports.default = Level2;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/icon/android-icon.png":
/*!***********************************!*\
  !*** ./src/icon/android-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4b2e6890350da1b000684ed7c44c21f6android-icon.png";

/***/ }),

/***/ "./src/icon/apple-icon.png":
/*!*********************************!*\
  !*** ./src/icon/apple-icon.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/1708266b1ad0f64d4ef5bbc8f91ce6f4apple-icon.png";

/***/ }),

/***/ "./src/icon/favicon-96x96.png":
/*!************************************!*\
  !*** ./src/icon/favicon-96x96.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/92457f964277ed653fd6b8b2351af6b1favicon-96x96.png";

/***/ }),

/***/ "./src/icon/favicon.ico":
/*!******************************!*\
  !*** ./src/icon/favicon.ico ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/styles/favicon.ico";

/***/ }),

/***/ "./src/icon/permission/gcheckmark.png":
/*!********************************************!*\
  !*** ./src/icon/permission/gcheckmark.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/4f6b825ac3039cd30c954907276a882bgcheckmark.png";

/***/ }),

/***/ "./src/icon/permission/microphone.png":
/*!********************************************!*\
  !*** ./src/icon/permission/microphone.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/9497063c731e3d6e64a70d4c3ff782b2microphone.png";

/***/ }),

/***/ "./src/icon/permission/screen.png":
/*!****************************************!*\
  !*** ./src/icon/permission/screen.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/629041088ad05d427dcf74d815be69fascreen.png";

/***/ }),

/***/ "./src/icon/permission/share-files.png":
/*!*********************************************!*\
  !*** ./src/icon/permission/share-files.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/2f3ff38b0fcb44d518898c13c00b00dfshare-files.png";

/***/ }),

/***/ "./src/icon/permission/warning.png":
/*!*****************************************!*\
  !*** ./src/icon/permission/warning.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/491c4a955102981d6f26bfacf3ff5f61warning.png";

/***/ }),

/***/ "./src/icon/permission/webcam.png":
/*!****************************************!*\
  !*** ./src/icon/permission/webcam.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/450d15e09ed365c4b8f0570b527aab21webcam.png";

/***/ }),

/***/ "./src/libs/class/bot-behavior.ts":
/*!****************************************!*\
  !*** ./src/libs/class/bot-behavior.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Matter) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BotBehavior = (function () {
        function BotBehavior(enemy, options) {
            this.patrolType = "left-right";
            this.patrolPeriod = 3000;
            this.patrolLoop = true;
            this.intesity = 20;
            this.patrolDirection = 1;
            this.imageFlip = false;
            this.enemy = enemy;
            if (options) {
                this.patrolType = options.patrolType;
                if (this.patrolType === "left-right") {
                    this.patrol = this.patrolLeftRight;
                }
                else if (this.patrolType === "up-down") {
                    this.patrol = this.patrolUpDown;
                }
                this.patrolPeriod = options.patrolPeriod;
                this.patrolLoop = options.patrolLoop;
                console.log("Bot options loaded.");
            }
            else {
                this.patrol = this.patrolLeftRight;
            }
        }
        BotBehavior.prototype.patrolUpDown = function () {
            var root = this;
            setTimeout(function () {
                root.imageFlip = !root.imageFlip;
                root.enemy.render.visualComponent.setHorizontalFlip(root.imageFlip);
                Matter.Body.setVelocity(root.enemy, { x: 0, y: root.intesity * root.patrolDirection });
                root.checkPatrol();
            }, this.patrolPeriod);
        };
        BotBehavior.prototype.patrolLeftRight = function () {
            var root = this;
            setTimeout(function () {
                root.imageFlip = !root.imageFlip;
                root.enemy.render.visualComponent.setHorizontalFlip(root.imageFlip);
                Matter.Body.setVelocity(root.enemy, { x: root.intesity * root.patrolDirection, y: -1 });
                root.checkPatrol();
            }, this.patrolPeriod);
        };
        BotBehavior.prototype.checkPatrol = function () {
            if (this.patrolLoop) {
                this.patrolDirection *= -1;
                this.patrol();
            }
        };
        return BotBehavior;
    }());
    exports.default = BotBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/browser.ts":
/*!***********************************!*\
  !*** ./src/libs/class/browser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Browser = (function () {
        function Browser() {
            this.isMobile = false;
            this.device = "unknow";
            this.uAgent = navigator.userAgent;
            this.os = "";
            this.description = "";
            this.windowsOS = null;
            this.navLinux = this.uAgent.match(/Linux/gi);
            this.navUbuntu = this.uAgent.match(/Ubuntu/gi);
            this.gecko = this.uAgent.match(/gecko/gi);
            this.navOpera = (this.uAgent.match(/Opera|OPR\//) ? true : false);
            this.operatablet = this.uAgent.match(/Tablet/gi);
            this.navIpad = this.uAgent.match(/ipad/gi);
            this.navIphone = this.uAgent.match(/iphone/gi);
            this.navFirefox = this.uAgent.match(/Firefox/gi);
            this.navMozilla = this.uAgent.match(/mozilla/gi);
            this.navChrome = this.uAgent.match(/Chrome/gi);
            this.navSafari = this.uAgent.match(/safari/gi);
            this.navandroid = this.uAgent.match(/android/gi);
            this.windowsOS = this.uAgent.match(/Windows NT/gi);
            this.mobile = this.uAgent.match(/mobile/gi);
            this.isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
            if (this.isMobile) {
                var userAgent = this.uAgent.toLowerCase();
                if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1)) {
                    this.device = "ANDROID";
                }
                else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1)) {
                    this.device = "ANDROID_TABLET";
                }
            }
            else {
                this.device = "desktop";
            }
            this.check();
        }
        Browser.prototype.check = function () {
            if (this.windowsOS) {
                this.device = "desktop";
                this.os = "win";
            }
            if (this.navFirefox && this.navandroid && this.device === "ANDROID") {
                this.description = "mobile_firefox_android";
            }
            if (this.navFirefox && this.navandroid && this.device === "ANDROID_TABLET") {
                this.description = "mobile_firefox_android_tablet";
            }
            if (this.navOpera && this.navandroid) {
                this.description = "opera_mobile_android";
            }
            if (this.navOpera && this.navandroid && this.operatablet) {
                this.description = "opera_mobile_android_tablet";
            }
            if (this.navSafari) {
                var Iphonesafari = this.uAgent.match(/iphone/gi);
                if (Iphonesafari) {
                    this.device = "IPHONE";
                    this.description = "safari_mobile_iphone";
                }
                else if (this.navIpad) {
                    this.device = "IPAD";
                    this.description = "mobile_safari_chrome_ipad";
                }
                else if (this.navandroid) {
                    this.device = "ANDROID";
                    this.description = "android_native";
                }
            }
            if (this.navChrome && this.navSafari && this.navMozilla && this.device === "ANDROID_TABLET") {
                this.description = "mobile_chrome_android_tablet";
            }
            if (this.navChrome && this.navSafari && this.navMozilla && this.device === "ANDROID") {
                this.description = "mobile_chrome_android";
            }
            if (this.navChrome && this.navSafari && this.navMozilla[0] && this.os === "win") {
                this.description = "chrome";
            }
            if (this.navChrome && this.device === "ANDROID") {
                this.description = "chrome_browser";
            }
            if (this.navMozilla && !this.isMobile && this.gecko && this.navFirefox) {
                this.description = "firefox_desktop";
            }
            if (this.navOpera && this.device === "ANDROID" && !this.isMobile) {
                this.device = "desktop";
                this.description = "opera_desktop";
            }
            if (this.navUbuntu && this.navMozilla && this.navFirefox && this.navLinux) {
                this.device = "desktop";
                this.description = "firefox_desktop_linux";
            }
            if (this.navMozilla && this.navLinux && this.navChrome && this.navSafari) {
                this.device = "desktop";
                this.description = "chrome_desktop_linux";
            }
            if (this.navMozilla && this.navLinux && this.navChrome && this.navSafari && this.navOpera) {
                this.device = "desktop";
                this.description = "opera_desktop_linux";
            }
        };
        return Browser;
    }());
    exports.default = Browser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/math.ts":
/*!********************************!*\
  !*** ./src/libs/class/math.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Counter = (function () {
        function Counter(start, finish, step, regimeType) {
            this.step = 1;
            this.start = 0;
            this.finish = 10;
            this.value = 0;
            this.delay = 100;
            this.delayInitial = 100;
            this.regimeType = "REPEAT";
            this.onRepeat = function () { };
            this.value = start;
            this.start = start;
            this.finish = finish;
            this.step = step;
            if (regimeType) {
                this.regimeType = regimeType;
            }
        }
        Counter.prototype.setNewSeqFrameRegimeType = function (newSeqType) {
            this.regimeType = newSeqType;
        };
        Counter.prototype.setNewValue = function (newValue) {
            this.value = newValue;
        };
        Counter.prototype.setDelay = function (newDelay) {
            this.delay = newDelay;
            this.delayInitial = newDelay;
        };
        Counter.prototype.getRawValue = function () {
            return this.value;
        };
        Counter.prototype.getValue = function () {
            if (this.regimeType === "CONST") {
                return this.value;
            }
            if (this.delay > 0) {
                this.delay--;
                return this.value;
            }
            this.delay = this.delayInitial;
            if (this.regimeType !== "oscMin" && this.regimeType !== "oscMax") {
                if (this.value + this.step <= this.finish) {
                    this.value = this.value + this.step;
                    return this.value;
                }
                else {
                    switch (this.regimeType) {
                        case "STOP": {
                            return this.value;
                        }
                        case "REPEAT": {
                            this.value = this.start;
                            this.onRepeat();
                            return this.value;
                        }
                        default:
                            console.warn("NO CASE");
                    }
                }
            }
            else {
                if (this.regimeType === "oscMin") {
                    if (this.value - this.step >= this.start) {
                        this.value = this.value - this.step;
                        return this.value;
                    }
                    else {
                        this.regimeType = "oscMax";
                        return this.value;
                    }
                }
                else if (this.regimeType === "oscMax") {
                    if (this.value + this.step <= this.finish) {
                        this.value = this.value + this.step;
                        return this.value;
                    }
                    else {
                        this.regimeType = "oscMin";
                        return this.value;
                    }
                }
            }
            return 0;
        };
        return Counter;
    }());
    exports.Counter = Counter;
    function getDistance(pointA, pointB) {
        var a = pointA.x - pointB.x;
        var b = pointA.y - pointB.y;
        return Math.sqrt(a * a + b * b);
    }
    exports.getDistance = getDistance;
    function rotateVector(vector, angle) {
        return {
            x: vector.x * Math.cos(angle) - vector.y * Math.sin(angle),
            y: vector.x * Math.sin(angle) + vector.y * Math.cos(angle),
        };
    }
    exports.rotateVector = rotateVector;
    function someRandomNumber() { return (Math.random() * 1000).toString().replace(".", ""); }
    exports.someRandomNumber = someRandomNumber;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/messager-box.ts":
/*!****************************************!*\
  !*** ./src/libs/class/messager-box.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./system */ "./src/libs/class/system.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, system_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageBox = (function () {
        function MessageBox() {
            var _this = this;
            this.showOnInit = false;
            this.welcomeMessage = "This application was created on visual-ts n\ Example: Real time multiplayer `Platformer` zlatnaspirala@gmail.com";
            this.messageBox = system_1.byId("message-box");
            this.asynContentFlag = false;
            this.init = function () {
                var myInstance = _this;
                fetch("./templates/message-box.html", {
                    headers: system_1.htmlHeader,
                }).
                    then(function (res) {
                    return res.text();
                }).then(function (html) {
                    myInstance.popup.innerHTML = html;
                    if (myInstance.showOnInit) {
                        myInstance.popup.style.display = "block";
                    }
                    else {
                        myInstance.popup.style.display = "none";
                    }
                    myInstance.popup.classList.add("message-box-show-animation");
                    myInstance.messageBox.classList.remove("message-box-hide-animation");
                    myInstance.messageBoxContent = system_1.byId("message-box-content");
                    myInstance.messageBoxContent.innerHTML = myInstance.welcomeMessage;
                    console.info("MessageBox is ready.");
                    system_1.byId("message-box-btn").addEventListener("click", myInstance.hide, false);
                    if (myInstance.asynContentFlag) {
                        myInstance.asynContentFlag = false;
                        myInstance.messageBoxContent.innerHTML = myInstance.messageBoxContentFlag;
                        myInstance.popup.style.display = "block";
                    }
                });
            };
            console.warn("MessageBox is constructed.");
            this.popup = system_1.byId("message-box");
            this.init();
        }
        MessageBox.prototype.show = function (content) {
            try {
                this.messageBoxContentFlag = content;
                this.messageBox.classList.remove("message-box-hide-animation");
                this.messageBox.classList.add("message-box-show-animation");
                this.messageBoxContent = system_1.byId("message-box-content");
                this.messageBoxContent.innerText = content;
                this.messageBox.style.display = "block";
            }
            catch (err) {
                this.asynContentFlag = true;
            }
        };
        MessageBox.prototype.hide = function (e) {
            var messageBox = e.currentTarget.parentElement.parentElement;
            messageBox.classList.remove("message-box-show-animation");
            messageBox.classList.add("message-box-hide-animation");
            setTimeout(function () {
                messageBox.style.display = "none";
            }, 1000);
        };
        return MessageBox;
    }());
    exports.default = MessageBox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/resources.ts":
/*!*************************************!*\
  !*** ./src/libs/class/resources.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./math */ "./src/libs/class/math.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, math_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resources = (function () {
        function Resources() {
            this.images = {};
            this.totalImages = 0;
            this.activeSlotIndex = "";
        }
        Resources.prototype.insertImg = function (name, path) {
            var _this = this;
            var img = new Image();
            img.src = path;
            img.onload = function () {
                _this.totalImages++;
            };
            this.activeSlotIndex = name;
            this.images[name] = img;
            this.getImg = this.getImgSingle;
        };
        Resources.prototype.insertImgs = function (name, imgRes) {
            this.activeSlotIndex = name;
            for (var x = 0; x < imgRes.length; x++) {
                this.insertImgSerialHelper(name + x, imgRes[x]);
            }
            this.getImg = this.getImgSerial;
            this.SeqFrame = new math_1.Counter(0, imgRes.length - 1, 1);
        };
        Resources.prototype.getTotalImages = function () {
            return this.totalImages;
        };
        Resources.prototype.clear = function () {
            this.images = {};
            this.totalImages = 0;
        };
        Resources.prototype.insertImgSerialHelper = function (name, path) {
            var _this = this;
            var img = new Image();
            img.src = path;
            img.onload = function () {
                _this.totalImages++;
            };
            this.images[name] = img;
        };
        Resources.prototype.getImgSingle = function () {
            if (this.images[this.activeSlotIndex] instanceof HTMLImageElement) {
                return this.images[this.activeSlotIndex];
            }
        };
        Resources.prototype.getImgSerial = function () {
            return this.images[this.activeSlotIndex + this.SeqFrame.getValue()];
        };
        return Resources;
    }());
    exports.default = Resources;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/sound.ts":
/*!*********************************!*\
  !*** ./src/libs/class/sound.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sound = (function () {
        function Sound(name) {
            this.audioBox = {};
            this.name = "audio-staff";
            this.name = name;
            this.aContainer = document.createElement("div");
            this.aContainer.setAttribute("id", "audio-box");
            document.body.appendChild(this.aContainer);
        }
        Sound.prototype.createAudio = function (path, idCaller, loop, autoplay) {
            if (typeof path === undefined || idCaller === undefined) {
                console.warn("You can't create audio object without src attribute and id value.");
                return;
            }
            var element = document.createElement("audio");
            if (typeof autoplay === undefined) {
                autoplay = false;
            }
            if (typeof loop === undefined) {
                loop = false;
            }
            element.setAttribute("id", idCaller);
            if (element.canPlayType("audio/mpeg")) {
                element.setAttribute("src", path);
            }
            else {
                element.setAttribute("src", path);
            }
            this.audioBox[idCaller] = element;
            this.aContainer.appendChild(this.audioBox[idCaller]);
            element.addEventListener('canplaythrough', function () {
                var testPlay = this.play();
                if (testPlay !== undefined) {
                    testPlay.then(function () {
                    }).catch(function (error) {
                        console.warn("Audio with id can't play at the moment. Error: ", error);
                    });
                }
            }, false);
        };
        Sound.prototype.playById = function (id) {
            var testPlay = this.audioBox[id].play();
            if (testPlay !== undefined) {
                testPlay.then(function () {
                }).catch(function (error) {
                    console.warn("Audio with id" + id + " can't play at the moment.");
                });
            }
        };
        return Sound;
    }());
    exports.default = Sound;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/system.ts":
/*!**********************************!*\
  !*** ./src/libs/class/system.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptManager = {
        scriptManager_ID: 0,
        loaded: {},
        load: function addScript(src) {
            var s = document.createElement("script");
            s.onload = function () {
                exports.scriptManager.scriptManager_ID++;
                console.log("Async script id loaded: " + this.src);
                if (typeof this.src !== "undefined") {
                    var filename = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.lastIndexOf("."));
                    filename = filename.replace(".", "_");
                    eval("try{scriptManager.loaded._" + filename + "(s)}catch(e){}");
                }
            };
            s.setAttribute("src", src);
            document.body.appendChild(s);
        },
    };
    function byId(id) {
        return document.getElementById(id);
    }
    exports.byId = byId;
    function getElement(selector) {
        return document.querySelector(selector);
    }
    exports.getElement = getElement;
    function createAppEvent(name, myDetails) {
        return new CustomEvent(name, {
            detail: {
                eventName: name,
                data: myDetails,
            },
            bubbles: true,
        });
    }
    exports.createAppEvent = createAppEvent;
    function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
    exports.getRandomColor = getRandomColor;
    function bytesToSize(bytes) {
        var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) {
            return "0 Bytes";
        }
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (Math.round(bytes / (Math.pow(1024, i), 2))) + " " + sizes[i];
    }
    exports.bytesToSize = bytesToSize;
    function randomIntFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    exports.randomIntFromTo = randomIntFromTo;
    function validateEmail(email) {
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regexp.test(email) === false) {
            return "Email is not valid !";
        }
        return null;
    }
    exports.validateEmail = validateEmail;
    function validatePassword(pass) {
        if (pass.length < 8) {
            return false;
        }
        return true;
    }
    exports.validatePassword = validatePassword;
    exports.HeaderTypes = {
        textPlan: "text/plain",
        html: "text/html",
        jpeg: "image/jpeg",
        png: "image/png",
        mpeg: "audio/mpeg",
        ogg: "audio/ogg",
        audio: "audio/*",
        mp4: "video/mp4",
        app: "application/*",
        appJson: "application/json",
        appJS: "application/javascript",
        appECMA: "application/ecmascript",
        appOctetSteam: "application/octet-stream",
    };
    exports.jsonHeaders = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
    });
    exports.htmlHeader = new Headers({
        "Content-Type": "text/html",
        "Accept": "text/plain",
    });
    function encodeString(str) {
        return btoa(str);
    }
    exports.encodeString = encodeString;
    function decodeString(str) {
        return atob(str);
    }
    exports.decodeString = decodeString;
    function encodeStringTest(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt("0x" + p1, 16));
        }));
    }
    exports.encodeStringTest = encodeStringTest;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/view-port.ts":
/*!*************************************!*\
  !*** ./src/libs/class/view-port.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewPort = (function () {
        function ViewPort(config) {
            this.aspectRatio = 1.333;
            this.config = config;
            this.aspectRatio = this.config.getAspectRatio();
            if (this.config.getDrawRefference() === "diametric-fullscreen") {
                this.reperH = function () {
                    return window.innerHeight;
                };
                this.reperW = function () {
                    return window.innerWidth;
                };
            }
            else if (this.config.getDrawRefference() === "frame") {
                this.reperH = function () {
                    if (window.innerHeight >= window.innerWidth / this.aspectRatio) {
                        return window.innerWidth / this.aspectRatio;
                    }
                    else {
                        return window.innerHeight;
                    }
                };
                this.reperW = function () {
                    if (window.innerWidth >= window.innerHeight * this.aspectRatio) {
                        return window.innerHeight * this.aspectRatio;
                    }
                    else {
                        return window.innerWidth;
                    }
                };
            }
        }
        ViewPort.prototype.initCanvasDom = function () {
            this.canvasDom = document.getElementsByTagName("canvas")[0];
        };
        ViewPort.prototype.getWidth = function (percente) {
            return this.reperW() / 100 * percente;
        };
        ViewPort.prototype.getHeight = function (percente) {
            return this.reperH() / 100 * percente;
        };
        ViewPort.prototype.setAspectRatio = function (aspectRatio) {
            this.aspectRatio = aspectRatio;
        };
        ViewPort.prototype.getCanvasWidth = function () {
            return document.getElementsByTagName("canvas")[0].clientWidth;
        };
        ViewPort.prototype.getCanvasHeight = function () {
            return document.getElementsByTagName("canvas")[0].clientHeight;
        };
        ViewPort.prototype.setCanvasWidth = function (width) {
            var canvasCss;
            canvasCss = this.canvasDom[0].style;
            canvasCss.width = width;
        };
        ViewPort.prototype.setCanvasHeight = function (height) {
            var canvasCss;
            canvasCss = this.canvasDom[0].style;
            canvasCss.height = height;
        };
        return ViewPort;
    }());
    exports.default = ViewPort;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/visual-methods/sprite-animation.ts":
/*!***********************************************************!*\
  !*** ./src/libs/class/visual-methods/sprite-animation.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../math */ "./src/libs/class/math.ts"), __webpack_require__(/*! ./texture */ "./src/libs/class/visual-methods/texture.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, math_1, texture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpriteTextureComponent = (function (_super) {
        __extends(SpriteTextureComponent, _super);
        function SpriteTextureComponent(name, imgRes, shema) {
            var _this = _super.call(this, name, imgRes) || this;
            _this.keepAspectRatio = true;
            _this.nextRow = function () {
                _this.seqFrameY.setDelay(-1);
                _this.seqFrameY.getValue();
            };
            _this.shema = shema;
            var localSumX = shema.byX - 1;
            var localSumY = shema.byY - 1;
            _this.seqFrameX = new math_1.Counter(0, localSumX, 1);
            _this.seqFrameY = new math_1.Counter(0, localSumY, 1);
            _this.seqFrameX.setDelay(10);
            _this.seqFrameY.onRepeat = _this.nextColumn;
            _this.seqFrameX.onRepeat = _this.nextRow;
            _this.flipImage = function (image, ctx, sx, sy, sw, sh, dx, dy, dw, dh, flipH, flipV) {
                var scaleH = flipH ? -1 : 1, scaleV = flipV ? -1 : 1;
                ctx.save();
                ctx.scale(scaleH, scaleV);
                ctx.drawImage(this.assets.getImg(), sx, sy, sw, sh, dx, dy, dw, dh);
                ctx.restore();
            };
            return _this;
        }
        SpriteTextureComponent.prototype.setNewShemaByX = function (byX) {
            this.shema.byX = byX;
            var localSumX = this.shema.byX - 1;
            this.seqFrameX = new math_1.Counter(0, localSumX, 1);
            this.seqFrameY.onRepeat = this.nextColumn;
            this.seqFrameX.onRepeat = this.nextRow;
        };
        SpriteTextureComponent.prototype.setNewShemaByY = function (byY) {
            this.shema.byY = byY;
            var localSumY = this.shema.byY - 1;
            this.seqFrameY = new math_1.Counter(0, localSumY, 1);
            this.seqFrameY.onRepeat = this.nextColumn;
            this.seqFrameX.onRepeat = this.nextRow;
        };
        SpriteTextureComponent.prototype.setNewShema = function (shema) {
            this.setNewShemaByX(shema.byX);
            this.setNewShemaByY(shema.byY);
        };
        SpriteTextureComponent.prototype.drawComponent = function (c, part) {
            if (this.keepAspectRatio === true) {
                var dist2 = math_1.getDistance(part.vertices[part.vertices.length / 2], part.vertices[part.vertices.length - 1]);
                var dist1 = math_1.getDistance(part.vertices[0], part.vertices[part.vertices.length / 2 - 1]);
                var originW = dist1 / this.verticalTiles * part.render.sprite.xScale;
                var originH = dist2 / this.horizontalTiles * part.render.sprite.yScale;
                var originX = dist1 * -part.render.sprite.xOffset * part.render.sprite.xScale;
                var originY = dist2 * -part.render.sprite.yOffset * part.render.sprite.yScale;
                originX = originX / this.verticalTiles - originW / 2;
                originY = originY / this.horizontalTiles - originH / 2;
                for (var x = -this.verticalTiles / 2; x < this.verticalTiles / 2; x++) {
                    for (var j = -this.horizontalTiles / 2; j < this.horizontalTiles / 2; j++) {
                        var sx = this.seqFrameX.getValue() * this.assets.getImg().width / this.shema.byX;
                        var sy = this.seqFrameY.getRawValue() * this.assets.getImg().height / this.shema.byY;
                        var sw = (this.assets.getImg().width) / this.shema.byX;
                        var sh = (this.assets.getImg().height) / this.shema.byY;
                        var dx = originX - originW * (x);
                        var dy = originY - originH * (j);
                        var dw = originW;
                        var dh = originH;
                        this.flipImage(this.assets.getImg(), c, sx, sy, sw, sh, dx, dy, dw, dh, this.horizontalFlip, this.verticalFlip);
                    }
                }
            }
            else {
                var sx = this.seqFrameX.getValue() * this.assets.getImg().width / this.shema.byX;
                var sy = this.seqFrameY.getRawValue() * this.assets.getImg().height / this.shema.byY;
                var sw = (this.assets.getImg().width) / this.shema.byX;
                var sh = (this.assets.getImg().height) / this.shema.byY;
                var dx = (this.assets.getImg().width * -part.render.sprite.xOffset * part.render.sprite.xScale);
                var dy = (this.assets.getImg().height * -part.render.sprite.yOffset * part.render.sprite.yScale);
                var dw = (this.assets.getImg().width * part.render.sprite.xScale);
                var dh = (this.assets.getImg().height * part.render.sprite.yScale);
                c.drawImage(this.assets.getImg(), sx, sy, sw, sh, dx, dy, dw, dh);
            }
        };
        SpriteTextureComponent.prototype.nextColumn = function () {
        };
        return SpriteTextureComponent;
    }(texture_1.default));
    exports.default = SpriteTextureComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/visual-methods/text.ts":
/*!***********************************************!*\
  !*** ./src/libs/class/visual-methods/text.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../math */ "./src/libs/class/math.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, math_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextComponent = (function () {
        function TextComponent(textArg, options) {
            this.bufferText = [];
            this.text = "Player";
            if (textArg === undefined) {
                throw console.error("You miss text arg in TextComponent constructor...");
            }
            if (typeof textArg !== "string") {
                if (textArg.length > 1) {
                    this.bufferText = textArg;
                }
                else {
                    this.text = textArg[0];
                }
            }
            else {
                this.text = textArg;
            }
            if (options) {
                this.options = options;
            }
            else {
                this.options = { color: "white" };
            }
        }
        TextComponent.prototype.drawComponent = function (c, part) {
            var dist1 = math_1.getDistance(part.vertices[0], part.vertices[1]);
            var dist2 = math_1.getDistance(part.vertices[0], part.vertices[3]);
            var originX = dist1 * -part.render.sprite.xOffset * part.render.sprite.xScale;
            var originY = dist2 * -part.render.sprite.yOffset * part.render.sprite.yScale;
            var originW = dist1;
            var originH = dist2;
            originX += originH / 2;
            originY += originH / 2;
            c.font = "50px sans-serif";
            c.fillStyle = this.options.color || "rgba(255,255,255,1)";
            c.fillText(this.text, originX, originY, originW);
        };
        return TextComponent;
    }());
    exports.default = TextComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/visual-methods/texture.ts":
/*!**************************************************!*\
  !*** ./src/libs/class/visual-methods/texture.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../math */ "./src/libs/class/math.ts"), __webpack_require__(/*! ../resources */ "./src/libs/class/resources.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, math_1, resources_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextureComponent = (function () {
        function TextureComponent(name, imgRes) {
            this.assets = new resources_1.default();
            this.keepAspectRatio = false;
            this.verticalTiles = 1;
            this.horizontalTiles = 1;
            this.horizontalFlip = false;
            this.verticalFlip = false;
            if (name === undefined) {
                throw console.error("You miss first arg : name in TextureComponent instancing...");
            }
            if (imgRes === undefined) {
                throw console.error("You miss second arg : imageRes in TextureComponent instancing...");
            }
            if (typeof imgRes !== "string") {
                if (imgRes.length > 1) {
                    this.assets.insertImgs(name, imgRes);
                }
                else {
                    this.assets.insertImg(name, imgRes[0]);
                }
            }
            else {
                this.assets.insertImg(name, imgRes);
            }
        }
        TextureComponent.prototype.drawComponent = function (c, part) {
            if (this.keepAspectRatio === false) {
                var dist1 = math_1.getDistance(part.vertices[0], part.vertices[1]);
                var dist2 = math_1.getDistance(part.vertices[0], part.vertices[3]);
                var originX = dist1 * -part.render.sprite.xOffset * part.render.sprite.xScale;
                var originY = dist2 * -part.render.sprite.yOffset * part.render.sprite.yScale;
                var originW = dist1 / this.verticalTiles;
                var originH = dist2 / this.horizontalTiles;
                originX = originX / this.verticalTiles - originW / 2;
                originY = originY / this.horizontalTiles - originH / 2;
                for (var x = -this.verticalTiles / 2; x < this.verticalTiles / 2; x++) {
                    for (var j = -this.horizontalTiles / 2; j < this.horizontalTiles / 2; j++) {
                        this.flipImage(this.assets.getImg(), c, originX - originW * (x), originY - originH * (j), originW, originH, this.horizontalFlip, this.verticalFlip);
                    }
                }
            }
            else {
                this.flipImage(this.assets.getImg(), c, this.assets.getImg().width * -part.render.sprite.xOffset * part.render.sprite.xScale, this.assets.getImg().height * -part.render.sprite.yOffset * part.render.sprite.yScale, this.assets.getImg().width * part.render.sprite.xScale, this.assets.getImg().height * part.render.sprite.yScale, this.horizontalFlip, this.verticalFlip);
            }
        };
        TextureComponent.prototype.setVerticalTiles = function (newVerticalTiles) {
            this.verticalTiles = newVerticalTiles;
            return this;
        };
        TextureComponent.prototype.setHorizontalTiles = function (newHorinzontalTiles) {
            this.horizontalTiles = newHorinzontalTiles;
            return this;
        };
        TextureComponent.prototype.setHorizontalFlip = function (newStatus) {
            this.horizontalFlip = newStatus;
        };
        TextureComponent.prototype.setVerticalFlip = function (newStatus) {
            this.verticalFlip = newStatus;
        };
        TextureComponent.prototype.flipImage = function (image, ctx, sx, sy, sw, sh, flipH, flipV) {
            var scaleH = flipH ? -1 : 1, scaleV = flipV ? -1 : 1;
            ctx.save();
            ctx.scale(scaleH, scaleV);
            ctx.drawImage(this.assets.getImg(), sx, sy, sw, sh);
            ctx.restore();
        };
        return TextureComponent;
    }());
    exports.default = TextureComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/class/visual-render.ts":
/*!*****************************************!*\
  !*** ./src/libs/class/visual-render.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, matter_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VisualRender = (function () {
        function VisualRender() {
            matter_js_1.Render.getTexture = this.getTexture;
            matter_js_1.Render.drawSolid = this.drawSolid;
            matter_js_1.Render.bodies = this.overrideRenderFunction;
        }
        VisualRender.prototype.overrideRenderFunction = function (render, bodies, context) {
            var _this = this;
            var c = context;
            var options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes;
            var body, part, i, k;
            for (i = 0; i < bodies.length; i++) {
                body = bodies[i];
                if (!body.render.visible) {
                    continue;
                }
                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                    part = body.parts[k];
                    if (!part.render.visible) {
                        continue;
                    }
                    if (options.showSleeping && body.isSleeping) {
                        c.globalAlpha = 0.5 * part.render.opacity;
                    }
                    else if (part.render.opacity !== 1) {
                        c.globalAlpha = part.render.opacity;
                    }
                    if (part.render.wireframes === true) {
                        this.drawSolid(c, part, showInternalEdges, options);
                    }
                    if (part.render.sprite && part.render.visualComponent && !options.wireframes) {
                        c.translate(part.position.x, part.position.y);
                        c.rotate(part.angle);
                        (function () { return _this.drawSolid(c, part, showInternalEdges, options); });
                        if (part.render.visualComponent) {
                            part.render.visualComponent.drawComponent(c, part);
                        }
                        c.rotate(-part.angle);
                        c.translate(-part.position.x, -part.position.y);
                    }
                    else {
                        this.drawSolid(c, part, showInternalEdges, options);
                    }
                    c.globalAlpha = 1;
                }
            }
        };
        VisualRender.prototype.getTexture = function (render, imagePath) {
            var image = render.textures[imagePath];
            if (image) {
                return image;
            }
            image = render.textures[imagePath] = new Image();
            image.src = imagePath;
            return image;
        };
        VisualRender.prototype.drawSolid = function (c, part, showInternalEdges, options) {
            if (part.circleRadius) {
                c.beginPath();
                c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
            }
            else {
                c.beginPath();
                c.moveTo(part.vertices[0].x, part.vertices[0].y);
                for (var j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    }
                    else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }
                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }
                c.lineTo(part.vertices[0].x, part.vertices[0].y);
                c.closePath();
            }
            if (!options.wireframes) {
                c.fillStyle = part.render.fillStyle;
                if (part.render.lineWidth) {
                    c.lineWidth = part.render.lineWidth;
                    c.strokeStyle = part.render.strokeStyle;
                    c.stroke();
                }
                c.fill();
            }
            else {
                c.lineWidth = 1;
                c.strokeStyle = "#bbb";
                c.stroke();
            }
        };
        return VisualRender;
    }());
    exports.default = VisualRender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/defaults.ts":
/*!******************************!*\
  !*** ./src/libs/defaults.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_PLAYER_DATA;
    (function (DEFAULT_PLAYER_DATA) {
        DEFAULT_PLAYER_DATA[DEFAULT_PLAYER_DATA["INITIAL_LIVES"] = 3] = "INITIAL_LIVES";
        DEFAULT_PLAYER_DATA[DEFAULT_PLAYER_DATA["NEW_GAME_COST"] = 30] = "NEW_GAME_COST";
    })(DEFAULT_PLAYER_DATA = exports.DEFAULT_PLAYER_DATA || (exports.DEFAULT_PLAYER_DATA = {}));
    var DEFAULT_GAMEPLAY_ROLES;
    (function (DEFAULT_GAMEPLAY_ROLES) {
        DEFAULT_GAMEPLAY_ROLES[DEFAULT_GAMEPLAY_ROLES["MAP_MARGIN_LEFT"] = -300] = "MAP_MARGIN_LEFT";
        DEFAULT_GAMEPLAY_ROLES[DEFAULT_GAMEPLAY_ROLES["MAP_MARGIN_TOP"] = -300] = "MAP_MARGIN_TOP";
        DEFAULT_GAMEPLAY_ROLES[DEFAULT_GAMEPLAY_ROLES["MAP_MARGIN_RIGHT"] = 20000] = "MAP_MARGIN_RIGHT";
        DEFAULT_GAMEPLAY_ROLES[DEFAULT_GAMEPLAY_ROLES["MAP_MARGIN_BOTTOM"] = 4500] = "MAP_MARGIN_BOTTOM";
        DEFAULT_GAMEPLAY_ROLES[DEFAULT_GAMEPLAY_ROLES["RESPAWN_INTERVAL"] = 1000] = "RESPAWN_INTERVAL";
    })(DEFAULT_GAMEPLAY_ROLES = exports.DEFAULT_GAMEPLAY_ROLES || (exports.DEFAULT_GAMEPLAY_ROLES = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/events/global-event.ts":
/*!*****************************************!*\
  !*** ./src/libs/events/global-event.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalEvent = (function () {
        function GlobalEvent(browser) {
            var _this = this;
            this.get = {};
            this.activeKey = {};
            this.providers = {};
            this.onKeyDownHandler = function (e) {
                var root = _this;
                root.activeKey[e.keyCode] = true;
                root.providers.onkeydown();
            };
            this.onKeyUpHandler = function (e) {
                var root = _this;
                root.activeKey[e.keyCode] = false;
                root.providers.onkeyup();
            };
            this.browser = browser;
            this.providers.onkeydown = function () { };
            this.providers.onkeyup = function () { };
        }
        GlobalEvent.prototype.activateKeyDetection = function () {
            document.body.addEventListener("keydown", this.onKeyDownHandler, true);
            document.body.addEventListener("keyup", this.onKeyUpHandler, true);
        };
        GlobalEvent.prototype.deactivateKeyDetection = function () {
            document.body.removeEventListener("keydown", this.onKeyDownHandler, true);
            document.body.removeEventListener("keyup", this.onKeyUpHandler, true);
        };
        GlobalEvent.prototype.attachEvent = function (name, callback) {
            var _this = this;
            this.get[name] = callback;
            window[name] = function (event) {
                _this.get[name](event);
            };
        };
        return GlobalEvent;
    }());
    exports.default = GlobalEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/libs/starter.ts":
/*!*****************************!*\
  !*** ./src/libs/starter.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Matter) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Starter = (function () {
        function Starter(ioc) {
            this.get = {};
            this.mapView = {};
            var root = this;
            this.ioc = ioc;
            var Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner, Events = Matter.Events, Bounds = Matter.Bounds, MouseConstraint = Matter.MouseConstraint, Mouse = Matter.Mouse, World = Matter.World, Bodies = Matter.Bodies;
            this.engine = Engine.create();
            this.world = this.engine.world;
            this.view = ioc.get.ViewPort;
            this.render = Render.create({
                element: document.body,
                engine: this.engine,
                options: {
                    width: 800,
                    height: 600,
                    wireframes: false,
                },
            });
            this.setWorldBounds(-300, -300, 1100, 900);
            this.render.options.background = "black";
            Render.run(this.render);
            this.runner = Runner.create({
                delta: 1000 / 60,
                isFixed: false,
            });
            Runner.run(this.runner, this.engine);
            var mouse = Mouse.create(this.render.canvas);
            this.mouseConstraint = MouseConstraint.create(this.engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });
            this.render.mouse = mouse;
            Render.lookAt(this.render, {
                min: {
                    x: 0,
                    y: 0,
                },
                max: {
                    x: 800,
                    y: 600,
                },
            });
            if (this.view.config.getDrawRefference() === "diametric-fullscreen") {
                this.view.setCanvasWidth("100vw");
                this.view.setCanvasHeight("100vh");
                console.warn("diametric-fullscreen view constructed");
            }
            this.view.initCanvasDom();
            this.mapView = {
                translate: 0,
                viewportCentre: {
                    x: this.render.options.width * 0.5,
                    y: this.render.options.height * 0.5,
                },
                initialEngineBounds: {
                    MaxY: this.engine.world.bounds.max.x,
                    MaxX: this.engine.world.bounds.max.y,
                },
                boundsScaleTarget: 1,
                boundsScale: {
                    x: 1,
                    y: 1,
                },
            };
        }
        Starter.prototype.getDeltaCentreMouse = function () {
            return Matter.Vector.sub(this.mouseConstraint.mouse.absolute, this.mapView.viewportCentre);
        };
        Starter.prototype.getCentreDistMouse = function () {
            return Matter.Vector.magnitude(this.getDeltaCentreMouse());
        };
        Starter.prototype.getDeltaCentrePlayer = function (playerVector) {
            return Matter.Vector.sub(playerVector, this.mapView.viewportCentre);
        };
        Starter.prototype.getCentreDistPlayer = function (playerVector) {
            return Matter.Vector.magnitude(this.getDeltaCentrePlayer(playerVector));
        };
        Starter.prototype.getMouseConstraint = function () {
            return this.mouseConstraint;
        };
        Starter.prototype.getMap = function () {
            return this.mapView;
        };
        Starter.prototype.getRender = function () {
            return this.render;
        };
        Starter.prototype.getWorld = function () {
            return this.world;
        };
        Starter.prototype.getEngine = function () {
            return this.engine;
        };
        Starter.prototype.getView = function () {
            return this.view;
        };
        Starter.prototype.AddNewBodies = function (elements) {
            Matter.World.add(this.getWorld(), elements);
        };
        Starter.prototype.destroyBody = function (destroyBody) {
            Matter.Composite.remove(this.world, destroyBody);
        };
        Starter.prototype.setWorldBounds = function (minX, minY, maxX, maxY) {
            this.world.bounds.min.x = minX;
            this.world.bounds.min.y = minY;
            this.world.bounds.max.x = maxX;
            this.world.bounds.max.y = maxY;
        };
        Starter.prototype.destroyGamePlay = function () {
            console.log("Destroy world.");
            Matter.World.clear(this.world, false);
        };
        Starter.prototype.deattachMatterEvents = function () {
            Matter.Events.off(this.getEngine(), undefined, undefined);
            console.info("Matter.Events.off");
        };
        return Starter;
    }());
    exports.default = Starter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/style/animations.css":
/*!**********************************!*\
  !*** ./src/style/animations.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/animations.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/app-platformer-single.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app-platformer-single.ts */"./src/app-platformer-single.ts");


/***/ })

/******/ });