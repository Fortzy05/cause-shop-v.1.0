"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import shop from "../components/shop.json";
import Recommendation from "../components/Recommendation";
import BestSelling from "../components/BestSelling";
export default function Page() {
  const [text, setText] = useState("All Categories");

  const [category, setCategory] = useState(" What's New In");

  const [shopItems, setShopItems] = useState(
    shop.map((item) => ({ ...item, filled: false, activeSvg: false }))
  );

  // const [activeSvg, setActiveSvg] = useState(false);

  function handleTextChange(newText) {
    setText(newText);
  }
  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  const handleSvgToggle = (id, type) => {
    setShopItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [type]: !item[type] } : item
      )
    );
  };

  // const toggleFill = (id) => {
  //   setShopItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, filled: !item.filled } : item
  //     )
  //   );
  // };
  return (
    <section>
      <Header />
      <div className="relative">
        <Image
          height={648}
          width={1600}
          src="/Frame 444.svg"
          alt="homepage image"
        />
        <div className="absolute left-[112px] px-4 top-[210px] space-y-5">
          <h1 className="font-bold tracking-tighter text-[4rem] leading-[4rem] text-[#FFFFFF]">
            BUY AFRICAN ATTIRE
          </h1>
          <h4 className="leading-10 text-[2rem] font-bold text-[#ffffff]">
            Collection of 2024
          </h4>
          <p className="text-[1rem] w-[520px] leading-6 tracking-[5%]  text-[#ffffff]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna
          </p>
          <button className="px-5 py-2.5 bg-[#E3B522] text-[14px] leading-[18px] rounded-[50px] text-[#ffffff]">
            Buy now
          </button>
        </div>
      </div>

      <section className="bg-[#EFEFEF]  w-full h-[168px] ">
        <div className="flex gap-8 items-center justify-center h-full">
          <div className="items-center flex gap-2">
            <Image src="/la_shipping-fast.svg" height={50} width={50} alt="" />
            <div>
              <h1 className=" font-bold mb-2 text-[#424242] text-[20px] leading-[22.5px]">
                Free Shipping
              </h1>
              <p className="text-[#424242]  text-[13px] leading-[14px] ">
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
      <section className="flex gap-4 w-full px-4">
        <div className=" w-1/4 ml-8 h-[1237px] bg-[#F7F9F9] mt-8">
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
              <h1 className="text-center leading-[22.5px] text-[#424242] text-[16px]">
                Women&apos;s Flash Sale
              </h1>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-[1178px]  mb-24 mt-24 bg-[#F7F9F9]">
          <div className="flex gap-4 pl-[58px] py-[35px]  items-center">
            <div className="bg-[#FFFFFF] flex items-center space-x-1 px-4 py-2 rounded-[20px] shadow-sm ">
              <h1> Sort</h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-[13px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-[#FFFFFF] flex space-x-1 items-center px-4 py-2  rounded-[20px] shadow-sm ">
              <h1> Filter</h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[13px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>
              </span>
            </div>
            <div className="w-[510px]  h-[40px] relative pl-[240px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#878181"
                className="w-6 h-6 absolute top-2.5 left-[260px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                placeholder="Search all items"
                className="shadow-sm pl-14  border-none text-[#D9D9D9] w-[510px] h-[40px] bg-[#ffffff] rounded-[30px]"
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 px-[50px]">
            {shopItems.map((item) => (
              <div key={item.id} className="">
                <div className="relative">
                  <div className="bg-green-600 w-[42px] h-[18px] text-[13px] text-center text-[#ffffff] absolute top-10 left-10">
                    New
                  </div>
                  <div className="w-[300px] mx-auto flex justify-center pt-8 items-start h-[360px] bg-[#D9D9D9]">
                    <Image
                      src={item.image}
                      height={290}
                      width={260}
                      alt={item.name}
                    />
                  </div>
                  <div className="px-4">
                    <h1 className="text-[#000000] text-[24px] leading-8">
                      {item.name}
                    </h1>
                    <p className="text-[#ABABAB] text-[1rem] leading-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between px-4 mb-8">
                    <h1 className="text-[#000000] text-[24px] leading-8">
                      {item.price}
                    </h1>
                    <div className="flex space-x-2 cursor-pointer">
                      <span
                        onClick={() => handleSvgToggle(item.id, "activeSvg")}
                      >
                        {item.activeSvg ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#00A859"
                            // fill={item.filled ? "#00A859" : "none"}
                            // stroke={item.filled ? "none" : "#00A859"}
                            stroke="none"
                            className="size-6 ease-in-out cursor-pointer duration-200 "
                          >
                            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            // fill={item.filled ? "" : ""}
                            fill="#5f6368"
                            stroke="green"
                          >
                            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                          </svg>
                        )}
                      </span>
                      <span onClick={() => handleSvgToggle(item.id, "filled")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          fill={item.filled ? "#F44336" : "none"}
                          stroke={item.filled ? "none" : "currentColor"}
                          className=" size-6 ease-in-out cursor-pointer duration-200 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BestSelling />
      <Recommendation />
      <Footer />
    </section>
  );
}

// box-shadow: 0px 4px 4px 0px #00000040;
// box-shadow: 0px 4px 4px 0px #00000040;
