//let itemList = []; //instialize as an array with brackets, thanks ChatGPT
//much of this code was derived from a video tutorial found here : https://www.youtube.com/watch?v=G0jO8kUrg-I
function addNewItem(){
    let newItem = document.getElementById("new-item").value;
    let list = document.getElementById("to-do-list");
if (newItem !== "") {
console.log("There's something here.");
//itemList.push(newItem);
//console.log(itemList);
//code below from mdn web docs
let newShownItem = document.createElement("li");
newShownItem.innerHTML = newItem;
list.appendChild(newShownItem);
let span = document.createElement("span");
span.innerHTML = "\u00d7"; //a value that I got the from tutorial, not sure what it is referencing
newShownItem.appendChild(span);
} else {
alert("Please add an item.");
}
document.getElementById("new-item").value = "";
}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addNewItem);