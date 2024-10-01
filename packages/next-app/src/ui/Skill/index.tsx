"use client";

import { FC } from "react";
import clsx from "clsx";
import { SkillStatusEnum } from '@buildsday2/core';
// import { useBuilderContext } from "@/context/BuilderContext";

interface ISkillProps {
   name: string;
   className?: string;
   status?: SkillStatusEnum;
}

const getStylesByStatus = (status: SkillStatusEnum) => {
   switch(status) {
      case SkillStatusEnum.NULL: {
         return "bg-blue-950/20";
      };
      case SkillStatusEnum.BASIC: {
         return "bg-blue-900";
      }
      case SkillStatusEnum.ACED: {
         return "bg-blue-800"
      }
   }
};

export const Skill: FC<ISkillProps> = ({ name, className = '', status = SkillStatusEnum.NULL }) => {
   return (
      <div className={clsx("flex flex-col items-center", className)}>
         <div 
            className={clsx("size-16 rounded flex justify-center items-center", getStylesByStatus(status))}
         >
            <div className="size-8 bg-white rounded-full"/>
         </div>
         <p className="mt-1 text-center">{name}</p>
      </div>
   )
};