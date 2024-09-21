import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class BreacherSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.BREACHER, 'Breacher');

        this.addSkill(
            SKILL_IDS_ENUM.FIRE_TRAP,
            'Fire Trap',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'Your trip mines now spread fire around the area of detonation for 10 seconds in a 4 meter diameter.',
                'Increases the fire effect duration by 10 seconds and increases the fire effect radius by 50%.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.MORE_FIREPOWER,
            'More Firepower',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You gain 1 more shaped charge and 4 more trip mines.',
                'You gain 2 more shaped charges and 7 more trip mines.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.KICKSTARTER,
            'Kickstarter',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Your drills and saws gain an additional 20% chance to automatically restart after breaking.',
                'Enables the ability to reset a broken drill or saw with a melee attack. The ability has a 50% chance to fix the drill or saw. The ability can only be used once per time the drill or saw is broken.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.COMBAT_ENGINEERING,
            'Combat Engineering',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'The radius of your trip mine explosion is increase by 30%.', 
                'Your trip mine damage is increase by 50%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.DRILL_SAWGEANT,
            'Drill Sawgeant',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your drill and saw timer is decreased by 15%.', 
                'Your drill and saw timer is decreased by an additional 15%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.HARDWARE_EXPERT,
            'Hardware Expert',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'The cost of deploying a sentry gun is reduced by 5%.', 
                'Your sentry guns gain a protective shield.'
            ],
            [0, 0],
        )
    }
}