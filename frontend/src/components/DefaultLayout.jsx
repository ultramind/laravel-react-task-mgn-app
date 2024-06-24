import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <di>Default layout</di>
            <Outlet />
        </>
    )
}

export default DefaultLayout
