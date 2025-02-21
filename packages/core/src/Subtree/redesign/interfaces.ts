import { IStructuredEntity } from 'src/Structure';
import { ISkill } from 'src/Skill/redesign';

export interface ISubtree extends IStructuredEntity {
	name: string;
	addSkill: (skill: ISkill) => ISubtree;
	getInvestedPoints: () => number;
	setInvestedPoints: (points: number) => ISubtree;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
