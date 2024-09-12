import { SkillStatusType } from '../shared/types';
import { SkillPriceType, SkillDescriptionType, SkillPointsToAccessType } from './types';

interface ISkillStaticData {
    id: string,
    name: string,
    description: SkillDescriptionType,
    price: SkillPriceType,
}

export interface ISkill extends ISkillStaticData{
    buySkill: (isInfamyBonus: boolean) => number | null,
    removeSkill: () => number | null,
    getPointsToAccess: (isInfamyBonus: boolean) => number,
    getStatus: () => SkillStatusType,
    serialize: () => ISkillSerialized,
}

export interface ISkillSerialized extends ISkillStaticData{
    status: SkillStatusType,
    pointsToAccess: SkillPointsToAccessType,
}

export interface ISkillParent {
    validateSkillPoints: (pointsToAccess: number) => boolean;
    onBuySkill: (points: number) => void;
    onRemoveSkill: (points: number) => void;
}