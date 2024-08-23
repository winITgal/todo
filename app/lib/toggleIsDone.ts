import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "../constants";

const toggleTodoIsDone = (id: string): void => {
    try {
        const existingTodos = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS);
        if (existingTodos) {
            let todos: Todo[] = JSON.parse(existingTodos);
            todos = todos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            );
            const serializedTodos = JSON.stringify(todos);
            localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, serializedTodos);
        }
    } catch (error) {
        console.error("Error toggling todo completion status in local storage", error);
    }
};

export default toggleTodoIsDone;
