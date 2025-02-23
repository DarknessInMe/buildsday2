import { IStructuredEntity } from 'src/Structure';
import { SkillDescriptionType, SkillPointsToAccessType, SkillPriceType } from '../types';
import { SkillStatusEnum } from '../enums';
import { ISerializableEntity } from 'src/shared/interfaces';

export interface ISkillSerialized {
	id: string;
	status: SkillStatusEnum;
	tier: number;
}

export interface ISkill extends IStructuredEntity, ISerializableEntity<ISkillSerialized> {
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
