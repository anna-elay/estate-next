"use client";
import Link from "next/link";
import Image from "next/image";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  isBannerVisible: boolean;
}
const Header = ({ isBannerVisible }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
  ];
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  const getLink = (href: string) => {
    const isActive = isActiveLink(href);
    if (isActive) {
      return "btn-dark p-[14px_20px] ";
    }
    return "p-[14px_20px] rounded-[10px] hover:bg-gray-15/50 transition-colors m-1";
  };
  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isBannerVisible ? "top-15 " : "top-0"}`}
    >
      {isOpen && (
        <div className=" liquid-glass" onClick={() => setIsOpen(false)} />
      )}
      <div className="header-content">
        <div className="container mx-auto flex justify-between p-5.5 ">
          <Link href={"/"} className="logo flex  items-center ">
            <Image
              src="/image/Symbol.svg"
              alt="logo"
              className="max-w-7 sm:max-w-8 lg:max-w-12"
              width={28}
              height={28}
            />
            <span className="font-bold text-sm sm:text-lg lg:text-2xl ">
              Estatein
            </span>
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={getLink(item.href)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "bg-purple-60  transition-colors p-[13px_20px] rounded-[10px]" : "hover:bg-gray-15/50 transition-colors p-[13px_20px] rounded-[10px]"}`}
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center focus:outline-none z-50 ml-4 lg:hidden"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6" />
            )}
          </button>
          {/* мобильная версия  */}
          <div
            className={`
          absolute top-full left-0 w-full h-67 bg-gray-15 shadow-lg
          transform transition-all duration-300 ease-in-out z-50 rounded-lg 
          ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
          >
            <ul className="pt-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-stretch px-4 py-3  hover:bg-gray-20/50 transition-colors  ${
                      isActiveLink(item.href)
                        ? "bg-gray-08 border-y border-gray-20"
                        : "hover:bg-gray-30/50 cursor-pointer"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setIsOpen(!isOpen)}
              className={` ${
                pathname === "/contact"
                  ? "bg-purple-60 py-3.5 flex items-stretch p-4 "
                  : "focus:bg-purple-60/50 transition-colors py-3.5 w-full p-4 cursor-pointer mt-4"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
