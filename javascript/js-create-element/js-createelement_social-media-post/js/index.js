console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//Article
const post = document.createElement("article");
document.body.append(post);
post.classList.add("post");
//p content
const postContent = document.createElement("p");
post.append(postContent);
postContent.classList.add("post__content");
postContent.textContent = "It`s a social media post. More content is coming.";
//footer
const footer = document.createElement("footer");
post.append(footer);
footer.classList.add("post__footer");
//span username
const username = document.createElement("span");
footer.append(username);
username.classList.add("post__username");
username.textContent = "@username2";
//like button
const button = document.createElement("button");
footer.append(button);
button.setAttribute("type", "button");
button.classList.add("post__button");
button.textContent = "♥ Like";
button.addEventListener("click", handleLikeButtonClick);
