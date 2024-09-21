import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class GunslingerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.GUNSLINGER, 'Gunslinger');

        this.addSkill(
            SKILL_IDS_ENUM.TRIGGER_HAPPY,
            'Trigger Happy',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'For every hit with a pistol you gain 120% damage boost that lasts for 2 seconds. Stacks up to 1 times.',
                'Increases the damage boost duration to 4 seconds.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.ONE_HANDED_TALENT,
            'One Handed Talent',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'The base damage of all pistols is increased by 5.',
                'The base damage of all pistols is increased by an additional 10 damage.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.DESPERADO,
            'Desperado',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Each successful pistol hit gives you a 10% increased accuracy bonus for 10 seconds and can stack 4 times.',
                'You reload all pistols 50% faster.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.GUN_NUT,
            'Gun Nut',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your pistol magazine sizes are increased by 5 bullets.', 
                'You gain a 50% increased rate of fire with pistols.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.AKIMBO,
            'Akimbo',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Your Akimbo weapons\' stability penalty is reduced by 8.', 
                'Your Akimbo weapons\' stability penalty is reduced by an additional 8 and they also have a 50% increased ammo capacity.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.EQUILIBRIUM,
            'Equilibrium',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'Decreases the time it takes to draw and holster pistols by 33%.', 
                'You gain a 8 weapon accuracy with pistols.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
}