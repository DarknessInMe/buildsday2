import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class TankSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.TANK);

        this.addSkill(
            SkillIdsEnum.IRON_MAN,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'Your total armor values is increased by 30%.',
                'Unlocks the ability to wear the Improved Combined Tactical Vest.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.SHOCK_AND_AWE,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Increases the armor recovery rate for you and your crew by 25%.',
                'Enables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons knock back chance is increased the higher the total damage of the weapon is. Melee weapons knock back chance is 100%.',
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.BULLSEYE,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'You regenerate 5 armor for each successful headshot. This effect cannot occur more than once every 2 seconds.',
                'You regenerate an additional 20 armor for each successful headshot.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.DIE_HARD,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'You take 50% less damage while interacting with objects.', 
                'Increases the armor of all Ballistic vests by 20.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.TRANSPORTER,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'You can throw bags 50% further.', 
                'For each 10 armor points the bag movement penalty is reduced by 1%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.RESILIENCE,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'Increase your armor recovery rate by 15%.', 
                'Reduce the visual effect duration of Flashbangs by 75%.'
            ],
            [0, 0],
        )
    }
}