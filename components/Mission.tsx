"use client";

import Image from "next/image";
import mission_img from "../assets/mission-image.png";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="text-white mt-48 flex items-center gap-x-20">
      <div className="w-1/2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[507px] origin-left"
        >
          <Image
            src={mission_img}
            alt="diverse-group-patients-waiting-attend-medical-appointment-sitting-busy-hospital-reception-desk-people-with-healthcare-insurance-having-examination-with-specialist"
            fill
            sizes="100%"
            className="rounded-r-[40px] object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex max-w-[600px] flex-col gap-y-8"
      >
        <p className="text-3xl text-cyan">
          Roughly 90% of IT issues happen at the reception desk.
        </p>
        <p className="text-2xl">
          Our aim is to enhance the efficiency of your front desk and clinic
          operations for a smoother experience.
        </p>
      </motion.div>
    </div>
  );
};

export default Mission;
