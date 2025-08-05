import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
function Channel() {
    return (
        <div className='flex items-center flex-wrap dark:text-white dark:bg-blue-950 bg-blue-100 my-3 rounded-md p-3 max-w-[30rem] gap-3'>
            <div>
                <p><span className='text-md font-medium'>Join my Channel Telegram :</span> By subscribing to my channel, you can see and use the content I post in the front-end and other areas.</p>
                <div>
                    <a className='bg-blue-500 mt-3 text-white px-5 cursor-pointer flex items-center justify-center rounded-md  py-2' 
                    target='_blank'
                    href="https://t.me/frontproject">
                        Join
                        <BubbleChartIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Channel
