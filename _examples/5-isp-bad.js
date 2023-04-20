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

  addDetroitTopping(topping) {
    // code to add Detroit topping
  }

  removeDetroitTopping(topping) {
    // code to remove Detroit topping
  }

  addHawiianTopping(topping) {
    // code to add Hawiian topping
  }

  removeHawiianTopping(topping) {
    // code to remove Hawiian topping
  }
}
