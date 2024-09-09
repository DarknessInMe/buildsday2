import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class AmmoSpecialistSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.AMMO_SPECIALIST);

        this.addSkill(
            SkillIdsEnum.FULLY_LOADED,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'Your total ammo capacity is increased by 25%.',
                'Increases the amount of ammo you gain from ammo boxes by 75%. You also gain a 5% base chance to get a throwable from an ammo box. The base chance is increased by 1% for each ammo box you pick up that does not contain a throwable. When a throwable has been found, the chance is reset to its base value.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.EXTRA_LEAD,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'You can now place 2 ammo bags instead of just one.',
                'Each ammo bag contains 50% more ammunition.',
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.SAW_MASSACRE,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Reducing the wear down of the blades on enemies by 50%.',
                'You can now saw through shield enemies with your OVE9000 portable saw. When killing an enemy with the saw, you have a 50% chance to cause nearby enemies in a 10m radius to panic. Panic will make enemies go into short bursts of uncontrollable fear.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.BULLETSTORM,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Ammo bags placed by you grant players the ability to shoot without depleting their ammunition for up to 5 seconds after interacting with it. The more ammo players replenish, the longer the duration of the effect.', 
                'Increases the base duration of the effect by up to 15 seconds.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.PORTABLE_SAW,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Unlocks the OVE9000 portable saw for you to use as a secondary weapon.', 
                'You gain 1 extra saw blade for the OVE9000 portable saw. You replace your saw blades with carbon blades, increasing your saw efficiency by 40%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.SCAVENGER,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'Your ammo box pick up range is increased by 50%.', 
                'Every 6th enemy you kill will drop an extra ammo box.'
            ],
            [0, 0],
        )
    }
}