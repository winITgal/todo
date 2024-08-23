import React, { useEffect, useState } from 'react';
import { Border, TaskCard } from '@/components';
import { TabContentContainerProps } from '@/interfaces';

const TabContentContainer: React.FC<TabContentContainerProps> = ({ todos, setTodos, selectedTab }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading data', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center gap-2 my-10 dark:bg-[#2b3741]'>
                <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-blue-800 "></div>
                <span className='dark:text-white'>Loading ...</span>
            </div>
        );
    }

    const filteredTodos = todos.filter(todo => {
        if (selectedTab === 'All') return true;
        if (selectedTab === 'Active') return !todo.isDone;
        if (selectedTab === 'Completed') return todo.isDone;
        return true;
    });

    return (
        <div>
            {filteredTodos.map(todo => (
                <div key={todo.id}>
                    <TaskCard todo={todo} todos={todos} setTodos={setTodos} />
                    <Border key={todo.id} />
                </div>
            ))}
        </div>
    );
};

export default TabContentContainer;
