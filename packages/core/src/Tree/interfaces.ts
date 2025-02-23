import { ISerializableEntity } from 'src/shared/interfaces';
import { ISkill } from 'src/Skill';
import { IMainStructure, IStructuredEntity } from 'src/Structure';
import { ISubtree, ISubtreeSerialized } from 'src/Subtree';

export interface ITreeSerialized {
	id: string;
	subtrees: ISubtreeSerialized[];
}

export interface ITree
	extends IStructuredEntity<IMainStructure, ISubtree>,
		ISerializableEntity<ITreeSerialized> {
	name: string;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
