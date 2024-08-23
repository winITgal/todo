"use client";
import addTodo from '@/app/lib/addTodo';
import { Todo, TodoFormProps } from '@/interfaces';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
    const [task, setTask] = useState<string>("");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todo: Todo = {
            id: uuidv4(),
            task: task,
            isDone: false,
        }
        addTodo(todo);
        setTodos([...todos, todo])
        setTask("");
    };

    return (
        <div className='rounded-lg bg-white dark:bg-[#2b3741] p-2 md:p-5'>
            <form action="" className='flex justify-between items-center' onSubmit={handleOnSubmit}>
                <input
                    className='outline-none text-sm md:text-xl w-full bg-transparent dark:placeholder-gray-200'
                    type="text"
                    placeholder='Create a new todo'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <button className='bg-blue-800 py-2 px-7 rounded-md text-white transition duration-200 delay-100 hover:bg-blue-600 font-bold' type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;
