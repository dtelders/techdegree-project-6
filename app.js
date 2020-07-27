const querty = document.querySelector("#querty");
const phrase = document.querySelector("#phrase");
const startButton = document.querySelector(".btn__reset");
let missed = 0;

//listen for start button to be pressed
startButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

//array of phrases
const phrases = ["apple of my eye", "hit the ground running", "if the shoe fits", "once in a blue moon", "tell me about it", "two heads are better than one"];

//randomly choose a phrase from an array, and split it into individual letters
function getRandomPhraseAsArray(array) {
    const randomPhrase = array[Math.floor(Math.random() * array.length)];
    return randomPhrase.split("");
}
console.log(getRandomPhraseAsArray(phrases));

// add the letters to the display
function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        const ul = document.querySelector("#phrase ul");
        const li = document.createElement("li");

        //If the character in the array is a letter and not a space, the function should add the class “letter” to the list item.
        if (array[i] !== "") {
            li.className = "letter";
        } else {
            li.className = "";
        }

        li.textContent = array[i];
        ul.appendChild(li);
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhrasetoDisplay(phraseArray);
}
