import { 
    ISkill, 
    ISkillSerialized, 
    SkillPriceType, 
    SkillDescriptionType, 
    SkillPointsToAccessType,
    ISkillParent,
} from '../Skill';

export interface ISubtree extends ISkillParent {
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