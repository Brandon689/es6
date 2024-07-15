// Single Responsibility Principle: This class is only responsible for coordinating between the model and view
export default class TodoController {
    constructor(todoList, todoView) {
        this.todoList = todoList;
        this.todoView = todoView;
    }

    init() {
        this.todoView.bindAddTodo(this.handleAddTodo.bind(this));
        this.todoView.on('removeTodo', (event) => this.handleRemoveTodo(event.detail));
        this.updateView();
    }

    handleAddTodo(todoText) {
        this.todoList.addTodo(todoText);
        this.updateView();
    }

    handleRemoveTodo(index) {
        this.todoList.removeTodo(index);
        this.updateView();
    }

    updateView() {
        this.todoView.displayTodos(this.todoList.getTodos());
    }
}
