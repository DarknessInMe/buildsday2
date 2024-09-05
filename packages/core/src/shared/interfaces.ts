import { ITree } from '../Tree';
import { ISkillInsideTree } from '../SkillInsideTree';
import { ISubtree } from '../Subtree';

export interface ITreeQueryPayload {
    skill: ISkillInsideTree,
    subtree: ISubtree,
    tree: ITree,
}