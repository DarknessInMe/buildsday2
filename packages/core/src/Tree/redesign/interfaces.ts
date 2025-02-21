import { ISkill } from 'src/Skill/redesign';
import { IStructuredEntity } from 'src/Structure';

export interface ITree extends IStructuredEntity {
	name: string;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
