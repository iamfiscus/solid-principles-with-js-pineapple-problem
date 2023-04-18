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
class PizzaStore {
  constructor() {
    this.pizza = new Pizza();
  }

  orderPizza(toppings) {
    this.pizza = new Pizza();
    for (let i = 0; i < toppings.length; i++) {
      this.pizza.addTopping(toppings[i]);
    }
    this.pizza.bake();
  }
}
