export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  }
  if (animal === "dogs") {
    return `I like ${animal}!`;
  }

  if (!animal) {
    return "I do not like animals at all!";
  }
}
