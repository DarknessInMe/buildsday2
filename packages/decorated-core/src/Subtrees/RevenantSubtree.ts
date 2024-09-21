import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class RevenantSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.REVENANT, 'Revenant');

        this.addSkill(
            SKILL_IDS_ENUM.MESSIAH,
            'Messiah',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'While in bleedout, you can revive yourself if you kill an enemy. You only have 1 charge.',
                'Your Messiah charge is replenished whenever you use a doctor bag.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.SWAN_SONG,
            'Swan Song',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Instead of getting downed instantly, you gain the ability to keep on fighting for 3 seconds with a 60% movement penalty before going down.',
                'Increases the duration of Swan Song by 3 seconds. Ammunition won\'t be depleted while the effect is active.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.FEIGN_DEATH,
            'Feign Death',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'When you get downed, you have a 15% chance to instantly get revived.',
                'The chance to get instantly revived is increased by an additional 30%.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.RUNNING_FROM_DEATH,
            'Running From Death',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You reload and swap weapons 100% faster for 10 seconds after being revived.', 
                'You move 30% faster for 10 seconds after being revived.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.UP_YOU_GO,
            'Up You Go',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You take 30% less damage for 10 seconds after being revived.', 
                'You receive 40% more health when revived.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.NINE_LIVES,
            'Nine Lives',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'You gain a 50% increase to bleedout health.', 
                'You gain the ability to get downed 1 more time before going into custody.'
            ],
            [0, 0],
        )
    }
}