// Before refactoring to follow LSP
class Pizza {
  prepare() {
    // code to prepare pizza
  }
}

class CheesePizza extends Pizza {
  prepare() {
    // code to prepare cheese pizza
  }
}

class DetroitPizza extends Pizza {
  prepare() {
    // code to prepare pepperoni pizza
  }
}

// This violates LSP
class HawaiianPizza extends CheesePizza {
  prepare() {
    // code to prepare Hawaiian pizza
  }
}
