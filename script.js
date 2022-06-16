async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

typeSentence(
  "Hi! My name is Esther, I am a Frontend Devloper. click on the cool stuffs button to skip to the good part ☺️",
  "#sentence"
);
