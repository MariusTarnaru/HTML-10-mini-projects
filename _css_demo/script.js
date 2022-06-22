const inputEl = document.getElementById("myinput");
const btn1 = document.getElementById("btn1");
const list = document.getElementById("list-item");
const listItem = document.getElementsByClassName("list-group-item");

btn1.addEventListener('click', getInput);

function getInput(){
    if (inputIsValid(inputEl.value)) {
        list.innerHTML += '<li class="list-group-item">'
        +inputEl.value + '</li>';
        
        inputEl.value = "";
    }
    
}

function inputIsValid(input){
    if(input){
        return true;
    }
    return false;
}

function changeTextColor() {

}