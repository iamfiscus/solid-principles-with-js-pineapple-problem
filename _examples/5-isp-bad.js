// Define a Pizza class that has all the methods needed for a pizza
class Pizza {
  prepare() {
    console.log("Preparing pizza");
  }

  bake() {
    console.log("Baking pizza");
  }

  cut() {
    console.log("Cutting pizza");
  }

  box() {
    console.log("Boxing pizza");
  }
}

// Define a PizzaMaker class that takes a pizza object and makes a pizza
class PizzaMaker {
  constructor(pizza) {
    this.pizza = pizza;
  }

  makePizza() {
    this.pizza.prepare();
    this.pizza.bake();
    this.pizza.cut();
    this.pizza.box();
  }
}

// Use the PizzaMaker class to make a cheese pizza
const cheesePizza = new Pizza();
cheesePizza.prepare = function () {
  console.log("Preparing cheese pizza");
};
cheesePizza.bake = function () {
  console.log("Baking cheese pizza");
};
cheesePizza.cut = function () {
  console.log("Cutting cheese pizza");
};
cheesePizza.box = function () {
  console.log("Boxing cheese pizza");
};
