const availableIngredients = ["flour", "water", "salt", "tomatoes", "olive oil", "garlic", "mozzarella", "pepperoni", "sausage"];

class Pizza {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  prepare() {
    console.log(`Preparing pizza with ${this.ingredients.join(", ")}`);
  }
}

const pizzaFactory = {
  createPizza(...ingredients) {
    if (ingredients.some(ingredient => !availableIngredients.includes(ingredient))) {
      throw new Error("Not all ingredients are available");
    }

    return new Pizza(ingredients);
  }
};

const pizza1 = pizzaFactory.createPizza("flour", "water", "salt", "tomatoes", "olive oil", "garlic", "mozzarella");
pizza1.prepare(); // logs "Preparing pizza with flour, water, salt, tomatoes, olive oil, garlic, mozzarella"

const pizza2 = pizzaFactory.createPizza("flour", "water", "salt", "pepperoni", "sausage");
pizza2.prepare(); // logs "Preparing pizza with flour, water, salt, pepperoni, sausage"

const pizza3 = pizzaFactory.createPizza("flour", "water", "salt", "pepperoni", "anchovies");
// throws an error: "Not all ingredients are available"
