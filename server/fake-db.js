const Product = require("./model/product");

class FakeDB {
  products;
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "Flexible",
        heading2: "Light",
        heading3: "Powerful",
        coverimage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "Flexible",
        heading2: "Light",
        heading3: "Powerful",
        coverimage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "A garbage phone with one of the best buttons",
        heading1: "Flexible",
        heading2: "Light",
        heading3: "Powerful",
        coverimage: "./assets/img/phone-cover.jpg",
      },
    ];
  }

  async initDB() {
    await this.cleanDB();
    this.pushProductsToDB();
  }

  async cleanDB() {
    await Product.deleteMany({});
  }

  pushProductsToDB() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDB() {
    this.pushProductsToDB();
  }
}

module.exports = FakeDB;
