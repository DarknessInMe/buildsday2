import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class TankSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.TANK, 'Tank', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.IRON_MAN, modifier)
				.setName('Iron Man')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'Your total armor values is increased by 30%.',
					'Unlocks the ability to wear the Improved Combined Tactical Vest.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SHOCK_AND_AWE, modifier)
				.setName('Shock And Awe')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Increases the armor recovery rate for you and your crew by 25%.',
					'Enables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons knock back chance is increased the higher the total damage of the weapon is. Melee weapons knock back chance is 100%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.BULLSEYE, modifier)
				.setName('Bullseye')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You regenerate 5 armor for each successful headshot. This effect cannot occur more than once every 2 seconds.',
					'You regenerate an additional 20 armor for each successful headshot.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.DIE_HARD, modifier)
				.setName('Die Hard')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You take 50% less damage while interacting with objects.',
					'Increases the armor of all Ballistic vests by 20.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.TRANSPORTER, modifier)
				.setName('Transporter')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You can throw bags 50% further.',
					'For each 10 armor points the bag movement penalty is reduced by 1%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.RESILIENCE, modifier)
				.setName('Resilience')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Increase your armor recovery rate by 15%.',
					'Reduce the visual effect duration of Flashbangs by 75%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
