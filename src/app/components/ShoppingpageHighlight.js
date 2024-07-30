import Image from "next/image";
import React from "react";
import data from "./data.json";

export default function ShoppingpageHighlight() {
  return (
    <section>
      <div className="my-11 flex bg-[#EFEFEF] w-[1198px] h-[360px] mx-auto">
        <div className="bg-black/10 w-[304px] h-[360px]">
          <Image
            width={304}
            height={360}
            // className="w-[304px] h-[360px]"
            src="/Pexels Photo by Ron Lach.svg"
            alt="landing image"
          />
        </div>
        <div className="py-[58px] px-[5rem]">
          <div>
            <h1 className="text-[#14BDE3] mb-4 leading-6 text-[1rem]">
              Men&apos;s Winter sale
            </h1>

            <h2 className="w-[583px] text-[#000000] text-[3rem] leading-[64px] font-bold">
              Summer sale &ndash; Up to 50% Off All Products!
            </h2>
          </div>
          <div className="px-2 flex items-center gap-2 mt-5 w-[145px] h-[44px] border-[1px] border-[#000000]">
            <button className="text-[20px] leading-6"> Shop now</button>
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
      </div>

      <div className=" flex mb-8 gap-24 pt-11">
        <div className="pl-24 mb-8">
          <h1 className="text-[#00A859] font-semibold text-[2rem] leading-10 ">
            New Arrivals
          </h1>
          <p className="text-[1rem] mt-8 leading-6 text-[#000000] w-[288px]">
            Discover the latest trends and hottest products fresh off the line!
          </p>
          <button className="mt-8  border-[#000000] px-5 py-[6px] border-[1px] rounded-[50px]">
            See all
          </button>
        </div>
        <div className="flex gap-24">
          {data.map((shop) => {
            return (
              <div className="" key={shop.id}>
                <Image
                  src={shop.image}
                  alt={shop.name}
                  width={232}
                  height={362}
                />
                <h1 className="text-[24px] leading-[2rem] text-[#424242] text-center">
                  {shop.name}
                </h1>
                <p className="text-2xl text-[#000000] font-bold text-center">
                  {shop.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <section className="bg-[#E7F8FC] w-full h-[602px]">
        <div className="flex gap-20 justify-center items-center h-full">
          <Image
            className="shadow-sm "
            src="/rectangle 1344.svg"
            height={399}
            width={624}
            alt="culture attire"
          />
          <div>
            <h1 className="text-[#00A859] text-[2rem] leading-10 font-bold mb-[40px] ">
              Embrace The African Culture
            </h1>
            <p className="w-[387px] text-[1rem] leading-6 text-[#424242] ">
              Would you love to look African, then shop from our collections of
              African Attire, as you embrace the African culture, Look Africa,
              Feel Africa.
            </p>
            <button className="border-[1px] border-[#000000] rounded-[50px] px-5 py-2.5 mt-11 text-[#000000] text-[13px] leading-[14px] ">
              Shop now
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#E3B522]/10  w-full h-[318px] ">
        <div className="flex gap-24 justify-center items-center h-full">
          <div>
            <Image src="/next.svg" height={100} width={100} />
            <h1 className="mt-4 font-bold mb-2 text-[#424242] text-[20px]">
              Free Shipping
            </h1>
            <p className="text-[#424242] text-[1rem] leading-6 ">Free Shipping for order above $200</p>
          </div>
          <div>
            <Image src="/next.svg" height={100} width={100} />
            <h1 className="mt-4 font-bold mb-2 text-[#424242] text-[20px]">
              Volunter
            </h1>
            <p className="text-[#424242] text-[1rem] leading-6">Show an helping hand</p>
          </div>
          <div>
            <Image src="/next.svg" height={100} width={100} />
            <h1 className="mt-4 font-bold mb-2 text-[#424242] text-[20px]">
              Donate
            </h1>
            <p className="text-[#424242] text-[1rem] leading-6">Support the cause</p>
          </div>
          <div>
            <Image src="/next.svg" height={100} width={100} />
            <h1 className="mt-4 font-bold mb-2 text-[#424242] text-[20px]">
              Online Support
            </h1>
            <p className="text-[#424242] text-[1rem] leading-6">24hrs a day 7 Days a week</p>
          </div>
        </div>
      </section>
    </section>
  );
}
