import { IStructuredEntity } from 'src/Structure';
import { ISkill, ISkillSerialized } from 'src/Skill/redesign';
import { ISerializableEntity } from 'src/shared/interfaces';

export interface ISubtreeSerialized {
	id: string;
	points: number;
	skills: ISkillSerialized[];
}

export interface ISubtree extends IStructuredEntity, ISerializableEntity<ISubtreeSerialized> {
	name: string;
	getInvestedPoints: () => number;
	setInvestedPoints: (points: number) => ISubtree;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
