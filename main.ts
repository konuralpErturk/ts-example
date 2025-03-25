import { TodoList, Task, createTask } from "./todo";
const todo = new TodoList();
todo.add(createTask(1, "Wake Up"));
todo.add(createTask(2, "Do Shopping"));
todo.add(createTask(3, "Fix Codding"));

console.log("Initial List ", todo.getAll());

todo.complete(1);

console.log("After Complete ", todo.getAll());

todo.remove(2);

console.log("After Remove ", todo.getAll());
