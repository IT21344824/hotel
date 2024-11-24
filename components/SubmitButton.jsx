import React from 'react'


const SubmitButton = ({ loading, type }) => {

    return (
        <button disabled={loading} type={type} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            {loading ? "Loading..." : type}
        </button>
    )
}

export default SubmitButton;
