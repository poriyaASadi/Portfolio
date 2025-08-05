import React, { useEffect, useState } from 'react'
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeSwitch() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const handleTheme = (data) => {
        setTheme(data);
    }

    return (
        <div className='flex  items-center bg-slate-200 dark:bg-slate-900 p-3 justify-between rounded-md w-full'>
            <div className='flex items-center gap-1'>
                <span className='text-lg'>theme</span>
                {/* {theme === 'light' ?  : } */}
            </div>

            <div className='flex *:flex *:items-center *:gap-x-1 gap-2 *:cursor-pointer text-sm *:dark:bg-slate-800'>
                <div
                    onClick={() => handleTheme("light")}
                    className={`px-2 py-1 rounded-md ${theme === 'light' ? '!bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                    <Brightness6Icon fontSize='small' />
                    Light
                </div>
                <div
                    onClick={() => handleTheme("dark")}
                    className={`px-2 py-1 rounded-md  ${theme === 'dark' ? '!bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                    <DarkModeIcon fontSize='small' />
                    Dark
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitch