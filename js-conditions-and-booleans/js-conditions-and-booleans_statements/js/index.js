console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 2;

if (numberOfHotdogs < 5) {
  console.log(
    `Your bill for ${numberOfHotdogs} hotdogs: $${numberOfHotdogs * 2}`
  );
  // } else if (numberOfHotdogs === 5) {
  //   console.log(
  //     `Your bill for ${numberOfHotdogs} hotdogs: $, ${numberOfHotdogs * 2}`
  //   );
} else {
  console.log("Please, choose the number of hot dogs you want to buy.");
}

// Part 4: Daytime
const currentHour = 12;

const statement = ".";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);