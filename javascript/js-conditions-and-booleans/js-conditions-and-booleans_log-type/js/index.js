const data = "data";

switch (typeof data) {
  case "string":
    console.log("It`s a string.");
    break;
  case "number":
    if (isNaN(data)) {
      console.log("It`s  not a number.");
    } else {
      console.log("It`s a number.");
    }
    break;
  case "boolean":
    console.log("It`s a boolean.");
    break;
  case "undefined":
    console.log("It`s undefined.");
    break;
  case "function":
    console.log("It`s a function.");
    break;
  case "array":
    console.log("It`s an array.");
    break;
  case "object":
    if (data === null) {
      console.log("It`s a null");
    } else if (Array.isArray(data)) {
      console.log("It`s an array");
    } else {
      console.log("It`s an object");
    }
    break;
  default:
    console.log("I have no idea.");
}
