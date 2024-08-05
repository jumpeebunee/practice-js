class ComplexNumber {
  constructor(x, y) {
    this.real = x;
    this.imaginary = y;

    this.preferredNumberType = "magnitude"; // "magnitude", "real", "imaginary"
    this.preferredStringFormat = "algebraic"; // "algebraic", "trigonometric"
  }

  getMagnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  getArgument() {
    return Math.atan2(this.imaginary, this.real);
  }

  setPreferredNumberType(type) {
    this.preferredNumberType = type;
  }

  setPreferredStringFormat(format) {
    this.preferredStringFormat = format;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      switch (this.preferredStringFormat) {
        case "algebraic":
          return `${this.real} + ${this.imaginary}i`;
        case "trigonometric":
          return `${this.getMagnitude()} * (cos(${this.getArgument()}) + i*sin(${this.getArgument()}))`;
        default:
          return `${this.real} + ${this.imaginary}i`;
      }
    } else if (hint === "number") {
      switch (this.preferredNumberType) {
        case "magnitude":
          return this.getMagnitude();
        case "real":
          return this.real;
        case "imaginary":
          return this.imaginary;
        default:
          return this.getMagnitude();
      }
    }
  }
}

const complex = new ComplexNumber(3, 4);
