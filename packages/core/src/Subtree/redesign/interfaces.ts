import { IStructuredEntity } from 'src/Structure';
import { ISkill } from 'src/Skill/redesign';

export interface ISubtree extends IStructuredEntity {
	name: string;
	addSkill: (skill: ISkill) => ISubtree;
	getInvestedPoints: () => number;
	setInvestedPoints: (points: number) => ISubtree;
	buy: (skillId: string) => boolean;
	remove: (skillId: string) => boolean;
}
