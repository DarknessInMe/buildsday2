import { ITree } from '../Tree';
import { ISkill } from '../Skill';
import { ISubtree } from '../Subtree';
import { SkillStatusType } from './types';

export interface ITreeQueryPayload {
    skill: ISkill,
    subtree: ISubtree,
    tree: ITree,
}

export interface ISkillChanges {
    id: string,
    status: SkillStatusType,
}

export interface ISubtreeChanges {
    id: string,
    wastedPoints: number,
}

export interface IChanges {
    points: number,
    isInfamyBonus: boolean,
    skill: ISkillChanges,
    subtree: ISubtreeChanges,
}

export interface ISkillParent {
    validateSkillPoints: (pointsToAccess: number) => boolean;
    onBuySkill: (points: number) => void;
    onRemoveSkill: (points: number) => void;
}