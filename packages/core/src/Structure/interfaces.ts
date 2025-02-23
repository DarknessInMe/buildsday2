import { ISerializableEntity } from 'src/shared/interfaces';
import { ITree, ITreeSerialized } from 'src/Tree';

export interface IStructuredEntity<Parent = unknown, Children = unknown> {
	children: Children extends null ? null : Map<string, Children>;
	addChild: (child: Children) => this;
	parent: Parent | null;
	setParent: (parent: Parent) => this;
	query: (id: string) => IStructuredEntity | null;
	id: string;
}

export interface IStructureSerialized {
	points: number;
	trees: ITreeSerialized[];
}

export interface IMainStructure
	extends IStructuredEntity<null, ITree>,
		ISerializableEntity<IStructureSerialized> {
	getTotalPoints: () => number;
	setTotalPoints: (points: number) => IMainStructure;
	buy: (skillId: string) => void;
	remove: (skillId: string) => void;
}
