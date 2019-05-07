import _ from "lodash";
import add, { Calculate } from "./add";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

function adder() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["add(1)(8) =", add(1)(8)], " ");

  return element;
}

function calcuate() {
  const element = document.createElement("div");

  const c = new Calculate(1, 2, 3);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["calcuate(1,2,3): ", c.add()], " ");

  return element;
}

document.body.appendChild(component());
document.body.appendChild(adder());
document.body.appendChild(calcuate());
