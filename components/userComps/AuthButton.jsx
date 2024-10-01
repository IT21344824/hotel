import React from 'react'
import { useFormStatus } from 'react-dom'


const AuthButton = ({ type }) => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            {pending ? "Loading..." : type}
        </button>
    )
}

export default AuthButton;
