'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="/#details" className="hover:text-blue-500 block">
          รายละเอียดโครงการ
        </Link>
      </li>
      <li>
        <Link href="/#calendar" className="hover:text-blue-500 block">
          ปฏิทินกิจกรรม
        </Link>
      </li>
      <li>
        <Link href="/#rules" className="hover:text-blue-500 block">
          กฎและกติกา
        </Link>
      </li>
    </>
  )

  return (
    <div className="sticky top-0 z-10 bg-white">
      <nav className="flex items-center justify-between bg-[#F7FCFF] py-4 px-[8.33%]">
        {/* Logo */}
        <Image
          width={66}
          height={88}
          src="/assets/images/logo.png"
          alt="SME Development Bank Logo"
          className="h-[88px] w-auto"
        />

        {/* Navigation Links */}
        <ul
          className="hidden md:flex space-x-0 md:space-x-8 text-sm font-medium text-gray-700"
        >
          {links}
        </ul>

        {/* Signup Button */}
        <Image
          width={134}
          height={50}
          src="/assets/images/register-btn.png"
          alt="Register Button"
          className="hidden md:block h-[50px] w-auto"
        />

        {/* Menu Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F7FCFF] w-[100vw] shadow-md py-4 px-[8.33%] absolute">
          <ul className="space-y-4 text-right text-sm font-medium text-gray-700">
            {links}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;