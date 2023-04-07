// After refactoring to follow ISP
class Pizza {
  prepare() {
    // code to prepare pizza
  }
}

class CuttablePizza {
  cut() {
    // code to cut pizza
  }
}

class BoxablePizza {
  box() {
    // code to box pizza
  }
}

class CheesePizza extends Pizza {
  prepare() {
    // code to prepare cheese pizza
  }
}

class PepperoniPizza extends Pizza {
  prepare() {
    // code to prepare pepperoni pizza
  }
}

class HawaiianPizza extends Pizza {
  prepare() {
    // code to prepare Hawaiian pizza
  }
}

class CuttableCheesePizza extends CheesePizza, CuttablePizza {}
class BoxableCheesePizza extends CheesePizza, BoxablePizza {}

class CuttablePepperoniPizza extends PepperoniPizza, CuttablePizza {}
class BoxablePepperoniPizza extends PepperoniPizza, BoxablePizza {}

class CuttableHawaiianPizza extends HawaiianPizza, CuttablePizza {}
class BoxableHawaiianPizza extends HawaiianPizza, BoxablePizza {}
