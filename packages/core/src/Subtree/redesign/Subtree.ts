import { AbstractStructure } from 'src/Structure';
import { ISubtree } from './interfaces';
import { ISkill } from 'src/Skill/redesign';
import { ITree } from 'src/Tree/redesign';

export class Subtree extends AbstractStructure implements ISubtree {
	public children = new Map<string, ISkill>();
	public parent: ITree | null = null;

	constructor(public id: string, public name: string) {
		super();
	}

	public addSkill(skill: ISkill) {
		this.children.set(skill.id, skill);
		return this;
	}

	public setParent(parent: ITree) {
		super.setParent(parent);

		return this;
	}
}
