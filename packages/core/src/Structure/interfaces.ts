import { ITree } from 'src/Tree/redesign';

export interface IStructuredEntity {
	children: Map<string, IStructuredEntity> | null;
	parent: IStructuredEntity | null;
	setParent: (parent: IStructuredEntity) => IStructuredEntity;
	query: (id: string) => IStructuredEntity | null;
	id: string;
}

export interface IMainStructure extends IStructuredEntity {
	addTree: (tree: ITree) => IMainStructure;
	getTotalPoints: () => number;
	setTotalPoints: (points: number) => IMainStructure;
	buy: (skillId: string) => void;
	remove: (skillId: string) => void;
}
