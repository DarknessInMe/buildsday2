import { IBuilderState, BuilderAction, BuilderActionTypeEnum } from "./typing";

export const INITIAL_STATE: IBuilderState = {
   currentTree: null!,
   totalPoints: 0,
   selectedSkillId: '',
};

export const reducer = (state: IBuilderState, action: BuilderAction): IBuilderState => {
   switch(action.type) {
      case BuilderActionTypeEnum.SET_CURRENT_TREE: {
         return { ...state, currentTree: action.payload };
      }
      case BuilderActionTypeEnum.SET_TOTAL_POINTS: {
         return { ...state, totalPoints: action.payload };
      }
      case BuilderActionTypeEnum.SELECT_SKILL: {
         return { ...state, selectedSkillId: action.payload };
      }
      default: {
         return state;
      }
   }
}