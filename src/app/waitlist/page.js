import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
export default function page() {
  return (
    <section className="relative">
      <div className="bg-[#E3B522] gap-1 w-[100vw] h-[104px] items-center flex pl-[92px]">
        <Image src="/next.svg" height={100} width={100} alt="" />
        <h1 className="uppercase font-bold text-[25px] leading-[4rem] text-[#14BDE3]">
          Kgf cause shop
        </h1>
      </div>
      <section className="p-24">
        <h1 className="my-4 font-bold text-[4rem] leading-[4rem] text-[#000000]">
          Welcome!
        </h1>
        <h4 className=" my-8 font-bold leading-10 text-[32px] text-[#000000]">
          This website is under construction
        </h4>
        <p className="font-bold leading-[28px] text-[24px] text-[#6E6363]">
          Join the waiting list for access to the carefully curated
          ethically-sourced collection of African products
        </p>
        <div className="my-24 flex justify-center">
          <Image src="/next.svg" height={500} width={500} alt="" />
        </div>
        <div className="bg-[#F7F9F9] flex items-center w-[940px] h-[112px]  rounded-[10px] p-5">
          <p className="text-[1rem] leading-6 w-[900px] h-[72px] ">
            By submitting this form, you consent to the collection and
            processing of your personal data in accordance with the General Data
            Protect Regulation (GDPR) for the purpose of the Research. Your
            information and responses will be kept confidential and used solely
            for the purpose of this research
          </p>
        </div>
      </section>
      <div className="pl-[92px]">
        <form className="mb-[157px]">
          <div className="flex gap-5 mb-5 items-center">
            <input
              className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex gap-5 mb-5 items-center">
            <input
              className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
              type="text"
              placeholder="Country/City"
            />
            <input
              className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[380px] h-[34px]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-5 flex items-center">
            <input
              className="rounded-[10px] border-[1px] border-[#6E6363] px-2.5 py-2.5 w-[788px] h-[34px]"
              type="url"
              placeholder="Twitter/Instagram/Facebook handle"
            />
          </div>
          <button className="px-5 py-2.5 bg-[#E3B522] text-[#ffffff] rounded-[50px]">
            Submit
          </button>
        </form>
      </div>
      <div className="pb-24 absolute right-8 ">
        <h1 className="font-semibold  text-[20px] leading-7  w-[250px] right-11 absolute bottom-[64px] text-[#6E6363] ">
          452 others just joined
        </h1>
        <div className=" right-0  border-[#FFFFFF]  rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className=" right-3  border-[#FFFFFF]  rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className=" right-6  border-[#FFFFFF]  rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className=" right-9  border-[#FFFFFF]  rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
        <div className=" right-12 border-[#FFFFFF]   rounded-full absolute w-[36px] h-[36px] border-[3px] bg-[#D9D9D9]"></div>
      </div>
      <div className="pt-24">
       
        <Footer />
      </div>
    </section>
  );
}
