import { editTodo, toggleTodoIsDone } from '@/app/lib';
import deleteTodo from '@/app/lib/deleteTodo';
import { TaskCardProps } from '@/interfaces';
import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { IoCheckmarkOutline, IoCloseCircleSharp } from 'react-icons/io5';
import { RiDeleteBin4Line, RiEdit2Fill, RiSaveFill } from 'react-icons/ri';

const TaskCard: React.FC<TaskCardProps> = ({ todo, todos, setTodos }) => {
    const { id, task, isDone } = todo;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newTask, setNewTask] = useState<string>(task);

    const handleOnDeleteClick = () => {
        deleteTodo(id);
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleIsDoneClick = () => {
        toggleTodoIsDone(id);
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(updatedTodos);
    };

    const handleOnEditClick = () => {
        if (isEditing) {
            editTodo(id, newTask, todos, setTodos);
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    return (
        <div className='flex justify-between items-center p-4 dark:bg-[#2b3741]'>
            <div className='flex gap-2 items-center'>
                {isDone
                    ? <IoCheckmarkOutline color='green' size={20} onClick={handleToggleIsDoneClick} />
                    : <IoCloseCircleSharp color='blue' size={20} onClick={handleToggleIsDoneClick} />
                }
                {isEditing ? (
                    <input
                        type='text'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onBlur={handleOnEditClick}
                        autoFocus
                        className='p-1 lg:p-2 outline-none rounded-lg text-sm lg:text-lg dark:text-white'
                    />
                ) : (
                    <h2 className={`${isDone ? 'line-through' : ''}`}>{task}</h2>
                )}
            </div>
            <div className='flex gap-4'>
                {isEditing ? (
                    <FaSave className='cursor-pointer' size={20} color='green' onClick={handleOnEditClick} />
                ) : (
                    <RiEdit2Fill className='cursor-pointer' size={20} color='blue' onClick={handleOnEditClick} />
                )}
                <RiDeleteBin4Line className='cursor-pointer' size={20} color='red' onClick={handleOnDeleteClick} />
            </div>
        </div>
    );
};

export default TaskCard;
