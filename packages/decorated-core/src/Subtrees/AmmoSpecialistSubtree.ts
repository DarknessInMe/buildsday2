import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class AmmoSpecialistSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.AMMO_SPECIALIST, 'Ammo Specialist', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FULLY_LOADED, modifier)
				.setName('Fully Loaded')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'Your total ammo capacity is increased by 25%.',
					'Increases the amount of ammo you gain from ammo boxes by 75%. You also gain a 5% base chance to get a throwable from an ammo box. The base chance is increased by 1% for each ammo box you pick up that does not contain a throwable. When a throwable has been found, the chance is reset to its base value.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.EXTRA_LEAD, modifier)
				.setName('Extra Lead')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You can now place 2 ammo bags instead of just one.',
					'Each ammo bag contains 50% more ammunition.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SAW_MASSACRE, modifier)
				.setName('Saw Massacre')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Reducing the wear down of the blades on enemies by 50%.',
					'You can now saw through shield enemies with your OVE9000 portable saw. When killing an enemy with the saw, you have a 50% chance to cause nearby enemies in a 10m radius to panic. Panic will make enemies go into short bursts of uncontrollable fear.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.BULLETSTORM, modifier)
				.setName('Bulletstorm')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Ammo bags placed by you grant players the ability to shoot without depleting their ammunition for up to 5 seconds after interacting with it. The more ammo players replenish, the longer the duration of the effect.',
					'Increases the base duration of the effect by up to 15 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.PORTABLE_SAW, modifier)
				.setName('Portable Saw')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Unlocks the OVE9000 portable saw for you to use as a secondary weapon.',
					'You gain 1 extra saw blade for the OVE9000 portable saw. You replace your saw blades with carbon blades, increasing your saw efficiency by 40%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SCAVENGER, modifier)
				.setName('Scavenger')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Your ammo box pick up range is increased by 50%.',
					'Every 6th enemy you kill will drop an extra ammo box.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
