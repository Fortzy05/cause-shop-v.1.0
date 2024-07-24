import React from 'react'
import Image from 'next/image'
import logo from "../../assets/menu-nav-logo-1.png"
import facebookIcon from "../../assets/baselinefacebook.svg";

import twitterIcon from "../../assets/twitter.svg";
export default function page() {
  return (
    <section className="relative  w-full h-screen ">
      <div className="flex shadow-lg h-[743px] w-full">
        <div className="flex w-[510px] h-[743px] items-center">
          <div className=" absolute top-0 flex items-center gap-2">
            <div className="bg-black/5 absolute inset-0 w-[510px] h-[743px]" />
            <div className="absolute flex bg-black/50 rounded-[50px]  left-[55px] top-[197px]  h-[350px] w-[400px] items-center">
              <div className="items-center flex mx-auto flex-col text-[#FFFFFF]/90 font-light">
                <h1 className="text-[#00A859] font-bold text-5xl">
                  Welcome Back!
                </h1>
                <h4 className="mt-[9px]">
                  You already have an account?
                  <br />
                  sign in
                </h4>
                <button className="rounded-[50px] px-5 py-2 text-[#FFFFFF]/80  border-[#FFFFFF]/70 border-2">
                  sign in
                </button>
              </div>
            </div>
            <Image src={logo} height={64} width={60} />
            <h1 className="text-white">KGF CAUSE SHOP</h1>
          </div>
          {/* <Image src="/next.svg" height={743} width={510} /> */}
        </div>
        <div className="w-[510px] h-[743px] flex flex-col mx-auto pt-[105px]">
          <h1 className="text-[#00A859] text-5xl font-bold">Create Account</h1>
          <h4 className="text-center">sign up with</h4>
          <div className='flex gap-4 mx-auto'>
            <Image
              className="border-2 rounded-full fill-slate-500"
              src={facebookIcon}
              height={50}
              width={50}
            />
            <Image
              className="border-2 rounded-full fill-slate-500"
              src={twitterIcon}
              height={50}
              width={50}
            />
            <Image
              className="border-2 rounded-full fill-slate-500"
              src={twitterIcon}
              height={50}
              width={50}
            />
          </div>
          <form action=""></form>
        </div>
        <div className="bg-[#14BDE3] text-center inclined absolute bottom-0 right-0 text-white h-[39px] w-[191px]">
          Sell on KGF
        </div>
      </div>
    </section>
  );
}
