"use client"
import { FC, createContext, useContext, useRef, useState, useCallback, MutableRefObject } from "react";
import { ReactNode } from "react";
import { TREE_IDS_ENUM, Root } from '@buildsday2/decorated-core';
import { IRootSerialized, ITreeSerialized } from "@buildsday2/core";

interface IBuilderProviderProps {
   children: ReactNode;
}

export interface IBuilderContextData {
   currentTree: ITreeSerialized;
   builderRef: MutableRefObject<Root>;
   serializedTreeRef: MutableRefObject<IRootSerialized>;
   changeCurrentTree: (treeId: string) => void;
   selectSkillById: (skillId: string) => void;
   totalPoints: number;
   selectedSkillId: string | null;
}

const BuilderContext = createContext<IBuilderContextData>(null!);

export const BuilderProvider: FC<IBuilderProviderProps> = ({ children }) => {
   const builderRef = useRef(new Root());
   const serializedTreeRef = useRef(builderRef.current.serialize());

   const [currentTree, setCurrentTree] = useState(() => serializedTreeRef.current.trees[TREE_IDS_ENUM.MASTERMIND]);
   const [totalPoints, /**setTotalPoints **/] = useState(() => serializedTreeRef.current.points);
   const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

   const changeCurrentTree = useCallback((treeId: string) => {
      if (!(treeId in serializedTreeRef.current.trees)) {
         return;
      }

      setCurrentTree(serializedTreeRef.current.trees[treeId]);
   }, []);

   const selectSkillById = useCallback((skillId: string) => {
      setSelectedSkillId(skillId);
   }, []);

   return (
      <BuilderContext.Provider value={{
         currentTree,
         builderRef,
         serializedTreeRef,
         changeCurrentTree,
         selectSkillById,
         totalPoints,
         selectedSkillId,
      }}>
         {children}
      </BuilderContext.Provider>
   )
};

export const useBuilderContext = () => {
   return useContext(BuilderContext);
}