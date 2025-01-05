console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  //Loop
  for (let i = 1; i <= 5; i++) {
    const star = `<img src='assets/${
      i <= filledStars ? "star-filled" : "star-empty"
    }.svg' alt="Star ${i}" style="cursor: pointer;">`;

    starContainer.innerHTML += star;

    // Add click event listener to each star after rendering
    const stars = document.querySelectorAll("img");
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        renderStars(index + 1);
      });
    });
  }
}

renderStars(0);
