import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { ISkill } from '../Skill';
import { IEntityParent } from '../shared/interfaces';

export interface ITree extends IEntityParent {
    subtrees: Map<string, ISubtree>,
    id: string,
    name: string,
    parent: IEntityParent | null,
    query: (skillId: string) => ITreeQueryPayload | null,
    addSubtree: (subtree: ISubtree) => ISubtree,
    serialize: () => ITreeSerialized,
    setParent: (parent: IEntityParent | null) => ITree,
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