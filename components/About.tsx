"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import disc from "../assets/disc.svg";
import aboutImg from "../assets/about-image.png";
import shape from "../assets/weird-shape-two.svg";
import arrowpath from "../assets/arrow-path.svg";
import { fromRight, opacity } from "@/tools/variants";
import SectionTitle from "./ui/SectionTitle";

const aboutListItems = [
  {
    id: "a1",
    title: "Diagnostic Machines Management",
    paragraph:
      "Our extensive knowledge of DICOM, RIS, & PACS enables us to efficiently oversee your diagnostic machines, ensuring smooth operations.",
  },
  {
    id: "a2",
    title: "Years of Experience",
    paragraph:
      "With years of industry experience, we've been supporting diagnostic clinics, ensuring their seamless operation and growth.",
  },
  {
    id: "a3",
    title: "Optimizing Patient Flow",
    paragraph:
      "With our tailored IT support, our aim is to streamline clinic workflows, expediting patient processing for swift and efficient care.",
  },
];

const About = () => {
  return (
    <>
      <div className="mx-auto mt-48 flex justify-between text-white lg:max-w-[1060px] 2xl:max-w-[1364px]">
        <div className="flex flex-col gap-y-32">
          <SectionTitle
            title="Experts in DICOM, RIS, & PACS Management"
            header="about us"
            className="max-w-[650px]"
          />
          <motion.ul
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
            className="flex flex-col gap-y-16"
          >
            {aboutListItems.map((item) => (
              <motion.div
                className="flex items-center gap-x-4"
                key={item.id}
                variants={opacity}
              >
                <Image
                  src={disc}
                  alt="disc"
                  width={32}
                  height={0}
                  className="h-auto"
                />
                <li className="max-w-[500px]">
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p>{item.paragraph}</p>
                </li>
              </motion.div>
            ))}
          </motion.ul>
        </div>
        <div className="flex flex-col items-center gap-y-24">
          <motion.p
            className="max-w-[675px]"
            variants={opacity}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            We're a dedicated team of experts, formerly employed by Canada's top
            DICOM, RIS, & PACS providers. With an in-depth understanding of
            diagnostic clinics, we're adept at resolving the specific IT issues
            you encounter daily.
          </motion.p>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fromRight}
            className="relative h-[580px] w-[480px]"
          >
            <Image
              src={aboutImg}
              alt="person operating a weird computer"
              fill
              sizes="100%"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={arrowpath} alt="arrow" />
      </div>
    </>
  );
};

export default About;
