class MyClass {
  constructor() {}
  get [Symbol.toStringTag]() {
    return "MyClass";
  }
}

const getObjectName = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1);
};

const types = [2, "s", {}, null, function () {}, false, 2n, new MyClass()];
types.forEach((type) => console.log(getObjectName(type)));
