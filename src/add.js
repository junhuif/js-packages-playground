class Calculate {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  add() {
    return this.numbers.reduce((s, n) => (s += n), 0);
  }

  has(n) {
    return this.numbers.includes(n);
  }
}

const add = a => b => a + b;

export { add, Calculate };
