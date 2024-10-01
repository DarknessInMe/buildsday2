import { 
    ISkill, 
    ISkillSerialized,
    Skill, 
    SkillDescriptionType, 
    SkillPointsToAccessType, 
    SkillPriceType
} from '../Skill';
import { ISubtree, ISubtreeSerialized } from './interfaces';
import { IEntityParent } from '../shared/interfaces';

export class BasicSubtree implements ISubtree {
    protected pointsWasted: number = 0;
    public skills = new Map<string, ISkill>();
    public parent: IEntityParent | null = null;

    constructor(
        public readonly id: string,
        public readonly name: string,
    ) {}

    public setParent(parent: IEntityParent | null) {
      this.parent = parent;
      return this;
    }

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

    public verifySkillPurchase(price: number, pointsToAccess: number) {
      const parentVerification = this.parent ? this.parent.verifySkillPurchase(price, pointsToAccess) : true;

      return parentVerification && pointsToAccess <= this.getWastedPoints();
    }

    public onBuySkill(price: number) {
      this.parent?.onBuySkill?.(price)
      this.wastePoints(price);
    }

    public onRemoveSkill(price: number) {
      this.parent?.onRemoveSkill?.(price)
      this.restorePoints(price);
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
        ).setParent(this);

        this.skills.set(skillId, skill);

        return skill;
    }
}