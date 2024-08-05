class EZArray extends Array {
  static get [Symbol.species]() {
    return new EZArray();
  }

  constructor(...values) {
    super(values);
  }

  get first() {
    return this[0][0];
  }

  get last() {
    return this[0][this[0].length - 1];
  }
}

const a = new EZArray(1, 2, 3, 4);
const b = a[0].map((value) => value ** 2);

console.log(b);
