const input = document.getElementById('todo')
const btn = document.getElementById('btn');
const ul = document.querySelector('ul');
const form = document.querySelector('form');

let arrOfTodos = [];

const addTodo = (todoItem) => {
    if (todoItem === '') {
       alert('Enter new Todo') 
    } else {
        const todo = {
            id : Date.now(),
            name: todoItem,
            isCompleted: false 
        }
        arrOfTodos.push(todo);
        diplayTodos(arrOfTodos)
        setTodosToLocalStorage(arrOfTodos)
        input.value = '';   
    }
    
}

function diplayTodos(todos){
    if(localStorage.getItem('todos') === null){
        arrOfTodos = []
       }else{
        setTodosToLocalStorage(arrOfTodos)
       }
        arrOfTodos.forEach(todo => {
        const todoCompleted = todo.isCompleted ? 'done' : null; 
        const li = document.createElement('li');
        li.setAttribute('class', 'todoItem');
        li.setAttribute('data-key', todo.id);
        if(todo.isCompleted === true){
            li.classList.add('done')
        }
        li.innerHTML = `
            <input type='checkbox' class='todoList' ${todoCompleted} >
                ${todo.name}
            <a class='btn-clear'>x <a>
        `
        ul.appendChild(li);
    })
}


function setTodosToLocalStorage(todos){
   if(localStorage.getItem('todos') === null){
    arrOfTodos = []
   }else{
       arrOfTodos =  localStorage.setItem('todos', JSON.stringify(todos));
   }
   diplayTodos(arrOfTodos);
}

function getTodosFromLocalStorage(){
    const todosFromStore = localStorage.getItem('todos');
    console.log(todosFromStore);
    if(todosFromStore){
        arrOfTodos = JSON.parse(todosFromStore)
        diplayTodos(arrOfTodos)
    }
}

function toggleTodo(id){
    arrOfTodos.forEach(todo => {
        if(id === todo.id){
            todo.isCompleted = !todo.isCompleted
        }
        setTodosToLocalStorage(todo)
    })
}

function deleteTodo(id){
   let todos = arrOfTodos.filter(todo => {
        return todo.id !== id;
    })
    setTodosToLocalStorage(todos)
}

getTodosFromLocalStorage();

ul.addEventListener('click', (e) =>{
    if(e.target.type === 'checkbox'){
        toggleTodo(e.target.parentElement.getAttribute('data-key'))
    }

    if(e.target.classList.contains('btn-clear')){
        deleteTodo(e.target.parentElement.getAttribute('data-key'))
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    addTodo(input.value)
});


