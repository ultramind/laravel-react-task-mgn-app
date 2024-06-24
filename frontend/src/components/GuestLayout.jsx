import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
    return (
        <>
            <di>Guest layout</di>
            <Outlet />
        </>
    )
}

export default GuestLayout
