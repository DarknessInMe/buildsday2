import { ITreeSerialized } from '../Tree';
import { SkillStatusEnum } from '../Skill';

export interface IRootSerialized {
    points: number,
    isInfamyBonus: boolean,
    trees: Record<string, ITreeSerialized>,
};

export interface ISkillChanges {
    id: string,
    status: SkillStatusEnum,
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
    getStatus: () => SkillStatusEnum,
}

export interface IChangeableSubtree {
    id: string,
    getWastedPoints: () => number,
}