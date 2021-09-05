import React, { useState } from 'react';
import Header from './Header';
import Subscription from './Subscription';
// Import images
import { Action, Borgwar, Carnival, Chess, Exhibition, Man, Santorini, Seaplane, Suit, Wanderer } from './index';

export default function ThirdGroup() {
    const imageList = [Action, Borgwar, Carnival, Chess, Exhibition, Man, Santorini, Seaplane, Suit, Wanderer]
    const authorList = ["2Pac", "Nas", "Mobb Deep", "Lluni", "Mc Kresha", "SEMIAUTOMATIK", "Ledri Vula", "Lyrical Son", "J. Cole", "Kendrick Lamar"]
    const [showMore, setShowMore] = useState(false);
    const subscriptions = imageList.slice(0, showMore ? imageList.length : 5).map((image, index) =>
        <Subscription imageSrc={image} key={index}
            author={authorList[index]}>
        </Subscription>
    );
    return (
        <div className="flex flex-col justify-evenly items-left border-t border-gray-500">
            <Header></Header>
            <div className="first-group hover-children py-3">
                {subscriptions}
                {showMore ?
                    <>
                        {/* Display all of the user subscriptions */}
                        <button className="flex gap-8 w-full p-3" onClick={() => { setShowMore(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="icon-text">Show Less</p>
                        </button>
                    </>
                    :
                    <>
                        {/* Display some of users subscribtions */}
                        <button className="flex gap-8 w-full p-3" onClick={() => { setShowMore(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="icon-text">Show More</p>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}
