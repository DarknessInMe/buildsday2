import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class SilentKillerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.SILENT_KILLER, 'Silent Killer');

        this.addSkill(
            SKILL_IDS_ENUM.UNSEEN_STRIKE,
            'Unseen Strike',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'If you do not lose any armor or health for 4 seconds, you gain 35% critical hit chance for 6 seconds.',
                'The critical hit chance duration is increased to 18 seconds.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.LOW_BLOW,
            'Low Blow',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You gain a 3% critical hit chance for every 3 points of concealment under 35 up to 30%.',
                'You gain 3% critical hit chance for every 1 point of concealment under 35 up to 30%.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.HIGH_VALUE_TARGET,
            'High Value Target',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Enemies you mark take 15% more damage.',
                'Enemies you mark take an additional 50% damage when further away than 10 meters. Increases the duration of marked enemies by 100% and you can now mark specials by aiming at them with any weapon.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.OPTICAL_ILLUSIONS,
            'Optical Illusions',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You are 35% less likely to be targeted by enemies.', 
                'You gain 1 concealment for each silenced weapon you equip and reduces the concealment penalty of silencers by 2.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.THE_PROFESSIONAL,
            'The Professional',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain 8 weapon stability and 100% snap to zoom speed increase with silenced weapons.', 
                'You gain 12 weapon accuracy with silenced weapons.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.SECOND_WIND,
            'Second Wind',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'When your armor breaks your movement speed is increase by 30% for 5 seconds.', 
                'This effect also applies to your crew when triggered.'
            ],
            [0, 0],
        )
    }
}