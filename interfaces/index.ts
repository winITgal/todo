export interface TaskCardProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface Todo {
    id: string;
    task: string;
    isDone: boolean;
}

export interface TabContentContainerProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    selectedTab: string;
}

export interface TabsContainerProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoFormProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TabsFooterProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TabButtonsProps {
    selectedTab: string;
    onTabChange: (tab: string) => void;
}
