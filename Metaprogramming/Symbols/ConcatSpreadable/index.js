class CustomCollection {
  constructor() {
    this._value = [];
  }

  add(elements, isConcatable) {
    elements[Symbol.isConcatSpreadable] = isConcatable;
    this._value.push(elements);
  }

  remove(index) {
    this._value.splice(index, 1);
  }

  changeConcatSpreadable(index, isConcatable) {
    this._value[index][Symbol.isConcatSpreadable] = isConcatable;
  }

  get value() {
    let result = [];

    for (let val of this._value) {
      result = result.concat(val);
    }

    return result;
  }
}

const collection = new CustomCollection();
collection.add([1, 2, 3], true); // Разворачивается
collection.add([4, 5, 6], false); // Не разворачивается
collection.add({ a: 1, b: 2 }, false); // Не разворачивается

collection.changeConcatSpreadable(0, false);

const result = [].concat(collection.value, [7, 8, 9]);

console.log(result);
