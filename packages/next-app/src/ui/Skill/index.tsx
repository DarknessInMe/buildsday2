"use client";

import { FC } from "react";
import clsx from "clsx";
// import { useBuilderContext } from "@/context/BuilderContext";

interface ISkillProps {
   name: string;
   className?: string;
}


export const Skill: FC<ISkillProps> = ({ name, className = '' }) => {
   return (
      <div className={clsx(className)}>
         {name}
      </div>
   )
};