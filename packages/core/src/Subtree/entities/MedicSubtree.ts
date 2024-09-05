import { SKILL_PRICE_TUPLE } from '../../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../../shared/enums';
import { BasicSubtree } from '../../Subtree/BasicSubtree';

const MedicSubtree = new BasicSubtree(SubtreeIdsEnum.MEDIC);

MedicSubtree.addSkill(
    SkillIdsEnum.INSPIRE,
    SKILL_PRICE_TUPLE.FOURTH_LEVEL,
    ['', ''],
    [16, 16],
);
MedicSubtree.addSkill(
    SkillIdsEnum.UPPERS,
    SKILL_PRICE_TUPLE.THIRD_LEVEL,
    ['', ''],
    [16, 16],
);
MedicSubtree.addSkill(
    SkillIdsEnum.COMBAT_DOCTOR,
    SKILL_PRICE_TUPLE.THIRD_LEVEL,
    ['', ''],
    [16, 16],
)
MedicSubtree.addSkill(
    SkillIdsEnum.QUICK_FIX,
    SKILL_PRICE_TUPLE.SECOND_LEVEL,
    ['', ''],
    [16, 16],
)
MedicSubtree.addSkill(
    SkillIdsEnum.PAINKILLERS,
    SKILL_PRICE_TUPLE.SECOND_LEVEL,
    ['', ''],
    [16, 16],
)
MedicSubtree.addSkill(
    SkillIdsEnum.COMBAT_MEDIC,
    SKILL_PRICE_TUPLE.FIRST_LEVEL,
    ['', ''],
    [16, 16],
)

export { MedicSubtree }