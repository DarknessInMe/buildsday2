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
      <div className={clsx("flex flex-col items-center", className)}>
         <div className="size-16 bg-blue-600 rounded"/>
         <p className="mt-1 text-center">{name}</p>
      </div>
   )
};