// function play(){
//     // hide the home-screen section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show the playground section
//     const playgroundScreen = document.getElementById('playground-screen');
//     playgroundScreen.classList.remove('hidden')
// }

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
  addClassById("home-screen");
  removeClassById("playground-screen");
  continueGame();
}
