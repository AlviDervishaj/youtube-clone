import React from 'react'

export default function YoutubeLogo() { 
    return (
        <div className="flex w-100 h-full content-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer sm:ml-10 ml-4 self-start justify-self-start" enableBackground="new 0 0 461.001 461.001"
                version="1.1"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
            >
                <path fill="#F61C0D" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z">
                </path>
            </svg>
            <p className="ml-1 text-white font-bold text-base text antialiased sm:subpixel-antialiased md:antialiased">
                Youtube
            </p>
        </div>
    )
}
