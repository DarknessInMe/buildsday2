import { AbstractStructure, IStructuredEntity } from 'src/Structure';
import { ISkill } from './interfaces';
import { ISubtree } from 'src/Subtree/redesign';
import { SkillDescriptionType, SkillPointsToAccessType, SkillPriceType } from '../types';
import { SkillStatusEnum } from '../enums';
import { IModifier } from 'src/Root/redesign';

export class Skill extends AbstractStructure implements ISkill {
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
		private modifier: IModifier,
	) {
		super();
	}

	public setParent(parent: ISubtree) {
		super.setParent(parent);

		return this;
	}

	public getStatus() {
		return this.status;
	}

	public setStatus(status: SkillStatusEnum | null) {
		this.status = status;
		return this;
	}

	public getUnlockPoints() {
		return this.modifier.getUnlockPoints(this.unlockPoints);
	}

	public getPrice(status: SkillStatusEnum | null) {
		if (!status) {
			return null;
		}

		return status === SkillStatusEnum.BASIC ? this.price[0] : this.price[1];
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
