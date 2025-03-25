# TypeScript Example Project

This is a TypeScript-based project that demonstrates the usage of `main.ts` and `todo.ts` files for managing and executing tasks.

## Project Structure

- **main.ts**: The entry point of the application. It initializes the application and interacts with the `todo.ts` module.
- **todo.ts**: Contains the logic for managing a list of tasks, including adding, removing, and listing tasks.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ts-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript files:
   ```bash
   npx tsc
   ```

## Usage

1. Run the application:

   ```bash
   node dist/main.js
   ```

2. The application will allow you to manage tasks using the `todo.ts` module.

## Features

- Add tasks to a to-do list.
- Remove tasks from the list.
- Display all tasks.

## Example

Here is an example of how the application works:

1. Add a task:

   ```typescript
   addTask("Learn TypeScript");
   ```

2. List tasks:

   ```typescript
   listTasks();
   ```

3. Remove a task:
   ```typescript
   removeTask(0);
   ```

## Contributing

Feel free to fork this repository and submit pull requests for improvements or new features.

## License

This project is licensed under the MIT License.
