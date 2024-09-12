import { SkillPriceType, SkillDescriptionType, SkillPointsToAccessType } from './types';
import { SkillStatusEnum } from './enums';

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
    getStatus: () => SkillStatusEnum,
    serialize: () => ISkillSerialized,
    getPriceByStatus: (status: SkillStatusEnum) => number, 
}

export interface ISkillSerialized extends ISkillStaticData{
    status: SkillStatusEnum,
    pointsToAccess: SkillPointsToAccessType,
}

export interface ISkillParent {
    validateSkillPoints: (pointsToAccess: number) => boolean;
    onBuySkill: (points: number) => void;
    onRemoveSkill: (points: number) => void;
}