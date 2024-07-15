// Single Responsibility Principle: This class is only responsible for rendering the UI
export default class TodoView {
    constructor() {
        this.app = document.getElementById('app');
        this.todoInput = document.getElementById('todoInput');
        this.addButton = document.getElementById('addTodo');
        this.todoList = document.getElementById('todoList');
    }

    bindAddTodo(handler) {
        this.addButton.addEventListener('click', () => {
            if (this.todoInput.value) {
                handler(this.todoInput.value);
                this.todoInput.value = '';
            }
        });
    }

    displayTodos(todos) {
        this.todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                this.emit('removeTodo', index);
            });
            li.appendChild(deleteButton);
            this.todoList.appendChild(li);
        });
    }

    // Open-Closed Principle: We can add new events without modifying existing code
    on(event, callback) {
        this.app.addEventListener(event, callback);
    }

    emit(event, data) {
        const customEvent = new CustomEvent(event, { detail: data });
        this.app.dispatchEvent(customEvent);
    }
}
