class Pizza {
  constructor() {
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  removeTopping(topping) {
    const index = this.toppings.indexOf(topping);
    if (index !== -1) {
      this.toppings.splice(index, 1);
    }
  }

  bake() {
    console.log("Baking pizza with toppings:", this.toppings);
  }

  getToppings() {
    return this.toppings;
  }

  calculatePrice() {
    let price = 10;
    for (let i = 0; i < this.toppings.length; i++) {
      price += 1;
    }
    return price;
  }
}
