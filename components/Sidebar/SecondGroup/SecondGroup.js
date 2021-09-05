import React from 'react';
import {Library, History, YourVideos, WatchLater, LikedVideos, ShowMore } from './index'
export default function SecondGroup() {
    return (
        <div className="flex flex-col justify-evenly items-left second-group hover-children border-t border-gray-500 pt-3 pb-3">
            <Library></Library>
            <History></History>
            <YourVideos></YourVideos>
            <WatchLater></WatchLater>
            <LikedVideos></LikedVideos>
            <ShowMore></ShowMore>
        </div>
    )
}
