//Utility 
function isVowel(text) {
  const character = text.toLowerCase();
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    return true;
  } else {
    return false;
  }
}

//Business Logic

function vowelsInWord(text) {
    const characterArray = text.toLowerCase().split("");
    const newArray = [];
    characterArray.forEach(function(character){
      if (isVowel(character)){
      newArray.push(true);
      } else {
        newArray.push(false);
      }
    });
    return newArray;
  }

function firstLetter(text) {
  
}














































  //UI Logic