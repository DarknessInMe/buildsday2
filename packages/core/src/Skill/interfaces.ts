import { SkillPriceType, SkillDescriptionType, SkillPointsToAccessType } from './types';
import { SkillStatusEnum } from './enums';
import { IEntityParent } from '../shared/interfaces';

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
    setParent: (parent: IEntityParent | null) => ISkill,
}

export interface ISkillSerialized extends ISkillStaticData{
    status: SkillStatusEnum,
    pointsToAccess: SkillPointsToAccessType,
}