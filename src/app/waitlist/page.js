import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <section>
      <div className="bg-[#E3B522] pl-11 gap-1 w-[100vw] h-[104px] items-center flex">
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
        <div className="bg-[#F7F9F9] flex items-center w-[940px] h-[112px] ml-[92px] rounded-[10px] p-5">
          <p className="text-[1rem] leading-6 w-[900px] h-[72px] ">
            By submitting this form, you consent to the collection and
            processing of your personal data in accordance with the General Data
            Protect Regulation (GDPR) for the purpose of the Research. Your
            information and responses will be kept confidential and used solely
            for the purpose of this research
          </p>
        </div>
      </section>
    </section>
  );
}
