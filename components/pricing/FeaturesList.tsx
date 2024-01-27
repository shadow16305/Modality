"use client";

import Image from "next/image";
import disc from "../../assets/disc.svg";
import { motion } from "framer-motion";
import { fromBottom } from "@/tools/variants";

const featuresColOne = [
  {
    id: "f1",
    text: "Unlimited Onsite Support",
  },
  {
    id: "f2",
    text: "Unlimited Remote Support",
  },
  {
    id: "f3",
    text: "24/7 Help Desk",
  },
  {
    id: "f4",
    text: "Hardware & Software Installation Help",
  },
];

const featuresColTwo = [
  {
    id: "fc5",
    text: "Network management",
  },
  {
    id: "fc6",
    text: "Diagnostic Machines Management Help",
  },
  {
    id: "fc7",
    text: "Cybersecurity Solutions",
  },
  {
    id: "fc8",
    text: "Third-party Vendor Management ",
  },
];

const FeaturesList = () => {
  return (
    <>
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
        className="flex flex-col gap-y-5"
      >
        {featuresColOne.map((feature, index) => (
          <motion.div
            className="flex items-center gap-x-4"
            key={index}
            variants={fromBottom}
          >
            <Image
              src={disc}
              alt="disc"
              width={32}
              height={0}
              className="h-auto"
            />
            <li className="font-semibold">{feature.text}</li>
          </motion.div>
        ))}
      </motion.ul>
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
        className="flex flex-col gap-y-5"
      >
        {featuresColTwo.map((feature, index) => (
          <motion.div
            className="flex items-center gap-x-4"
            key={index}
            variants={fromBottom}
          >
            <Image
              src={disc}
              alt="disc"
              width={32}
              height={0}
              className="h-auto"
            />
            <li className="font-semibold">{feature.text}</li>
          </motion.div>
        ))}
      </motion.ul>
    </>
  );
};

export default FeaturesList;
