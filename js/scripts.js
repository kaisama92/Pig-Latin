//Utility 
function isVowel(text) {
  const character = text.toLowerCase();
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
    return true;
  } else {
    return false;
  }
}

function firstLetter(text) { 
  charOne = text.toLowerCase().split("");
  return charOne [0]
}

function secondLetter(text) { 
  charTwo = text.toLowerCase().split("");
  return charTwo [1]
}

function thirdLetter(text) { 
  charThree = text.toLowerCase().split("");
  return charThree [2]
}

function fourthLetter(text) { 
  charFour = text.toLowerCase().split("");
  return charFour [3]
}

function appendAy(text) {
  let newText = text + "ay";
  return newText;
}
//Business Logic

function oneWordPigLatin(text) {
  let characterArray = text.toLowerCase().split("");
  let newWord = [];
  let newWord2;
  if (isVowel(firstLetter(text))) {
    newWord = appendAy(text);
    return newWord;
  } else if (isVowel(secondLetter(text))) {
    newWord = characterArray.shift()
    newWord2 = characterArray.join("");
    newWord2 = newWord2 + appendAy(firstLetter(text));
    return newWord2;
  } else if (isVowel(thirdLetter(text))) {
    newWord = characterArray.slice(2);
    newWord = newWord.join("");
    newWord2 = newWord + appendAy(firstLetter(text) + secondLetter(text));
    return newWord2;
  }
}


































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
















































  //UI Logic