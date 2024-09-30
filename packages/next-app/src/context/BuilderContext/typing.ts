import { ITreeSerialized } from "@buildsday2/core";

export interface IBuilderState {
   currentTree: ITreeSerialized,
   totalPoints: number,
   selectedSkillId: string,
};

export enum BuilderActionTypeEnum {
   SET_CURRENT_TREE = 'SET_CURRENT_TREE',
   SET_TOTAL_POINTS = 'SET_TOTAL_POINTS',
   SELECT_SKILL = 'SELECT_SKILL',
};

export type BuilderAction = 
   | { type: BuilderActionTypeEnum.SET_CURRENT_TREE, payload: ITreeSerialized }
   | { type: BuilderActionTypeEnum.SET_TOTAL_POINTS, payload: number }
   | { type: BuilderActionTypeEnum.SELECT_SKILL, payload: string }