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
const numberOfHotdogs = 120;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if ((numberOfHotdogs >= 5) & (numberOfHotdogs < 100)) {
  pricePerHotdog = 1.5;
} else if ((numberOfHotdogs >= 100) & (numberOfHotdogs < 1000000)) {
  pricePerHotdog = 1;
} else if (numberOfHotdogs >= 1000000) {
  pricePerHotdog = 0.1;
} else {
  console.log("Please, choose the number of hot dogs you want to buy.");
}

if (pricePerHotdog !== undefined) {
  let bill = numberOfHotdogs * pricePerHotdog;
  console.log(`Your bill for ${numberOfHotdogs} hotdogs: $${bill}`);
}

// Part 4: Daytime
const currentHour = 20;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
