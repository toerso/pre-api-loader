'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var DispatcherStack = function () {
  function DispatcherStack() {
    _classCallCheck(this, DispatcherStack);
    this.start = _asyncToGenerator( regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }
  _createClass(DispatcherStack, [{
    key: "add",
    value: function add(callbackWithNext) {
      var next = this.start;
      this.start = _asyncToGenerator( regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return callbackWithNext(next);
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "call",
    value: function () {
      var _call = _asyncToGenerator( regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.start();
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function call() {
        return _call.apply(this, arguments);
      }
      return call;
    }()
  }]);
  return DispatcherStack;
}();
var DispatcherStack$1 = new DispatcherStack();

function createCrawler(store) {
  var dispatcherStack = DispatcherStack$1;
  var reduxStore = store;
  function getSsrPreLoad(callback) {
    if (typeof callback !== 'function') throw new Error("tracker takes a callback function");
    var callbackWithStore = callback();
    dispatcherStack.add(callbackWithStore(reduxStore));
  }
  function StartApiLoader() {
    return _StartApiLoader.apply(this, arguments);
  }
  function _StartApiLoader() {
    _StartApiLoader = _asyncToGenerator( regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatcherStack.call();
            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _StartApiLoader.apply(this, arguments);
  }
  return {
    StartApiLoader: StartApiLoader,
    getSsrPreLoad: getSsrPreLoad
  };
}

function getPreState(action) {
  return function (store) {
    return function () {
      var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee(next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof action !== 'string')) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return store.dispatch(action);
              case 3:
                _context.next = 5;
                return next();
              case 5:
                return _context.abrupt("return", _context.sent);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  };
}

exports["default"] = createCrawler;
exports.getPreState = getPreState;
