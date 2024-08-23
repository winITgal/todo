import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "@/app/constants";

const seedTodos = (todos: Todo[]): void => {
    try {
        const serializedTodos = JSON.stringify(todos);
        localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, serializedTodos);
    } catch (error) {
        console.error("Error initializing todos in local storage", error);
    }
};

export default seedTodos;
