const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);





















