console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

const saturation = 70;
const lightness = 60;

//Color slider
inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
});

//Border Radius slider
inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  box.style.borderRadius = `${radius}%`;
});

//Rotation slider
inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
