# The Pineapple Problem
This is the Source Code for a [Presentation](https://docs.google.com/presentation/d/1UyJhhxz0SjrF12_0TRCo_qW_-5Wx6kgmzsh3DsNyRRI/edit?usp=sharing) on using pizza metaphor that demonstrates SOLID principles and metaprogramming in JavaScript.

![Pizza Slice](/assets/pineapple-problem.png "Pizza Slice")

## Getting Started
To get started, clone this repository and install the dependencies:

```
git clone <https://github.com/iamfiscus/solid-priciples-with-js-pineapple-problem.git>

cd solid-priciples-with-js-pineapple-problem

npm install
```
To start the application, run the following command:

``` bash
node main.js
```

### Expected output
```
Alice is supervising:
- Alice
- Bob
- Charlie
All ingredients for Detroit-style pizza are available!
Bob is preparing dough as a Assistant Chef
Charlie is adding sauce as a Assistant Chef
Bob is adding cheese as a Assistant Chef
Alice is preparing dough as a Head Chef
Alice is adding sauce as a Head Chef
Alice is adding cheese as a Head Chef
Alice is adding toppings as a Head Chef
Alice is baking as a Head Chef
Mixing and kneading dough with flour, water, salt
Adding sauce made with tomatoes, olive oil, garlic
Adding cheese made with mozzarella cheese, salt
Adding toppings: pepperoni, sausage
Baking pizza at 450 degrees for 15 minutes
file:///Users/jfiscus/dev/ce/solid-priciples-js-pineapple-problem/pizza.js:66
      throw new Error(
            ^

Error: The following ingredients are not available: milk, rennet, spam, pineapple
    at Object.createPizza (file:///Users/jfiscus/dev/ce/solid-priciples-js-pineapple-problem/pizza.js:66:13)
    at file:///Users/jfiscus/dev/ce/solid-priciples-js-pineapple-problem/main.js:92:29
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
```

This will start the application and open it in your default browser. From there, you can order a pizza by selecting the type of pizza, toppings, and delivery method.

### Tests
To run the tests for this application, run the following command:

``` bash
npm test
```
This will run the Mocha tests for the application, which cover the pizza preparation and ordering process.

### Dependencies
This application uses the following dependencies:
TBD

## Contributing
Contributions are welcome! If you have any suggestions for improvements or would like to contribute to this application, please open an issue or submit a pull request.

License
This application is licensed under the MIT license. See LICENSE.txt for more information.
