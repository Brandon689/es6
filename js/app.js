import TodoList from './TodoList.js';
import TodoView from './TodoView.js';
import TodoController from './TodoController.js';

const todoList = new TodoList();
const todoView = new TodoView();
const todoController = new TodoController(todoList, todoView);

todoController.init();
