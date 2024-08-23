import React from 'react';
import { deleteIsDoneTodos } from '@/app/lib';
import { TabsFooterProps } from '@/interfaces';

const TabsFooter: React.FC<TabsFooterProps> = ({ todos, setTodos }) => {

    const todosNo = todos.length;

    const handleDeleteCompleted = () => {
        deleteIsDoneTodos(todos, setTodos);
    };

    return (
        <div className='flex text-gray-500 justify-between p-5'>
            {
                todosNo
                    ?
                    <>
                        <span className='block dark:text-white'>{todosNo} item(s)</span>
                        <button className='dark:text-white dark:hover:text-[#4c5575] transition duration-200 delay-100' onClick={handleDeleteCompleted}>Clear Completed</button>
                    </>
                    :
                    ""
            }
        </div>
    );
}

export default TabsFooter;
