import React from 'react';
import Home from './Home';
import Explore from './Explore';
import Subscriptions from './Subscriptions';

export default function FirstGroup() {
    return (
        <div className="flex flex-col justify-evenly items-left first-group hover-children mb-3">
            <Home></Home>
            <Explore></Explore>
            <Subscriptions></Subscriptions>
        </div>
    )
}
