function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Arguments: ${args}`);
    console.log(`${propertyKey} called with args: ${JSON.stringify(args)}`);
    return original.apply(this, args);
  };
}

export interface Task {
  id: number;
  title: string;
  status: "todo" | "in progress" | "done";
}

export class TodoList<T extends Task> {
  private tasks: T[] = [];

  @log
  add(task: T): void {
    this.tasks.push(task);
  }
  remove(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  complete(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = "todo";
    }
  }
  getAll(): T[] {
    return this.tasks;
  }
}

export function createTask(id: number, title: string): Task {
  return {
    id,
    title,
    status: "done",
  };
}
