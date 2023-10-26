let itemList = []; //instialize as an array with brackets, thanks ChatGPT
let addButton = document.getElementById("add-button");

function addNewItem(){
    let newItem = document.getElementById("new-item").value;
    let list = document.getElementsByTagName("ul");
if (newItem !== "") {
console.log("There's something here.");
itemList.push(newItem);

console.log(itemList);
//code below from mdn web docs
const newShownItem = document.createElement("li");
newShownItem.innerHTML = newItem;
//list.appendChild(newShownItem);

document.getElementById("new-item").value = "";
} else {
alert("Please add an item to add.");
}
}
addButton.addEventListener("click", addNewItem);