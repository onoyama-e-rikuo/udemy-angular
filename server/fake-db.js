const Product = require("./model/product");

class FakeDB {
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
        headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
        headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "Flexible",
        heading2: "Light",
        heading3: "Powerful",
        coverimage: "./assets/img/phone-cover.jpg",
        headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
        headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "A garbage phone with one of the best buttons",
        heading1: "Flexible",
        heading2: "Light",
        heading3: "Powerful",
        coverimage: "./assets/img/phone-cover.jpg",
        headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
        headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
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
}

module.exports = FakeDB;
