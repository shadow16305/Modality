import React from "react";
import Banner from "./Banner";
import SectionHeader from "../ui/SectionHeader";

const Testimonials = () => {
  return (
    <div className="mx-auto mt-48 gap-y-24 text-white lg:max-w-[1060px] 2xl:max-w-[1364px]">
      <div className="flex flex-col items-center gap-y-16">
        <SectionHeader title="testimonials" />
        <Banner />
      </div>
    </div>
  );
};

export default Testimonials;
