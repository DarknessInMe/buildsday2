import { BuilderType } from '@/shared/interfaces';
import { SkillDescriptionType, SkillStatusEnum } from '@buildsday2/core';
import { SKILL_IDS_ENUM, SUBTREE_IDS_ENUM, TREE_IDS_ENUM } from '@buildsday2/decorated-core';

export interface IBuilderState {
	currentTreeId: TREE_IDS_ENUM;
	totalPoints: number;
	selectedSkillId: string;
}

export interface ISkillState {
	id: SKILL_IDS_ENUM;
	name: string;
	description: SkillDescriptionType;
	price: number | null;
	status: SkillStatusEnum | null;
}

export interface ISubtreeState {
	id: SUBTREE_IDS_ENUM;
	name: string;
	points: number;
	skills: ISkillState[];
}
export interface ITreeState {
	id: TREE_IDS_ENUM;
	name: string;
	subtrees: ISubtreeState[];
}

export enum BuilderActionTypeEnum {
	SET_CURRENT_TREE = 'SET_CURRENT_TREE',
	SET_TOTAL_POINTS = 'SET_TOTAL_POINTS',
	SELECT_SKILL = 'SELECT_SKILL',
}

export type BuilderAction =
	| { type: BuilderActionTypeEnum.SET_CURRENT_TREE; payload: TREE_IDS_ENUM }
	| { type: BuilderActionTypeEnum.SET_TOTAL_POINTS; payload: number }
	| { type: BuilderActionTypeEnum.SELECT_SKILL; payload: string };

export type SubscriberType = (payload: BuilderType) => void;
