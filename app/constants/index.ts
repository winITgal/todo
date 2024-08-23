import { Todo } from "@/interfaces";

const LOCAL_STORAGE_KEY_TODOS: string = "todos";
const todos: Todo[] = [
    {
        id: '137ccef8-6a24-48c3-8bb6-3b24b6d31dbd',
        task: "Write project proposal",
        isDone: true,
    },
    {
        id: '52d4de45-58be-45bd-afad-8b38d0dbd6b4',
        task: "Design the project architecture",
        isDone: false,
    },
    {
        id: 'd31d6a8a-1034-4345-9d99-ca9206d8a063',
        task: "Develop the front-end components",
        isDone: false,
    },
    {
        id: 'd9d64a10-9459-4354-8938-567369033e1b',
        task: "Implement the back-end logic",
        isDone: true,
    },
    {
        id: '739e8881-65ea-43f3-8515-6ef8f52bc9f8',
        task: "Test and debug the application",
        isDone: false,
    }
];
const tabs = ["All", "Active", "Completed",]


export {
    LOCAL_STORAGE_KEY_TODOS,
    todos,
    tabs,
}
