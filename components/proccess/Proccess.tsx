"use client";

import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

import building from "../../assets/building.svg";
import brain_freeze from "../../assets/brain-freeze.svg";
import person_check from "../../assets/person-check.svg";
import ProccessCard from "./ProccessCard";
import { fromBottom } from "@/tools/variants";

const proccesItems = [
  {
    id: "prc1",
    title: "Explore our services",
    paragraph: "Let’s decide how we can help your clinic",
    imageSrc: "",
    number: 1,
  },
  {
    id: "prc2",
    title: "Give Us a Call",
    paragraph: "Let’s decide how we can help your clinic",
    imgSrc: building,
    number: 2,
  },
  {
    id: "prc3",
    title: "Recieve Custom Plan",
    paragraph: "Let’s decide how we can help your clinic",
    imgSrc: brain_freeze,
    number: 3,
  },
  {
    id: "prc4",
    title: "Let's Make It Happen",
    paragraph: "Let’s decide how we can help your clinic",
    imgSrc: person_check,
    number: 4,
  },
];

const Proccess = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-y-[72px] text-white lg:max-w-[1060px] 2xl:max-w-[1364px]">
      <div className="flex flex-col gap-y-4">
        <SectionHeader title="process" />
        <h2 className="text-[56px] font-semibold">How We Work</h2>
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
        className="flex gap-x-8"
      >
        {proccesItems.map((item) => (
          <motion.div key={item.id} variants={fromBottom}>
            <ProccessCard
              key={item.id}
              title={item.title}
              paragraph={item.paragraph}
              img={item.imgSrc}
              number={item.number}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Proccess;
