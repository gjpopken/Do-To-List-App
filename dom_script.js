let itemList = [];
let addButton = document.getElementById("add-button");

function addNewItem(){
    let newItem = document.getElementById("new-item").value;
if (newItem !== "") {
console.log("There's something here.");
itemList.unshift(newItem);
document.getElementById("new-item").value = "";
console.log(itemList);
} else {
alert("Please add an item to add.");
}
}
addButton.addEventListener("click", addNewItem);