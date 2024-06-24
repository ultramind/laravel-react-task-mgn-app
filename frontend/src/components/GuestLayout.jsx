import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                <Outlet />
            </div>
        </>
    )
}

export default GuestLayout
