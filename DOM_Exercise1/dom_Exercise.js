"use strict";
// function addBandList(addBandName) {
//   const bandList = document.getElementById("band-list");
//   const bandNameList = document.createElement("li");
//   bandList.append(bandNameList);
// }
//Exercise 1
function addBands(myBandList) {
  for (let i = 0; i < myBandList.length; i++) {
    let li = document.createElement("li"); // creates the list element
    let text = document.createTextNode(myBandList[i]); // creates a text node out of the string from the index position [i]
    li.appendChild(text); // attaches the text to the list element
    document.getElementById("band-list").appendChild(li); // attaches the list to the ul element
  }
}
