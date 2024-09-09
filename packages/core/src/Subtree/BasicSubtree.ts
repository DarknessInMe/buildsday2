import { SKILL_NAMES_MAP, SUBTREE_NAMES_MAP } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { ISkill, ISkillSerialized, Skill } from '../Skill';
import { ISkillParent } from '../shared/interfaces';

export interface ISubtree extends ISkillParent {
    id: SubtreeIdsEnum,
    name: string,
    skills: Map<SkillIdsEnum, ISkill>,
    query: (skillId: SkillIdsEnum) => ISkill | null,
    getWastedPoints: () => number,
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
    public skills = new Map<SkillIdsEnum, ISkill>();

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

    public validateSkillPoints(pointsToAccess: number) {
        return pointsToAccess > this.getWastedPoints();
    };

    public onBuySkill(points: number) {
        this.wastePoints(points);
    };

    public onRemoveSkill(points: number) {
        this.restorePoints(points);
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
        const skill = new Skill(
            skillId,
            SKILL_NAMES_MAP[skillId],
            price, 
            description,
            pointsToAccess,
            this,
        );

        this.skills.set(skillId, skill)
    }
}