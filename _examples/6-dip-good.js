// After refactoring to follow DIP
class PizzaPreparation {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  prepare() {
    // code to prepare pizza using this.ingredients
  }
}

class IngredientSystem {
  // code for ingredient system
}

const ingredientSystem1 = new IngredientSystem();
const ingredientSystem2 = new IngredientSystem();

const pizzaPreparation1 = new PizzaPreparation(ingredientSystem1);
const pizzaPreparation2 = new PizzaPreparation(ingredientSystem2);
