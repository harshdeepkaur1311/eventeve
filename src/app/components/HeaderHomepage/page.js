"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Login from "@/app/components/Popup/page";

export default function HeaderHomePage({ showLogo }) {
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);

  const handleProfileClick = () => {
    setLoginPopupVisible(!isLoginPopupVisible);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent z-50 transition-all duration-500 ease-in-out">
        {showLogo && (
          <h1 className="text-3xl font-monalisa italic text-white">EventEve</h1>
        )}
        <div className="flex items-center space-x-5">
          <nav className="flex space-x-6 font-bold">
            <Link href="/" className="text-white hover:text-black">
              HOME
            </Link>
            <Link href="/" className="text-white hover:text-black">
              SERVICES
            </Link>
          </nav>
          <Image
            src="/images/search.png"
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75"
          />
          <Image
            src="/images/cart.png"
            alt="Shopping Cart"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75"
          />
          <Image
            src="/images/profile.png"
            alt="User Profile"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75"
            onClick={handleProfileClick}
          />
        </div>
      </header>

      {/* Conditional rendering of login popup */}
      {isLoginPopupVisible && <Login />}
    </>
  );
}
