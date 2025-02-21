import { ISerializableEntity } from 'src/shared/interfaces';
import { ISkill } from 'src/Skill/redesign';
import { IStructuredEntity } from 'src/Structure';
import { ISubtreeSerialized } from 'src/Subtree/redesign';

export interface ITreeSerialized {
	subtrees: ISubtreeSerialized[];
}

export interface ITree extends IStructuredEntity, ISerializableEntity<ITreeSerialized> {
	name: string;
	buy: (skill: ISkill) => boolean;
	remove: (skill: ISkill) => boolean;
}
