let itemCounter = 1;
let myList = document.getElementById('my-list');
let myButton = document.getElementById('test-butt');
let myHead = document.getElementById('my-heading');
let listItems  = document.getElementById("my-list").getElementsByTagName("li");

for(i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', activateItem)
}

function activateItem(){
    //alert('Click Detected');
    myHead.innerHTML = this.innerHTML;
    this.classList.add("active");
}

myButton.addEventListener('click', createNewItem);

function createNewItem(){
    myList.innerHTML += "<li>New Item " + itemCounter + "</li>";
    itemCounter++;
}