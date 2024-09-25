"use client";

import { Skill } from "@/ui/Skill";
import { ISkillSerialized } from "@buildsday2/core";
import { FC } from "react";
// import { useBuilderContext } from "@/context/BuilderContext";

interface ISubtreeProps {
   name: string,
   id: string,
   skills: Record<string, ISkillSerialized>,
   pointsWasted: number,
}

export const Subtree: FC<ISubtreeProps> = ({ name, pointsWasted, skills }) => {
   return (
      <div>
         <h3>{name} {pointsWasted}</h3>
         <div>
            {Object.values(skills).map(({ id, name }) => (
               <Skill name={name} key={id} />
            ))}
         </div>
      </div>
   )
};