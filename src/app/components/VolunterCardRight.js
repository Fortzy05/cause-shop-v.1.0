import React from 'react'

export default function VolunterCardRight() {
  return (
    <section className="">
      <div className="mt-[50px] w-[1137px] h-[337px] bg-[#424242] shadow-sm rounded-[20px] mx-auto">
        <div className="flex justify-between items-center gap-8">
          <div className="flex pl-[60px] flex-col items-start gap-5">
            <h1 className="w-[565px] font-bold text-[#ffffff] leading-10 text-[2rem]">
              Lorem ipsum dolor sit amet, consectetuer
            </h1>
            <h4 className="w-[565px] text-[#ffffff] leading-6 text-[1rem]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna
            </h4>
            <div className="w-[176px] flex gap-1 mt-4 h-[44px] border-[1px]  p-2.5 border-[#ffffff]">
              <span className="text-[#ffffff] font-bold text-[20px] leading-6">
                Volunteer Now
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="white"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className=" mt-[50px] mr-[60px] w-[300px] h-[237px] bg-[#D9D9D9] "></div>
        </div>
      </div>
    </section>
  );
}
