import React from 'react';
import Video from "./Video";
import Grid from "./Grid";
import Bell from "./Bell";
import Microphone from './Microphone';
import UserIcon from './UserIcon';
import SearchIcon from '../SearchBar/SearchIcon';
import Desktop from './Desktop';
export default function NavIcons() {
    return (
        <div className="flex w-full h-full justify-end sm:gap-8">
            <div className="sm:flex-1 sm:justify-self-start sm:self-center sm:block hidden">
                <Microphone></Microphone>
            </div>
            <div className="flex sm:gap-8 gap-5 justify-evenly w-auto self-center ml-5 mr-8">
                <div className="grid place-items-center sm:hidden">
                    <Desktop></Desktop>
                </div>
                <div className="grid place-items-center sm:hidden">
                    <SearchIcon color='text-white'></SearchIcon>
                </div>
                <div className="sm:grid hidden place-items-center">
                    <Video></Video>
                </div>
                <div className="sm:grid hidden place-items-center">
                    <Grid></Grid>
                </div>
                <Bell></Bell>
                <UserIcon></UserIcon>
            </div>
        </div>
    )
}