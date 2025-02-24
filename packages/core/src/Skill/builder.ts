import { IModifier } from 'src/Root';
import { SkillDescriptionType, SkillPointsToAccessType, SkillPriceType } from './interfaces';
import { Skill } from './Skill';

export class SkillBuilder {
	private name: string = '';
	private description: SkillDescriptionType = ['', ''];
	private tier: number = 1;
	private unlockPoints: SkillPointsToAccessType = [0, 0];
	private price: SkillPriceType = [1, 2];

	constructor(private readonly id: string, private readonly modifier: IModifier) {}

	public setName(name: string) {
		this.name = name;
		return this;
	}

	public setDescription(description: SkillDescriptionType) {
		this.description = description;
		return this;
	}

	public setTier(tier: number) {
		this.tier = tier;
		return this;
	}

	public setUnlockPoints(unlockPoints: SkillPointsToAccessType) {
		this.unlockPoints = unlockPoints;
		return this;
	}

	public setPrice(price: SkillPriceType) {
		this.price = price;
		return this;
	}

	public build() {
		return new Skill(
			this.id,
			this.name,
			this.description,
			this.tier,
			this.price,
			this.unlockPoints,
			this.modifier,
		);
	}
}
