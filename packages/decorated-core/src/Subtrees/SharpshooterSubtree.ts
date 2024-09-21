import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class SharpshooterSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.SHARPSHOOTER, 'Sharpshooter');

        this.addSkill(
            SKILL_IDS_ENUM.GRAZE,
            'Graze',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'Snipers that hit their target deal 20% of the damage dealt in a 100cm radius around the bullet trajectory.',
                'If a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon\'s damage instead of 20%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.AMMO_EFFICIENCY,
            'Ammo Efficiency',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Getting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot mode.',
                'The amount of headshots required is reduced to 2.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.AGGRESSIVE_RELOAD,
            'Aggressive Reload',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Increases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.',
                'Any killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.RIFLEMAN,
            'Rifleman',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your snap to zoom is 100% faster with all weapons. Your movement speed is unhindered while using steel sight.', 
                'Your weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.MARKSMAN,
            'Marksman',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.', 
                'You gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.STABLE_SHOT,
            'Stable Shot',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'You gain 8 weapon stability.', 
                'You gain 16 weapon accuracy while standing still.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
};