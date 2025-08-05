import React, { useEffect, useState } from 'react';
// dom
import { Link } from 'react-router-dom';
// components 
import Particle from '../assets/components/particle/particle';
import IconInfo from '../assets/components/icons/IconInfo';



const Index = () => {
    const [bgClass, setBgClass] = useState('bg1');
    useEffect(() => {
        const bgClasses = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % bgClasses.length;
            setBgClass(bgClasses[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div>
            <section>
                <div className={`w-full f backdrop-blur-md bg-black h-[100vh] overflow-hidden flex items-center justify-center ${bgClass}`}>
                    <div className='flex text-center z-10 w-[100%] liner-dark  shadow-md h-[100%] rounded-xl  flex-col items-center justify-center gap-y-2.5'>
                        <Particle/>
                        <h1
                            className={`text-2xl sm:text-3xl md:!text-5xl  text-white font-medium tracking-tight`}
                        >
                        Welcome to my <span className='text-blue-400 font-mono font-bold'>personal</span> website</h1>
                        <p className='text-sm md:text-base text-slate-200'>A portfolio to showcase your resume and achievements</p>
                        <IconInfo/>
                        <Link to={'/main-page'}
                            className='p-2 hover:bg-blue-800 transition-colors duration-150 border-transparent bg-blue-500 text-white text-sm font-bold rounded-full border-2 px-10'
                        >Show Website</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index
