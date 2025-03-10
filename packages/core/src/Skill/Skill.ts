import { AbstractStructure } from 'src/Structure';
import { ISubtree } from 'src/Subtree';
import {
	SkillDescriptionType,
	SkillPointsToAccessType,
	SkillPriceType,
	ISkill,
	ISkillSerialized,
} from './interfaces';
import { SkillStatusEnum } from './constants';
import { IModifier } from 'src/Root';

export class Skill extends AbstractStructure<ISubtree, null> implements ISkill {
	public children = null;
	public parent: ISubtree | null = null;
	private status: SkillStatusEnum | null = null;

	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly description: SkillDescriptionType,
		public readonly tier: number,
		private readonly price: SkillPriceType,
		private readonly unlockPoints: SkillPointsToAccessType,
		protected modifier: IModifier,
	) {
		super();
	}

	public cleanUp(): void {
		this.setStatus(null);
	}

	public serialize() {
		return {
			id: this.id,
			status: this.getStatus(),
			tier: this.tier,
		};
	}

	public deserialize(entity: ISkillSerialized) {
		this.setStatus(entity.status);
	}

	public getStatus() {
		return this.status;
	}

	public setStatus(status: SkillStatusEnum | null) {
		this.status = status;
		return this;
	}

	public getHigherStatus() {
		switch (this.status) {
			case SkillStatusEnum.BASIC: {
				return SkillStatusEnum.ACED;
			}
			case null: {
				return SkillStatusEnum.BASIC;
			}
			default: {
				return null;
			}
		}
	}

	public getLowerStatus() {
		switch (this.status) {
			case SkillStatusEnum.ACED: {
				return SkillStatusEnum.BASIC;
			}
			case SkillStatusEnum.BASIC: {
				return null;
			}
			default: {
				return null;
			}
		}
	}

	public getUnlockPoints() {
		return this.modifier.getUnlockPoints(this.unlockPoints);
	}

	public getPrice(status?: SkillStatusEnum | null) {
		let statusSrc = typeof status === 'undefined' ? this.getStatus() : status;

		if (statusSrc === null) {
			return 0;
		}

		return statusSrc === SkillStatusEnum.BASIC ? this.price[0] : this.price[1];
	}

	public getInvestedPoints() {
		const status = this.getStatus();

		switch (status) {
			case SkillStatusEnum.BASIC: {
				return this.price[0];
			}
			case SkillStatusEnum.ACED: {
				return this.price[0] + this.price[1];
			}
			default: {
				return 0;
			}
		}
	}

	public buy() {
		if (this.status === SkillStatusEnum.ACED) {
			return false;
		}
		this.setStatus(this.status === null ? SkillStatusEnum.BASIC : SkillStatusEnum.ACED);

		return true;
	}

	public remove() {
		if (this.status === null) {
			return false;
		}

		this.setStatus(this.status === SkillStatusEnum.ACED ? SkillStatusEnum.BASIC : null);

		return true;
	}
}
