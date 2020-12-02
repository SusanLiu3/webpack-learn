(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Vue = __webpack_require__(1);

var test = __webpack_require__(2).default;

__webpack_require__(3);

var testSplit = __webpack_require__(4);

var add = __webpack_require__(5).default;

testSplit["default"]();
var app = new Vue({
  data: function data() {
    return {
      msg: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "flex"
    }, [h("h2", ["hello jsx"]), h("div", [add('999', '11')]), h("img", {
      "attrs": {
        "src": test
      }
    }), h("button", {
      "on": {
        "click": this.clkProcess
      }
    }, [" \u70B9\u51FB "]), h("p", ["\u52A8\u6001\u663E\u793A", this.msg ? this.msg : ''])]);
  },
  methods: {
    clkProcess: function clkProcess() {
      var _this = this;

      console.log('kkk');

      __webpack_require__(8).then(function (i) {
        debugger;
        _this.msg = i["default"];
      });
    }
  }
});
module.exports = app;

/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "test_274a962f.jpg");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ testSplit
/* harmony export */ });
function testSplit() {
  console.log('splitChunksPlugin 使用');
}

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(6);
} else {
  module.exports = __webpack_require__(7);
}

/***/ }),
/* 6 */
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(self, function () {
  return (
    /******/
    (() => {
      // webpackBootstrap

      /******/
      "use strict";
      /******/

      var __webpack_modules__ = [
      /* 0 */

      /***/
      (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_608__) => {
        __nested_webpack_require_608__.r(__webpack_exports__);
        /* harmony export */


        __nested_webpack_require_608__.d(__webpack_exports__, {
          /* harmony export */
          "default": () =>
          /* binding */
          add
          /* harmony export */

        });

        function add(num1, num2) {
          let len1 = num1.length - 1;
          let len2 = num2.length - 1;
          let carry = 0;
          let res = '';

          while (len1 >= 0 || len2 >= 0) {
            let sum = 0,
                x = 0,
                y = 0;

            if (len1 >= 0) {
              x = num1[len1] - 0;
              len1--;
            }

            if (len2 >= 0) {
              y = num2[len2] - 0;
              len2--;
            }

            sum = x + y + carry;

            if (sum >= 10) {
              sum = sum - 10;
              carry = 1;
            } else {
              carry = 0;
            }

            res = sum + res;
          }

          if (carry > 0) {
            res = carry + res;
          }

          return res;
        } // console.log(add('999', '1'))
        // console.log(add('1', '999'))
        // console.log(add('123', '321'))
        // let num1 = '99999999999999999999999999999999999999999999999999999999999999999999'
        // let res =add( num1,'1') +''
        // console.log(num1.length,res.length)

        /***/

      }
      /******/
      ];
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_2317__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (__webpack_module_cache__[moduleId]) {
          /******/
          return __webpack_module_cache__[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2317__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      (() => {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_2317__.d = (exports, definition) => {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_2317__.o(definition, key) && !__nested_webpack_require_2317__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/


      (() => {
        /******/
        __nested_webpack_require_2317__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/


      (() => {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_2317__.r = exports => {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      })();
      /******/

      /************************************************************************/

      /******/
      // module exports must be returned from runtime so entry inlining is disabled

      /******/
      // startup

      /******/
      // Load entry module and return exports

      /******/


      return __nested_webpack_require_2317__(0);
      /******/
    })()
  );
});

/***/ }),
/* 7 */
/***/ ((module) => {

!function (e, t) {
   true ? module.exports = t() : 0;
}(self, function () {
  return (() => {
    "use strict";

    var e = [(e, t, o) => {
      function r(e, t) {
        let o = e.length - 1,
            r = t.length - 1,
            n = 0,
            f = "";

        for (; o >= 0 || r >= 0;) {
          let u = 0,
              d = 0,
              l = 0;
          o >= 0 && (d = e[o] - 0, o--), r >= 0 && (l = t[r] - 0, r--), u = d + l + n, u >= 10 ? (u -= 10, n = 1) : n = 0, f = u + f;
        }

        return n > 0 && (f = n + f), f;
      }

      o.r(t), o.d(t, {
        default: () => r
      });
    }],
        t = {};

    function o(r) {
      if (t[r]) return t[r].exports;
      var n = t[r] = {
        exports: {}
      };
      return e[r](n, n.exports, o), n.exports;
    }

    return o.d = (e, t) => {
      for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, o(0);
  })();
});

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('文件懒加载');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
;
});