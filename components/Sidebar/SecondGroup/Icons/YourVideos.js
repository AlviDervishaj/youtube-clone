import React from 'react'

export default function YourVideos() {
    return (
        <div className="flex gap-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                data-icon="play-circle"
                data-prefix="fas"
                viewBox="0 0 512 512"
            >
            <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
            ></path>
            </svg>
            <p className="icon-text">Your Videos</p>
        </div>
    )
}
