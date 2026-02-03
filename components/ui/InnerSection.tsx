"use client"
import {motion} from "motion/react";

export const InnerSection = () => {
  return (
    <div>
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-between"
    >
        <img className="w-125 h-50 rounded-full" src="/images/blue-gradient-bg.png" alt="blue-gradient-img" />
        <div>
            <h2 className="lg:text-8xl text-3xl font-bold uppercase">Creative</h2>
            <h2 className="lg:text-8xl text-3xl font-normal uppercase">Agency</h2>
        </div>
        <img className="w-125 h-50 rounded-full" src="/images/blue-gradient-bg.png" alt="blue-gradient-img" />
    </motion.div>
    </div>
  )
}
