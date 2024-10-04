import { 
   Connection,
   ISkill, 
   ISkillSerialized,
   Skill, 
   SkillDescriptionType, 
   SkillPointsToAccessType, 
   SkillPriceType,
   SkillStatusEnum,
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

   public verifySkillDeletion(tier: number, price: number, id: string) {
      if (this.parent && !this.parent.verifySkillDeletion(tier, price, id)) {
         return false;
      }

      const skillIterator = this.skills[Symbol.iterator]();
      const skillsToValidate: ISkill[] = [];
      let wastedPoints = 0 - price;

      /**
       * The idea of algorithm is to collect all points from purchasing equal or lower tier skills
       * and calculate how many it costs together.
       * Next, all higher tier skills must be collected and, simply, we must compare do we have enough points
       * to keep all those top tier skills be available without target (deleted) skill 
       */
      for (const [, skill] of skillIterator) {
         const status = skill.getStatus();

         if (status === SkillStatusEnum.NULL) {
            continue;
         }

         if (skill.getTier() >= tier) {
            wastedPoints += skill.getPriceByStatus(status)
         } else {
            skillsToValidate.push(skill)
         }
      }

      return !skillsToValidate.some(skill => {
         return skill.getPointsToAccess() > wastedPoints;
      });
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
      tier: number,
      price: SkillPriceType, 
      description: SkillDescriptionType, 
      pointsToAccess: SkillPointsToAccessType
   ) {
      const skill = new Skill(
         skillId,
         name,
         price, 
         description,
         new Connection(tier, pointsToAccess),
      );

      this.skills.set(skillId, skill
         .setParent(this)
         .setContext(this.context)
      );

      return skill;
   }
}