class FibonacciSequence {
  constructor(total = 10) {
    this.total = total;
    this.fibo = [0, 1];
  }

  [Symbol.iterator]() {
    let current = 0;
    let total = this.total;
    let fibo = this.fibo;

    return {
      next() {
        let value = fibo[current];
        let done = current === total;

        fibo.push(value + fibo[current + 1]);
        current += 1;

        return { done, value };
      },
    };
  }
}

const fibonacci = new FibonacciSequence(10);

for (const num of fibonacci) {
  console.log(num);
}
