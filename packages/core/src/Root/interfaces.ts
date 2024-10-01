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
    skill: ISkillChanges | null,
    subtree: ISubtreeChanges | null,
    relatedTreeId: string | null,
}

export interface IChangeableSKill {
    id: string,
    getStatus: () => SkillStatusEnum,
}

export interface IChangeableSubtree {
    id: string,
    getWastedPoints: () => number,
}

export interface IContextualComponent {
   isInfamyBonus: boolean;
}

export interface IGlobalContext {
   getIsInfamyBonusActive: () => boolean;
}