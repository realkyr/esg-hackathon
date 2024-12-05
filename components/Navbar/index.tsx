import React from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
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
        <Image
          width={134}
          height={50}
          src="/assets/images/register-btn.png"
          alt="Register Button"
          className="h-[50px] w-auto"
        />
      </nav>
    </div>
  );
};

export default Navbar;