import { AbstractStructure, IStructuredEntity } from 'src/Structure';
import { ISkill } from './interfaces';
import { ISubtree } from 'src/Subtree/redesign';

export class Skill extends AbstractStructure implements ISkill {
	public children = null;
	public parent: ISubtree | null = null;

	constructor(public id: string, public name: string) {
		super();
	}

	public setParent(parent: ISubtree) {
		super.setParent(parent);

		return this;
	}
}
