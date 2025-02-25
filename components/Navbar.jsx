"use client";

import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

import { filterModalAtom, filtersAtom } from "@/utils/atoms";
import { useSetAtom, useAtomValue } from "jotai";

const Navbar = () => {
  const setFilterModal = useSetAtom(filterModalAtom);
  const setFilters = useSetAtom(filtersAtom);
  const filterModal = useAtomValue(filterModalAtom);
  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center ">
            <DisclosureButton
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              onClick={() => setFilterModal(!filterModal)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
            <div className="flex items-center" role="button" onClick={()=>setFilters({
    location: "",
    theme: [],
    activity: [],
    price: "",
    time: "",
    size: "",
    vehicle: [],
    features: [],
    filter:false,
    type:'TOURS'
  })}>
              <p className="text-white text-sm hidden sm:block">Travellers Local Market</p>
              <img
                alt="Your Company"
                src="/cone.png"
                className="h-8 w-auto mx-3"
              />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex shrink-0 "></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-white  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <GlobeAltIcon aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              className="relative rounded-full text-red-500 p-1  focus:ring-white focus:outline-hidden"
            >
              <HeartIcon aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              className="relative rounded-full text-white p-1  focus:ring-white focus:outline-hidden"
            >
              <ShoppingCartIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
