import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon,
  RefreshIcon,
  SaveIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/outline";

import { MdPlaylistAdd } from "react-icons/md";
import { NavLink } from "remix";

export function Sidebar() {
  return (
    <section>
      <BottomNavigation />
      <aside className="hidden sm:flex flex-col w-40 text-gray-500 space-y-4 sm:h-screen justify-center pl-3 lg:text-base xl:text-lg">
        <Menu />
        <Library />
        <NewPlalist />
      </aside>
    </section>
  );
}

export function Menu() {
  return (
    <>
      <div>
        <p className=" mb-2 ml-1.5 font-semibold  text-xs tracking-wider   lg:text-base xl:text-lg md:tracking-normal md:capitalize  ">
          Menu
        </p>
        <div className="flex flex-col items-center space-y-4 px-2">
          <NavLink
            to="/login"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer  sm:py-1 sm:px-2 rounded-md sm:mr-2 sm:bg-gray-100 sm:shadow-md"
          >
            <HomeIcon className="text-indigo-500 sm:h-3 md:h-4" />
            <span className=" ">Home</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex text-sm w-full  items-center space-x-2 cursor-pointer"
          >
            <SearchIcon className="text-indigo-500 sm:h-3 md:h-4" />
            <span className=" ">Browse</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex text-sm  w-full  items-center  space-x-2 cursor-pointer"
          >
            <UserIcon className="text-indigo-500 sm:h-3 md:h-4" />
            <span className=" ">Artits</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
          >
            <CollectionIcon className="text-indigo-500 sm:h-3 md:h-4" />
            <span className=" ">Albums</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
          >
            <GlobeAltIcon className="text-indigo-500 sm:h-3 md:h-4" />
            <span className=" ">Genres</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

function Library() {
  return (
    <>
      <div className="">
        <p className="mb-2 ml-1.5 font-semibold  text-xs tracking-wider   lg:text-base xl:text-lg md:tracking-normal md:capitalize">
          Library
        </p>
        <div className=" flex flex-col items-center  space-y-4 px-2">
          <NavLink
            to="/"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
          >
            <SaveIcon className=" h-3 text-indigo-500 md:h-4" />
            <span className="">Playlists</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
          >
            <RefreshIcon className=" h-3 text-indigo-500 md:h-4" />
            <span className="">Recents</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex text-sm  w-full  items-center  space-x-2 cursor-pointer"
          >
            <UserIcon className=" h-3 text-indigo-500 md:h-4" />
            <span className="">Artits</span>
          </NavLink>
          <NavLink
            to="/"
            className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
          >
            <HeartIcon className=" h-3 text-indigo-500 md:h-4" />
            <span className="">Favourites</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export function NewPlalist() {
  return (
    <div className="flex justify-center text-sm md:text-base">
      <button className="flex px-3 py-0.5 rounded-md shadow-sm bg-indigo-200 items-center justify-center mr-4 my-8 ">
        <MdPlaylistAdd size={20} className=" text-indigo-500 " />
        <span className="">New Playlist</span>
      </button>
    </div>
  );
}

export function BottomNavigation() {
  return (
    <nav>
      <div className="sm:hidden flex h-screen items-end px-4 py-2 justify-between ">
        <NavLink to="/" className="">
          <HomeIcon className=" h-8 text-indigo-500" />
        </NavLink>
        <NavLink to="/" className="cursor-pointer">
          <SearchIcon className=" h-8 text-indigo-500" />
        </NavLink>
        <NavLink to="/" className="cursor-pointer">
          <UserIcon className=" h-8 text-indigo-500" />
        </NavLink>
        <NavLink to="/" className="cursor-pointer">
          <HeartIcon className=" h-8 text-indigo-500" />
        </NavLink>
      </div>
    </nav>
  );
}
