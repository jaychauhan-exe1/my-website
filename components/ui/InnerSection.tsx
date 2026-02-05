"use client"
import {motion} from "motion/react";
import Image from "next/image";

export const InnerSection = () => {
  return (
    <div className="h-screen">
        <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      viewport={{amount: "all"}}
      transition={{ duration: 0.5 }}


      className="flex flex-wrap justify-between overflow-hidden opacity-0"
    >
        <Image className="w-125 h-50 rounded-full" src="/images/blue-gradient-bg.png" alt="blue-gradient-img" width={125} height={50} />
        <div>
            <h2 className="lg:text-8xl text-3xl font-bold uppercase">Creative</h2>
            <h2 className="lg:text-8xl text-3xl font-normal uppercase ml-10 text-right">Agency</h2>
        </div>
        <Image className="w-125 h-50 rounded-full" src="/images/blue-gradient-bg.png" alt="blue-gradient-img" width={125} height={50} />
    </motion.div>
    </div>
  )
}
