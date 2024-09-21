import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class ArtfulDodgerSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.ARTFUL_DODGER, 'Artful Dodger');

        this.addSkill(
            SKILL_IDS_ENUM.SNEAKY_BASTARD,
            'Sneaky Bastard',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'You gain a 1% dodge chance for every 3 points of concealment under 35 up to 10%.',
                'You gain a 1% dodge chance for every 1 point of concealment under 35 up to 10%.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.DIRE_NEED,
            'Dire Need',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'When your armor breaks, the first shot on every enemy will cause that enemy to stagger. This effect ends when your armor recovers.',
                'The effect persists for 6 seconds after your armor has recovered.',
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.SHOCKPROOF,
            'Shockproof',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'When tased, the shock effect has a 30% chance to backfire on the Taser, knocking them back.',
                'When tased, you are able to free yourself from the taser interacting with it within 2 seconds of getting tased.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.PARKOUR,
            'Parkour',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain 10% additional movement speed and 20% increased speed while climbing ladders.', 
                'You gain the ability to sprint in any direction. Run and reload - you can reload your weapons while sprinting.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.INNER_POCKETS,
            'Inner Pockets',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Increases the concealment of melee weapons by 2.', 
                'Increases the concealment of all ballistic vests by 4.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.DUCK_AND_COVER,
            'Duck And Cover',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'Your stamina starts regenerating 25% earlier and 25% faster. You also sprint 25% faster.', 
                'You have a 10% increased chance to dodge while sprinting. You gain 15% chance to dodge while ziplining.'
            ],
            [0, 0],
        )
    }
}