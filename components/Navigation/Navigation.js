import React from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import YoutubeLogo from './YoutubeLogo/YoutubeLogo'
import SearchBar from './SearchBar/SearchBar'
import NavIcons from "./NavIcons/NavIcons";

export default function Navigation({ toggleSidebar }) {
  return (
    <>
      <nav className='flex bg-[#202020] w-full py-3 gap-4 sm:text-sm sticky top-0 z-50'>
        <div className="flex justify-self-start w-full self-center">
          <button className="hidden sm:block w-auto" onClick={() => { toggleSidebar() }}>
            <BurgerMenu></BurgerMenu>
          </button>
          <div className="flex justify-center">
            <YoutubeLogo></YoutubeLogo>
          </div>
        </div>
        <div className="w-full self-center sm:flex hidden">
          <SearchBar></SearchBar>
        </div>
        <div className="flex w-full">
          <NavIcons></NavIcons>
        </div>
      </nav>
    </>
  )
}
