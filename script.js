const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("Напиши хотя бы что-то");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7";
        listContainer.appendChild(li);
        li.appendChild(span);
    }
    inputBox.value = '';
}


