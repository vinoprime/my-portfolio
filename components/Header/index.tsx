"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeSwitch } from "@/app/(landing)/ThemeSwitch";
import Link from "next/link";
import { menuData } from "./menuData";

export const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      // className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
      //   ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
      //   : ""
      //   }`}
      className={stickyMenu ? "fixed w-[100%] bg-[red]" : "bg-[transparent]"}
    >
      {/* <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0"> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="https://vinoth-thulukanam.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={32}
              height={32}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              width={32}
              height={32}
              className="w-full dark:hidden"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vinoth Thulukanam</span>
          </a>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

        </div>


        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuData.map((menuItem, key) => (
              <li key={key}>
                <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <Link
                    href={`${menuItem.path}`}
                    className={
                      pathUrl === menuItem.path
                        ? "text-primary hover:text-primary"
                        : "hover:text-primary"
                    }
                  >
                    {menuItem.title}
                  </Link>
                </div>
              </li>
            ))}
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>



      </div>
    </header>
  );
};

// w-full delay-300

