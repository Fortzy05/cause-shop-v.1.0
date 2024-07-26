import React from "react";

export default function ShoppingpageHighlight() {
  return (
    <section className="my-11 flex bg-[#EFEFEF] w-[1198px] h-[360px] mx-auto">
      <div className="bg-black/10 w-[304px] h-[360px]">
        <img className="w-[304px] h-[360px]" src="/Pexels Photo by Ron Lach.svg" alt="" />
      </div>
      <div className="py-[58px] px-[5rem]">
        <div>
          <h1 className="text-[#14BDE3] mb-4 leading-6 text-[1rem]">
            Men's Winter sale
          </h1>
          <h2 className="w-[583px] text-[#000000] text-[3rem] leading-[64px] font-bold">
            Summer sale - Up to 50% Off All Products!
          </h2>
        </div>
        <div className="px-2 flex items-center gap-2 mt-5 w-[140px] h-[44px] border-2 border-[#000000]">
          <button className="text-[20px]"> Shop now</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

  <section>
    <div></div>
  </section>
    </section>
  );
}
