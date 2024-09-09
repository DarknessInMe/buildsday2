import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class ShotgunnerSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.SHOTGUNNER);

        this.addSkill(
            SkillIdsEnum.OVERKILL,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'When you kill an enemy with a shotgun or the OVE9000 portable saw, you receive a 75% damage increase for 20 seconds.',
                'The damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.FAR_AWAY,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Your accuracy bonus while aiming down sights with Shotguns is increased by 40%.',
                'You gain a 50% increased effective range with Shotguns when aiming down sights.',
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.CLOSE_BY,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'You can now hip-fire with your Shotguns while sprinting.',
                'Your rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Shotguns with magazines have their magazine sizes increased by 15 shells.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.SHOTGUN_CQB,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'You reload shotguns 15% faster.', 
                'You reload shotguns 35% faster. You gain a 125% increase steel sight speed when using Shotguns.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.SHOTGUN_IMPACT,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Your weapon stability with all shotguns is increased by 8. You deal 5% more damage with shotguns.', 
                'You deal an additional 10% more damage with shotguns.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.UNDERDOG,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'When three or more enemies are within 18 meters of you, you receive a 15% damage bonus that lasts for 7 seconds.', 
                'When three or more enemies are within 18 meters of you, you also receive a 10% damage reduction that lasts for 7 seconds.'
            ],
            [0, 0],
        )
    }
}