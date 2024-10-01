"use client"
import React from 'react'
import AuthButton from './AuthButton'
import { loginWithCreds } from '@/actions/UserAuth'

const LoginForm = () => {
    const handleLogIn = async (formData) => {
        await loginWithCreds(formData);
    };

    return (
        <div>
            <form action={handleLogIn} className='w-full flex flex-col gap-4'>

                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email" placeholder='Email' id='Email' name='email' />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                    </div>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="password" placeholder='Password' id='Password' name='password' />
                </div>


                <div className="mt-8">
                    <AuthButton type={"log in"} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm;