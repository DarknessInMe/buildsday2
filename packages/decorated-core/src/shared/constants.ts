import { SkillPriceType, SkillPointsToAccessType } from '@buildsday2/core';

type TierType = 'TIER_1' | 'TIER_2' | 'TIER_3' | 'TIER_4';

export const SKILL_PRICE_BY_TIER: Record<TierType, SkillPriceType> = {
    TIER_1: [1, 3],
    TIER_2: [2, 4],
    TIER_3: [3, 6],
    TIER_4: [4, 8],
};

export const SKILL_POINTS_TO_ACCESS_BY_TIER: Record<TierType, SkillPointsToAccessType> = {
    TIER_1: [0, 0],
    TIER_2: [1, 1],
    TIER_3: [3, 3],
    TIER_4: [16, 18],
};