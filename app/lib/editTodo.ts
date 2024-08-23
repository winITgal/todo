import { Todo } from "@/interfaces";
import { LOCAL_STORAGE_KEY_TODOS } from "../constants";


const editTodo = (id: string, newTask: string, todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>>): void => {
    try {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task: newTask } : todo
        );

        setTodos(updatedTodos);

        localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(updatedTodos));
    } catch (error) {
        console.error("Error editing todo", error);
    }
};

export default editTodo;
