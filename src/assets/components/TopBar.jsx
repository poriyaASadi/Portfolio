import React, { useState, useContext, useEffect } from 'react';
import { MyContext } from '../context/DataInfo';
import AboutSkill from './AboutSkill';
import IconSkills from './icons/IconSkills';
import GithubRepos from './Repos';
import Channel from './Channel';
import Projects from './Projects';
const TopBar = () => {
  const { myData, setMyData } = useContext(MyContext);
  return (
    <div className='w-full'>
      <div>
        {/* image Top bar */}
        <div className='min-w-full relative'>
          <img src="/public/image/astronaut-sci-fi-3840x2160-10710.jpg"
            className='w-full h-[15rem] lg:h-[17rem] object-top object-cover'
            alt="CoverImage" />

        </div>
        <div className='hidden md:inline-block'>
          <IconSkills />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 h-auto'>
          <div className='p-3 col-span-2'>
            <div className='flex items-center gap-1'>
              <div className='w-24 h-24 rounded-full  bg-white shadow-md dark:bg-slate-900'>
                <img src="/public/image/me-profile.jpeg"
                  className='w-full h-full rounded-full object-cover'
                  alt="Avatar" />
              </div>
              <div>
                <h1 className='text-4xl tracking-tighter  dark:text-white font-medium'>Poriya Asadi</h1>
                <p className='text-blue-500 font-medium'>@Developer</p>
              </div>
            </div>
            <p className='max-w-[51rem] mt-2 font-medium text-sm md:text-base dark:text-white leading-6 md:leading-7 text-justify -tracking-[0.03rem] md:tracking-tight'>Welcome to my personal website! I'm a frontend developer with 3+ years of experience, now diving into backend and AI. Here, you'll find my projects and thoughts on tech. Consider this your gateway to everything about me and my work🌟</p>
            {/* top bar btn */}
            <div className='max-w-full h-fit grid grid-cols-2 xl:grid-cols-4  gap-3 px-0 py-3 md:p-3'>
              {
                myData && (
                  myData[1].map((data, index) => (
                    <a href={data.url} type="button" key={index} className={`
                ${data.name === 'GitHub' ? '' : data.name === 'LinkeDin' ? 'hover:text-blue-500' : data.name === 'Instagram' ? 'hover:text-red-400' : 'hover:text-blue-700'}
                cursor-pointer bg-white transition-colors duration-100 flex flex-row-reverse gap-1 w-full items-center py-2.5 justify-center px-6 rounded-full dark:text-white dark:bg-slate-900`}>
                      {data.name}
                      {data.component}
                    </a>
                  ))
                )
              }
            </div>
            <div className='md:hidden'>
              <h2 className='dark:text-white font-medium text-lg pb-2.5'>Acquired skills🥷</h2>
              <IconSkills />
            </div>
            <AboutSkill />
            <Projects />
          </div>
          {/* right */}
          <div className='sm:hidden xl:inline-block'>
            <Channel />
            <h2 className='dark:text-white px-2 my-2 font-medium'>My Repos in GitHub👨‍💻</h2>
            <p className='dark:text-white text-sm bg-red-100 dark:bg-red-950 p-3 max-w-[30rem] rounded-md'>! if you need sey my all repos scroll button or go my github page.🐦‍🔥</p>
            <ul className='max-h-[34rem] overflow-y-hidden xl:!overflow-y-auto'>
              <GithubRepos username={"poriyaASadi"} />
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar
