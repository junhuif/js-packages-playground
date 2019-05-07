import { add, Calculate } from "./add";

const hello = name => console.log("Hello", name);

hello("world");
console.log("add(1)(2):", add(1)(2));

const cal = new Calculate(1, 2, 3);
console.log("1 + 2 + 3:", cal.add());
