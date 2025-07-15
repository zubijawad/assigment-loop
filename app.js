var todoInput = document.getElementById("todoInput");
var list = document.getElementById("list");
var li = document.getElementById("li");

function addTodo(){
var inputVal = todoInput.value;
list.innerHTML += `<li id='li'>${inputVal}
<button onclick="deleteBtn()">Delete</button>
</li>`;
todoInput.value = "";
}


function deleteAll(){
    list.innerHTML = "";
}