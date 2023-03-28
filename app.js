// Learning EVENTS!
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementById("list");
let body = document.getElementById("main");
let deleteButton = document.getElementsByClassName("delete")[0];




// functions
function inputLength(){
    return input.value.length
}

function createListElement() {
    // create li
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    
    // create delete button
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    ul.appendChild(button);

    // create a div with a class "item"
    let myDiv = document.createElement("div");
        myDiv.classList.add("item");
        ul.appendChild(myDiv);
        myDiv.appendChild(li);
        myDiv.appendChild(button);

    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if ( inputLength() > 0 && event.keyCode === 13 ){
        createListElement();
    }
}

function removeItem(event){
    let item = event.target
    if ( item.nodeName === 'BUTTON'){
        item.parentNode.remove();
    }
}

function itemDone(event){
    let item = event.target
    if ( item.nodeName === 'LI'){
        item.classList.toggle('done');
    }
}

// Event Listeners
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
body.addEventListener("click", itemDone)
body.addEventListener("click", removeItem)

