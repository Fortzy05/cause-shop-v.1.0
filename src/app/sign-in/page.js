import React from "react";
import Image from "next/image";
import logo from "../../assets/menu-nav-logo-1.png";
import facebookIcon from "../../assets/jam_facebook.svg";

import twitterIcon from "../../assets/prime_twitter.svg";
import googleIcon from "../../assets/prime_google.svg";
import Link from "next/link";
export default function page() {
  return (
    <section className="relative mx-auto h-screen w-full ">
      <div className="flex flex-row-reverse">
        <div className="flex w-[510px] h-screen items-center bg-[#14BDE3]">
          <div className="absolute z-10 top-0 gap-2 pl-[33px] items-center flex pt-5">
            <Image
              className=""
              src={logo}
              objectFit="cover"
              height={64}
              width={60}
              alt=""
            />
            <h1 className="text-white font-Abhaya">KGF CAUSE SHOP</h1>
          </div>
          <div className="mx-auto flex items-center gap-2">
            {/* <div className="bg-black/5 absolute inset-0 w-[510px] h-screen" /> */}
            <div className="flex items-center">
              <div className="items-center  flex mx-auto flex-col">
                <h1 className="text-[#ffffff] font-Abhaya font-bold text-[43px] leading-[41px]">
                  Hello, Friend!
                </h1>
                <h4 className="my-5 w-[300px] text-[22px] leading-[30px] text-[#ffffff] text-center font-Inter">
                  Enter your personal details and start your journey with us
                </h4>
                <Link href="/sign-up">
                  <button className="rounded-[50px] font-Inter px-14 py-3 uppercase mt-2 text-[#FFFFFF]  border-[#FFFFFF]/70 border-2">
                    sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <Image src="/Frame 426 (1).svg" height={743} width={510} alt="" /> */}
        </div>
        <div className="w-[510px] h-[743px] flex flex-col items-center gap-3 mx-auto pt-[105px]">
          <h1 className="text-[#14BDE3] font-Abhaya  text-center text-[43px] leading-[41px] font-bold">
            Sign in to KGF Cause Shop
          </h1>
          <h4 className="text-center text-[#878181] font-Inter text-[16px] leading-10 font-normal">
            sign in with
          </h4>
          <div className="flex gap-4 mx-auto">
            <div className="border-2 border-[#E3B5221A]  items-center flex rounded-full w-[50px] h-[50px]">
              <Image
                className="mx-auto"
                src={facebookIcon}
                height={24}
                width={24}
                alt=""
              />
            </div>
            <div className="border-2 border-[#E3B5221A]  items-center flex rounded-full w-[50px] h-[50px]">
              <Image
                className="mx-auto"
                src={googleIcon}
                height={24}
                width={24}
                alt=""
              />
            </div>
            <div className="border-2 border-[#E3B5221A] rounded-full h-[50px] flex w-[50px]">
              <Image
                className=" mx-auto"
                src={twitterIcon}
                height={24}
                width={24}
                alt=""
              />
            </div>
          </div>
          <h4 className="text-center text-[#878181] font-Inter leading-10 font-normal text-[1rem]">
            or use your email account
          </h4>
          <form action="">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=" transparent"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="size-6 absolute left-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  className="bg-[#00A8591A] placeholder:pl-6 w-[500px] border py-2.5 px-[25px]"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="flex items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="size-6 absolute left-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <input
                  className="bg-[#00A8591A] placeholder:pl-6 w-[500px] border py-2.5 px-[25px]"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button className="bg-[#14BDE3] mt-3 uppercase mx-auto leading-5 text-[#FFFFFF] text-[14px] px-14 py-3 rounded-[50px]">
                Sign in
              </button>
              <h4 className="mx-auto font-Inter flex font-normal my-2 text-[#878181]">
                Forgot Password?
              </h4>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
