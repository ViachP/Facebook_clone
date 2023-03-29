import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCardIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Header</h1>

      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt="icon of facebook"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
        {/* Center */}
        {/* Right */}
      </div>
    </div>
  );
}

export default Header;
