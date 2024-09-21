import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ShinobiSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.SHINOBI, 'Shinobi');

        this.addSkill(
            SKILL_IDS_ENUM.ECM_SPECIALIST,
            'ECM Specialist',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'You can now place 2 ECM jammers instead of just one.',
                'The ECM jammer duration is increased by an additional 25% and the ECM feedback duration lasts 25% longer. Pagers are delayed by the ECM jammer.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_4,
        );
        this.addSkill(
            SKILL_IDS_ENUM.NIMBLE,
            'Nimble',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You gain the ability to disable 1 camera from detecting you and your crew. Effect lasts for 25 seconds.',
                'You lockpick 100% faster. You also gain the ability to lockpick safes.',
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        );
        this.addSkill(
            SKILL_IDS_ENUM.ECM_OVERDRIVE,
            'ECM Overdrive',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Your ECM jammer and feedback duration is increased by 25%.',
                'Your ECM jammer can now also be used to open certain electronic doors.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_3,
        )
        this.addSkill(
            SKILL_IDS_ENUM.CLEANER,
            'Cleaner',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain 1 additional body bag in your inventory. Also increases the body bag inventory space to 3 from 2.', 
                'You gain the ability to place 2 body bag cases.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.SIXTH_SENSE,
            'Sixth Sense',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'You gain the ability to automatically mark enemies within a 10 meter radius around you after standing still for 3.5 seconds while in stealth.', 
                'You gain access to all insider assets. Cleaning costs after killing a civilian is reduced by 75%.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_2,
        )
        this.addSkill(
            SKILL_IDS_ENUM.CHAMELEON,
            'Chameleon',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'Increases the time before you start getting detected by 25% while in casing mode. You can also mark enemies while in casing mode.', 
                'You can pick up items while in casing mode. You also gain 30% more value to items and cash that you pick up.'
            ],
            SKILL_POINTS_TO_ACCESS_BY_TIER.TIER_1,
        )
    }
}