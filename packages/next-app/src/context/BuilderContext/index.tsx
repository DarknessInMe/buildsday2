"use client"
import { 
   FC, 
   MutableRefObject,
   createContext,
   useContext, 
   useRef, 
   useCallback, 
   useReducer,
   useEffect, 
} from "react";
import { ReactNode } from "react";
import { TREE_IDS_ENUM, Root } from '@buildsday2/decorated-core';
import { IRootSerialized } from "@buildsday2/core";
import { INITIAL_STATE, reducer } from "./reducer";
import { BuilderActionTypeEnum, IBuilderState } from "./typing";

interface IBuilderProviderProps {
   children: ReactNode;
}

export interface IBuilderContextData {
   builderRef: MutableRefObject<Root>;
   serializedTreeRef: MutableRefObject<IRootSerialized>;
   changeCurrentTree: (treeId: string) => void;
   selectSkillById: (skillId: string) => void;
   buySkill: (skillId: string) => void;
   builderState: IBuilderState;
}

const BuilderContext = createContext<IBuilderContextData>(null!);

export const BuilderProvider: FC<IBuilderProviderProps> = ({ children }) => {
   const builderRef = useRef(new Root());
   const serializedTreeRef = useRef(builderRef.current.serialize());

   const [state, dispatch] = useReducer(reducer, INITIAL_STATE, () => ({
      currentTree: serializedTreeRef.current.trees[TREE_IDS_ENUM.MASTERMIND],
      totalPoints: serializedTreeRef.current.points,
      selectedSkillId: '',
   }));

   useEffect(() => {
      const unsubscribe = builderRef.current.onChange((...args) => {
         console.log(args);
      });

      return () => {
         unsubscribe();
      }
   }, [])

   const changeCurrentTree = useCallback((treeId: string) => {
      if (!(treeId in serializedTreeRef.current.trees)) {
         return;
      }

      dispatch({
         type: BuilderActionTypeEnum.SET_CURRENT_TREE,
         payload: serializedTreeRef.current.trees[treeId]
      });
   }, []);

   const selectSkillById = useCallback((skillId: string) => {
      dispatch({
         type: BuilderActionTypeEnum.SELECT_SKILL,
         payload: skillId,
      })
   }, []);

   const buySkill = useCallback((skillId: string) => {
      builderRef.current.buySkill(skillId);
   }, []);

   return (
      <BuilderContext.Provider value={{
         builderRef,
         serializedTreeRef,
         changeCurrentTree,
         buySkill,
         selectSkillById,
         builderState: state,
      }}>
         {children}
      </BuilderContext.Provider>
   )
};

export const useBuilderContext = () => {
   return useContext(BuilderContext);
}