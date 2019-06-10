class Argument {
  constructor(...args) {
    this.args = args;
  }
}

class Calculate extends Argument {
  add() {
    return this.args.reduce((s, n) => (s += n), 0);
  }

  has(n) {
    return this.args.includes(n);
  }
}

const add = a => b => a + b;

export default add;
export { Calculate };
