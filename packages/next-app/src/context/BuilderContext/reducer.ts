import { TREE_IDS_ENUM } from '@buildsday2/decorated-core';
import { IBuilderState, BuilderAction, BuilderActionTypeEnum } from './typing';

export const INITIAL_STATE: IBuilderState = {
	currentTreeId: TREE_IDS_ENUM.MASTERMIND,
	totalPoints: 0,
	selectedSkillId: '',
	isInfamyBonus: false,
};

export const reducer = (state: IBuilderState, action: BuilderAction): IBuilderState => {
	switch (action.type) {
		case BuilderActionTypeEnum.SET_CURRENT_TREE: {
			return { ...state, currentTreeId: action.payload };
		}
		case BuilderActionTypeEnum.SET_TOTAL_POINTS: {
			return { ...state, totalPoints: action.payload };
		}
		case BuilderActionTypeEnum.SELECT_SKILL: {
			return { ...state, selectedSkillId: action.payload };
		}
		case BuilderActionTypeEnum.SET_INFAMY_BONUS: {
			return { ...state, isInfamyBonus: action.payload };
		}
		default: {
			return state;
		}
	}
};
