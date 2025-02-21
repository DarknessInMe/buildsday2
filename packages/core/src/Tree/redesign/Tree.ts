import { AbstractStructure, IStructuredEntity } from 'src/Structure';
import { ITree } from './interfaces';
import { ISubtree } from 'src/Subtree/redesign';

export class Tree extends AbstractStructure implements ITree {
	public children = new Map<string, ISubtree>();
	public parent: IStructuredEntity | null = null;

	constructor(public id: string, public name: string) {
		super();
	}

	public addSubtree(subtree: ISubtree) {
		this.children.set(subtree.id, subtree);
		return this;
	}
}
