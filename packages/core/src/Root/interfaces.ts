import { ITreeSerialized } from '../Tree';
import { SkillStatusType } from '../shared/types';

export interface IRootSerialized {
    points: number,
    isInfamyBonus: boolean,
    trees: Record<string, ITreeSerialized>,
};

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

export interface IChangeableSKill {
    id: string,
    getStatus: () => SkillStatusType,
}

export interface IChangeableSubtree {
    id: string,
    getWastedPoints: () => number,
}