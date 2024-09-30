import SignupForm from '@/components/userComps/SignupForm'
import GoogleAuthButton from '@/components/userComps/GoogleAuthButton'
import React from 'react'
import { signupHeroConfig } from '@/config/compHeroConfig'
import Image from 'next/image'

const SignUp = () => {
    return (
        // <div className='w-full flex mt-20 justify-center'>
        //     <section className='flex flex-col w-[400px]'>
        //         <h1 className='text-3xl w-full text-center font-bold mb-6'>  Sign up</h1>
        //         <SignupForm />
        //         <LoginGoogale type="Sign up" />
        //     </section>
        // </div>
        <div className="py-16 mt-20">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full border-gray-200 border-2 ">

                <div className="w-full p-8 lg:w-1/2">
                    <div className='mx-20'>
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">or signup with email</a>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>

                        {/* Sign up form */}
                        <SignupForm />

                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                        <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 border-gray-200 border-2">

                            <GoogleAuthButton type="sign up" />
                        </div>
                    </div>

                </div>
                <div className="hidden lg:block lg:w-1/2 bg-cover" >
                    <div className="w-full h-full relative">
                        <Image
                            src={signupHeroConfig.src}
                            alt={signupHeroConfig.name}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;