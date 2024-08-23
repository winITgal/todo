'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMdMoon, IoMdSunny } from "react-icons/io"


const ThemeToggler = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => setHasMounted(true), []);

    if (!hasMounted) return null;

    return (
        <div className='hover:cursor-fancy-pointer'>
            {
                resolvedTheme === 'dark'
                    ?
                    <div className='cursor-pointer flex justify-between items-center gap-2 text-[#ffffff] hover:text-[#4c5575] transition duration-200 delay-100' onClick={() => setTheme('light')}>
                        <IoMdSunny size={20} />
                    </div>
                    :
                    <div className='cursor-pointer flex justify-between items-center gap-2 text-white hover:text-[#222731] transition duration-200 delay-100' onClick={() => setTheme('dark')}>
                        <IoMdMoon size={20} />
                    </div>
            }
        </div>
    )
}


export default ThemeToggler
