"use client"
import { logout } from '@/actions/UserAuth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Logout = () => {
    return (
        <div onClick={() => logout()} className='bg-black px-2 flex justify-center items-center gap-10 rounded-md cursor-pointer'>
            <p className='text-white'>Log out</p>
        </div>
    )
}

export default Logout