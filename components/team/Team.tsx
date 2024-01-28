"use client";

import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import portrait_one from "../../assets/placeholder-portrait-one.svg";
import portrait_two from "../../assets/placeholder-portrait-two.svg";
import portrait_three from "../../assets/placeholder-portrait-three.svg";
import TeamCard from "./TeamCard";
import { fromBottom } from "@/tools/variants";

const teamCardItems = [
  {
    id: "t1",
    role: "Owner & Tech Support Lead",
    name: "Ian Nevdashenko",
    imgSrc: portrait_one,
  },
  {
    id: "t2",
    role: "Tech Support Lead",
    name: "Mike Kurbanov",
    imgSrc: portrait_two,
  },
  {
    id: "t3",
    role: "Branding & Website Designer ",
    name: "B.Sanem Korkmaz",
    imgSrc: portrait_three,
  },
];

const Team = () => {
  return (
    <section className="mx-auto mt-48 flex flex-col gap-y-24 text-white lg:max-w-[1060px] 2xl:max-w-[1364px]">
      <div className="flex items-center justify-between">
        <SectionTitle
          title="Meet Our Expert Team"
          header="our team"
          className="max-w-none"
        />
        <p className="max-w-[500px]">
          Get to know our dedicated team reshaping IT support for diagnostic
          clinics with expertise and commitment!
        </p>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          onscreen: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex justify-center gap-x-20"
      >
        {teamCardItems.map((item) => (
          <motion.div key={item.id} variants={fromBottom}>
            <TeamCard
              key={item.id}
              role={item.role}
              name={item.name}
              img={item.imgSrc}
              className={`${item.id === "t2" && "mt-20"}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
