import React from "react";
import product from "./product.json";
import Image from "next/image";

export default function BestSelling() {
  return (
    <section>
      <h1 className="text-[#000000] mb-8 pl-[120px] font-bold text-[2rem] leading-10">
        Best Selling Products
      </h1>
      <div className="grid grid-cols-4 gap-1 px-[120px]">
        {product.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="">
                <div className="w-[300px] flex justify-center items-center h-[360px] bg-[#D9D9D9]">
                  <Image
                    src={item.image}
                    height={290}
                    width={260}
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
                  <h1 className="text-[#000000] text-[24px] leading-8 mb-11">
                    {item.price}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className=" text-[14px] leading-[18px] px-5 py-2.5 rounded-[50px] border-[1px] border-[#000000]">
          See all
        </button>
      </div>
    </section>
  );
}
