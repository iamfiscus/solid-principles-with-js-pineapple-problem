// Define a PizzaInterface that specifies the methods needed for a pizza
class PizzaInterface {
  prepare() {}
  bake() {}
  cut() {}
  box() {}
}

// Define a CheesePizza class that implements the PizzaInterface
class CheesePizza extends PizzaInterface {
  prepare() {
    console.log("Preparing cheese pizza");
  }

  bake() {
    console.log("Baking cheese pizza");
  }

  cut() {
    console.log("Cutting cheese pizza");
  }

  box() {
    console.log("Boxing cheese pizza");
  }
}

// Define a PepperoniPizza class that implements the PizzaInterface
class PepperoniPizza extends PizzaInterface {
  prepare() {
    console.log("Preparing pepperoni pizza");
  }

  bake() {
    console.log("Baking pepperoni pizza");
  }

  cut() {
    console.log("Cutting pepperoni pizza");
  }

  box() {
    console.log("Boxing pepperoni pizza");
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
const cheesePizza = new CheesePizza();
const pizzaMaker1 = new PizzaMaker(cheesePizza);
pizzaMaker1.makePizza();

// Use the PizzaMaker class to make a pepperoni pizza
const pepperoniPizza = new PepperoniPizza();
const pizzaMaker2 = new PizzaMaker(pepperoniPizza);
pizzaMaker2.makePizza();
