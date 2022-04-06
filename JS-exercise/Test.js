"use strict";
// originalWord.split(" ")
const arrayOriginal = ["a", "abasas", "abc"]; // length will always be 3!

// for (let i = 0; i <= arrayOriginal.length - 1; i++) {
//   wordLength(arrayOriginal[i]);
// }

// function wordLengths(e) {
//   console.log(e.length);

function wordLength(x) {
  let xArray = x.split(" ");
  console.log(xArray);
  let newLength = 0;
  let word;
  for (let i = 0; i < xArray.length; i++) {
    if (xArray[i].length > newLength) {
      newLength = xArray[i].length;
      word = xArray[i];
    }
  }
  return word;
}
console.log(wordLength("hello my name is arnopoopenheimer"));
// for (let i = 0; arrayOriginal.length >= i; i++) {
//   if (array1.length > newArray.length) {
//     console.log("array1 is the smallest");
//   }
// }

// let test = ["abc"];
// console.log(test.forEach(wordLengths));

// console.log(test.forEach());

function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
