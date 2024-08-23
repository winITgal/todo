import React, { useState } from 'react';
import { Border, TabButtons, TabContentContainer, TabsFooter } from '@/components';
import { TabsContainerProps } from '@/interfaces';

const TabsContainer: React.FC<TabsContainerProps> = ({ todos, setTodos }) => {
    const [selectedTab, setSelectedTab] = useState<string>('All');

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className='bg-white rounded-xl shadow-xl my-5 p-4 md:p-6 dark:bg-[#2b3741]'>
            <TabButtons selectedTab={selectedTab} onTabChange={handleTabChange} />
            <Border />
            <TabContentContainer todos={todos} setTodos={setTodos} selectedTab={selectedTab} />
            <TabsFooter todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default TabsContainer;
