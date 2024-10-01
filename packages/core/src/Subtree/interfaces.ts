import { 
    ISkill, 
    ISkillSerialized, 
    SkillPriceType, 
    SkillDescriptionType, 
    SkillPointsToAccessType,
} from '../Skill';
import { IEntityParent } from '../shared/interfaces';

export interface ISubtree extends IEntityParent {
    id: string,
    parent: IEntityParent | null,
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
    setParent: (parent: IEntityParent | null) => ISubtree,
};

export interface ISubtreeSerialized {
    name: string,
    id: string,
    skills: Record<string, ISkillSerialized>,
    pointsWasted: number,
};