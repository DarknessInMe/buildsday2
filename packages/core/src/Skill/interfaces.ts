import { IStructuredEntity } from 'src/Structure';
import { SkillStatusEnum } from './constants';
import { ISerializableEntity } from 'src/shared/interfaces';
import { ISubtree } from 'src/Subtree';

export interface ISkillSerialized {
	id: string;
	status: SkillStatusEnum;
	tier: number;
}

export interface ISkill
	extends IStructuredEntity<ISubtree, null>,
		ISerializableEntity<ISkillSerialized> {
	name: string;
	tier: number;
	description: SkillDescriptionType;
	getStatus: () => SkillStatusEnum | null;
	setStatus: (status: SkillStatusEnum | null) => ISkill;
	getUnlockPoints: () => number;
	getPrice: (status: SkillStatusEnum | null) => number | null;
	getHigherStatus: () => SkillStatusEnum | null;
	getLowerStatus: () => SkillStatusEnum | null;
	buy: () => boolean;
	remove: () => boolean;
}

/**
 * Defines prices for Skill in different statuses
 *
 * SkillPriceType[0] - price for basic Skill version
 * SkillPriceType[1] - price for aced Skill version
 */
export type SkillPriceType = [number, number];
/**
 * Defines text description for Skill in different statuses
 *
 * SkillDescriptionType[0] - description for basic Skill version
 * SkillDescriptionType[1] - description for aced Skill version
 */
export type SkillDescriptionType = [string, string];
/**
 * Defines how many skill points must be wasted within tree to get possibility to buy Skill
 *
 * SkillPointsToAccessType[0] - skill points must be wasted including Infamy bonus
 * SkillPointsToAccessType[1] - skill points must be wasted without Infamy bonus
 */
export type SkillPointsToAccessType = [number, number];
