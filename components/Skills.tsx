import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Technology } from "@/typings";

type Props = {
  skills: Technology[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto
        items-center overflow-visible"
    >
      <h3 className="subTitle">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs px-5 sm:text-sm">
        Hover over skills
      </h3>

      <div className="grid grid-cols-3 gap-5 pt-[40px] sm:pt-[100px] sm:grid-cols-4 sm:gap-5">
        {skills
          ?.slice(0, 8)
          .map((skill) => <Skill key={skill._id} skill={skill} />)}
        {skills
          ?.slice(8, skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  );
}
