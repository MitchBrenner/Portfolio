import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          // Initial state
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          // Final state
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="hover:opacity-70 transition-opacity ease-in-out duration-200"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            // Initial state
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            // Final state
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          className="flex flex-row items-center cursor-pointer"
        >
          {/* This cause hydration error */}
          {/* <SocialIcon className='cursor-pointer hover:opacity-70 transition-opacity ease-in-out duration-200' network='email' fgColor='gray' bgColor='transparent'/> */}
          {/* <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p> */}
        </motion.div>
      </Link>
    </header>
  );
}
