"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Calculate = exports.add = void 0;

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

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
      var _context;

      return (0, _reduce["default"])(_context = this.numbers).call(_context, function (s, n) {
        return s += n;
      }, 0);
    }
  }, {
    key: "has",
    value: function has(n) {
      var _context2;

      return (0, _includes["default"])(_context2 = this.numbers).call(_context2, n);
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