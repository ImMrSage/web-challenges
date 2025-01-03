console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((item) => {
  return item.id.includes("2");
});
console.log("Only cards with id 2: ", onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((item) => {
  return item.tags && item.tags.length === 3;
});
console.log("All cards with 3 tags: ", allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter(
  (item) => item.isBookmarked === false
);
console.log(
  "All Cards that are not bookmarked: ",
  allCardsThatAreNotBookmarked
);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((item) => {
  return (
    (item.tags.includes("html") || item.tags.includes("js")) &&
    item.isBookmarked === true
  );
});
console.log(
  "All cards with tags html or js that are bookmarked: ",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
