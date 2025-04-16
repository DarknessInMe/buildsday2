import { AbstractStructure } from 'src/Structure';
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

	public cleanUp(): void {
		this.setInvestedPoints(0);
		this.children.forEach((skill) => {
			skill.cleanUp();
		});
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
		if (!this.children.has(skill.id) || !skill.isAvailable(this.investedPoints)) {
			return false;
		}

		const isSuccess = skill.buy();

		if (isSuccess) {
			this.setInvestedPoints(this.getInvestedPoints() + skill.getPrice(skill.getStatus()));
		}

		return isSuccess;
	}

	/**
	 * This algorithm checks tree completeness in case of skill removing.
	 *
	 * 1. Sort skills in tree from lower to higher. It is necessary as we have to calculate wasted points
	 *    (here, virtual points) to make sure higher level skills are available
	 * 2. Collect wasted points from bought and still AVAILABLE skills (keep in mind, we have to check target
	 *    skill with downgraded variant)
	 *
	 * If each skill satisfies algorithm, it means everything is ok and target skill can be safely removed.
	 * This algorithm involves multiple mapping over whole array of skills via sort() and every methods(),
	 * as there is no any links or connections between skills (in default implementations it is redundant), but in more
	 * complex scenarios it can require re-thinking of approach. Use inheritance and polymorphism over checkSubtreeCompleteness()
	 * method for safe re-working
	 */
	protected checkSubtreeCompleteness(removedSkill: ISkill) {
		let virtualPoints: number = 0;

		return Array.from(this.children.values())
			.sort((a, b) => a.tier - b.tier) // 1.
			.every((treeSkill) => {
				if (treeSkill.getStatus() === null) {
					return true;
				}

				if (removedSkill.id === treeSkill.id) {
					virtualPoints += treeSkill.getPrice(treeSkill.getLowerStatus()); // 2.
					return true;
				}

				if (treeSkill.isAvailable(virtualPoints)) {
					virtualPoints += treeSkill.getInvestedPoints(); // 2.
					return true;
				}

				return false;
			});
	}

	public remove(skill: ISkill) {
		if (!this.children.has(skill.id)) {
			return false;
		}

		const price = skill.getPrice(skill.getStatus());
		const satisfiesSubtree = this.checkSubtreeCompleteness(skill);

		if (!satisfiesSubtree) {
			return false;
		}

		const isSuccess = skill.remove();

		if (isSuccess) {
			this.setInvestedPoints(this.getInvestedPoints() - price);
		}

		return isSuccess;
	}
}
