import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class MedicSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.MEDIC);

        this.addSkill(
            SkillIdsEnum.INSPIRE,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'You revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.', 
                'There is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than once every 20 seconds.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.UPPERS,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Adds 7 more First Aid Kits to your inventory.', 
                'Adds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.'
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.COMBAT_DOCTOR,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'You can now deploy 2 Doctor Bags instead of just one.',
                'Your doctor bags have 2 more charges.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.QUICK_FIX,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Decreases your First Aid Kit and Doctor Bag deploy time by 50%.', 
                'Crew members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.PAINKILLERS,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Crew members you revive take 30% less damage for 5 seconds.', 
                'The damage reduction is increased by an additional 50%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.COMBAT_MEDIC,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'You gain a 30% damage reduction for 5 seconds both after and during reviving another player.', 
                'Reviving a crew member gives them 30% more health.'
            ],
            [0, 0],
        )
    }
}