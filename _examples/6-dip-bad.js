class Pizza {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  makePizza() {
    const ingredients = this.ingredients.join(", ");
    console.log(`Making pizza with ${ingredients}`);
  }
}

class Customer {
  constructor(pizza) {
    this.pizza = pizza;
  }

  orderPizza() {
    this.pizza.makePizza();
  }
}

const pizza = new Pizza(["tomatoes", "cheese", "pepperoni"]);
const customer = new Customer(pizza);

customer.orderPizza();
