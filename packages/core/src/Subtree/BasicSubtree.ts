import { ISkill, ISkillSerialized, Skill } from '../Skill';
import { ISkillParent } from '../shared/interfaces';

export interface ISubtree extends ISkillParent {
    id: string,
    name: string,
    skills: Map<string, ISkill>,
    query: (skillId: string) => ISkill | null,
    getWastedPoints: () => number,
    wastePoints: (points: number) => void,
    restorePoints: (points: number) => void,
    serialize: () => ISubtreeSerialized,
}

export interface ISubtreeSerialized {
    name: string,
    id: string,
    skills: Record<string, ISkillSerialized>,
    pointsWasted: number,
}

export abstract class BasicSubtree implements ISubtree {
    protected pointsWasted: number = 0;
    public skills = new Map<string, ISkill>();

    constructor(
        public readonly id: string,
        public readonly name: string
    ) {}

    public serialize(): ISubtreeSerialized {
        const skills = {};

        this.skills.forEach((skill, id) => {
            skills[id] = skill.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            pointsWasted: this.getWastedPoints(),
            skills: skills as Record<string, ISkillSerialized>,
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

    public query(skillId: string) {
        return this.skills.get(skillId) ?? null;
    }

    protected addSkill(
        skillId: string,
        name: string,
        price: [number, number], 
        description: [string, string], 
        pointsToAccess: [number, number]
    ) {
        const skill = new Skill(
            skillId,
            name,
            price, 
            description,
            pointsToAccess,
            this,
        );

        this.skills.set(skillId, skill)
    }
}