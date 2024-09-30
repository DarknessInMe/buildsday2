"use client"

import { useBuilderContext } from "@/context/BuilderContext";
import { Subtree } from "../Subtree";
import { TreeSidebar } from "../TreeSidebar";

export const Tree = () => {
   const { currentTree, selectSkillById } = useBuilderContext();

   return (
      <div className="flex">
         <div className="p-2 grid grid-cols-3 gap-4 w-2/3">
            {Object.values(currentTree.subtrees).map((subtree) => (
               <Subtree
                  key={subtree.id}
                  name={subtree.name}
                  id={subtree.id}
                  pointsWasted={subtree.pointsWasted}
                  skills={subtree.skills}
                  onSkillClick={selectSkillById}
               />
            ))}
         </div>
         <div className="w-1/3 p-2">
            <TreeSidebar />
         </div>
      </div>
   )
}