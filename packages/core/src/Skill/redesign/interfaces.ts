import { IStructuredEntity } from 'src/Structure';
import { SkillDescriptionType, SkillPointsToAccessType, SkillPriceType } from '../types';
import { SkillStatusEnum } from '../enums';

export interface ISkill extends IStructuredEntity {
	name: string;
	tier: number;
	description: SkillDescriptionType;
	getStatus: () => SkillStatusEnum | null;
	setStatus: (status: SkillStatusEnum | null) => ISkill;
	getUnlockPoints: () => number;
	getPrice: (status: SkillStatusEnum | null) => number;
	getHigherStatus: () => SkillStatusEnum | null;
	getLowerStatus: () => SkillStatusEnum | null;
	buy: () => boolean;
	remove: () => boolean;
}
