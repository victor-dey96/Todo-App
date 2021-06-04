//selectors
    const todoInput = document.querySelector('.todo-input')
    const todoButton = document.querySelector('.todo-button')
    const todoList = document.querySelector('.todo-list')
//event listeners
    todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event){
    event.preventDefault();
    

    
    const todoDiv= document.createElement('div'); // Create div with class todo
    todoDiv.classList.add('todo')
    const todoLi=document.createElement('li'); //Create list element
    todoLi.innerText ='hey';
    todoLi.classList.add('todoItem');
    todoDiv.appendChild(todoLi);
    // Check Mark Button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class=fas fa-check></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Delete Button
    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='<i class=fas fa-trash></i>'
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //Append to TodoList
    todoList.appendChild(todoDiv);
} 