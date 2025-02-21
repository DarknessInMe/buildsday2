import { IStructuredEntity } from './interfaces';
import { ITree } from 'src/Tree/redesign';
import { AbstractStructure } from './abstract';

export class MainStructure extends AbstractStructure implements IStructuredEntity {
	public parent = null;
	public children = new Map<string, ITree>();
	public id = '__ROOT__';

	public addTree(tree: ITree) {
		this.children.set(tree.id, tree);

		return this;
	}
}
