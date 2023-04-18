class Pizza {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }
}

class PizzaMaker {
  constructor(pizza) {
    this.pizza = pizza;
  }

  makePizza() {
    const ingredients = this.pizza.ingredients.join(", ");
    console.log(`Making pizza with ${ingredients}`);
  }
}

class Customer {
  constructor(pizzaMaker) {
    this.pizzaMaker = pizzaMaker;
  }

  orderPizza() {
    this.pizzaMaker.makePizza();
  }
}

const pizza = new Pizza(["tomatoes", "cheese", "pepperoni"]);
const pizzaMaker = new PizzaMaker(pizza);
const customer = new Customer(pizzaMaker);

customer.orderPizza();
