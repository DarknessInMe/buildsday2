import { 
    ISkill, 
    ISkillSerialized, 
    SkillPriceType, 
    SkillDescriptionType, 
    SkillPointsToAccessType,
} from '../Skill';
import { 
   IEntityParent, 
   IComponentWithContext,
   IComponentWithParent,
} from '../shared/interfaces';

export interface ISubtree extends IEntityParent, IComponentWithContext, IComponentWithParent {
   id: string,
   name: string,
   skills: Map<string, ISkill>,
   query: (skillId: string) => ISkill | null,
   getWastedPoints: () => number,
   wastePoints: (points: number) => void,
   restorePoints: (points: number) => void,
   serialize: () => ISubtreeSerialized,
   addSkill: (
      skillId: string,
      name: string,
      price: SkillPriceType, 
      description: SkillDescriptionType, 
      pointsToAccess: SkillPointsToAccessType
   ) => ISkill,
};

export interface ISubtreeSerialized {
   name: string,
   id: string,
   skills: Record<string, ISkillSerialized>,
   pointsWasted: number,
};