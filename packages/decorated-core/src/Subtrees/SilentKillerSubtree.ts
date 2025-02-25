import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class SilentKillerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.SILENT_KILLER, 'Silent Killer', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.UNSEEN_STRIKE, modifier)
				.setName('Unseen Strike')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'If you do not lose any armor or health for 4 seconds, you gain 35% critical hit chance for 6 seconds.',
					'The critical hit chance duration is increased to 18 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.LOW_BLOW, modifier)
				.setName('Low Blow')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You gain a 3% critical hit chance for every 3 points of concealment under 35 up to 30%.',
					'You gain 3% critical hit chance for every 1 point of concealment under 35 up to 30%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.HIGH_VALUE_TARGET, modifier)
				.setName('High Value Target')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Enemies you mark take 15% more damage.',
					'Enemies you mark take an additional 50% damage when further away than 10 meters. Increases the duration of marked enemies by 100% and you can now mark specials by aiming at them with any weapon.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.OPTICAL_ILLUSIONS, modifier)
				.setName('Optical Illusions')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You are 35% less likely to be targeted by enemies.',
					'You gain 1 concealment for each silenced weapon you equip and reduces the concealment penalty of silencers by 2.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.THE_PROFESSIONAL, modifier)
				.setName('The Professional')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain 8 weapon stability and 100% snap to zoom speed increase with silenced weapons.',
					'You gain 12 weapon accuracy with silenced weapons.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SECOND_WIND, modifier)
				.setName('Second Wind')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'When your armor breaks your movement speed is increase by 30% for 5 seconds.',
					'This effect also applies to your crew when triggered.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
