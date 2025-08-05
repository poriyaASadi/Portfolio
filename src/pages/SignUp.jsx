import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        setUserInfoCookie(data);
        navigate('/main-page');
    }

    const setUserInfoCookie = (userData) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + oneDay);
        document.cookie = `userEmail=${encodeURIComponent(userData.email)};expires=${expireDate.toUTCString()};path=/`;
        document.cookie = `username=${encodeURIComponent(userData.username)};expires=${expireDate.toUTCString()};path=/`;
    }

    return (
        <section>
            <div className='flex items-center w-full h-[100vh]'>
                <div className='h-full w-[50rem] flex items-center justify-center'>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-center items-start'>
                            <h2 className='text-4xl font-medium tracking-tight'>Sign Up</h2>
                            <p className='text-slate-400 mt-0.5'>Sign up to enjoy the feature of Revolutie</p>

                            {/* Username Field */}
                            <label htmlFor="username" className='mt-10 mb-3 relative inline-block border-blue-500 rounded-full border-2 '>
                                <div className='absolute -top-7.5 text-sm font-bold -z-10 text-blue-500 left-3 shadow-md rounded-full p-2'>UserName</div>
                                <input
                                    type="text"
                                    id="username"
                                    className='w-[20rem] outline-0 bg-white z-10 h-full py-2 px-6 rounded-full'
                                    {...register("username", {
                                        required: 'user name is required',
                                        minLength: {
                                            value: 4,
                                            message: 'username must be at least 4 characters'
                                        }
                                    })}
                                />
                            </label>
                            {errors.username && (
                                <span className='text-red-500 mb-2 text-sm font-medium'>
                                    {errors.username.message}
                                </span>
                            )}

                            {/* Email Field */}
                            <label htmlFor="email" className='mt-6 mb-3 relative inline-block border-blue-500 rounded-full border-2 '>
                                <div className='absolute -top-7.5 text-sm font-bold -z-10 text-blue-500 left-3 shadow-md rounded-full p-2'>Email</div>
                                <input
                                    type="email"
                                    id="email"
                                    className='w-[20rem] outline-0 bg-white z-10 h-full py-2 px-6 rounded-full'
                                    {...register("email", {
                                        required: 'email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'email not valid'
                                        }
                                    })}
                                />
                            </label>
                            {errors.email && (
                                <span className='text-red-500 mb-2 text-sm font-medium'>
                                    {errors.email.message}
                                </span>
                            )}

                            {/* Password Field */}
                            <label htmlFor="password" className='mt-6 mb-3 relative inline-block border-blue-500 rounded-full border-2 '>
                                <div className='absolute -top-7.5 text-sm font-bold -z-10 text-blue-500 left-3 shadow-md rounded-full p-2'>Password</div>
                                <input
                                    type="password"
                                    id="password"
                                    className='w-[20rem] outline-0 bg-white z-10 h-full py-2 px-6 rounded-full'
                                    {...register("password", {
                                        required: 'password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'password length must be at least 6 characters'
                                        }
                                    })}
                                />
                            </label>
                            {errors.password && (
                                <span className='text-red-500 mb-2 text-sm font-medium'>
                                    {errors.password.message}
                                </span>
                            )}

                            <button type='submit' className='bg-blue-500 shadow-xl text-white w-full rounded-full py-2 cursor-pointer'>Sign up</button>
                        </form>

                        <span className='inline-block text-center my-3 font-bold w-full'>or</span>
                        <div>
                            <button type='button' className='w-full shadow-xl text-blue-500 p-2 rounded-full flex items-center justify-center gap-1 font-medium'>
                                <GoogleIcon />
                                Sign Up with Google
                            </button>
                        </div>
                        <p className='mt-6 text-center text-sm font-medium text-slate-400'>Already have an account? <Link to={'/login'} className='text-blue-500 font-bold'>Login</Link></p>
                    </div>
                </div>
                <div className='w-full relative h-full'>
                    <div className='h-full w-full'>
                        <img src="/image/astronaut-sci-fi-3840x2160-10710.jpg" alt="Cover-img"
                            className='right-0 top-0 h-full w-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp