//let itemList = []; //instialize as an array with brackets, thanks ChatGPT
//much of this code was derived from a video tutorial found here : https://www.youtube.com/watch?v=G0jO8kUrg-I
let list = document.getElementById("to-do-list");

function addNewItem(){
    let newItem = document.getElementById("new-item").value;

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

//This script below is from the video tutorial
list.addEventListener("click", function(e) { // the var e is arbitrary?
    if (e.target.tagName === "LI"){ //not sure why this had to be capitalized
        e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false); //not sure why it says false at the end. 