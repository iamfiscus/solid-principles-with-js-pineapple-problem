// Good example: Preparation responsibilities are separated
class Dough {
  make() {
    // code to make dough
  }
}

class Sauce {
  add() {
    // code to add sauce
  }
}

class Cheese {
  add() {
    // code to add cheese
  }
}

class Toppings {
  add() {
    // code to add toppings
  }
}

class Oven {
  bake() {
    // code to bake pizza
  }
}

class PizzaPreparation {
  constructor(dough, sauce, cheese, toppings, oven) {
    this.dough = dough;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.oven = oven;
  }

  prepare() {
    this.dough.make();
    this.sauce.add();
    this.cheese.add();
    this.toppings.add();
    this.oven.bake();
  }
}
