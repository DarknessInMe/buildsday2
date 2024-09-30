"use client";

import { Skill } from "@/ui/Skill";
import { ISkillSerialized } from "@buildsday2/core";
import { FC } from "react";

interface ISubtreeProps {
   name: string,
   id: string,
   skills: Record<string, ISkillSerialized>,
   pointsWasted: number,
   onSkillClick: (skillId: string) => void,
};

export const Subtree: FC<ISubtreeProps> = ({ name, pointsWasted, skills, onSkillClick }) => {
   return (
      <div>
         <h2 className="text-white text-center text-lg mb-4">
            {name} {pointsWasted}
         </h2>
         <div className="grid grid-cols-2 gap-3">
            {Object.values(skills).map(({ id, name }) => (
               <div
                  key={id}
                  onClick={() => onSkillClick(id)}
                  className="first:col-span-2 last:col-span-2 flex justify-center"
               >
                  <Skill name={name}/>
               </div>
            ))}
         </div>
      </div>
   )
};