"use client";

import { motion } from "framer-motion";

const PromotionBar = () => {
  return (
    <section className="mt-48 bg-[url('../assets/promotion-bar.png')] bg-cover pb-24 pt-48 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-y-3"
      >
        <motion.h2
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[56px] font-semibold"
        >
          FREE CONSULTATION
        </motion.h2>
        <p className="max-w-[720px] text-center">
          Call us now to learn how we can help solve your IT problems, and find
          out the realistic expenses involved in securing quality IT support for
          your business.
        </p>
        <p className="text-xl font-semibold">(647) 227-5559</p>
      </motion.div>
    </section>
  );
};

export default PromotionBar;
