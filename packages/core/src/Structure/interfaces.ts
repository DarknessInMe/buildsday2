import { ISerializableEntity } from 'src/shared/interfaces';
import { ITree, ITreeSerialized } from 'src/Tree';

export interface IStructuredEntity {
	children: Map<string, IStructuredEntity> | null;
	addChild: (child: IStructuredEntity) => this;
	parent: IStructuredEntity | null;
	setParent: (parent: IStructuredEntity) => IStructuredEntity;
	query: (id: string) => IStructuredEntity | null;
	id: string;
}

export interface IStructureSerialized {
	points: number;
	trees: ITreeSerialized[];
}

export interface IMainStructure
	extends IStructuredEntity,
		ISerializableEntity<IStructureSerialized> {
	getTotalPoints: () => number;
	setTotalPoints: (points: number) => IMainStructure;
	buy: (skillId: string) => void;
	remove: (skillId: string) => void;
}
