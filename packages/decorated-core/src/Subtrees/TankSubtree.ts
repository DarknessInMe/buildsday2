import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class TankSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.TANK, 'Tank');

        this.addSkill(
            SKILL_IDS_ENUM.IRON_MAN,
            'Iron Man',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'Your total armor values is increased by 30%.',
                'Unlocks the ability to wear the Improved Combined Tactical Vest.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.SHOCK_AND_AWE,
            'Shock And Awe',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Increases the armor recovery rate for you and your crew by 25%.',
                'Enables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons knock back chance is increased the higher the total damage of the weapon is. Melee weapons knock back chance is 100%.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.BULLSEYE,
            'Bullseye',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You regenerate 5 armor for each successful headshot. This effect cannot occur more than once every 2 seconds.',
                'You regenerate an additional 20 armor for each successful headshot.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.DIE_HARD,
            'Die Hard',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You take 50% less damage while interacting with objects.', 
                'Increases the armor of all Ballistic vests by 20.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.TRANSPORTER,
            'Transporter',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You can throw bags 50% further.', 
                'For each 10 armor points the bag movement penalty is reduced by 1%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.RESILIENCE,
            'Resilience',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'Increase your armor recovery rate by 15%.', 
                'Reduce the visual effect duration of Flashbangs by 75%.'
            ],
            [0, 0],
        )
    }
}