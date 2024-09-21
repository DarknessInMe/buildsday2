import { SkillPriceType } from '@buildsday2/core';

type TierType = 'TIER_1' | 'TIER_2' | 'TIER_3' | 'TIER_4';

export const SKILL_PRICE_BY_TIER: Record<TierType, SkillPriceType> = {
    TIER_1: [1, 3],
    TIER_2: [2, 4],
    TIER_3: [3, 6],
    TIER_4: [4, 8],
};