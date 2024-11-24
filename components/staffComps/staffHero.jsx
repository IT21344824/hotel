"use client"
import React from 'react'
import { useAuth } from '@/hooks/session';
import { Button } from '../ui/button';
import Link from 'next/link';


const StaffHero = () => {
    const { session, isLoading, isAuthenticated } = useAuth(); // Use custom hook

    return (
        <div><div>
            {isAuthenticated ? (
                <div className="flex gap-x-2"><div className='flex items-center gap-x-2 text-sm bg-neutral-500 rounded-sm w-full mx-10 my-5 justify-between px-5 py-4'>
                    <div className='uppercase text-lg font-bold'>staff management</div>
                    <Button><Link href="/staff-member">view</Link> </Button>
                </div>

                </div>
            ) : ("")}
        </div></div>
    )
}

export default StaffHero