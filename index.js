// All of the individual sounds
const bagpipes = new Audio("https://raw.githubusercontent.com/mgermaine93/wooster-alumni-college-project/main/sounds/wooster-alumni-college-track.mp3");
// const sound2 = new Audio("./sounds/test-recording.mp3")

// Puts all the sounds together in one array
// const sounds = [sound1, sound2];

// Gets a random number
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// Plays the sound at a random index of the sounds array
function playBagpipes() {
  // 1 because that's the maximum index is 1.
  // let randomIndex = getRandomInt(2);
  // let randomSound = sounds[randomIndex];
  // randomSound.play();
  bagpipes.play();
}

// Still need to figure out how to pause the audio once it's playing...
function pauseBagpipes() {
    sound1.pause();
}
