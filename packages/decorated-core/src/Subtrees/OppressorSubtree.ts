import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class OppressorSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.OPPRESSOR, 'Oppressor');

        this.addSkill(
            SKILL_IDS_ENUM.BODY_EXPERTISE,
            'Body Expertise',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                '30% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
                '90% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.LOCK_N_LOAD,
            'Lock N\' Load',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You can now hip-fire with your weapons while sprinting.',
                'Killing 2 enemies with SMGs, LMGs, Assault Rifles or Special Weapons set on automatic fire mode will increase your next reload speed by up to 100%. This bonus is reduced by 1% for each bullet above 20 in the total magazine size, down to a minimum of 40% reload speed increase.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.SUREFIRE,
            'Surefire',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Your SMGs, LMGs and Assault Rifles gain 15 more bullets in their magazine. This does not affect the "Lock n\' Load" Ace skill.',
                'Your ranged weapons can now pierce through enemy body armor.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.HEAVY_IMPACT,
            'Heavy Impact',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your shots have a 5% chance to stagger all enemies except Bulldozers and Captain Winters.', 
                'Increase your stagger chance to 20%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.FIRE_CONTROL,
            'Fire Control',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain 12 weapon accuracy while firing from the hip.', 
                'Your accuracy penalty is decreased by 20% when shooting while moving.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.STEADY_GRIP,
            'Steady Grip',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'You gain 8 weapon accuracy.', 
                'You gain 16 weapon stability.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
}