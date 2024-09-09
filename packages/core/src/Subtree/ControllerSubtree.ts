import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class ControllerSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.CONTROLLER);

        this.addSkill(
            SkillIdsEnum.HOSTAGE_TAKER,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'Having at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.', 
                'Having at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.STOCKHOLM_SYNDROME,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Civilians are intimidated by the noise you make and remain intimidated 50% longer.', 
                'Your hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.'
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.PARTNERS_IN_CRIME,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Having a converted enemy increases your movement speed by 10%. Your converted enemy takes 45% less damage.',
                'Having a converted enemy increases your health by 30%. Your converted enemy takes an additional 54% less damage.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.CONFIDENT,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'The power and range of your intimidation is increased by 50%.', 
                'You can now have 2 converted enemies at the same time.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.JOKER,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'You can convert a non-special enemy to fight on your side. This cannot be done during stealth and the enemy must have surrendered in order for you to convert them. You can only convert one non-special enemy at a time.', 
                'Your converted enemy deal 35% more damage. The time taken to convert an enemy is reduced by 65%.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.FORCED_FRIENDSHIP,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'Increases your supply of cable ties by 4. You can cable tie hostages 75% faster.', 
                'You and your crew gain 0.5 damage absorption for each hostage you have. This effect stacks with up to a maximum of 8 hostages. Note: This skill does not stack with other players Forced Friendship skills.'
            ],
            [0, 0],
        )
    }
}