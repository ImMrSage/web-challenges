console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(tosCheckbox.checked);
  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    hideTosError();
    alert("Form submitted");
  } // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  else {
    showTosError();
  }
});
