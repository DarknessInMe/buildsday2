import { ISkill } from 'src/Skill/redesign';
import { IStructuredEntity } from 'src/Structure';
import { ISubtree } from 'src/Subtree/redesign';

export interface ITree extends IStructuredEntity {
	name: string;
	addSubtree: (subtree: ISubtree) => ITree;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
