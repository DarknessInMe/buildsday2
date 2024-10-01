"use client"

import { useBuilderContext } from "@/context/BuilderContext";
import { Subtree } from "../Subtree";
import { TreeSidebar } from "../TreeSidebar";

export const Tree = () => {
   const { 
      builderState, 
      selectSkillById, 
      buySkill,
      removeSkill,
   } = useBuilderContext();

   return (
      <div className="flex">
         <div className="p-2 grid grid-cols-3 gap-4 w-2/3">
            {Object.values(builderState.currentTree.subtrees).map((subtree) => (
               <Subtree
                  key={subtree.id}
                  name={subtree.name}
                  id={subtree.id}
                  pointsWasted={subtree.pointsWasted}
                  skills={subtree.skills}
                  onSkillClick={selectSkillById}
                  onSkillPurchase={buySkill}
                  onSkillRemove={removeSkill}
               />
            ))}
         </div>
         <div className="w-1/3 p-2">
            <TreeSidebar />
         </div>
      </div>
   )
}