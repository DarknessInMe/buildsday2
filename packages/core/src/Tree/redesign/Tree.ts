import { AbstractStructure, IStructuredEntity } from 'src/Structure';
import { ITree } from './interfaces';
import { ISubtree, ISubtreeSerialized } from 'src/Subtree/redesign';
import { ISkill } from 'src/Skill/redesign';
import { IModifier } from 'src/Root/redesign';

export class Tree extends AbstractStructure implements ITree {
	public children = new Map<string, ISubtree>();
	public parent: IStructuredEntity | null = null;

	constructor(
		public readonly id: string,
		public readonly name: string,
		protected modifier: IModifier,
	) {
		super();
	}

	public serialize() {
		return {
			subtrees: [...this.children.values()].reduce<ISubtreeSerialized[]>((acc, subtree) => {
				const serializedSubtree = subtree.serialize();

				if (!serializedSubtree.skills.length) {
					return acc;
				}

				return [...acc, serializedSubtree];
			}, []),
		};
	}

	public addChild(skill: ISubtree) {
		return super.addChild(skill);
	}

	public buy(skill: ISkill) {
		const subtree = skill.parent as ISubtree;
		return this.children.has(subtree?.id) ? subtree.buy(skill) : false;
	}

	public remove(skill: ISkill) {
		const subtree = skill.parent as ISubtree;
		return this.children.has(subtree?.id) ? subtree.remove(skill) : false;
	}
}
