import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  UserIcon,
  RefreshIcon,
  SaveIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

import { HeartIcon } from "@heroicons/react/solid";
import { MdPlaylistAdd } from "react-icons/md";
import { NavLink } from "remix";

export function Sidebar() {
  return (
    <aside className="w-36 flex flex-col justify-center text-slate-500 px-5  pt-10 h-screen fixed overflow-clip">
      <Menu />
      <Library />
      <p className="mb-2 ml-1.5 mt-10 font-semibold uppercase text-xs tracking-wider">
        Playlists
      </p>

      <div className="flex flex-col text-sm  px-2 space-y-1 h-32 overflow-y-scroll scrollbar-hide">
        <div className="flex  space-x-1 items-center overflow-clip">
          <div className="rounded-full border-2 border-indigo-500 flex p-1.5  bg-indigo-300  "></div>
          <p className="">Playlist One</p>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="rounded-full border-2 border-indigo-500 flex p-1.5  bg-indigo-300  "></div>
          <p className="">Playlist Two</p>
        </div>
        <div className="flex  space-x-1 items-center">
          <div className="rounded-full border-2 border-indigo-500 flex p-1.5  bg-indigo-300  "></div>
          <p className="">Playlist Three</p>
        </div>
        <div className="flex  space-x-1 items-center">
          <div className="rounded-full border-2 border-indigo-500 flex p-1.5  bg-indigo-300  "></div>
          <p className="">Playlist Four</p>
        </div>
        <div className="flex  space-x-1 items-center">
          <div className="rounded-full border-2 border-indigo-500 flex p-1.5  bg-indigo-300  "></div>
          <p className="">Playlist Four</p>
        </div>
      </div>
      <button className="flex mt-10 justify-center align-center text-xs bg-indigo-200 rounded-md py-1 ">
        <MdPlaylistAdd size={20} className=" text-indigo-500 " />
        <p>New Playlist</p>
      </button>
    </aside>
  );
}

export function Menu() {
  return (
    <>
      <p className="mb-2 ml-1.5 font-semibold uppercase text-xs tracking-wider  ">
        Menu
      </p>
      <div className="flex flex-col items-center space-y-4 px-2">
        <NavLink
          to="/login"
          className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer  sm:py-1 sm:px-2 rounded-md sm:mr-2 sm:bg-gray-100 sm:shadow-md"
        >
          <HomeIcon className="h-6 text-indigo-500 sm:h-3" />
          <span className="text-indigo-50  w-4  sm:text-gray-500">Home</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex text-sm w-full  items-center space-x-2 cursor-pointer"
        >
          <SearchIcon className="h-6 text-indigo-500 sm:h-3" />
          <span className="text-indigo-50  w-4  sm:text-gray-500">Browse</span>
        </NavLink>

        <NavLink
          to="/"
          className="flex text-sm  w-full  items-center  space-x-2 cursor-pointer"
        >
          <UserIcon className="h-6 text-indigo-500 sm:h-3" />
          <span className="text-indigo-50  w-4  sm:text-gray-500">Artits</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
        >
          <CollectionIcon className="h-6 text-indigo-500 sm:h-3" />
          <span className="text-indigo-50  w-4  sm:text-gray-500">Albums</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer"
        >
          <GlobeAltIcon className="h-6 text-indigo-500 sm:h-3" />
          <span className="text-indigo-50  w-4  sm:text-gray-500">Genres</span>
        </NavLink>
      </div>
    </>
  );
}

function Library() {
  return (
    <>
      <p className="mb-2 ml-1.5 mt-10 font-semibold uppercase text-xs tracking-wider">
        Library
      </p>
      <div className=" flex flex-col items-center  space-y-4 px-2  b-red-400">
        <div className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer">
          <SaveIcon className="h-3 text-indigo-500" />
          <p>Playlists</p>
        </div>
        <div className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer">
          <RefreshIcon className="h-3 text-indigo-500" />
          <p>Recents</p>
        </div>
        <div className="flex text-sm  w-full  items-center  space-x-2 cursor-pointer">
          <UserIcon className="h-3 text-indigo-500" />
          <p>Artits</p>
        </div>
        <div className="flex  text-sm  w-full  items-center space-x-2 cursor-pointer">
          <HeartIcon className="h-3 text-indigo-500" />
          <p>Favourites</p>
        </div>
      </div>
    </>
  );
}
