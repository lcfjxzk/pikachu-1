// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u6211\u662F\u718A\u4EF2\u8F72\uFF0C\u73B0\u5728\u7EAF\u624B\u5DE5\u5236\u4F5C\u4E00\u53EA\u76AE\u5361\u4E18\u3002\u4EE5\u4E0B\u662FCSS\u4EE3\u7801\u3002\u53EF\u4EE5\u7528\u53F3\u4E0A\u89D2\u7684\u6309\u94AE\u6765\u63A7\u5236\u901F\u5EA6\u3002*/\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    background: #ffe600;\n    min-height: 55vh;\n    position: relative;\n  }\n  .nose {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 110px;\n    margin-left: -10px;\n    z-index: 10;\n    /*\u5C42\u53E0\u4E0A\u4E0B\u6587\u539F\u7406\uFF0C\u9632\u6B62\u9F3B\u5B50\u88AB\u5634\u5507\u8986\u76D6*/\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom; /*\u5DE6\u53F3\u65B9\u5411\u4EE5\u6B63\u4E2D\u5FC3\u4E3A\u57FA\u51C6\uFF0C\u4E0A\u4E0B\u65B9\u5411\u4EE5\u6B63\u4E0B\u65B9\u4E3A\u57FA\u51C6\uFF0C\u8FDB\u884C\u6643\u52A8*/\n    animation: wave 300ms infinite linear;\n  }\n  \n  .yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    /*border: 1px solid green;*/\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background: black;\n  }\n  \n  .eye {\n    border: 3px solid rgb(0, 0, 0);\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 65px;\n    margin-left: -32px; /*\u7528\u6765\u5B9A\u4F4D*/\n    background: #2e2e2e;\n    border-radius: 50%;\n  }\n  \n  .eye::before {\n    content: \"\";\n    display: block; /*\u5185\u8054\u5143\u7D20*/\n    border: 3px solid #000;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 6px; /*\u76F8\u5BF9\u4E8E\u5DE6\u8FB9\u79FB\u52A8px*/\n    top: -1px;\n  }\n  \n  .eye.left {\n    transform: translateX(-115px); /*\u76F8\u5BF9\u4E8E\u4E2D\u95F4\u79FB\u52A8px*/\n  }\n  .eye.right {\n    transform: translateX(115px);\n  }\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 135px;\n    margin-left: -100px; /*mouth\u7684\u5DE6\u8FB9\u8DDD\u76F8\u5BF9\u4E8E\u4E2D\u7EBFpx*/\n  }\n  .mouth .up {\n    position: relative;\n    top: -20px;\n  }\n  \n  .mouth .up .lip {\n    /*\u4F18\u5316\u4EE3\u7801*/\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative; /* \u76F8\u5BF9\u5B9A\u4F4D */\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    z-index: 1; /*\u8BA9lip\u538B\u5728\u4E0B\u5634\u5507\u7684\u4E0A\u9762*/\n    background: #ffe600; /*\u5728\u6CA1\u7ED9\u989C\u8272\u4E4B\u524D\uFF0Clip\u662F\u900F\u660E\u8272*/\n  }\n  \n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-52px);\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(52px);\n  }\n  \n  .mouth .up .lip::before {\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left::before {\n    right: -6px;\n  }\n  .mouth .up .lip.right::before {\n    left: -6px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: relative;\n    top: 5px;\n    width: 100%;\n    overflow: hidden; /*\u628Ayuan1\u4E2D\u8D85\u51FAdown\u7684\u90E8\u5206\u9690\u85CF\u6389*/\n  }\n  \n  .mouth .down .yuan1 {\n    border: 3px solid black;\n    width: 180px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -90px;\n    border-radius: 100px/350px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    width: 200px;\n    height: 300px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -156px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n  .face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 80px;\n    height: 80px;\n    top: 165px;\n    margin-left: -40px;\n    z-index: 3;\n  }\n  .face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .face.left {\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50%;\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n  }\n  .face.right {\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50%;\n  }\n  /*\u753B\u5B8C\u4E86\uFF0C\u8FD9\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\u9001\u7ED9\u4F60\u3002*/    \n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var n = 1;
var time = 50;
var id; //先声明变量id
//----封装函数，将多次使用的函数封装，再调用这个函数，使代码简洁----↓

var player = {
  init: function init() {
    demo.innerText = _css.default.substr(0, n); //demo1展现文本

    demo2.innerHTML = _css.default.substr(0, n); //demo2展现效果
    //在WebStorm里面是"demo.innerHTML = string.substr( from: 0, n);"

    player.play(); //给id赋值
  },
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id); //当n大于string.length停止

      return; //return表示不执行下面的两句
    } // console.log(n + ":" + string.substr(0, n)); //打出每一行


    demo.innerText = _css.default.substr(0, n); //demo1展现文本

    demo2.innerHTML = _css.default.substr(0, n); //demo2展现效果
    //同时以文本innerText的形式和HTML的形式展现一个style标签。

    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    id = setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
}; //----封装函数，将多次使用的函数封装，再调用这个函数，使代码简洁----↑

player.init();
document.querySelector("#btnPause").onclick = player.pause;
document.querySelector("#btnPlay").onclick = player.play;
document.querySelector("#btnSlow").onclick = player.slow;
document.querySelector("#btnNormal").onclick = player.normal;
document.querySelector("#btnFast").onclick = player.fast; // 在WebStorm里面是"setInterval(handler:() => {
//     n += 1;
//     demo.innerHTML = string.substr(from:0, n);
//   }, timeout: 1000);"
//vscode和WebStorm还是有很大区别
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.62f777ee.js.map