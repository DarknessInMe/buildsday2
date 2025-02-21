import { IMainStructure } from './interfaces';
import { ITree } from 'src/Tree/redesign';
import { AbstractStructure } from './abstract';
import { IModifier } from 'src/Root/redesign';
import { ISkill } from 'src/Skill/redesign';
import { ISubtree } from 'src/Subtree/redesign';

export class MainStructure extends AbstractStructure implements IMainStructure {
	public parent = null;
	public children = new Map<string, ITree>();
	public readonly id = '__ROOT__';

	constructor(private totalPoints: number, protected modifier: IModifier) {
		super();
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
