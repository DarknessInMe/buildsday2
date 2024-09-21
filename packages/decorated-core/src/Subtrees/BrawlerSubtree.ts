import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class BrawlerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.BRAWLER, 'Brawler');

        this.addSkill(
            SKILL_IDS_ENUM.FRENZY,
            'Frenzy',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'You only get 30% of your maximum health and cannot heal above it but you take 10% less damage and healing received is reduced by 75%.',
                'Damage taken is now reduced by 25% and healing received is reduced by 0%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.COUNTERSTRIKE,
            'Counterstrike',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'When charging your melee weapon you will counterattack enemies that try to strike you, knocking them down. The knockdown does not deal any damage.',
                'You gain the ability to counter attack cloakers and their kicks.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.BERSERKER,
            'Berserker',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'The lower your health, the more damage you do. When your health is below 50%, you will do up to 250% more melee and saw damage.',
                'The lower your health, the more damage you do. When your health is below 50%, you will do up to 100% more damage with ranged weapons as well.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.BLOODTHIRST,
            'Bloodthirst',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Every kill you get will increase your next melee attack damage by 100%, up to a maximum of 1600%. This effect gets reset when you kill an enemy with a melee attack.', 
                'Whenever you kill an enemy with a melee attack, you will gain a 50% increase in reload speed for 10 seconds.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.PUMPING_IRON,
            'Pumping Iron',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your melee attacks against non-special enemies do 100% more damage.', 
                'Your melee attacks against special enemies do 100% more damage.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.MARTIAL_ARTS,
            'Martial Arts',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'You take 50% less damage from all melee attacks. Because of training.', 
                'You are 50% more likely to knock down enemies with a melee strike.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
}