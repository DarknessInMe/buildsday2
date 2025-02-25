import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class OppressorSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.OPPRESSOR, 'Oppressor', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.BODY_EXPERTISE, modifier)
				.setName('Body Expertise')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'30% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
					'90% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.LOCK_N_LOAD, modifier)
				.setName("Lock N' Load")
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You can now hip-fire with your weapons while sprinting.',
					'Killing 2 enemies with SMGs, LMGs, Assault Rifles or Special Weapons set on automatic fire mode will increase your next reload speed by up to 100%. This bonus is reduced by 1% for each bullet above 20 in the total magazine size, down to a minimum of 40% reload speed increase.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SUREFIRE, modifier)
				.setName('Surefire')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Your SMGs, LMGs and Assault Rifles gain 15 more bullets in their magazine. This does not affect the "Lock n\' Load" Ace skill.',
					'Your ranged weapons can now pierce through enemy body armor.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.HEAVY_IMPACT, modifier)
				.setName('Heavy Impact')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your shots have a 5% chance to stagger all enemies except Bulldozers and Captain Winters.',
					'Increase your stagger chance to 20%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FIRE_CONTROL, modifier)
				.setName('Fire Control')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain 12 weapon accuracy while firing from the hip.',
					'Your accuracy penalty is decreased by 20% when shooting while moving.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.STEADY_GRIP, modifier)
				.setName('Steady Grip')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription(['You gain 8 weapon accuracy.', 'You gain 16 weapon stability.'])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
