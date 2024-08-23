import React from 'react'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

const Title = () => {
    return (
        <div className='flex justify-between items-center py-5'>
            <h1 className='font-bold md:text-2xl text-white dark:text-[#2b3741]'>TODO</h1>
            <ThemeToggler />
        </div>
    )
}

export default Title
