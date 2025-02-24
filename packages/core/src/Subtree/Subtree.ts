import { AbstractStructure, IStructuredEntity } from 'src/Structure';
import { ISubtree, ISubtreeSerialized } from './interfaces';
import { ISkill, ISkillSerialized } from 'src/Skill';
import { ITree } from 'src/Tree';
import { IModifier } from 'src/Root';

export class Subtree extends AbstractStructure<ITree, ISkill> implements ISubtree {
	private investedPoints: number = 0;
	public children = new Map<string, ISkill>();
	public parent: ITree | null = null;

	constructor(
		public readonly id: string,
		public readonly name: string,
		protected modifier: IModifier,
	) {
		super();
	}

	public serialize() {
		return {
			id: this.id,
			points: this.getInvestedPoints(),
			skills: [...this.children.values()].reduce<ISkillSerialized[]>((acc, skill) => {
				if (skill.getStatus() === null) {
					return acc;
				}

				return [...acc, skill.serialize()];
			}, []),
		};
	}

	public deserialize(entity: ISubtreeSerialized) {
		const { points, skills } = entity;

		this.setInvestedPoints(points);
		skills
			.sort((a, b) => a.tier - b.tier)
			.forEach((skill) => {
				this.children.get(skill.id)?.buy?.();
			});
	}

	public getInvestedPoints() {
		return this.investedPoints;
	}

	public setInvestedPoints(points: number) {
		this.investedPoints = points;
		return this;
	}

	public buy(skill: ISkill) {
		if (!this.children.has(skill.id) || skill.getUnlockPoints() > this.investedPoints) {
			return false;
		}

		const isSuccess = skill.buy();

		if (isSuccess) {
			this.setInvestedPoints(this.getInvestedPoints() + skill.getPrice(skill.getStatus()));
		}

		return isSuccess;
	}

	public remove(skill: ISkill) {
		if (!this.children.has(skill.id)) {
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
