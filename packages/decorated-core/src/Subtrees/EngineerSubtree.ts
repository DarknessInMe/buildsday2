import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class EngineerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.ENGINEER, 'Engineer');

        this.addSkill(
            SKILL_IDS_ENUM.TOWER_DEFENSE,
            'Tower Defense',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'You can now carry 1 extra sentry gun.',
                'You can now carry an additional 2 extra sentry guns.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.ENGINEERING,
            'Engineering',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You can now select a less noisy version of the sentry guns, making them much less likely to be targeted by enemies.',
                'You can now toggle AP rounds on your sentry guns, lowering the rate of fire by 75%, but increasing the damage by 250% and allowing it to pierce through enemies and shields.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.JACK_OF_ALL_TRADES,
            'Jack Of All Trades',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You deploy and interact with all deployables 100% faster.',
                'You can now equip a second deployable to bring with you. If your deployable is equipped as a secondary deployable, you can only bring half of what you would bring if it was equipped as a primary deployable.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.SENTRY_TARGETING_PACKAGE,
            'Sentry Targeting Package',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your sentry guns gain a 100% increase in accuracy.', 
                'Your sentry guns rotation speed is increased by 150%. Your sentry guns also have 50% more ammunition.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.ECO_SENTRY,
            'Eco Sentry',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'The cost of deploying a sentry gun is reduced by 5%.', 
                'Your sentry guns gain 150% increased health.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.THIRD_LAW,
            'Third Law',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'The cost of deploying a sentry gun is reduced by 5%.', 
                'Your sentry guns gain a protective shield.'
            ],
            [0, 0],
        )
    }
}