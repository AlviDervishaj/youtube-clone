import React, { useState } from 'react'
import Playlist from './Playlist';
export default function ShowMore() {
    const [isOpen, setIsOpen] = useState(false);
    const playlistNames = ['Interesting', 'Music', 'Shqip', 'Intro to Economics']
    const playlist = {
        createdByUser: ['Interesting', 'Music', 'Shqip'],
        defaultPlaylist: ['Get Back to'],
        learning: ['Intro to Economics']
    }
    return (
        <>
            {isOpen ?
                <div className="flex flex-col first-group hover-children">
                    {playlistNames.map((listName, index) =>
                        <Playlist playlistName={listName} key={index}></Playlist>
                    )}
                    <button className="flex gap-8 h-full p-3" onClick={() => { setIsOpen(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <p className="icon-text">Show Less</p>
                    </button>
                </div>
                :
                <div className="flex gap-8 w-full first-group hover-children">
                    <button className="flex gap-8 w-full h-full p-3" onClick={() => { setIsOpen(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <p className="icon-text">Show More</p>
                    </button>
                </div>
            }
        </>
    )
}
