import { SkillPriceType, SkillDescriptionType } from './types';
import { SkillStatusEnum } from './enums';
import { 
   IComponentWithContext,
   IComponentWithParent,
} from '../shared/interfaces';

interface ISkillStaticData {
   id: string,
   name: string,
   description: SkillDescriptionType,
   price: SkillPriceType,
}

export interface ISkill extends ISkillStaticData, IComponentWithContext, IComponentWithParent {
   buySkill: () => number | null,
   removeSkill: () => number | null,
   getPointsToAccess: () => number,
   getStatus: () => SkillStatusEnum,
   getTier: () => number,
   serialize: () => ISkillSerialized,
   getPriceByStatus: (status: SkillStatusEnum) => number, 
}

export interface ISkillSerialized extends ISkillStaticData{
   status: SkillStatusEnum,
   tier: number,
}