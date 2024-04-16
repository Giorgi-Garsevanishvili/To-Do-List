const todoList = [];
const doneList = [];

renderTodo();

function  renderTodo(){
  let todoListHTML = '';
  

  todoList.forEach(function (todoObject, index){
    const { name, dueDate } = todoObject;
    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button class="js-Delete-Button delete-button">Delete</button>
        <input type="checkbox" class="check-done">
      `;
    todoListHTML += html;
  });
  
  
    
  document.querySelector('.js-todo-result')
    .innerHTML = todoListHTML;
  document.querySelector('.js-done-result')
    .innerHTML = doneList;
  
  

    document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodo();
        });

        document.querySelectorAll('.check-done').forEach((check, index) => {
          check.addEventListener('click', () => {
            doneList.push(index, 1);
            todoList.splice(index, 1);
            document.querySelector('.js-done-result')
              .innerHTML = doneList;
            renderTodo();
          })
        })
    });
}

  

document.querySelector('.add').addEventListener('click', () => {
  addTodo();
});

document.querySelector('.js-add-placeholder').addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    addTodo();
  }
});
  

function addTodo(){
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dueDateElement = document.querySelector('.js-todo-date');
 const dueDate = dueDateElement.value;

  todoList.push({
    name,
    dueDate});
  inputElement.value = '';

  renderTodo();
}



