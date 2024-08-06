import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import facebookIcon from "../../assets/baselinefacebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
export default function Page() {
  return (
    <section>
      <Header />
      <div>
        <Image
          height={648}
          width={1600}
          src="/Frame 444 (1).svg"
          alt="homepage image"
        />
      </div>

      <section className="bg-[#EFEFEF]  w-full h-[168px] ">
        <div className="flex gap-8 items-center justify-center h-full">
          <div className="items-center flex flex-col gap-2">
            <h1 className="font-bold text-[20px] leading-[22.5px]">Address</h1>
            <div>
              <p className="text-[#424242] text-[13px] leading-[14px] w-[236px] ">
                The Grey Gate, Olushola Agbaje, Off Road 13 lekki Phase I,
                Lagos, Nigeria.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex-col flex gap-2">
            <h1 className="font-bold text-[20px] leading-[22.5px]">
              Phone Number
            </h1>
            <div>
              <p className="text-[#424242] text-[13px] leading-[14px]">
                +2348180380006
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex flex-col gap-2">
            <h1 className="font-bold text-[20px] leading-[22.5px]">Email</h1>
            <div>
              <p className="text-[#424242] text-[13px] leading-[14px]">
                info@kindlegatefoundation.org
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#ABABAB] w-[69px] rotate-90" />
          <div className="items-center flex flex-col gap-2">
            <h1 className="font-bold text-[20px] leading-[22.5px]">Socials</h1>
            <div>
              <div className="flex gap-4 fill-black">
                <Image
                  width={25}
                  height={25}
                  src={facebookIcon}
                  alt="facebook"
                  className="bg-[#424242] rounded-full"
                />
                <Image
                  src={instagramIcon}
                  alt="instagram"
                  width={25}
                  height={25}
                  className="bg-[#424242] rounded-full"
                />
                <Image src={twitterIcon} alt="twitter" height={25} width={25} />
                <Image src={youtubeIcon} alt="youtube" height={25} width={25} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
