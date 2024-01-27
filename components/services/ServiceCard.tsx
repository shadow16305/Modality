"use client";

import { opacity } from "@/tools/variants";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={opacity}
      className="flex h-[272px] flex-col items-center justify-center gap-y-5 rounded-[10px] border border-[#101936] bg-gradient-to-b from-[#101936] to-[#10193604] lg:w-[280px] 2xl:w-[320px]"
    >
      <Image src={image} alt={title} width={60} height={60} />
      <h4 className="font-semibold">{title}</h4>
      <p className="max-w-[230px] text-center">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
