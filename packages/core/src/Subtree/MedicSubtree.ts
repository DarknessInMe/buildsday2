import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class MedicSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.MEDIC);

        this.addSkill(
            SkillIdsEnum.INSPIRE,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            ['', ''],
            [16, 16],
        );
        this.addSkill(
            SkillIdsEnum.UPPERS,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            ['', ''],
            [16, 16],
        );
        this.addSkill(
            SkillIdsEnum.COMBAT_DOCTOR,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.QUICK_FIX,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.PAINKILLERS,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.COMBAT_MEDIC,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            ['', ''],
            [16, 16],
        )
    }
}