console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  // diameter1 = pizzaInput1.value;
  // diameter2 = pizzaInput2.value;
  pizza1Area = (diameter1 ** 2 * Math.PI) / 4;
  pizza2Area = (diameter2 ** 2 * Math.PI) / 4;
  pizzaGain = ((pizza2Area - pizza1Area) / pizza1Area) * 100;
  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
