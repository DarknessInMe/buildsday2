import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class BreacherSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.BREACHER, 'Breacher', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FIRE_TRAP, modifier)
				.setName('Fire Trap')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'Your trip mines now spread fire around the area of detonation for 10 seconds in a 4 meter diameter.',
					'Increases the fire effect duration by 10 seconds and increases the fire effect radius by 50%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.MORE_FIREPOWER, modifier)
				.setName('More Firepower')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You gain 1 more shaped charge and 4 more trip mines.',
					'You gain 2 more shaped charges and 7 more trip mines.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.KICKSTARTER, modifier)
				.setName('Kickstarter')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Your drills and saws gain an additional 20% chance to automatically restart after breaking.',
					'Enables the ability to reset a broken drill or saw with a melee attack. The ability has a 50% chance to fix the drill or saw. The ability can only be used once per time the drill or saw is broken.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.COMBAT_ENGINEERING, modifier)
				.setName('Combat Engineering')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'The radius of your trip mine explosion is increase by 30%.',
					'Your trip mine damage is increase by 50%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.DRILL_SAWGEANT, modifier)
				.setName('Drill Sawgeant')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your drill and saw timer is decreased by 15%.',
					'Your drill and saw timer is decreased by an additional 15%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.HARDWARE_EXPERT, modifier)
				.setName('Hardware Expert')
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
