import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
function Login() {
    return (
        <section className=''>
            <div className='flex items-center w-full h-[100vh]'>
                <div className='h-full w-[50rem] flex items-center justify-center'>
                    <div className=''>
                        <form action="" className='w-full flex flex-col justify-center items-start'>
                            <h2 className='text-4xl font-medium tracking-tight'>Sign in</h2>
                            <p className='text-slate-400 mt-0.5'>Please login to continue to your account.</p>
                            <label htmlFor="" className='mt-10 mb-3 relative inline-block border-blue-500 rounded-full border-2 '>
                                <div className='absolute -top-7.5 text-sm font-bold -z-10 text-blue-500 left-3 shadow-md rounded-full p-2'>Email</div>
                                <input type="email" className='w-[20rem] outline-0 bg-white z-10 h-full py-2 px-6 rounded-full' required name="" id="" />
                            </label>
                           <label htmlFor="" className='mt-6 mb-3 relative inline-block border-blue-500 rounded-full border-2 '>
                                <div className='absolute -top-7.5 text-sm font-bold -z-10 text-blue-500 left-3 shadow-md rounded-full p-2'>Password</div>
                                <input type="password" className='w-[20rem] outline-0 bg-white z-10 h-full py-2 px-6 rounded-full' required name="" id="" />
                            </label>
                            <button type='submit' className='bg-blue-500 shadow-xl text-white w-full rounded-full py-2 cursor-pointer'>Sign in</button>
                        </form>
                        <span className='inline-block text-center my-3 font-bold w-full'>or</span>
                        <div>
                            <button type='button' className='w-full shadow-xl text-blue-500 p-2 rounded-full flex items-center justify-center gap-1 font-medium'>
                                <GoogleIcon/>
                                Sign in with Google
                            </button>
                        </div>
                        <p className='mt-6 text-center text-sm font-medium text-slate-400'>Need an account? <Link to={'/sign-up'} className='text-blue-500 font-bold'>Create one</Link></p>
                    </div>
                </div>
                <div className='w-full  relative h-full'>
                    <div className='h-full w-full'>
                        <img src="../../public/image/astronaut-sci-fi-3840x2160-10710.jpg" alt="Cover-img"
                        className=' right-0 top-0 h-full w-full object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
