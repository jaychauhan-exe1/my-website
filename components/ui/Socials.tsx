"use client";
import Link from 'next/link';
import { IoLogoInstagram,  } from "react-icons/io";
import { RxDiscordLogo } from "react-icons/rx";
import { DiGithubBadge } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import {motion} from 'motion/react';

type SocialProps = {
    socials: {
        name: string;
        link: string;
    }[];
}

export const Socials = ({socials}:SocialProps) => {
  return (
    <div className="flex gap-4">
        {socials.map((social) => (
            <Link href={social.link} key={social.name} target="_blank" rel="noopener noreferrer" className="">
                <motion.div initial="rest"
                    whileHover="hover"
                    variants={{
                        rest: { y: 0 },
                        hover: { y: -5 },
                    }}
                    className="cursor-pointer p-2 bg-primary/20 text-foreground transition-colors duration-200 w-fit rounded-full border border-foreground">
               
                    {social.name === "GitHub" && <DiGithubBadge size={24} />}
                    {social.name === "Instagram" && <IoLogoInstagram size={24} />}
                    {social.name === "Discord" && <RxDiscordLogo size={24} />}
                    {social.name === "LinkedIn" && <CiLinkedin size={24} />}
                    
                </motion.div>
            </Link>
        ))}
    </div>
  )
}
