// create a srp class for creating a pizza
const Pizza = function (size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

// create a srp class for creating a pizza order
const PizzaOrder = function (pizza, customer) {
    this.pizza = pizza;
    this.customer = customer;
}   

const PizzaOrderService = function () {
    this.order = function (pizza, customer) {
        return new PizzaOrder(pizza, customer);
    }
}
const PizzaService = function () {
    this.create = function (size, toppings) {
        return new Pizza(size, toppings);
    }
}

const pizzaService = new PizzaService();
const pizza = PizzaService.create('5in','pepperoni') // Pizza({size: '5in',toppings: 'pepperoni'})

PizzaOrderService(pizza, customer) // PizzaOrder({pizza: Pizza, customer: customer})
