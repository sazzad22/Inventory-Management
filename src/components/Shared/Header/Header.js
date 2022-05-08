import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebse.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Blogs", href: "blogs", current: false },
    { name: "Projects", href: "login", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-sky-500 to-blue-500 sticky w-full"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />

                  <Link
                    to={"/"}
                    className="px-2 py-1 flex items-center text-lg uppercase font-medium leading-snug  hidden lg:block  text-white hover:opacity-75"
                  >
                    Warehouse Manager
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  <Link
                      to={"/blogs"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75"
                    >
                      Blogs
                    </Link>
                    {user && <Link
                      to={"/manageinventory"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75"
                    >
                      Manage Item
                    </Link>}
                    {user && <Link
                      to={"/additem"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75"
                    >
                      Add Item
                    </Link>}
                    {user && <Link
                      to={"/myitem"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75"
                    >
                      My Item
                    </Link>}
                    
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user?(<button
                  onClick={handleSignOut}
                  className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75 border "
                >
                  Sign Out
                </button>):(<Link
                  to={"/login"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug text-white hover:opacity-75 border"
                >
                  Login
                </Link>)}

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.ibb.co/ykhGD61/conveyor.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
  
};

export default Header;
