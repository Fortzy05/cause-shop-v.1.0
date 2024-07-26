import React from "react";
import ShoppingpageHighlight from "./ShoppingpageHighlight";
import Image from "next/image";

export default function ShoppingPage() {
  return (
    <section className="relative">
      <div>
        <Image
        height={693}
        width={1600}
        // sizes="100vw"
        // fill
        // objectFit="cover"
        //   className="h-[600px] w-[1440px] -z-10"
          src="/Rectangle 1332.svg"
          alt="homepage image"
        />

        <div className="bg-black/70   rounded-[50px] p-[50px] h-[374px] w-[754px] absolute top-[142px] left-[91px]">
          <div className="p-4">
            <h1 className="uppercase w-[654px] text-5xl leading-[64px] font-bold text-[#ffffff]">
              shop with kindlegate foundation
            </h1>
            <p className="text-[#ffffff] w-[340px] text-[1rem] leading-6 my-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna .
            </p>
            <div className="flex gap-3 mt-5 text-center">
              <button className="bg-[#E3B522] text-[#ffffff] py-2 px-5 rounded-[50px]">
                Shop now
              </button>
              <button className="border-[#ABABAB] text-[#ABABAB] px-5 py-2 rounded-[50px] border-2">
                Find shop
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ShoppingpageHighlight/>
    </section>
  );
}
