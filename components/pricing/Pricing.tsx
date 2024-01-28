"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import shape from "../../assets/weird-shape.svg";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";
import { fromBottom } from "@/tools/variants";
import SectionTitle from "../ui/SectionTitle";

const priceCardItems = [
  {
    id: "p1",
    title: "small clinic",
    quote: "Small but Mighty: Agile & Personalized!",
    workstations: "2-3 Workstations",
    price: "$ 449/Month",
  },
  {
    id: "p2",
    title: "medium clinic",
    quote: "Growing with Agility: The Power of In-Between.",
    workstations: "4-5 Workstations",
    price: "$ 599/Month",
  },
  {
    id: "p3",
    title: "large clinic",
    quote: "Global Influence Unleashed: Where Size Prevails.",
    workstations: "5+ Workstations",
    price: "$ 799/Month",
  },
];

const Pricing = () => {
  return (
    <section
      className="relative mt-56 flex scroll-mt-32 flex-col items-center gap-y-4 text-white"
      id="pricing"
    >
      <SectionTitle
        title="Managed IT Services"
        header="pricing"
        className="max-w-none"
      />
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
        className="mt-40 flex lg:gap-x-2 2xl:gap-x-9"
      >
        {priceCardItems.map((card) => (
          <motion.div key={card.id} variants={fromBottom}>
            <PricingCard
              title={card.title}
              quote={card.quote}
              workstations={card.workstations}
              buttonText={card.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
