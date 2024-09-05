import { SkillIdsEnum, SubtreeIdsEnum, TreeIdsEnum } from './enums';

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
} as const;

type SubtreeNamesMapType = {
    [key in SubtreeIdsEnum]: string;
}

export const SUBTREE_NAMES_MAP: SubtreeNamesMapType = {
    [SubtreeIdsEnum.MEDIC]: 'Medic',
} as const;

type TreeNamesMapType = {
    [key in TreeIdsEnum]: string;
}

export const TREE_NAMES_MAP: TreeNamesMapType = {
    [TreeIdsEnum.MASTERMIND]: 'Mastermind',
}

type SkillPriceTupleType = {
    [key in string]: [number, number];
}

export const SKILL_PRICE_TUPLE: SkillPriceTupleType = {
    FIRST_LEVEL: [1, 3],
    SECOND_LEVEL: [2, 4],
    THIRD_LEVEL: [3, 6],
    FOURTH_LEVEL: [4, 8],
} as const;