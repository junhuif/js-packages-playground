"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculate = exports.add = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculate =
/*#__PURE__*/
function () {
  function Calculate() {
    _classCallCheck(this, Calculate);

    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    this.numbers = numbers;
  }

  _createClass(Calculate, [{
    key: "add",
    value: function add() {
      return this.numbers.reduce(function (s, n) {
        return s += n;
      }, 0);
    }
  }]);

  return Calculate;
}();

exports.Calculate = Calculate;

var add = function add(a) {
  return function (b) {
    return a + b;
  };
};

exports.add = add;