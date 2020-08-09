class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products.splice(this.products.indexOf(product));
  }

  searchProduct(productName) {
    return this.products.filter((product) => product.name == productName);
  }

  getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.price;
    });
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser() {
    fetch(" https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        const body = document.querySelector("body");
        const h1 = document.createElement("h1");
        body.appendChild(h1);
        h1.innerHTML = data.name;
      });
  }
}
