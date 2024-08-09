import React from "react";
import Image from "next/legacy/image";
export default function Recommendation() {
  return (
    <section className="container mx-auto mt-24 ">
      <h1 className="text-[#000000] my-5 pl-[100px] font-bold text-[2rem] leading-10">
        Recommended for you
      </h1>
      <div className="flex justify-center ">
        <div className="w-[510px] h-[499px] relative">
          <Image
            src="/Rectangle 1449.svg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="w-[510px] h-[499px] relative">
          <Image
            src="/Rectangle 1450.svg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="w-[510px] h-[499px] relative">
          <Image
            src="/Rectangle 1451.svg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

