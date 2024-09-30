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
         {skillData ? (
            <div>
               <h3>Basic</h3>
               <p>{skillData.description[0]}</p>
               <h3>Aced</h3>
               <p>{skillData.description[1]}</p>
            </div>
         ) : null}
      </div>
   )
};