import React from 'react'

export default function Bell() {
    return (
        <div className="relative self-center">
            <div className="w-4 h-4 bg-red-600 rounded-full absolute top-0 right-0 grid place-items-center">
                <p className="font-sans text-xs text-center text-white align-top">
                9+
                </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white self-center cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
        </div>
    )
}
