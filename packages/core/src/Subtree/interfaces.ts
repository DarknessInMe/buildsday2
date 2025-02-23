import { IStructuredEntity } from 'src/Structure';
import { ISkill, ISkillSerialized } from 'src/Skill';
import { ISerializableEntity } from 'src/shared/interfaces';
import { ITree } from 'src/Tree';

export interface ISubtreeSerialized {
	id: string;
	points: number;
	skills: ISkillSerialized[];
}

export interface ISubtree
	extends IStructuredEntity<ITree, ISkill>,
		ISerializableEntity<ISubtreeSerialized> {
	name: string;
	getInvestedPoints: () => number;
	setInvestedPoints: (points: number) => ISubtree;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
