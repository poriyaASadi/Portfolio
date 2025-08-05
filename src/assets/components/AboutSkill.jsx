import React, { useContext } from 'react'
import { MyContext } from '../context/DataInfo';
function AboutSkill() {
    const { myData, setMyData } = useContext(MyContext);
    return (
        <ul className='w-full mt-3 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {
                myData && (
                    myData[0].slice(0,4).map((data, key) => (
                        <li className=' py-4 px-2 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md' key={key}>
                            <span className='font-medium text-lg text-blue-500 mr-1.5'>{data.label} :</span>
                            <p className='dark:text-white text-left'>{data.about}</p>
                        </li>
                    ))
                )
            }
        </ul>
    )
}

export default AboutSkill
