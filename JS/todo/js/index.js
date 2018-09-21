var listElement   = document.querySelector('#app ul');
var inputElement  = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos         = JSON.parse(localStorage.getItem('todosList')) || [];

function renderTodo() {
  listElement.innerHTML = '';

  for(todo of todos) {
    var todoElement    = document.createElement('li');
    var todoText       = document.createTextNode(todo);
    var deleteElement  = document.createElement('a'); 
    var deleteText     = document.createTextNode(' Excluir');
    var pos            = todos.indexOf(todo);

    deleteElement.appendChild(deleteText);
    deleteElement.setAttribute('href', '#');
    deleteElement.setAttribute('onclick','deleteTodo('+ pos +')');
    todoElement.appendChild(todoText);
    todoElement.appendChild(deleteElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodo();
  saveToLocalStorage();
} 

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodo();
  saveToLocalStorage();
}


function saveToLocalStorage() {
  localStorage.setItem('todosList', JSON.stringify(todos));  
}

buttonElement.onclick = addTodo;

renderTodo();