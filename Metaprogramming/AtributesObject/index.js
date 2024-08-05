class ProductManager {
  constructor() {
    this.products = [];
  }

  checkIsProductExist(product) {
    if (product) return;
    throw new Error("Product not exist");
  }

  addProduct(name, price, quantity) {
    if (name && price && quantity) {
      this.products.push({ name, price, quantity });
    } else {
      throw new Error("Need more data");
    }
  }

  listProducts() {
    console.log(this.products);
    return this.products;
  }

  editProduct(index, data) {
    let product = this.products[index];

    this.checkIsProductExist(product);

    for (let key in data) {
      if (product[key]) {
        product[key] = data[key];
      }
    }
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
  }

  setPropertyAttributes(index, prop, options) {
    if (!options) throw new Error("Options  must be defined");

    let product = this.products[index];

    this.checkIsProductExist(product);

    Object.defineProperty(this.products[index], prop, options);
  }

  blockProductAttributes(index, type) {
    if (!type) throw new Error("Type  must be defined");

    let product = this.products[index];

    if (type === "freeze") {
      Object.freeze(product);
    } else if (type === "seal") {
      Object.seal(product);
    } else {
      throw new Error(`Type ${type} is not valid`);
    }
  }

  checkIsFrozen(index) {
    let product = this.products[index];
    this.checkIsProductExist(product);

    return Object.isFrozen(product);
  }

  checkIsSealed(index) {
    let product = this.products[index];
    this.checkIsProductExist(product);

    return Object.isSealed(product);
  }
}

const manager = new ProductManager();

// Добавление продуктов
manager.addProduct("Apple", 1.0, 10);
manager.addProduct("Banana", 0.5, 20);

// Просмотр продуктов
manager.listProducts();

// Редактирование продукта
manager.editProduct(0, { price: 1.2, quantity: 15 });

// Просмотр продуктов после редактирования
manager.listProducts();

// Удаление продукта
manager.deleteProduct(1);

// Просмотр продуктов после удаления
manager.listProducts();

// Управление атрибутами свойств

manager.setPropertyAttributes(0, "price", {
  writable: false,
});
try {
  manager.editProduct(0, { price: 1.5 });
} catch (e) {
  console.log("Error:", e.message);
}

// Просмотр продуктов после попытки редактирования неизменяемого свойства
manager.listProducts();
