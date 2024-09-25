"use client";

import { useMemo } from "react";
import { useBuilderContext } from "@/context/BuilderContext";

export const TreePicker = () => {
   const { serializedTreeRef, changeCurrentTree } = useBuilderContext();
   const treePicker = useMemo(() => {
      return Object.values(serializedTreeRef.current.trees).map((tree) => ({
         name: tree.name,
         id: tree.id,
      }))
   }, []);

   return (
      <div className="flex">
         {treePicker.map(({ id, name }) => (
            <button 
               key={id}
               onClick={() => changeCurrentTree(id)}
            >
                  {name}
               </button>
         ))}
      </div>
   )
};