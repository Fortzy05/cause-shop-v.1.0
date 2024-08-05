"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import shop from "../components/shop.json";
export default function page() {
  const [text, setText] = useState("All Categories");
  const [category, setCategory] = useState(" What's New In");
  function handleTextChange(newText) {
    setText(newText);
  }
  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
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
      <section className="flex gap-4">
        <div className="w-[308px] ml-8 h-[1237px] bg-[#F7F9F9] mt-8">
          <h1 className="pl-6 pt-4 text-[#000000] text-[2rem] font-bold leading-10">
            {category}
          </h1>
          <h4
            onClick={() => {
              handleCategoryChange("What's New In");
              handleTextChange("All Categories");
            }}
            className="pl-6 cursor-pointer mb-4 pt-6 text-[20px] leading-[22.5px] text-[#878181]"
          >
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
              onClick={() => {
                handleTextChange("Cloth");
                handleCategoryChange("Cloth");
              }}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px] mt-4"
            >
              Cloth
            </h1>
            <h1
              onClick={() => {
                handleTextChange("Food");
                handleCategoryChange("Food");
              }}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px] mt-4"
            >
              Food
            </h1>
            <h1
              onClick={() => {
                handleTextChange("Bags");
                handleCategoryChange("Bags");
              }}
              className="mb-8 text-[#878181] text-[20px] leading-[22.5px]"
            >
              Bags
            </h1>
            <h1
              onClick={() => {
                handleTextChange("Foot Wears");
                handleCategoryChange("Foot Wears");
              }}
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
        <div className="w-[1120px] h-[1178px] mb-24 mt-24 bg-[#F7F9F9]">
          <div className="flex gap-4 pl-[26px] py-[35px]  items-center">
            <button className="bg-[#FFFFFF] px-5 py-2.5 rounded-[20px] shadow-md ">
              Sort
            </button>
            <button className="bg-[#FFFFFF] px-5 py-2.5  rounded-[20px] shadow-md ">
              Filter
            </button>
            <div className="w-[510px]  h-[40px] relative pl-[380px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#878181"
                className="w-6 h-6 absolute top-2.5 left-[400px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                placeholder="Search all items"
                className="shadow-md placeholder:pl-14 text-[#D9D9D9] w-[510px] h-[40px] bg-[#ffffff] rounded-[30px]"
                type="search"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 py-5 px-2">
            {shop.map((item, index) => {
              return (
                <div key={item.id} className="">
                  <div className="">
                    <div className="w-[360px] flex justify-center items-center h-[390px] bg-[#D9D9D9]">
                      <Image
                        src={item.image}
                        height={290}
                        width={280}
                        alt={item.name}
                        className=""
                      />
                    </div>
                    <h1 className="text-[#000000] text-[24px] leading-8">
                      {item.name}
                    </h1>
                    <p className="text-[#ABABAB] text-[1rem] leading-6">
                      {item.description}
                    </p>
                    <div>
                      <h1 className="text-[#000000] text-[24px] leading-8">
                        {item.price}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

// box-shadow: 0px 4px 4px 0px #00000040;
// box-shadow: 0px 4px 4px 0px #00000040;
