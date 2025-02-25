import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ShotgunnerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.SHOTGUNNER, 'Shotgunner', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.OVERKILL, modifier)
				.setName('Overkill')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'When you kill an enemy with a shotgun or the OVE9000 portable saw, you receive a 75% damage increase for 20 seconds.',
					'The damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FAR_AWAY, modifier)
				.setName('Far Away')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Your accuracy bonus while aiming down sights with Shotguns is increased by 40%.',
					'You gain a 50% increased effective range with Shotguns when aiming down sights.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.CLOSE_BY, modifier)
				.setName('Close By')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You can now hip-fire with your Shotguns while sprinting.',
					'Your rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Shotguns with magazines have their magazine sizes increased by 15 shells.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SHOTGUN_CQB, modifier)
				.setName('Shotgun CQB')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You reload shotguns 15% faster.',
					'You reload shotguns 35% faster. You gain a 125% increase steel sight speed when using Shotguns.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SHOTGUN_IMPACT, modifier)
				.setName('Shotgun Impact')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your weapon stability with all shotguns is increased by 8. You deal 5% more damage with shotguns.',
					'You deal an additional 10% more damage with shotguns.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.UNDERDOG, modifier)
				.setName('Underdog')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'When three or more enemies are within 18 meters of you, you receive a 15% damage bonus that lasts for 7 seconds.',
					'When three or more enemies are within 18 meters of you, you also receive a 10% damage reduction that lasts for 7 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
