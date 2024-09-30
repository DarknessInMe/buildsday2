"use client"

import { useBuilderContext } from "@/context/BuilderContext";
import { Subtree } from "../Subtree";

export const Tree = () => {
   const { currentTree } = useBuilderContext();

   return (
      <div>
         <div className="p-2 grid grid-cols-3 gap-4">
            {Object.values(currentTree.subtrees).map((subtree) => (
               <Subtree
                  key={subtree.id}
                  name={subtree.name}
                  id={subtree.id}
                  pointsWasted={subtree.pointsWasted}
                  skills={subtree.skills}
               />
            ))}
         </div>
      </div>
   )
}