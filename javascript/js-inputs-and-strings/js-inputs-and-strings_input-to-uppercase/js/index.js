console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppsercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppsercase.addEventListener("click", () => {
  const textInput = firstInput.value;
  const uppercasedText = textInput.toUpperCase();
  firstInput.value = uppercasedText;
});
