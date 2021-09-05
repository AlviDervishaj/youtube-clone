import React from 'react'

export default function Playlist({playlistName}) {
    return (
        <div className="flex gap-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                data-icon="indent"
                data-prefix="fas"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M27.31 363.3l96-96a16 16 0 000-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z"
                ></path>
            </svg>
            <p className="icon-text">{playlistName}</p>
        </div>
    )
}