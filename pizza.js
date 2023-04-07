export const availableIngredients = [
  "flour",
  "water",
  "salt",
  "tomatoes",
  "olive oil",
  "garlic",
  "mozzarella cheese",
  "pepperoni",
  "sausage",
];

export class Pizza {
  constructor(plan) {
    this.plan = plan;
  }

  prepare() {
    this.makeDough();
    this.addSauce();
    this.addCheese();
    this.addToppings();
    this.bake();
  }

  makeDough() {
    const doughIngredients = this.plan.dough.ingredients.join(", ");
    console.log(`Mixing and kneading dough with ${doughIngredients}`);
  }

  addSauce() {
    const sauceIngredients = this.plan.sauce.ingredients.join(", ");
    console.log(`Adding sauce made with ${sauceIngredients}`);
  }

  addCheese() {
    const cheeseIngredients = this.plan.cheese.ingredients.join(", ");
    console.log(`Adding cheese made with ${cheeseIngredients}`);
  }

  addToppings() {
    const toppingIngredients = this.plan.toppings.ingredients.join(", ");
    console.log(`Adding toppings: ${toppingIngredients}`);
  }

  bake() {
    console.log(
      `Baking pizza at ${this.plan.baking.temperature} degrees for ${this.plan.baking.duration} minutes`
    );
  }
}

export const pizzaFactory = {
  createPizza(plan) {
    const unavailableIngredients = Object.values(plan)
      .map(({ ingredients }) =>
        ingredients
          ? ingredients.filter(
              (ingredient) => !availableIngredients.includes(ingredient)
            )
          : []
      )
      .flat();

    if (unavailableIngredients.length > 0) {
      throw new Error(
        `The following ingredients are not available: ${unavailableIngredients.join(
          ", "
        )}`
      );
    }

    console.log("All ingredients for Detroit-style pizza are available!");

    return new Pizza(plan);
  },
};
