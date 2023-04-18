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
}

class DetroitPizza extends Pizza {
  constructor() {
    super();
    this.addTopping("pepperoni");
  }
}

class PineapplePizza extends Pizza {
  constructor() {
    super();
    this.addTopping("pineapple");
    this.addTopping("spam");
  }
}
