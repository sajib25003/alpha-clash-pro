// get text element by id
function getTextElementById(elementId){
  const element = document.getElementById(elementId);
  const elementtext = element.innerText;
  const elementValue = parseInt(elementtext);
  return elementValue;
}

// set text element by id
function setTextElementById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

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
// remove background by Id
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300') 
}

// get element by id
function getElementById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
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
