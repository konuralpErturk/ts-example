"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
exports.createTask = createTask;
function log(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Arguments: ${args}`);
        console.log(`${propertyKey} called with args: ${JSON.stringify(args)}`);
        return original.apply(this, args);
    };
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
    }
    remove(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
    }
    complete(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.status = "todo";
        }
    }
    getAll() {
        return this.tasks;
    }
}
exports.TodoList = TodoList;
__decorate([
    log
], TodoList.prototype, "add", null);
function createTask(id, title) {
    return {
        id,
        title,
        status: "done",
    };
}
