import React, { useEffect, useState } from 'react'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

import ThemeSwitch from './theme/ThemeSwitch';

//import {useWindowSize} from 'react-use';

function SideBar() {
    const [showMenu, setShowMenu] = useState(false);
    //const {width , height} = useWindowSize();
    useEffect(() => {

    }, []);
    return (
        <>
            <div className={` absolute lg:relative bg-slate-100 dark:bg-slate-950 lg:left-0 ${showMenu ? 'left-0' : '-left-[300px]'} transition-all duration-250 z-20 p-3 rounded-2xl w-[300px] drop-shadow-xl backdrop-blur-[8px] *:dark:text-white h-[calc(100vh-30px)] shadow-md`}>
                <div className='flex flex-col justify-between'>
                    <div className='relative'>
                        {/* btn switch menu  */}
                        <div onClick={() => {
                            setShowMenu((prev) => !prev);
                        }} className='absolute -right-13 lg:hidden z-10 dark:bg-slate-950 top-5 w-10 h-10 flex items-center justify-center rounded-r-full cursor-pointer   bg-slate-100'>
                            <MenuIcon fontSize='medium' />
                        </div>
                        <div>
                            <ul className='flex items-center gap-1 mb-1'>
                                <li className='w-3.5 h-3.5 rounded-full bg-red-500'></li>
                                <li className='w-3.5 h-3.5 rounded-full bg-yellow-500'></li>
                                <li className='w-3.5 h-3.5 rounded-full bg-green-500'></li>
                            </ul>
                        </div>
                        <div className='flex items-center py-3 gap-2 mb-3 border-b border-slate-50 dark:border-slate-700 '>
                            <div className='bg-orange-100 rounded-full'>
                                <img src="/image/me-profile.jpeg" className='w-14 rounded-full h-14' alt="profile/image" />
                            </div>
                            <div className='text-left'>
                                <h3 className=' text-slate-400 text-sm'>Product Designer</h3>
                                <p className='font-medium text-lg'>Poriya Asadi</p>
                            </div>
                        </div>
                        <div>
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => {
                setShowMenu((prev) => !prev);
            }} className={`w-full z-10 h-full ${showMenu ? 'inline-block' : 'hidden'} absolute left-0 top-0 back-dark`}></div>
        </>
    )
}

export default SideBar
