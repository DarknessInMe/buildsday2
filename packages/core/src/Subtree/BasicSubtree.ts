import { SKILL_NAMES_MAP, SUBTREE_NAMES_MAP } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { SkillEntity } from '../SkillEntity';
import { ISkillInsideTree, SkillInsideTree } from '../SkillInsideTree';

export interface ISubtree {
    id: SubtreeIdsEnum,
    name: string,
    skills: Map<SkillIdsEnum, ISkillInsideTree>,
    pointsWasted: number,
    buySkill: () => void,
}

export class BasicSubtree implements ISubtree {
    public pointsWasted: number = 0;
    public name: string;
    public skills = new Map<SkillIdsEnum, ISkillInsideTree>();

    constructor(
        public readonly id: SubtreeIdsEnum
    ) {
        this.name = SUBTREE_NAMES_MAP[id];
    }

    public addSkill(
        skillId: SkillIdsEnum, 
        price: [number, number], 
        description: [string, string], 
        pointsToAccess: [number, number]
    ) {
        const skillEntity = new SkillEntity(SKILL_NAMES_MAP[skillId], skillId, price, description);

        this.skills.set(skillId, new SkillInsideTree(skillEntity, pointsToAccess))
    }

    public buySkill() {}
}