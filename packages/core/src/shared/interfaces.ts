import { ITree } from '../Tree';
import { ISkill } from '../Skill';
import { ISubtree } from '../Subtree';

export interface ITreeQueryPayload {
    skill: ISkill,
    subtree: ISubtree,
    tree: ITree,
}