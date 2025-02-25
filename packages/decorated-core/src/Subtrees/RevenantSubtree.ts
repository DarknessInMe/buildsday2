import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class RevenantSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.REVENANT, 'Revenant', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.MESSIAH, modifier)
				.setName('Messiah')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'While in bleedout, you can revive yourself if you kill an enemy. You only have 1 charge.',
					'Your Messiah charge is replenished whenever you use a doctor bag.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SWAN_SONG, modifier)
				.setName('Swan Song')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Instead of getting downed instantly, you gain the ability to keep on fighting for 3 seconds with a 60% movement penalty before going down.',
					"Increases the duration of Swan Song by 3 seconds. Ammunition won't be depleted while the effect is active.",
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FEIGN_DEATH, modifier)
				.setName('Feign Death')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'When you get downed, you have a 15% chance to instantly get revived.',
					'The chance to get instantly revived is increased by an additional 30%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.RUNNING_FROM_DEATH, modifier)
				.setName('Running From Death')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You reload and swap weapons 100% faster for 10 seconds after being revived.',
					'You move 30% faster for 10 seconds after being revived.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.UP_YOU_GO, modifier)
				.setName('Up You Go')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You take 30% less damage for 10 seconds after being revived.',
					'You receive 40% more health when revived.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.NINE_LIVES, modifier)
				.setName('Nine Lives')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'You gain a 50% increase to bleedout health.',
					'You gain the ability to get downed 1 more time before going into custody.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
