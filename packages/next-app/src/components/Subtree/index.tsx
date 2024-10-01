"use client";

import { Skill } from "@/ui/Skill";
import { ISkillSerialized } from "@buildsday2/core";
import { FC, MouseEvent } from "react";

interface ISubtreeProps {
   name: string,
   id: string,
   skills: Record<string, ISkillSerialized>,
   pointsWasted: number,
   onSkillClick: (skillId: string) => void,
   onSkillPurchase: (skillId: string) => void,
   onSkillRemove: (skillId: string) => void,
};

export const Subtree: FC<ISubtreeProps> = ({ 
   name, 
   pointsWasted, 
   skills, 
   onSkillClick,
   onSkillPurchase,
   onSkillRemove,
}) => {

   const onRightMouseButtonClick = (event: MouseEvent<HTMLDivElement>, id: string) => {
      event.preventDefault();
      onSkillRemove(id);
   }

   return (
      <div>
         <h2 className="text-white text-center text-lg mb-4">
            {name} {pointsWasted}
         </h2>
         <div className="grid grid-cols-2 gap-3">
            {Object.values(skills).map(({ id, name, status }) => (
               <div
                  key={id}
                  onClick={() => onSkillClick(id)}
                  onDoubleClick={() => onSkillPurchase(id)}
                  onContextMenu={(event) => onRightMouseButtonClick(event, id)}
                  className="first:col-span-2 last:col-span-2 flex justify-center"
               >
                  <Skill name={name} status={status}/>
               </div>
            ))}
         </div>
      </div>
   )
};