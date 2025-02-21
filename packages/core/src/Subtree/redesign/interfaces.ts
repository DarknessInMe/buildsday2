import { IStructuredEntity } from 'src/Structure';
import { ISkill } from 'src/Skill/redesign';

export interface ISubtree extends IStructuredEntity {
	name: string;
	addSkill: (skill: ISkill) => ISubtree;
}
