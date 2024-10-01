import { 
    ISkill, 
    ISkillSerialized,
    Skill, 
    SkillDescriptionType, 
    SkillPointsToAccessType, 
    SkillPriceType
} from '../Skill';
import { ISubtree, ISubtreeSerialized } from './interfaces';
import { IEntityParent, IGlobalContext } from '../shared/interfaces';

export class BasicSubtree implements ISubtree {
   protected pointsWasted: number = 0;
   public skills = new Map<string, ISkill>();
   public parent: IEntityParent | null = null;
   public context: IGlobalContext | null = null;

   constructor(
      public readonly id: string,
      public readonly name: string,
   ) {}

   public setParent(parent: IEntityParent | null) {
      this.parent = parent;
      return this;
   }

   public setContext(context: IGlobalContext | null) {
      this.context = context;
      return this;
   };

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
   if (this.parent && !this.parent.verifySkillPurchase(price, pointsToAccess)) {
      return false;
   }

   return pointsToAccess <= this.getWastedPoints();
   }

   public verifySKillDeletion(price: number, skillId: string) {
      if (this.parent && !this.parent.verifySKillDeletion(price, skillId)) {
         return false;
      }

      const newWastedPoints = this.getWastedPoints() - price;
      const skillIterator = this.skills[Symbol.iterator]();

      for (const [, skill] of skillIterator) {
         if (skill.id === skillId) {
            continue;
         }

         const pointsToAccess = skill.getPointsToAccess();

         if (pointsToAccess > newWastedPoints) {
            return false
         }
      }

      return true;
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
      );

      this.skills.set(skillId, skill
         .setParent(this)
         .setContext(this.context)
      );

      return skill;
   }
}