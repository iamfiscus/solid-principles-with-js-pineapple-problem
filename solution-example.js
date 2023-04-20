import { Pizza, pizzaFactory } from "./pizza.js";

const detroitPlan = {
  dough: {
    ingredients: ["flour", "water", "salt"],
  },
  sauce: {
    ingredients: ["tomatoes"],
  },
  cheese: {
    ingredients: ["mozzarella cheese"],
  },
  toppings: {
    ingredients: ["pepperoni", "sausage"],
  },
  baking: {
    temperature: 500,
    duration: 15,
  },
};

const hawaiianPlan = {
  dough: {
    ingredients: ["flour", "water", "salt"],
  },
  sauce: {
    ingredients: ["tomatoes"],
  },
  cheese: {
    ingredients: ["mozzarella cheese"],
  },
  toppings: {
    ingredients: ["ham", "pineapple"],
  },
  baking: {
    temperature: 450,
    duration: 12,
  },
};

class DetroitPizza extends Pizza {
  constructor() {
    const plan = {
      ...detroitPlan,
      toppings: {
        ingredients: [...detroitPlan.toppings.ingredients],
      },
    };
    super(plan);
  }
}

class HawaiianPizza extends Pizza {
  constructor() {
    const plan = {
      ...hawaiianPlan,
      toppings: {
        ingredients: [...hawaiianPlan.toppings.ingredients],
      },
    };
    super(plan);
  }
}

// Usage
const detroitPizza = pizzaFactory.createPizza(new DetroitPizza());
detroitPizza.prepare();

const hawaiianPizza = pizzaFactory.createPizza(new HawaiianPizza());
hawaiianPizza.prepare();
