import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class MedicSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.MEDIC);

        this.addSkill(
            SkillIdsEnum.INSPIRE,
            [4, 8],
            ['', ''],
            [16, 16],
        );
        this.addSkill(
            SkillIdsEnum.UPPERS,
            [3, 6],
            ['', ''],
            [16, 16],
        );
        this.addSkill(
            SkillIdsEnum.COMBAT_DOCTOR,
            [3, 6],
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.QUICK_FIX,
            [2, 4],
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.PAINKILLERS,
            [2, 4],
            ['', ''],
            [16, 16],
        )
        this.addSkill(
            SkillIdsEnum.COMBAT_MEDIC,
            [1, 3],
            ['', ''],
            [16, 16],
        )
    }
}