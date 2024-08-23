import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "../constants";

const deleteIsDoneTodos = (todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>>): void => {
    try {
        const filteredTodos = todos.filter(todo => !todo.isDone);
        setTodos(filteredTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(filteredTodos));
    } catch (error) {
        console.error("Error deleting completed todos", error);
    }
};

export default deleteIsDoneTodos;
