import { IStructuredEntity } from 'src/shared/interfaces';
import { ITree } from 'src/Tree/redesign';

export class MainStructure implements IStructuredEntity {
	public parent = null;
	public children = new Map<string, IStructuredEntity>();
	public id = '__ROOT__';

	public query(id: string) {
		return null;
	}

	public addTree(tree: ITree) {
		this.children.set(tree.id, tree);

		return this;
	}
}
