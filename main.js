import { pizzaFactory } from "./pizza.js";
import { HeadChef, AssistantChef } from "./chef.js";

// main.js module
// Divide Chef class into HeadChef and AssistantChef classes
const headChef = new HeadChef("Alice");
const assistantChef1 = new AssistantChef("Bob");
const assistantChef2 = new AssistantChef("Charlie");

const chefs = [headChef, assistantChef1, assistantChef2];
// Move supervise method from Chef to HeadChef
headChef.supervise(chefs);

const tasks = [
  { task: "prepareDough", chef: assistantChef1 },
  { task: "addSauce", chef: assistantChef2 },
  { task: "addCheese", chef: assistantChef1 },
  { task: "prepareToppings", chef: assistantChef2 },
  { task: "assemblePizza", chef: headChef },
  { task: "bake", chef: headChef },
];
headChef.assignTasks(tasks); // assigns tasks to assistant chefs

// Make a Pizza: createPizza method from PizzaFactory to Pizza class
const detroit = {
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
    ingredients: ["mozzarella cheese", "salt"],
    preparation: "shred cheese",
    spreadAmount: 0.75,
  },
  toppings: {
    type: "detroit",
    ingredients: ["pepperoni", "sausage"],
    preparation: "slice and cook meats",
    spreadAmount: 1,
  },
  baking: {
    temperature: 450,
    duration: 15,
  },
};

const pizza1 = pizzaFactory.createPizza(detroit);
pizza1.prepare(); // logs "Preparing pizza with flour, water, salt, tomatoes, olive oil, garlic, mozzarella"

const hawaiian = {
  dough: {
    type: "thin",
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
    type: "hawaiian",
    ingredients: ["spam", "pineapple"],
    preparation: "slice and cook meats",
    spreadAmount: 1,
  },
  baking: {
    temperature: 450,
    duration: 15,
  },
};

// Pineapple problem solved!
const pizza3 = pizzaFactory.createPizza(hawaiian);
// throws an Error: The following ingredients are not available: rennet, spam, pineapple

// CHALLENGES  -----
// @TODO Enhancement: Add or remove ingredients from availableIngredients
// @TODO Enhancement: Add a method to PizzaFactory to create a pizza from a recipe
