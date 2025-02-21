import { AbstractStructure } from 'src/Structure';
import { ISubtree } from './interfaces';
import { ISkill } from 'src/Skill/redesign';
import { ITree } from 'src/Tree/redesign';

export class Subtree extends AbstractStructure implements ISubtree {
	public children = new Map<string, ISkill>();
	public parent: ITree | null = null;

	constructor(
		public readonly id: string,
		public readonly name: string,
		private investedPoints: number = 0,
	) {
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

	public getInvestedPoints() {
		return this.investedPoints;
	}

	public setInvestedPoints(points: number) {
		this.investedPoints = points;
		return this;
	}

	public buy(skillId: string) {
		const skill = this.query(skillId) as ISkill;

		if (!skill || skill.getUnlockPoints() > this.investedPoints) {
			return false;
		}

		const isSuccess = skill.buy();

		if (isSuccess) {
			this.setInvestedPoints(this.getInvestedPoints() + skill.getPrice(skill.getStatus()));
		}

		return isSuccess;
	}

	public remove(skillId: string) {
		const skill = this.query(skillId) as ISkill;

		if (!skill) {
			return false;
		}

		const price = skill.getPrice(skill.getStatus());
		const newInvestedPoints = this.getInvestedPoints() - price;
		const satisfiesSubtree = Array.from(this.children.values()).every((singlingSkill) => {
			if (skill.tier >= singlingSkill.tier) {
				return true;
			}

			return singlingSkill.getUnlockPoints() <= newInvestedPoints;
		});

		if (!satisfiesSubtree) {
			return false;
		}

		const isSuccess = skill.remove();

		if (isSuccess) {
			this.setInvestedPoints(newInvestedPoints);
		}

		return isSuccess;
	}
}
