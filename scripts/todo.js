const todoList = [];
const doneList = []; 

renderDone();
renderTodo();

function renderDone (){
  let doneListHTML = '';

  doneList.forEach(function (doneObject, index){
    const { name, dueDate } = doneObject;
    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button class="js-Delete-Button delete-button-done">Delete</button>
        <input type="checkbox" class="check-done" checked>
      `;
    doneListHTML += html;
  });
  document.querySelector('.js-done-result')
          .innerHTML = doneListHTML;
     

          
    document.querySelectorAll('.delete-button-done')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        doneList.splice(index, 1);
        renderDone();
      });
  });
}
  


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
  

    document.querySelectorAll('.check-done')
      .forEach((checkButton, index) => {
        checkButton.addEventListener('change', (event) => {
          const isChecked = event.target.checked;
          if (isChecked) {
          let element = todoList.splice(index, 1)[0];
          doneList.push(element);
          renderTodo();
          renderDone();
          }
        });
      
        
    });

    document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodo();
        });
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



