import React from 'react'
import Image from 'next/image';
export default function Subscription({imageSrc, author}) {
    return (
        <div className="flex gap-5">
            <Image src={imageSrc} alt="Author Image" className="h-7 w-7 rounded-full" width={30} height={30}/>
            <p className="text-default text-white">{author}</p>
        </div>
    )
}
