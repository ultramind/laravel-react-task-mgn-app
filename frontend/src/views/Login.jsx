import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container w-[30%] py-6 flex flex-col gap-5 justify-center items-center '>
            <h1 className='w-fit'>Login Here</h1>
            <div className='w-full p-4 flex justify-center'>
                <form className='w-[80%] flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label
                            className='text-lg font-semibold'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            className='p-1 w-full rounded-lg text-lg outline-none outline-1 outline-gray-600 border-gray-600'
                            name=''
                            id='email'
                            aria-describedby='helpId'
                            placeholder='Enter Email Address'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            className='text-lg font-semibold'
                            htmlFor='Password'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            className='p-1 w-full rounded-lg text-lg outline-none outline-1 outline-gray-600 border-gray-600'
                            name=''
                            id='Password'
                            aria-describedby='helpId'
                            placeholder='Enter Password Address'
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='w-fit'>
                            <h1>Login</h1>
                        </button>
                    </div>
                    <Link
                        to='/register'
                        className='text-lg w-full text-center text-rose-500'
                    >
                        {' '}
                        You dont have an account: Register here
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
