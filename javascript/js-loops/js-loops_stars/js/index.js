console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    let star = "<img src='assets/star-empty.svg' alt='assets/star-empty.svg'>";
    starContainer.innerHTML += star;
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
