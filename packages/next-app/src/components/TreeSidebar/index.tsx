"use client";

import { useMemo } from "react";
import { useBuilderContext } from "@/context/BuilderContext";

export const TreeSidebar = () => {
   const { totalPoints, selectedSkillId, builderRef } = useBuilderContext();

   const skillData = useMemo(() => {
      if (!selectedSkillId) {
         return null;
      }

      const result = builderRef.current.query(selectedSkillId);

      return result ? result.skill : null;
   }, [selectedSkillId]);

   return (
      <div>
         <h2 className="mb-8">Points remaining: {totalPoints}</h2>
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