import React from "react";
import SearchIcon from "./SearchIcon";
export default function SearchBar() {
  return (
    <form action="#" className="w-full h-full">
      <div className="w-full h-full flex">
        <section className="sm:flex hidden sm:flex-grow justify-between">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="input-dark-bg w-full h-9 font-sans border border-search-dark placeholder-gray-500 text-gray-100"
            autoComplete="off"
          />
          <div className="h-full bg-search-dark w-20 grid place-items-center rounded-r cursor-pointer">
            <SearchIcon></SearchIcon>
          </div>
        </section>
      </div>
    </form>
  );
}
