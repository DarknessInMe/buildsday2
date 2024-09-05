import { ISkillInsideTree } from 'SkillInsideTree';

export interface ISubtree {
    name: string,
    skills: Map<string, ISkillInsideTree>,
    pointsWasted: number,
    buySkill: () => void,
}

export class Subtree implements ISubtree {
    public pointsWasted: number = 0;
    public skills = new Map<string, ISkillInsideTree>();

    constructor(
        public name: string
    ) {}

    buySkill() {}
}