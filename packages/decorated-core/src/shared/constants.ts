import { SkillPriceType, SkillPointsToAccessType } from '@buildsday2/core';
import { TIERS_ENUM } from './enums';

export const SKILL_PRICE_BY_TIER: Record<TIERS_ENUM, SkillPriceType> = {
	[TIERS_ENUM.FIRST]: [1, 3],
	[TIERS_ENUM.SECOND]: [2, 4],
	[TIERS_ENUM.THIRD]: [3, 6],
	[TIERS_ENUM.FOURTH]: [4, 8],
};

export const SKILL_POINTS_TO_ACCESS_BY_TIER: Record<TIERS_ENUM, SkillPointsToAccessType> = {
	[TIERS_ENUM.FIRST]: [0, 0],
	[TIERS_ENUM.SECOND]: [1, 1],
	[TIERS_ENUM.THIRD]: [3, 3],
	[TIERS_ENUM.FOURTH]: [16, 18],
};

export const INITIAL_POINTS_COUNT = 180;
