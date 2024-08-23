import { TabButtonsProps } from '@/interfaces';
import React from 'react';

const TabButtons: React.FC<TabButtonsProps> = ({ selectedTab, onTabChange }) => {
    const tabs = ["All", "Active", "Completed"];

    return (
        <div className='flex justify-around gap-1 px-2 py-2 md:gap-2 md:px-5 lg:gap-3 lg:px-10 xl:gap-4 xl:px-16'>
            {tabs.map(tab => (
                <button
                    key={tab}
                    className={`text-gray-500 hover:text-black transition duration-200 dark:hover:text-white ${selectedTab === tab ? 'font-bold text-black dark:text-white' : ''}`}
                    onClick={() => onTabChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default TabButtons;
