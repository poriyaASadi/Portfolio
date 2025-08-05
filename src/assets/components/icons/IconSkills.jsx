import React, { useState } from 'react'

function IconSkills() {
    const [listWork,setWork] = useState([
        'js',
        'ts',
        'vue',
        'nuxt',
        'vuetify',
        'pinia',
        'next',
        'react',
        'regex',
        'firebase',
        'html',
        'css',
        'tailwindcss',
        'github',
        'sass',
        'npm',
        'pnpm',
        'yarn',
        'git',
        'codepen',
        'vite',
        'supabase',
        'mysql',
        'svelte',
        'php',
        'python',
        'vscode',
        'visualstudio',
        'postman',
        'figma',
        'xd',
        'nodejs',
        'c'

    ])
    return (
        <div className='w-full md:p-2 pb-0 rounded-md'>
            {/* <h2 className='font-medium text-3xl tracking-tight dark:text-blue-500'>All skills</h2> */}
            <ul className=' grid grid-cols-4 mini:grid-cols-5 sm:grid-cols-7 md:grid-cols-9 xl:flex items-center flex-wrap  gap-2 w-full *:hover:shadow-blue-100 *:dark:hover:shadow-blue-950'>
                {
                listWork.map((item,index) => (
                    <li key={index} className='w-[4.5rem] sm:w-20 py-2 cursor-pointer flex flex-col justify-center items-center dark:bg-slate-900 rounded-md bg-slate-100 shadow-lg'>
                        <img src={`/image/Svg-skills/${item}.svg`} alt="skill-icon" className='min-h-10 min-w-10' />
                        <p className='text-xs text-center mt-0.5 dark:text-white'>{item}</p>
                    </li>
                ))   
                }
            </ul>
        </div>
    )
}

export default IconSkills
