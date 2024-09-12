import { 
    ISkill, 
    ISkillSerialized,
    Skill, 
    SkillDescriptionType, 
    SkillPointsToAccessType, 
    SkillPriceType
} from '../Skill';
import { ISubtree, ISubtreeSerialized } from './interfaces';

export class BasicSubtree implements ISubtree {
    protected pointsWasted: number = 0;
    public skills = new Map<string, ISkill>();

    constructor(
        public readonly id: string,
        public readonly name: string
    ) {}

    public serialize(): ISubtreeSerialized {
        const skills = {} as Record<string, ISkillSerialized>;

        this.skills.forEach((skill, id) => {
            skills[id] = skill.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            pointsWasted: this.getWastedPoints(),
            skills,
        };
    }

    public validateSkillPoints(pointsToAccess: number) {
        return pointsToAccess <= this.getWastedPoints();
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

    public addSkill(
        skillId: string,
        name: string,
        price: SkillPriceType, 
        description: SkillDescriptionType, 
        pointsToAccess: SkillPointsToAccessType
    ) {
        const skill = new Skill(
            skillId,
            name,
            price, 
            description,
            pointsToAccess,
            this,
        );

        this.skills.set(skillId, skill);

        return skill;
    }
}