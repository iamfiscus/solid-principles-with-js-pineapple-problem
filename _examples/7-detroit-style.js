const pizzaPlan = {
  dough: {
    type: "pan",
    ingredients: ["flour", "water", "salt"],
    preparation: "mix ingredients and knead dough",
    bakingTime: 10,
  },
  sauce: {
    type: "red",
    ingredients: ["tomatoes", "olive oil", "garlic"],
    preparation: "mix ingredients and simmer on stove",
    spreadAmount: 0.5,
  },
  cheese: {
    type: "mozzarella",
    ingredients: ["milk", "rennet", "salt"],
    preparation: "heat milk, add rennet and salt, let curdle, and strain curds",
    spreadAmount: 0.75,
  },
  toppings: {
    type: "meat",
    ingredients: ["pepperoni", "sausage"],
    preparation: "slice and cook meats",
    spreadAmount: 1,
  },
  baking: {
    temperature: 450,
    duration: 15,
  },
};

class PizzaPreparation {
  constructor(pizzaPlan) {
    this.pizzaPlan = pizzaPlan;
  }

  prepare() {
    this.makeDough();
    this.addSauce();
    this.addCheese();
    this.addToppings();
    this.bake();
  }

  makeDough() {
    const doughIngredients = this.pizzaPlan.dough.ingredients.join(", ");
    console.log(`Mixing and kneading dough with ${doughIngredients}`);
  }

  addSauce() {
    const sauceIngredients = this.pizzaPlan.sauce.ingredients.join(", ");
    console.log(`Adding sauce made with ${sauceIngredients}`);
  }

  addCheese() {
    const cheeseIngredients = this.pizzaPlan.cheese.ingredients.join(", ");
    console.log(`Adding cheese made with ${cheeseIngredients}`);
  }

  addToppings() {
    const toppingIngredients = this.pizzaPlan.toppings.ingredients.join(", ");
    console.log(`Adding toppings: ${toppingIngredients}`);
  }

  bake() {
    console.log(
      `Baking pizza at ${this.pizzaPlan.baking.temperature} degrees for ${this.pizzaPlan.baking.duration} minutes`
    );
  }
}

const detroitStylePizza = new PizzaPreparation(pizzaPlan);
detroitStylePizza.prepare();
