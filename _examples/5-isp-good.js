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
}

class DetroitPizza extends Pizza {
  constructor() {
    super();
    this.detroitToppings = [];
  }

  addDetroitTopping(topping) {
    this.detroitToppings.push(topping);
  }

  removeDetroitTopping(topping) {
    const index = this.detroitToppings.indexOf(topping);
    if (index !== -1) {
      this.detroitToppings.splice(index, 1);
    }
  }
}

class HawaiianPizza extends Pizza {
  constructor() {
    super();
    this.meatToppings = [];
  }

  addHawaiianTopping(topping) {
    this.meatToppings.push(topping);
  }

  removeHawaiianTopping(topping) {
    const index = this.meatToppings.indexOf(topping);
    if (index !== -1) {
      this.meatToppings.splice(index, 1);
    }
  }
}
