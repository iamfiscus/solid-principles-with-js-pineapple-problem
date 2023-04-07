class Chef {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  prepareDough() {
    // code to
  }

  addSauce() {
    // code to add sauce
  }

  addCheese() {
    // code to add cheese
  }

  addToppings() {
    // code to add toppings
  }

  bake() {
    // code to bake pizza
  }
}

class HeadChef extends Chef {
  constructor(name) {
    super(name, "Head Chef");
  }

  supervise(chefs) {
    for (let chef of chefs) {
      chef.prepareDough();
      chef.addSauce();
      chef.addCheese();
      chef.addToppings();
      chef.bake();
    }
  }
}

class AssistantChef extends Chef {
  constructor(name) {
    super(name, "Assistant Chef");
  }

  prepareToppings() {
    // code to prepare toppings
  }
}

const headChef = new HeadChef("Alice");
const assistantChef1 = new AssistantChef("Bob");
const assistantChef2 = new AssistantChef("Charlie");

const chefs = [headChef, assistantChef1, assistantChef2];

headChef.supervise(chefs);
