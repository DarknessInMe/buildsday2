"use client";

import { useMemo } from "react";
import { useBuilderContext } from "@/context/BuilderContext";

export const TreeSidebar = () => {
   const { builderState, builderRef } = useBuilderContext();

   const skillData = useMemo(() => {
      if (!builderState.selectedSkillId) {
         return null;
      }

      const result = builderRef.current.query(builderState.selectedSkillId);

      return result ? result.skill : null;
   }, [builderState.selectedSkillId]);

   return (
      <div>
         <h2 className="mb-8">Points remaining: {builderState.totalPoints}</h2>
         <div className="mb-8">
            Tip: use Mouse Double Click to buy skill, Mouse Right Button Click to remove skill
         </div>
         {skillData ? (
            <div>
               <h3>Basic {skillData.price[0]}</h3>
               <p>{skillData.description[0]}</p>
               <h3>Aced {skillData.price[1]}</h3>
               <p>{skillData.description[1]}</p>
            </div>
         ) : null}
      </div>
   )
};