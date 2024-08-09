"use client"

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import facebookIcon from "../../assets/baselinefacebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactSchema } from "../components/schema";
import Recommendation from "../components/Recommendation";
import product from "../components/product.json"
export default function Page() {
   const initialValues = {
     firstName: "",
     lastName: "",
     email: "",
     number: "",
     message: "",
   };

   const {
     values,
     handleBlur,
     handleChange,
     handleSubmit,
     errors,
     touched,
     isSubmitting,
   } = useFormik({
     initialValues,
     validationSchema: contactSchema,
     onSubmit: (values, actions) => {
       console.log(values);
       actions.resetForm();
       toast.success("❤️form summitted successfully!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
     },
   });
  return (
    <section>
      <Header />
      <div className="relative">
        <Image
          height={648}
          width={1600}
          src="/Frame 444 (1).svg"
          alt="homepage image"
        />
        <div className="absolute top-[198px] right-[198px] bg-[#000000]/70 w-[440px] h-[246px] rounded-[50px] ">
          <h1 className="uppercase text-[#FFFFFF] text-center pt-11 text-[4rem] font-bold  leading-[4rem]">
            contact us
          </h1>
          <p className="w-[340px] mx-auto leading-6 text-[1rem] text-[#FFFFFF] pt-5 tracking-wider">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna
          </p>
        </div>
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
                <Image
                  src={twitterIcon}
                  alt="twitter"
                  height={25}
                  width={25}
                  className="bg-[#424242] rounded-full"
                />
                <Image
                  src={youtubeIcon}
                  alt="youtube"
                  height={25}
                  width={25}
                  className="bg-[#424242] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center mb-20 justify-center mt-8 ">
        <div className="w-full max-w-[1000px]  mx-auto  ">
          <h1 className="text-center text-[30px] text-[#1E1E1E] font-bold p-8">
            SEND A MESSAGE
          </h1>
          <div className="bg-[#F7F9F9] w-[1128px] h-[800px] flex justify-center">
            <form
              className=" flex items-center  flex-col gap-10 pt-8"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-5 ">
                <div className=" w-full gap-2 flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-[20px] mb-1 uppercase font-bold text-[#1E1E1E]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="border border-[#A3A3A3]  rounded-[10px] px-2 py-2 
                    w-[468px] outline-none"
                  />
                  {/* {<p className="error">{errors.email}</p>} */}
                  {/* {`border border-[#A3A3A3] rounded-[10px] px-2 py-2 
                   w-full outline-none input-error ${errors.firstName.length > 0 ? "input-error" : " "}`} */}
                  <div>
                    {errors.firstName && touched.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>
                </div>
                <div className=" flex flex-col gap-2 w-full ">
                  <label
                    htmlFor="lastName"
                    className="text-[20px] mb-1 uppercase font-bold text-[#1E1E1E]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-[468px] outline-none"
                  />
                  <div>
                    {errors.lastName && touched.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center  gap-5 w-full">
                <div className=" w-full gap-2 flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-[20px] mb-1 font-bold text-[#1E1E1E]"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-[468px] outline-none"
                  />
                  <div>
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="phone"
                    className="text-[20px] mb-1 font-bold text-[#1E1E1E]"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    className="border border-[#A3A3A3] rounded-[10px] px-2 py-2  w-[468px] outline-none"
                  />
                  <div>
                    {errors.number && touched.number && (
                      <p className="error">{errors.number}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className=" w-[70%] mx-auto ">
                <label
                  htmlFor="message"
                  className="text-[20px] mb-4 font-bold text-[#1E1E1E]"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  className="resize-none mt-4 border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none mt-10px h-[200px]"
                  cols="80"
                ></textarea>
                <div>
                  {errors.message && touched.message && (
                    <p className="error">{errors.message}</p>
                  )}
                </div>

                <div className="flex justify-end mt-24">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[74px] bg-[#E3B522] text-[#ffffff] rounded-[50px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] text-[14px] block
                    font-medium  hover:bg-yellow-400 hover:text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
      <section>
        <h1 className="text-[#000000] mb-8 pl-[120px] font-bold text-[2rem] leading-10">
          Best Selling Products
        </h1>
        <div className="grid grid-cols-4 gap-1 px-[120px]">
          {product.map((item, index) => {
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
      <Recommendation />
      <Footer />
    </section>
  );
}
