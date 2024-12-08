console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
let post = {
  title: "The coolest movie of the year",
  text: "Dune 2 is the best movie of the year, because...",
  likes: 200,
  author: "Beluga",
  isReported: true,
};

console.log(post);
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
post.likes++;

console.log("Updated likes: " + post.likes);
console.log("Updated post:", post);
// --^-- write your code here --^--

const title = "Top 5 movies of 2024";
const text =
  "Dune 2, Deadpool and Wolverine, Alien: Romulus, Venom 3, Gladiator 2";
let likes = 50;
const author = "ImMrSage";
const isReported = true;

console.log(title, "\n" + text, "\n" + likes, "\n" + author, "\n" + isReported);

likes++;

console.log(`Updated likes: 
${likes} `);

console.log(`Updated post: 
  Title: ${title} 
  Text: ${text}
  Likes: ${likes}
  Author: ${author}
  Reported: ${isReported}`);
