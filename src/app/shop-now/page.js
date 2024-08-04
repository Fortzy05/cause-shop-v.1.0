"use client"

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function page() {
    const [text, setText] = useState("Cloth")

    function handleTestChange(newText){
        setText(newText)
    }
  return (
    <section>
      <Header />
      <div>
        <Image
          height={648}
          width={1600}
          src="/Frame 444.svg"
          alt="homepage image"
        />
      </div>

      <section className="bg-[#EFEFEF]  w-full h-[168px] ">
        <div className="flex gap-8 items-center justify-center h-full">
          <div className="items-center flex gap-2">
            <Image src="/la_shipping-fast.svg" height={50} width={50} alt="" />
            <div>
              <h1 className=" font-bold mb-2 text-[#424242] text-[20px] leading-[22.5px]">
                Free Shipping
              </h1>
              <p className="text-[#424242] text-[13px] leading-[14px] ">
                Free Shipping for order above $200
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex gap-2">
            <Image
              src="/material-symbols-light_volunteer-activism-outline.svg"
              height={50}
              width={50}
              alt=""
            />
            <div>
              <h1 className=" font-bold mb-2 text-[#424242] text-[20px] leading-[22.5px]">
                Volunter
              </h1>
              <p className="text-[#424242] text-[13px] leading-[14px]">
                Show an helping hand
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex gap-2">
            <Image src="/la_donate.svg" height={50} width={50} alt="" />
            <div>
              <h1 className=" font-bold mb-2 text-[#424242] text-[20px] leading-[22.5px]">
                Donate
              </h1>
              <p className="text-[#424242] text-[13px] leading-[14px]">
                Support the cause
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex gap-2">
            <Image src="/token_chat.svg" height={50} width={50} alt="" />
            <div>
              <h1 className=" font-bold mb-2 text-[#424242] text-[20px] leading-[22.5px]">
                Online Support
              </h1>
              <p className="text-[#424242] text-[13px] leading-[14px]">
                24hrs a day 7 Days a week
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[308px] ml-8 h-[1237px] bg-[#F7F9F9] mt-8">
          <h1 className="pl-6 pt-4 text-[#000000] text-[2rem] font-bold leading-10">
            Cloth
          </h1>
          <h4 className="pl-6 mb-4 pt-6 text-[20px] leading-[22.5px] text-[#878181]">
            All Categories
          </h4>
          <div className="pl-6 cursor-pointer">
            <input
              className="w-[228px] text-[#424242] text-[20px] leading-[22.5px] font-bold p-2.5 text-center bg-[#FFFFFF]"
              type="text"
              value={text}
              readOnly
            />

            <h1
              onClick={() => handleTestChange("Food")}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px] mt-4"
            >
              Food
            </h1>
            <h1
              onClick={() => handleTestChange("Bags")}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px]"
            >
              Bags
            </h1>
            <h1
              onClick={() => handleTestChange("Foot Wears")}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px]"
            >
              Foot Wears
            </h1>
          </div>
          <div className="relative flex justify-center">
            <Image src="/Rectangle 1440.svg" height={758} width={259} />
            <div className="absolute top-14 w-[179px] h-[43px]   p-2.5 bg-[#14BDE3]">
              <h1 className="text-center leading-[22.5px] text-[#424242] text-[18px]">
                Women&apos;s Flash Sale
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[954px] h-[1754px] bg-[#F7F9F9]">
          <div></div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
