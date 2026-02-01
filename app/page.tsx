"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CiPhone, CiLinkedin } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";
import { motion } from "motion/react";
import Carousel from "@/components/Carousel";

import { Socials } from "@/components/ui/Socials";



export default function Home() {
  const Email = "work.jaysinghchauhan.com";
  const projects = [
    {
      title: "Project One",
      description: "Description for project one.",
      link: "/projects/project-one",
      bg_image: "/images/project-1.png",
      bg_color: "#FFE9E5",

    },
    {
      title: "Project Two",
      description: "Description for project two.",
      link: "/projects/project-two",
      bg_image: "/images/project-2.png",
      bg_color: "#FF32E5",
    },
  ];
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/jaychauhan-exe1",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/jaychauhan.exe/",
    },
    {
      name: "Discord",
      link: "https://discord.com/users/jaychauhan.exe",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jaychauhanexe/",
    },
  ];

  return (
    <main className="">
      <section className="hero global">
        <div className="">
          <h1 className="lg:text-8xl  text-3xl  font-bold">Jay S. Chauhan</h1>
          <h1 className="lg:text-8xl  text-3xl font-bold">Digital Solutions.</h1>
        </div>
        <div className="flex my-6 lg:flex-row flex-col-reverse">
          <div className="w-full">
            <div className="lg:w-[50%]">
              <Link className="w-fit" href="tel:+919220894465">
                <motion.div className="flex justify-between items-center py-4 border-b border-foreground mb-2"
                  initial="rest"
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <motion.p variants={{ rest: { x: 0 }, hover: { x: 10 } }}>+91 9220894465</motion.p>
                  <CiPhone size={18} />
                </motion.div>
              </Link>
              <Link className="w-fit" href="#">
                <motion.div className="flex justify-between items-center py-4 border-b border-foreground mb-2"
                  initial="rest"
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <motion.p variants={{ rest: { x: 0 }, hover: { x: 10 } }}>Download Resume</motion.p>
                  <BsDownload size={18} />
                </motion.div>
              </Link>
              <div className="mt-12">
                <Socials socials={socials} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <p>Where creativity meets technology to craft digital solutions and experiences that help businesses grow and scale.</p>
            <Button varient="primary" >{Email}</Button>
          </div>
        </div>
      </section>
      <section className="home-projects global">
        
        <motion.div className=""
        
        ><Carousel content={projects} /> </motion.div>      
      </section>
      <section>
        <div className="h-screen">dfsd</div>
      </section>
      
     
     
    
    </main>
  );
}
