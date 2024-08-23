import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "../constants";

const addTodo = (todo: Todo): void => {
    try {
        const existingTodos = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS);

        let todos: Todo[] = existingTodos ? JSON.parse(existingTodos) : [];

        todos.push(todo);

        const serializedTodos = JSON.stringify(todos);
        localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, serializedTodos);
    } catch (error) {
        console.error("Error saving to local storage", error);
    }
};

export default addTodo;
