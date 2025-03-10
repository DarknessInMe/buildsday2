import { AbstractStructure, IMainStructure } from 'src/Structure';
import { ITree, ITreeSerialized } from './interfaces';
import { ISubtree, ISubtreeSerialized } from 'src/Subtree';
import { ISkill } from 'src/Skill';
import { IModifier } from 'src/Root';

export class Tree extends AbstractStructure<IMainStructure, ISubtree> implements ITree {
	public children = new Map<string, ISubtree>();
	public parent: IMainStructure | null = null;

	constructor(
		public readonly id: string,
		public readonly name: string,
		protected modifier: IModifier,
	) {
		super();
	}

	public cleanUp(): void {
		this.children.forEach((subtree) => {
			subtree.cleanUp();
		});
	}

	public serialize() {
		return {
			id: this.id,
			subtrees: [...this.children.values()].reduce<ISubtreeSerialized[]>((acc, subtree) => {
				const serializedSubtree = subtree.serialize();

				if (!serializedSubtree.skills.length) {
					return acc;
				}

				return [...acc, serializedSubtree];
			}, []),
		};
	}

	public deserialize(tree: ITreeSerialized) {
		return tree.subtrees.forEach((model) => {
			this.children.get(model.id)?.deserialize?.(model);
		});
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
