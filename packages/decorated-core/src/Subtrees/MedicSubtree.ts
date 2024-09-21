import { BasicSubtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER } from '../shared/constants';

export class MedicSubtree extends BasicSubtree {
    constructor() {
        super(SUBTREE_IDS_ENUM.MEDIC, 'Medic');

        this.addSkill(
            SKILL_IDS_ENUM.INSPIRE,
            'Inspire',
            SKILL_PRICE_BY_TIER.TIER_4,
            [
                'You revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.', 
                'There is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than once every 20 seconds.'
            ],
            [16, 18],
        );
        this.addSkill(
            SKILL_IDS_ENUM.UPPERS,
            'Uppers',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'Adds 7 more First Aid Kits to your inventory.', 
                'Adds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.'
            ],
            [3, 3],
        );
        this.addSkill(
            SKILL_IDS_ENUM.COMBAT_DOCTOR,
            'Combat Doctor',
            SKILL_PRICE_BY_TIER.TIER_3,
            [
                'You can now deploy 2 Doctor Bags instead of just one.',
                'Your doctor bags have 2 more charges.'
            ],
            [3, 3],
        )
        this.addSkill(
            SKILL_IDS_ENUM.QUICK_FIX,
            'Quick Fix',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Decreases your First Aid Kit and Doctor Bag deploy time by 50%.', 
                'Crew members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.PAINKILLERS,
            'Painkillers',
            SKILL_PRICE_BY_TIER.TIER_2,
            [
                'Crew members you revive take 30% less damage for 5 seconds.', 
                'The damage reduction is increased by an additional 50%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SKILL_IDS_ENUM.COMBAT_MEDIC,
            'Combat Medic',
            SKILL_PRICE_BY_TIER.TIER_1,
            [
                'You gain a 30% damage reduction for 5 seconds both after and during reviving another player.', 
                'Reviving a crew member gives them 30% more health.'
            ],
            [0, 0],
        )
    }
}