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


// Make a Pizza: createPizza method from PizzaFactory to Pizza class
const pizza1 = pizzaFactory.createPizza("flour", "water", "salt", "tomatoes", "olive oil", "garlic", "mozzarella");
pizza1.prepare(); // logs "Preparing pizza with flour, water, salt, tomatoes, olive oil, garlic, mozzarella"

const pizza2 = pizzaFactory.createPizza("flour", "water", "salt", "pepperoni", "sausage");
pizza2.prepare(); // logs "Preparing pizza with flour, water, salt, pepperoni, sausage"

const pizza3 = pizzaFactory.createPizza("flour", "water", "salt", "pepperoni", "pineapple");
// throws an error: "Not all ingredients are available. Pineapple problem solved!"
