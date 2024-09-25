"use client"

import { useBuilderContext } from "@/context/BuilderContext";
import { Subtree } from "../Subtree";

export const Tree = () => {
   const { currentTree } = useBuilderContext();

   return (
      <div>
         <h1>{currentTree.name}</h1>
         <div className="flex">
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