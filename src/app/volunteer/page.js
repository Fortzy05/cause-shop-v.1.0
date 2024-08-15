import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import VolunteerCardLeft from "../components/VolunteerCardLeft";
import VolunterCardRight from "../components/VolunterCardRight";

export default function page() {
  return (
    <section className="">
      <div className="mb-8">
        <Header />
        <h1 className="text-[#000000] mt-[93px] pl-[196px] font-bold text-[2rem] leading-10">
          Volunteer with us
        </h1>
        <VolunteerCardLeft />
        <VolunterCardRight />
        <VolunteerCardLeft />
        <VolunterCardRight />
        <VolunteerCardLeft />
      </div>
      <Footer />
    </section>
  );
}