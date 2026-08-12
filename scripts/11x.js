const todoList = JSON.parse(localStorage.getItem('todoL')) || [];

renderTodoList()
console.log(renderTodoList())

function renderTodoList() {
    let todoListhtml = ''
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]
        //const name = todoObject.name
        //const dueDate = todoObject.dueDate
        const { name, dueDate } = todoObject
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>  
        <button onclick="
            todoList.splice(${i}, 1);
            localStorage.setItem('todoL', JSON.stringify(todoList));
            renderTodoList();
        " class="delete-button" >Delete</button>`

        todoListhtml += html;

    }
    document.querySelector('.js-todo-list')
        .innerHTML = todoListhtml

}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    localStorage.setItem('todoL', JSON.stringify(todoList))

    inputElement.value = '';

    renderTodoList()
}