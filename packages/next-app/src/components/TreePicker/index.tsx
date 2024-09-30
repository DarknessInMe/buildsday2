"use client";

import { useMemo } from "react";
import { useBuilderContext } from "@/context/BuilderContext";
import clsx from 'clsx';

export const TreePicker = () => {
   const { serializedTreeRef, changeCurrentTree, builderState } = useBuilderContext();

   const treePicker = useMemo(() => {
      return Object.values(serializedTreeRef.current.trees).map((tree) => ({
         name: tree.name,
         id: tree.id,
      }))
   }, []);

   return (
      <div className="flex border-0 border-b-2 border-b-white ">
         {treePicker.map(({ id, name }) => (
            <button 
               key={id}
               onClick={() => changeCurrentTree(id)}
               className={clsx(
                  "text-xl p-2", 
                  builderState.currentTree.id === id ? "bg-white text-black" : "bg-transparent text-white",
               )}
            >
                  {name}
               </button>
         ))}
      </div>
   )
};