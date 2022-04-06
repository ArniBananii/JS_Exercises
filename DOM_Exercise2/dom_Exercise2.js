"use strict ";
// Exercise 2
function addMultiTable(rows, cols) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    // rows
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < cols; j++) {
      //columns
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  document.querySelector("h1").appendChild(table);
}
addMultiTable(5, 5);
