// After refactoring to follow OCP
class Pizza {
  prepare() {
    // code to prepare pizza
  }
}

class PizzaFactory {
  static createPizza(type) {
    switch(type) {
      case "cheese":
        return new CheesePizza();
      case "pepperoni":
        return new PepperoniPizza();
      case "hawaiian":
        return new HawaiianPizza();
      default:
        throw new Error("Invalid pizza type");
    }
  }
}

class CheesePizza extends Pizza {
  prepare() {
    // code to prepare cheese pizza
  }
}

class PepperoniPizza extends Pizza {
  prepare() {
    // code to prepare pepperoni pizza
  }
}

class HawaiianPizza extends Pizza {
  prepare() {
    // code to prepare Hawaiian pizza
  }
}
