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
}

const BuilderContext = createContext<IBuilderContextData>(null!);

export const BuilderProvider: FC<IBuilderProviderProps> = ({ children }) => {
   const builderRef = useRef(new Root());
   const serializedTreeRef = useRef(builderRef.current.serialize());

   const [currentTree, setCurrentTree] = useState(() => serializedTreeRef.current.trees[TREE_IDS_ENUM.MASTERMIND]);

   const changeCurrentTree = useCallback((treeId: string) => {
      if (!(treeId in serializedTreeRef.current.trees)) {
         return;
      }

      setCurrentTree(serializedTreeRef.current.trees[treeId]);
   }, []);

   return (
      <BuilderContext.Provider value={{
         currentTree,
         builderRef,
         serializedTreeRef,
         changeCurrentTree,
      }}>
         {children}
      </BuilderContext.Provider>
   )
};

export const useBuilderContext = () => {
   return useContext(BuilderContext);
}