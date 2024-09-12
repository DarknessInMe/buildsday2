import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { ISkill } from '../Skill';

export interface ITree {
    subtrees: Map<string, ISubtree>,
    id: string,
    name: string;
    query: (skillId: string) => ITreeQueryPayload | null,
    addSubtree: (subtree: ISubtree) => ISubtree,
    serialize: () => ITreeSerialized,
};

export interface ITreeSerialized {
    id: string,
    name: string,
    subtrees: Record<string, ISubtreeSerialized>
};

export interface ITreeQueryPayload {
    skill: ISkill,
    subtree: ISubtree,
    tree: ITree,
};