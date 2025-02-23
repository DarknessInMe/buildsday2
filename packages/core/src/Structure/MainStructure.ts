import { IMainStructure, IStructureSerialized } from './interfaces';
import { ITree, ITreeSerialized } from 'src/Tree';
import { AbstractStructure } from './abstract';
import { IModifier } from 'src/Root';
import { ISkill } from 'src/Skill';
import { ISubtree } from 'src/Subtree';

export class MainStructure extends AbstractStructure<null, ITree> implements IMainStructure {
	public parent = null;
	public children = new Map<string, ITree>();
	public readonly id = '__ROOT__';

	constructor(private totalPoints: number, protected modifier: IModifier) {
		super();
	}

	public serialize() {
		return {
			points: this.getTotalPoints(),
			trees: [...this.children.values()].reduce<ITreeSerialized[]>((acc, tree) => {
				const serializedTree = tree.serialize();

				if (!serializedTree.subtrees.length) {
					return acc;
				}

				return [...acc, serializedTree];
			}, []),
		};
	}

	public deserialize(entity: IStructureSerialized) {
		this.setTotalPoints(entity.points);
		entity.trees.forEach((model) => {
			this.children.get(model.id)?.deserialize?.(model);
		});
	}

	public addChild(tree: ITree) {
		return super.addChild(tree);
	}

	public getTotalPoints() {
		return this.totalPoints;
	}

	public setTotalPoints(points: number) {
		this.totalPoints = points;
		return this;
	}

	private preparePurchaseData(skillId: string): [ISkill | null, ITree | null] {
		const skill = this.query(skillId) as ISkill;

		if (!skill) {
			return [null, null];
		}

		const subtree = skill.parent as ISubtree;
		const tree = subtree.parent as ITree;

		if (!tree) {
			return [null, null];
		}

		return [skill, tree];
	}

	public buy(skillId: string) {
		const [skill, tree] = this.preparePurchaseData(skillId);

		if (!skill || !tree) {
			return;
		}

		const isSuccess = tree.buy(skill);

		if (isSuccess) {
			this.setTotalPoints(this.getTotalPoints() - skill.getPrice(skill.getStatus()));
		}
	}

	public remove(skillId: string) {
		const [skill, tree] = this.preparePurchaseData(skillId);

		if (!skill || !tree) {
			return;
		}

		const isSuccess = tree.remove(skill);

		if (isSuccess) {
			this.setTotalPoints(this.getTotalPoints() + skill.getPrice(skill.getStatus()));
		}
	}
}
