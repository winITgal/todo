import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "../constants";

const deleteTodo = (id: string): void => {
    try {
        const existingTodos = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS);

        if (existingTodos) {
            let todos: Todo[] = JSON.parse(existingTodos);

            todos = todos.filter(todo => todo.id !== id);

            const serializedTodos = JSON.stringify(todos);
            localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, serializedTodos);
        }
    } catch (error) {
        console.error("Error deleting todo from local storage", error);
    }
};

export default deleteTodo;
