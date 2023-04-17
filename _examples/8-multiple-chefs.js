// chef.js module
export class Chef {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  prepareDough() {
    // code to prepare dough
    console.log(`${this.name} is preparing dough as a ${this.role}`);
  }

  addSauce() {
    // code to add sauce
    console.log(`${this.name} is adding sauce as a ${this.role}`);
  }

  addCheese() {
    // code to add cheese
    console.log(`${this.name} is adding cheese as a ${this.role}`);
  }

  addToppings() {
    // code to add toppings
    console.log(`${this.name} is adding toppings as a ${this.role}`);
  }

  bake() {
    // code to bake pizza
    console.log(`${this.name} is baking as a ${this.role}`);
  }
  assemblePizza() {
    // base implementation for assembling pizza
    this.prepareDough();
    this.addSauce();
    this.addCheese();
    this.addToppings();
  }
}

export class HeadChef extends Chef {
  constructor(name) {
    super(name, "Head Chef");
  }
  supervise(assistantChefs) {
    this.assistantChefs = assistantChefs;

    console.log(`${this.name} is supervising:`);
    assistantChefs.forEach((chef) => console.log(`- ${chef.name}`));
  }

  assignTasks(tasks) {
    tasks.forEach(({ task, chef }) => {
      switch (task) {
        case "mix dough":
          chef.prepareDough();
          break;
        case "simmer sauce":
          chef.addSauce();
          break;
        case "shred cheese":
          chef.addCheese();
          break;
        case "slice meats":
          chef.prepareToppings();
          break;
        case "assemble pizza":
          chef.assemblePizza();
          break;
        case "bake pizza":
          chef.bake();
          break;
        default:
          console.log(`Unknown task: ${task}`);
      }
    });
  }
}

export class AssistantChef extends Chef {
  constructor(name) {
    super(name, "Assistant Chef");
  }

  prepareToppings() {
    // code to prepare toppings
  }
}
