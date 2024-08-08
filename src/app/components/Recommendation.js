import React from 'react'
import Image from 'next/image';
export default function Recommendation() {
  return (
    <section className="w-full ">
      <h1 className="text-[#000000] my-5 pl-[100px] font-bold text-[2rem] leading-10">
        Recommended for you
      </h1>
      <div className="flex  w-[1400px] h-full mx-auto  ">
        <Image src="/Rectangle 1449.svg" width={499} height={499} alt='' />
        <Image src="/Rectangle 1450.svg" width={499} height={499} alt='' />
        <Image src="/Rectangle 1451.svg" width={499} height={499} alt=''/>
      </div>
    </section>
  );
}
