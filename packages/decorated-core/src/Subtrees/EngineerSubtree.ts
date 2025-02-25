import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class EngineerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.ENGINEER, 'Engineer', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.TOWER_DEFENSE, modifier)
				.setName('Tower Defense')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'You can now carry 1 extra sentry gun.',
					'You can now carry an additional 2 extra sentry guns.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.ENGINEERING, modifier)
				.setName('Engineering')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You can now select a less noisy version of the sentry guns, making them much less likely to be targeted by enemies.',
					'You can now toggle AP rounds on your sentry guns, lowering the rate of fire by 75%, but increasing the damage by 250% and allowing it to pierce through enemies and shields.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.JACK_OF_ALL_TRADES, modifier)
				.setName('Jack Of All Trades')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You deploy and interact with all deployables 100% faster.',
					'You can now equip a second deployable to bring with you. If your deployable is equipped as a secondary deployable, you can only bring half of what you would bring if it was equipped as a primary deployable.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SENTRY_TARGETING_PACKAGE, modifier)
				.setName('Sentry Targeting Package')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your sentry guns gain a 100% increase in accuracy.',
					'Your sentry guns rotation speed is increased by 150%. Your sentry guns also have 50% more ammunition.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.ECO_SENTRY, modifier)
				.setName('Eco Sentry')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'The cost of deploying a sentry gun is reduced by 5%.',
					'Your sentry guns gain 150% increased health.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.THIRD_LAW, modifier)
				.setName('Third Law')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'The cost of deploying a sentry gun is reduced by 5%.',
					'Your sentry guns gain a protective shield.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
