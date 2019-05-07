class Calculate {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  add() {
    return this.numbers.reduce((s, n) => (s += n), 0);
  }
}

const add = a => b => a + b;

export { add, Calculate };
