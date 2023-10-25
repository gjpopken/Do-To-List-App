let itemList;
let addButton = document.getElementById("add-button");

function addNewItem(){
if (document.getElementById("new-item").value != "") {
console.log("There's something here.");
let newItem = document.getElementById("new-item").value;
itemList.shift(newItem);
console.log(itemList);
}
alert("Please add an item to add.");
}

addButton.addEventListener("click", addNewItem());