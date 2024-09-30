"use client";

import { useMemo } from "react";
import { useBuilderContext } from "@/context/BuilderContext";
import clsx from 'clsx';

const isActiveClassName = "bg-white text-black";

export const TreePicker = () => {
   const { serializedTreeRef, changeCurrentTree, currentTree } = useBuilderContext();

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
               className={clsx("text-white text-xl p-2", currentTree.id ===  id && isActiveClassName)}
            >
                  {name}
               </button>
         ))}
      </div>
   )
};