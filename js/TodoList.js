// Single Responsibility Principle: This class is only responsible for managing the todo items
export default class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    getTodos() {
        return this.todos;
    }
}
