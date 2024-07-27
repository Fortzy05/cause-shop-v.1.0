import React from "react";
import Image from "next/image";
import logo from "../../assets/menu-nav-logo-1.png";
import facebookIcon from "../../assets/jam_facebook.svg";

import twitterIcon from "../../assets/prime_twitter.svg";
import googleIcon from "../../assets/prime_google.svg";
export default function page() {
  return (
    <section className="relative mx-auto shadow-lg h-screen w-[1400px] ">
      <div className="flex flex-row-reverse">
        <div className="flex w-[510px] h-screen items-center">
          <div className=" absolute top-0 flex items-center gap-2">
            <div className="bg-black/5 absolute inset-0 w-[510px] h-screen" />
            <div className="absolute flex bg-black/50 rounded-[50px]  left-[55px] top-[197px]  h-[350px] w-[400px] items-center">
              <div className="items-center flex mx-auto flex-col text-[#FFFFFF]/90 font-light">
                <h1 className="text-[#00A859] font-bold text-5xl">
                  Hello, Friend
                </h1>
                <h4 className="my-2 w-[340px] text-center">
                  Enter your personal details and start your journey with us{" "}
                </h4>

                <button className="rounded-[50px] px-5 py-1.5 mt-2 text-[#FFFFFF]/80  border-[#FFFFFF]/70 border-2">
                  sign in
                </button>
              </div>
            </div>
            <Image
              className="z-10"
              src={logo}
              objectFit="cover"
              height={64}
              width={60}
            />
            <h1 className="text-white z-10">KGF CAUSE SHOP</h1>
          </div>
          <Image src="/Frame 426 (1).svg" height={743} width={510} />
        </div>
        <div className="w-[510px] h-[743px] flex flex-col items-center gap-3 mx-auto pt-[105px]">
          <h1 className="text-[#00A859] w-[700px] text-center text-[48px] leading-[64px] font-bold">
            Sign in to KGF Cause Shop
          </h1>
          <h4 className="text-center text-[16px] leading-10 font-normal">
            sign in with
          </h4>
          <div className="flex gap-4 mx-auto">
            <div className="border-2  items-center flex rounded-full w-[50px] h-[50px]">
              <Image
                className="mx-auto"
                src={facebookIcon}
                height={24}
                width={24}
              />
            </div>
            <div className="border-2  items-center flex rounded-full w-[50px] h-[50px]">
              <Image
                className="mx-auto"
                src={googleIcon}
                height={24}
                width={24}
              />
            </div>
            <div className="border-2 rounded-full h-[50px] flex w-[50px]">
              <Image
                className=" mx-auto"
                src={twitterIcon}
                height={24}
                width={24}
              />
            </div>
          </div>
          <h4 className="text-center leading-10 font-normal text-[1rem]">
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
                  className="bg-[#f0f0f0] placeholder:pl-6 w-[500px] border py-2.5 px-[25px]"
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
                  className="bg-[#f0f0f0] placeholder:pl-6 w-[500px] border py-2.5 px-[25px]"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button className="bg-[#E3B522] mt-2 mx-auto leading-5 text-[#FFFFFF] text-[14px] px-5 py-2.5 rounded-[50px]">
                sign up
              </button>
              <h4 className="mx-auto flex font-normal my-2 text-[#878181]">
                Forgot Password?
              </h4>
            </div>
          </form>
        </div>
        <div className="bg-[#14BDE3] text-center inclined absolute bottom-0 left-0 text-white h-[39px] w-[191px]">
          <h1 className="mt-2">Sell on KGF</h1>
        </div>
      </div>
    </section>
  );
}
