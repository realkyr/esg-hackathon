import React from "react";
import Link from "next/link";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <nav className="flex items-center justify-between bg-white py-4 px-[8.33%]">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="SME Development Bank Logo"
          className="h-10 w-auto"
        />

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/#details" className="hover:text-blue-500">
              รายละเอียดโครงการ
            </Link>
          </li>
          <li>
            <Link href="/#calendar" className="hover:text-blue-500">
              ปฏิทินกิจกรรม
            </Link>
          </li>
          <li>
            <Link href="/#rules" className="hover:text-blue-500">
              กฎและกติกา
            </Link>
          </li>
        </ul>

        {/* Signup Button */}
        <button className="rounded-md bg-gradient-to-r from-blue-500 to-green-500 px-6 py-2 text-sm font-semibold text-white hover:opacity-90">
          สมัครเข้าร่วม
        </button>
      </nav>
    </div>
  );
};

export default Navbar;