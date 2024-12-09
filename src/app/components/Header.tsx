"use client";

import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showTopNav, setShowTopNav] = useState(false);
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <div className="flex items-center justify-end max-h-[144px] h-auto sm:h-[36px] mx-auto bg-[#F5F5F5] px-4 sm:px-8">
        {/* Hamburger for top nav */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-200"
          onClick={() => setShowTopNav(!showTopNav)}
        >
          <Menu className="h-6 w-6 text-primaryDark" />
        </button>

        {/* Logo Section - Hidden on small screens */}
        <div className="hidden sm:flex items-center w-[24px] h-[24px] relative">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
        </div>

        {/* Links (Shown in Hamburger for mobile) */}
        <div
          className={`${
            showTopNav ? "block" : "hidden"
          } absolute top-[50px] left-0 z-10 flex justify-end w-full bg-[#F5F5F5] sm:static sm:flex sm:items-center sm:space-x-4`}
        >
          <Link href="/find-store" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
            Find a Store
          </Link>
          <Link href="/help" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
            Help
          </Link>
          <Link href="/join-us" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
            Join Us
          </Link>
          <Link href="/login" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b relative">
        <div className="mx-auto flex items-center justify-between px-4 sm:px-8 h-auto sm:h-[60px] max-w-[1440px]">
          {/* Logo in Left Corner */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Vector.png"
              alt="Logo"
              width={60}
              height={20}
              className="object-contain"
              priority
            />
          </Link>

          {/* Hamburger for main nav */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 z-20"
            onClick={() => setShowMainNav(!showMainNav)}
          >
            <Menu className="h-6 w-6 text-primaryDark" />
          </button>

          {/* Links */}
          <div
            className={`${
              showMainNav ? "block" : "hidden"
            } absolute top-[50px] right-0 z-10 w-full bg-white md:static md:flex md:items-center md:space-x-6`}
          >
            <Link href="/new" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              New & Featured
            </Link>
            <Link href="#" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              Men
            </Link>
            <Link href="/women" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              Women
            </Link>
            <Link href="/kids" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              Kids
            </Link>
            <Link href="/sale" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              Sale
            </Link>
            <Link href="/snkrs" className="block px-4 py-2 text-primaryDark hover:text-blue-500">
              SNKRS
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <Link href={"/selectedProduct"}> 
            
            </Link>
            
            <Link href="/cart" passHref>
              <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}