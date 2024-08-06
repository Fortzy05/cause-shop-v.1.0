"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../assets/menu-nav-logo-1.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const excludedRoutes = ["/login", "/sign-in"];
  const showHeader = !excludedRoutes.includes(pathname);
  const [activeIndex, setActiveIndex] = useState(0);

const handleItemClick = (index) => {
  setActiveIndex(index);
};
  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/shop-now":
        setActiveIndex(1);
        break;
      case "/volunteer":
        setActiveIndex(2);
        break;
      case "/contact-us":
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(-1);
    }
  }, [pathname]);

  if (!showHeader) {
    return null;
  }

  return (
    <section className="w-full h-[139px] py-2">
      <div className="flex items-center justify-between mr-3 md:mr-24 h-[52px]">
        <Link href="/waitlist">
          <div className="bg-white flex items-center gap-2 ml-2 md:ml-24">
            <Image src={logo} width={50} height={52.94} alt="" />
            <h1 className="md:block hidden"> KGF CAUSE SHOP</h1>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <div className=" md:p-2.5">
            <Link href="/login">
              <button className="bg-[#424242] w-20 h-[30px] text-white rounded-[10px]">
                Login
              </button>
            </Link>
          </div>
          <div className="md:p-2.5">
            <Link href="/sign-in">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#E7F8FC] h-[86px] flex items-center md:justify-between ">
        <ul className="md:flex hidden cursor-pointer text-[#878181] text-2xl font-[400] gap-10 mx-auto items-center">
          <li
            className={` ${
              activeIndex === 0
                ? "border-b-4 text-[#000000] border-b-[#E3B522]"
                : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={` ${
              activeIndex === 1
                ? "border-b-4 text-[#000000] border-b-[#E3B522]"
                : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <Link href="/shop-now">Shop</Link>
          </li>

          <li
            className={` ${
              activeIndex === 2
                ? "border-b-4 text-[#000000] border-b-[#E3B522]"
                : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Volunteer
          </li>
          <li
            className={` ${
              activeIndex === 3
                ? "border-b-4 text-[#000000] border-b-[#E3B522]"
                : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <button className="bg-[#E3B522] text-sm px-5 py-2.5 text-white rounded-[50px]">
            Donate Money
          </button>
        </ul>
        <div className="flex items-center gap-10 mx-auto md:justify-end md:mr-[150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <div className="items-center flex relative">
            <span className="absolute mb-6 mx-[10px] rounded-full border-[#FF0000] border bg-[#FF0000] text-white py-[1px] px-[6px] text-[11px]">
              0
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
