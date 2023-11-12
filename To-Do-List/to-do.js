
const inputBox = document.getElementById("tasks");
const pending= document.getElementById("list-pending");


//Add Tasks
function addTasks(){
    //condition checking
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        pending.appendChild(li);

        let spanDel = document.createElement("span");
        spanDel.classList.add("span-del");
        spanDel.innerHTML = "\u00d7";
        li.appendChild(spanDel);
    }
    inputBox.value ="";
    //function call to save the list items in local storage
    saveData();
}


//Complete tasks event for completing a task
pending.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    },
        false);

        
    //Save Data in localStorage
    function saveData(){
        localStorage.setItem("data", pending.innerHTML);
    }

    function showList(){
        pending.innerHTML = localStorage.getItem("data");
    }
    showList();


