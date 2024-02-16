// add a class from an element
function addClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// remove a class to and element
function removeClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// add background by Id
function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300') 
}

// get a random alphabet
function getARandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split('');
  //get a random index between o & 25
  const randomNumber = Math.random()*25;
  const randomIndex = Math.round(randomNumber);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}
