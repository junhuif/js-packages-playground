"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculate = exports.add = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Calculate =
/*#__PURE__*/
function () {
  function Calculate() {
    (0, _classCallCheck2["default"])(this, Calculate);

    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    this.numbers = numbers;
  }

  (0, _createClass2["default"])(Calculate, [{
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