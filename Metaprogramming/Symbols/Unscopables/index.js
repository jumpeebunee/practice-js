class ExtendedCollection {
  constructor(...elements) {
    this.elements = elements;
    this.extraProperty = "This is an extra property";
  }

  addElement(elem) {
    this.elements.push(elem);
  }

  removeElement(elem) {
    this.elements = this.elements.filter((item) => item !== elem);
  }

  hiddenMethod() {
    console.log("This method is hidden from 'with' block.");
  }

  showHiddenProperty(prop) {
    this[Symbol.unscopables][prop] = false;
  }

  hiddeProperty(prop) {
    this[Symbol.unscopables][prop] = true;
  }

  count() {
    return this.elements.length;
  }

  [Symbol.unscopables] = {
    extraProperty: true,
    hiddenMethod: true,
  };
}

const collection = new ExtendedCollection(1, 2, 3);
