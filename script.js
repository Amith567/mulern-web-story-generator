const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "Once upon a time, :insertx: decided to take a stroll. After some time, they reached :inserty:, where they stood frozen in disbelief for a few seconds, then :insertz:. Jake watched the entire spectacle, but wasn’t shocked  :insertx: had a history of doing the unexpected, and it was incredibly hot outside.";

const insertX = ["The Mighty Elephant", "Grandma Sally", "The Dancing Chef"];
const insertY = [
  "the mystical cave",
  "the bustling carnival",
  "the moonlit beach",
];
const insertZ = [
  "burst into flames and started singing",
  "transformed into a giant jellyfish and floated away",
  "did a backflip and fell into a fountain",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    newStory = newStory.replace("Jake", customName.value);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
