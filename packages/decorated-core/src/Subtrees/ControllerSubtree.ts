import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ControllerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.CONTROLLER, 'Controller');
        
        this.addSkill(
            SKILL_IDS_ENUM.HOSTAGE_TAKER,
            'Hostage Taker',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'Having at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.', 
                'Having at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.STOCKHOLM_SYNDROME,
            'Stockholm Syndrome',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Civilians are intimidated by the noise you make and remain intimidated 50% longer.', 
                'Your hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.PARTNERS_IN_CRIME,
            'Partners In Crime',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Having a converted enemy increases your movement speed by 10%. Your converted enemy takes 45% less damage.',
                'Having a converted enemy increases your health by 30%. Your converted enemy takes an additional 54% less damage.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.CONFIDENT,
            'Confident',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'The power and range of your intimidation is increased by 50%.', 
                'You can now have 2 converted enemies at the same time.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.JOKER,
            'Joker',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You can convert a non-special enemy to fight on your side. This cannot be done during stealth and the enemy must have surrendered in order for you to convert them. You can only convert one non-special enemy at a time.', 
                'Your converted enemy deal 35% more damage. The time taken to convert an enemy is reduced by 65%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.FORCED_FRIENDSHIP,
            'Forced Friendship',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'Increases your supply of cable ties by 4. You can cable tie hostages 75% faster.', 
                'You and your crew gain 0.5 damage absorption for each hostage you have. This effect stacks with up to a maximum of 8 hostages. Note: This skill does not stack with other players Forced Friendship skills.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
}