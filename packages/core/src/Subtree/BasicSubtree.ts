import { SKILL_NAMES_MAP, SUBTREE_NAMES_MAP } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { SkillEntity } from '../SkillEntity';
import { ISkillInsideTree, ISkillSerialized, SkillInsideTree } from '../SkillInsideTree';

export interface ISubtree {
    id: SubtreeIdsEnum,
    name: string,
    skills: Map<SkillIdsEnum, ISkillInsideTree>,
    query: (skillId: SkillIdsEnum) => ISkillInsideTree | null,
    wastePoints: (points: number) => void,
    restorePoints: (points: number) => void,
    serialize: () => ISubtreeSerialized,
}

export interface ISubtreeSerialized {
    name: string,
    id: SubtreeIdsEnum,
    skills: Record<SkillIdsEnum, ISkillSerialized>,
    pointsWasted: number,
}

export abstract class BasicSubtree implements ISubtree {
    protected pointsWasted: number = 0;
    public name: string;
    public skills = new Map<SkillIdsEnum, ISkillInsideTree>();

    constructor(
        public readonly id: SubtreeIdsEnum
    ) {
        this.name = SUBTREE_NAMES_MAP[id];
    }

    public serialize(): ISubtreeSerialized {
        const skills = {};

        this.skills.forEach((skill, id) => {
            skills[id] = skill.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            pointsWasted: this.getWastedPoints(),
            skills: skills as Record<SkillIdsEnum, ISkillSerialized>,
        };
    }

    public getWastedPoints() {
        return this.pointsWasted;
    }

    public wastePoints(points: number) {
        this.pointsWasted += points;
    }

    public restorePoints(points: number) {
        this.pointsWasted -= points;
    }

    public query(skillId: SkillIdsEnum) {
        return this.skills.get(skillId) ?? null;
    }

    protected addSkill(
        skillId: SkillIdsEnum, 
        price: [number, number], 
        description: [string, string], 
        pointsToAccess: [number, number]
    ) {
        const skillEntity = new SkillEntity(SKILL_NAMES_MAP[skillId], skillId, price, description);

        this.skills.set(skillId, new SkillInsideTree(skillEntity, pointsToAccess))
    }
}