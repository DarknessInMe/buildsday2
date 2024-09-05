import { SkillIdsEnum, SubtreeIdsEnum } from './enums';

type SkillNamesMapType = {
    [key in SkillIdsEnum]: string
}

export const SKILL_NAMES_MAP: SkillNamesMapType = {
    [SkillIdsEnum.INSPIRE]: 'Inspire',
    [SkillIdsEnum.UPPERS]: 'Uppers',
    [SkillIdsEnum.COMBAT_DOCTOR]: 'Combat doctor',
    [SkillIdsEnum.QUICK_FIX]: 'Quick fix',
    [SkillIdsEnum.PAINKILLERS]: 'Painkillers',
    [SkillIdsEnum.COMBAT_MEDIC]: 'Combat Medic',
};

type SubtreeNamesMapType = {
    [key in SubtreeIdsEnum]: string;
}

export const SUBTREE_NAMES_MAP: SubtreeNamesMapType = {
    [SubtreeIdsEnum.MEDIC]: 'Medic',
}