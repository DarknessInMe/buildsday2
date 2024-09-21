import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ShotgunnerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.SHOTGUNNER, 'Shotgunner');

        this.addSkill(
            SKILL_IDS_ENUM.OVERKILL,
            'Overkill',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'When you kill an enemy with a shotgun or the OVE9000 portable saw, you receive a 75% damage increase for 20 seconds.',
                'The damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.FAR_AWAY,
            'Far Away',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Your accuracy bonus while aiming down sights with Shotguns is increased by 40%.',
                'You gain a 50% increased effective range with Shotguns when aiming down sights.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.CLOSE_BY,
            'Close By',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You can now hip-fire with your Shotguns while sprinting.',
                'Your rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Shotguns with magazines have their magazine sizes increased by 15 shells.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.SHOTGUN_CQB,
            'Shotgun CQB',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You reload shotguns 15% faster.', 
                'You reload shotguns 35% faster. You gain a 125% increase steel sight speed when using Shotguns.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.SHOTGUN_IMPACT,
            'Shotgun Impact',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your weapon stability with all shotguns is increased by 8. You deal 5% more damage with shotguns.', 
                'You deal an additional 10% more damage with shotguns.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.UNDERDOG,
            'Underdog',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'When three or more enemies are within 18 meters of you, you receive a 15% damage bonus that lasts for 7 seconds.', 
                'When three or more enemies are within 18 meters of you, you also receive a 10% damage reduction that lasts for 7 seconds.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
};