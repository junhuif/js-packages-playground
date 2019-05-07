"use strict";

var _add = require("./add");

var hello = function hello(name) {
  return console.log("Hello", name);
};

hello("world");
console.log("add(1)(2):", (0, _add.add)(1)(2));
var cal = new _add.Calculate(1, 2, 3);
console.log("1 + 2 + 3:", cal.add());