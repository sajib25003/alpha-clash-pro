// function play(){
//     // hide the home-screen section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show the playground section
//     const playgroundScreen = document.getElementById('playground-screen');
//     playgroundScreen.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log("player pressed ", playerPressed);
  if (playerPressed === 'Escape'){
    gameOver();
  }

  // get the expected pressed
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // game logic and score update and continue the game
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementById("current-score");
    const newScore = currentScore + 1;
    setTextElementById("current-score", newScore);
 

    // --------ALTERNATIVE------------
    // //update score
    // // 1. get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // // 2. update the score
    // const newScore = currentScore + 1;

    // // // 3. show the updated score
    // currentScoreElement.innerText = newScore;
    // start new round
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    // update life count
    const currentLife = getTextElementById("current-life");
    const newLife = currentLife - 1;
    setTextElementById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }

    // // 1. get the life-count element
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifetext = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifetext);
    // // 2. update the life count
    // const newLife = currentLife -1;
    // // 3. update the current life element
    // currentLifeElement.innerText = newLife;
  }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log(alphabet);

  // display random alphabet in screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  //   set Background color
  setBackgroundById(alphabet);
}

function play(elementId) {
  // hide all screen other than playground
  addClassById("home-screen");
  addClassById('game-over')
  removeClassById("playground-screen");

  // reset score and life
  setTextElementById('current-score', 0);
  setTextElementById('current-life', 5);


  continueGame();
}

function gameOver() {
  addClassById("playground-screen");
  removeClassById("game-over");
  // final score update
  const finalScore = getTextElementById('current-score');
  setTextElementById('final-score', finalScore);
  // remove hightlight of last alphabet
  const currentAlphabet = getElementById('current-alphabet');
  removeBackgroundById(currentAlphabet);
}
